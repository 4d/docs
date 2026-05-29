---
id: openairesult
title: OpenAIResult
---

# OpenAIResult

`OpenAIResult` クラスはHTTP リクエストからのレスポンスを管理するために設計されており、リクエストの成否の評価、本文コンテンツの取得、そして処理中に起きたかもしれないあらゆるエラーの収集などの機能を提供します。

## プロパティ

| プロパティ     | 型                                                                                    | 説明               |
| --------- | ------------------------------------------------------------------------------------ | ---------------- |
| `request` | [4D.HTTPRequest](https://developer.4d.com/docs/API/HTTPRequestClass) | The HTTP request |

## 計算プロパティ

| プロパティ        | 型          | 説明                                                                                                         |
| ------------ | ---------- | ---------------------------------------------------------------------------------------------------------- |
| `success`    | Boolean    | HTTP リクエストが成功したかどうかを示すブール値。                                                                                |
| `errors`     | Collection | エラーのコレクションを返します。 これのエラーはネットワークエラーまたはOpenAI から返されたエラーである可能性があります。                                           |
| `terminated` | Boolean    | HTTP リクエストが終了したかどうかを示すブール値。                                                                                |
| `headers`    | Object     | レスポンスのヘッダーをオブジェクトとして返します。                                                                                  |
| `rateLimit`  | Object     | レスポンスヘッダーからのレート制限情報を返します。                                                                                  |
| `usage`      | Object     | Returns usage information (token counts) from the response body if any. |

### usage

The `usage` property returns an object containing token usage information from the API response. The structure varies depending on the API endpoint used.

> **Note:** Different OpenAI-compatible services may return different fields in the usage object. The structure documented here is based on OpenAI's API. Not all fields may be present in responses from other providers.

See the specific result class documentation for endpoint-specific usage structures:

- [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md#usage) - Chat completions usage
- [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md#usage) - Streaming chat usage
- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md#usage) - Embeddings usage
- [OpenAIImagesResult](OpenAIImagesResult.md#usage) - Image generation usage

### rateLimit

`rateLimit` プロパティはレスポンスヘッダーからのレート制限情報を格納しているオブジェクトを返します。
この情報には上限、残りのリクエスト、そしてリクエストとトークン両方のリセットまでの時間が含まれます。

レート制限と使用される特定のヘッダーの詳細な情報については、[OpenAI のレート制限についてのドキュメンテーション](https://developers.openai.com/api/docs/guides/rate-limits#rate-limits-in-headers) を参照してください。

`rateLimit` オブジェクトの構造は以下のようになっています:

| フィールド               | 型       | 説明                     |
| ------------------- | ------- | ---------------------- |
| `limit.request`     | Integer | 許可されたリクエスト数。           |
| `limit.tokens`      | Integer | 許可されたトークン数。            |
| `remaining.request` | Integer | 残りのリクエスト数。             |
| `remaining.tokens`  | Integer | 残りのトークン数。              |
| `reset.request`     | 文字列     | リクエストの制限がリセットされるまでの時間。 |
| `reset.tokens`      | 文字列     | トークンの制限がリセットされるまでの時間。  |

## 関数

### `throw()`

`errors` コレクション内の最初のエラーをスローします。 この関数は呼び出しスタック内のエラーを辿っていくのに有用です。

## 継承クラス

特定の用途のためにこのクラスの機能を拡張するために、いくつかのクラスが`OpenAIResult` クラスを継承します。 `OpenAIResult` 以下はクラスを拡張するクラスの一部です:

- [OpenAIChatCompletionsResult](OpenAIChatCompletionsResult.md)
- [OpenAIChatCompletionsStreamResult](OpenAIChatCompletionsStreamResult.md)
- [OpenAIImagesResult](OpenAIImagesResult.md)
- [OpenAIModelResult](OpenAIModelResult.md)
- [OpenAIModelListResult](OpenAIModelListResult.md)
- [OpenAIModerationResult](OpenAIModerationResult.md)
- [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)
