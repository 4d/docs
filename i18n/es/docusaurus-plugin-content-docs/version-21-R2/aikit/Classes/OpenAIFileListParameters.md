---
id: openaifilelistparameters
title: OpenAIFileListParameters
---

# OpenAIFileListParameters

La clase `OpenAIFileListParameters` contiene los parámetros para listar los archivos en la API OpenAI.

## Hereda

[OpenAIParameters](OpenAIParameters.md)

## Propiedades

| Nombre de la propiedad | Tipo    | Requerido | Por defecto | Descripción                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ------- | --------- | ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `after`                | Text    | Opcional  | -           | Un cursor para utilizar en la paginación. `after` es un ID de objeto que define su lugar en la lista. Por ejemplo, si realiza una solicitud de lista y recibe 100 objetos, que terminan en "obj_foo", su llamada posterior puede incluir "after=obj_foo" para recuperar la página siguiente de la lista. |
| `limit`                | Integer | Opcional  | 10000       | Un límite en el número de objetos a devolver. El límite puede oscilar entre 1 y 10.000, y el valor predeterminado es 10.000.                                                                                                                                                                                                       |
| `order`                | Text    | Opcional  | desc        | Ordenar por la marca de tiempo 'created_at' de los objetos. `asc` para el orden ascendente y `desc` para el descendente.                                                                                                                                                                                                                      |
| `purpose`              | Text    | Opcional  | -           | Devuelve sólo los archivos con la finalidad indicada.                                                                                                                                                                                                                                                                                                                              |

## Ejemplo de uso

```4d
// Obtener los primeros 100 archivos con el objeto "fine-tune"
var $params:=cs.AIKit.OpenAIFileListParameters.new()
$params. imit:=100
$params.purpose:="fine-tune"
$params.order:="desc"

var $result:=$client.files.list($params)
```

## Ver también

- [OpenAIFilesAPI](OpenAIFilesAPI.md)
- [OpenAIFileListResult](OpenAIFileListResult.md)
