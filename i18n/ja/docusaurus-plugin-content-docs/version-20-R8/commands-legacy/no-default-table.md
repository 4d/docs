---
id: no-default-table
title: NO DEFAULT TABLE
slug: /commands/no-default-table
displayed_sidebar: docs
---

<!--REF #_command_.NO DEFAULT TABLE.Syntax-->**NO DEFAULT TABLE**<!-- END REF-->
<!--REF #_command_.NO DEFAULT TABLE.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.NO DEFAULT TABLE.Summary-->**NO DEFAULT TABLE** コマンドを使用して、[DEFAULT TABLE](default-table.md) コマンドの動作を無効にします。<!-- END REF-->このコマンドを実行した後、プロセスに対して定義されているデフォルトテーブルはありません。

事前に[DEFAULT TABLE](default-table.md) コマンドが呼び出されていないと、このコマンドはその機能を発揮しません。

このコマンドはプロジェクトフォーム (テーブルにリンクされていないフォーム) の使用と関連しています。  
フォーム (ユーザーフォームを除く) に関係するコマンドのほとんどは、任意の引数*aTable*を最初の引数として受け入れます。例えば*\_o\_FORM GET PARAMETER*、[Open form window](open-form-window.md)、[DIALOG](../commands/dialog.md) コマンドなどです。プロジェクトフォームとテーブルフォームが同じ名前を持つことができるので、この引数を用いて使用するフォームを決定します。テーブルフォームを使用したい時は引数*aTable* を渡し、プロジェクトフォームを使用したい時はこの引数を省略します。  
\[Table1\] テーブルに対して、"TheForm" という名前のプロジェクトフォームとそれと同じ名前のテーブルフォームを持つデータベースでは、次のようになります。

```4d
 DIALOG([Table1];"TheForm") //4Dはテーブルフォームを使用
 DIALOG("TheForm") //4Dはプロジェクトフォームを使用
```

しかし、同じ名前を持つプロジェクトフォームとテーブルフォームがデータベースにある場合、[DEFAULT TABLE](default-table.md) コマンドが実行されるとその原理は無効になります。実際この場合に、引数*aTable*が渡されていなくても、4Dはテーブルフォームをデフォルトで使用します。プロジェクトフォームを確実に使用するには、**NO DEFAULT TABLE** コマンドを用いなければなりません。

#### 例題 

\[Table1\] テーブルに対して、"TheForm" という名前のプロジェクトフォームとそれと同じ名前のテーブルフォームを持つデータベースでは、次のようになります。

```4d
 DEFAULT TABLE([Table1])
 DIALOG("TheForm") //4Dはテーブルフォームを使用
 NO DEFAULT TABLE
 DIALOG("TheForm") //4Dはプロジェクトフォームを使用
```

#### 参照 

[DEFAULT TABLE](default-table.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 993 |
| スレッドセーフである | &check; |


