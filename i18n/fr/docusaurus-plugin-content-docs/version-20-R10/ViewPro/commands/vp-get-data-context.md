---
id: vp-get-data-context
title: VP Get data context
---

<details><summary>Historique</summary>

| Release | Modifications |
| ------- | ------------- |
| 19 R5   | Ajout         |

</details>

<!-- REF #_method_.VP Get data context.Syntax -->

**VP Get data context** ( *vpAreaName* : Text {; *sheet* : Integer } ) : any<!-- END REF -->

<!-- REF #_method_.VP Get data context.Params -->

| Paramètres | Type    |                             | Description                                              |                  |
| ---------- | ------- | --------------------------- | -------------------------------------------------------- | ---------------- |
| vpAreaName | Text    | ->                          | Nom d'objet formulaire zone 4D View Pro                  |                  |
| sheet      | Integer | ->                          | Indice de la feuille de laquelle obtenir le data context |                  |
| Résultat   | Variant | <- | Data context. Object or Collection       | <!-- END REF --> |

## Description

The `VP Get data context` command <!-- REF #_method_.VP Get data context.Summary -->returns the current data context of a worksheet<!-- END REF -->. Le contexte retourné inclut toutes les modifications apportées au contenu du contexte de données.

In *sheet*, pass the index of the sheet to get the data context from. Si aucun index n'est passé, la commande retourne le contexte de données de la feuille de travail courante. Si aucun index n'est passé, la commande retourne le contexte de données de la feuille de travail courante.

The function returns an object or a collection depending on the type of data context set with [VP SET DATA CONTEXT](vp-set-data-context.md).

## Exemple

Pour obtenir le contexte de données lié aux cellules suivantes :

![](../../assets/en/ViewPro/vp-set-data-context-bind.png)

```4d
var $dataContext : Object

$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}
```

## Voir également

[VP SET DATA CONTEXT](vp-set-data-context.md)<br/>
[VP Get binding path](vp-get-binding-path.md)<br/>
[VP SET BINDING PATH](vp-set-binding-path.md)