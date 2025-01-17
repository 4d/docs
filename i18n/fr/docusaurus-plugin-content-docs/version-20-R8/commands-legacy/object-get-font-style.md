---
id: object-get-font-style
title: OBJECT Get font style
slug: /commands/object-get-font-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get font style.Syntax-->**OBJECT Get font style** ( * ; *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get font style.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) <br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable ou champ (si * est omis) |
| Résultat | Integer | &#8592; | Style de police |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get font style.Summary-->La commande **OBJECT Get font style** retourne le style courant de la police de caractères utilisée par le ou les objet(s) de formulaire désigné(s) par *objet*.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

Vous pouvez comparer la valeur retournée par la commande à la valeur d’une ou plusieurs des constantes prédéfinies suivantes, placées dans le thème *Styles de caractères* :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Plain     | Entier long | 0      |
| Bold      | Entier long | 1      |
| Italic    | Entier long | 2      |
| Underline | Entier long | 4      |

#### Voir aussi 

[OBJECT SET FONT STYLE](object-set-font-style.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1071 |
| Thread safe | &cross; |


