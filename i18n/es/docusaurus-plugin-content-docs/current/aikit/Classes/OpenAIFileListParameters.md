---
id: openaifilelistparameters
title: OpenAIFileListParameters
---

# OpenAIFileListParameters

The `OpenAIFileListParameters` class contains parameters for listing files in the OpenAI API.

## Hereda

[OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo    | Requerido | Por defecto | Descripción                                                                                                                                                                                                                                                                                                                                   |
| ---------------------- | ------- | --------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`                | Text    | Opcional  | -           | Un cursor para utilizar en la paginación. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `after=obj_foo` in order to fetch the next page of the list. |
| `limit`                | Integer | Opcional  | 10000       | Un límite en el número de objetos a devolver. Limit can range between 1 and 10,000, and the default is 10,000.                                                                                                                                                                                                |
| `order`                | Text    | Opcional  | desc        | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.                                                                                                                                                                                           |
| `purpose`              | Text    | Opcional  | -           | Devuelve sólo los archivos con la finalidad indicada.                                                                                                                                                                                                                                                                         |

## Ejemplo de Uso

```4d
// Get first 100 files with purpose "fine-tune"
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params.limit:=100
$params.purpose:="fine-tune"
$params.order:="desc"

var $result:=$client.files.list($params)
```

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
