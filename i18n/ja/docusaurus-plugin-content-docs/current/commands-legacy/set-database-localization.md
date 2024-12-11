---
id: set-database-localization
title: SET DATABASE LOCALIZATION
slug: /commands/set-database-localization
displayed_sidebar: docs
---

<!--REF #_command_.SET DATABASE LOCALIZATION.Syntax-->**SET DATABASE LOCALIZATION** ( *languageCode* {; *} )<!-- END REF-->
<!--REF #_command_.SET DATABASE LOCALIZATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| languageCode | Text | &#8594;  | 言語セレクタ |
| * | 演算子 | &#8594;  | コマンドのスコープ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET DATABASE LOCALIZATION.Summary-->**SET DATABASE LOCALIZATION**コマンドを使用して、カレントセッションのデータベースカレント言語を変更できます。<!-- END REF-->

データベースのカレント言語は、アプリケーションのローカライズされた要素 (テキストおよびピクチャ) をプログラムが検索する場所である.lprojフォルダを指定します。デフォルトで4Dは、 Resourcesの内容およびシステム環境に基づき自動でカレント言語を決定します ([Get database localization](get-database-localization.md) コマンドの説明参照)。**SET DATABASE LOCALIZATION**を使用して、デフォルトのカレント言語を変更できます。

コマンドは既にロードされたフォームの言語を変更しません。コマンドが呼び出された後に表示された要素のみが、新しい設定の効果を得ます。 

*language*にはアプリケーションで使用する、RFC 3066、ISO639 そして ISO3166標準で規定された言語コードを渡します。例えば日本語であれば"ja"、フランス語なら"fr"、アメリカ英語なら"en-us"を渡します。この標準に関する詳細や、渡すことが可能な値については*Design Reference*マニュアルの*付録 B: XLIFFアーキテクチャー*を参照してください。

デフォルトで、コマンドは開かれたすべてのデータベースとコンポーネント、およびすべてのプロセスに適用されます。オプションの*\** 引数が渡されると、このコマンドを呼び出したデータベースにのみ適用されます。この引数は特に、データベースとコンポーネントで別々に言語を指定するために使用されます。

コマンドが正しく実行されるとOKシステム変数に1が設定されます。そうでなければ0が設定されます。

**Note:** RFCに従い、コマンドは言語コードと地域コードを分けるために"-" (ハイフン) を使用します (例えば"fr-ca"や"en-us")。他方、**Resources**フォルダ内の"lproj"フォルダは"\_" (アンダースコア)を使用します (例えば"fr\_ca.lproj"や"en\_us.lproj")。 

**4D Server:** 4D Serverでは、コマンドを呼び出したリモートマシン上に存在する言語を利用できます。そのため、**Resources**フォルダが 同期されているか確かめなければなりません。

#### 例題 1 

日本語をインタフェース言語として設定する場合:

```4d
 SET DATABASE LOCALIZATION("ja")
```

#### 例題 2 

アプリケーションで文字列参照":xliff:shopping"が使用されていて、XLIFFファイルには以下のような情報が含まれています:

* JA folder:  
```XML  
  <trans-unit id="15" resname="Shopping">  
<source>Shopping</source>  
<target>ショッピング</target>  
</trans-unit>  
```
* FR folder:  
```XML  
 <trans-unit id="15" resname="Shopping">  
<source>Shopping</source>  
<target>Faire les courses</target>  
</trans-unit>  
```

```4d
 SET DATABASE LOCALIZATION("fr")
  // 文字列":xliff:shopping"は"Faire les courses"を表示する
 SET DATABASE LOCALIZATION("ja")
  // 文字列":xliff:shopping"は"ショッピング"を表示する
```

#### 参照 

[Get database localization](get-database-localization.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1104 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


