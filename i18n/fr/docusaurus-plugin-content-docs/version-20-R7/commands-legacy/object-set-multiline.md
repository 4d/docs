---
id: object-set-multiline
title: OBJECT SET MULTILINE
slug: /commands/object-set-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MULTILINE.Syntax-->**OBJECT SET MULTILINE** ( {* ;} *objet* ; *multiLigne* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MULTILINE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| multiLigne | Integer | &#8594;  | Statut de la propriété multiligne |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.OBJECT SET MULTILINE.Summary-->La commande **OBJECT SET MULTILINE** vous permet de modifier la propriété "Multilignes" de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF-->

La propriété "Multilignes" permet de contrôler deux paramètres relatifs à l’affichage et à l’impression des zones de texte : l’affichage des mots situés en fin de ligne dans les zones mono-lignes et l’insertion automatique de retours à la ligne. Pour plus d’informations, reportez-vous au paragraphe *Multilignes* du manuel *Mode Développement*. Si vous appliquez cette commande à un objet ne prenant pas en charge cette propriété, la commande ne fait rien. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Passez dans le paramètre *multiLigne* la nouvelle valeur de l’option que vous souhaitez définir. Vous pouvez utiliser les constantes suivantes, placées dans le thème "*Objets de formulaire (Propriétés)*" :

| Constante      | Type        | Valeur | Comment                                                                                                                                                                                                                                                                                                                                            |
| -------------- | ----------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Multiline Auto | Entier long | 0      | Dans les zones mono-lignes, les mots situés en fin de ligne sont tronqués et il n’y a pas de retours à la ligne. <br/>Dans les zones multi-lignes, 4D effectue des retours à la ligne automatiques                                                                                                                                         |
| Multiline No   | Entier long | 2      | Il n’y a aucun retour à la ligne : le texte est toujours affiché sur une seule ligne. Si le champ ou la variable alpha ou texte contient des retour chariots, le texte situé après le premier retour chariot est effacé dès que la zone est modifié                                                                                                |
| Multiline Yes  | Entier long | 1      | Dans les zones mono-lignes, le texte est affiché jusqu’au premier retour chariot ou au dernier mot affichable en entier. 4D insère des retours à la ligne, il est possible de faire défiler le contenu de la zone en appuyant sur la touche flèche basse.<br/>Dans les zones multi-lignes, 4D effectue des retours à la ligne automatiques |

  
#### Exemple 

Vous souhaitez interdire le multiligne dans une zone de saisie :

```4d
 OBJECT SET MULTILINE(*;"vSaisie";Multiline No)
```

#### Voir aussi 

[OBJECT Get multiline](object-get-multiline.md)  