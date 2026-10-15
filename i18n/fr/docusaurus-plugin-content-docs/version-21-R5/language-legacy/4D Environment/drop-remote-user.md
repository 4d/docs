---
id: drop-remote-user
title: DROP REMOTE USER
slug: /commands/drop-remote-user
displayed_sidebar: docs
---

<!--REF #_command_.DROP REMOTE USER.Syntax-->**DROP REMOTE USER** ( *sessionUtilisateur* : Text )<!-- END REF-->
<!--REF #_command_.DROP REMOTE USER.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sessionUtilisateur | Text | &#8594;  | ID de la session de l'utilisateur |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|17 R4|Créé|

</details>
</div>

## Description 

<!--REF #_command_.DROP REMOTE USER.Summary-->La commande **DROP REMOTE USER** permet de déconnecter un utilisateur distant spécifique connecté à 4D Server.<!-- END REF--> 

Dans *userSession*, passez l'ID de la session de l'utilisateur que vous souhaitez déconnecter du serveur. Vous pouvez récupérer l'ID de la session à l'aide de la commande [Process activity](../commands/process-activity).

**Note :** Cette commande est exécutée de manière asynchrone et uniquement sur 4D Server. Si la méthode appelant la commande est exécutée localement sur un 4D distant ou monoposte, **DROP REMOTE USER** ne fait rien.

## Exemple 

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

## Voir aussi 

[REJECT NEW REMOTE CONNECTIONS](../commands/reject-new-remote-connections)  
[SEND MESSAGE TO REMOTE USER](../commands/send-message-to-remote-user)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1633 |
| Thread safe | yes |


