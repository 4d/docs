---
id: object-set-style-sheet
title: OBJECT SET STYLE SHEET
slug: /commands/object-set-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET STYLE SHEET.Syntax-->**OBJECT SET STYLE SHEET** ( {* ;} *objet* ; *nomFeuilleStyle* )<!-- END REF-->
<!--REF #_command_.OBJECT SET STYLE SHEET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| nomFeuilleStyle | Text | &#8594;  | Nom de la feuille de style |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET STYLE SHEET.Summary-->La commande **OBJECT SET STYLE SHEET** vous permet de modifier, pour le process courant, la feuille de style associée à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> Une feuille de style modifie la police, la taille de police et (hormis pour les feuilles de style automatique) le style de police.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

Passez dans le paramètre *nomFeuilleStyle* le nom de la feuille de style à appliquer à l’*objet*. Vous pouvez également passer soit :

* un nom de feuille de style existante (si la feuille de style n’existe pas, une erreur est retournée, que vous pouvez intercepter l’aide d’une méthode installée par la commande [ON ERR CALL](on-err-call.md)),
* une chaîne vide ("") pour ne pas appliquer de feuille de style à l’*objet*.
* une des constantes suivantes du thème "*Styles de caractères*" pour appliquer une feuille de style automatique :  

| Constante                         | Type   | Valeur                              | Comment                                                                                                                                   |  
| --------------------------------- | ------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |  
| Automatic style sheet             | Chaîne | \_\_automatic\_\_                   | Utilisée par défaut pour tous les objets                                                                                                  |  
| Automatic style sheet\_additional | Chaîne | \_\_automatic\_additional\_text\_\_ | Prise en charge par les textes statiques, champs et variables uniquement. Utilisée pour du texte additionnel dans les boîtes de dialogue. |  
| Automatic style sheet\_main       | Chaîne | \_\_automatic\_main\_text\_\_       | Prise en charge par les textes statiques, champs et variables uniquement. Utilisée pour le texte principal des boîtes de dialogue.        |

Si une feuille de style avait déjà été associée à l’objet en mode Développement, l’appel de cette commande la remplace pour le process courant. 

Si vous utilisez au cours de la session les commandes [ST SET ATTRIBUTES](st-set-attributes.md), [ST SET TEXT](st-set-text.md), [OBJECT SET FONT](object-set-font.md) ou [OBJECT SET FONT SIZE](object-set-font-size.md) sur l’*objet* afin de modifier sa police ou sa taille de police, la référence à la feuille de style est automatiquement supprimée de l’objet -- même si vous affectez des attributs identiques à ceux de la feuille de style. En revanche, si vous modifiez le style (gras, italique...), par exemple avec les commandes [ST SET ATTRIBUTES](st-set-attributes.md) ou [OBJECT SET FONT STYLE](object-set-font-style.md), ces nouvelles propriétés s’ajoutent à la feuille de style pour la durée de la session.

##### Note de compatibilité 

Dans **l'architecture Projet**, seules les trois feuilles de style automatiques sont prises en charge par cette commande.

#### Voir aussi 

[GET STYLE SHEET INFO](get-style-sheet-info.md)  
[LIST OF STYLE SHEETS](list-of-style-sheets.md)  
[OBJECT Get style sheet](object-get-style-sheet.md)  
*Styles de caractères*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1257 |
| Thread safe | &check; |
| Interdite sur le serveur ||


