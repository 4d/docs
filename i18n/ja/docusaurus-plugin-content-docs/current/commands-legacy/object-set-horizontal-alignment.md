---
id: object-set-horizontal-alignment
title: OBJECT SET HORIZONTAL ALIGNMENT
slug: /commands/object-set-horizontal-alignment
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Syntax-->**OBJECT SET HORIZONTAL ALIGNMENT** ( {* ;} *object* ; *alignment* )<!-- END REF-->
<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| alignment | Integer | &#8594;  | 整列コード |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET HORIZONTAL ALIGNMENT.Summary-->**OBJECT SET HORIZONTAL ALIGNMENT**コマンドは、引数*object* および *\** で指定したオブジェクトを整列します。<!-- END REF-->

オプションの *\** 引数を指定した場合、*object* はオブジェクト名です (文字列) 。オプションの \* 引数を省略すると、*object* はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。

*Form Objects (Properties)*テーマ内にある以下の定数の1つを*alignment* 引数に渡します:

| 定数            | 型    | 値 | コメント                       |
| ------------- | ---- | - | -------------------------- |
| Align center  | 倍長整数 | 3 |                            |
| Align default | 倍長整数 | 1 |                            |
| Align left    | 倍長整数 | 2 |                            |
| Align right   | 倍長整数 | 4 |                            |
| wk justify    | 倍長整数 | 5 | 4D Write Proとテキスト入力エリアに適用。 |

整列を適用できるフォームオブジェクトは次の通りです:

* スクロール可能エリア
* コンボボックス
* ボタン
* ラジオボタン
* チェックボックス
* スタティックテキスト
* グループエリア
* ポップアップメニュー/ドロップダウンリスト
* フィールド
* 変数
* リストボックス
* リストボックス列
* リストボックスヘッダー
* リストボックスフッター
* *4D Write Proリファレンス*エリア

#### 参照 

[OBJECT Get horizontal alignment](object-get-horizontal-alignment.md)  
[OBJECT Get vertical alignment](object-get-vertical-alignment.md)  
[OBJECT SET VERTICAL ALIGNMENT](object-set-vertical-alignment.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 706 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


