---
id: object-get-corner-radius
title: OBJECT Get corner radius
slug: /commands/object-get-corner-radius
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get corner radius.Syntax-->**OBJECT Get corner radius** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get corner radius.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Champ ou variable (si * est omis) |
| Résultat | Integer | &#8592; | Rayon des angles arrondis (en pixels) |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT Get corner radius.Summary-->La commande **OBJECT Get corner radius** retourne la valeur courante du rayon d'angles pour l'objet désigné par le paramètre *objet*.<!-- END REF--> Cette valeur peut avoir été définie au niveau du formulaire en utilisant la propriété (cf. *Rayon d'arrondi (rectangles)*), ou via la commande [OBJECT SET CORNER RADIUS](object-set-corner-radius.md) pour le process courant.

La commande **OBJECT Get corner radius** peut être utilisée avec les objets formulaires suivants :

* rectangles
* zone de saisie (projets 4D uniquement)
* zones de texte (projets 4D uniquement)

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Cette commande renvoie le rayon des angles arrondis en pixels.

Remarque : La commande renvoie 0 lorsqu'elle est appliquée à un objet qui ne prend pas en charge la propriété de rayon arrondis.

#### Exemple 

Le code suivant peut être associé à la méthode d'un bouton :

```4d
 var $radius : Integer
 $radius:=OBJECT Get corner radius(*;"GreenRect") //lire la valeur courante
 OBJECT SET CORNER RADIUS(*;"GreenRect";$radius+1) //augmenter le rayon
  // La valeur maximale est gérée automatiquement : lorsqu'elle est atteinte,
  // le bouton n'a plus d'effet
```

#### Voir aussi 

[OBJECT SET CORNER RADIUS](object-set-corner-radius.md)  