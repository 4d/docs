---
id: object-set-indicator-type
title: OBJECT SET INDICATOR TYPE
slug: /commands/object-set-indicator-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Syntax-->**OBJECT SET INDICATOR TYPE** ( {* ;} *objet* ; *indicateur* )<!-- END REF-->
<!--REF #_command_.OBJECT SET INDICATOR TYPE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| indicateur | Integer | &#8594;  | Type d’indicateur |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET INDICATOR TYPE.Summary-->La commande **OBJECT SET INDICATOR TYPE** vous permet de modifier le type d’indicateur de progression du ou des thermomètre(s) désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> 

Le type d’indicateur définit la variante d’affichage du thermomètre. Pour plus d’informations, reportez-vous à la section *Jauges* dans le manuel *Mode Développement*. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Passez dans le paramètre *indicateur* le type d’indicateur à afficher. Vous pouvez utiliser une des constantes suivantes, placées dans le thème "*Objets de formulaire (Propriétés)*" :

| Constante                 | Type        | Valeur | Comment                                                |
| ------------------------- | ----------- | ------ | ------------------------------------------------------ |
| Asynchronous progress bar | Entier long | 3      | Indicateur circulaire affichant une animation continue |
| Barber shop               | Entier long | 2      | Barre affichant une animation continue                 |
| Progress bar              | Entier long | 1      | Barre de progression standard                          |

#### Voir aussi 

[OBJECT Get indicator type](object-get-indicator-type.md)  