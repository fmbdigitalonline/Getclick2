import { useGeneration } from './useGeneration';
import type { BusinessIdea, TargetAudience, AdHook } from '@/types/adWizard';

interface UseHookGenerationOptions {
  onSuccess?: (hooks: AdHook[]) => void;
  onError?: (error: Error) => void;
}

export function useHookGeneration(options: UseHookGenerationOptions = {}) {
  const { generate, isLoading } = useGeneration('hooks', {
    onSuccess: (data) => options.onSuccess?.(data.hooks),
    onError: options.onError,
  });

  const generateHooks = async (businessIdea: BusinessIdea, targetAudience: TargetAudience) => {
    return generate({ businessIdea, targetAudience });
  };

  return {
    generateHooks,
    isGenerating: isLoading
  };
}