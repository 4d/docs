---
id: desktop-sessions
title: Sessions Desktop
---

## Vue d’ensemble

A desktop session is a user-related execution context on 4D Server, 4D remote, or 4D single-user that **does not result from any web or REST access**.

Les sessions desktop comprennent :

- **Remote user sessions**: In client/server applications, remote users have their own sessions, managed from the client and from the server.
- les **Sessions des procédures stockées** : Dans les applications client/serveur, la session utilisateur virtuelle unique qui gère toutes les procédures stockées exécutées sur le serveur.
- les **Sessions autonomes**: Objet de session locale retourné dans une application mono-utilisateur (utile dans les phases de développement et de test des applications client/serveur).

Le diagramme suivant montre les différents types de sessions et leur interaction :

![](../assets/en/Desktop/sessions.png)

Tout comme dans une [**session utilisateur web**](../WebServer/sessions.md), le code exécuté dans une session desktop a accès à un objet [`Session`](../API/SessionClass.md) qui fournit des fonctions et des propriétés permettant de stocker les valeurs de session et de les partager entre les process utilisateur, par exemple en utilisant l'objet [`session.storage`](../API/SessionClass.md#storage).

Toutefois, à la différence du code exécuté dans les sessions utilisateurs Web, le code exécuté dans les sessions desktop n'est pas soumis aux règles des [rôles et privilèges](../ORDA/privileges.md). It can access any parts of the 4D application, including ORDA and data model classes (on 4D Server, [users and groups feature](../Users/handling_users_groups.md) can manage user accesses). Note also that desktop sessions do not require [scalable sessions](../WebServer/sessions.md#enabling-web-sessions) to be enabled.

You can nevertheless [**share** a remote session with a web session](#sharing-a-remote-session-for-web-accesses) so that desktop application users can access your 4D application through a web interface, using in particular **Qodly pages** and Web areas.

## Sessions utilisateurs distants {#remote-user-sessions}

In client/server applications, when a user connects to the server, a **remote user session object** is created and available on both the server and the client. It is returned by the [`Session`](../commands/session) command on both machines.

Cet objet est géré via les fonctions et les propriétés de la classe [`Session`](../API/SessionClass.md).

### Comparing server-side and client-side user session objects {#comparing-server-side-and-client-side-user-session-objects}

Depending on where the code is executed, a server-side or a client-side user `session` object is available. Both objects are similar, except that:

- their [`.storage`](../API/SessionClass.md#storage) properties are not the same object. A value stored in the `.storage` of the user session on the server will not be available in the `.storage` of the user session on the client and conversely.
- for security reasons, the client-side session cannot execute functions that **modify** [privileges](../ORDA/privileges.md) ([`setPrivileges()`](../API/SessionClass.md#setprivileges), [`clearPrivileges()`](../API/SessionClass.md#clearprivileges), [`promote()`](../API/SessionClass.md#promote), [`demote()`](../API/SessionClass.md#demote), [`restore()`](../API/SessionClass.md#restore)). Calling these functions on a client generates an error.

:::note

Functions that read privileges can be called on both client and server sides ([`getPrivileges()`](../API/SessionClass.md#getprivileges), [`hasPrivilege()`](../API/SessionClass.md#hasprivilege), [`isGuest()`](../API/SessionClass.md#isguest))

:::

### Utilisation

You use the remote user `session` object to manage and share session data.

Within each environment, a [session `storage`](../API/SessionClass.md#storage) object is shared across all processes of the same user session. For example on the server, you can launch a user authentication and verification procedure when a client connects to the server, involving entering a code sent by e-mail or SMS into the application. Ensuite, vous ajoutez les informations de l'utilisateur au storage de session, ce qui permet au serveur d'identifier l'utilisateur. De cette façon, le serveur 4D peut accéder aux informations de l'utilisateur pour tous les process clients, permettant l'écriture de code personnalisé en fonction du rôle de l'utilisateur.

Within each environment, you can use the remote user `session` object to [create an OTP](../API/SessionClass.md#createotp) and [share the remote session for web accesses](#sharing-a-remote-session-for-web-accesses).

On the server, you can also [assign privileges](../API/SessionClass.md#setprivileges) to a remote user session to control access when the session comes from [Qodly pages running in web areas](#sharing-a-remote-session-for-web-accesses).

:::note

On the client side, two distinct local storage objects are available:

- the [`Storage`](../commands/storage) object of the client machine,
- the [`session.storage`](../API/SessionClass.md#storage) object of the user remote session (also returned by the [`Session storage`](../commands/session-storage) command).

:::

:::tip Articles de blog sur le sujet

- [Objet session distante 4D avec connexion Client/Serveur et procédure stockée](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).
- [Client / server – Handle a session when working on a 4D client](https://blog.4d.com/client-server-handle-a-session-when-working-on-a-4d-client).

:::

### Sharing a remote session for web accesses {#sharing-a-remote-session-for-web-accesses}

Remote user sessions can be used to handle web accesses to the application by the same user and thus, manage their [privileges](../ORDA/privileges.md). Cette possibilité est particulièrement utile pour les applications Client/serveur dans lesquelles des [pages Qodly](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) sont utilisées pour l'interface, sur des machines clientes distantes. Avec cette configuration, vos applications disposent d'interfaces web modernes basées sur les CSS, tout en bénéficiant de la puissance et de la simplicité du développement intégré client/serveur. Dans ces applications, les pages Qodly sont exécutées dans des [zones Web](../FormObjects/webArea_overview.md) 4D standard.

Pour gérer cette configuration en production, vous devez utiliser des sessions utilisateur distant. En fait, les requêtes provenant à la fois de l'application 4D distante et de ses pages Qodly chargées dans les zones Web doivent fonctionner au sein de la même session. You just have to share the session on the server between the remote client and its web pages so that you can have the same [session storage](../API/SessionClass.md#storage) and client license, wherever the request comes from (web or remote 4D).

[Privileges](../ORDA/privileges.md) should be set in the session before executing a web request, so that the user automatically gets their privileges for web access (see example). Keep in mind that privileges only apply to requests coming from the web.

:::note

Privileges can only be set from the remote user session on the server. For security reasons, they cannot be modified from the remote user session on the client (see [Comparing server-side and client-side user session objects](#comparing-server-side-and-client-side-user-session-objects)).

:::

Les sessions partagées sont gérées par des [tokens OTP](../WebServer/sessions.md#session-token-otp). After you created an OTP token for the remote session, you add the token (through the `$4DSID` parameter value) to web requests sent from Web areas containing Qodly pages (or from any web browser) so that the user session on the server is identified and shared. Du côté du serveur web, si une requête web contient un *id OTP* dans le paramètre $4DSID, la session correspondant à ce token OTP est utilisée.

:::note

You can execute the [OTP creation code](../API/SessionClass.md#createotp) from the server or directly from the client (on the server you can use for example the [`On Server Open Connection`](../commands/on-server-open-connection-database-method) database method). However, keep in mind that the web session `.storage` is shared with the server-side user session `.storage` that and privileges can only be set from the user session on the server.

:::

:::tip

For development and testing purposes, you can use a [standalone session](#standalone-sessions) to code and test all features related to web access sharing, whether your application is intended for single-user or client/server deployment.

:::

:::tip Article(s) de blog sur le sujet

[Intégrez des pages Qodly dans une zone web 4D sans coût supplémentaire](https://blog.4d.com/share-your-4d-remote-client-session-with-web-accesses/)

:::

### Exemple

Dans un formulaire, obtenez un OTP et ouvrez une page Qodly dans une zone Web :

```4d
Form.otp:=getOTP

Form.url:="http://localhost/$lib/renderer/?w=Products&$4DSID="+Form.otp

WA OPEN URL(*; "QodlyPage"; Form.url)

```

La méthode de projet *getOTP* (avec la propriété [**Exécuter sur le serveur**](../Project/project-method-properties.md#execute-on-server) en Client/Server) :

```4d
// En client/serveur:
// ----------------
// Méthode exécutée sur le serveur car l'objet session est sur le serveur
// L'objet Session est Null sur le client 
//

#DECLARE() : Text

return Session.createOTP()

```

Voici le code utilisé pour placer le privilège "viewProducts" dans la session :

```4d
// En client/serveur:
// ----------------
// Ce code doit être exécuté sur le serveur car l'objet session est sur le serveur
// L'objet Session est Null sur la session client 

Session.clearPrivileges() // Nettoie la session de ses anciens privilèges
Session.setPrivileges("viewProducts")
```

## Sessions de procédures stockées {#stored-procedure-sessions}

Sur le serveur, toutes les [procédures stockées](https://doc.4d.com/4Dv20/4D/20/Stored-Procedures.300-6330553.en.html) partagent la même session utilisateur virtuelle.

### Utilisation

Vous pouvez partager des données entre tous les process d'une session de procédure stockée à l'aide de l'objet partagé [`session.storage`](../API/SessionClass.md#storage).

### Disponibilité

L'objet `session` des procédures stockées est disponible depuis :

- les méthodes projet appelées par la commande [`Execute on Server`](../commands/execute-on-server),
- les [fonctions ORDA du modèle de données](../ORDA/ordaClasses.md) appelées à partir d'une procédure stockée,
- les méthodes base telles que [`On Server Startup`](../commands/on-server-startup-database-method) et [`On Server Shutdown`](../commands/on-server-shutdown-database-method).

## Sessions autonomes {#standalone-sessions}

Une session autonome est une session mono-utilisateur qui s'exécute lorsque vous travaillez localement avec 4D.

### Utilisation

La session autonome peut être utilisée pour développer et tester votre application client/serveur et son interaction avec les sessions web et le [partage d'OTP](#sharing-a-desktop-session-for-web-accesses). Vous pouvez utiliser l'objet `session` dans votre code d'une session autonome tout comme l'objet `session` des sessions distantes.

### Disponibilité

L'objet `session` d'une application autonome est disponible pour toutes les méthodes et le code exécutés sur l'application 4D.


