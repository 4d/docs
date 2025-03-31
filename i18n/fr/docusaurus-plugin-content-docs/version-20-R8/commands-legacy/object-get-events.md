---
id: object-get-events
title: OBJECT GET EVENTS
slug: /commands/object-get-events
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET EVENTS.Syntax-->**OBJECT GET EVENTS** ( {* ;} *objet* ; *tabEvénements* )<!-- END REF-->
<!--REF #_command_.OBJECT GET EVENTS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet ou "" pour désigner le formulaire (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| tabEvénements | Integer array | &#8592; | Tableau des événements activés |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET EVENTS.Summary-->La commande **OBJECT GET EVENTS** vous permet de d’obtenir la configuration courante des événements formulaire du formulaire, de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

Les événements formulaire peuvent avoir été activés/désactivés soit via la Liste des propriétés, soit via la commande [OBJECT SET EVENTS](object-set-events.md) si elle a été appelée dans le process courant.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).  
Pour obtenir la configuration des événements du formulaire lui-même, passez le paramètre optionnel *\** et une chaîne vide "" dans *objet* : dans ce cas, vous désignez le formulaire courant. 

**Note :** Si vous souhaitez obtenir les événements d’un sous-formulaire lié à une table, seule la syntaxe basée sur le nom d’objet peut être utilisée.

Passez dans le paramètre *tabEvénements* un tableau Entier long. A l’exécution de la commande, ce tableau est automatiquement dimensionné et reçoit tous les événements formulaire prédéfinis ou personnalisés activés pour l’objet ou le formulaire. Vous pouvez comparer les valeurs reçues aux constantes du thème "*Evénements formulaire*".

Attention, le tableau *tabEvénements* est retourné vide si aucune méthode objet n’est associée à l’*objet* ou si aucune méthode formulaire n’est associée au formulaire. 

#### Exemple 

Vous souhaitez activer deux événements et obtenir la liste des événements pour un objet :

```4d
 ARRAY LONGINT($TabCurEvents;0)
 ARRAY LONGINT($TabActiv;2)
 $TabActiv{1}:=On Header Click
 $TabActiv{2}:=On Footer Click
 OBJECT SET EVENTS(*;"Col1";$TabActiv;Enable events others unchanged)
 OBJECT GET EVENTS(*;"Col1";$TabCurEvents)
```

#### Voir aussi 

[OBJECT SET EVENTS](object-set-events.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1238 |
| Thread safe | &cross; |


