---
id: openaifileparameters
title: OpenAIFileParameters
---

# OpenAIFileParameters

The `OpenAIFileParameters` class handles parameters for file upload operations.

## 継承元

[OpenAIParameters](OpenAIParameters.md)

## プロパティ

| プロパティ名          | 型      | Required | 説明                                                                                                                                                                                               |
| --------------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `expires_after` | Object | 任意       | The expiration policy for a file. By default, files with `purpose=batch` expire after 30 days and all other files are persisted until they are manually deleted. |

### `expires_after` Object Structure

The `expires_after` object contains the following properties:

| プロパティ名    | 型       | 説明                                                                                                                                                                                                |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `anchor`  | Text    | Anchor timestamp after which the expiration policy applies. Supported anchors: `created_at`.                                                      |
| `seconds` | Integer | The number of seconds after the anchor time that the file will expire. Must be between 3600 (1 hour) and 2592000 (30 days). |

## 使用例

```4d
var $params:=cs.AIKit.OpenAIFileParameters.new()

// Set expiration after 7 days
$params.expires_after:={}
$params.expires_after.anchor:="created_at"
$params.expires_after.seconds:=604800  // 7 days
```

## 参照

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileResult](OpenAIFileResult.md)
