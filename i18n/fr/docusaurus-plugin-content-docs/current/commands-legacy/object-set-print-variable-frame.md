---
id: object-set-print-variable-frame
title: OBJECT SET PRINT VARIABLE FRAME
slug: /commands/object-set-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Syntax-->**OBJECT SET PRINT VARIABLE FRAME** ( {* ;} *objet* ; *tailleVariable* {; *fixeSousForm*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| tailleVariable | Boolean | &#8594;  | Vrai = Impression taille variable, Faux = Impression taille fixe |
| fixeSousForm | Integer | &#8594;  | Options d’impression en taille fixe des sous-formulaires |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET PRINT VARIABLE FRAME.Summary-->La commande **OBJECT SET PRINT VARIABLE FRAME** vous permet de modifier la propriété d’impression en taille variable de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

La propriété d’impression en taille variable est disponible pour les objets suivants :

* variables et champs de type Texte et Image (cf. paragraphe *Impression taille variable* dans le manuel *Mode Développement*)
* zones 4D Write Pro (cf. section *Utiliser une zone 4D Write Pro* du manuel de référence de 4D Write Pro).
* sous-formulaires. Les sous-formulaires disposent d’une option supplémentaire pour l’impression en taille fixe (cf. paragraphe *Impression du sous-formulaire* dans le manuel *Mode Développement*) ; la commande permet de configurer cette option via le paramètre *fixeSousForm*.

Si vous appliquez cette commande à un objet ne prenant pas en charge cette propriété, la commande ne fait rien. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Passez un booléen dans le paramètre *tailleVariable* : si vous passez **Vrai**, l’objet sera imprimé en taille variable. Si vous passez **Faux**, il sera imprimé en taille fixe. 

Le paramètre optionnel *fixeSousForm* vous permet de définir une option supplémentaire lorsque vous avez passé **Faux** dans le paramètre *tailleVariable* et que *objet* est un sous-formulaire (il est ignoré dans tous les autres cas). Dans ce cas, vous pouvez définir le mode d’impression en taille fixe du sous-formulaire. Vous pouvez passer une des constantes suivantes, placées dans le thème "*Objets de formulaire (Propriétés)*" :

| Constante                               | Type        | Valeur | Comment                                                                                                                                                                                      |
| --------------------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Print Frame fixed with multiple records | Entier long | 2      | La taille initiale de la zone du sous-formulaire est conservée mais 4D imprime le formulaire plusieurs fois pour imprimer tous les enregistrements.                                          |
| Print Frame fixed with truncation       | Entier long | 1      | 4D n’imprime que les enregistrements qui apparaissent dans la zone du sous-formulaire. Le formulaire n’est imprimé qu’une fois et les enregistrements qui ne sont pas imprimés sont ignorés. |

#### Voir aussi 

[OBJECT GET PRINT VARIABLE FRAME](object-get-print-variable-frame.md)  