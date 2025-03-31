---
id: localized-string
title: Localized string
slug: /commands/localized-string
displayed_sidebar: docs
---

<!--REF #_command_.Localized string.Syntax-->**Localized string** ( *resName* ) : Text<!-- END REF-->
<!--REF #_command_.Localized string.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resName | Text | &#8594;  | resname属性値 |
| 戻り値 | Text | &#8592; | カレントランゲージで resNameによって指定された文字列の値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Localized string.Summary-->Localized stringコマンドは、*resName*の属性によって指定された、カレントランゲージの文字列を返します。<!-- END REF-->

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
 $JAvalue:=Localized string("Show on disk")
```
  
  
...カレントランゲージが日本語の場合、$JAvalueには、“ディスク上に表示”が返されます。

#### システム変数およびセット 

コマンドが正しく実行されるとOK変数に1が設定されます。*resName*が見つからない場合、コマンドは空の文字列を返しOK変数に0が設定されます。

#### 参照 

[Get database localization](get-database-localization.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 991 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |


