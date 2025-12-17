---
id: openaifile
title: OpenAIFile
---

# OpenAIFile

La clase `OpenAIFile` representa un objeto archivo en la API OpenAI. Los archivos pueden cargarse y utilizarse a través de varios puntos finales, incluidas las APIs Assistants, Fine-tuning, Batch y Vision.

## Propiedades

| Nombre de la propiedad | Tipo    | Descripción                                                                                                                                                                                                                  |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                   | Text    | El identificador del archivo, al que se puede hacer referencia en los puntos de terminación de la API.                                                                                                       |
| `bytes`                | Integer | El tamaño del archivo, en bytes.                                                                                                                                                                             |
| `created_at`           | Integer | La marca de tiempo Unix (en segundos) de cuando se creó el archivo.                                                                                                                       |
| `expires_at`           | Integer | La marca de tiempo Unix (en segundos) para cuando el archivo expirará.                                                                                                                    |
| `filename`             | Text    | El nombre del archivo.                                                                                                                                                                                       |
| `object`               | Text    | El tipo de objeto, que siempre es "file".                                                                                                                                                                    |
| `purpose`              | Text    | El propósito previsto del archivo. Valores soportados: `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results`, `vision` y `user_data`. |
| `status`               | Text    | **Obsoleto.** el estado actual del archivo, que puede ser `uploaded`, `processed`, o `error`.                                                                                                |
| `status_details`       | Text    | **Obsoleto** Para más detalles sobre por qué un archivo de entrenamiento fine-tuning falló la validación, vea el campo de error en `fine_tuning.job`.                                                        |

## Ver también

- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
