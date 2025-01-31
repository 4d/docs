---
id: object-get-style-sheet
title: OBJECT Get style sheet
slug: /commands/object-get-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get style sheet.Syntax-->**OBJECT Get style sheet** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get style sheet.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| Résultat | Text | &#8592; | Nom de la feuille de style |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get style sheet.Summary-->La commande **OBJECT Get style sheet** retourne le nom de la feuille de style associée à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF-->

La feuille de style peut avoir été affectée en mode Développement via la Liste des propriétés ou pour le process courant via la commande [OBJECT SET STYLE SHEET](object-set-style-sheet.md). 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

La commande peut retourner soit :

* un nom de feuille de style,
* une chaîne vide ("") si aucune feuille de style n’est affectée,
* une des valeurs de constantes suivantes du thème "*Styles de caractères*" si une feuille de style automatique est affectée :  

| Constante                         | Type   | Valeur                              | Comment                                                                                                                                   |  
| --------------------------------- | ------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |  
| Automatic style sheet             | Chaîne | \_\_automatic\_\_                   | Utilisée par défaut pour tous les objets                                                                                                  |  
| Automatic style sheet\_additional | Chaîne | \_\_automatic\_additional\_text\_\_ | Prise en charge par les textes statiques, champs et variables uniquement. Utilisée pour du texte additionnel dans les boîtes de dialogue. |  
| Automatic style sheet\_main       | Chaîne | \_\_automatic\_main\_text\_\_       | Prise en charge par les textes statiques, champs et variables uniquement. Utilisée pour le texte principal des boîtes de dialogue.        |

Si la commande désigne plusieurs objets, la feuille de style retournée n’est significative que si elle est affectée à tous les objets. 

#### Note de compatibilité 

Dans **l'architecture Projet**, seules les trois feuilles de style automatiques sont prises en charge par cette commande.

#### Voir aussi 

[OBJECT SET STYLE SHEET](object-set-style-sheet.md)  
*Styles de caractères*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1258 |
| Thread safe | &cross; |


