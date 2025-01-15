---
id: wp-select
title: WP SELECT
slug: /WritePro/commands/wp-select
displayed_sidebar: docs
---

<!--REF #_command_.WP SELECT.Syntax-->**WP SELECT** ( {{* ;} *zoneWP*;} {*objCible*} {; *débutPlage* ; *finPlage*} )<!-- END REF-->
<!--REF #_command_.WP SELECT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, zoneWP est un nom d'objet de formulaire (chaîne). Si omis, zoneWP est un champ ou une variable objet (document) |
| zoneWP | Text, Object | &#8594;  | Nom d'objet de formulaire (si * spécifié) ou champ ou variable objet 4D Write Pro (si * omis) |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| débutPlage | Integer | &#8594;  | Position du début de la plage texte |
| finPlage | Integer | &#8594;  | Position de la fin de la plage texte |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP SELECT.Summary-->La commande **WP SELECT** crée une nouvelle sélection dans la zone de 4D Write Pro *zoneWP*, basée sur l'*objCible* ou la plage définie par *débutPlage* et *finPlage*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *zoneWP* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *zoneWP* est un champ ou une variable objet. Si le paramètre *zoneWP* ne désigne pas une zone 4D Write Pro, la commande ne fait rien.

**Note :** Cette commande ne peut être utilisée que si *zoneWP* est associée à un objet de formulaire (i.e. elle est affichée dans le formulaire/la page courant(e)).

Pour définir la sélection, vous pouvez passer soit un objet existant dans *objCible*, soit des bornes de sélection dans *débutPlage* / *finPlage*.

Les syntaxes suivantes sont prises en charge :

* *WP SELECTIONNER({\* ;} zoneWP; objCible)*,  
où *objCible* peut être :  
   * soit une plage 4D Write Pro  
   * soit un élément (tableau / ligne / paragraphe / image en ligne ou ancrée / zone de texte / corps / en-tête / pied de page / section / sous-section).  
   * soit un document 4D Write Pro (seul l'élément corps est utilisé).
* *WP SELECTIONNER({\* ;} zoneWP; débutPlage ; finPlage)*
* *WP SELECTIONNER (* *objCible* *{;* *débutPlage ; finPlage* *} )*,  
où *objCible* peut être :  
   * soit une plage  
   * soit un élément (tableau / ligne / paragraphe / image en ligne ou ancrée / corps / en-tête / pied de page / section / sous-section).  
où *débutPlage* et *finPlage* peuvent être uniquement utilisés avec les éléments suivants : corps / en-tête / pied / section / sous-section.

Dans *débutPlage* et *finPlage,* passez des valeurs correspondant à la position du premier et du dernier caractère à sélectionner dans le document. Vous pouvez passer wk start text dans *débutPlage* pour désigner le début du document et wk end text dans *finPlage* pour désigner la fin du document. N'oubliez pas qu'un document 4D Write Pro ne contient pas seulement du texte visible mais également des caractères de formatage et des balises qui sont inclus dans la plage.

#### Exemple 

Le code suivant :

```4d
 $range:=WP Text range([SAMPLE]WP;wk start text;12)
 WP SELECT(*;"WParea";$range)
```

... aura le même résultat que :

```4d
 WP SELECT(*;"WParea";wk start text;12)
```

#### Voir aussi 

[WP Text range](wp-text-range.md)  