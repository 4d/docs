---
id: license-info
title: License info
displayed_sidebar: docs
---

<!--REF #_command_.License info.Syntax-->**License info** : Object<!-- END REF-->

<!--REF #_command_.License info.Params-->

| 引数  | 型      |   | 説明                |
| --- | ------ | - | ----------------- |
| 戻り値 | Object | ← | アクティブなライセンスに関する情報 |

<!-- END REF-->

#### 説明

<!--REF #_command_.License info.Summary-->The **License info** command returns an object providing detailed information about the active license.<!-- END REF-->

コマンドが、ローカルではライセンスを使用しない4D アプリケーション上で実行された場合(例: 4D リモートなど)、コマンドはNull オブジェクトを返します。

戻り値のオブジェクトには、以下のプロパティが格納されています:

```json
{
    "name": "string",
    "key": 0,
    "licenseNumber": "string",
    "version": "string",
    "attributes": ["string1", "string2"], // オプション
    "userName": "string",
    "userMail": "string",
    "companyName": "string",
    "platforms": ["string1", "string2"],
    "expirationDate": { 
        // 詳細がここに返される
    }, // オプション
    "renewalFailureCount": 0, // オプション
    "products": [
        { // それぞれの登録されたエキスパンションプロダクトにつき返される
            "id": 0,
            "name": "string",
            "usedCount": 0,
            "allowedCount": 0,
            "rights": [
                {
                    "count": 0,
                    "expirationDate": { 
                        // 詳細がここに返される
                    } // オプション
                }
            ]
        }
    ]
}
```

| **プロパティ**           | **型**                 | **Description**                                                                                                                             | **Example**                                                                       |
| ------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| name                | string                | ライセンス名                                                                                                                                      | "4D Developer Professional vXX"                                                   |
| key                 | number                | インストールされたプロダクトのID 4D アプリケーション(4D Server、ローカル4D、4D デスクトップなど) には固有の番号が マシン上にインストールされているアプリケーションに割り振られています。 この番号は暗号化されています。 | 12356789                                                                          |
| licenseNumber       | string                | ライセンス番号                                                                                                                                     | "4DDP16XXXXX1123456789"                                                           |
| version             | string                | 製品バージョン番号                                                                                                                                   | "16", "16R2"                                                                      |
| attributes          | collection of strings | (該当する場合であれば) ライセンスのタイプ(オプション)                                                                         | \["application","OEM"\]     |
| userName            | string                | 4D ストアアカウントでの名前                                                                                                                             | "John Smith"                                                                      |
| userMail            | string                | 4D ストアアカウントでのメールアドレス                                                                                                                        | "john.smith@gmail.com"               |
| companyName         | string                | 4D ストアアカウントでの会社名                                                                                                                            | "Alpha Cie"                                                                       |
| platforms           | collection of strings | ライセンスを使用しているプラットフォーム                                                                                                                        | \["macOS", "windows"\]      |
| expirationDate      | object                | 有効期限(オプション)                                                                                                              | {"day":2, "month":6, "year":2018} |
| renewalFailureCount | number                | 少なくとも一つの製品ライセンスに対して自動更新に失敗した回数(オプション)                                                                                    | 3                                                                                 |
| products            | Object の Collection   | 製品ライセンスの詳細(各要素が製品ライセンスそれぞれの詳細を表す) 以下参照。                                                                                  |                                                                                   |

`products` コレクションの各オブジェクトは、以下のプロパティが格納されています:

| **プロパティ**    |                                                                                            | **型**               | **Description**                               | **Example**                                                                                 |
| ------------ | ------------------------------------------------------------------------------------------ | ------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| id           |                                                                                            | number              | ライセンス番号                                       | 取りうる値については、[Is license available](../commands-legacy/is-license-available.md) コマンドを参照して下さい。 |
| name         |                                                                                            | string              | ライセンス名                                        | "4D Write - 4D Write Pro"                                                                   |
| usedCount    |                                                                                            | number              | 消費接続数                                         | 8                                                                                           |
| allowedCount |                                                                                            | number              | 有効期限内においてその製品に対して許可される総接続数                    | 15                                                                                          |
| rights       |                                                                                            | Object の Collection | 製品に対する権利(有効期限1つにつき要素1つ)    |                                                                                             |
|              | \[ \].count          | number              | 許可された接続数                                      | 15 (32767 は無制限を意味します)                                                    |
|              | \[ \].expirationDate | object              | 有効期限(オプション、上記のものと同じフォーマット) | {"day":1, "month":11, "year":2017}          |

#### 例題

現在の4D Server ライセンスについての情報を取得した場合を考えます:

```4d
 var $obj : Object
 $obj:=License info
```

*$obj* には、一例として以下のような内容が返されます:

```json
{
    "name": "4D Server v16 R3",
    "key": 123456789,
    "licenseNumber": "xxxx",
    "version": "16R3",
    "userName": "John DOE",
    "userMail": "john.doe@alpha.com",
    "companyName": "Alpha",
    "platforms": ["macOS", "windows"],
    "expirationDate": {"day":1, "month":1, "year":2018},
    "products":[
        {
            "allowedCount": 15,
            "id": 808464697,
            "name": "4D Write - 4D Write Pro",
            "rights": [
                {
                    "count": 5,
                    "expirationDate": {"day":1, "month":2, "year":2018}
                }, {
                    "count": 10,
                    "expirationDate": {"day":1, "month":11, "year":2017}
                }, {
                    "count": 10,
                    "expirationDate": {"day":1, "month":11, "year":2015} //失効しているのでカウントされません
                }
            ],
            "usedCount": 12
        },
        {...}
    ]
}
```

#### 参照

[CHANGE LICENSES](../commands-legacy/change-licenses.md)\
[Is license available](../commands-legacy/is-license-available.md)\
[WEB Get server info](../commands-legacy/web-get-server-info.md)

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1489                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
