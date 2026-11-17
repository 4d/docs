---
id: QuotaManagerClass
title: QuotaManager
---

La classe `4D.QuotaManager` vous offre une interface permettant de configurer et de surveiller certaines limites d'utilisation que vous appliquez à votre application 4D. Les seuils sont utiles, par exemple, pour protéger le serveur contre les requêtes mal optimisées ou l'utilisation excessive de ses ressources. Pour le serveur REST, par exemple, des quotas peuvent limiter les ressources ORDA accessibles pour une session REST.

:::tip Article de blog lié

[Un serveur web 4D qui sait quand dire « non »](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no/)

:::

Les objets `4D.QuotaManager` peuvent être instanciés par:

- la [propriété `quotas` d'un objet Session](./SessionClass.md#quotas)
- la [propriété `quotas` d'un serveur Web](./WebServerClass.md#quotas)

Pour plus d'informations sur la configuration et l'application des quotas sur le serveur Web, consultez la page [Quotas du serveur Web](../WebServer/quotas.md).

<details><summary>Historique</summary>

| Release | Modifications                                 |
| ------- | --------------------------------------------- |
| 21 R5   | Prise en charge des quotas sur le serveur Web |
| 21 R4   | Classe ajoutée                                |

</details>

### Objet QuotaManager

Par défaut, les propriétés d'un objet `4D.QuotaManager` sont *Undefined*, ce qui signifie qu'aucun quota correspondant n'est appliqué.

L'objet `4D.QuotaManager` ne peut pas être affecté directement, et aucune propriété ne peut y être ajoutée ni supprimée. Les quotas sont configurés en modifiant les propriétés correspondantes de l'objet existant.

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

La propriété `.currentValues` contient les <!-- REF #QuotaManagerClass.currentValues.Summary -->valeurs courantes utilisées par le gestionnaire de quotas<!-- END REF -->. Elle est mise à jour automatiquement par 4D et est en lecture seule.

Cet objet possède les mêmes propriétés que l'objet `4D.QuotaManager`, mais seules les propriétés suivantes indiquent des valeurs courantes :

- [`nbEntitySets`](#nbentitysets)
- [`nbSessions`](#nbsessions)
- [`nbGuestSessions`](#nbguestsessions)

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### Description

:::note

Ce quota peut être également configuré pour la session REST courante uniquement via [`Session.quotas`](./SessionClass.md#quotas).

:::

La propriété `.defaultEntitySetTimeout` contient <!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->le délai d'inactivité par défaut pour les entity sets REST stockés en mémoire pendant la session courante (en secondes)<!-- END REF -->.

Portée : session courante

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

La propriété `.inBytesPerHour` contient <!-- REF #QuotaManagerClass.inBytesPerHour.Summary -->le nombre maximal d'octets que le serveur Web peut recevoir en une heure<!-- END REF -->.

Portée : [serveur global](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerHourPerSession.Desc -->

## .inBytesPerHourPerSession

<!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Syntax -->**inBytesPerHourPerSession** : Integer<!-- END REF -->

#### Description

La propriété `.inBytesPerHourPerSession` contient <!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Summary -->le nombre maximal d'octets que le serveur Web peut recevoir pour une session en une heure<!-- END REF -->.

Portée : [session par défaut](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMin.Desc -->

## .inBytesPerMin

<!-- REF #QuotaManagerClass.inBytesPerMin.Syntax -->**inBytesPerMin** : Integer<!-- END REF -->

#### Description

La propriété `.inBytesPerMin` contient <!-- REF #QuotaManagerClass.inBytesPerMin.Summary -->le nombre maximal d'octets que le serveur Web peut recevoir en une minute<!-- END REF -->.

Portée : [serveur global](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMinPerSession.Desc -->

## .inBytesPerMinPerSession

<!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Syntax -->**inBytesPerMinPerSession** : Integer<!-- END REF -->

#### Description

La propriété `.inBytesPerMinPerSession` contient <!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Summary -->le nombre maximal d'octets que le serveur Web peut recevoir pour une session en une minute<!-- END REF -->.

Portée : [session par défaut](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### Description

:::note

Ce quota peut être également configuré pour la session REST courante uniquement via [`Session.quotas`](./SessionClass.md#quotas).

:::

La propriété `.maxEntitySetTimeout` contient <!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->la valeur du délai d'inactivité maximal pour les entity sets REST stockés en mémoire pendant la session courante (en secondes)<!-- END REF -->.

Portée : session courante

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

Ce quota peut être également configuré pour la session REST courante uniquement via [`Session.quotas`](./SessionClass.md#quotas).

:::

La propriété `.nbEntitySets` contient <!-- REF #QuotaManagerClass.nbEntitySets.Summary -->le nombre maximal d'entity sets REST autorisés en mémoire pour la session courante<!-- END REF -->.

Portée : session courante

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

Ce quota s'applique uniquement à une session REST.

:::

La propriété `.nbEntitySetsPerSession` contient <!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Summary -->le nombre maximal d'entity sets autorisés en mémoire pour chaque session REST<!-- END REF -->.

Portée : [session par défaut](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbGuestSessions.Desc -->

## .nbGuestSessions

<!-- REF #QuotaManagerClass.nbGuestSessions.Syntax -->**nbGuestSessions** : Integer<!-- END REF -->

#### Description

La propriété `.nbGuestSessions` contient <!-- REF #QuotaManagerClass.nbGuestSessions.Summary -->le nombre total maximal de [sessions Guest](./SessionClass.md#isguest) actives sur le serveur Web<!-- END REF -->.

Portée : [serveur global](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHour.Desc -->

## .nbRequestsPerHour

<!-- REF #QuotaManagerClass.nbRequestsPerHour.Syntax -->**nbRequestsPerHour** : Integer<!-- END REF -->

#### Description

La propriété `.nbRequestsPerHour` contient <!-- REF #QuotaManagerClass.nbRequestsPerHour.Summary -->le nombre total maximal de requêtes que le serveur Web peut recevoir en une heure<!-- END REF -->.

Portée : [serveur global](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHourPerSession.Desc -->

## .nbRequestsPerHourPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Syntax -->**nbRequestsPerHourPerSession** : Integer<!-- END REF -->

#### Description

La propriété `.nbRequestsPerHourPerSession` contient <!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Summary -->le nombre maximal de requêtes qu'une session peut recevoir en une heure<!-- END REF -->.

Portée : [session par défaut](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMin.Desc -->

## .nbRequestsPerMin

<!-- REF #QuotaManagerClass.nbRequestsPerMin.Syntax -->**nbRequestsPerMin** : Integer<!-- END REF -->

#### Description

La propriété `.nbRequestsPerMin` contient <!-- REF #QuotaManagerClass.nbRequestsPerMin.Summary -->le nombre maximal de requêtes que le serveur Web peut recevoir en une minute<!-- END REF -->.

Portée : [serveur global](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMinPerSession.Desc -->

## .nbRequestsPerMinPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Syntax -->**nbRequestsPerMinPerSession** : Integer<!-- END REF -->

#### Description

La propriété `.nbRequestsPerMinPerSession` contient <!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Summary -->le nombre maximal de requêtes qu'une session peut recevoir en une minute<!-- END REF -->.

Portée : [session par défaut](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbSessions.Desc -->

## .nbSessions

<!-- REF #QuotaManagerClass.nbSessions.Syntax -->**nbSessions** : Integer<!-- END REF -->

#### Description

La propriété `.nbSessions` contient <!-- REF #QuotaManagerClass.nbSessions.Summary -->le nombre maximal de sessions actives sur le serveur Web<!-- END REF -->.

Portée : [serveur global](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHour.Desc -->

## .outBytesPerHour

<!-- REF #QuotaManagerClass.outBytesPerHour.Syntax -->**outBytesPerHour** : Integer<!-- END REF -->

#### Description

La propriété `.outBytesPerHour` contient <!-- REF #QuotaManagerClass.outBytesPerHour.Summary -->le nombre maximal d'octets que le serveur Web peut envoyer en une heure<!-- END REF -->. Le quota est calculé avec la taille non compressée de la charge utile de la réponse, quels que soient les paramètres de compression du serveur Web.

Portée : [serveur global](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHourPerSession.Desc -->

## .outBytesPerHourPerSession

<!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Syntax -->**outBytesPerHourPerSession** : Integer<!-- END REF -->

#### Description

La propriété `.outBytesPerHourPerSession` contient <!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Summary -->le nombre maximal d'octets que le serveur Web peut envoyer pour une session en une heure<!-- END REF -->. Le quota est calculé avec la taille non compressée de la charge utile de la réponse, quels que soient les paramètres de compression du serveur Web.

Portée : [session par défaut](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMin.Desc -->

## .outBytesPerMin

<!-- REF #QuotaManagerClass.outBytesPerMin.Syntax -->**outBytesPerMin** : Integer<!-- END REF -->

#### Description

La propriété `.outBytesPerMin` contient <!-- REF #QuotaManagerClass.outBytesPerMin.Summary -->le nombre maximal d'octets que le serveur Web peut envoyer en une minute<!-- END REF -->. Le quota est calculé avec la taille non compressée de la charge utile de la réponse, quels que soient les paramètres de compression du serveur Web.

Portée : [serveur global](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMinPerSession.Desc -->

## .outBytesPerMinPerSession

<!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Syntax -->**outBytesPerMinPerSession** : Integer<!-- END REF -->

#### Description

La propriété `.outBytesPerMinPerSession` contient <!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Summary -->le nombre maximal d'octets que le serveur Web peut envoyer pour une session en une minute<!-- END REF -->. Le quota est calculé avec la taille non compressée de la charge utile de la réponse, quels que soient les paramètres de compression du serveur Web.

Portée : [session par défaut](./WebServerClass.md#scope-levels)

<!-- END REF -->




