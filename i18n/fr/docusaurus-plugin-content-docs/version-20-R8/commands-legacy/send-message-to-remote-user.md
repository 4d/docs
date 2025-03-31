---
id: send-message-to-remote-user
title: SEND MESSAGE TO REMOTE USER
slug: /commands/send-message-to-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Syntax-->**SEND MESSAGE TO REMOTE USER** ( *message* {; *sessionUtilisateur*} )<!-- END REF-->
<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| message | Text | &#8594;  | Texte envoyé à l'utilisateur |
| sessionUtilisateur | Text | &#8594;  | ID de la session de l'utilisateur |

<!-- END REF-->

#### Description 

<!--REF #_command_.SEND MESSAGE TO REMOTE USER.Summary-->La commande **SEND MESSAGE TO REMOTE USER** permet d'envoyer un message à tous les utilisateurs distants ou à un utilisateur distant spécifique.<!-- END REF--> 

Dans *message*, passez le texte du message à afficher. Il sera affiché sous forme d'alerte ou de notification sur l'écran du ou des utilisateur(s) de la session.

Le paramètre optionnel *sessionUtilisateur* peut être utilisé pour désigner un utilisateur spécifique en passant l'ID de sa session. Vous pouvez récupérer l'ID de la session à l'aide de la commande [Process activity](../commands/process-activity.md). Si *sessionUtilisateur* est omis, le message est envoyé à tous les utilisateurs.

**Note** : Cette commande ne peut être exécutée que sur 4D Server. Si la méthode appelant la commande est exécutée localement sur un 4D distant ou monoposte, **SEND MESSAGE TO REMOTE USER** ne fait rien.

#### Exemple 

Vous souhaitez envoyer un message à tous les utilisateurs, puis à un utilisateur spécifique :

```4d
  // Méthode à exécuter sur le serveur
 var $message : Text
 var $element : Object
 var $userCol : Collection
 
  // récupérez l'information sur la session
 $userCol:=(Get process activity(Sessions only)).sessions
 
  // envoyez un message à tous les utilisateurs
 $message:="Une opération de maintenance est prévue à 22h. Le serveur sera redémarré. Veuillez vous déconnecter avant 22h."
 SEND MESSAGE TO REMOTE USER($message)
 
  // envoyez un message à un seul utilisateur, "Vanessa"
 $message:="Salut Vanessa"
 $userCol:=Get process activity(Sessions only).sessions.query("systemUserName = :1";"Vanessa")
 For each($element;$userCol)
    SEND MESSAGE TO REMOTE USER($message;$element.ID)
 End for each
```

#### Voir aussi 

[DROP REMOTE USER](drop-remote-user.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1632 |
| Thread safe | &check; |


