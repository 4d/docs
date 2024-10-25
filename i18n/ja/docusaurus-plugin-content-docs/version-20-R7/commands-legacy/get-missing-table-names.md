---
id: get-missing-table-names
title: GET MISSING TABLE NAMES
slug: /commands/get-missing-table-names
displayed_sidebar: docs
---

<!--REF #_command_.GET MISSING TABLE NAMES.Syntax-->**GET MISSING TABLE NAMES** ( *missingTables* )<!-- END REF-->
<!--REF #_command_.GET MISSING TABLE NAMES.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| missingTables | Text array | &#8592; | データベース中で失われたテーブルの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET MISSING TABLE NAMES.Summary-->GET MISSING TABLE NAMES コマンドは カレントデータベース中ですべての失われたテーブルの名前を*missingTables*配列に返します。<!-- END REF-->

失われたテーブルとは、データファイル中にデータがあるにもかかわらず、カレントストラクチャレベルに存在しないテーブルです。これはデータファイルが異なるバージョンのストラクチャで開かれたときに発生します。 

典型的なシナリオは以下の通りです:

* 開発者はテーブルA、B、Cを含むストラクチャを提供する。
* ユーザが (例えば統合されたSQLを使用して) カスタムテーブルDとEを追加し、これらのテーブルにデータを格納する。
* デベロッパが新しいバージョンのストラクチャを提供する。このストラクチャにはテーブルDとEが含まれていません。  
この場合、ユーザバージョンのデータファイルにはテーブルDとEのデータが含まれていますが、アクセスすることはできません。GET MISSING TABLE NAMESコマンドはテーブル名"D"と"E"を返します。

データベースで失われているテーブルを識別したら、新しい[REGENERATE MISSING TABLE](regenerate-missing-table.md "REGENERATE MISSING TABLE")コマンドを使用して、それらを再アクティブにすることができます。

**Note:** 失われたテーブルのデータは、テーブルが再生成されていないと、デーファイル圧縮時に失われます。

#### 参照 

[REGENERATE MISSING TABLE](regenerate-missing-table.md)  