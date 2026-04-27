---
id: IMAPNotifierClass
title: IMAPNotifier
---

La classe `IMAPNotifier` vous permet de gérer les notifications IMAP IDLE pour une boîte aux lettres sélectionnée.

<details><summary>Historique</summary>

| Release | Modifications  |
| ------- | -------------- |
| 21 R3   | Classe ajoutée |

</details>

La classe `IMAPNotifier` est disponible dans le class store `4D`.

Un objet `IMAPNotifier` est associé à un [transporteur IMAP](./IMAPTransporterClass.md#imap-transporter-object) et permet de gérer les notifications de boîte aux lettres.

Toutes les fonctions de la classe `IMAPNotifier` sont thread-safe.

:::tip Article de blog lié

[Notifications instantanées par courrier électronique avec le transporteur IMAP](https://blog.4d.com/instant-email-notifications-with-imap-transporter)

:::

### Exemple

```4d
// Définir les fonctions callback du listener
var $parameter : Object
var $transporter : 4D.IMAPTransporter

$parameter:=New object
$parameter.authenticationMode:=IMAP authentication OAUTH2
$parameter.host:="Outlook.office365.com"
$parameter.port:=993
$parameter.accessTokenOAuth2:=$myToken
$parameter.user:="myaddress@email.com"
$parameter.listener:=cs.IMAPListener.new()

$transporter:=IMAP New transporter($parameter)
$transporter.selectBox("INBOX")

$transporter.notifier.start()     
```

## Objet IMAPNotifier

Un objet IMAPNotifier fournit les propriétés et fonctions suivantes :

|                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #IMAPNotifier.isStarted.Syntax -->](#isstarted)<br/><!-- INCLUDE #IMAPNotifier.isStarted.Summary --> |
| [<!-- INCLUDE #IMAPNotifier.start().Syntax -->](#start)<br/><!-- INCLUDE #IMAPNotifier.start().Summary -->         |
| [<!-- INCLUDE #IMAPNotifier.stop().Syntax -->](#stop)<br/><!-- INCLUDE #IMAPNotifier.stop().Summary -->            |

<!-- REF 4D.IMAPNotifier.new().Desc -->

## 4D.IMAPNotifier.new()

<!-- REF #4D.IMAPNotifier.new().Syntax -->**4D.IMAPNotifier.new**() : 4D.IMAPNotifier<!-- END REF -->

<!-- REF #4D.IMAPNotifier.new().params -->

| Paramètres | Type                            |                             | Description               |
| ---------- | ------------------------------- | --------------------------- | ------------------------- |
| Résultat   | 4D.IMAPNotifier | <- | Nouvel objet IMAPNotifier |

<!-- END REF -->

#### Description

La fonction `4D.IMAPNotifier.new()` <!-- REF #4D.IMAPNotifier.new().Summary -->crée un nouvel objet IMAPNotifier<!-- END REF -->.

<!-- END REF -->

<!-- REF IMAPNotifier.isStarted.Desc -->

## .isStarted

<!-- REF #IMAPNotifier.isStarted.Syntax -->**.isStarted** : Boolean<!-- END REF -->

#### Description

La propriété `.isStarted` <!-- REF #IMAPNotifier.isStarted.Summary -->indique si le notificateur est démarré (`true`) ou arrêté (`false`)<!-- END REF -->. Cette propriété est en **lecture seule**.

<!-- END REF -->

<!-- REF IMAPNotifier.start().Desc -->

## .start()

<!-- REF #IMAPNotifier.start().Syntax -->**.start**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.start().params -->

| Paramètres | Type   |                             | Description           |
| ---------- | ------ | :-------------------------: | --------------------- |
| Résultat   | Object | <- | Statut de l'opération |

<!-- END REF -->

#### Description

La fonction `.start()` <!-- REF #IMAPNotifier.start().Summary -->démarre l'abonnement aux notifications du serveur et active les callbacks<!-- END REF -->.

Une boîte aux lettres doit être sélectionnée à l'aide de [`selectBox()`](./IMAPTransporterClass.md#selectbox) avant d'appeler `.start()`.

Les fonctions de rappel sont exécutées dans le worker où `.start()` est appelé.

:::note Notes

- Lorsque le notificateur est lancé, les autres fonctions du transporteur (telles que `getMail()` ou `send()`) ne sont pas disponibles. Vous devez appeler `.stop()` avant d'utiliser ces fonctions, puis appeler `.start()` à nouveau pour reprendre les notifications.

- Les notifications IMAP IDLE indiquent qu'un changement s'est produit mais ne fournissent pas de données actualisées sur la boîte aux lettres. Pour actualiser le statut de la boîte aux lettres, vous devez arrêter le notificateur, récupérer les données mises à jour (par exemple à l'aide de `getMail()`), puis le redémarrer.

:::

#### Objet retourné

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreur 4D (non retournée si une réponse du serveur est reçue)                |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur                                                                                |
|            | \[].componentSignature | Text       | Signature du composant qui a renvoyé l'erreur                                                          |

<!-- END REF -->

<!-- REF IMAPNotifier.stop().Desc -->

## .stop()

<!-- REF #IMAPNotifier.stop().Syntax -->**.stop**() : Object<!-- END REF -->

<!-- REF #IMAPNotifier.stop().params -->

| Paramètres | Type   |                             | Description           |
| ---------- | ------ | :-------------------------: | --------------------- |
| Résultat   | Object | <- | Statut de l'opération |

<!-- END REF -->

#### Description

La fonction `.stop()` <!-- REF #IMAPNotifier.stop().Summary -->arrête l'abonnement aux notifications<!-- END REF -->. L'appel à `.stop()` est nécessaire avant d'utiliser d'autres fonctions du transporteur (comme `getMail()` ou `send()`).

#### Objet retourné

| Propriété  |                                                                                             | Type       | Description                                                                                            |
| ---------- | ------------------------------------------------------------------------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| success    |                                                                                             | Boolean    | Vrai si l'opération est réussie, sinon Faux                                                            |
| statusText |                                                                                             | Text       | Message du statut retourné par le serveur IMAP, ou dernière erreur retournée dans la pile d'erreurs 4D |
| errors     |                                                                                             | Collection | Pile d'erreur 4D (non retournée si une réponse du serveur est reçue)                |
|            | \[].errcode            | Number     | Code d'erreur 4D                                                                                       |
|            | \[].message            | Text       | Description de l'erreur                                                                                |
|            | \[].componentSignature | Text       | Signature du composant qui a renvoyé l'erreur                                                          |

<!-- END REF -->




