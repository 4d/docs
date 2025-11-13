---
id: openaiembeddingsapi
title: OpenAIEmbeddingsAPI
---

# OpenAIEmbeddingsAPI

`OpenAIEmbeddingsAPI` ofrece funcionalidades para crear integraciones utilizando la API de OpenAI.

https://platform.openai.com/docs/api-reference/embeddings

## Funciones

### create()

**create**(*input* : Text; *model*: Text; *parameters* : OpenAIEmbeddingsParameters) : OpenAIEmbeddingsResult

Crea una representación vectorial para la entrada, el modelo y los parámetros ofrecidos.

| Argumento    | Tipo                                                        | Descripción                                                                                                                                                                                                         |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| *entrada*    | Texto o colección de texto                                  | La entrada a vectorizar.                                                                                                                                                                            |
| *model*      | Text                                                        | El [modelo a utilizar] (https://platform.openai.com/docs/guides/embeddings#embedding-models) |
| *parámetros* | [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md) | Los parámetros para personalizar la petición de representaciones vectoriales.                                                                                                                       |
| Resultado    | [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)         | Las integraciones.                                                                                                                                                                                  |

#### Ejemplos de uso

##### Obtener el vector de una sola entrada de texto

```4d
var $result:=$client.embeddings.create("it rains cats and dogs"; "text-embedding-ada-002")
var $vector: 4D.Vector:=$result.vector
// or var $embedding: cs.AIKit.OpenAIEmbedding:=$result.embedding
```

##### Obtener vectores para una colección de entradas de texto

```4d
var $inputs:=["it rains cats and dogs"; "il pleut à boire debout"]
var $result:=$client.embeddings.create($inputs; "text-embedding-ada-002")
var $vectors : Collection:=$result.vectors // collection of 4D.Vector
```

##### Utilizar otro servicio

> Before using embeddings with a specific service, please check its documentation to see if embeddings are supported, and select the appropriate embedding model.

For example, for Mistral, use [mistral-embed or codestral-embed](https://docs.mistral.ai/capabilities/embeddings/)

```4d
var $result:=$client.embeddings.create($inputs; "mistral-embed")
```
