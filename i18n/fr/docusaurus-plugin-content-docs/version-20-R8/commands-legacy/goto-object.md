---
id: goto-object
title: GOTO OBJECT
slug: /commands/goto-object
displayed_sidebar: docs
---

<!--REF #_command_.GOTO OBJECT.Syntax-->**GOTO OBJECT** ( {* ;} *objet* )<!-- END REF-->
<!--REF #_command_.GOTO OBJECT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié = objet est un nom d’objet (chaîne) Si omis = objet est un champ ou une variable |
| objet | Field, Variable | &#8594;  | Nom d’objet (si * spécifié) sinon Variable ou champ saisissable à sélectionner |

<!-- END REF-->

#### Description 

<!--REF #_command_.GOTO OBJECT.Summary-->La commande **GOTO OBJECT** permet de sélectionner l'objet saisissable *objet* (variable ou champ) en tant que zone active du formulaire.<!-- END REF--> C'est l'équivalent d'un clic de l'utilisateur dans la zone ou de l'utilisation de la touche **Tabulation** pour sélectionner le champ ou la variable.

Si vous passez le paramètre optionnel *\**, vous indiquez que le second paramètre désigne le nom d'un objet (une chaîne). Si vous ne passez pas le paramètre *\**, vous indiquez que le paramètre désigne un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne de caractères mais la référence du champ ou de la variable (champs ou variables texte uniquement). Pour plus d'informations sur les noms d'objets, reportez-vous à la section *Objets de formulaires*.

Pour supprimer tout focus dans le formulaire courant, appelez la commande en passant un nom d'objet vide dans *objet* (cf. exemple 2). 

La commande **GOTO OBJECT** peut être utilisée dans le contexte d’un sous-formulaire. Lorsqu’elle est appelée depuis un sous-formulaire, elle recherche en premier lieu objet dans le sous-formulaire puis, si la recherche n’aboutit pas, elle étend la recherche aux objets du formulaire parent.

#### Exemple 1 

Voici les deux modes d'utilisation de la commande **GOTO OBJECT** : 

```4d
 GOTO OBJECT([Personnel]Nom) //Référence de champ
 GOTO OBJECT(*;"ZonePrénoms") //Nom d'objet
```

#### Exemple 2 

Vous souhaitez que plus aucun objet du formulaire n'ait le focus : 

```4d
 GOTO OBJECT(*;"")
```

#### Exemple 3 

Reportez-vous à l'exemple de la commande [REJECT](reject.md).

#### Voir aussi 

[CALL SUBFORM CONTAINER](call-subform-container.md)  
[REJECT](reject.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 206 |
| Thread safe | &cross; |


