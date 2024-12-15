import { useGeneration } from './useGeneration';
import type { BusinessIdea, TargetAudience, MarketingCampaign, AdImage } from '@/types/adWizard';

interface UseImageGenerationOptions {
  onSuccess?: (images: AdImage[]) => void;
  onError?: (error: Error) => void;
}

export function useImageGeneration(options: UseImageGenerationOptions = {}) {
  const { generate, isLoading } = useGeneration('images', {
    onSuccess: (data) => options.onSuccess?.(data.images),
    onError: options.onError,
  });

  const generateImages = async (
    businessIdea: BusinessIdea,
    targetAudience: TargetAudience,
    campaign: MarketingCampaign
  ) => {
    return generate({ businessIdea, targetAudience, campaign });
  };

  return {
    generateImages,
    isGenerating: isLoading
  };
}