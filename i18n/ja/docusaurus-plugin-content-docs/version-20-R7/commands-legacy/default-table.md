---
id: default-table
title: DEFAULT TABLE
slug: /commands/default-table
displayed_sidebar: docs
---

<!--REF #_command_.DEFAULT TABLE.Syntax-->**DEFAULT TABLE** ( *aTable* )<!-- END REF-->
<!--REF #_command_.DEFAULT TABLE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | デフォルトとして設定するテーブル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DEFAULT TABLE.Summary-->**Tip:** **DEFAULT TABLE**の使用やテーブル名の省略により、ステートメントを読みやすくすることが できるかもしれません。<!-- END REF-->しかし多くのプログラマーは、このコマンドが実際の価値よりも多くの問題と混乱の原因となるとみなしています。特にテーブルフォー ムとプロジェクトフォームで同じ名前のフォームが存在する場合、**DEFAULT TABLE**が使用されていると、例えば[DIALOG](dialog.md)コマンドなどでテーブルフォームのほうが使用されてしまいます。

**DEFAULT TABLE**コマンドは、*aTable* をカレントプロセスのデフォルトテーブルとして設定します。

**DEFAULT TABLE**コマンドが実行されるまで、デフォルトテーブルは存在しません。デフォルトテーブルを設定した後で、テーブル引数を省略したコマンドはデフォルトテーブルに対して実行されます。例えば、以下のコマンドを見てください。

```4d
 FORM SET INPUT([table];"form")
```

デフォルトテーブルで\[table\]を設定した場合に、以下のような同じコマンドの別の記述が可能です。

```4d
 FORM SET INPUT("form")
```

デフォルトテーブ ルの設定のもう1つの目的は、テーブルに特定されないステートメントを作成することです。これによって、同じステートメントで異なるテーブルを操作するこ とができます。また、テーブルへのポインタを使用して、テーブルに特定されないコードを作成することもできます。この手法に関する詳細は、 [Table name](table-name.md) コマンドの説明を参照してください。  
フィールドを参照する場合テーブル名を省略することはできません。例えば、以下のように記述します:

```4d
 [My Table]My Field:="A string" //正しい記述
```

以下のように記述することはできません。

```4d
 DEFAULT TABLE([My Table])
 My Field:="A string" //誤った記述
```

これは、単にデフォルトテーブルが設定されるだけです。

4Dでは、すべてのテーブルは"開かれて" おり、使用する準備ができています。しかし**DEFAULT TABLE**はテーブルを"開いたり" 、カレントテーブルを設定、あるいは入出力のためにテーブルを準備することはありません。**DEFAULT TABLE**はプログラミングの労力の節約とステートメントを読みやすくするための便宜を図るだけです。

#### 例題 

以下の例は、最初に**DEFAULT TABLE**コマンドを使用しないステートメントを示しています。この後で**DEFAULT TABLE**コマンドを使用した同じステートメントを示します。このステートメントは、新しいレコードをデータベースに追加するのによく使用されるループです。[FORM SET INPUT](form-set-input.md "FORM SET INPUT")コマンドと[ADD RECORD](add-record.md "ADD RECORD")コマンドは、1番目の引数としてテーブルを必要とします。

```4d
 FORM SET INPUT([Customers];"Add Recs")
 Repeat
    ADD RECORD([Customers])
 Until(OK=0)
```

デフォルトテーブルの指定により、以下のメソッドが導かれます。

```4d
 DEFAULT TABLE([Customers])
 FORM SET INPUT("Add Recs")
 Repeat
    ADD RECORD
 Until(OK=0)
```

#### 参照 

[Current default table](current-default-table.md)  
[NO DEFAULT TABLE](no-default-table.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 46 |
| スレッドセーフである | &check; |


