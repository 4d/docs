---
id: get-string-resource
title: Get string resource
slug: /commands/get-string-resource
displayed_sidebar: docs
---

<!--REF #_command_.Get string resource.Syntax-->**Get string resource** ( *resID* {; *resFile*} ) : Text<!-- END REF-->
<!--REF #_command_.Get string resource.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| resID | Integer | &#8594;  | リソースID番号 |
| resFile | Time | &#8594;  | リソースファイル参照番号、または 省略時、開かれている全てのリソースファイル |
| 戻り値 | Text | &#8592; | 'STR 'リソースの内容 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get string resource.Summary-->Get string resource コマンドは、*resID*に渡されるIDを持つストリング ("STR ") リソースに格納されている文字列を返します。<!-- END REF-->

リソースが見つからなかった場合、空の文字列が返され、システム変数OKに0が設定されます。 

*resFile*に有効なリソースファイル参照番号を渡すと、リソースはそのリソースファイル内でのみ検索されます。*resFile*を省略した場合は、リソースチェーン内で最初に見つかったリソースの出現が返されます。

**Note:** ストリングリソースは、最大255バイトの文字を含めることができます。

#### 例題 

以下の例は、ストリングリソースID=20911の内容を表示します。このリソースは現在開かれているリソースファイルの少なくとも1つに配置されている必要があります:

```4d
 ALERT(Get string resource(20911))
```

#### システム変数およびセット 

リソースが見つかればOK変数は1に、そうでなければ0に設定されます。

#### 参照 

[Get indexed string](get-indexed-string.md)  
[Get text resource](get-text-resource.md)  
[STRING LIST TO ARRAY](string-list-to-array.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 506 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


