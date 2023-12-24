export const CONFIG_OPTIONS = 'CONFIG_OPTIONS';

export interface OpenAIOptions {
  apiKey: string;
  model: string;
}

export interface OpenAIAsyncOptions {
  imports?: any[];
  inject?: any[];
  useFactory: (...args: any[]) => Promise<OpenAIOptions> | OpenAIOptions;
}
