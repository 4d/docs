---
id: object-set-focus-rectangle-invisible
title: OBJECT SET FOCUS RECTANGLE INVISIBLE
slug: /commands/object-set-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Syntax-->**OBJECT SET FOCUS RECTANGLE INVISIBLE** ( {* ;} *objet* ; *invisible* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| invisible | Boolean | &#8594;  | Vrai = rectangle focus caché, Faux = rectangle focus visible |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET FOCUS RECTANGLE INVISIBLE.Summary-->La commande **OBJECT SET FOCUS RECTANGLE INVISIBLE** permet de définir ou de modifier dynamiquement l’option d’invisibilité du rectangle de focus de l’objet ou des objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> Ce paramétrage correspond à l’option **Cacher rectangle de focus** disponible pour les objets saisissables dans la Liste des propriétés en mode Développement. 

**Note :** Cette option est utilisable sous Mac OS uniquement. Elle n’a pas d’effet sous Windows. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ou un champ. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Passez **Vrai** dans le paramètre *invisible* pour cacher le rectangle de focus et **Faux** pour le laisser visible.

#### Voir aussi 

[OBJECT Get focus rectangle invisible](object-get-focus-rectangle-invisible.md)  