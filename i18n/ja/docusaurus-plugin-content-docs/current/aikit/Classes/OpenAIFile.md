---
id: openaifile
title: OpenAIFile
---

# OpenAIFile

`OpenAIFile` クラスはOpen AI API 内でのファイルオブジェクトを表します。 ファイルはアップロード可能で、Assistants、Fine-tuning、Batch、および Vision API を含めた様々なエンドポイントにおいて使用することができます。

## プロパティ

| プロパティ名           | 型       | 説明                                                                                                                                                         |
| ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`             | Text    | ファイルの識別子。API エンドポイント内で参照可能です。                                                                                                                              |
| `bytes`          | Integer | ファイルのサイズ(バイト単位)。                                                                                                                        |
| `created_at`     | Integer | ファイルが作成されたUnix タイムスタンプ(秒)。                                                                                                              |
| `expires_at`     | Integer | ファイルが失効するUnix タイムスタンプ(秒)。                                                                                                               |
| `filename`       | Text    | ファイル名。                                                                                                                                                     |
| `object`         | Text    | オブジェクトタイプ。常に"file"。                                                                                                                                        |
| `purpose`        | Text    | ファイルの目的。 サポートされる値: `assistants`、 `assistants_output`、 `batch`、 `batch_output`、 `fine-tune`、 `fine-tune-results`、 `vision`、および `user_data`。 |
| `status`         | Text    | **廃止予定。** ファイルのカレントのステータス。`uploaded`、 `processed`、 あるいは `error` のいずれか。                                                                                     |
| `status_details` | Text    | **廃止予定。** ファイルの微調整トレーニングファイルが検証になぜ失敗したかの詳細については、`fine_tuning.job` のerror フィールドを参照してください。                                                                   |

## 参照

- [OpenAIFileResult](OpenAIFileResult.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileParameters](OpenAIFileParameters.md)
