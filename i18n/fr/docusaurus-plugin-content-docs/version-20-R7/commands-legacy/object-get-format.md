---
id: object-get-format
title: OBJECT Get format
slug: /commands/object-get-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get format.Syntax-->**OBJECT Get format** ( {* ;} *objet* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get format.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d’objet (si * spécifié) ou Champ ou variable (si * omis) |
| Résultat | Text | &#8592; | Format d’affichage de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get format.Summary-->La commande **OBJECT Get format** retourne le format d’affichage courant appliqué à l’objet spécifié par le paramètre *objet*.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (dans ce cas, passez une chaîne dans *objet*). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable.

Cette commande retourne le format d’affichage courant de l’objet, c’est-à-dire le format défini en mode Développement ou à l’aide de la commande [OBJECT SET FORMAT](object-set-format.md). **OBJECT Get format** fonctionne avec tous les types d’objets de formulaire (champs ou variables) acceptant un format d’affichage : booléen, date, heure, image, chaîne, numérique, ainsi que les grilles de boutons, cadrans, thermomètres, règles, pop up menus image, boutons image, boutons 3D et en-têtes de list box. Pour plus d’informations sur les formats d’affichage de ces objets, reportez-vous à la documentation de la commande [OBJECT SET FORMAT](object-set-format.md).

**Note :** Si vous appliquez la commande à un ensemble d’objets, seul le formatage du dernier objet pris en compte est retourné.

Lorsque la commande **OBJECT Get format** est appliquée à des objets dont le format a été défini à l'aide d'une constante longint (objets date, heure ou image), la chaîne retournée correspond au code de caractère de la constante. Pour obtenir la valeur de la constante, il suffit d'appliquer la fonction [Character code](character-code.md) au résultat (voir ci-dessous).

#### Exemple 1 

Cet exemple permet d’obtenir la valeur de la constante de formatage appliquée à la variable image dont le nom d’objet est “maphoto” :

```4d
 var $format : Texte
 OBJECT SET FORMAT(*;"maphoto";Char(On background))
  //Application du format sur fond (value = 3)
 $format:=OBJECT Get format(*;"maphoto")
 ALERT("Format numéro :"+String(Code de caractere($format)))
  //Affichage de la valeur "3"
```

#### Exemple 2 

Cet exemple permet d’obtenir le formatage appliqué au champ booléen \[Adhérents\]Etat\_civil : 

```4d
 var $format : Texte
 $format:=OBJECT Get format([Adhérents]Etat_civil)
 ALERT($format) //Affichage du format, par exemple "Marié;Célibataire"
```

#### Exemple 3 

Les formats personnalisés sont retournés inchangés :

```4d
 var $format : Texte
 OBJECT SET FORMAT(*;"timeinput";":m") //":" est nécessaire pour les modèles à un seul caractère
 $format:=OBJECT Get format(*;"timeinput") // ":m"
```

#### Voir aussi 

[OBJECT SET FORMAT](object-set-format.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 894 |
| Thread safe | &cross; |


