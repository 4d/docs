---
id: localized-document-path
title: Localized document path
slug: /commands/localized-document-path
displayed_sidebar: docs
---

<!--REF #_command_.Localized document path.Syntax-->**Localized document path** ( *relativePath* ) : Text<!-- END REF-->
<!--REF #_command_.Localized document path.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| relativePath | Text | &#8594;  | ローカライズされたバージョンを取得したいドキュメントの相対パス名 |
| 戻り値 | Text | &#8592; | ローカライズされたドキュメントの絶対パス名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Localized document path.Summary-->Localized document path コマンドはxxx.<!-- END REF-->lprojフォルダ内に存在する、相対パスで指定されたドキュメントの完全 (絶対) パス名を返します。

このコマンドは**Resources**フォルダおよびxxx.lproj (xxxは言語コード) サブフォルダが存在するマルチ言語アプリケーションアーキテクチャで使用しなければなりません。このアーキテクチャにおいて、4Dはローカライズされた.xliffタイプや画像などのファイルを自動でサポートします。しかし開発者は他のタイプのファイルについても同じメカニズムを使用する必要があるかもしれません。

*relativePath*に検索するドキュメントの相対パス名を渡します。渡すパス名はデータベースの"xxx.lproj"フォルダの第一階層から相対でなければなりません。このコマンドはデータベースのカレント言語に対応する "xxx.lproj"フォルダを使用した完全パス名を返します。

**Note:** カレント言語は**Resources**の内容に基づき4Dが自動で ([Get database localization](get-database-localization.md "Get database localization")コマンド参照)、あるいは新しい[SET DATABASE LOCALIZATION](set-database-localization.md "SET DATABASE LOCALIZATION")コマンドで設定されます。

*relativePath*引数はシステムまたはPOSIXシンタックスを使用して表現できます。例えば:

* xsl/log.xsl (POSIXシンタックス: Mac OSおよびWindowsで利用可)
* xsllog.xsl (Windows のみ)
* xsl:log.xsl (Mac OS のみ)

コマンドから返される絶対パス名は常にシステムシンタックスで表されます。

**4D Server:** リモートモードで、コマンドがクライアントプロセスから呼び出された場合、クライアントマシンの**Resources**フォルダのパスが返されます。

4Dは処理されるマルチ言語アプリケーションの、ありうるすべてのケースのシーケンスを試しながら、ファイルを探します。ステップごとに4Dは言語に対応するフォルダ内で*relativePath*の存在を検証し、ファイルを見つければその完全パスを返します。*relativePath*が見つからないかフォルダが存在しない場合、4D次のステップを試みます。検索ステージ毎のフォルダは以下のようになります:

*カレント言語 (例: fr-ca)* 
 *地域なしのカレント言語 (例: fr)* 
 *開始時にデフォルトでロードされる言語 (例: ja-jp)* 
 *開始時にデフォルトでロードされる地域なし言語 (例: ja)* 
 *最初に見つかった .lproj フォルダ (例: it.lproj)* 
 *Resourcesフォルダの第一レベル*

*relativePath*がこれらのパスのどこにも存在しない場合、コマンドは空の文字列を返します。

#### 例題 

XMLやHTMLファイルを変換する目的で、"log.xsl"変換ファイルを使用したいとします。このファイルはカレント言語により異なるため、どの"log.xsl"ファイルを使用するか決定する必要があります。  
Resources フォルダの中身は以下のようになっています:

![](../assets/en/commands/pict162129.en.png)

カレント言語に適用する.xslファイルを決定するには、以下のコードを使用します:

```4d
 $myxsl:=Localized document path("xsl/log.xsl")
```

カレントの言語が日本語である場合 (ja)、コマンドは以下を返します:

* Windows: C:\\users\\…\\…\\…\\resources\\ja.lproj\\xsl\\log.xsl
* Mac OS: "HardDisk:users:…:…:…:resources:ja.lproj:xsl:log.xsl"

#### 参照 

[Get database localization](get-database-localization.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1105 |
| スレッドセーフである | &check; |


