---
id: license-usage
title: License usage
slug: /commands/license-usage
displayed_sidebar: docs
---

<!--REF #_command_.License usage.Syntax-->**License usage** : Collection<!-- END REF-->
<!--REF #_command_.License usage.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Collection | &#8592; | 使用中のライセンスについての情報を格納したオブジェクトのコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.License usage.Summary-->**License usage** コマンドは、使用されているライセンスについての情報を格納したオブジェクトのコレクションを返します。<!-- END REF-->

返されたコレクション内のそれぞれのオブジェクトには、以下の属性が格納されています:

| **プロパティ名**             | **型**  | **詳細**                                      |
| ---------------------- | ------ | ------------------------------------------- |
| productId              | 数値     | ライセンスタイプのID                                 |
| productName            | テキスト   | ライセンスタイプの名前                                 |
| productUsedCount       | 数値     | ライセンスを取得したときの(現在のものを含めた)使用されているライセンス数       |
| productBalance         | 数値     | プロダクトの残りライセンス数(アクション直後の時点)                  |
| globalProductUsedCount | 数値     | 複数のサーバーが同じマシン上で動作中の場合に、それら全ての使用中の数を表示       |
| token                  | 数値     | オペレーションの固有のID                               |
| time                   | テキスト   | ライセンスがいつ使用されはじめたかを表すタイムスタンプ。ISO 8601 フォーマット |
| reason                 | テキスト   | このライセンス使用の理由、または呼び出し                        |
| session                | オブジェクト | 仕様中のライセンスのセッションについての詳細な情報を格納                |

セッションの種類(例えば4D クライアントか、RESTかなど)に応じて、上記の表で説明されている*session* オブジェクトの中身は変化します。詳細については以下を参照してください。

#### 4D クライアントセッションにおけるsessionオブジェクト 

4D セッションについての返されたコレクションの中のそれぞれの要素には、[Process activity](../commands/process-activity.md) コマンドで返されるものと同じセッションオブジェクトが格納されています:

| **プロパティ名**       | **型**         | **詳細**                                                   |
| ---------------- | ------------- | -------------------------------------------------------- |
| type             | テキスト (enum)   | セッションのタイプ。取り得る値: "remote"、"storedProcedure"、"web"、"rest" |
| userName         | テキスト          | ユーザー名                                                    |
| machineName      | テキスト          | リモートマシンの名前                                               |
| systemUserName   | テキスト          | リモートマシン上で開かれているシステムセッションの名前                              |
| IPAddress        | テキスト          | リモートマシンのIP アドレス                                          |
| hostType         | テキスト (enum)   | ホストのタイプ。取り得る値: "windows"、"mac"、"browser"                 |
| creationDateTime | Date ISO 8601 | リモートマシンの接続の日付と時刻                                         |
| state            | テキスト (enum)   | セッションの状態。取り得る値: "active"、"postponed"、"sleeping"          |
| ID               | テキスト          | セッションUUID                                                |
| persistentID     | テキスト          | セッションの永続的なID                                             |

#### SQLセッションにおけるsessionオブジェクト 

この表は、SQL セッションでのsession オブジェクトの中身を表しています:

| **プロパティ名** | **型** | **詳細**        |
| ---------- | ----- | ------------- |
| IPAddress  | テキスト  | セッションのIP アドレス |
| userAgent  | テキスト  | ユーザーエージェント    |
| userName   | テキスト  | ユーザー名         |
| userId     | 数値    | ユーザー ID       |

#### RESTセッションにおけるsessionオブジェクト 

この表は、REST セッションでのsession オブジェクトの中身を表しています:

| **プロパティ名**  | **型** | **詳細**                          |
| ----------- | ----- | ------------------------------- |
| userName    | テキスト  | ユーザー名                           |
| sessionID   | テキスト  | REST セッションID                    |
| IPAddress   | テキスト  | REST セッションを開始したクライアントのID        |
| isDatastore | ブール   | REST リクエストがデータストアから来たものであればTrue |


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1782 |
| スレッドセーフである | &cross; |


