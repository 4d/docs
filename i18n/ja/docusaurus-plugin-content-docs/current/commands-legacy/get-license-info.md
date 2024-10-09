---
id: get-license-info
title: Get license info
slug: /commands/get-license-info
displayed_sidebar: docs
---

<!--REF #_command_.Get license info.Syntax-->**Get license info** -> 戻り値<!-- END REF-->
<!--REF #_command_.Get license info.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Object | &larr; | アクティブなライセンスについての情報 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get license info.Summary-->**Get license info** コマンドはアクティブなライセンスについての詳細な情報を提供するオブジェクトを返します。<!-- END REF-->

コマンドがライセンスをローカルに使用しない4Dアプリケーション上(例:4Dリモートなど)で実行された場合、コマンドはヌルオブジェクトを返します。

返されたオブジェクトには以下のようなプロパティが含まれます:

```RAW
{    "name": string    "licenseNumber": string    "version": string    "attributes": optional, array of strings    "userName": string    "userMail": string    "companyName": string    "platforms": array of strings    "expirationDate": optional, object    "renewalFailureCount": optional, number    "products":[ //for each registered expansion product        {            "id": number            "name": string            "usedCount": number            "allowedCount": number            "rights": [                 {                    "count": number                    "expirationDate" optional, object                 }            ]        }    ]}
```

| **プロパティ名**           | **型**         | **詳細**                                    | **例**                                                                      |
| -------------------- | ------------- | ----------------------------------------- | -------------------------------------------------------------------------- |
| name                 | 文字列           | 製品名                                       | "4D Developer Professional v16"                                            |
| licenseNumber        | 文字列           | ライセンス番号                                   | "4DDP16XXXXX1123456789"                                                    |
| version              | 文字列           | 製品バージョン番号                                 | "16", "16R2"                                                               |
| attributes           | 文字列のコレクション    | 適用可能であればライセンスのタイプ(任意)                     | \["application","OEM"\]                                                    |
| userName             | 文字列           | 4D store アカウントの名前                         | "John Smith"                                                               |
| userMail             | 文字列           | 4D store アカウントのメールアドレス                    | "john.smith@gmail.com"                                                     |
| companyName          | 文字列           | 4D store アカウントの会社名                        | "Alpha Cie"                                                                |
| platforms            | 文字列のコレクション    | ライセンスのプラットフォーム                            | \["macOS", "windows"\]                                                     |
| expirationDate       | オブジェクト        | 失効日(任意)                                   | {"day":2, "month":6, "year":2018}                                          |
| renewalFailureCount  | 数値            | 少なくとも一つのプロダクトライセンスに対しての自動更新失敗回数(任意)       | 3                                                                          |
| products             | 文字列のオブジェクト    | プロダクトライセンスの詳細(オブジェクト配列、各プロダクトライセンスにつき1要素) |                                                                            |
| \[ \].id             | 数値            | ライセンス番号                                   | 利用可能な値については、[Is license available](is-license-available.md) コマンドを参照してください。 |
| \[ \].name           | 文字列           | ライセンス名                                    | "4D Write - 4D Write Pro"                                                  |
| \[ \].usedCount      | 数値            | 消費した接続数                                   | 8                                                                          |
| \[ \].allowedCount   | 数値            | プロダクトに対して失効日まで許可されている接続の総数                | 15                                                                         |
| \[ \].rights         | オブジェクトのコレクション | プロダクトに対する権利(オブジェクト配列、各失効日につき1要素)          |                                                                            |
| \[ \].count          | 数値            | 許可されている接続数                                | 15 (32767は無制限を意味します)                                                       |
| \[ \].expirationDate | オブジェクト        | 失効日(任意、上記と同じフォーマット)                       | {"day":1, "month":11, "year":2017}                                         |

#### 例題 

カレントの4D Serverライセンスについての情報を取得したい場合を考えます:

```4d
 var $obj : Object
 $obj:=Get license info
```

*$obj* には例えば、以下のような情報が返されます:

```undefined
{
    "name": "4D Server v16 R3",
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
                    "expirationDate": {"day":1, "month":11, "year":2015} //expired, not counted
                }
            ],
            "usedCount": 12
        },
        {...}
    ]
}
```

#### 参照 

[CHANGE LICENSES](change-licenses.md)  
[Is license available](is-license-available.md)  
[WEB Get server info](web-get-server-info.md)  