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

| Paramètres | Type    |    | Description                                                                 |                  |
| ---------- | ------- | -- | --------------------------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | Nom de la zone 4D View Pro                                                  |                  |
| tableName  | Text    | -> | Nom de la table à supprimer                                                 |                  |
| options    | Integer | -> | Options supplémentaires                                                     |                  |
| sheet      | Integer | -> | Numéro d'indice de la feuille (feuille courante si omis) | <!-- END REF --> |

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