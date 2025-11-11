---
id: openaichatcompletionsstreamresult
title: OpenAIChatCompletionsStreamResult
---

# OpenAIChatCompletionsStreamResult

## Hereda

- [OpenAIResult](OpenAIResult.md)

## Propiedades

| Propiedad | Tipo   | Descripción                                                           |
| --------- | ------ | --------------------------------------------------------------------- |
| `data`    | Object | Contiene los datos de flujo enviados por el servidor. |

## Propiedades calculadas

| Propiedad | Tipo                            | Descripción                                                                                           |
| --------- | ------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `choice`  | [OpenAIChoice](OpenAIChoice.md) | Devuelve un dato de elección, con un mensaje `delta`.                                 |
| `choices` | Collection                      | Devuelve una colección de datos [OpenAIChoice](OpenAIChoice.md) con mensajes `delta`. |

### Propiedades reemplazadas

| Propiedad    | Tipo                            | Descripción                                                                                                                        |
| ------------ | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `success`    | [OpenAIChoice](OpenAIChoice.md) | Devuelve `True` si los datos de streaming fueron decodificados como un objeto con éxito.                           |
| `terminated` | Boolean                         | Un booleano que indica si la petición HTTP fue terminada. es decir, `onTerminate` ha sido llamado. |
