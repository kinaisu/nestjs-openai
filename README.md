<p align="center">
    <a href="#" target="blank"><img src="assets/img/logo.svg" width="200" alt="All-Inclusive Digital Logo"></a>
</p>

<h1 align="center">OpenAI Node API Library from NestJS</h1> 

<p align="center">
    <!--<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@all-inclusive/core.svg" alt="NPM Version" /></a>
    <a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>-->
</p>

## Description

This library provides convenient access to the OpenAI REST API from NestJS.

## Installation

```bash
$ npm i @all-inclusive/nestjs-openai
```
## Usage

In a parent module "forRoot"

```ts
import { OpenAiModule, Models } from "@all-inclusive/nestjs-openai";

@Module({
  imports: [
    OpenAiModule.forRoot({
      apiKey: 'YOUR_OPEN_AI_API_KEY',
      model: Models.GPT4
    })
  ],
})
class AppModule {}
```

In a parent module "forRootAsync"

```ts
import { OpenAiModule, Models } from "@all-inclusive/nestjs-openai";

@Module({
  imports: [
    OpenAiModule.forRootAsync(      
      {
        inject: [...any],
        useFactory: {
          apiKey: 'YOUR_OPEN_AI_API_KEY',
          model: Models.GPT4,
        },
    })
  ],
})
class AppModule {}
```