import { DynamicModule, Global, Module } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import { OpenaiClientProvider } from './provider/openai-client.provider';
import {
  CONFIG_OPTIONS,
  OpenAIAsyncOptions,
  OpenAIOptions,
} from './interface/options.interface';

@Global()
@Module({})
export class OpenAIModule {
  static forRoot(options: OpenAIOptions): DynamicModule {
    return {
      module: OpenAIModule,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useValue: options,
        },
        OpenaiClientProvider,
        OpenaiService,
      ],
      exports: [OpenaiService],
    };
  }

  static forRootAsync(asyncOptions: OpenAIAsyncOptions): DynamicModule {
    return {
      module: OpenAIModule,
      imports: asyncOptions.imports,
      providers: [
        {
          provide: CONFIG_OPTIONS,
          useFactory: asyncOptions.useFactory,
          inject: asyncOptions.inject || [],
        },
        OpenaiClientProvider,
        OpenaiService,
      ],
      exports: [OpenaiService],
    };
  }
}
