---
id: object-get-subform
title: OBJECT GET SUBFORM
slug: /commands/object-get-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SUBFORM.Syntax-->**OBJECT GET SUBFORM** ( {* ;} *objet* ; *ptrTable* ; *sousFormDetail* {; *sousFormListe*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET SUBFORM.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| ptrTable | Table | &#8592; | Pointeur vers la table du formulaire |
| sousFormDetail | Text | &#8592; | Nom du formulaire détail du sous-formulaire |
| sousFormListe | Text | &#8592; | Nom du formulaire liste du sous-formulaire (formulaire table) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT GET SUBFORM.Summary-->La commande **OBJECT GET SUBFORM** vous permet d’obtenir les noms du ou des formulaire(s) associé(s) à l’objet sous-formulaire désigné par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

La commande retourne dans le paramètre *ptrTable* un pointeur vers la table du ou des formulaire(s) utilisé(s). Si le sous-formulaire utilise un formulaire projet, le paramètre contient [Is nil pointer](is-nil-pointer.md). 

Dans les paramètres *sousFormDetail* et (optionnellement) *sousFormListe*, la commande retourne :

* le nom du formulaire détaillé si le sous-formulaire a été créé dans l'éditeur de formulaires de 4D,
* la valeur de l'attribut "name" du sous-formulaire s'il a été créé à partir d'un fichier .json ou d'un objet 4D.  
Dans les deux cas, si l'attribut "name" est indéfini, la commande retourne :  
   * pour un fichier .json, le nom du fichier .json (sans extension)  
   * pour un objet, "untitled"

S’il n’y a pas de formulaire liste, une chaîne vide est retournée dans le paramètre *sousFormListe*. 

#### Voir aussi 

[OBJECT GET SUBFORM CONTAINER SIZE](object-get-subform-container-size.md)  
[OBJECT SET SUBFORM](../commands/object-set-subform.md)  