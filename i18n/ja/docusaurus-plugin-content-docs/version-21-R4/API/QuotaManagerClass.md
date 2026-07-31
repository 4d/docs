---
id: QuotaManagerClass
title: QuotaManager
---

`4D.QuotaManager` クラスは、4D アプリケーションに適用する使用制限を設定およびモニターするためのインターフェースを提供します。 しきい値は、例えばほとんど最適化されていないリクエストやサーバーリソースの過度な使用などからサーバーを保護することなどに有用です。 一般的に、クォータマネージャーを使用することでREST サーバーセッションがアクセスできるORDA リソースに対してしきい値を儲けることができます。

`4D.QuotaManager` オブジェクトは、[セッションの`quotas` プロパティ](./SessionClass.md#quotas) オブジェクトからインスタンス化することができます。

<details><summary>履歴</summary>

| リリース  | 内容     |
| ----- | ------ |
| 21 R4 | クラスを追加 |

</details>

### QuotaManagerオブジェクト

4D.QuotaManager オブジェクトは以下のプロパティを提供します:

|                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #QuotaManagerClass.currentValues.Syntax -->](#currentvalues)<br/><!-- INCLUDE #QuotaManagerClass.defaultcurrentValuesEntitySetTimeout.Summary -->        |
| [<!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->](#defaultentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.defaultEntitySetTimeout.Summary --> |
| [<!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Syntax -->](#maxentitysettimeout)<br/><!-- INCLUDE #QuotaManagerClass.maxEntitySetTimeout.Summary -->             |
| [<!-- INCLUDE #QuotaManagerClass.nbEntitySets.Syntax -->](#nbentitysets)<br/><!-- INCLUDE #QuotaManagerClass.nbEntitySets().Summary -->                                |

<!-- REF QuotaManagerClass.currentValues.Desc -->

## .currentValues

<!-- REF #QuotaManagerClass.currentValues.Syntax -->**currentValues** : Object<!-- END REF -->

#### 説明

`.currentValues` プロパティには<!-- REF #QuotaManagerClass.currentValues.Summary -->定義されたクォータプロパティに関連したカレントの値<!-- END REF -->が格納されています。 このオブジェクトはサーバーによって自動できに更新されます。

<!-- END REF -->

<!-- REF QuotaManagerClass.defaultEntitySetTimeout.Desc -->

## .defaultEntitySetTimeout

<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Syntax -->**defaultEntitySetTimeout** : Integer<!-- END REF -->

#### 説明

`.defaultEntitySetTimeout` プロパティには<!-- REF #QuotaManagerClass.defaultEntitySetTimeout.Summary -->カレントセッションに保存されているREST エンティティセットのデフォルトの非アクティブタイムアウト(秒単位)<!-- END REF --> が格納されています。

デフォルトでは、値は2時間(7200 秒)です。 これはまた、[`$timeout` REST API](../REST/$timeout.md) を使用してエンティティセット作成時に定義することもできます。

この値は[セッションの`quotas.defaultEntitySetTimeout` プロパティ](./SessionClass.md#quotas) を使用することで動的に変更することもできます。これらはセッション内で後で作成されたあらゆるエンティティセットに対して使用することができます(この場合既存のエンティティセットのデフォルトのタイムアウト設定は変更されません)。

:::note

`maxEntitySetTimeout` プロパティ値より大きい値を定義した場合、それは`maxEntitySetTimeout` の値に揃えられます。

:::

負の値(<= 0)を渡すことはできません(その場合にはエラーが生成されます)。 セッションのプロパティ値をリセットするためには、*undefined* を渡してください。

#### 例題

REST を処理する4D コード内のどこかで以下の様に書くことができます:

```4d
Session.quotas.defaultEntitySetTimeout:=1200
```

<!-- END REF -->

<!-- REF QuotaManagerClass.maxEntitySetTimeout.Desc -->

## .maxEntitySetTimeout

<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Syntax -->**maxEntitySetTimeout** : Integer<!-- END REF -->

#### 説明

`.maxEntitySetTimeout` プロパティには<!-- REF #QuotaManagerClass.maxEntitySetTimeout.Summary -->カレントセッションの途中にメモリー内に保存されているREST エンティティセットの非アクティブタイムアウトの最大値(秒単位)<!-- END REF --> が格納されています。

この値は[セッションの`quotas.maxEntitySetTimeout` プロパティ](./SessionClass.md#quotas) を使用することで設定することもできます。これらはセッション内で後で作成されたあらゆるエンティティセットに対して使用することができます(この場合既存のエンティティセットのタイムアウトの最大値は変更されません)。

一度`.maxEntitySetTimeout` プロパティが設定されるとその後セッション内で作成されるあらゆるエンティティセットに対しては`.maxEntitySetTimeout` の値より長いタイムアウト値を設定することはできません。

例えば、最大非アクティブタイムアウト値が40 分(2400 秒) に設定されていたとして、もしその最大値を超えるタイムアウトを必要とするエンティティセットが作成された場合:

```
http://127.0.0.1/rest/People?$filter=ID>=4&$method=entityset&$timeout=3000
```

... リクエスト内で定義されたタイムアウトは無視され、この期間は何も使用されなかった場合には40分後にエンティティセットは解放されます。

負の値(<= 0)を渡すことはできません(その場合にはエラーが生成されます)。 セッションのプロパティ値をリセットするためには、*undefined* を渡してください。

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

`.nbEntitySets` プロパティには<!-- REF #QuotaManagerClass.nbEntitySets.Summary -->カレントセッション中にメモリ内で許可されるREST エンティティセットの最大数<!-- END REF --> が格納されています。

デフォルトでは、エンティティセットが[REST リクエストによってメモリに保存される数](../REST/$info.md) には制約はありません(値は 0 に設定されています)。 特定のセッションに対して、サーバーのペイロードを抑えるために、上限を設定することができます。

許可されているエンティティセットの最大数に達すると、エンティティセットの作成を必要とするREST リクエストは、少なくとも1つのエンティティセットが解放されるまでは[**429** HTTP ステータスコードとエラーレスポンス](../REST/REST_requests.md#restステータスとレスポンス) を受け取ります。 [`$release` REST コマンド](../REST/$entityset.md#entitysetrelease) を使用することで、キャッシュからエンティティセットを解放することができます。

負の値(<= 0)を渡すことはできません(その場合にはエラーが生成されます)。 セッションのプロパティ値をリセットするためには、*undefined* を渡してください。

#### 例題

REST を処理する4D コード内のどこかで以下の様に書くことができます:

```4d
	// エンティティセットの最大数は 50 
Session.quotas.nbEntitySets:=50
```

<!-- END REF -->




