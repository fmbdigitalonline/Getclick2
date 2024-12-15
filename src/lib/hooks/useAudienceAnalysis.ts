import { useGeneration } from './useGeneration';
import type { BusinessIdea, TargetAudience, AudienceAnalysis } from '@/types/adWizard';

interface UseAudienceAnalysisOptions {
  onSuccess?: (analysis: AudienceAnalysis) => void;
  onError?: (error: Error) => void;
}

export function useAudienceAnalysis(options: UseAudienceAnalysisOptions = {}) {
  const { generate, isLoading } = useGeneration('audience_analysis', {
    onSuccess: (data) => options.onSuccess?.(data.analysis),
    onError: options.onError,
  });

  const generateAnalysis = async (businessIdea: BusinessIdea, targetAudience: TargetAudience) => {
    return generate({ businessIdea, targetAudience });
  };

  return {
    generateAnalysis,
    isGenerating: isLoading
  };
}