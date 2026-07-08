---
id: vp-remove-table
title: VP REMOVE TABLE
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R6   | Ajout         |

</details>

<!-- REF #_method_.VP REMOVE TABLE.Syntax -->

**VP REMOVE TABLE** ( *vpAreaName* : Text; *tableName* : Text {; *options* : Integer} {; *sheet* : Integer} )<!-- END REF -->

<!-- REF #_method_.VP REMOVE TABLE.Params -->

<div class="no-index">

| Paramètres | Type    |    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---------- | ------- | -- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vpAreaName | Text    | -> | Résultat:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| tableName  | Text    | -> | $param:=New collection&#xA;$param.push(New collection(1;2;3;False)) //première ligne, 4 valeurs&#xA;$param.push(New collection) //deuxième ligne, inchangé&#xA;$param.push(New collection(4;5;Null;"hello";"world")) // troisième ligne, 5 valeurs&#xA;$param.push(New collection(6;7;8;9)) // quatrième ligne, 4 valeurs&#xA;$param.push(New collection(Null;New object("value";Current date;"time";42))) //cinquième ligne, 1 valeur&#xA;VP SET VALUES(VP Cell("ViewProArea";2;1);$param) |
| options    | Integer | -> | Options supplémentaires                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

</div>
<!-- END REF -->

## Description

La commande `VP REMOVE TABLE` <!-- REF #_method_.VP REMOVE TABLE.Summary -->supprime une table<!-- END REF --> que vous avez créée avec [VP CREATE TABLE](vp-create-table.md).

Dans *vpAreaName*, passez le nom de la zone contenant la table à supprimer.

Dans *tableName*, passez le nom de la table à supprimer.

Dans les *options*, vous pouvez spécifier des comportements supplémentaires. Valeurs possibles :

| Constante             | Valeur | Description                                      |
| --------------------- | ------ | ------------------------------------------------ |
| vk table remove all   | 0      | Tput supprimer y compris le style et les données |
| vk table remove style | 1      | Supprimer le style mais conserver les données    |
| vk table remove data  | 2      | Supprimer les données mais conserver le style    |

Les noms des tables sont définis au niveau de la feuille. Vous pouvez spécifier où se trouve la table en utilisant le paramètre facultatif *sheet* (la numérotation commence à 0).

## Exemple

Pour supprimer la table "people" dans la deuxième feuille et conserver les données dans les cellules :

```4d
VP REMOVE TABLE("ViewProArea"; "people"; vk table remove style; 2)
```

## Voir également

[VP CREATE TABLE](vp-create-table.md)