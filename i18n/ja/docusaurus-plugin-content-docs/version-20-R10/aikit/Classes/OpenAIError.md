---
id: openaierror
title: OpenAIError Class
---

# OpenAIError Class

`OpenAIError` クラスはOpen AI API によって返されたエラーを管理するように設計されています。 これはエラーレスポンスから関連のある情報を抽出し、この情報にアクセスするための方法を提供します。

## プロパティ

### エラープロパティ

| プロパティ     | 型       | 説明                                |
| --------- | ------- | --------------------------------- |
| `errCode` | Integer | API または HTTP ステータスから返されたエラーコード。   |
| `message` | Text    | API または HTTP ステータスから返されたエラーメッセージ。 |

### HTTP レスポンスプロパティ

| プロパティ        | 型       | 説明                      |
| ------------ | ------- | ----------------------- |
| `response`   | Object  | 完全なレスポンスオブジェクト。         |
| `status`     | Integer | レスポンスのHTTP ステータスコード。    |
| `statusText` | Text    | HTTP レスポンスのステータステキスト。   |
| `body`       | Object  | エラーレスポンスの本文。            |
| `headers`    | Object  | エラーレスポンスのヘッダー。          |
| `requestID`  | Text    | エラーレスポンスヘッダーからのリクエストID。 |

### OpenAI 特有のプロパティ

| プロパティ   | 型       | 説明                                            |
| ------- | ------- | --------------------------------------------- |
| `code`  | Variant | API によって返されたエラーコード。                           |
| `type`  | Text    | API によって返されたエラーの種類。                           |
| `param` | Text    | エラーを引き起こしたパラメーター(可能な場合のみ)。 |

### HTTP ステータスコード情報

| プロパティ                        | 型       | 説明                                      |
| ---------------------------- | ------- | --------------------------------------- |
| `isBadRequestError`          | Boolean | エラーが400 Bad Request エラーであるかどうかを示します。    |
| `isAuthenticationError`      | Boolean | エラーが401 認証エラーであるかを示します。                 |
| `isPermissionDeniedError`    | Boolean | エラーが403 接続拒否エラーであるかどうかを示します。            |
| `isNotFoundError`            | Boolean | エラーが404 Not Found エラーであるかどうかを示します。      |
| `isUnprocessableEntityError` | Boolean | エラーが422 処理不可能エンティティエラーであるかどうかを示します。     |
| `isRateLimitError`           | Boolean | エラーが429 レート制限エラーであるかどうかを示します。           |
| `isInternalServerError`      | Boolean | エラーが500 あるいはそれ以上の内部サーバーエラーであるかどうかを示します。 |