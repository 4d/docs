---
id: openai
title: OpenAI
---

# OpenAI

`OpenAI` クラスは、様々なOpenAI API リソースにアクセスするためのクライアントを提供します。 これにはAPI 設定を管理するプロパティやOpenAI エンドポイントへの HTTPリクエストを実行するためのメソッドなどが含まれます。

## 設定プロパティ

| プロパティ名    | 型    | 説明                                                         | 任意          |
| --------- | ---- | ---------------------------------------------------------- | ----------- |
| `apiKey`  | Text | あなたの [OpenAI API キー](https://platform.openai.com/api-keys) | OpenAI では必須 |
| `baseURL` | Text | OpenAI API リクエストのためのベースURL。                                | ◯           |
| `組織`      | Text | あなたの OpenAI 組織 ID。                                         | ◯           |
| `project` | Text | あなたの OpenAI プロジェクト ID。                                     | ◯           |

### Additional HTTP properties

| プロパティ名          | 型                                                                                | 説明                                                                   |
| --------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `timeout`       | Real                                                                             | Time in seconds before timeout occurs.               |
| `maxRetries`    | Real                                                                             | Maximum number of retry attempts in case of failure. |
| `httpAgent`     | [4D.HTTPAgent](https://developer.4d.com/docs/API/HTTPAgentClass) | HTTP agent used for making requests.                 |
| `customHeaders` | Real                                                                             | Custom headers to be included in the HTTP requests.  |

### Class constructor

Create an instance of the OpenAI client class.

| Argument Name | 型              | 説明                                                                                              |
| ------------- | -------------- | ----------------------------------------------------------------------------------------------- |
| *apiKey*      | Text or Object | apiKey if Text as first argument and the second can be an Object of parameters. |

#### API key

```4d
// as text
var $client:=cs.AIKit.OpenAI.new("your api key")
// as object
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"})
```

#### Server URL

For a [compatible provider](../compatible-openai.md) API, you can configure the server URL.

```4d
var $client:=cs.AIKit.OpenAI.new({apiKey: "your api key"; baseURL: "https://server.ai"})
```

or after creating an instance

```4d
$client.baseURL:="https://server.ai"
```

## API resources

The API provides access to multiple resources that allow seamless interaction with OpenAI's services. Each resource is encapsulated within a dedicated API class, offering a structured and intuitive way to interact with different functionalities.

| プロパティ名        | 型                                               | 説明                                             |
| ------------- | ----------------------------------------------- | ---------------------------------------------- |
| `models`      | [OpenAIModelsAPI](OpenAIModelsAPI.md)           | Access to the Models API.      |
| `chat`        | [OpenAIChatAPI](OpenAIChatAPI.md)               | Access to the Chat API.        |
| `images`      | [OpenAIImagesAPI](OpenAIImagesAPI.md)           | Access to the Images API.      |
| `moderations` | [OpenAIModerationsAPI](OpenAIModerationsAPI.md) | Access to the Moderations API. |

### Example Usage

```4d
$client.chat.completions.create(...)
$client.images.generate(...)
$client.model.lists(...)
```
