---
id: vp-copy-to-object
title: VP Copy to object
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

<!-- REF #_method_.VP Copy to object.Syntax -->

**VP Copy to object** ( *rangeObj* : Object {; *options* : Object} ) : Object<!-- END REF -->

<!-- REF #_method_.VP Copy to object.Params -->

| Parámetros | Tipo   |                             | Descripción                                                  |                  |
| ---------- | ------ | --------------------------- | ------------------------------------------------------------ | ---------------- |
| rangeObj   | Object | ->                          | Objeto rango                                                 |                  |
| options    | Object | ->                          | Opciones adicionales                                         |                  |
| Resultado  | Object | <- | Objeto devuelto. Contiene los datos copiados | <!-- END REF --> |

## Descripción

El comando `VP Copy to object` <!-- REF #_method_.VP Copy to object.Summary -->copia el contenido, estilo y fórmulas de *rangeObj* a un objeto<!-- END REF -->.

En *rangeObj*, pase el rango de celdas con los valores, formato y fórmulas a copiar. Si *rangeObj* es un rango combinado, sólo se utiliza el primero.

Puede pasar un parámetro opcional *options* con las siguientes propiedades:

| Propiedad   | Tipo    | Descripción                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| copy        | Boolean | *True* (por defecto) para mantener los valores, el formato y las fórmulas copiados después de la ejecución del comando. *False* para eliminarlos.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| copyOptions | Integer | Especifica lo que se copia o mueve. Possible values: <p><table><tr><th>Value</th><th>Description</th></tr><tr><td>`vk clipboard options all` (default)</td><td>Copies all data objects, including values, formatting, and formulas.</td></tr><tr><td>`vk clipboard options formatting`</td><td>Copies only the formatting.</td></tr><tr><td>`vk clipboard options formulas`</td><td>Copies only the formulas.</td></tr><tr><td>`vk clipboard options formulas and formatting`</td><td>Copies the formulas and formatting.</td></tr><tr><td>`vk clipboard options values`</td><td>Copies only the values.</td></tr><tr><td>`vk clipboard options value and formatting`</td><td>Copies the values and formatting.</td></tr></table></p> |

Se tienen en cuenta las opciones de pegado definidas en las [opciones del libro de trabajo](vp-set-workbook-options.md).

El comando devuelve un objeto que contiene los datos copiados.

## Ejemplo

Este ejemplo de código primero almacena el contenido, los valores, el formato y las fórmulas de un rango a un objeto, y luego los pega en otro rango:

```4d
var $originRange; $targetRange; $dataObject; $options : Object

$originRange:=VP Cells("ViewProArea"; 0; 0; 2; 5)

$options:=New object
$options.copy:=True
$options.copyOptions:=vk clipboard options all

$dataObject:=VP Copy to object($originRange; $options)

$targetRange:=VP Cell("ViewProArea"; 4; 0)
VP PASTE FROM OBJECT($targetRange; $dataObject; vk clipboard options all)
```

## Ver también

[VP PASTE FROM OBJECT](vp-paste-from-object.md)<br/>
[VP MOVE CELLS](vp-move-cells.md)<br/>
[VP Get workbook options](vp-get-workbook-options.md)<br/>
[VP SET WORKBOOK OPTIONS](vp-set-workbook-options.md)

