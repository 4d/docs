---
id: listbox-set-hierarchy
title: LISTBOX SET HIERARCHY
slug: /commands/listbox-set-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HIERARCHY.Syntax-->**LISTBOX SET HIERARCHY** ( {* ;} *objet* ; *hiérarchique* {; *hiérarchie*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HIERARCHY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| hiérarchique | Boolean | &#8594;  | Vrai = list box hiérarchique, Faux = list box non hiérarchique |
| hiérarchie | Pointer array | &#8594;  | Tableau de pointeurs |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET HIERARCHY.Summary-->La commande **LISTBOX SET HIERARCHY** vous permet de configurer l'objet list box désigné par les paramètres *objet* et *\** en mode hiérarchique ou non.<!-- END REF--> 

**Note :** Cette commande fonctionne uniquement avec les list box basées sur des tableaux. Si elle est utilisée avec une list box basée sur des sélections, elle ne fait rien.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Le paramètre booléen *hiérarchique* vous permet de définir le mode de la list box :

* si vous passez Vrai, la list box est affichée en mode hiérarchique,
* si vous passez Faux, la list box est affichée en mode non hiérarchique (mode tableau standard).

Lorsque vous passez une list box en mode hiérarchique, certaines propriétés sont automatiquement restreintes. Pour plus d’informations, reportez-vous à la section *Gestion des List box hiérarchiques*. 

Le paramètre *hiérarchie* vous permet de désigner les tableaux de la list box à utiliser pour construire la hiérarchie (cf. exemple).  
Si vous affichez la list box en mode hiérarchique et omettez ce paramètre :

* si la list box est déjà en mode hiérarchique, la commande ne fait rien.
* si la list box est en mode non hiérarchique et n’a jamais été déclarée hiérarchique, le premier tableau est utilisé comme hiérarchie par défaut.
* si la list box est en mode non hiérarchique mais avait été déclarée hiérarchique précédemment, la dernière hiérarchie est rétablie.

#### Exemple 

Définition des tableaux tPays, tRegion et tVille comme hiérarchie d’une list box :

```4d
 ARRAY POINTER($TabHierarch;3)
 $TabHierarch{1}:=->tPays //Premier niveau de rupture
 $TabHierarch{2}:=->tRegion //Deuxième niveau de rupture
 $TabHierarch{3}:=->tVille //Troisième niveau de rupture
 LISTBOX SET HIERARCHY(*;"mylistbox";True;$TabHierarch)
```

#### Voir aussi 

[LISTBOX GET HIERARCHY](listbox-get-hierarchy.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1098 |
| Thread safe | &cross; |


