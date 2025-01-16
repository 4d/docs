---
id: current-user
title: Current user
slug: /commands/current-user
displayed_sidebar: docs
---

<!--REF #_command_.Current user.Syntax-->**Current user** {( *utilisateur* )} : Text<!-- END REF-->
<!--REF #_command_.Current user.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| utilisateur | Integer | &#8594;  | Alias utilisateur ou compte utilisateur 4D |
| Résultat | Text | &#8592; | Nom de l'utilisateur courant |

<!-- END REF-->

#### Description 

<!--REF #_command_.Current user.Summary-->**Current user** retourne l'alias ou le compte de l'utilisateur courant.<!-- END REF-->

Par défaut, la commande retourne l'alias utilisateur si le paramètre *utilisateur* est omis, ou si un alias a été défini à l'aide de [SET USER ALIAS](set-user-alias.md) durant la session. Sinon, elle retourne le nom du compte utilisateur 4D.

Dans le paramètre optionnel *utilisateur*, vous pouvez indiquer, parmi les constantes suivantes, celle que vous voulez retourner :

| Constante                | Valeur | Comment                                                                                                                                                                                                   |
| ------------------------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 4D user account          | 1      | Nom du compte utilisateur 4D.                                                                                                                                                                             |
| 4D user alias            | 2      | Autre dénomination pour le nom du compte utilisateur 4D s'il a été défini avec la commande [SET USER ALIAS](set-user-alias.md), ou chaîne vide ("") si aucun alias n'a été défini pour l'utilisateur 4D.  |
| 4D user alias or account | 0      | Autre dénomination pour le nom du compte utilisateur 4D tel qu'il est défini avec la commande [SET USER ALIAS](set-user-alias.md), ou nom courant du compte utilisateur 4D si aucun alias n'a été défini. |

#### Exemple 

Reportez-vous à l'exemple de la commande [User in group](user-in-group.md).

#### Voir aussi 

[CHANGE CURRENT USER](change-current-user.md)  
[CHANGE PASSWORD](change-password.md)  
[SET USER ALIAS](set-user-alias.md)  
[User in group](user-in-group.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 182 |
| Thread safe | &check; |


