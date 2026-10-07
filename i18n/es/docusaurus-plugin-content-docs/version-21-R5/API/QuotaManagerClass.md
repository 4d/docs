---
id: QuotaManagerClass
title: QuotaManager
---

La clase `4D.QuotaManager` le ofrece una interfaz para configurar y monitorizar algunos límites de uso que aplica a su aplicación 4D. Thresholds are useful, for example, to protect the server from poorly optimized requests or excessive use of server resources. For the REST server for example, quotas can limit the ORDA resources accessible to a REST session. For more information, see the [A 4D web server that knows when to say No](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no/) blog post.

`4D.QuotaManager` objects can be instantiated by:

- the [`quotas` property of a Session](./SessionClass.md#quotas) object
- the [`quotas` property of a Web server](./WebServerClass.md#quotas) object

For Web server configuration and enforcement details, see [Web server quotas](../WebServer/quotas.md).

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones               |
| ----------- | ---------------------------- |
| 21 R5       | Support of Web server quotas |
| 21 R4       | Clase añadida                |

</details>

### Objeto QuotaManager

By default, the properties of a `4D.QuotaManager` object are *Undefined*, meaning that no corresponding quota is applied.

The `4D.QuotaManager` object itself cannot be directly assigned, and properties cannot be added to or removed from it. Quotas are configured by modifying the corresponding properties of the existing object.

Los objetos 4D.QuotaManager ofrecen las siguientes propiedades:

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

#### Descripción

The `.currentValues` property contains <!-- REF #QuotaManagerClass.currentValues.Summary -->current usage values for the quota manager<!-- END REF -->. It is automatically updated by 4D and is read-only.

The object has the same properties as the `4D.QuotaManager` object, but only the following properties report current usage:

- [`nbEntitySets`](#nbentitysets)
- [`nbSessions`](#nbsessions)
- [`nbGuestSessions`](#nbguestsessions)

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### Descripción

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

La propiedad `.defaultEntitySetTimeout` contiene <!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->el tiempo de espera predeterminado por inactividad para los conjuntos de entidades REST almacenados en memoria durante la sesión actual (en segundos)<!-- END REF -->.

Scope: current session level

Por defecto, este valor es de 2 horas (7200 segundos). También se puede definir al crear el conjunto de entidades mediante la [API REST `$timeout`](../REST/$timeout.md).

Puede modificar este valor de forma dinámica mediante la propiedad [`quotas.defaultEntitySetTimeout` de la sesión](./SessionClass.md#quotas), de modo que se aplique a cualquier conjunto de entidades que se cree posteriormente en la sesión (los valores de tiempo de espera predeterminados de los conjuntos de entidades existentes no se modifican).

:::note

Si se define un valor superior al de la propiedad `maxEntitySetTimeout`, dicho valor se ajustará al de `maxEntitySetTimeout`.

:::

No se puede pasar un valor <=0 (en ese caso se produce un error). Para restablecer el valor de la propiedad para la sesión, pase *undefined*.

#### Ejemplo

En un código 4D de un proceso REST:

```4d
Session.quotas.defaultEntitySetTimeout:=1200
```

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerHour.Desc -->

## .inBytesPerHour

<!-- REF #QuotaManagerClass.inBytesPerHour.Syntax -->**inBytesPerHour** : Integer<!-- END REF -->

#### Descripción

The `.inBytesPerHour` property contains <!-- REF #QuotaManagerClass.inBytesPerHour.Summary -->the maximum total number of bytes that the Web server can receive in one hour<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerHourPerSession.Desc -->

## .inBytesPerHourPerSession

<!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Syntax -->**inBytesPerHourPerSession** : Integer<!-- END REF -->

#### Descripción

The `.inBytesPerHourPerSession` property contains <!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Summary -->the maximum total number of bytes that the Web server can receive for a session in one hour<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMin.Desc -->

## .inBytesPerMin

<!-- REF #QuotaManagerClass.inBytesPerMin.Syntax -->**inBytesPerMin** : Integer<!-- END REF -->

#### Descripción

The `.inBytesPerMin` property contains <!-- REF #QuotaManagerClass.inBytesPerMin.Summary -->the maximum total number of bytes that the Web server can receive in one minute<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMinPerSession.Desc -->

## .inBytesPerMinPerSession

<!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Syntax -->**inBytesPerMinPerSession** : Integer<!-- END REF -->

#### Descripción

The `.inBytesPerMinPerSession` property contains <!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Summary -->the maximum total number of bytes that the Web server can receive for a session in one minute<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### Descripción

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

La propiedad `.maxEntitySetTimeout` contiene <!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->el valor máximo del tiempo de espera por inactividad para los conjuntos de entidades REST almacenados en memoria durante la sesión actual (en segundos)<!-- END REF -->.

Scope: current session level

Puede definir este valor utilizando la [propiedad `quotas.maxEntitySetTimeout` de la Sesión](./SessionClass.md#quotas), para que se utilice para cualquier conjunto de entidades creado después en la sesión (los valores máximos de tiempo de espera de los conjuntos de entidades existentes no se modifican).

Una vez configurada la propiedad `.maxEntitySetTimeout`, ningún conjunto de entidades creado posteriormente en la sesión podrá tener un tiempo de espera superior al valor de `.maxEntitySetTimeout`.

Por ejemplo, supongamos que el tiempo de espera por inactividad máximo está fijado en 40 minutos (2400 segundos); si se crea un conjunto de entidades con un tiempo de espera obligatorio que supera el valor máximo:

```
http://127.0.0.1/rest/People?$filter=ID>=4&$method=entityset&$timeout=3000
```

... entonces el tiempo de espera definido en la solicitud es ignorado y el conjunto de entidades será liberado después de 40 minutos si no se utiliza durante este período de tiempo.

No se puede pasar un valor <=0 (en ese caso se produce un error). Para restablecer el valor de la propiedad para la sesión, pase *undefined*.

#### Ejemplo

En un código 4D de un proceso REST:

```4d
Session.quotas.maxEntitySetTimeout:=2400
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySets.Desc -->

## .nbEntitySets

<!-- REF #QuotaManagerClass.nbEntitySets.Syntax -->**nbEntitySets** : Integer<!-- END REF -->

#### Descripción

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

La propiedad `.nbEntitySets` contiene <!-- REF #QuotaManagerClass.nbEntitySets.Summary -->el número máximo de conjuntos de entidades REST permitidos en memoria para la sesión actual<!-- END REF -->.

Scope: current session level

Por defecto, no hay límite para conjuntos de entidades [almacenados en memoria por solicitudes REST](../REST/$info.md) (el valor es 0). Puede definir un límite para controlar la carga útil del servidor para una sesión específica.

Cuando se alcanza el número máximo de conjuntos de entidades permitidas, una solicitud REST que necesita crear un entity set obtendrá un [**status code HTTP 429** y una respuesta de error](../REST/REST_requests.md#rest-status-and-response), hasta que al menos un entity set sea liberado. Puede liberar un conjunto de entidades de la caché mediante el [comando `$release` REST](../REST/$entityset.md#entitysetrelease).

No se puede pasar un valor <=0 (en ese caso se produce un error). Para restablecer el valor de la propiedad para la sesión, pase *undefined*.

#### Ejemplo

En un código 4D de un proceso REST:

```4d
	//máximo 50 conjuntos de entidades
Session.quotas.nbEntitySets:=50
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySetsPerSession.Desc -->

## .nbEntitySetsPerSession

<!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Syntax -->**nbEntitySetsPerSession** : Integer<!-- END REF -->

#### Descripción

:::note

This quota applies only to a REST session.

:::

The `.nbEntitySetsPerSession` property contains <!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Summary -->the maximum number of entity sets allowed in memory for each REST session<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbGuestSessions.Desc -->

## .nbGuestSessions

<!-- REF #QuotaManagerClass.nbGuestSessions.Syntax -->**nbGuestSessions** : Integer<!-- END REF -->

#### Descripción

The `.nbGuestSessions` property contains <!-- REF #QuotaManagerClass.nbGuestSessions.Summary -->the maximum total number of active [Guest sessions](./SessionClass.md#isguest) on the Web server<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHour.Desc -->

## .nbRequestsPerHour

<!-- REF #QuotaManagerClass.nbRequestsPerHour.Syntax -->**nbRequestsPerHour** : Integer<!-- END REF -->

#### Descripción

The `.nbRequestsPerHour` property contains <!-- REF #QuotaManagerClass.nbRequestsPerHour.Summary -->the maximum total number of requests that the Web server can receive in one hour<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHourPerSession.Desc -->

## .nbRequestsPerHourPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Syntax -->**nbRequestsPerHourPerSession** : Integer<!-- END REF -->

#### Descripción

The `.nbRequestsPerHourPerSession` property contains <!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Summary -->the maximum total number of requests that a session can receive in one hour<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMin.Desc -->

## .nbRequestsPerMin

<!-- REF #QuotaManagerClass.nbRequestsPerMin.Syntax -->**nbRequestsPerMin** : Integer<!-- END REF -->

#### Descripción

The `.nbRequestsPerMin` property contains <!-- REF #QuotaManagerClass.nbRequestsPerMin.Summary -->the maximum total number of requests that the Web server can receive in one minute<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMinPerSession.Desc -->

## .nbRequestsPerMinPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Syntax -->**nbRequestsPerMinPerSession** : Integer<!-- END REF -->

#### Descripción

The `.nbRequestsPerMinPerSession` property contains <!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Summary -->the maximum total number of requests that a session can receive in one minute<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbSessions.Desc -->

## .nbSessions

<!-- REF #QuotaManagerClass.nbSessions.Syntax -->**nbSessions** : Integer<!-- END REF -->

#### Descripción

The `.nbSessions` property contains <!-- REF #QuotaManagerClass.nbSessions.Summary -->the maximum total number of active sessions on the Web server<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHour.Desc -->

## .outBytesPerHour

<!-- REF #QuotaManagerClass.outBytesPerHour.Syntax -->**outBytesPerHour** : Integer<!-- END REF -->

#### Descripción

The `.outBytesPerHour` property contains <!-- REF #QuotaManagerClass.outBytesPerHour.Summary -->the maximum total number of bytes that the Web server can send in one hour<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHourPerSession.Desc -->

## .outBytesPerHourPerSession

<!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Syntax -->**outBytesPerHourPerSession** : Integer<!-- END REF -->

#### Descripción

The `.outBytesPerHourPerSession` property contains <!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Summary -->the maximum total number of bytes that the Web server can send for a session in one hour<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMin.Desc -->

## .outBytesPerMin

<!-- REF #QuotaManagerClass.outBytesPerMin.Syntax -->**outBytesPerMin** : Integer<!-- END REF -->

#### Descripción

The `.outBytesPerMin` property contains <!-- REF #QuotaManagerClass.outBytesPerMin.Summary -->the maximum total number of bytes that the Web server can send in one minute<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMinPerSession.Desc -->

## .outBytesPerMinPerSession

<!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Syntax -->**outBytesPerMinPerSession** : Integer<!-- END REF -->

#### Descripción

The `.outBytesPerMinPerSession` property contains <!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Summary -->the maximum total number of bytes that the Web server can send for a session in one minute<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->




