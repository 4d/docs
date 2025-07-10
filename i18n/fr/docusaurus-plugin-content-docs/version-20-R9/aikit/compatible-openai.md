---
id: compatible-openai
title: Fournisseurs (Providers)
---

# Fournisseurs (Providers)

De nombreux fournisseurs d'IA proposent une API de type OpenAI, vous pouvez donc utiliser ce projet pour vous y connecter.

Pour ce faire, il suffit de remplacer le `baseURL` original par celui du service et d'utiliser leur clé d'api si nécessaire.

## Distant

| Fournisseur                                                                                                                                                                                              | Url de base                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://mistral.ai/                                                                                                                                                      | https://api.mistral.ai/v1                                                                             |
| https://www.deepseek.com/                                                                                                                                | https://api.deepseek.com                                                                              |
| https://www.anthropic.com/ (claude)                                                                                                   | https://api.anthropic.com/v1                                                                          |
| https://docs.api.nvidia.com/                                                                                                             | https://integrate.api.nvidia.com/v1                                                   |
| https://gemini.google.com/                                                                                                                               | https://generativelanguage.googleapis.com/v1beta/openai                                               |
| https://groq.com/                                                                                                                                                        | https://api.groq.com/openai/v1                                                                        |
| https://ai.azure.com/                                                                                                                                    | https://YOUR_RESOURCE_NAME.openai.azure.com |
| [https://www.alibabacloud.com/](https://www.alibabacloud.com/help/en/model-studio/developer-reference/use-qwen-by-calling-api) (qwen) | https://dashscope-intl.aliyuncs.com/compatible-mode/v1                                                |
| https://www.perplexity.ai/                                                                                                                               | https://api.perplexity.ai                                                                             |

## Local

| Fournisseur                                          | Url de base par défaut                                                                                    | Doc                                                                           |
| ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| https://ollama.com/  | http://127.0.0.1:11434/v1 | https://ollama.com/blog/openai-compatibility  |
| https://lmstudio.ai/ | http://localhost:1234/v1                                                  | https://lmstudio.ai/docs/api/endpoints/openai |
| https://localai.io/  | http://127.0.0.1:8080     |                                                                               |
