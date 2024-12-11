---
id: object-get-print-variable-frame
title: OBJECT GET PRINT VARIABLE FRAME
slug: /commands/object-get-print-variable-frame
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Syntax-->**OBJECT GET PRINT VARIABLE FRAME** ( {* ;} *objet* ; *tailleVariable* {; *fixeSousForm*} )<!-- END REF-->
<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| tailleVariable | Boolean | &#8592; | Vrai = Impression taille variable, Faux = Impression taille fixe |
| fixeSousForm | Integer | &#8592; | Option d’impression en taille fixe des sous-formulaires |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET PRINT VARIABLE FRAME.Summary-->La commande **OBJECT GET PRINT VARIABLE FRAME** vous permet de d’obtenir la configuration courante des options d’impression en taille variable de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

Les propriétés d’impression en taille variable peuvent être définies via la Liste des propriétés ou la commande [OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md). 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

La commande retourne dans le paramètre *tailleVariable* une variable booléenne dont la valeur indique le statut activé (**Vrai**) ou inactivé (**Faux**) de l’impression en taille variable.

Si l’*objet* est un sous-formulaire et si l’impression en taille variable est à **Faux**, la commande retourne également dans le paramètre *fixeSousForm* l’option d’impression en taille fixe du sous-formulaire. Vous pouvez comparer la valeur retournée aux constantes suivantes, placées dans le thème "*Objets de formulaire (Propriétés)*" :

| Constante                               | Type        | Valeur | Comment                                                                                                                                                                                      |
| --------------------------------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Print Frame fixed with multiple records | Entier long | 2      | La taille initiale de la zone du sous-formulaire est conservée mais 4D imprime le formulaire plusieurs fois pour imprimer tous les enregistrements.                                          |
| Print Frame fixed with truncation       | Entier long | 1      | 4D n’imprime que les enregistrements qui apparaissent dans la zone du sous-formulaire. Le formulaire n’est imprimé qu’une fois et les enregistrements qui ne sont pas imprimés sont ignorés. |

#### Voir aussi 

[OBJECT SET PRINT VARIABLE FRAME](object-set-print-variable-frame.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1241 |
| Thread safe | &check; |
| Interdite sur le serveur ||


