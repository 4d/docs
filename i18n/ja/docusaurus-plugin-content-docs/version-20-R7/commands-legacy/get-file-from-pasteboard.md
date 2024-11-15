---
id: get-file-from-pasteboard
title: Get file from pasteboard
slug: /commands/get-file-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get file from pasteboard.Syntax-->**Get file from pasteboard** ( *xIndex* ) : Text<!-- END REF-->
<!--REF #_command_.Get file from pasteboard.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| xIndex | Integer | &#8594;  | ドラッグアクションに含まれるx番目のファイル |
| 戻り値 | Text | &#8592; | ペーストボードから取り出した、ファイルのパス名 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.Get file from pasteboard.Summary-->Get file from pasteboard コマンドは、ドラッグ＆ドロップ処理に含まれるファイルの完全パス名を返します。<!-- END REF-->複数のファイルを同時に選択し、移動することができます。*xIndex* 引数を使用して選択したファイル中でファイルを指定することができます。

ペーストボードにX番目のファイルがない場合、コマンドは空の文字列を返します。

#### 例題 

以下の例題は、ドラッグ＆ドロップ処理に含まれるすべてのファイルのパス名を配列に格納します:

```4d
 ARRAY TEXT($filesArray;0)
 var $vfileArray : Text
 var $n : Integer
 $n:=1
 Repeat
    $vfileArray:=Get file from pasteboard($n)
    If($vfileArray#"")
       APPEND TO ARRAY($filesArray;$vfileArray)
       $n:=$n+1
    End if
 Until($vfileArray="")
```

#### 参照 

[SET FILE TO PASTEBOARD](set-file-to-pasteboard.md)  