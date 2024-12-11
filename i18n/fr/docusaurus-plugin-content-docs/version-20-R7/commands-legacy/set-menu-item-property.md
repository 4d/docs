---
id: set-menu-item-property
title: SET MENU ITEM PROPERTY
slug: /commands/set-menu-item-property
displayed_sidebar: docs
---

<!--REF #_command_.SET MENU ITEM PROPERTY.Syntax-->**SET MENU ITEM PROPERTY** ( *menu* ; *ligneMenu* ; *propriété* ; *valeur* {; *process*} )<!-- END REF-->
<!--REF #_command_.SET MENU ITEM PROPERTY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| menu | Integer, Text | &#8594;  | Référence de menu ou Numéro de menu |
| ligneMenu | Integer | &#8594;  | Numéro de ligne de menu ou -1 pour la dernière ligne ajoutée au menu |
| propriété | Text | &#8594;  | Type de propriété |
| valeur | Text, Number, Boolean | &#8594;  | Valeur de la propriété |
| process | Integer | &#8594;  | Numéro de process |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET MENU ITEM PROPERTY.Summary-->La commande **SET MENU ITEM PROPERTY** permet de fixer la *valeur* de la *propriété* pour la ligne de menu désignée par les paramètres *menu* et *ligneMenu*.<!-- END REF-->   
Vous pouvez passer -1 dans *ligneMenu* afin de désigner la dernière ligne ajoutée au menu.

Vous pouvez passer dans *menu* un identifiant unique de menu ([RefMenu](# "Référence unique de menu (16 caractères alphanumériques)")) ou un numéro de menu. Si vous passez un identifiant unique, la commande s’appliquera à toutes les instances du menu dans tous les process. Dans ce cas, le paramètre *process* est ignoré s’il est passé. Si vous passez un numéro de menu, la commande s’appliquera au menu correspondant dans la barre de menus principale du process courant. Si vous souhaitez désigner un autre process, passez son numéro dans le paramètre facultatif *process*.

Passez dans le paramètre *propriété* la propriété dont vous souhaitez modifier la valeur et dans *valeur*, la nouvelle valeur. Pour le paramètre *propriété*, vous pouvez utiliser l’une des constantes du thème “*Propriétés des lignes de menu*” ou toute valeur personnalisée :

**Propriété standard** : les constantes du thème “*Propriétés des lignes de menu*” ainsi que leurs valeurs possibles sont décrites ci-dessous. A noter que dans le cas de la propriété Associated standard action, vous pouvez passer une des constantes du thème “*Valeurs pour Actions standard associée*” dans le paramètre *valeur*.  

| Constante                  | Type   | Valeur                           | Comment                                                                                                                                                                                                                                       |
| -------------------------- | ------ | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Access privileges          | Chaîne | 4D\_access\_group                | Affecter un groupe d’accès à la commande<br/>0 = Sans restriction<br/>>0 = Numéro de groupe                                                                                                                                   |
| Associated standard action | Chaîne | 4D\_standard\_action             | Associer une action standard à la ligne de menu<br/>Voir les constantes du thème "*Action standard*"                                                                                                                                  |
| n/a                        | Chaîne | 4D\_execute\_without\_validating | Activer l'option **[Exécuter sans valider](https://developer.4d.com/docs/fr/Menus/properties/#ex%C3%A9cuter-sans-valider)** (pour les éléments de menu associés aux actions standard). <br/>True=activé, False (par défaut)=désactivé |
| Start a new process        | Chaîne | 4D\_start\_new\_process          | Activer l’option "Démarrer un nouveau process"<br/>0 = Non, 1 = Oui                                                                                                                                                                   |

 Voici les constantes du thème "*Valeurs pour Actions standard associée*" : 

| Constante | Type | Valeur |
| --------- | ---- | ------ |

Pour plus d’informations sur les propriétés standard des lignes de menus, reportez-vous au chapitre “Créer des menus personnalisés” dans le manuel Mode Développement.

**Propriété personnalisée** : vous pouvez passer dans *propriété* tout texte personnalisé et lui associer une *valeur* de type texte, numérique ou booléen. Cette *valeur* sera stockée avec l’élément et pourra être récupérée via la commande [GET MENU ITEM PROPERTY](get-menu-item-property.md). Vous pouvez utiliser toute chaîne personnalisée dans le paramètre *propriété*, veillez simplement à ne pas utiliser de libellé utilisé par 4D (par convention, les propriétés définies par 4D débutent par les caractères “4D\_”).

**Note :** Si la ligne de menu correspond au libellé d’un sous-menu hiérarchique, l’action standard ne sera pas appelée lorsque la ligne de menu sera sélectionnée.

#### Voir aussi 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[GET MENU ITEM PROPERTY](get-menu-item-property.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 973 |
| Thread safe | &check; |
| Interdite sur le serveur ||


