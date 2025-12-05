---
id: openaifile
title: OpenAIFile
---

# OpenAIFile

La classe `OpenAIFile` représente un objet fichier dans l'API OpenAI. Les fichiers peuvent être téléversés et utilisés à partir de différents points de terminaison, notamment les APIs Assistants, Fine-tuning, Batch et Vision.

## Propriétés

| Nom de propriété | Type    | Description                                                                                                                                                                                                                        |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | Text    | L'identifiant du fichier, qui peut être référencé dans les points de terminaison de l'API.                                                                                                                         |
| `bytes`          | Integer | La taille du fichier en octets.                                                                                                                                                                                    |
| `created_at`     | Integer | L'horodatage Unix (en secondes) de la création du fichier.                                                                                                                                      |
| `expires_at`     | Integer | L'horodatage Unix (en secondes) de la date d'expiration du fichier.                                                                                                                             |
| `filename`       | Text    | Le nom du fichier.                                                                                                                                                                                                 |
| `object`         | Text    | Le type d'objet, qui est toujours "file".                                                                                                                                                                          |
| `purpose`        | Text    | L'objectif visé par le fichier. Valeurs prises en charge : `assistants`, `assistants_output`, `batch`, `batch_output`, `fine-tune`, `fine-tune-results`, `vision`, et `user_data`. |
| `status`         | Text    | **Obsolète.** Le statut actuel du fichier, qui peut être `uploaded`, `processed`, ou `error`.                                                                                                      |
| `status_details` | Text    | **Obsolète.** Pour des détails sur la raison de l'échec de la validation d'un fichier d'entraînement fine-tuning, voir le champ d'erreur sur `fine_tuning.job`.                                    |

## Voir également

- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
