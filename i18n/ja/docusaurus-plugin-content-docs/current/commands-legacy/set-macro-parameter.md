---
id: set-macro-parameter
title: SET MACRO PARAMETER
slug: /commands/set-macro-parameter
displayed_sidebar: docs
---

<!--REF #_command_.SET MACRO PARAMETER.Syntax-->**SET MACRO PARAMETER** ( *selector* ; *textParam* )<!-- END REF-->
<!--REF #_command_.SET MACRO PARAMETER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | 使用するセレクション |
| textParam | Text | &#8594;  | 送られたテキスト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SET MACRO PARAMETER.Summary-->SET MACRO PARAMETERコマンドは、呼び出されたメソッドにテキスト*textParam*を挿入します。<!-- END REF-->

テキストがメソッド内で選択された場合、引数*selector*を使用して、テキスト*textParam*がすべてのメソッドテキストを置き換えるか、それとも選択されたテキストのみを置き換えるかを設定できます。セレクタには、テーマ"" に追加されている以下の定数を一つ渡します。

| 定数                      | 型    | 値 |
| ----------------------- | ---- | - |
| Full method text        | 倍長整数 | 1 |
| Highlighted method text | 倍長整数 | 2 |
  
  
テキストが選択されていない場合、*textParam*がメソッドへ挿入されます。

#### 注 

[GET MACRO PARAMETER](get-macro-parameter.md "GET MACRO PARAMETER")とSET MACRO PARAMETERコマンドが正確に起動するには、新しい"バージョン" の属性が、以下のようにマクロ自体に記述されていなければなりません。

```xml
<macro name="MyMacro" version="2">
--- Text of macro ---
</macro>
```

#### 例題 

このマクロは新しいテキストを作成します。このテキストは呼び出しているメソッドへ返されます。

```4d
 var $input_text : Text
 var $output_text : Text
 GET MACRO PARAMETER(Highlighted method text;$input_text)
  //選択されたテキストはテーブル、つまり “[Customers]” と仮定する
 $output_text:=""
 $output_text:=$output_text+Command name(47)+"("+$input_text+")" //すべて選択する ([Customers])
 $output_text:=$output_text+"$i:="+Command name(76)+"("+$input_text+")" //セレクション ([Customers]) 内にある$i:=Records
 SET MACRO PARAMETER(Highlighted method text;$output_text)
  //新しいコードで選択されたテキストを置き換える
```

#### 参照 

[GET MACRO PARAMETER](get-macro-parameter.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 998 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


