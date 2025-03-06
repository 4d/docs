---
id: get-text-resource
title: Get text resource
slug: /commands/get-text-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get text resource.Syntax-->**Get text resource** ( *resID* {; *resFile*} ) : Text<!-- END REF-->
<!--REF #_command_.Get text resource.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | リソースID番号 |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれている全てのリソースファイル |
| 戻り値 | Text | &#8592; | TEXTリソースの内容 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get text resource.Summary-->Get text resource コマンドは、*resID*に渡されるIDを持つテキスト ("TEXT") リソースに格納されているテキストを返します。<!-- END REF-->

リソースが見つからなかった場合、空の文字列が返され、システム変数OKに0が設定されます。

*resFile*に有効なリソースファイル参照番号を渡すと、リソースはそのリソースファイル内でのみ検索されます。*resFile*を省略した場合は、リソースチェーン内で最初に見つかったリソースの出現が返されます。

**Note:** テキストリソースは、最大32000文字を使用することができます。

#### 例題 

以下の例は、テキストリソースID=20800の内容を表示します。このIDは、現在開かれているリソースファイルの少なくとも1つに登録されている必要があります:

```4d
 ALERT(Get text resource(20800))
```

#### システム変数およびセット 

リソースが見つかるとOK変数は1に、そうでなければ0に設定されます。

#### 参照 

[Get indexed string](get-indexed-string.md)  
[Get string resource](get-string-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 504 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


