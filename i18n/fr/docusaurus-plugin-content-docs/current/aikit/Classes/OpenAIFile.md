---
id: openaifile
title: OpenAIFile
---

# OpenAIFile

The `OpenAIFile` class represents a file object in the OpenAI API. Files can be uploaded and used across various endpoints including Assistants, Fine-tuning, Batch, and Vision APIs.

## Propriétés

| Nom de propriété | Type    | Description                                                                                                                                                                                                                  |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | Text    | The file identifier, which can be referenced in the API endpoints.                                                                                                                                           |
| `bytes`          | Integer | The size of the file, in bytes.                                                                                                                                                                              |
| `created_at`     | Integer | The Unix timestamp (in seconds) for when the file was created.                                                                                                                            |
| `expires_at`     | Integer | The Unix timestamp (in seconds) for when the file will expire.                                                                                                                            |
| `filename`       | Text    | The name of the file.                                                                                                                                                                                        |
| `object`         | Text    | The object type, which is always "file".                                                                                                                                                                     |
| `purpose`        | Text    | The intended purpose of the file. Supported values: `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results`, `vision`, and `user_data`. |
| `status`         | Text    | **Deprecated.** The current status of the file, which can be either `uploaded`, `processed`, or `error`.                                                                                     |
| `status_details` | Text    | **Deprecated.** For details on why a fine-tuning training file failed validation, see the error field on `fine_tuning.job`.                                                                  |

## Voir également

- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
