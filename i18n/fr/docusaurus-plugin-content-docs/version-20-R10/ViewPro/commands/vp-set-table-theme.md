---
id: vp-set-table-theme
title: VP SET TABLE THEME
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R8   | Ajout         |

</details>

<!-- REF #_method_.VP SET TABLE THEME.Syntax -->

**VP SET TABLE THEME** ( *vpAreaName* : Text ; *tableName* : Text ; *options* : cs.ViewPro.TableTheme {; *sheet* : Integer } )<!-- END REF -->

<!-- REF #_method_.VP SET TABLE THEME.Params -->

| Paramètres | Type                                                                              |    | Description                                                                 |
| ---------- | --------------------------------------------------------------------------------- | -- | --------------------------------------------------------------------------- |
| vpAreaName | Text                                                                              | -> | Nom d'objet formulaire zone 4D View Pro                                     |
| tableName  | Text                                                                              | -> | Nom de table                                                                |
| options    | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | -> | Propriétés du thème de la table à modifier                                  |
| sheet      | Integer                                                                           | -> | Numéro d'indice de la feuille (feuille courante si omis) |

<!-- END REF -->

## Description

La commande `VP SET TABLE THEME` <!-- REF #_method_.VP SET TABLE THEME.Summary --> modifie le thème actuel de la *tableName*<!-- END REF -->.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro et dans *tableName*, le nom de la table à modifier.

Dans le paramètre *options*, passez un objet de la classe [`cs.ViewPro.TableTheme`](../classes.md#tabletheme) qui contient les propriétés du thème à modifier.

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié ou si vous passez -1, la commande s'applique à la feuille courante.

## Exemple 1

Vous souhaitez définir un thème prédéfini pour une table :

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()
$param.theme:="medium2"
VP SET TABLE THEME("ViewProArea"; "myTable"; $param)
```

## Exemple 2

Vous souhaitez obtenir ce rendu de colonne alterné :

![](../../assets/en/ViewPro/col-bandering.png)

```4d
var $param : cs.ViewPro.TableTheme
$param:=cs.ViewPro.TableTheme.new()

// Activer le rendu bandColumn
$param.bandColumns:=True
$param.bandRows:=False

// Créer l'objet thème avec les styles d'en-tête et de colonne
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

VP SET TABLE THEME("ViewProArea" ; "myTable" ; $param)

```

## Voir également

[VP CREATE TABLE](vp-create-table.md)<br/>
[VP Get table theme](vp-get-table-theme.md)
