---
id: desktop-sessions
title: Sessions Desktop
---

## Vue d’ensemble

Une session desktop est un contexte d'exécution lié à l'utilisateur sur 4D Server, 4D remote ou 4D single-user qui **ne résulte pas d'un accès web ou REST**.

Les sessions desktop comprennent :

- **Sessions utilisateurs distants** : Dans les applications client/serveur, les utilisateurs distants ont leurs propres sessions, gérées à partir du client et du serveur.
- les **Sessions des procédures stockées** : Dans les applications client/serveur, la session utilisateur virtuelle unique qui gère toutes les procédures stockées exécutées sur le serveur.
- les **Sessions autonomes**: Objet de session locale retourné dans une application mono-utilisateur (utile dans les phases de développement et de test des applications client/serveur).

Le diagramme suivant montre les différents types de sessions et leur interaction :

![](../assets/en/Desktop/sessions.png)

Tout comme dans une [**session utilisateur web**](../WebServer/sessions.md), le code exécuté dans une session desktop a accès à un objet [`Session`](../API/SessionClass.md) qui fournit des fonctions et des propriétés permettant de stocker les valeurs de session et de les partager entre les process utilisateur, par exemple en utilisant l'objet [`session.storage`](../API/SessionClass.md#storage).

Toutefois, à la différence du code exécuté dans les sessions utilisateurs Web, le code exécuté dans les sessions desktop n'est pas soumis aux règles des [rôles et privilèges](../ORDA/privileges.md). Il peut accéder à toutes les parties de l'application 4D, y compris ORDA et les classes du modèle de données (sur le serveur 4D, la fonctionnalité [utilisateurs et groupes](../Users/handling_users_groups.md) peut gérer les accès des utilisateurs). Notez également que les sessions desktop ne nécessitent pas l'activation des [sessions évolutives](../WebServer/sessions.md#enabling-web-sessions).

Vous pouvez néanmoins [**partager** une session utilisateur distant avec une session web](#sharing-a-remote-session-for-web-accesses) afin que les utilisateurs de l'application desktop puissent accéder à votre application 4D par le biais d'une interface web, en utilisant notamment les **pages Qodly** et les zones Web.

## Sessions utilisateurs distants {#remote-user-sessions}

Dans les applications client/serveur, lorsqu'un utilisateur se connecte au serveur, un **objet de session utilisateur à distance** est créé et disponible à la fois sur le serveur et sur le client. Il est renvoyé par la commande [`Session`](../commands/session) sur les deux machines.

Cet objet est géré via les fonctions et les propriétés de la classe [`Session`](../API/SessionClass.md).

### Comparaison des objets de session utilisateur côté serveur et côté client {#comparing-server-side-and-client-side-user-session-objects}

Selon l'endroit où le code est exécuté, un objet utilisateur `session` côté serveur ou un objet utilisateur `session` côté client est disponible. Les deux objets sont similaires, à l'exception de ce qui suit :

- leurs propriétés [`.storage`](../API/SessionClass.md#storage) ne sont pas le même objet. Une valeur stockée dans le `.storage` de la session utilisateur sur le serveur ne sera pas disponible dans le `.storage` de la session utilisateur sur le client et inversement.
- pour des raisons de sécurité, la session côté client ne peut pas exécuter de fonctions qui **modifient** [les privilèges](../ORDA/privileges.md) ([`setPrivileges()`](../API/SessionClass.md#setprivileges), [`clearPrivileges()`](../API/SessionClass.md#clearprivileges), [`promote()`](../API/SessionClass.md#promote), [`demote()`](../API/SessionClass.md#demote), [`restore()`](../API/SessionClass.md#restore)). L'appel de ces fonctions sur un client génère une erreur.

:::note

Les fonctions qui lisent les privilèges peuvent être appelées à la fois côté client et côté serveur ([`getPrivileges()`](../API/SessionClass.md#getprivileges), [`hasPrivilege()`](../API/SessionClass.md#hasprivilege), [`isGuest()`](../API/SessionClass.md#isguest)).

:::

### Utilisation

Vous utilisez l'objet `session` de l'utilisateur distant pour gérer et partager les données de la session.

Dans chaque environnement, un objet [session `storage`](../API/SessionClass.md#storage) est partagé par tous les process de la même session utilisateur. Par exemple, sur le serveur, vous pouvez lancer une procédure d'authentification et de vérification de l'utilisateur lorsqu'un client se connecte au serveur, impliquant l'introduction dans l'application d'un code envoyé par e-mail ou par SMS. Ensuite, vous ajoutez les informations de l'utilisateur au storage de session, ce qui permet au serveur d'identifier l'utilisateur. De cette façon, le serveur 4D peut accéder aux informations de l'utilisateur pour tous les process clients, permettant l'écriture de code personnalisé en fonction du rôle de l'utilisateur.

Dans chaque environnement, vous pouvez utiliser l'objet "session" de l'utilisateur distant pour [créer un OTP](../API/SessionClass.md#createotp) et [partager la session distante pour les accès web](#sharing-a-remote-session-for-web-accesses).

Sur le serveur, vous pouvez également [attribuer des privilèges](../API/SessionClass.md#setprivileges) à une session d'utilisateur distant pour contrôler l'accès lorsque la session provient de [pages Qodly exécutées dans des zones web](#sharing-a-remote-session-for-web-accesses).

:::note

Côté client, deux objets "storage" locaux distincts sont disponibles :

- l'objet [`Storage`](../commands/storage) de la machine cliente,
- l'objet [`session.storage`](../API/SessionClass.md#storage) de la session distante de l'utilisateur (également retourné par la commande [`Session storage`](../commands/session-storage)).

:::

:::tip Articles de blog sur le sujet

- [Objet session distante 4D avec connexion Client/Serveur et procédure stockée](https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure).
- [Forget server-side wrappers, use 4D Sessions from the client](https://blog.4d.com/forget-server-side-wrappers-use-4d-sessions-from-the-client).

:::

### Partage d'une session distante pour les accès web {#sharing-a-remote-session-for-web-accesses}

Les sessions d'utilisateurs distants peuvent être utilisées pour contrôler les accès web à l'application par le même utilisateur et ainsi gérer leurs [privilèges](../ORDA/privileges.md). Cette possibilité est particulièrement utile pour les applications Client/serveur dans lesquelles des [pages Qodly](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/pageLoaderOverview) sont utilisées pour l'interface, sur des machines clientes distantes. Avec cette configuration, vos applications disposent d'interfaces web modernes basées sur les CSS, tout en bénéficiant de la puissance et de la simplicité du développement intégré client/serveur. Dans ces applications, les pages Qodly sont exécutées dans des [zones Web](../FormObjects/webArea_overview.md) 4D standard.

Pour gérer cette configuration en production, vous devez utiliser des sessions utilisateur distant. En fait, les requêtes provenant à la fois de l'application 4D distante et de ses pages Qodly chargées dans les zones Web doivent fonctionner au sein de la même session. Il suffit de partager la session sur le serveur entre le client distant et ses pages web afin d'avoir le même [session storage](../API/SessionClass.md#storage) et la même licence client, quelle que soit l'origine de la requête (web ou 4D distant).

Les [privilèges](../ORDA/privileges.md) doivent être définis dans la session avant l'exécution d'une requête web, afin que l'utilisateur obtienne automatiquement ses privilèges d'accès au web (voir l'exemple). N'oubliez pas que les privilèges ne s'appliquent qu'aux requêtes provenant du web.

:::note

Les privilèges ne peuvent être définis qu'à partir de la session de l'utilisateur distant sur le serveur. Pour des raisons de sécurité, ils ne peuvent pas être modifiés à partir de la session de l'utilisateur distant sur le client (voir [Comparaison des objets de session utilisateur côté serveur et côté client](#comparing-server-side-and-client-side-user-session-objects)).

:::

Les sessions partagées sont gérées par des [tokens OTP](../WebServer/sessions.md#session-token-otp). Après avoir créé un token OTP pour la session distante, vous ajoutez le token (par l'intermédiaire de la valeur du paramètre `$4DSID`) aux requêtes Web envoyées à partir des zones Web contenant des pages Qodly (ou à partir de n'importe quel navigateur Web) afin que la session de l'utilisateur sur le serveur soit identifiée et partagée. Du côté du serveur web, si une requête web contient un *id OTP* dans le paramètre $4DSID, la session correspondant à ce token OTP est utilisée.

:::note

Vous pouvez exécuter le [code de création d'OTP](../API/SessionClass.md#createotp) à partir du serveur ou directement à partir du client (sur le serveur, vous pouvez utiliser par exemple la méthode base [`On Server Open Connection`](../commands/on-server-open-connection-database-method)). Cependant, gardez à l'esprit que le `.storage` de la session web est partagée avec le `.storage` de la session utilisateur côté serveur et que les privilèges ne peuvent être définis qu'à partir de la session utilisateur sur le serveur.

:::

:::tip

À des fins de développement et de test, vous pouvez utiliser une [session autonome](#standalone-sessions) pour coder et tester toutes les fonctionnalités liées au partage de l'accès au web, que votre application soit destinée à un déploiement mono-utilisateur ou client/serveur.

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

La session autonome peut être utilisée pour développer et tester votre application client/serveur et son interaction avec les sessions web et le [partage d'OTP](#sharing-a-remote-session-for-web-accesses). Vous pouvez utiliser l'objet `session` dans votre code d'une session autonome tout comme l'objet `session` des sessions distantes.

### Disponibilité

L'objet `session` d'une application autonome est disponible pour toutes les méthodes et le code exécutés sur l'application 4D.


