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

**VP Get table theme** ( _vpAreaName_ : Text ; _tableName_ : Text ) : cs.ViewPro.TableTheme<!-- END REF -->

<!-- REF #_method_.VP Get table theme.Params -->

| Parámetros | Tipo                                                                              |    | Descripción                                      |                  |
| ---------- | --------------------------------------------------------------------------------- | -- | ------------------------------------------------ | ---------------- |
| vpAreaName | Text                                                                              | -> | Nombre de objeto formulario área 4D View Pro     |                  |
| tableName  | Text                                                                              | -> | Nombre de la tabla                               |                  |
| Result     | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | <- | Valores de propiedad del tema de la tabla actual | <!-- END REF --> |

#### Descripción

El comando `VP Get table theme` <!-- REF #_method_.VP Get table theme.Summary -->devuelve los valores actuales de las propiedades del tema de la tabla _tableName_<!-- END REF -->. A table theme can be set using the [`VP CREATE TABLE`](vp-create-table.md) or [`VP SET TABLE THEME`](vp-set-table-theme.md) commands, or through the interface.

En\* vpAreaName\*, pase el nombre del área 4D View Pro y en _tableName_, el nombre de la tabla.

The command returns an object of the [cs.ViewPro.TableTheme](../classes.md#tabletheme) class with properties and values that describe the current table theme.

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
