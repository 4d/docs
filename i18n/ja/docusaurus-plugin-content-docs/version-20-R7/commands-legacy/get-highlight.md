---
id: get-highlight
title: GET HIGHLIGHT
slug: /commands/get-highlight
displayed_sidebar: docs
---

<!--REF #_command_.GET HIGHLIGHT.Syntax-->**GET HIGHLIGHT** ( {* ;} *object* ; *startSel* ; *endSel* )<!-- END REF-->
<!--REF #_command_.GET HIGHLIGHT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字列)、省略時: objectはフィールドまたは変数 |
| object | Field, Variable, any | &#8594;  | オブジェクト名 (*指定時)、またはフィールドや変数 (*省略時) |
| startSel | Integer | &#8592; | 反転表示された先頭位置 |
| endSel | Integer | &#8592; | 反転表示された最終位置 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET HIGHLIGHT.Summary-->**GET HIGHLIGHT**コマンドは、*object*中で現在反転表示されているテキストを検出するために使用します。<!-- END REF--> 

オプションの *\** 引数を渡すと*object*引数はオブジェクト名 (文字列) です。*\** 引数を渡さないと*object*引数はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フォーム上のフィールドや変数のみ) を渡します。

**注:** このコマンドをサブフォームのリストフォーム内にあるフィールドに対して使用することはできません。

テキストは、ユーザによる指定や[HIGHLIGHT TEXT](highlight-text.md)コマンドの実行で反転させることができます。

引数 *startSel* は反転表示された文字の最初の位置を返します。   
引数 *endSel* は反転表示された文字の最後の位置に1を加えて返します。 

*startSel* と *endSel* が同じである場合、挿入ポインタは*startSel* によって指定された文字の前にあります。テキストは選択されておらず、文字は反転されていません。

*object*引数で指定されたオブジェクトがフォーム中で見つからなかった場合、コマンドは *startSel* に-1を、*endSel* に-2を返します。 

#### 例題 1 

以下の例題を使用して、フィールド \[Products\]Comments から反転表示された部分を検出します。 

```4d
GET HIGHLIGHT([Products]Comments;vFirst;vLast)
If(vFirst < vlast)
    ALERT("The selected text is:"+Substring([Products]Comments;vFirst;vLast-vFirst))
End if
```

#### 例題 2 

[FILTER KEYSTROKE](filter-keystroke.md "FILTER KEYSTROKE") コマンドの例題を参照してください。

#### 例題 3 

ハイライトされたテキストのスタイルを変更する:

```4d
 GET HIGHLIGHT(*;"myText";$startsel,$endsel)
 ST SET ATTRIBUTES(*;"myText";$startsel,$endsel;Attribute underline style;1;Attribute bold style;1)
```

#### 参照 

[FILTER KEYSTROKE](filter-keystroke.md)  
[HIGHLIGHT TEXT](highlight-text.md)  
[Keystroke](keystroke.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 209 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


