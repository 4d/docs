---
id: openai
title: OpenAI
---

# OpenAI

The `OpenAI` class provides a client for accessing various OpenAI API resources. It includes properties for managing API configurations and methods for performing HTTP requests to the OpenAI endpoints.

## Configuration Properties

| Property Name     | Type  | Description                       | Optional |
|-------------------|-------|-----------------------------------|----------|
| `apiKey`          | Text  | Your [OpenAI API Key](https://platform.openai.com/api-keys).              | Can be required by the provider	   |
| `baseURL`         | Text  | Base URL for OpenAI API requests. | Yes (if omitted = use OpenAI provider)|
| `organization`    | Text  | Your OpenAI Organization ID.      | Yes      |
| `project`         | Text  | Your OpenAI Project ID.           | Yes      |

### Additional HTTP properties

| Property Name     | Type  | Description                       |
|-------------------|-------|-----------------------------------|
| `timeout`         | Real  | Time in seconds before timeout occurs. | 
| `maxRetries`      | Real  | Maximum number of retry attempts in case of failure. | 
| `httpAgent`      | [4D.HTTPAgent](https://developer.4d.com/docs/API/HTTPAgentClass)  | HTTP agent used for making requests. | 
| `customHeaders`      | Real  | Custom headers to be included in the HTTP requests. | 

### Class constructor

Create an instance of the OpenAI client class.

| Argument Name | Type      | Description                                               |
|---------------|-----------|-----------------------------------------------------------|
| `apiKey or configuration` | Text or Object  | apiKey if Text or configuration Object. |

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

| Property Name     | Type                                            | Description                    |
|-------------------|-------------------------------------------------|--------------------------------|
| `models`          | [OpenAIModelsAPI](OpenAIModelsAPI.md)           | Access to the Models API.      |
| `chat`            | [OpenAIChatAPI](OpenAIChatAPI.md)               | Access to the Chat API.        |
| `images`          | [OpenAIImagesAPI](OpenAIImagesAPI.md)           | Access to the Images API.      |
| `moderations`     | [OpenAIModerationsAPI](OpenAIModerationsAPI.md) | Access to the Moderations API. |
| `embeddings`      | [OpenAIEmbeddingsAPI](OpenAIEmbeddingsAPI.md)   | Access to the Embeddings API.  |

### Example Usage

```4d
$client.chat.completions.create(...)
$client.images.generate(...)
$client.model.lists(...)
```
