---
id: vp-find-table
title: VP Find table
---

<details><summary>Historia</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R7  | Añadidos       |

</details>

<!-- REF #_method_.VP Find table.Syntax -->

**VP Find table** ( _rangeObj_ : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Find table.Params -->

| Parámetros | Tipo   |    | Descripción        |                  |
| ---------- | ------ | -- | ------------------ | ---------------- |
| rangeObj   | Object | -> | Rango de celdas    |                  |
| Result     | Text   | <- | Nombre de la tabla | <!-- END REF --> |

#### Descripción

El comando `VP Find table` <!-- REF #_method_.VP Find table.Summary -->devuelve el nombre de la tabla a la que pertenece la celda _rangeObj_<!-- END REF -->.

En _rangeObj_, pase un objeto de rango de celdas. Si las celdas designadas no pertenecen a una tabla, el comando devuelve una cadena vacía.

Si _rangeObj_ no es un rango de celdas o contiene varios rangos, se utiliza la primera celda del primer rango.

#### Ejemplo

```4d
If (FORM Event.code=On After Edit && FORM Event.action="valueChanged")
     $tableName:=VP Find table(FORM Event.range)
     If ($tableName#"")
         ALERT("La tabla "+$tableName+" ha sido modificada.")
     End if 
End if
```

#### Ver también

[VP Get table range](vp-get-table-range.md)
