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

| Argumento    | Tipo                                                        | Descripción                                                                                                                                                                                                                                                                                                                          |
| ------------ | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| *entrada*    | Texto o colección de texto                                  | La entrada a vectorizar.                                                                                                                                                                                                                                                                                             |
| *model*      | Text                                                        | El [modelo a utilizar] (https://platform.openai.com/docs/guides/embeddings#embedding-models). Soporta [provider:model aliases](../provider-model-aliases.md). |
| *parámetros* | [OpenAIEmbeddingsParameters](OpenAIEmbeddingsParameters.md) | Los parámetros para personalizar la petición de representaciones vectoriales.                                                                                                                                                                                                                                        |
| Resultado    | [OpenAIEmbeddingsResult](OpenAIEmbeddingsResult.md)         | Las integraciones.                                                                                                                                                                                                                                                                                                   |

#### Ejemplos de uso

##### Obtener el vector de una sola entrada de texto

```4d
var $result:=$client.embeddings.create("it rains cats and dogs"; "text-embedding-ada-002")
var $vector: 4D.Vector:=$result.vector
// o var $embedding: cs.AIKit.OpenAIEmbedding:=$result.embedding
```

##### Obtener vectores para una colección de entradas de texto

```4d
var $inputs:=["it rains cats and dogs"; "il pleut à boire debout"]
var $result:=$client.embeddings.create($inputs; "text-embedding-ada-002")
var $vectors : Collection:=$result.vectors // colección de 4D.Vector
```

##### Utilizar otro servicio

> Antes de utilizar las representaciones vectoriales con un servicio específico, compruebe en su documentación si admite embeddings y seleccione el modelo de representación vectorial adecuado.

Por ejemplo, para Mistral, utilice [mistral-embed o codestral-embed](https://docs.mistral.ai/capabilities/embeddings/)

```4d
var $result:=$client.embeddings.create($inputs; "mistral-embed")
```
