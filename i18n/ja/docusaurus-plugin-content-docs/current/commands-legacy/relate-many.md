---
id: relate-many
title: RELATE MANY
slug: /commands/relate-many
displayed_sidebar: docs
---

<!--REF #_command_.RELATE MANY.Syntax-->**RELATE MANY** ( oneTable | Field )<!-- END REF-->
<!--REF #_command_.RELATE MANY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| oneTable &#124; Field | テーブル, フィールド | &#8594;  | すべての1対nリレーションを実行するテーブル または1フィールド |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RELATE MANY.Summary-->RELATE MANYには、2つの形式があります。<!-- END REF-->

第1の形式RELATE MANY(oneTable)は、*oneTable*に対してすべての1対nのリレートを実行します。このコマンドは、*oneTable*に対して1対nのリレートを持つ各テーブルのカレントセレクションを更新します。nテーブルのカレントセレクションは、1テーブルのそれぞれのリレート先フィールドの現在値を反映します。このコマンドが実行される度に、nテーブルのカレントセレクションが再構成され、セレクションの最初のレコードがカレントレコードとしてロードされます。

第2の形式RELATE MANY(oneField)は、*oneField*に対して1対nのリレートを実行します。これは、*oneField*と関連を持つテーブルのみに対しカレントセレクションとカレントレコードを変更します。つまり、リレート先テーブルの関連するレコードがnテーブルのカレントセレクションになることを意味します。

**Note:** RELATE MANYを実行する際に、1テーブルのカレントセレクションが空の場合、このコマンドは何も行いません。

##### 

**注:** このコマンドはオブジェクト型フィールドをサポートしません。

#### 例題 

以下の例は、3つのテーブルが自動リレートで関連付けられています。\[People\]テーブルと\[Parts\]テーブルは両方とも\[Companies\]テーブルに対してn対1のリレート関係にあります。

![](../assets/en/commands/pict2286855.fr.png)

  
\[Companies\]テーブルのこのフォームは、\[People\]テーブルと\[Parts\]テーブル両方の関連するレコードを表示します。

![](../assets/en/commands/pict2287703.fr.png)

このフォームを表示すると、\[People\]テーブルと\[Parts\]テーブルの関連するレコードがロードされ、それぞれのテーブルのカレントセレクションとなります。

他方プログラムで\[Companies\]テーブルのレコード選択した場合には、リレート先レコードはロードされません。このような場合にはRELATE MANYコマンドを使用する必要があります。

**Notes:**  

* RELATE MANYが空のセレクションに適用されたとき、コマンドは実行されず、nテーブルのセレクションは変わりません。
* コマンドが動作するためには、nフィールドにインデックス属性が付いている必要があります。

以下のメソッドは、\[Companies\]テーブルの各レコードに対し、警告ウィンドウを表示します。警告ウィンドウには社員数（\[People\]テーブル中の関連するレコードの数）、供給する部品の種類数（\[Parts\]テーブル中の関連するレコードの数）を表示します。この例では、[ALERT](alert.md "ALERT")コマンドの引数が複数行にわたっています。

自動リレートの場合でもRELATE MANYコマンドが必要なことに注目してください。

```4d
 ALL RECORDS([Companies]) // Select all records in the テーブル
 ORDER BY([Companies];[Companies]Name) // Order records in alphabetical order
 For($i;1;Records in table([Companies])) // Loop once for each record
    RELATE MANY([Companies]Name) // Select the related records
    ALERT("Company: "+[Companies]Name+Char(13)+"People in company: "
    +String(Records in selection([People]))+Char(13)+
    "数値 of parts they supply: "+String(Records in selection([Parts])))
    NEXT RECORD([Companies]) // Move to the next record
 End for
```

#### 参照 

[OLD RELATED MANY](old-related-many.md)  
[RELATE ONE](relate-one.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 262 |
| スレッドセーフである | &check; |
| カレントセレクションを変更する ||
| サーバー上での使用は不可 ||


