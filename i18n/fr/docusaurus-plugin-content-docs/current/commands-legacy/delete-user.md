---
id: delete-user
title: DELETE USER
slug: /commands/delete-user
displayed_sidebar: docs
---

<!--REF #_command_.DELETE USER.Syntax-->**DELETE USER** ( *réfUtilisateur* )<!-- END REF-->
<!--REF #_command_.DELETE USER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| réfUtilisateur | Integer | &#8594;  | Numéro d'identification de l'utilisateur à supprimer |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.DELETE USER.Summary-->La commande **DELETE USER** supprime l'utilisateur dont le numéro est passé dans *réfUtilisateur*.<!-- END REF--> Vous devez passer un numéro valide d'utilisateur, retourné par la commande [GET USER LIST](get-user-list.md). 

Si le compte de l'utilisateur n'existe pas ou a déjà été supprimé, une erreur -9979 est genérée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md).

Seuls le Super\_Utilisateur et l'Administrateur peuvent supprimer des utilisateurs. Il n'est pas possible à l'Administrateur de supprimer un utilisateur créé par le Super\_Utilisateur. 

Les utilisateurs supprimés n'apparaissent plus dans l'éditeur d'utilisateurs affiché lorsque vous appelez [EDIT ACCESS](edit-access.md) ni en mode Développement. A noter que les numéros des utilisateurs supprimés peuvent être réattribués lors de la création de nouveaux comptes. 

#### Gestion des erreurs 

Si vous n'avez pas les privilèges d'accès pour appeler **DELETE USER** ou si un autre process accède déjà au système de mots de passe, une erreur de privilège d'accès est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs installée par la commande [ON ERR CALL](on-err-call.md). 

#### Voir aussi 

[GET USER LIST](get-user-list.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Is user deleted](is-user-deleted.md)  
[Set user properties](set-user-properties.md)  