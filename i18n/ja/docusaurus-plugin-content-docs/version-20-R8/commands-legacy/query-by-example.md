---
id: query-by-example
title: QUERY BY EXAMPLE
slug: /commands/query-by-example
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY EXAMPLE.Syntax-->**QUERY BY EXAMPLE** ( {*aTable*}{;}{*} )<!-- END REF-->
<!--REF #_command_.QUERY BY EXAMPLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードのセレクションを返すテーブル, または 省略した場合、デフォルトテーブル |
| * | 演算子 | &#8594;  | 指定した場合、スクロールバーの非表示 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY BY EXAMPLE.Summary-->QUERY BY EXAMPLEは、デザインモードのフォームによるクエリメニューと同じ処理を実行します。<!-- END REF-->このコマンドはクエリウィンドウとしてカレント入力フォームを表示します。QUERY BY EXAMPLEは、クエリウィンドウに入力された情報を使用して*aTable*を検索します。このときに使用するフォームには、ユーザに検索させたいフィールドを置かなければなりません。この検索は最適化されています。つまり、クエリを最適化するためにインデックスフィールドが自動的に使用されます。

デザインモードのフォームによるクエリメニューの使用方法に関する詳細は、4D Design Referenceマニュアルを参照してください。

#### 例題 

以下のメソッドの例は、まずMyQueryという名前のフォームを表示します。ユーザがフォームに検索データを入力し、検索の実行を要求した場合（システム変数OKに1が代入された場合）に、検索結果を表示するようにします:

```4d
 FORM SET INPUT([People];"MyQuery") // 検索フォームに切り替える
 QUERY BY EXAMPLE([People]) // フォームを表示し、クエリを実行
 If(OK=1) // ユーザがクエリを実行すると
    DISPLAY SELECTION([People]) // レコードを表示
 End if
```

#### システム変数およびセット 

ユーザが入力ボタンをクリックするか、Enterキーを押すと、システム変数OKが1に設定され、クエリが実行されます。ユーザがキャンセルボタンをクリックするか、キャンセルのキーコンビネーションを押すと、OKシステム変数が0に設定され、クエリはキャンセルされます。

#### 参照 

[ORDER BY](order-by.md)  
[QUERY](query.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 292 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||
| サーバー上での使用は不可 ||


