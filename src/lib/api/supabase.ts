import { supabase } from "@/integrations/supabase/client";

export async function checkUserCredits(userId: string, requiredCredits: number) {
  const { data, error } = await supabase.rpc(
    'check_user_credits',
    { 
      p_user_id: userId,
      required_credits: requiredCredits 
    }
  );

  if (error) throw error;
  return data[0];
}

export async function deductUserCredits(userId: string, credits: number) {
  const { data, error } = await supabase.rpc(
    'deduct_user_credits',
    { 
      input_user_id: userId,
      credits_to_deduct: credits 
    }
  );

  if (error) throw error;
  return data[0];
}

export async function generateAdContent(type: string, payload: any) {
  const { data, error } = await supabase.functions.invoke('generate-ad-content', {
    body: { type, ...payload }
  });

  if (error) {
    console.error('Generation error:', error);
    throw new Error(`Failed to generate ${type}: ${error.message}`);
  }

  return data;
}