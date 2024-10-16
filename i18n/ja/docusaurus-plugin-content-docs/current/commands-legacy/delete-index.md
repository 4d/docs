---
id: delete-index
title: DELETE INDEX
slug: /commands/delete-index
displayed_sidebar: docs
---

<!--REF #_command_.DELETE INDEX.Syntax-->**DELETE INDEX** ( fieldPtr | indexName {; *} )<!-- END REF-->
<!--REF #_command_.DELETE INDEX.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| fieldPtr &#124; indexName | ポインター, 文字 | &#8594;  | インデックスを削除するフィールドを指すポインタ 削除されるインデックスの名前 |
| * | 演算子 | &#8594;  | 渡されると = 非同期オペレーション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DELETE INDEX.Summary-->DELETE INDEXコマンドを使用して、データベースから1つ以上の既存のインデックスを削除できます。<!-- END REF-->  
フィールドを指すポインター、またはインデックスの名前のどちらかを渡します。

* フィールド(*fieldPtr*) を指すポインターを渡すと、そのフィールドに関連するすべてインデックスが削除されます。これはキーワードインデックスまたは標準インデックスで構成されます。しかしそのフィールドが1つ以上の複合インデックスに含まれる場合、インデックスは削除できません。この場合、インデックス名を指定しなければなりません。
* インデックス(*indexName*) の名前を渡すと、指定されたインデックスのみが削除されます。これはキーワードインデックス、標準インデックス、または複合インデックスで構成されます。

任意の*\** 引数を渡すと、非同期モードでインデックスの削除を実行します。このモードでは、コマンドからの呼び出し後、インデックスの削除が完了しているか、完了していないかに関わらず元のメソッドがその実行を継続します。

*fieldPtr*または*indexName*に対応するインデックスがない場合、コマンドは何もしません。

#### 配布に関する注意 

このコマンドはデータベースストラクチャーを変更するため、読み出し専用のパッケージアプリ(*Program Files* フォルダ内にまたは.4dz ファイル内にインストールされている.4dc ファイル)のコンテキストにおいては使用することができません。

#### 例題 

このコマンドの両方のシンタックスの使用例を以下に示します。

```4d
  //LastNameフィールドに関連するすべてのインデックスを削除
 DELETE INDEX(->[Customers]LastName)
  //“CityZip”という名前のインデックスを削除
 DELETE INDEX("CityZip")
```

#### 参照 

[CREATE INDEX](create-index.md)  
[PAUSE INDEXES](pause-indexes.md)  
[SET INDEX](set-index.md)  