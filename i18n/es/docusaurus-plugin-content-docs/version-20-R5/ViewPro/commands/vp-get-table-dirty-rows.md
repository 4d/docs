---
id: vp-get-table-dirty-rows
title: VP Get table dirty rows
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R8       | Añadidos       |

</details>

<!-- REF #_method_.VP Get table dirty rows.Syntax -->

**VP Get table dirty rows** ( _vpAreaName_ : Text ; _tableName_ : Text { ; _reset_ : Boolean {; _sheet_ : Integer }} ) : Collection<!-- END REF -->

<!-- REF #_method_.VP Get table dirty rows.Params -->

| Parámetros | Tipo       |                             | Descripción                                                                                                          |                  |
| ---------- | ---------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text       | ->                          | Nombre de objeto formulario área 4D View Pro                                                                         |                  |
| tableName  | Text       | ->                          | Nombre de la tabla                                                                                                   |                  |
| reset      | Boolean    | ->                          | True para borrar el estado sucio de la tabla actual, False para mantenerlo intacto. Por defecto=True |                  |
| sheet      | Integer    | ->                          | Índice de la hoja (hoja actual si se omite)                                                       |                  |
| Result     | Collection | <- | Colección de objetos con todos los elementos modificados desde el último reinicio                                    | <!-- END REF --> |

#### Descripción

El comando `VP Get table dirty rows` <!-- REF #_method_.VP Get table dirty rows.Summary -->devuelve una colección de objetos _dirty row_, que contienen los elementos que fueron modificados desde el último reinicio en la tabla especificada _tableName_<!-- END REF -->.

En _vpAreaName_, pase el nombre del área 4D View Pro.

En _tableName_, pase el nombre de la tabla de la que desea obtener las líneas sucias. Sólo se tendrán en cuenta las columnas modificadas vinculadas a un [contexto de datos](vp-set-data-context.md).

Por defecto, al llamar al comando se borrará el estado _sucio_ de la tabla actual. Para mantener este estado intacto, pase `False` en el parámetro _reset_.

En _sheet_, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.

> La indexación comienza en 0.

Cada objeto _dirty row_ de la colección devuelta contiene las siguientes propiedades:

| Propiedad    | Tipo    | Descripción                              |
| ------------ | ------- | ---------------------------------------- |
| item         | object  | Objeto modificado de la línea modificada |
| originalItem | object  | Objeto antes de la modificación          |
| row          | integer | Índice de la línea modificada            |

Si no se encuentra _tableName_ o si no contiene una columna modificada, el comando devuelve una colección vacía.

#### Ejemplo

Desea contar el número de lineas editadas:

```4d
var $dirty : Collection
$dirty:=VP Get table dirty rows("ViewProArea"; "ContextTable"; False)
VP SET NUM VALUE(VP Cell("ViewProArea"; 0; 0); $dirty.length)
```

#### Ver también

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Find table](vp-find-table.md)<br/>
[VP SET TABLE COLUMN ATTRIBUTES](vp-set-table-column-attributes.md)<br/>
[VP RESIZE TABLE](vp-resize-table.md)
