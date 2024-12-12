---
id: get-highlight
title: GET HIGHLIGHT
slug: /commands/get-highlight
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHT.Syntax-->**GET HIGHLIGHT** ( {* ;} *objet* ; *débutSél* ; *finSél* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) <br/>Si omis, objet est un champ ou une variable |
| objet | Field, Variable, any | &#8594;  | Nom d’objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| débutSél | Integer | &#8592; | Position du début de la sélection de texte |
| finSél | Integer | &#8592; | Position de la fin de la sélection de texte |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET HIGHLIGHT.Summary-->La commande **GET HIGHLIGHT** vous permet de déterminer précisément le texte actuellement sélectionné dans *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* désigne le nom d’un objet (une chaîne). Si vous ne passez pas le paramètre *\**, vous indiquez que le paramètre *objet* désigne un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne de caractères mais la référence du champ ou de la variable (champs ou variables de formulaire uniquement).

**Note :** Cette commande ne peut pas être utilisée avec des champs situés dans le formulaire en mode liste d'un sous-formulaire.

Le texte peut être sélectionné par l'utilisateur ou par la commande [HIGHLIGHT TEXT](highlight-text.md).

Le paramètre *débutSél* retourne la position du premier caractère sélectionné.   
Le paramètre *finSél* retourne la position du dernier caractère sélectionné plus un. 

Si les valeurs *débutSél* et *finSél* retournées sont identiques, l'utilisateur n'a pas sélectionné de texte et le point d'insertion est placé devant le caractère spécifié par *débutSél*.

Si l'objet désigné par le paramètre *objet* n'est pas trouvé dans le formulaire, la commande retourne -1 dans *débutSél* et -2 dans *finSél*. 

#### Exemple 1 

L'exemple suivant récupère le texte sélectionné dans le champ *\[Produits\]Notes* : 

```4d
GET HIGHLIGHT([Products]Comments;vFirst;vLast)
If(vFirst < vlast)
    ALERT("The selected text is:"+Substring([Products]Comments;vFirst;vLast-vFirst))
End if
```

#### Exemple 2 

Reportez-vous à l'exemple de la commande [FILTER KEYSTROKE](filter-keystroke.md).

#### Exemple 3 

Modification du style du texte sélectionné :

```4d
 GET HIGHLIGHT(*;"monTexte";$debutsel,$finsel)
 ST SET ATTRIBUTES(*;"monTexte";$debutsel,$finsel;Attribute underline style;1;Attribute bold style;1)
```

#### Voir aussi 

[FILTER KEYSTROKE](filter-keystroke.md)  
[HIGHLIGHT TEXT](highlight-text.md)  
[Keystroke](keystroke.md)  