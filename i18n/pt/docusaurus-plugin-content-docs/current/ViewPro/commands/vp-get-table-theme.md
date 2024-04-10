---
id: vp-get-table-theme
title: VP Get table theme
---

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19 R8   | Adicionado |

</details>

<!-- REF #_method_.VP Get table theme.Syntax -->

**VP Get table theme** ( _vpAreaName_ : Text ; _tableName_ : Text ) : cs.ViewPro.TableTheme<!-- END REF -->

<!-- REF #_method_.VP Get table theme.Params -->

| Parâmetro  | Tipo                                                                              |    | Descrição                                      |                  |
| ---------- | --------------------------------------------------------------------------------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text                                                                              | -> | Nome de objeto formulário área 4D View Pro     |                  |
| tableName  | Text                                                                              | -> | Nome da tabela                                 |                  |
| Resultados | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | <- | Valores de propriedade do tema da tabela atual | <!-- END REF --> |

#### Descrição

The `VP Get table theme` command <!-- REF #_method_.VP Get table theme.Summary -->returns the current theme propertie values of the _tableName_<!-- END REF -->. A table theme can be set using the [`VP CREATE TABLE`](vp-create-table.md) or [`VP SET TABLE THEME`](vp-set-table-theme.md) commands, or through the interface.

Em _vpAreaName_, passe o nome da área 4D View Pro e, em _tableName_, o nome da tabela.

The command returns an object of the [cs.ViewPro.TableTheme](../classes.md#tabletheme) class with properties and values that describe the current table theme.

#### Exemplo

The command returns a full `theme` object even if a [native SpreadJS theme](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) name was used to define the theme.

```4d
var $param : cs. ViewPro. TableTheme
$param:=cs. ViewPro. TableTheme.new()
$param.theme:="dark10" //use of a native theme name VP SET TABLE THEME("ViewProArea"; "ContextTable"; $param)
$vTheme:=VP Get table theme("ViewProArea"; "ContextTable")
$result:=Asserted(Value type($vTheme.theme)=Is object) //true
```

#### Veja também

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP SET TABLE THEME](vp-set-table-theme.md)
