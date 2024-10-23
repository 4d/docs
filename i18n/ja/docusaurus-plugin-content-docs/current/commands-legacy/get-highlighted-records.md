---
id: get-highlighted-records
title: GET HIGHLIGHTED RECORDS
slug: /commands/get-highlighted-records
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Syntax-->**GET HIGHLIGHTED RECORDS** ( {*aTable* ;} *setName* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHTED RECORDS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | ハイライトされたレコードを読みだすテーブル 省略した場合、カレントフォームのテーブル |
| setName | Text | &#8594;  | ハイライトしたレコードを格納するセット |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.GET HIGHLIGHTED RECORDS.Summary-->GET HIGHLIGHTED RECORDS コマンドは、*aTable*中で (例: リストフォームでユーザにより選択されて) ハイライトされたレコードを*setName*で指定したセットに格納します。<!-- END REF-->*aTable*を省略すると、カレントフォームまたはサブフォームのテーブルが使用されます。

デザインモードまたは[DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION") / [MODIFY SELECTION](modify-selection.md "MODIFY SELECTION")コマンドを実行している時、このコマンドは4Dが自動で管理する**UserSet**を使用した呼び出しと置き換えることができます。しかしこのコマンドではハイライトさせたテーブルを選択することができるので、GET HIGHLIGHTED RECORDSを使用すればサブフォームのハイライトされたレコードを管理することも可能です。この場合、異なるテーブルのサブフォームのセレクションを扱うこともできます。**UserSet**に関する詳細はの節を参照してください。

GET HIGHLIGHTED RECORDSコマンドはフォーム以外のコンテキストでも呼び出せますが、その場合は空のセットが返されます。  
*setName*で指定するセットは、ローカル/クライアント、プロセス、またはインタープロセスのいずれでも構いません。

**Note:** 組み込んだサブフォームのプロパティで選択モードに**複数**を指定しない場合、GET HIGHLIGHTED RECORDSは空のセットを返します。この場合、選択されたレコードの行を知るには[Selected record number](selected-record-number.md "Selected record number")コマンドを使用します。

#### 例題 

次のメソッドは、テーブル (\[CDs\]) のレコードを表示するサブフォームにおいて、選択されているレコードの数を示します:

```4d
 GET HIGHLIGHTED RECORDS([CDs];"$highlight")
 ALERT(String(Records in set("$highlight"))+" selected records.")
 CLEAR SET("$highlight")
```

#### システム変数およびセット 

コマンドが正しき実行されるとシステム変数OKに1が、そうでなければ0が設定されます。

#### 参照 

[HIGHLIGHT RECORDS](highlight-records.md)  