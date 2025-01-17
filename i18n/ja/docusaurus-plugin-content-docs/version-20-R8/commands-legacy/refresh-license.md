---
id: refresh-license
title: Refresh license
slug: /commands/refresh-license
displayed_sidebar: docs
---

<!--REF #_command_.Refresh license.Syntax-->**Refresh license** : Object<!-- END REF-->
<!--REF #_command_.Refresh license.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Object | &#8592; | ステータスオブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Refresh license.Summary-->**Refresh license** コマンドはカレントの4D Server ライセンスを更新します。<!-- END REF-->このコマンドは4D カスタマーデータベースへと接続し、カレントのライセンスに関連した新規あるいは更新されたライセンス(*例:* 追加購入したクライアントライセンスなど)を自動的にアクティベートします。

**返されるオブジェクト**

**Refresh license** から返されたオブジェクトには、以下のプロパティが含まれます:

| **プロパティ**  | **型** | **詳細**                              |
| ---------- | ----- | ----------------------------------- |
| success    | ブール   | 更新アクションが成功した場合にはTrue、それ以外の場合にはFalse |
| status     | 数値    | ステータスコード                            |
| statusText | テキスト  | ステータスの詳細                            |
| tips       | テキスト  | エラーを解決するための提案                       |

**注**: このコマンドは4D Server 上でのみ実行可能です。このコマンドを呼び出しているメソッドがリモートクライアントでローカルに実行された場合、あるいはシングルユーザー版4D で実行された場合、**Refresh license** は何もしません。

#### 例題 

ライセンスを更新して、それが完了した時にメッセージを表示したい場合を考えます:

```4d
  // サーバーで実行すべきメソッド
 var $res : Object
 $res:=Refresh license
 If($res.success)
    ALERT("Success")
 Else
    ALERT($res.statusText)
 End if
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1336 |
| スレッドセーフである | &cross; |


