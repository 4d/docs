---
id: compatible-openai
title: Providers
---

# Providers

Many AI providers propose an OpenAI-like API, so you can use this project to connect to them.

To do so you just have to change the original `baseURL` by the service one and use their api key if needed.

## Remote

|Provider|Base url|
|-|-|
|https://mistral.ai/|https://api.mistral.ai/v1|
|https://www.deepseek.com/|https://api.deepseek.com| 
|https://www.anthropic.com/ (claude)|https://api.anthropic.com/v1|
|https://docs.api.nvidia.com/|https://integrate.api.nvidia.com/v1|
|https://gemini.google.com/|https://generativelanguage.googleapis.com/v1beta/openai|
|https://groq.com/|https://api.groq.com/openai/v1| 
|https://ai.azure.com/|https://YOUR_RESOURCE_NAME.openai.azure.com|
|[https://www.alibabacloud.com/](https://www.alibabacloud.com/help/en/model-studio/developer-reference/use-qwen-by-calling-api) (qwen)| https://dashscope-intl.aliyuncs.com/compatible-mode/v1|
|https://www.perplexity.ai/|https://api.perplexity.ai| 

## Local

| Provider           | Default base url          | Doc                                           |
|------------------  |---------------------------|-----------------------------------------------|
|https://ollama.com/ | http://127.0.0.1:11434/v1 | https://ollama.com/blog/openai-compatibility  |
|https://lmstudio.ai/| http://localhost:1234/v1  | https://lmstudio.ai/docs/api/endpoints/openai |
|https://localai.io/ | http://127.0.0.1:8080     |  |
