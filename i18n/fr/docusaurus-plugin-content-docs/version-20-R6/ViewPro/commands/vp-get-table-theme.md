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

**VP Get table theme** ( *vpAreaName* : Text ; *tableName* : Text {; *sheet* : Integer } ) : cs.ViewPro.TableTheme<!-- END REF -->

<!-- REF #_method_.VP Get table theme.Params -->

| Paramètres | Type                                                                              |                             | Description                                                                 |                  |
| ---------- | --------------------------------------------------------------------------------- | --------------------------- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text                                                                              | ->                          | Nom d'objet formulaire zone 4D View Pro                                     |                  |
| tableName  | Text                                                                              | ->                          | Nom de table                                                                |                  |
| sheet      | Integer                                                                           | ->                          | Numéro d'indice de la feuille (feuille courante si omis) |                  |
| Résultat   | [cs.ViewPro.TableTheme](../classes.md#tabletheme) | <- | Valeurs des propriétés du thème de la table actuelle                        | <!-- END REF --> |

#### Description

La commande `VP Get table theme` <!-- REF #_method_.VP Get table theme.Summary -->retourne les valeurs des propriétés du thème actuel de la table *tableName*<!-- END REF -->. Un thème de table peut être défini à l'aide des commandes [`VP CREATE TABLE`](vp-create-table.md) ou [`VP SET TABLE THEME`](vp-set-table-theme.md), ou via l'interface.

Dans *vpAreaName*, passez le nom de la zone 4D View Pro et dans *tableName*, le nom de la table.

Dans *sheet*, passez le numéro de la page cible. Si aucun numéro n'est spécifié ou si vous passez -1, la commande s'applique à la feuille courante.

La commande retourne un objet de la classe [cs.ViewPro.TableTheme](../classes.md#tabletheme) avec des propriétés et des valeurs qui décrivent le thème de la table courante.

#### Exemple

La commande retourne un objet de `thème` complet même si un nom de [thème natif SpreadJS](https://developer.mescius.com/spreadjs/api/classes/GC.Spread.Sheets.Tables.TableThemes) a été utilisé pour définir le thème.

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
