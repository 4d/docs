---
id: openaifile
title: OpenAIFile
---

# OpenAIFile

La clase `OpenAIFile` representa un objeto archivo en la API OpenAI. Files can be uploaded and used across various endpoints including Assistants, Fine-tuning, Batch, and Vision APIs.

## Propiedades

| Nombre de la propiedad | Tipo    | Descripción                                                                                                                                                                                                                   |
| ---------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                   | Text    | El identificador del archivo, al que se puede hacer referencia en los puntos de terminación de la API.                                                                                                        |
| `bytes`                | Integer | El tamaño del archivo, en bytes.                                                                                                                                                                              |
| `created_at`           | Integer | La marca de tiempo Unix (en segundos) de cuando se creó el archivo.                                                                                                                        |
| `expires_at`           | Integer | La marca de tiempo Unix (en segundos) para cuando el archivo expirará.                                                                                                                     |
| `filename`             | Text    | El nombre del archivo.                                                                                                                                                                                        |
| `object`               | Text    | El tipo de objeto, que siempre es "file".                                                                                                                                                                     |
| `purpose`              | Text    | El propósito previsto del archivo. Supported values: `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results`, `vision`, and `user_data`. |
| `status`               | Text    | **Obsoleto.** el estado actual del archivo, que puede ser `uploaded`, `processed`, o `error`.                                                                                                 |
| `status_details`       | Text    | **Deprecated.** For details on why a fine-tuning training file failed validation, see the error field on `fine_tuning.job`.                                                                   |

## Ver también

- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
