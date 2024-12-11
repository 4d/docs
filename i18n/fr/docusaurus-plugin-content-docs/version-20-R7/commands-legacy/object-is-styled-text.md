---
id: object-is-styled-text
title: OBJECT Is styled text
slug: /commands/object-is-styled-text
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Is styled text.Syntax-->**OBJECT Is styled text** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Is styled text.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai si l’objet est un texte en multistyle, Faux sinon |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Is styled text.Summary-->La commande **OBJECT Is styled text** retourne **Vrai** si l’option "Multistyle" est cochée pour l’objet ou les objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF-->

L’option "Multistyle" permet d’utiliser des zones de texte riche (rich text) comportant des variations de style individuelles. Pour plus d’informations, reportez-vous à la section *Multistyle (Zone de texte riche)* dans le manuel *Mode Développement*. 

Les objets multistyles peuvent être gérés par programmation à l’aide des commandes du thème "*Texte multistyle*".

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement). 

**Note :** La commande **OBJECT Is styled text** retourne **Vrai** lorsqu'elle est appliquée à une zone 4D Write Pro.

#### Exemple 

Un formulaire comporte un champ représenté par deux objets différents, l’un avec la propriété "Multistyle" cochée, l’autre sans cette propriété cochée. Vous pouvez écrire : 

```4d
 $Style:=OBJECT Is styled text(*;"Texte_stylé")
     // retourne Vrai (l’option "Multistyle" est cochée)
 
 $Style:=OBJECT Is styled text(*;"Texte_brut")
     // retourne Faux (l’option "Multistyle" n’est cochée)
```

#### Voir aussi 

*Texte multistyle*  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1261 |
| Thread safe | &check; |
| Interdite sur le serveur ||


