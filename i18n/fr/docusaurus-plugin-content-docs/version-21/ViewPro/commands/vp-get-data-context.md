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
| Résultat   | Variant | <- | Data context. Objet ou collection        | <!-- END REF --> |

## Description

La commande `VP Get data context` <!-- REF #_method_.VP Get data context.Summary -->retourne le contexte de données courant d'une feuille de travail<!-- END REF -->. Le contexte retourné inclut toutes les modifications apportées au contenu du contexte de données.

Dans la *sheet*, passez l'index de la feuille pour récupérer le contexte des données. Si aucun index n'est passé, la commande retourne le contexte de données de la feuille de travail courante. Si aucun index n'est passé, la commande retourne le contexte de données de la feuille de travail courante.

La fonction retourne un objet ou une collection en fonction du type de contexte de données défini avec [VP SET DATA CONTEXT](vp-set-data-context.md).

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