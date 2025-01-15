---
id: drop-remote-user
title: DROP REMOTE USER
slug: /commands/drop-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.DROP REMOTE USER.Syntax-->**DROP REMOTE USER** ( *sessionUtilisateur* )<!-- END REF-->
<!--REF #_command_.DROP REMOTE USER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sessionUtilisateur | Text | &#8594;  | ID de la session de l'utilisateur |

<!-- END REF-->

#### Description 

<!--REF #_command_.DROP REMOTE USER.Summary-->La commande **DROP REMOTE USER** permet de déconnecter un utilisateur distant spécifique connecté à 4D Server.<!-- END REF--> 

Dans *userSession*, passez l'ID de la session de l'utilisateur que vous souhaitez déconnecter du serveur. Vous pouvez récupérer l'ID de la session à l'aide de la commande [Process activity](../commands/process-activity.md).

**Note :** Cette commande est exécutée de manière asynchrone et uniquement sur 4D Server. Si la méthode appelant la commande est exécutée localement sur un 4D distant ou monoposte, **DROP REMOTE USER** ne fait rien.

#### Exemple 

Vous souhaitez supprimer un utilisateur distant spécifique :

```4d
  // Méthode à exécuter sur le serveur
 var $userCol : Collection
 var $element : Object
 
  //déconnectez l'utilisateur distant Vanessa
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    DROP REMOTE USER($element.ID)
 End for each
```

#### Voir aussi 

[REJECT NEW REMOTE CONNECTIONS](reject-new-remote-connections.md)  
[SEND MESSAGE TO REMOTE USER](send-message-to-remote-user.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1633 |
| Thread safe | &check; |


