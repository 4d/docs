---
id: object-set-corner-radius
title: OBJECT SET CORNER RADIUS
slug: /commands/object-set-corner-radius
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET CORNER RADIUS.Syntax-->**OBJECT SET CORNER RADIUS** ( {* ;} *objet* ; *rayon* )<!-- END REF-->
<!--REF #_command_.OBJECT SET CORNER RADIUS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Champ ou variable (si * est omis) |
| rayon | Integer | &#8594;  | Nouveau rayon des angles arrondis (en pixels) |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET CORNER RADIUS.Summary-->La commande **OBJECT SET CORNER RADIUS** vous permet de modifier le rayon des angles du ou des objet(s) que vous avez passés dans le paramètre *objet*.<!-- END REF--> Le nouveau rayon est défini pour le process uniquement, il n'est pas stocké dans le formulaire. 

Vous pouvez utiliser cette commande avec les objets de formulaire suivants :

* rectangles
* zones de saisie (projets 4D uniquement)
* zones de texte (projets 4D uniquement)

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Dans le paramétre *radius*, vous passez une nouvelle valeur de rayon en pixels à appliquer aux angles de l'objet. 

Remarque : avec les objets de type zones de saisie et zones de texte, la propriété de rayon d'angle n'est disponible qu'avec les styles de ligne de bordure "Aucune", "solid" ou "Trait pointillé".

Vous pouvez modifier cette valeur au niveau du formulaire à l'aide de la *proprieté corner radius* (voir également *Rayon d'arrondi (rectangles)*).

#### Exemple 1 

Votre formulaire contient les rectangles suivants, nommés "Rect1" et "Rect2" :

![](../assets/en/commands/pict1629574.en.png)

Vous pouvez exécuter le code suivant afin de changer leurs angles arrondis :

```4d
 OBJECT SET CORNER RADIUS(*;"Rect@";20)
```

![](../assets/en/commands/pict1629576.en.png)

#### Exemple 2 

Soit la zone de texte suivante dans votre formulaire, nommée "required-label":

![](../assets/en/commands/pict6074566.en.png)

Si vous exécutez le code suivant :

```4d
 OBJECT SET CORNER RADIUS(*;"required-label";10)
```

![](../assets/en/commands/pict6074568.en.png)

Notez que pour les zones de texte (ainsi que pour les zones de saisie), contrairement aux rectangles, l'arrondi de l'angle est dessiné en dehors de la zone initiale de l'objet.

#### Voir aussi 

[OBJECT Get corner radius](object-get-corner-radius.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1323 |
| Thread safe | &cross; |


