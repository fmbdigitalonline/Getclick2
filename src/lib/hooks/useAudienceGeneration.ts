import { useGeneration } from './useGeneration';
import type { BusinessIdea, TargetAudience } from '@/types/adWizard';

interface UseAudienceGenerationOptions {
  onSuccess?: (audiences: TargetAudience[]) => void;
  onError?: (error: Error) => void;
}

export function useAudienceGeneration(options: UseAudienceGenerationOptions = {}) {
  const { generate, isLoading } = useGeneration('audience', {
    onSuccess: (data) => options.onSuccess?.(data.audiences),
    onError: options.onError,
  });

  const generateAudiences = async (businessIdea: BusinessIdea) => {
    return generate({ businessIdea });
  };

  return {
    generateAudiences,
    isGenerating: isLoading
  };
}