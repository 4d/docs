---
id: object-set-subform-container-value
title: OBJECT SET SUBFORM CONTAINER VALUE
slug: /commands/object-set-subform-container-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Syntax-->**OBJECT SET SUBFORM CONTAINER VALUE** ( *valeur* : any )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| valeur | any | &#8594;  | New value for the data source |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|19 R5|Créé|

</details>
</div>

## Description 

<!--REF #_command_.OBJECT SET SUBFORM CONTAINER VALUE.Summary-->La commande **OBJECT SET SUBFORM CONTAINER VALUE** définit la valeur courante de la source de données liée au conteneur de sous-formulaire affiché dans le formulaire parent.<!-- END REF-->

Cette commande ne peut être utilisée que dans le contexte d'un formulaire utilisé comme sous-formulaire. Dans tout autre contexte, elle n’a aucun effet.

Passez dans *valeur* une valeur du même type que la source de données liée au conteneur de sous-formulaire. La source de données doit être une [expression assignable](../../Concepts/quick-tour.md#assignable-vs-non-assignable-expressions-assignable-vs-non-assignable-expressions), sinon la commande n’a aucun effet.

Pour plus d’informations sur les variables liées et l’interaction entre formulaires et sous-formulaires, consultez la section [Utilisation de la variable ou de l'expression liée](../../FormObjects/subform_overview.md#using-the-bound-variable-or-expression).


## Exemple 

Vous trouverez un exemple détaillé dans la page [OBJECT Get subform container value](../commands/object-get-subform-container-value).


## Voir aussi 

[Form](../commands/form)  
[OBJECT Get subform container value](../commands/object-get-subform-container-value)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1784 |
| Thread safe | no |


