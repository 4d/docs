---
id: time-string
title: Time string
slug: /commands/time-string
displayed_sidebar: docs
---

<!--REF #_command_.Time string.Syntax-->**Time string** ( *secondes* ) : Text<!-- END REF-->
<!--REF #_command_.Time string.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| secondes | Integer, Time | &#8594;  | Secondes écoulées depuis minuit |
| Résultat | Text | &#8592; | Heure sous forme de chaîne au format 24 heures |

<!-- END REF-->

#### Description 

<!--REF #_command_.Time string.Summary-->La fonction **Time string** retourne sous forme de chaîne alphanumérique sur 24 heures l'expression de type Heure passée dans *secondes*.<!-- END REF-->

Le format appliqué à la chaîne est HH:MM:SS.

Si vous passez un nombre de secondes supérieur à celui qu'il y a dans un jour (86 400), **Time string** continue d'ajouter les heures, les minutes et les secondes. Par exemple, **Time string**(86401) retourne 24:00:01.

**Note :** Si vous voulez obtenir sous forme de chaîne une expression de type Heure dans des formats plus variés, utilisez la fonction [String](string.md). 

#### Exemple 

L'exemple suivant affiche une boîte de dialogue d'alerte avec le message “46800 secondes représentent 13:00:00” :

```4d
 ALERT("46800 secondes représentent "+Time string(46800))
```

#### Voir aussi 

[String](string.md)  
[Time](time.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 180 |
| Thread safe | &check; |


