---
id: modify-selection
title: MODIFY SELECTION
slug: /commands/modify-selection
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY SELECTION.Syntax-->**MODIFY SELECTION** ( {*aTable*}{; *selectMode*}{; *enterList*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.MODIFY SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 表示および更新を行うテーブル, または 省略時、デフォルトテーブル |
| selectMode | Integer | &#8594;  | 選択モード |
| enterList | Boolean | &#8594;  | リスト入力を許可するオプション |
| * | Operator |  &#8594;  | 1レコードセレクションの場合にも出力フォームを使用し、 入力フォームのスクロールバーを隠す |
| * | Operator |  &#8594;  | 入力フォームでスクロールバーを表示する (最初の*の2番目のオプションを上書きする) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.MODIFY SELECTION.Summary-->MODIFY SELECTIONは、[DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION")とほぼ同じ機能を提供します。<!-- END REF-->詳細については[DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION")の説明を参照してください。2つのコマンドの違いを以下にあげます:

1. [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION")とMODIFY SELECTIONはカレントレコードセレクションをリストモードで表示し、ユーザがレコードをダブルクリックすると、そのレコードは入力フォーム上に表示されます。MODIFY SELECTIONを使用した場合は、別のプロセスやユーザ、またはリスト更新可モード (許可されている場合) でレコードが既に使用されていなければ、ダブルクリックしてそのレコードを修正することができます。
2. [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION")はカレントプロセスでレコードを読み込み専用でロードします。つまり、レコードは他のプロセスに対しロックされません。MODIFY SELECTIONはカレントプロセスでテーブルが読み書きに設定されているばあい、レコードを読み書き状態でロードします。つまり他のプロセスがレコードをロックしていなければ、そのレコードはこのプロセス用に他のプロセスに対しロックされます。MODIFY SELECTION実行が終了後、レコードは解放されます。

#### 参照 

[DISPLAY SELECTION](display-selection.md)  
[Form event code](../commands/form-event-code.md)"  
*セット*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 204 |
| スレッドセーフである | &cross; |
| サーバー上での使用は不可 ||


