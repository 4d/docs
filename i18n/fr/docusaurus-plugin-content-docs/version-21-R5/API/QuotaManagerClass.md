---
id: QuotaManagerClass
title: QuotaManager
---

La classe `4D.QuotaManager` vous offre une interface permettant de configurer et de surveiller certaines limites d'utilisation que vous appliquez à votre application 4D. Thresholds are useful, for example, to protect the server from poorly optimized requests or excessive use of server resources. For the REST server for example, quotas can limit the ORDA resources accessible to a REST session. For more information, see the [A 4D web server that knows when to say No](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no/) blog post.

`4D.QuotaManager` objects can be instantiated by:

- the [`quotas` property of a Session](./SessionClass.md#quotas) object
- the [`quotas` property of a Web server](./WebServerClass.md#quotas) object

For Web server configuration and enforcement details, see [Web server quotas](../WebServer/quotas.md).

<details><summary>Historique</summary>

| Release | Modifications                |
| ------- | ---------------------------- |
| 21 R5   | Support of Web server quotas |
| 21 R4   | Classe ajoutée               |

</details>

### Objet QuotaManager

By default, the properties of a `4D.QuotaManager` object are *Undefined*, meaning that no corresponding quota is applied.

The `4D.QuotaManager` object itself cannot be directly assigned, and properties cannot be added to or removed from it. Quotas are configured by modifying the corresponding properties of the existing object.

Les objets 4D.QuotaManager exposent les propriétés suivantes :

|                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #QuotaManagerClass.currentValues.Syntax -->](#currentvalues)<br/><!-- INCLUDE #QuotaManagerClass.currentValues.Summary -->                                           |
| [<!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->](#defaultentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Summary -->             |
| [<!-- INCLUDE #QuotaManagerClass.inBytesPerHour.Syntax -->](#inbytesperhour)<br/><!-- INCLUDE #QuotaManagerClass.inBytesPerHour.Summary -->                                        |
| [<!-- INCLUDE #QuotaManagerClass.inBytesPerHourPerSession.Syntax -->](#inbytesperhourpersession)<br/><!-- INCLUDE #QuotaManagerClass.inBytesPerHourPerSession.Summary -->          |
| [<!-- INCLUDE #QuotaManagerClass.inBytesPerMin.Syntax -->](#inbytespermin)<br/><!-- INCLUDE #QuotaManagerClass.inBytesPerMin.Summary -->                                           |
| [<!-- INCLUDE #QuotaManagerClass.inBytesPerMinPerSession.Syntax -->](#inbytesperminpersession)<br/><!-- INCLUDE #QuotaManagerClass.inBytesPerMinPerSession.Summary -->             |
| [<!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Syntax -->](#maxentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Summary -->                         |
| [<!-- INCLUDE #QuotaManagerClass.nbEntitySets.Syntax -->](#nbentitysets)<br/><!-- INCLUDE #QuotaManagerClass.nbEntitySets.Summary -->                                              |
| [<!-- INCLUDE #QuotaManagerClass.nbEntitySetsPerSession.Syntax -->](#nbentitysetspersession)<br/><!-- INCLUDE #QuotaManagerClass.nbEntitySetsPerSession.Summary -->                |
| [<!-- INCLUDE #QuotaManagerClass.nbGuestSessions.Syntax -->](#nbguestsessions)<br/><!-- INCLUDE #QuotaManagerClass.nbGuestSessions.Summary -->                                     |
| [<!-- INCLUDE #QuotaManagerClass.nbRequestsPerHour.Syntax -->](#nbrequestsperhour)<br/><!-- INCLUDE #QuotaManagerClass.nbRequestsPerHour.Summary -->                               |
| [<!-- INCLUDE #QuotaManagerClass.nbRequestsPerHourPerSession.Syntax -->](#nbrequestsperhourpersession)<br/><!-- INCLUDE #QuotaManagerClass.nbRequestsPerHourPerSession.Summary --> |
| [<!-- INCLUDE #QuotaManagerClass.nbRequestsPerMin.Syntax -->](#nbrequestspermin)<br/><!-- INCLUDE #QuotaManagerClass.nbRequestsPerMin.Summary -->                                  |
| [<!-- INCLUDE #QuotaManagerClass.nbRequestsPerMinPerSession.Syntax -->](#nbrequestsperminpersession)<br/><!-- INCLUDE #QuotaManagerClass.nbRequestsPerMinPerSession.Summary -->    |
| [<!-- INCLUDE #QuotaManagerClass.nbSessions.Syntax -->](#nbsessions)<br/><!-- INCLUDE #QuotaManagerClass.nbSessions.Summary -->                                                    |
| [<!-- INCLUDE #QuotaManagerClass.outBytesPerHour.Syntax -->](#outbytesperhour)<br/><!-- INCLUDE #QuotaManagerClass.outBytesPerHour.Summary -->                                     |
| [<!-- INCLUDE #QuotaManagerClass.outBytesPerHourPerSession.Syntax -->](#outbytesperhourpersession)<br/><!-- INCLUDE #QuotaManagerClass.outBytesPerHourPerSession.Summary -->       |
| [<!-- INCLUDE #QuotaManagerClass.outBytesPerMin.Syntax -->](#outbytespermin)<br/><!-- INCLUDE #QuotaManagerClass.outBytesPerMin.Summary -->                                        |
| [<!-- INCLUDE #QuotaManagerClass.outBytesPerMinPerSession.Syntax -->](#outbytesperminpersession)<br/><!-- INCLUDE #QuotaManagerClass.outBytesPerMinPerSession.Summary -->          |

<!-- REF QuotaManagerClass.currentValues.Desc -->

## .currentValues

<!-- REF #QuotaManagerClass.currentValues.Syntax -->**currentValues** : Object<!-- END REF -->

#### Description

The `.currentValues` property contains <!-- REF #QuotaManagerClass.currentValues.Summary -->current usage values for the quota manager<!-- END REF -->. It is automatically updated by 4D and is read-only.

The object has the same properties as the `4D.QuotaManager` object, but only the following properties report current usage:

- [`nbEntitySets`](#nbentitysets)
- [`nbSessions`](#nbsessions)
- [`nbGuestSessions`](#nbguestsessions)

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### Description

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

La propriété `.defaultEntitySetTimeout` contient <!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->le délai d'inactivité par défaut pour les entity sets REST stockés en mémoire pendant la session courante (en secondes)<!-- END REF -->.

Scope: current session level

Par défaut, cette valeur est de 2 heures (7200 secondes). Elle peut également être définie lors de la création de l'entity set à l'aide de l'API REST [`$timeout`](../REST/$timeout.md).

Vous pouvez modifier cette valeur de manière dynamique à l'aide de la propriété [`quotas.defaultEntitySetTimeout` de la session](./SessionClass.md#quotas), afin qu'elle s'applique à tout entity set créé par la suite au cours de la session (les valeurs de délai d'expiration par défaut des entity sets existants ne sont pas modifiées).

:::note

Si vous définissez une valeur supérieure à celle de la propriété `maxEntitySetTimeout`, elle sera alignée sur la valeur de `maxEntitySetTimeout`.

:::

Vous ne pouvez pas passer une valeur <= 0 (une erreur est générée dans ce cas). Pour réinitialiser la valeur de la propriété pour la session, passez *undefined*.

#### Exemple

Dans un code 4D au sein d'un process REST :

```4d
Session.quotas.defaultEntitySetTimeout:=1200
```

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerHour.Desc -->

## .inBytesPerHour

<!-- REF #QuotaManagerClass.inBytesPerHour.Syntax -->**inBytesPerHour** : Integer<!-- END REF -->

#### Description

The `.inBytesPerHour` property contains <!-- REF #QuotaManagerClass.inBytesPerHour.Summary -->the maximum total number of bytes that the Web server can receive in one hour<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerHourPerSession.Desc -->

## .inBytesPerHourPerSession

<!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Syntax -->**inBytesPerHourPerSession** : Integer<!-- END REF -->

#### Description

The `.inBytesPerHourPerSession` property contains <!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Summary -->the maximum total number of bytes that the Web server can receive for a session in one hour<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMin.Desc -->

## .inBytesPerMin

<!-- REF #QuotaManagerClass.inBytesPerMin.Syntax -->**inBytesPerMin** : Integer<!-- END REF -->

#### Description

The `.inBytesPerMin` property contains <!-- REF #QuotaManagerClass.inBytesPerMin.Summary -->the maximum total number of bytes that the Web server can receive in one minute<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMinPerSession.Desc -->

## .inBytesPerMinPerSession

<!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Syntax -->**inBytesPerMinPerSession** : Integer<!-- END REF -->

#### Description

The `.inBytesPerMinPerSession` property contains <!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Summary -->the maximum total number of bytes that the Web server can receive for a session in one minute<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### Description

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

La propriété `.maxEntitySetTimeout` contient <!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->la valeur du délai d'inactivité maximal pour les entity sets REST stockés en mémoire pendant la session courante (en secondes)<!-- END REF -->.

Scope: current session level

Vous pouvez définir cette valeur à l'aide de la propriété [`quotas.maxEntitySetTimeout` de la session](./SessionClass.md#quotas), afin qu'elle s'applique à tout entity set créé par la suite au cours de la session (les valeurs de délai d'inactivité maximale des entity sets existants ne sont pas modifiées).

Une fois la propriété `.maxEntitySetTimeout` définie, aucun entity set créé par la suite au cours de la session ne peut avoir un délai d'inactivité supérieur à la valeur de `.maxEntitySetTimeout`.

Par exemple, en supposant que le délai d'inactivité maximal soit fixé à 40 minutes (2400 secondes), si un entity set est créé avec un délai d'inactivité requis supérieur à cette valeur maximale :

```
http://127.0.0.1/rest/People?$filter=ID>=4&$method=entityset&$timeout=3000
```

... alors le délai défini dans la requête est ignoré et l'entity set sera libéré après 40 minutes s'il n'est pas utilisé pendant cette période.

Vous ne pouvez pas passer une valeur <= 0 (une erreur est générée dans ce cas). Pour réinitialiser la valeur de la propriété pour la session, passez *undefined*.

#### Exemple

Dans un code 4D au sein d'un process REST :

```4d
Session.quotas.maxEntitySetTimeout:=2400
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySets.Desc -->

## .nbEntitySets

<!-- REF #QuotaManagerClass.nbEntitySets.Syntax -->**nbEntitySets** : Integer<!-- END REF -->

#### Description

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

La propriété `.nbEntitySets` contient <!-- REF #QuotaManagerClass.nbEntitySets.Summary -->le nombre maximal d'entity sets REST autorisés en mémoire pour la session courante<!-- END REF -->.

Scope: current session level

Par défaut, il n'y a pas de limite pour les entity sets [stockés en mémoire par les requêtes REST](../REST/$info.md) (la valeur est 0). Vous pouvez définir une limite afin de contrôler la charge utile du serveur pour une session spécifique.

Lorsque le nombre maximal d'entity sets autorisé est atteint, une requête REST visant à créer un entity set recevra un [**status code HTTP 429** et une réponse d'erreur](../REST/REST_requests.md#rest-status-and-response), jusqu'à ce qu'au moins un entity set soit libéré. Vous pouvez libérer un entity set du cache à l'aide de la [commande REST `$release`](../REST/$entityset.md#entitysetrelease).

Vous ne pouvez pas passer une valeur <= 0 (une erreur est générée dans ce cas). Pour réinitialiser la valeur de la propriété pour la session, passez *undefined*.

#### Exemple

Dans un code 4D au sein d'un process REST :

```4d
	//max 50 entity sets
Session.quotas.nbEntitySets:=50
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySetsPerSession.Desc -->

## .nbEntitySetsPerSession

<!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Syntax -->**nbEntitySetsPerSession** : Integer<!-- END REF -->

#### Description

:::note

This quota applies only to a REST session.

:::

The `.nbEntitySetsPerSession` property contains <!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Summary -->the maximum number of entity sets allowed in memory for each REST session<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbGuestSessions.Desc -->

## .nbGuestSessions

<!-- REF #QuotaManagerClass.nbGuestSessions.Syntax -->**nbGuestSessions** : Integer<!-- END REF -->

#### Description

The `.nbGuestSessions` property contains <!-- REF #QuotaManagerClass.nbGuestSessions.Summary -->the maximum total number of active [Guest sessions](./SessionClass.md#isguest) on the Web server<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHour.Desc -->

## .nbRequestsPerHour

<!-- REF #QuotaManagerClass.nbRequestsPerHour.Syntax -->**nbRequestsPerHour** : Integer<!-- END REF -->

#### Description

The `.nbRequestsPerHour` property contains <!-- REF #QuotaManagerClass.nbRequestsPerHour.Summary -->the maximum total number of requests that the Web server can receive in one hour<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHourPerSession.Desc -->

## .nbRequestsPerHourPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Syntax -->**nbRequestsPerHourPerSession** : Integer<!-- END REF -->

#### Description

The `.nbRequestsPerHourPerSession` property contains <!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Summary -->the maximum total number of requests that a session can receive in one hour<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMin.Desc -->

## .nbRequestsPerMin

<!-- REF #QuotaManagerClass.nbRequestsPerMin.Syntax -->**nbRequestsPerMin** : Integer<!-- END REF -->

#### Description

The `.nbRequestsPerMin` property contains <!-- REF #QuotaManagerClass.nbRequestsPerMin.Summary -->the maximum total number of requests that the Web server can receive in one minute<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMinPerSession.Desc -->

## .nbRequestsPerMinPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Syntax -->**nbRequestsPerMinPerSession** : Integer<!-- END REF -->

#### Description

The `.nbRequestsPerMinPerSession` property contains <!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Summary -->the maximum total number of requests that a session can receive in one minute<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbSessions.Desc -->

## .nbSessions

<!-- REF #QuotaManagerClass.nbSessions.Syntax -->**nbSessions** : Integer<!-- END REF -->

#### Description

The `.nbSessions` property contains <!-- REF #QuotaManagerClass.nbSessions.Summary -->the maximum total number of active sessions on the Web server<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHour.Desc -->

## .outBytesPerHour

<!-- REF #QuotaManagerClass.outBytesPerHour.Syntax -->**outBytesPerHour** : Integer<!-- END REF -->

#### Description

The `.outBytesPerHour` property contains <!-- REF #QuotaManagerClass.outBytesPerHour.Summary -->the maximum total number of bytes that the Web server can send in one hour<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHourPerSession.Desc -->

## .outBytesPerHourPerSession

<!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Syntax -->**outBytesPerHourPerSession** : Integer<!-- END REF -->

#### Description

The `.outBytesPerHourPerSession` property contains <!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Summary -->the maximum total number of bytes that the Web server can send for a session in one hour<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMin.Desc -->

## .outBytesPerMin

<!-- REF #QuotaManagerClass.outBytesPerMin.Syntax -->**outBytesPerMin** : Integer<!-- END REF -->

#### Description

The `.outBytesPerMin` property contains <!-- REF #QuotaManagerClass.outBytesPerMin.Summary -->the maximum total number of bytes that the Web server can send in one minute<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMinPerSession.Desc -->

## .outBytesPerMinPerSession

<!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Syntax -->**outBytesPerMinPerSession** : Integer<!-- END REF -->

#### Description

The `.outBytesPerMinPerSession` property contains <!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Summary -->the maximum total number of bytes that the Web server can send for a session in one minute<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->




