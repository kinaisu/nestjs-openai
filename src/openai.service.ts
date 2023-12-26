import { Inject, Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { CONFIG_OPTIONS } from './interface/options.interface';
import { OpenaiClientProvider } from './provider/openai-client.provider';
import { Message } from './dto/message.dto';
import * as process from 'process';

@Injectable()
export class OpenaiService {
  openAI: OpenAI;

  constructor(
    @Inject(CONFIG_OPTIONS) private readonly config,
    private readonly openAIClientProvider: OpenaiClientProvider,
  ) {
    this.openAI = this.openAIClientProvider.openAI;
  }

  async chat(messages: Message[], userId: string, temperature?: 1, n?: 1) {
    const completion = await this.openAI.chat.completions.create({
      model: this.config.model,
      user: userId,
      messages,
      temperature,
      n,
    });

    return completion.choices[0].message;
  }

  async stream(messages: Message[], userId: string, temperature?: 1, n?: 1) {
    const stream = this.openAI.beta.chat.completions.stream({
      model: this.config.model,
      user: userId,
      messages,
      temperature,
      n,
    });

    stream.on('content', (delta: string) => {
      process.stdout.write(delta);
    });

    return await stream.finalChatCompletion();
  }
}
