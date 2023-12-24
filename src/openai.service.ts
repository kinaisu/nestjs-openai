import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CONFIG_OPTIONS } from './interface/options.interface';
import { OpenaiClientProvider } from './provider/openai-client.provider';
import { Message } from './dto/message.dto';

@Injectable()
export class OpenaiService {
  openAI: OpenAI;

  constructor(
    @Inject(CONFIG_OPTIONS) private readonly config,
    private readonly openAIClientProvider: OpenaiClientProvider,
  ) {
    this.openAI = this.openAIClientProvider.openAI;
  }

  async chatUsage(
    messages: Message[],
    userId: string,
    temperature?: 1,
    numberOfCompletions?: 1,
  ): Promise<OpenAI.Chat.Completions.ChatCompletionMessage> {
    const completion: OpenAI.Chat.Completions.ChatCompletion =
      await this.openAI.chat.completions.create({
        model: this.config.model,
        user: userId,
        messages,
        temperature,
        n: numberOfCompletions,
      });

    return completion.choices[0].message;
  }
}
