---
id: locked-records-info
title: Locked records info
slug: /commands/locked-records-info
displayed_sidebar: docs
---

<!--REF #_command_.Locked records info.Syntax-->**Locked records info** ( *aTable* ) : Object<!-- END REF-->
<!--REF #_command_.Locked records info.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | ロックされたレコードの情報を取得したいテーブル |
| 戻り値 | Object | &#8592; | ロックされたレコードの詳細(あれば) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Locked records info.Summary-->**Locked records info** コマンドは、*aTable* で指定したテーブル内で現在ロックされているレコードについての様々な情報を含んだobject を返します。<!-- END REF-->このコマンドは 4D と 4D Server に対してのみ有効です。4D リモートまたはコンポーネントから呼び出された場合には無効なオブジェクトを返します。ただし、呼び出しメソッドに"Execute on server" オプションが有効化されている場合には呼び出し可能です。この場合返されるオブジェクトには、サーバーの情報が含まれます。コンポーネントから呼び出された場合には、常にホストデータベースに対して適用されます。

返されたオブジェクトは、オブジェクトのコレクションである"records"プロパティを格納しています:

```json
{    "records": [        description object,        (…)    ]}
```

それぞれの"description object" コレクション要素は、指定されたテーブル内でのロックされたレコードを検知します。各要素はロックの要因(4D プロセスまたはREST API)に応じた異なるプロパティを格納しています

* レコードが4D プロセスによってロックされている場合:

| **プロパティ**         | **型**      | **詳細**                                                                                                                                                             |
| ----------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| contextID         | UUID (文字列) | ロックをしているデータベースコンテキストのUUID                                                                                                                                          |
| contextAttributes | オブジェクト     | [LOCKED BY](locked-by.md) コマンドをレコードに適用したときと似たような情報を含むオブジェクト。違いは、**Locked records info** が返すのはシステムで定義されたユーザー名であり、4Dユーザーのユーザー名ではないという点と、追加の情報を返すという点です(以下の説明参照)。 |
| recordNumber      | 倍長整数       | ロックされたレコードのレコード番号                                                                                                                                                  |

*contextAttributes* オブジェクトは以下のプロパティから構成されています:

| **プロパティ名**                                                                     | **型**      | **詳細**                                                                           |
| ------------------------------------------------------------------------------ | ---------- | -------------------------------------------------------------------------------- |
| task\_id                                                                       | 数値         | プロセス参照番号                                                                         |
| user\_name                                                                     | 文字列        | OSによって定義されたユーザー名                                                                 |
| user4d\_alias                                                                  | 文字列        | [SET USER ALIAS](set-user-alias.md) によって定義されたユーザーエイリアス、または4D データベースディレクトリ内のユーザー名 |
| user4d\_id                                                                     | 数値         | 4D ユーザー番号(\*)                                                                    |
| host\_name                                                                     | 文字列        | ホストマシンの名前                                                                        |
| task\_name                                                                     | 文字列        | プロセス名                                                                            |
| client\_version                                                                | 数値         | クライアントアプリケーションのバージョン                                                             |
| *以下のプロパティはレコードがリモートの* *4D側によって* *ロックされているときに4D Server側でコマンドが実行された場合に限り表示されます:* |            |                                                                                  |
| is\_remote\_context                                                            | ブール        | リモートの4Dによってロックされているかどうかを表します(それ以外の場合には表示されないので常に*true*となります)                     |
| client\_uid                                                                    | UUID (文字列) | ロックしている4DリモートのUUID                                                               |

(\*) *バイナリーデータベースでのみ返されます。*以下のコードを使用することによって、*user4d\_id* の4Dユーザー名を取得することができます:  

```4d
 GET USER LIST($arrNames;$arrIDs)
 $User4DName:=Find in array($arrIDs;user4d_id)
```

* レコードが *$lock REST request* によって(セッションレベルで)ロックされていた場合:

| **プロパティ名**   | **型** | **詳細**                                                                                                                                  |
| ------------ | ----- | --------------------------------------------------------------------------------------------------------------------------------------- |
| host         | 文字列   | エンティティをロックしているURL 例:"127.0.0.1:8044"                                                                                                    |
| IPAddr       | 文字列   | エンティティをロックしているURL で使用されているIP アドレス 例: "127.0.0.1"                                                                                        |
| recordNumber | 数値    | ロックされているレコードのレコード番号                                                                                                                     |
| userAgent    | 文字列   | ロッカーのユーザーエージェント 例: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36" |

#### 例題 

以下のコードを実行します:

```4d
 $vOlocked :=Locked records info([Table])
```

\[Table\]のテーブル内にて二つのレコードがロックされていた場合には、以下の様なオブジェクトが$vOlockedに返されます:

```json
{    "records": [        {            "contextID": "A9BB84C0E57349E089FA44E04C0F2F25",            "contextAttributes": {                "task_id": 8,                "user_name": "roland",                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 1        },        {            "contextID": "8916338D1B8A4D86B857D92F593CCAC3",            "contextAttributes": {                "task_id": 9,                "user_name": "roland",                "user4d_id": 1,                "host_name": "iMac de roland",                "task_name": "P_RandomLock",                "client_version": -1342106592            },            "recordNumber": 2        }    ]}
```

コードが4D Server上で実行され、リモートのクライアントマシンによってロックされている場合、以下の様なオブジェクトが$vOlocked 内に返されます:

```json
{    "records": [        {            "contextID": "B0EC087DC2FA704496C0EA15DC011D1C",            "contextAttributes": {                "task_id": 2,                 "user_name": "achim",                 "user4d_id": 1,                "host_name": "achim-pcwin",                "task_name": "P_RandomLock",                 "is_remote_context": true,                "client_uid": "0696E66F6CD731468E6XXX581A87554A",                "client_version": -268364752            },            "recordNumber": 1        }    ]}
```

#### 参照 

[Locked](locked.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1316 |
| スレッドセーフである | &check; |


