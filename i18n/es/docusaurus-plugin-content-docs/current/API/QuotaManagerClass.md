---
id: QuotaManagerClass
title: QuotaManager
---

The `4D.QuotaManager` class provides you with an interface to configure and monitor some usage limits you apply to your 4D application. Thresholds are useful for example to protect the server from poorly optimized requests or excessive use of server resources. Typically, the quota manager allows you to provide thresholds to ORDA resources a REST server session can access.

`4D.QuotaManager` objects can be instantiated by the [`quotas` property of a session](./SessionClass.md#quotas) object.

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 21 R4       | Clase añadida  |

</details>

### Objeto QuotaManager

4D.QuotaManager objects provide the following properties:

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #QuotaManagerClass.currentValues.Syntax -->](#currentvalues)<br/><!-- INCLUDE #QuotaManagerClass.defaultcurrentValuesEntitySetTimeout.Summary -->        |
| [<!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->](#defaultentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Summary --> |
| [<!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Syntax -->](#maxentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Summary -->             |
| [<!-- INCLUDE #QuotaManagerClass.nbEntitySets.Syntax -->](#nbentitysets)<br/><!-- INCLUDE #QuotaManagerClass.nbEntitySets().Summary -->                                |

<!-- REF QuotaManagerClass.currentValues.Desc -->

## .currentValues

<!-- REF #QuotaManagerClass.currentValues.Syntax -->**currentValues** : Object<!-- END REF -->

#### Descripción

The `.currentValues` property contains <!-- REF #QuotaManagerClass.currentValues.Summary -->the current values related to the defined quotas properties<!-- END REF -->. This object is automatically updated by the server.

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### Descripción

The `.defaultEntitySetTimeout` property contains <!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->the default inactivity timeout for REST entity sets stored in memory during the current session (in seconds)<!-- END REF -->.

By default, this value is 2 hours (7200 seconds). It can also be defined at the entity set creation using the [`$timeout` REST API](../REST/$timeout.md).

You can change this value dynamically using the [`quotas.defaultEntitySetTimeout` property of the Session](./SessionClass.md#quotas), so that it will be used for any entity set created afterwards in the session (existing entity set default timeout values are not modified).

:::note

If you define a value higher than the `maxEntitySetTimeout` property value, it will be aligned with the `maxEntitySetTimeout` value.

:::

You cannot pass a value <=0 (an error is generated in this case). To reset the property value for the session, pass *undefined*.

#### Ejemplo

En un código 4D de un proceso REST:

```4d
Session.quotas.defaultEntitySetTimeout:=1200
```

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### Descripción

The `.maxEntitySetTimeout` property contains <!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->the maximum inactivity timeout value for REST entity sets stored in memory during the current session (in seconds)<!-- END REF -->.

You can set this value using the [`quotas.maxEntitySetTimeout` property of the Session](./SessionClass.md#quotas), so that it will be used for any entity set created afterward in the session (existing entity set maximum timeout values are not modified).

Once the `.maxEntitySetTimeout` property is set, any entity set created afterward in the session could not have a timeout value longer than the `.maxEntitySetTimeout` value.

For example, assuming the maximum inactivity timeout is set to 40 minutes (2400 seconds), if an entity set is created with a required timeout which exceeds the maximum value:

```
http://127.0.0.1/rest/People?$filter=ID>=4&$method=entityset&$timeout=3000
```

... then the timeout defined in the request is ignored and the entity set will be released after 40 minutes if not used during this period of time.

You cannot pass a value <=0 (an error is generated in this case). To reset the property value for the session, pass *undefined*.

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

The `.nbEntitySets` property contains <!-- REF #QuotaManagerClass.nbEntitySets.Summary -->the maximum number of REST entity sets allowed in memory for the current session (in seconds)<!-- END REF -->.

By default, there is no limit for entity sets [stored in memory by REST requests](../REST/$info.md) (the value is 0). You can set a limit to control the server payload for a specific session.

When the maximum number of allowed entity sets is reached, a REST request that need to create an entity set will get a [**429** HTTP status code and an error response](../REST/REST_requests.md#rest-status-and-response), until at least one entity set is released. You can release an entity set from the cache using the [`$release` REST command](../REST/$entityset.md#entitysetrelease).

You cannot pass a value <=0 (an error is generated in this case). To reset the property value for the session, pass *undefined*.

#### Ejemplo

En un código 4D de un proceso REST:

```4d
	//max 50 entity sets
Session.quotas.nbEntitySets:=50
```

<!-- END REF -->




