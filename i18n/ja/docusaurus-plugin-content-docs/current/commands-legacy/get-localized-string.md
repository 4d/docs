---
id: get-localized-string
title: Get localized string
slug: /commands/get-localized-string
displayed_sidebar: docs
---

<!--REF #_command_.Get localized string.Syntax-->**Get localized string** ( *resName* ) -> 戻り値<!-- END REF-->
<!--REF #_command_.Get localized string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resName | Text | &srarr; | resname属性値 |
| 戻り値 | Text | &larr; | カレントランゲージで resNameによって指定された文字列の値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get localized string.Summary-->Get localized stringコマンドは、*resName*の属性によって指定された、カレントランゲージの文字列を返します。<!-- END REF-->

このコマンドは、XLIFFのアーキテクチャ内だけで機能します。このタイプのアーキテクチャに関する詳細は、*Design Reference*マニュアルにあるXLIFFサポートを参照してください。

**Note:** [Get database localization](get-database-localization.md "Get database localization")コマンドを使用して、アプリケーションで使用するランゲージを調べることができます。

*resName*に現在の対象ランゲージへの訳文を取得するための文字列リソース名を渡します。

Note: XLIFFは大文字小文字を区別します。

#### 例題 

以下は.xlfファイルの一部です:

```XML
<file source-language="en-US" target-language="ja">
[...]
   <trans-unit resname="Show on disk">
      <source>Show on disk</source>
      <target>ディスク上に表示</target>
   </trans-unit>
```

以下のステートメントを実行後:

```4d
 $JAvalue:=Get localized string("Show on disk")
```
  
  
...カレントランゲージが日本語の場合、$JAvalueには、“ディスク上に表示”が返されます。

#### システム変数およびセット 

コマンドが正しく実行されるとOK変数に1が設定されます。*resName*が見つからない場合、コマンドは空の文字列を返しOK変数に0が設定されます。

#### 参照 

[Get database localization](get-database-localization.md)  