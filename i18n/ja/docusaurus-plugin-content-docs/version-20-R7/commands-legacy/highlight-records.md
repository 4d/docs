---
id: highlight-records
title: HIGHLIGHT RECORDS
slug: /commands/highlight-records
displayed_sidebar: docs
---

<!--REF #_command_.HIGHLIGHT RECORDS.Syntax-->**HIGHLIGHT RECORDS** ( {*aTable* }{;}{ *setName* {; *}} )<!-- END REF-->
<!--REF #_command_.HIGHLIGHT RECORDS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | レコードをハイライトするテーブル 省略時、カレントフォームのテーブル |
| setName | Text | &#8594;  | ハイライトさせるレコードのセット、または 省略時、Userset |
| * | 演算子 | &#8594;  | リストの自動スクロールを無効 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.HIGHLIGHT RECORDS.Summary-->HIGHLIGHT RECORDS コマンドは、出力フォーム内で指定されたレコードをハイライトします。<!-- END REF-->この動作は、クリックまたは**Shift+クリック**、**Ctrl+クリック** (Windows) や**Command+クリック** (Mac OS) キーコンビネーションを使用し、リストモードでレコードを手動で選択する場合と同じです。カレントセレクションは変更されません。

**Note:** "選択"されたレコードのセットは、再描画後に更新されます。つまりメソッド全体が実行終了した後であり、HIGHLIGHT RECORDSを実行した直後ではありません。

*aTable*引数を使用し、“ハイライト表示”されるレコードが属するテーブルを指定します。この引数は、特にカレントテーブルに属していない組み込みサブフォ－ムのレコードをハイライト表示するために使用することができます (後述参照)。

* *setName*に有効なセット名を渡すと、コマンドは定義されたテーブルの、そのセット内のレコードに適用されます。
* *setName*を省略すると、コマンドは現在のUserSetのレコードをハイライト表示します。このセットはユーザーモードと[MODIFY SELECTION](modify-selection.md "MODIFY SELECTION") / [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION")を呼び出したときにのみ管理されます。サブフォームに対してレコードのハイライトを行いたい場合、テーブル名とセット名を指定する必要があります。UserSetセットについては*セット*の節を参照してください。

*\** 引数を渡すと、ハイライト表示されたレコードが表示されていない場合に、そのリストの自動スクロール機能が無効になります。このメカニズムにより、[OBJECT SET SCROLL POSITION](object-set-scroll-position.md "OBJECT SET SCROLL POSITION")コマンドを使用して、独自のスクロール管理を行えるようになります。

**Note:** 組み込みサブフォームの場合、サブフォームの選択モードプロパティで**複数**が選択されていない場合、HIGHLIGHT RECORDS コマンドは何も行いません。この場合、行をハイライトするには[GOTO SELECTED RECORD](goto-selected-record.md "GOTO SELECTED RECORD") コマンドを使用します。 

#### 例題 

[MODIFY SELECTION](modify-selection.md "MODIFY SELECTION")コマンドによって表示される出力フォーム内で、カレントセレクションを変更することなく、ユーザが検索を実行できるようにしたいとします。これを実行するには、フォーム内に**検索**ボタンを置いて、押された時に下記のメソッドを実行します: 

```4d
 SET QUERY DESTINATION(Into set;"UserSet")
 QUERY
 SET QUERY DESTINATION(Into current selection)
 HIGHLIGHT RECORDS
```

ユーザがボタンをクリックすると標準の検索ダイアログボックスが表示され、検索が実行された後、カレントセレクションを変更することなく、見つかったレコードを反転表示されます。

#### 参照 

[GET HIGHLIGHTED RECORDS](get-highlighted-records.md)  
[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)  