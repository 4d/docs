---
id: change-string
title: Change string
slug: /commands/change-string
displayed_sidebar: docs
---

<!--REF #_command_.Change string.Syntax-->**Change string** ( *source* ; *nouveau* ; *positionDépart* ) : Text<!-- END REF-->
<!--REF #_command_.Change string.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| source | Text | &#8594;  | Chaîne de départ |
| nouveau | Text | &#8594;  | Nouveaux caractères |
| positionDépart | Integer | &#8594;  | Position de départ du remplacement |
| Résultat | Text | &#8592; | Chaîne résultante |

<!-- END REF-->

#### Description 

<!--REF #_command_.Change string.Summary-->**Change string** retourne une chaîne résultant du remplacement des caractères, dans la chaîne *source*, à partir de *positionDépart*, par la chaîne *nouveau*.<!-- END REF-->

Si *nouveau* est une chaîne vide (""), **Change string** retourne *source* inchangé. **Change string** retourne toujours une chaîne de la même longueur que *source*. Si *positionDépart* est inférieur ou supérieur à la longueur de *source*, **Change string** retourne *source*.

La fonction **Change string** est différente de [Insert string](insert-string.md) car elle remplace des caractères au lieu de les insérer.

#### Exemple 

L'exemple suivant illustre l'utilisation de **Change string**. Les résultats sont affectés à la variable *vRésultat*.

```4d
 vRésultat:=Change string("Acme";"CME";2) // vRésultat est égal à "ACME"
 vRésultat:=Change string("novembre";"déc";1) // vRésultat est égal à "décembre"
```

#### Voir aussi 

[Delete string](delete-string.md)  
[Insert string](insert-string.md)  
[Replace string](replace-string.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 234 |
| Thread safe | &check; |
| Interdite sur le serveur ||


