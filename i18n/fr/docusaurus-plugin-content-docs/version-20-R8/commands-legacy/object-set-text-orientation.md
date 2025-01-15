---
id: object-set-text-orientation
title: OBJECT SET TEXT ORIENTATION
slug: /commands/object-set-text-orientation
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Syntax-->**OBJECT SET TEXT ORIENTATION** ( {* ;} *objet* ; *orientation* )<!-- END REF-->
<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| orientation | Integer | &#8594;  | Valeur d’orientation de l’objet |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET TEXT ORIENTATION.Summary-->La commande **OBJECT SET TEXT ORIENTATION** vous permet de modifier l’orientation du contenu de l’objet ou des objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF-->

La propriété "Orientation", accessible dans l’éditeur de formulaires, permet d’effectuer des rotations de zones de texte de façon permanente. A la différence de cette propriété, la commande **OBJECT SET TEXT ORIENTATION** applique la rotation au contenu de l’objet mais pas à l'objet lui-même. Pour plus d’informations, reportez-vous au manuel *Mode Développement*.

 Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).   
Seuls les textes statiques ainsi que les variables et les champs non saisissables peuvent subir une rotation. Si vous appliquez la commande à un objet ne prenant pas en charge l’orientation de texte, la commande ne fait rien. 

Passez dans le paramètre *orientation* l’orientation absolue que vous souhaitez affecter à l’objet. Vous devez passer une des constantes suivantes, placées dans le thème "*Objets de formulaire (Propriétés)*" :

| Constante             | Type        | Valeur | Comment                                              |
| --------------------- | ----------- | ------ | ---------------------------------------------------- |
| Orientation 0°        | Entier long | 0      | Pas de rotation (valeur par défaut)                  |
| Orientation 180°      | Entier long | 180    | Orientation du texte à 180° dans le sens horaire     |
| Orientation 90° left  | Entier long | 270    | Orientation du texte à 90° dans le sens anti-horaire |
| Orientation 90° right | Entier long | 90     | Orientation du texte à 90° dans le sens horaire      |

**Note :** Seuls les angles correspondant à ces valeurs sont pris en charge. Si vous passez une autre valeur, elle sera ignorée. 

#### Exemple 

Vous souhaitez appliquer une orientation de 270° à une variable de votre formulaire : 

```4d
 OBJECT SET ENTERABLE(*;"maVar";False)    
   //obligatoire si la variable est saisissable
  OBJECT SET TEXT ORIENTATION(*;"maVar";Orientation 90° gauche)
```

#### Voir aussi 

[OBJECT Get text orientation](object-get-text-orientation.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1284 |
| Thread safe | &cross; |


