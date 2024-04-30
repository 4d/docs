---
id: gettingStarted
title: はじめに
---

4D は、4Dアプリケーションに格納されているデータへのダイレクトアクセスを可能にする強力な RESTサーバーを提供しています。

The REST server is included in 4D and 4D Server, it is automatically available in your 4D applications [once it is configured](configuration.md).

この章では、簡単な例題を使用して REST機能を紹介します。 これから、実際に次のことをしてみましょう:

- 簡単な 4Dアプリケーションプロジェクトを作成し、設定します。
- 標準のブラウザーを開き、REST を介して 4Dプロジェクトのデータにアクセスします。

例題が複雑にならないよう、ここでは 4D とブラウザーを同じマシン上で使用します。 もちろん、リモートアーキテクチャーを使うことも可能です。

## 4Dプロジェクトの作成と設定

1. 4D または 4D Server アプリケーションを起動し、新規プロジェクトを作成します。 名前は仮に "Emp4D" とします。

2. ストラクチャーエディターを開き、[Employees] テーブルを作成して、次のフィールドを追加します:
   - Lastname (文字列)
   - Firstname (文字列)
   - Salary (倍長整数)

![](../assets/en/REST/getstarted1.png)

> テーブルおよび各フィールドの "RESTリソースとして公開" オプションはデフォルトで選択されています。これを変更しないでください。

3. フォームを作成し、何名かの社員レコードを作成します:

![](../assets/en/REST/getstarted2.png)

4. Open the **Web > Web Features** page of the Settings dialog box and [check the Expose as REST server](configuration.md#starting-the-rest-server) option.

5. In the **Run** menu, select **Start Web Server** (if necessary), then select **Test Web Server**.

規定のブラウザーが開かれ、4D Webサーバーのデフォルトホームページが表示されます。

## ブラウザーから 4D データにアクセスする

これで、RESTリクエストを使った 4D のデータの読み込み・編集が可能になりました。

Any 4D REST URL request starts with `/rest`, to be inserted after the `address:port` area. たとえば、4Dデータストアの内容を確認するには、次のように書けます:

```
http://127.0.0.1/rest/$catalog
```

RESTサーバーの応答です:

```
{
	"__UNIQID": "96A49F7EF2ABDE44BF32059D9ABC65C1",
	"dataClasses": [
		{
			"name": "Employees",
			"uri": "/rest/$catalog/Employees",
			"dataURI": "/rest/Employees"
		}
	]
}
```

これは、データストアに Employees データクラスが格納されていることを意味します。 データクラス属性を確認するには、次のように書きます:

```
/rest/$catalog/Employees
```

また、Employees データクラスの全エンティティを取得するには:

```
/rest/Employees
```

**Response:**

```
{
	"__entityModel": "Employees",
	"__GlobalStamp": 0,
	"__COUNT": 3,
	"__FIRST": 0,
	"__ENTITIES": [
		{
			"__KEY": "1",
			"__TIMESTAMP": "2020-01-07T17:07:52.467Z",
			"__STAMP": 2,
			"ID": 1,
			"Lastname": "Brown",
			"Firstname": "Michael",
			"Salary": 25000
		},
		{
			"__KEY": "2",
			"__TIMESTAMP": "2020-01-07T17:08:14.387Z",
			"__STAMP": 2,
			"ID": 2,
			"Lastname": "Jones",
			"Firstname": "Maryanne",
			"Salary": 35000
		},
		{
			"__KEY": "3",
			"__TIMESTAMP": "2020-01-07T17:08:34.844Z",
			"__STAMP": 2,
			"ID": 3,
			"Lastname": "Smithers",
			"Firstname": "Jack",
			"Salary": 41000
		}
	],
	"__SENT": 3
}
```

取得するデータを様々な条件でフィルターすることも可能です。 たとえば、2番目のエンティティの "Lastname" 属性値のみを取得するには、次のように書きます:

```
/rest/Employees(2)/Lastname
```

**Response:**

```
{
	"__entityModel": "Employees",
	"__KEY": "2",
	"__TIMESTAMP": "2020-01-07T17:08:14.387Z",
	"__STAMP": 2,
	"Lastname": "Jones"
}
```

The 4D [REST API](REST_requests.md) provides various commands to interact with the 4D applications.
