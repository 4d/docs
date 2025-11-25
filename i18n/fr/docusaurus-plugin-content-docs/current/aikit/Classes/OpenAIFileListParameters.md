---
id: openaifilelistparameters
title: OpenAIFileListParameters
---

# OpenAIFileListParameters

The `OpenAIFileListParameters` class contains parameters for listing files in the OpenAI API.

## Hérite de

[OpenAIParameters](OpenAIParameters.md)

## Propriétés

| Nom de propriété | Type    | Required  | Par défaut | Description                                                                                                                                                                                                                                                                                                                         |
| ---------------- | ------- | --------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`          | Text    | Optionnel | -          | A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `after=obj_foo` in order to fetch the next page of the list. |
| `limit`          | Integer | Optionnel | 10000      | A limit on the number of objects to be returned. Limit can range between 1 and 10,000, and the default is 10,000.                                                                                                                                                                                   |
| `order`          | Text    | Optionnel | desc       | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.                                                                                                                                                                                 |
| `purpose`        | Text    | Optionnel | -          | Only return files with the given purpose.                                                                                                                                                                                                                                                                           |

## Exemple d'utilisation

```4d
// Get first 100 files with purpose "fine-tune"
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.limit:=100
$params.purpose:="fine-tune"
$params.order:="desc"

var $result:=$client.files.list($params)
```

## Voir également

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
