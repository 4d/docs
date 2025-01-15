---
id: vp-get-table-theme
title: VP Get table theme
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R8       | Añadidos       |

</details>

<!-- REF #_method_.VP Get table theme.Syntax -->

**VP Get table theme** ( *vpAreaName* : Text ; *tableName* : Text {; *sheet* : Integer } ) : cs.ViewPro.TableTheme<!-- END REF -->

<!-- REF #_method_.VP Get table theme.Params -->

| Parámetros | Tipo                                                                              |                             | Descripción                                                    |                  |
| ---------- | --------------------------------------------------------------------------------- | --------------------------- | -------------------------------------------------------------- | ---------------- |
| vpAreaName | Text                                                                              | ->                          | Nombre de objeto formulario área 4D View Pro                   |                  |
| tableName  | Text                                                                              | ->                          | Nombre de la tabla                                             |                  |
| sheet      | Integer                                                                           | ->                          | Índice de la hoja (hoja actual si se omite) |                  |
| Result     | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | <- | Valores de propiedad del tema de la tabla actual               | <!-- END REF --> |

#### Descripción

El comando `VP Get table theme` <!-- REF #_method_.VP Get table theme.Summary -->devuelve los valores actuales de las propiedades del tema de la tabla *tableName*<!-- END REF -->. Se puede definir un tema de tabla utilizando los comandos [`VP CREATE TABLE`](vp-create-table.md) o [`VP SET TABLE THEME`](vp-set-table-theme.md), o a través de la interfaz.

En\* vpAreaName\*, pase el nombre del área 4D View Pro y en *tableName*, el nombre de la tabla.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.

El comando devuelve un objeto de la clase [cs.ViewPro.TableTheme](../classes.md#tabletheme) con propiedades y valores que describen el tema actual de la tabla.

#### Ejemplo

El comando devuelve un objeto `tema` completo incluso si se utilizó un nombre de [tema nativo de SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) para definir el tema.

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="dark10" //uso de un nombre de tema nativo

VP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)
$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")
$result:=Asserted(Value type($vTheme.theme)=Is object) //true
```

#### Ver también

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP SET TABLE THEME](vp-set-table-theme.md)
