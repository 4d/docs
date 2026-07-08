---
id: is-field-value-null
title: Is field value Null
slug: /commands/is-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.Is field value Null.Syntax-->**Is field value Null** ( *leChamp* : Field ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field value Null.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| leField | Field | &#8594;  | Champ à évaluer |
| Résultat | Boolean | &#8592; | Vrai = le champ est NULL, Faux = le champ n'est pas NULL |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Is field value Null.Summary-->La commande **Is field value Null** retourne Vrai si le champ désigné par le paramètre *leChamp* contient la valeur NULL, et Faux sinon.<!-- END REF-->

La valeur NULL est exploitée par le moteur SQL de 4D. Pour plus d’informations, reportez-vous au Manuel de référence SQL 4D.

La valeur retournée par cette commande n'a de sens que si l'option "*Traduire les NULL en valeurs vides*" n'est pas cochée dans la définition du champ en Structure. Dans le cas contraire, elle retourne toujours **Faux**.

**Note :** Cette commande ne peut pas être utilisée avec des objets et des propriétés d'objets. Les valeurs Null contenues dans les champs objet sont gérées à l'aide de la commande [Null](../commands/null).

## Voir aussi 

[Null](../commands/null)  
[SET FIELD VALUE NULL](../commands/set-field-value-null)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 964 |
| Thread safe | yes |


