---
id: QuotaManagerClass
title: QuotaManager
---

`4D.QuotaManager` クラスは、4D アプリケーションに適用する使用制限を設定およびモニターするためのインターフェースを提供します。 Thresholds are useful, for example, to protect the server from poorly optimized requests or excessive use of server resources. For the REST server for example, quotas can limit the ORDA resources accessible to a REST session.

`4D.QuotaManager` objects can be instantiated by:

- the [`quotas` property of a Session](./SessionClass.md#quotas) object
- the [`quotas` property of a Web server](./WebServerClass.md#quotas) object

For Web server configuration and enforcement details, see [Web server quotas](../WebServer/quotas.md).

<details><summary>履歴</summary>

| リリース  | 内容                           |
| ----- | ---------------------------- |
| 21 R5 | Support of Web server quotas |
| 21 R4 | クラスを追加                       |

</details>

### QuotaManagerオブジェクト

By default, the properties of a `4D.QuotaManager` object are *Undefined*, meaning that no corresponding quota is applied.

The `4D.QuotaManager` object itself cannot be directly assigned, and properties cannot be added to or removed from it. Quotas are configured by modifying the corresponding properties of the existing object.

4D.QuotaManager オブジェクトは以下のプロパティを提供します:

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

#### 説明

The `.currentValues` property contains <!-- REF #QuotaManagerClass.currentValues.Summary -->current usage values for the quota manager<!-- END REF -->. It is automatically updated by 4D and is read-only.

The object has the same properties as the `4D.QuotaManager` object, but only the following properties report current usage:

- [`nbEntitySets`](#nbentitysets)
- [`nbSessions`](#nbsessions)
- [`nbGuestSessions`](#nbguestsessions)

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### 説明

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

`.defaultEntitySetTimeout` プロパティには<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->カレントセッションに保存されているREST エンティティセットのデフォルトの非アクティブタイムアウト(秒単位)<!-- END REF --> が格納されています。

Scope: current session level

デフォルトでは、値は2時間(7200 秒)です。これはまた、[`$timeout` REST API](../REST/$timeout.md) を使用してエンティティセット作成時に定義することもできます。

この値は[セッションの`quotas.defaultEntitySetTimeout` プロパティ](./SessionClass.md#quotas) を使用することで動的に変更することもできます。これらはセッション内で後で作成されたあらゆるエンティティセットに対して使用することができます(この場合既存のエンティティセットのデフォルトのタイムアウト設定は変更されません)。

:::note

`maxEntitySetTimeout` プロパティ値より大きい値を定義した場合、それは`maxEntitySetTimeout` の値に揃えられます。

:::

負の値(<= 0)を渡すことはできません(その場合にはエラーが生成されます)。セッションのプロパティ値をリセットするためには、*undefined* を渡してください。

#### 例題

REST を処理する4D コード内のどこかで以下の様に書くことができます:

```4d
Session.quotas.defaultEntitySetTimeout:=1200
```

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerHour.Desc -->

## .inBytesPerHour

<!-- REF #QuotaManagerClass.inBytesPerHour.Syntax -->**inBytesPerHour** : Integer<!-- END REF -->

#### 説明

The `.inBytesPerHour` property contains <!-- REF #QuotaManagerClass.inBytesPerHour.Summary -->the maximum total number of bytes that the Web server can receive in one hour<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerHourPerSession.Desc -->

## .inBytesPerHourPerSession

<!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Syntax -->**inBytesPerHourPerSession** : Integer<!-- END REF -->

#### 説明

The `.inBytesPerHourPerSession` property contains <!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Summary -->the maximum total number of bytes that the Web server can receive for a session in one hour<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMin.Desc -->

## .inBytesPerMin

<!-- REF #QuotaManagerClass.inBytesPerMin.Syntax -->**inBytesPerMin** : Integer<!-- END REF -->

#### 説明

The `.inBytesPerMin` property contains <!-- REF #QuotaManagerClass.inBytesPerMin.Summary -->the maximum total number of bytes that the Web server can receive in one minute<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMinPerSession.Desc -->

## .inBytesPerMinPerSession

<!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Syntax -->**inBytesPerMinPerSession** : Integer<!-- END REF -->

#### 説明

The `.inBytesPerMinPerSession` property contains <!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Summary -->the maximum total number of bytes that the Web server can receive for a session in one minute<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### 説明

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

`.maxEntitySetTimeout` プロパティには<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->カレントセッションの途中にメモリ内に保存されているREST エンティティセットの非アクティブタイムアウトの最大値(秒単位)<!-- END REF --> が格納されています。

Scope: current session level

この値は[セッションの`quotas.maxEntitySetTimeout` プロパティ](./SessionClass.md#quotas) を使用することで設定することもできます。これらはセッション内で後で作成されたあらゆるエンティティセットに対して使用することができます(この場合既存のエンティティセットのタイムアウトの最大値は変更されません)。

一度`.maxEntitySetTimeout` プロパティが設定されるとその後セッション内で作成されるあらゆるエンティティセットに対しては`.maxEntitySetTimeout` の値より長いタイムアウト値を設定することはできません。

例えば、最大非アクティブタイムアウト値が40 分(2400 秒) に設定されていたとして、もしその最大値を超えるタイムアウトを必要とするエンティティセットが作成された場合:

```
http://127.0.0.1/rest/People?$filter=ID>=4&$method=entityset&$timeout=3000
```

... リクエスト内で定義されたタイムアウトは無視され、この期間は何も使用されなかった場合には40分後にエンティティセットは解放されます。

負の値(<= 0)を渡すことはできません(その場合にはエラーが生成されます)。セッションのプロパティ値をリセットするためには、*undefined* を渡してください。

#### 例題

REST を処理する4D コード内のどこかで以下の様に書くことができます:

```4d
Session.quotas.maxEntitySetTimeout:=2400
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySets.Desc -->

## .nbEntitySets

<!-- REF #QuotaManagerClass.nbEntitySets.Syntax -->**nbEntitySets** : Integer<!-- END REF -->

#### 説明

:::note

This quota can only be configured for the current REST session through [`Session.quotas`](./SessionClass.md#quotas).

:::

`.nbEntitySets` プロパティには<!-- REF #QuotaManagerClass.nbEntitySets.Summary -->カレントのセッション内においてメモリ内に許可されているREST エンティティセットの最大数<!-- END REF --> が格納されています。

Scope: current session level

デフォルトでは、エンティティセットが[REST リクエストによってメモリに保存される数](../REST/$info.md) には制約はありません(値は 0 に設定されています)。特定のセッションに対して、サーバーのペイロードを抑えるために、上限を設定することができます。

許可されているエンティティセットの最大数に達すると、エンティティセットの作成を必要とするREST リクエストは、少なくとも1つのエンティティセットが解放されるまでは[**429** HTTP ステータスコードとエラーレスポンス](../REST/REST_requests.md#restステータスとレスポンス) を受け取ります。 [`$release` REST コマンド](../REST/$entityset.md#entitysetrelease) を使用することで、キャッシュからエンティティセットを解放することができます。

負の値(<= 0)を渡すことはできません(その場合にはエラーが生成されます)。セッションのプロパティ値をリセットするためには、*undefined* を渡してください。

#### 例題

REST を処理する4D コード内のどこかで以下の様に書くことができます:

```4d
	// エンティティセットの最大数は 50 
Session.quotas.nbEntitySets:=50
```

<!-- END REF -->

<!-- REF QuotaManagerClass.nbEntitySetsPerSession.Desc -->

## .nbEntitySetsPerSession

<!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Syntax -->**nbEntitySetsPerSession** : Integer<!-- END REF -->

#### 説明

:::note

This quota applies only to a REST session.

:::

The `.nbEntitySetsPerSession` property contains <!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Summary -->the maximum number of entity sets allowed in memory for each REST session<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbGuestSessions.Desc -->

## .nbGuestSessions

<!-- REF #QuotaManagerClass.nbGuestSessions.Syntax -->**nbGuestSessions** : Integer<!-- END REF -->

#### 説明

The `.nbGuestSessions` property contains <!-- REF #QuotaManagerClass.nbGuestSessions.Summary -->the maximum total number of active [Guest sessions](./SessionClass.md#isguest) on the Web server<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHour.Desc -->

## .nbRequestsPerHour

<!-- REF #QuotaManagerClass.nbRequestsPerHour.Syntax -->**nbRequestsPerHour** : Integer<!-- END REF -->

#### 説明

The `.nbRequestsPerHour` property contains <!-- REF #QuotaManagerClass.nbRequestsPerHour.Summary -->the maximum total number of requests that the Web server can receive in one hour<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHourPerSession.Desc -->

## .nbRequestsPerHourPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Syntax -->**nbRequestsPerHourPerSession** : Integer<!-- END REF -->

#### 説明

The `.nbRequestsPerHourPerSession` property contains <!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Summary -->the maximum total number of requests that a session can receive in one hour<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMin.Desc -->

## .nbRequestsPerMin

<!-- REF #QuotaManagerClass.nbRequestsPerMin.Syntax -->**nbRequestsPerMin** : Integer<!-- END REF -->

#### 説明

The `.nbRequestsPerMin` property contains <!-- REF #QuotaManagerClass.nbRequestsPerMin.Summary -->the maximum total number of requests that the Web server can receive in one minute<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMinPerSession.Desc -->

## .nbRequestsPerMinPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Syntax -->**nbRequestsPerMinPerSession** : Integer<!-- END REF -->

#### 説明

The `.nbRequestsPerMinPerSession` property contains <!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Summary -->the maximum total number of requests that a session can receive in one minute<!-- END REF -->.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbSessions.Desc -->

## .nbSessions

<!-- REF #QuotaManagerClass.nbSessions.Syntax -->**nbSessions** : Integer<!-- END REF -->

#### 説明

The `.nbSessions` property contains <!-- REF #QuotaManagerClass.nbSessions.Summary -->the maximum total number of active sessions on the Web server<!-- END REF -->.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHour.Desc -->

## .outBytesPerHour

<!-- REF #QuotaManagerClass.outBytesPerHour.Syntax -->**outBytesPerHour** : Integer<!-- END REF -->

#### 説明

The `.outBytesPerHour` property contains <!-- REF #QuotaManagerClass.outBytesPerHour.Summary -->the maximum total number of bytes that the Web server can send in one hour<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHourPerSession.Desc -->

## .outBytesPerHourPerSession

<!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Syntax -->**outBytesPerHourPerSession** : Integer<!-- END REF -->

#### 説明

The `.outBytesPerHourPerSession` property contains <!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Summary -->the maximum total number of bytes that the Web server can send for a session in one hour<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMin.Desc -->

## .outBytesPerMin

<!-- REF #QuotaManagerClass.outBytesPerMin.Syntax -->**outBytesPerMin** : Integer<!-- END REF -->

#### 説明

The `.outBytesPerMin` property contains <!-- REF #QuotaManagerClass.outBytesPerMin.Summary -->the maximum total number of bytes that the Web server can send in one minute<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [server global level](./WebServerClass.md#scope-levels)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMinPerSession.Desc -->

## .outBytesPerMinPerSession

<!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Syntax -->**outBytesPerMinPerSession** : Integer<!-- END REF -->

#### 説明

The `.outBytesPerMinPerSession` property contains <!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Summary -->the maximum total number of bytes that the Web server can send for a session in one minute<!-- END REF -->. The quota is evaluated on the uncompressed response payload size, regardless of the Web server compression settings.

Scope: [session default level](./WebServerClass.md#scope-levels)

<!-- END REF -->




