---
id: create-set-from-array
title: CREATE SET FROM ARRAY
slug: /commands/create-set-from-array
displayed_sidebar: docs
---

<!--REF #_command_.CREATE SET FROM ARRAY.Syntax-->**CREATE SET FROM ARRAY** ( *laTable* ; *tabEnrg* {; *nomEnsemble*} )<!-- END REF-->
<!--REF #_command_.CREATE SET FROM ARRAY.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l’ensemble |
| tabEnrg | Integer, Boolean array | &#8594;  | Tableau de n° d’enregistrements, ou Tableau de booléens (Vrai = l’enregistrement est dans l’ensemble, Faux = il n’est pas dans l’ensemble) |
| nomEnsemble | Text | &#8594;  | Nom de l’ensemble à créer, ou Appliquer la commande à l’ensemble Userset si ce paramètre est omis ou vide |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6.7|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.CREATE SET FROM ARRAY.Summary-->La commande **CREATE SET FROM ARRAY** crée l’ensemble *nomEnsemble*<!-- END REF--> à partir :

* soit du tableau de numéros d’enregistrements absolus *tabEnrg* de *laTable*,
* soit du tableau de booléens *tabEnrg* ; dans ce cas, les valeurs du tableau indiquent l’appartenance (VRAI) ou non (FAUX) de chaque enregistrement de table à l’ensemble *nomEnsemble*.

Lorsque vous utilisez la commande avec un tableau d’entiers longs, tous les numéros du tableau représentent la liste des numéros d’enregistrements qui feront partie de l’ensemble *nomEnsemble*. Si un numéro est invalide (enregistrement non créé), l’erreur -10503 est générée.

Lorsque vous utilisez la commande avec un tableau de booléens, le Nième élément du tableau représente l’intégration (VRAI) ou non (FAUX) de l’enregistrement numéro N à l’ensemble *nomEnsemble*. En principe, le nombre d’éléments du tableau doit être égal au nombre d’enregistrements de *table*. Si le tableau est plus petit que le nombre d’enregistrements, seuls les enregistrements définis par le tableau pourront faire partie de l’ensemble.

**Note :** Avec un tableau de booléens, la commande utilise les éléments à partir du numéro 0 jusqu'au numéro N-1.

Si vous ne passez pas le paramètre *nomEnsemble* ou si vous passez une chaîne vide, la commande s’applique à l’ensemble système Userset.

## Gestion des erreurs 

Dans un tableau d'entier longs, si un numéro d'enregistrement est invalide (enregistrement non créé), l’erreur -10503 est générée.

## Voir aussi 

[BOOLEAN ARRAY FROM SET](../commands/boolean-array-from-set)  
[CREATE SELECTION FROM ARRAY](../commands/create-selection-from-array)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 641 |
| Thread safe | yes |
| Modifie les variables | error |


