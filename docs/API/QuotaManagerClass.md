---
id: QuotaManagerClass
title: QuotaManager
---


The `4D.QuotaManager` class provides you with an interface to configure and monitor some usage limits you apply to your 4D application. Thresholds are useful, for example, to protect the server from poorly optimized requests or excessive use of server resources. Typically, the quota manager allows you to provide thresholds to ORDA resources a REST server session can access. 

`4D.QuotaManager` objects can be instantiated by:
- the [`quotas` property of a Session](./SessionClass.md#quotas) object
- the [`quotas` property of a Web server](./WebServerClass.md#quotas) object

For Web server configuration and enforcement details, see [Web server quotas](../WebServer/quotas.md).


<details><summary>History</summary>

|Release|Changes|
|---|---|
|21 R5|Support of Web server quotas|
|21 R4|Class added|

</details>



### QuotaManager Object

By default, the properties of a `4D.QuotaManager` object are *Undefined*, meaning that no corresponding quota is applied.

The `4D.QuotaManager` object itself cannot be directly assigned, and properties cannot be added to or removed from it. Quotas are configured by modifying the corresponding properties of the existing object.

4D.QuotaManager objects provide the following properties:



||
|---|
|[<!-- INCLUDE #QuotaManagerClass.currentValues.Syntax -->](#currentvalues)<br/><!-- INCLUDE #QuotaManagerClass.currentValues.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->](#defaultentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.inBytesPerHour.Syntax -->](#inbytesperhour)<br/><!-- INCLUDE #QuotaManagerClass.inBytesPerHour.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.inBytesPerHourPerSession.Syntax -->](#inbytesperhourpersession)<br/><!-- INCLUDE #QuotaManagerClass.inBytesPerHourPerSession.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.inBytesPerMin.Syntax -->](#inbytespermin)<br/><!-- INCLUDE #QuotaManagerClass.inBytesPerMin.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.inBytesPerMinPerSession.Syntax -->](#inbytesperminpersession)<br/><!-- INCLUDE #QuotaManagerClass.inBytesPerMinPerSession.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Syntax -->](#maxentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.nbEntitySets.Syntax -->](#nbentitysets)<br/><!-- INCLUDE #QuotaManagerClass.nbEntitySets.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.nbEntitySetsPerSession.Syntax -->](#nbentitysetspersession)<br/><!-- INCLUDE #QuotaManagerClass.nbEntitySetsPerSession.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.nbGuestSessions.Syntax -->](#nbguestsessions)<br/><!-- INCLUDE #QuotaManagerClass.nbGuestSessions.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.nbRequestsPerHour.Syntax -->](#nbrequestsperhour)<br/><!-- INCLUDE #QuotaManagerClass.nbRequestsPerHour.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.nbRequestsPerHourPerSession.Syntax -->](#nbrequestsperhourpersession)<br/><!-- INCLUDE #QuotaManagerClass.nbRequestsPerHourPerSession.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.nbRequestsPerMin.Syntax -->](#nbrequestspermin)<br/><!-- INCLUDE #QuotaManagerClass.nbRequestsPerMin.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.nbRequestsPerMinPerSession.Syntax -->](#nbrequestsperminpersession)<br/><!-- INCLUDE #QuotaManagerClass.nbRequestsPerMinPerSession.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.nbSessions.Syntax -->](#nbsessions)<br/><!-- INCLUDE #QuotaManagerClass.nbSessions.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.outBytesPerHour.Syntax -->](#outbytesperhour)<br/><!-- INCLUDE #QuotaManagerClass.outBytesPerHour.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.outBytesPerHourPerSession.Syntax -->](#outbytesperhourpersession)<br/><!-- INCLUDE #QuotaManagerClass.outBytesPerHourPerSession.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.outBytesPerMin.Syntax -->](#outbytespermin)<br/><!-- INCLUDE #QuotaManagerClass.outBytesPerMin.Summary -->|
|[<!-- INCLUDE #QuotaManagerClass.outBytesPerMinPerSession.Syntax -->](#outbytesperminpersession)<br/><!-- INCLUDE #QuotaManagerClass.outBytesPerMinPerSession.Summary -->|



<!-- REF QuotaManagerClass.currentValues.Desc -->
## .currentValues

<!-- REF #QuotaManagerClass.currentValues.Syntax -->**currentValues** : Object<!-- END REF -->

#### Description

The `.currentValues` property contains <!-- REF #QuotaManagerClass.currentValues.Summary -->the current usage values related to the quota properties<!-- END REF -->. This object is automatically updated by the server and is read-only.

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->
## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### Description

The `.defaultEntitySetTimeout` property contains <!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->the default inactivity timeout for REST entity sets stored in memory during the current session (in seconds)<!-- END REF -->.

Scope: current session level

By default, this value is 2 hours (7200 seconds). It can also be defined at the entity set creation using the [`$timeout` REST API](../REST/$timeout.md). 

You can change this value dynamically using the [`quotas.defaultEntitySetTimeout` property of the Session](./SessionClass.md#quotas), so that it will be used for any entity set created afterwards in the session (existing entity set default timeout values are not modified). 

:::note

If you define a value higher than the `maxEntitySetTimeout` property value, it will be aligned with the `maxEntitySetTimeout` value. 

:::

You cannot pass a value <=0 (an error is generated in this case). To reset the property value for the session, pass *undefined*. 


#### Example

In some 4D code in a REST process:

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

The `.maxEntitySetTimeout` property contains <!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->the maximum inactivity timeout value for REST entity sets stored in memory during the current session (in seconds)<!-- END REF -->.

Scope: current session level

You can set this value using the [`quotas.maxEntitySetTimeout` property of the Session](./SessionClass.md#quotas), so that it will be used for any entity set created afterward in the session (existing entity set maximum timeout values are not modified). 

Once the `.maxEntitySetTimeout` property is set, any entity set created afterward in the session could not have a timeout value longer than the `.maxEntitySetTimeout` value.

For example, assuming the maximum inactivity timeout is set to 40 minutes (2400 seconds), if an entity set is created with a required timeout which exceeds the maximum value:

```
http://127.0.0.1/rest/People?$filter=ID>=4&$method=entityset&$timeout=3000
```

... then the timeout defined in the request is ignored and the entity set will be released after 40 minutes if not used during this period of time.

You cannot pass a value <=0 (an error is generated in this case). To reset the property value for the session, pass *undefined*. 

#### Example

In some 4D code in a REST process:

```4d
Session.quotas.maxEntitySetTimeout:=2400
```


<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySets.Desc -->
## .nbEntitySets

<!-- REF #QuotaManagerClass.nbEntitySets.Syntax -->**nbEntitySets** : Integer<!-- END REF -->

#### Description

The `.nbEntitySets` property contains <!-- REF #QuotaManagerClass.nbEntitySets.Summary -->the maximum number of REST entity sets allowed in memory for the current session<!-- END REF -->.

Scope: current session level

By default, there is no limit for entity sets [stored in memory by REST requests](../REST/$info.md) (the value is 0). You can set a limit to control the server payload for a specific session.

When the maximum number of allowed entity sets is reached, a REST request that need to create an entity set will get a [**429** HTTP status code and an error response](../REST/REST_requests.md#rest-status-and-response), until at least one entity set is released. You can release an entity set from the cache using the [`$release` REST command](../REST/$entityset.md#entitysetrelease). 

You cannot pass a value <=0 (an error is generated in this case). To reset the property value for the session, pass *undefined*. 


#### Example

In some 4D code in a REST process:

```4d
	//max 50 entity sets
Session.quotas.nbEntitySets:=50
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySetsPerSession.Desc -->
## .nbEntitySetsPerSession

<!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Syntax -->**nbEntitySetsPerSession** : Integer<!-- END REF -->

#### Description

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




