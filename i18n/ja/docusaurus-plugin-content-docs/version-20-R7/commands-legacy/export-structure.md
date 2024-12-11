---
id: export-structure
title: EXPORT STRUCTURE
slug: /commands/export-structure
displayed_sidebar: docs
---

<!--REF #_command_.EXPORT STRUCTURE.Syntax-->**EXPORT STRUCTURE** ( *exportedStructure* {; *format*} )<!-- END REF-->
<!--REF #_command_.EXPORT STRUCTURE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| exportedStructure | Text | &#8592; | 4D データベースストラクチャーを書き出したXML定義ファイル |
| format | Text | &#8594;  | Export format: xml format (default) or html format |

<!-- END REF-->

#### 説明 

<!--REF #_command_.EXPORT STRUCTURE.Summary-->**EXPORT STRUCTURE** コマンドは、カレントの4Dデータベースのストラクチャー定義を*exportedStructure* へと書き出します。<!-- END REF-->

exportedStructure 引数には、ストラクチャー定義を格納したいテキスト変数を渡します。書き出された定義には、テーブル、フィールド、リレーションが含まれる他、それらの属性や、ストラクチャーの完全な定義に必要な他の特性などが含まれます。非表示要素はそれに対応する属性とともに書き出されます。しかしながら、削除された要素は書き出されません。

*format* 引数を省略した場合、コマンドはデフォルトでストラクチャー定義をXML フォーマットで書き出します。それ以外のフォーマットを指定するには、*format* 引数に以下の定数のいずれか一つを渡すことができます:

| 定数          | 値    |
| ----------- | ---- |
| html format | html |
| xml format  | xml  |

このコマンドは、**書き出し > ストラクチャー定義をXML ファイルに書き出し** **... または** **書き出し > ストラクチャー定義を** **HTML ファイルに書き出し...** メニュー項目のを選択した時と同じXML またはHTML コードを生成します(*ストラクチャー定義の書き出しと読み込み*参照)。

* **xml フォーマット**: 4D ストラクチャー定義の内部的な"文法" は、DTD ファイルを使用してドキュメントになっています。またこのファイルはXML ファイルの検証にも使用されます。4D が使用するファイルは、4D アプリケーションの隣にある**DTD** フォルダ内にまとめられています。ストラクチャー定義に使用されるのは、**base\_core.dtd** および **common.dtd** ファイルです。詳細な情報については、このファイルの中身と、それに含まれるコメントを参照してください。  
XML フォーマットで書き出されたストラクチャー定義は他のデータベースで読み込むことができます([IMPORT STRUCTURE](import-structure.md) 参照)。
* **html フォーマット**: コマンドはHTML コードを生成し、このコードにはピクチャーやcss など、HTML の描画に必要な外部要素を格納したフォルダへの参照が含まれています。このコードを、ブラウザで表示するためのHTML ページとして保存したい場合、**書き出し > ストラクチャー定義を** **HTML ファイルに書き出し...** メニュー項目で作成されるフォルダを再利用するか、または独自のresources フォルダを作成することができます。

#### 例題 1 

カレントデータベースのストラクチャーをテキストファイルに書き出す場合を考えます:

```4d
 var $vTStruc : Text
 EXPORT STRUCTURE($vTStruc)
 TEXT TO DOCUMENT("myStructure.xml";$vTStruc)
```

#### 例題 2 

カレントデータベースのストラクチャーをhtml フォーマットで書き出したい場合を考えます:

```4d
 var $vHtml : Text
 EXPORT STRUCTURE($vHtml;html format)
 File("/PACKAGE/myProject Structure Export/myProject.html").setText($vHtml)
```

#### 参照 

[IMPORT STRUCTURE](import-structure.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1311 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


