---
id: compatible-openai
title: Providers
---

# Providers

Many AI providers propose an OpenAI-like API, so you can use this project to connect to them.

To do so you just have to change the original `baseURL` by the service one and use their api key if needed.

## Remote

| Provider                                                                                                                                                                                                 | Base url                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://mistral.ai/ja/                                                                                                                                                   | https://api.mistral.ai/v1/ja                                                                          |
| https://www.deepseek.com/ja/                                                                                                                             | https://api.deepseek.com/ja                                                                           |
| https://www.anthropic.com/ (claude)                                                                                                   | https://api.anthropic.com/v1/ja                                                                       |
| https://docs.api.nvidia.com/ja/                                                                                                          | https://integrate.api.nvidia.com/v1/ja                                                |
| https://gemini.google.com/ja/                                                                                                                            | https://generativelanguage.googleapis.com/v1beta/openai                                               |
| https://groq.com/ja/                                                                                                                                                     | https://api.groq.com/openai/v1/ja                                                                     |
| https://ai.azure.com/ja/                                                                                                                                 | https://YOUR_RESOURCE_NAME.openai.azure.com |
| [https://www.alibabacloud.com/](https://www.alibabacloud.com/help/en/model-studio/developer-reference/use-qwen-by-calling-api) (qwen) | https://dashscope-intl.aliyuncs.com/compatible-mode/v1                                                |
| https://www.perplexity.ai/ja/                                                                                                                            | https://api.perplexity.ai/ja                                                                          |

## ローカル

| Provider                                                | Default base url                                                                                          | Doc                                                                           |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| https://ollama.com/ja/  | http://127.0.0.1:11434/v1 | https://ollama.com/blog/openai-compatibility  |
| https://lmstudio.ai/ja/ | http://localhost:1234/v1                                                  | https://lmstudio.ai/docs/api/endpoints/openai |
| https://localai.io/ja/  | http://127.0.0.1:8080     |                                                                               |
