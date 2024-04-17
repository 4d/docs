---
id: vp-get-table-theme
title: VP Get table theme
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R8   | Ajout         |

</details>

<!-- REF #_method_.VP Get table theme.Syntax -->

**VP Get table theme** ( _vpAreaName_ : Text ; _tableName_ : Text ) : cs.ViewPro.TableTheme<!-- END REF -->

<!-- REF #_method_.VP Get table theme.Params -->

| Paramètres | Type                                                                              |    | Description                             |                  |
| ---------- | --------------------------------------------------------------------------------- | -- | --------------------------------------- | ---------------- |
| vpAreaName | Text                                                                              | -> | Nom d'objet formulaire zone 4D View Pro |                  |
| tableName  | Text                                                                              | -> | Nom de table                            |                  |
| Résultat   | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | <- | Current table theme property values     | <!-- END REF --> |

#### Description

The `VP Get table theme` command <!-- REF #_method_.VP Get table theme.Summary -->returns the current theme propertie values of the _tableName_<!-- END REF -->. A table theme can be set using the [`VP CREATE TABLE`](vp-create-table.md) or [`VP SET TABLE THEME`](vp-set-table-theme.md) commands, or through the interface.

In _vpAreaName_, pass the name of the 4D View Pro area and in _tableName_, the name of the table.

The command returns an object of the [cs.ViewPro.TableTheme](../classes.md#tabletheme) class with properties and values that describe the current table theme.

#### Exemple

The command returns a full `theme` object even if a [native SpreadJS theme](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) name was used to define the theme.

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="dark10" //utilisation d'un nom de thème natif

VP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)
$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")
$result:=Asserted(Value type($vTheme.theme)=Is object) //vrai
```

#### Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP SET TABLE THEME](vp-set-table-theme.md)
