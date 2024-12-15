import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";
import { ProfileSection } from "@/components/settings/ProfileSection";
import { SubscriptionSection } from "@/components/settings/SubscriptionSection";

const Settings = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, []);

  const { data: subscription, isLoading: isLoadingSubscription } = useQuery({
    queryKey: ['subscription'],
    queryFn: async () => {
      if (!user?.id) return null;

      const { data, error } = await supabase
        .from('subscriptions')
        .select(`
          *,
          plan:plans(
            name,
            price,
            credits
          )
        `)
        .eq('user_id', user.id)
        .eq('active', true)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const handleManageSubscription = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('create-portal-session', {
        body: { returnUrl: window.location.href }
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Portal session error:', error);
      toast({
        title: "Error",
        description: "Failed to open subscription management portal.",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleUpgrade = () => {
    navigate('/pricing');
  };

  return (
    <div className="container mx-auto py-6">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Settings</h2>
      <div className="grid gap-6">
        <ProfileSection 
          user={user} 
          onSignOut={handleSignOut} 
        />
        <SubscriptionSection
          subscription={subscription}
          isLoading={isLoadingSubscription}
          onManageSubscription={handleManageSubscription}
          onUpgrade={handleUpgrade}
        />
      </div>
    </div>
  );
};

export default Settings;