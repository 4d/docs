---
id: vp-get-binding-path
title: VP Get binding path
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R5       | Añadidos       |

</details>

<!-- REF #_method_.VP Get binding path.Syntax -->

**VP Get binding path** ( *rangeObj* : Object ) : Text<!-- END REF -->

<!-- REF #_method_.VP Get binding path.Params -->

| Parámetros | Tipo   |                             | Descripción                              |                  |
| ---------- | ------ | --------------------------- | ---------------------------------------- | ---------------- |
| rangeObj   | Object | ->                          | Objeto rango                             |                  |
| Result     | Text   | <- | Nombre del atributo vinculado a la celda | <!-- END REF --> |

#### Descripción

El comando `VP Get binding path` <!-- REF #_method_.VP Get binding path.Summary -->devuelve el nombre del atributo ligado a la celda especificada en *rangeObj*<!-- END REF -->.

En *rangeObj*, pase un objeto que es un rango de celdas o un rango combinado de celdas. Note que:

- Si *rangeObj* es un rango de varias celdas, el comando devuelve el nombre del atributo asociado a la primera celda del rango.
- Si *rangeObj* contiene varios rangos de celdas, el comando devuelve el nombre del atributo asociado a la primera celda del primer rango.

#### Ejemplo

```4d
var $p; $options : Object
var $myAttribute : Text

$p:=New object
$p.firstName:="Freehafer"
$p.lastName:="Nancy"

VP SET DATA CONTEXT("ViewProArea"; $p)

VP SET BINDING PATH(VP Cell("ViewProArea"; 0; 0); "firstName")
VP SET BINDING PATH(VP Cell("ViewProArea"; 1; 0); "lastName")

$myAttribute:=VP Get binding path(VP Cell("ViewProArea"; 1; 0)) // "lastName"
```

#### Ver también

[VP SET BINDING PATH](vp-set-binding-path.md)<br/>
[VP Get data context](vp-get-data-context.md)<br/>
[VP SET DATA CONTEXT](vp-get-data-context.md)
