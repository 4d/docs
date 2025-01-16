---
id: vp-set-table-theme
title: VP SET TABLE THEME
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R8       | Añadidos       |

</details>

<!-- REF #_method_.VP SET TABLE THEME.Syntax -->

**VP SET TABLE THEME** ( *vpAreaName* : Text ; *tableName* : Text ; *options* : cs.ViewPro.TableTheme {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE THEME.Params -->

| Parámetros | Tipo                                                                              |    | Descripción                                                    |
| ---------- | --------------------------------------------------------------------------------- | -- | -------------------------------------------------------------- |
| vpAreaName | Text                                                                              | -> | Nombre de objeto formulario área 4D View Pro                   |
| tableName  | Text                                                                              | -> | Nombre de la tabla                                             |
| options    | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | -> | Propiedades del tema de la tabla a modificar                   |
| sheet      | Integer                                                                           | -> | Índice de la hoja (hoja actual si se omite) |

<!-- END REF -->

#### Descripción

El comando `VP SET TABLE THEME` <!-- REF #_method_.VP SET TABLE THEME.Summary -->modifica el tema actual de *tableName*<!-- END REF -->.

En *vpAreaName*, pase el nombre del área 4D View Pro y en *tableName*, el nombre de la tabla a modificar.

En el parámetro *options*, pase un objeto de la [clase`cs.ViewPro.TableTheme`](../classes.md#tabletheme) que contenga las propiedades del tema a modificar.

En *sheet*, pase el índice de la hoja objetivo. Si no se especifica ningún índice o si pasa -1, el comando se aplica a la hoja actual.

#### Ejemplo 1

Desea definir un tema predefinido en una tabla:

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="medium2"
VP SET TABLE THEME("ViewProArea"; "myTable"; $param)
```

#### Ejemplo 2

Quiere tener esta representación de columna alternativa:

![](../../assets/en/ViewPro/col-bandering.png)

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()

// Activar el renderizado de columnas band
$param.bandColumns:=True
$param.bandRows:=False

// Crear el objeto tema con estilos de encabezado y columna
$param.theme:=cs.ViewPro.TableThemeOptions.new()

var $styleHeader; $styleColumn; $styleColumn2 : cs.ViewPro.TableStyle

$styleHeader:=cs.ViewPro.TableStyle.new()
$styleHeader.backColor:="Gold"
$styleHeader.foreColor:="#03045E"
$param.theme.headerRowStyle:=$styleHeader

$styleColumn1:=cs.ViewPro.TableStyle.new()
$styleColumn1.backColor:="SkyBlue"
$styleColumn1.foreColor:="#03045E"
$param.theme.firstColumnStripStyle:=$styleColumn1

$styleColumn2:=cs.ViewPro.TableStyle.new()
$styleColumn2.backColor:="LightCyan"
$styleColumn2.foreColor:="#03045E"
$param.theme.secondColumnStripStyle:=$styleColumn2

VP SET TABLE THEME("ViewProArea"; "myTable"; $param)

```

#### Ver también

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Get table theme](vp-get-table-theme.md)
