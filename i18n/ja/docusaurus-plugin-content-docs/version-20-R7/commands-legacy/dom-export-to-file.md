---
id: dom-export-to-file
title: DOM EXPORT TO FILE
slug: /commands/dom-export-to-file
displayed_sidebar: docs
---

<!--REF #_command_.DOM EXPORT TO FILE.Syntax-->**DOM EXPORT TO FILE** ( *elementRef* ; *filePath* )<!-- END REF-->
<!--REF #_command_.DOM EXPORT TO FILE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| elementRef | Text | &#8594;  | ルートXML要素参照 |
| filePath | Text | &#8594;  | ファイルへのフルパス |

<!-- END REF-->

#### 説明 

<!--REF #_command_.DOM EXPORT TO FILE.Summary-->DOM EXPORT TO FILE コマンドは、XMLツリーをディスク上のファイルに格納します。<!-- END REF-->引数には書き出すXMLのルート要素参照を渡します。

*filePath*には使用する、または作成するファイルのフルパスを渡します。ファイルが存在しない場合は作成されます。 

ファイル名のみ (アクセスパスなし) を渡した場合、ストラクチャファイルと同階層でファイルを検索し、または作成します。

空の文字列 (*""*) を渡すと、標準のファイルを作成・開くダイアログが表示されます。

##### 行末文字の処理に関する注記 

XMLにおいて、改行はそれがXML要素の内側あるいは間いずれにあるかにかかわらず、大きな意味を持ちません。内部的にXMLは標準のLF文字を行区切り文字として使用します。 

読み込みや書き出し処理の間、行区切り文字は変換されることがあります。読み込み時、XMLパーサーはCRLF文字 (Windowsの標準改行) をLF文字に置き換えます。書き出し時、LF文字はmacOSではCR文字に、WindowsではCRLF文字に置き換えられます。

改行を保持したい場合、その部分をXML CDATAセクションに含めます。そうすることによりXMLパーサーはその部分を解析対象としなくなります。CRLF文字の代わりに"<br/>"を使用することもできます。これは明示的な改行文字で、パーサーによる解析は行われません。

#### 例題 

以下の例題ではXMLツリー*vElemRef*をファイルMyDoc.xmlに格納します:

```4d
 DOM EXPORT TO FILE(vElemRef;"C:\\folder\MyDoc.xml")
```

#### システム変数およびセット 

 コマンドが正しく実行されるとシステム変数OKに1が設定され、そうでなければ0が設定されてエラーが生成されます。

#### エラー管理 

エラーは以下の場合に生成されます:  

* ルート要素参照が無効の場合。
* アクセスパスが無効の場合。
* ボリュームがエラーを返す場合 (空き容量がない場合など)。

#### 参照 

[DOM EXPORT TO VAR](dom-export-to-var.md)  
[SVG EXPORT TO PICTURE](svg-export-to-picture.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 862 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK、error |
| サーバー上での使用は不可 ||


