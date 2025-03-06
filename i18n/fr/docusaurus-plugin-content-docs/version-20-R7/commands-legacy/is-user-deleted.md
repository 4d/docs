---
id: is-user-deleted
title: Is user deleted
slug: /commands/is-user-deleted
displayed_sidebar: docs
---

<!--REF #_command_.Is user deleted.Syntax-->**Is user deleted** ( *réfUtilisateur* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is user deleted.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| réfUtilisateur | Integer | &#8594;  | Numéro d'identification de l'utilisateur |
| Résultat | Boolean | &#8592; | Vrai = le compte de l'utilisateur est supprimé ou n'existe pas Faux = le compte de l'utilisateur est actif |

<!-- END REF-->

#### Description 

<!--REF #_command_.Is user deleted.Summary-->La commande **Is user deleted** teste le compte de l'utilisateur dont le numéro d'identification unique est passé dans *réfUtilisateur*.<!-- END REF-->

Si le compte n'existe pas ou a été supprimé, la fonction **Is user deleted** retourne Vrai. Sinon, elle retourne Faux.

#### Gestion des erreurs 

Si vous n'avez pas les privilèges d'accès pour appeler **Is user deleted** ou si un autre process accède déjà au système de mots de passe, une erreur de privilège d'accès est générée. Vous pouvez intercepter cette erreur avec une méthode de gestion d'erreurs utilisant la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[DELETE USER](delete-user.md)  
[GET USER PROPERTIES](get-user-properties.md)  
[Set user properties](set-user-properties.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 616 |
| Thread safe | &cross; |
| Modifie les variables | error |


