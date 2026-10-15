---
id: QuotaManagerClass
title: QuotaManager
---

`4D.QuotaManager` クラスは、4D アプリケーションに適用する使用制限を設定およびモニターするためのインターフェースを提供します。しきい値は、例えば、ほとんど最適化されていないリクエストやサーバーリソースの過度な使用などからサーバーを保護することなどに有用です。例えばREST サーバーの場合、クォータを使用することでREST セッションがアクセス可能なORDA リソースを制限することができます。

:::tip 関連したBlog 記事

[A 4D web server that knows when to say No](https://blog.4d.com/a-4d-web-server-that-knows-when-to-say-no/)

:::

`4D.QuotaManager` オブジェクトは以下の方法でインスタンス化することが可能です:

- [Session オブジェクトの`quotas` プロパティ](./SessionClass.md#quotas)
- [Web サーバーオブジェクトの`quotas` プロパティ](./WebServerClass.md#quotas)

Web サーバーの設定と適用に関する詳細については、[Web server クォータ](../WebServer/quotas.md) を参照してください。

<details><summary>履歴</summary>

| リリース  | 内容                |
| ----- | ----------------- |
| 21 R5 | Web サーバークォータのサポート |
| 21 R4 | クラスを追加            |

</details>

### QuotaManagerオブジェクト

デフォルトでは、`4D.QuotaManager` オブジェクトのプロパティは*Undefined*(未定義)となっており、これは対応するクォータが何も適用されていないことを意味します。

`4D.QuotaManager` オブジェクト自体は直接代入することはできず、プロパティを追加することや削除することもできません。クォータは、既存のオブジェクトの対応するプロパティを変更することで設定されます。

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

`.currentValues` プロパティには<!-- REF #QuotaManagerClass.currentValues.Summary -->クォータマネージャーの現在使用されている値<!-- END REF --> が格納されています。これは4D によって自動的に更新され、また読み出し専用です。

このオブジェクトは`4D.QuotaManager` オブジェクトと同じプロパティを持ちますが、以下のプロパティのみが現在の使用状況を方向します:

- [`nbEntitySets`](#nbentitysets)
- [`nbSessions`](#nbsessions)
- [`nbGuestSessions`](#nbguestsessions)

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### 説明

:::note

このクォータは、[`Session.quotas`](./SessionClass.md#quotas) を使用することで、カレントのREST セッションに対してのみ設定することができます。

:::

`.defaultEntitySetTimeout` プロパティには<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->カレントセッションに保存されているREST エンティティセットのデフォルトの非アクティブタイムアウト(秒単位)<!-- END REF --> が格納されています。

スコープ: カレントセッションレベル

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

`.inBytesPerHour` プロパティには<!-- REF #QuotaManagerClass.inBytesPerHour.Summary -->Web サーバーが1時間に受信できる最大バイト数<!-- END REF --> が格納されています。

スコープ: [サーバーグローバルレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerHourPerSession.Desc -->

## .inBytesPerHourPerSession

<!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Syntax -->**inBytesPerHourPerSession** : Integer<!-- END REF -->

#### 説明

`.inBytesPerHourPerSession` プロパティには<!-- REF #QuotaManagerClass.inBytesPerHourPerSession.Summary -->Web サーバーがセッションに対して1時間に受信できる最大の総バイト数<!-- END REF --> が格納されています。

スコープ: [セッションデフォルトレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMin.Desc -->

## .inBytesPerMin

<!-- REF #QuotaManagerClass.inBytesPerMin.Syntax -->**inBytesPerMin** : Integer<!-- END REF -->

#### 説明

`.inBytesPerMin` プロパティには<!-- REF #QuotaManagerClass.inBytesPerMin.Summary -->Web サーバーが1分間に受信できる最大の総バイト数<!-- END REF --> が格納されています。

スコープ: [サーバーグローバルレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.inBytesPerMinPerSession.Desc -->

## .inBytesPerMinPerSession

<!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Syntax -->**inBytesPerMinPerSession** : Integer<!-- END REF -->

#### 説明

`.inBytesPerMinPerSession` プロパティには<!-- REF #QuotaManagerClass.inBytesPerMinPerSession.Summary -->Web サーバーがセッションに対して1分間に受信できる最大の総バイト数<!-- END REF --> が格納されています。

スコープ: [セッションデフォルトレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### 説明

:::note

このクォータは、[`Session.quotas`](./SessionClass.md#quotas) を使用することで、カレントのREST セッションに対してのみ設定することができます。

:::

`.maxEntitySetTimeout` プロパティには<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->カレントセッションの途中にメモリ内に保存されているREST エンティティセットの非アクティブタイムアウトの最大値(秒単位)<!-- END REF --> が格納されています。

スコープ: カレントセッションレベル

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

このクォータは、[`Session.quotas`](./SessionClass.md#quotas) を使用することで、カレントのREST セッションに対してのみ設定することができます。

:::

`.nbEntitySets` プロパティには<!-- REF #QuotaManagerClass.nbEntitySets.Summary -->カレントのセッション内においてメモリ内に許可されているREST エンティティセットの最大数<!-- END REF --> が格納されています。

スコープ: カレントセッションレベル

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

このクォータはREST セッションに対してのみ適用されます。

:::

`.nbEntitySetsPerSession` プロパティには<!-- REF #QuotaManagerClass.nbEntitySetsPerSession.Summary -->各REST セッションに対してメモリ内に許可されているエンティティセットの最大数<!-- END REF --> が格納されています。

スコープ: [セッションデフォルトレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbGuestSessions.Desc -->

## .nbGuestSessions

<!-- REF #QuotaManagerClass.nbGuestSessions.Syntax -->**nbGuestSessions** : Integer<!-- END REF -->

#### 説明

`.nbGuestSessions` プロパティには<!-- REF #QuotaManagerClass.nbGuestSessions.Summary -->Web サーバー上のアクティブな[ゲストセッション](./SessionClass.md#isguest) の最大総数<!-- END REF --> が格納されています。

スコープ: [サーバーグローバルレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHour.Desc -->

## .nbRequestsPerHour

<!-- REF #QuotaManagerClass.nbRequestsPerHour.Syntax -->**nbRequestsPerHour** : Integer<!-- END REF -->

#### 説明

`.nbRequestsPerHour` プロパティには<!-- REF #QuotaManagerClass.nbRequestsPerHour.Summary -->Web サーバーが1時間に受信できるリクエストの最大総数<!-- END REF --> が格納されています。

スコープ: [サーバーグローバルレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerHourPerSession.Desc -->

## .nbRequestsPerHourPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Syntax -->**nbRequestsPerHourPerSession** : Integer<!-- END REF -->

#### 説明

`.nbRequestsPerHourPerSession` プロパティには<!-- REF #QuotaManagerClass.nbRequestsPerHourPerSession.Summary -->セッションが1時間に受信できるリクエストの最大総数<!-- END REF --> が格納されています。

スコープ: [セッションデフォルトレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMin.Desc -->

## .nbRequestsPerMin

<!-- REF #QuotaManagerClass.nbRequestsPerMin.Syntax -->**nbRequestsPerMin** : Integer<!-- END REF -->

#### 説明

`.nbRequestsPerMin` プロパティには<!-- REF #QuotaManagerClass.nbRequestsPerMin.Summary -->Web サーバーが1分間に受信できるリクエストの最大総数<!-- END REF --> が格納されています。

スコープ: [サーバーグローバルレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbRequestsPerMinPerSession.Desc -->

## .nbRequestsPerMinPerSession

<!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Syntax -->**nbRequestsPerMinPerSession** : Integer<!-- END REF -->

#### 説明

`.nbRequestsPerMinPerSession` プロパティには<!-- REF #QuotaManagerClass.nbRequestsPerMinPerSession.Summary -->セッションが1分間に受信できるリクエストの最大総数<!-- END REF --> が格納されています。

スコープ: [セッションデフォルトレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.nbSessions.Desc -->

## .nbSessions

<!-- REF #QuotaManagerClass.nbSessions.Syntax -->**nbSessions** : Integer<!-- END REF -->

#### 説明

`.nbSessions` プロパティには<!-- REF #QuotaManagerClass.nbSessions.Summary -->Web サーバー上のアクティブセッションの最大総数<!-- END REF --> が格納されています。

スコープ: [サーバーグローバルレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHour.Desc -->

## .outBytesPerHour

<!-- REF #QuotaManagerClass.outBytesPerHour.Syntax -->**outBytesPerHour** : Integer<!-- END REF -->

#### 説明

`.outBytesPerHour` プロパティには<!-- REF #QuotaManagerClass.outBytesPerHour.Summary -->Web サーバーが1時間に送信できる最大バイト数<!-- END REF --> が格納されています。このクォータは、Web サーバーの圧縮設定に関わらず、圧縮されていないレスポンスのペイロードサイズに基づいて評価されます。

スコープ: [サーバーグローバルレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerHourPerSession.Desc -->

## .outBytesPerHourPerSession

<!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Syntax -->**outBytesPerHourPerSession** : Integer<!-- END REF -->

#### 説明

`.outBytesPerHourPerSession` プロパティには<!-- REF #QuotaManagerClass.outBytesPerHourPerSession.Summary -->Web サーバーがセッションに対して1時間に送信できる最大の総バイト数<!-- END REF --> が格納されています。このクォータは、Web サーバーの圧縮設定に関わらず、圧縮されていないレスポンスのペイロードサイズに基づいて評価されます。

スコープ: [セッションデフォルトレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMin.Desc -->

## .outBytesPerMin

<!-- REF #QuotaManagerClass.outBytesPerMin.Syntax -->**outBytesPerMin** : Integer<!-- END REF -->

#### 説明

`.outBytesPerMin` プロパティには<!-- REF #QuotaManagerClass.outBytesPerMin.Summary -->Web サーバーが1分間に送信できる最大バイト数<!-- END REF --> が格納されています。このクォータは、Web サーバーの圧縮設定に関わらず、圧縮されていないレスポンスのペイロードサイズに基づいて評価されます。

スコープ: [サーバーグローバルレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->

<!-- REF QuotaManagerClass.outBytesPerMinPerSession.Desc -->

## .outBytesPerMinPerSession

<!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Syntax -->**outBytesPerMinPerSession** : Integer<!-- END REF -->

#### 説明

`.outBytesPerMinPerSession` プロパティには<!-- REF #QuotaManagerClass.outBytesPerMinPerSession.Summary -->Web サーバーがセッションに対して
1分間に送信できる最大の総バイト数<!-- END REF --> が格納されています。このクォータは、Web サーバーの圧縮設定に関わらず、圧縮されていないレスポンスのペイロードサイズに基づいて評価されます。

スコープ: [セッションデフォルトレベル](./WebServerClass.md#スコープレベル)

<!-- END REF -->




