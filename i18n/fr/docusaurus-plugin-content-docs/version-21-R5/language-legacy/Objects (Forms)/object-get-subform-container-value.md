---
id: object-get-subform-container-value
title: OBJECT Get subform container value
slug: /commands/object-get-subform-container-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get subform container value.Syntax-->**OBJECT Get subform container value** : any<!-- END REF-->
<!--REF #_command_.OBJECT Get subform container value.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | any | &#8592; | Valeur courante de la source de données du conteneur de sous-formulaire |
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

<!--REF #_command_.OBJECT Get subform container value.Summary-->La commande **OBJECT Get subform container value** retourne la valeur courante de la source de données liée au conteneur de sous-formulaire affiché dans le formulaire parent.<!-- END REF-->

Cette commande ne peut être utilisée que dans le contexte d'un formulaire utilisé comme sous-formulaire. Dans tout autre contexte, elle retourne **Undefined**.

* Si la source de données est une expression, la commande retourne la valeur courante de l'expression, évaluée depuis le dernier cycle d'événement formulaire.
* Si la source de données est un tableau, la commande retourne l'indice du tableau (entier).

Pour plus d’informations sur les variables liées et l’interaction entre formulaires et sous-formulaires, consultez la section [Utilisation de la variable ou de l'expression liée](../../FormObjects/subform_overview.md#using-the-bound-variable-or-expression).


## Exemple 

Soit un formulaire principal et un sous-formulaire possédant tous deux un objet de formulaire de type Zone de saisie :

![](../../assets/en/commands/pict5864479.en.png)

Dans le formulaire principal, l'objet Zone de saisie et l'objet Sous-formulaire sont liés à l'expression *Form.numeric* de type Numérique.

L'objet Zone de saisie du formulaire principal et l'objet Zone de saisie du sous-formulaire ont tous deux la propriété *Sur changement de données* définie via la Liste des propriétés.

La méthode formulaire du sous-formulaire contient le code suivant :

```4d
 If(Form event code=On bound variable change)
    Form.displayNumeric:=OBJECT Get subform container value
 End if
```

Et dans le sous-formulaire, la méthode objet de la zone de saisie contient le code suivant :

```4d
 OBJECT SET SUBFORM CONTAINER VALUE(Form.displayNumeric)
```

Par conséquent, à l'exécution, la mise à jour de la valeur de l'objet Zone de saisie du formulaire principal met également à jour la valeur de l'objet Zone de saisie du sous-formulaire, et inversement.

## Voir aussi 

[Form](../commands/form)  
[OBJECT Get pointer](../commands/object-get-pointer)  
[OBJECT SET SUBFORM CONTAINER VALUE](../commands/object-set-subform-container-value)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1785 |
| Thread safe | no |


