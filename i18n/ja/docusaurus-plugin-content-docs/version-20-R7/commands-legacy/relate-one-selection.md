---
id: relate-one-selection
title: RELATE ONE SELECTION
slug: /commands/relate-one-selection
displayed_sidebar: docs
---

<!--REF #_command_.RELATE ONE SELECTION.Syntax-->**RELATE ONE SELECTION** ( *manyTable* ; *oneTable* )<!-- END REF-->
<!--REF #_command_.RELATE ONE SELECTION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| manyTable | Table | &#8594;  | nテーブル (リレーションの開始元) |
| oneTable | Table | &#8594;  | 1テーブル (リレーションの参照先) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RELATE ONE SELECTION.Summary-->**RELATE ONE SELECTION**コマンドは、*manyTable*のレコードセレクションをもとにして、*oneTable*テーブルの新しいセレクションを作成し、その新しいセレクションの最初のレコードをカレントレコードとしてロードします。<!-- END REF--> 

このコマンドは*manyTable*から*oneTable*へのリレートがある場合にのみ使用できます。**RELATE ONE SELECTION**はリレートの複数レベルを対象に動作できます。*manyTable*と*oneTable*の間には複数のリレートテーブルがある場合があります。これらのリレートは、マニュアルリレートまたは自動リレートのどちらでも動作します。

**RELATE ONE SELECTION**は開始テーブルからリレート先テーブルまで設定されているリレーションパスのうち、最も短いものを使用します。同じサイズのパスが存在し、使用されたパスをコントロールする必要がある場合には、[SET FIELD RELATION](set-field-relation.md) コマンドの使用も検討してください。

#### 例題 

以下の例では、今日が請求書の支払期日であるすべての顧客を検索します。

以下は、\[Invoices\]テーブル内のレコードセレクションに基づき、\[Customers\]テーブルのセレクションを作成します:

```4d
 CREATE EMPTY SET([Customers];"Payment Due")
 QUERY([Invoices];[Invoices]DueDate=Current date)
 While(Not(End selection([Invoices])))
    RELATE ONE([Invoices]CustID)
    ADD TO SET([Customers];"Payment Due")
    NEXT RECORD([Invoices])
 End while
```

以下の手法では**RELATE ONE SELECTION**を使用して同じ結果を得ています:

```4d
 QUERY([Invoices];[Invoices]DueDate=Current date)
 RELATE ONE SELECTION([Invoices];[Customers])
```

**注:** バージョン11以降、このコードはパフォーマンスを低下させることなく以下のコードに書き換えることができます:  

```4d
 QUERY([Customers];[Invoices]DueDate=Current date)
```

#### 参照 

[QUERY](query.md)  
[RELATE MANY SELECTION](relate-many-selection.md)  
[RELATE ONE](relate-one.md)  
*セット*  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 349 |
| スレッドセーフである | &check; |
| カレントレコードを変更する ||
| カレントセレクションを変更する ||
| サーバー上での使用は不可 ||


