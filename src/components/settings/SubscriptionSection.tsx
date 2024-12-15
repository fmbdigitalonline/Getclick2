import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SubscriptionSectionProps {
  subscription: {
    plan: {
      name: string;
      credits: number;
    };
    credits_remaining: number;
    current_period_end: string;
  } | null;
  isLoading: boolean;
  onManageSubscription: () => void;
  onUpgrade: () => void;
}

export const SubscriptionSection = ({
  subscription,
  isLoading,
  onManageSubscription,
  onUpgrade,
}: SubscriptionSectionProps) => {
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <div>Loading subscription details...</div>
        </CardContent>
      </Card>
    );
  }

  if (!subscription) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>You don't have an active subscription.</p>
          <Button onClick={onUpgrade} className="w-full">
            Upgrade Now
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Subscription</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-medium">Current Plan</span>
            <span className="text-lg font-semibold">{subscription.plan.name}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Credits Remaining</span>
            <span className="text-lg font-semibold">{subscription.credits_remaining}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Renewal Date</span>
            <span>{new Date(subscription.current_period_end).toLocaleDateString()}</span>
          </div>
        </div>
        <Button onClick={onManageSubscription} className="w-full">
          Manage Subscription
        </Button>
      </CardContent>
    </Card>
  );
};