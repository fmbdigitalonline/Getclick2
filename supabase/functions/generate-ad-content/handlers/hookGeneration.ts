import { generateMarketingPrompt } from "../lib/marketing/prompts.ts";
import { determineAwarenessLevel, generateMarketingAngles } from "../lib/marketing/angles.ts";
import { generateHookFromAngle } from "../lib/marketing/hooks.ts";

export async function handleHookGeneration(businessIdea: any, targetAudience: any, openAIApiKey: string) {
  try {
    console.log('Starting hook generation with enhanced marketing angles...');

    const prompt = generateMarketingPrompt(businessIdea, targetAudience, targetAudience.audienceAnalysis);
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert marketing strategist specializing in audience-aware marketing angles and hooks.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.8,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0].message.content.trim();
    const hooks = JSON.parse(content);

    // Validate and enhance the hooks
    const enhancedHooks = hooks.map(hook => ({
      text: hook.hook.text,
      description: `${hook.angle.type}: ${hook.angle.strategy}`,
      marketingAngle: {
        type: hook.angle.type,
        focus: hook.angle.focus,
        strategy: hook.angle.strategy
      },
      hookDetails: {
        pattern: hook.hook.pattern,
        rationale: hook.hook.rationale
      }
    }));

    console.log('Generated enhanced hooks:', enhancedHooks);
    return { hooks: enhancedHooks };
  } catch (error) {
    console.error('Error in hook generation:', error);
    throw error;
  }
}