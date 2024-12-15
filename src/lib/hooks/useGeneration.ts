import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { checkUserCredits, deductUserCredits, generateAdContent } from '@/lib/api/supabase';
import { GENERATION_CREDITS, GenerationType } from '@/lib/constants/credits';
import { supabase } from '@/integrations/supabase/client';

interface UseGenerationOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: Error) => void;
}

export function useGeneration(type: GenerationType, options: UseGenerationOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const generate = async (payload: any) => {
    setIsLoading(true);
    try {
      // Get current user
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('User not authenticated');

      // Check credits
      const creditCheck = await checkUserCredits(user.id, GENERATION_CREDITS[type]);
      if (!creditCheck.has_credits) {
        throw new Error(creditCheck.error_message || 'Insufficient credits');
      }

      // Generate content
      const result = await generateAdContent(type, payload);

      // Deduct credits
      await deductUserCredits(user.id, GENERATION_CREDITS[type]);

      options.onSuccess?.(result);
      return result;
    } catch (error) {
      console.error(`Error in ${type} generation:`, error);
      const message = error instanceof Error ? error.message : 'An unexpected error occurred';
      
      toast({
        title: `Generation Failed`,
        description: message,
        variant: "destructive",
      });

      options.onError?.(error as Error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generate,
    isLoading
  };
}