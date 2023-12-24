import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CONFIG_OPTIONS, OpenAIOptions } from '../interface/options.interface';

@Injectable()
export class OpenaiClientProvider {
  public openAI: OpenAI;

  constructor(
    @Inject(CONFIG_OPTIONS)
    private readonly config: OpenAIOptions,
  ) {
    this.openAI = new OpenAI({
      apiKey: config.apiKey,
    });
  }
}
