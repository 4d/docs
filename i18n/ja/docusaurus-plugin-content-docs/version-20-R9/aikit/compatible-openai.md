---
id: compatible-openai
title: プロバイダ
---

# プロバイダ

多くのAI プロバイダがOpenAI に似たAPI を提供しているので、このプロジェクトを使用してそれらに接続することができます。

そのためには元の `baseURL` をサービスのものに変更し、必要であればそのサービスのAPI キーを使用するだけです。

## リモート

| プロバイダ                                                                                                                                                                                                    | ベースURL                                                                                                                                                |
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

| プロバイダ                                                   | デフォルトのベースURL                                                                                              | ドキュメント                                                                        |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| https://ollama.com/ja/  | http://127.0.0.1:11434/v1 | https://ollama.com/blog/openai-compatibility  |
| https://lmstudio.ai/ja/ | http://localhost:1234/v1                                                  | https://lmstudio.ai/docs/api/endpoints/openai |
| https://localai.io/ja/  | http://127.0.0.1:8080     |                                                                               |
