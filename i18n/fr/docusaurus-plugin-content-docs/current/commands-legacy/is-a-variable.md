---
id: is-a-variable
title: Is a variable
slug: /commands/is-a-variable
displayed_sidebar: docs
---

<!--REF #_command_.Is a variable.Syntax-->**Is a variable** ( *pointeur* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is a variable.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| pointeur | Pointer | &#8594;  | Pointeur à tester |
| Résultat | Boolean | &#8592; | VRAI = Pointeur pointe vers une variable FAUX = Pointeur ne pointe pas vers une variable |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is a variable.Summary-->La fonction **Is a variable** retourne Vrai si le pointeur passé dans le paramètre *pointeur* référence une variable définie.<!-- END REF--> Elle retourne Faux dans tous les autres cas (pointeur vers un champ ou table, pointeur Nil, etc.).

Si vous souhaitez connaître le nom de la variable pointée ou le numéro du champ, vous pouvez utiliser la commande [RESOLVE POINTER](resolve-pointer.md).

#### Voir aussi 

[Is nil pointer](is-nil-pointer.md)  
[RESOLVE POINTER](resolve-pointer.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 294 |
| Thread safe | &check; |
| Interdite sur le serveur ||


