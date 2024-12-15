import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { User } from "@supabase/supabase-js";

interface ProfileSectionProps {
  user: User | null;
  onSignOut: () => void;
}

export const ProfileSection = ({ user, onSignOut }: ProfileSectionProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Settings</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={user?.email || ""}
            disabled
          />
        </div>
        <Button variant="destructive" onClick={onSignOut}>
          Sign Out
        </Button>
      </CardContent>
    </Card>
  );
};