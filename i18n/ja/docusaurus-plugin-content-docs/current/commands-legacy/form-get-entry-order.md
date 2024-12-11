---
id: form-get-entry-order
title: FORM GET ENTRY ORDER
slug: /commands/form-get-entry-order
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET ENTRY ORDER.Syntax-->**FORM GET ENTRY ORDER** ( *objectNames* {; pageNumber | *} )<!-- END REF-->
<!--REF #_command_.FORM GET ENTRY ORDER.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| objectNames | Text array | &#8592; | 入力順に並べられたオブジェクト名の配列 |
| pageNumber &#124; * | 倍長整数, 演算子 | &#8594;  | 定義された入力順を取得するページの番号 (省略時はカレントページ)、または * でカレントページの実際の入力順 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.FORM GET ENTRY ORDER.Summary-->**FORM GET ENTRY ORDER** コマンドは フォーム上のオブジェクトの名前を、その入力順に並べて *objectNames* に返します。<!-- END REF-->

* *\** パラメーターを省略した場合、**FORM GET ENTRY ORDER** は最後に [FORM SET ENTRY ORDER](form-set-entry-order.md) コマンドによって定義された入力順を返します。*pageNumber* パラメーターは任意です:  
   * *pageNumber* を省略した場合、*objectNames* 配列はカレントページの入力順を返します。  
   * *pageNumber* を指定した場合、*objectNames* 配列は *pageNumber* で指定されたページの入力順を返します。  
どちらの場合でも、カレントフォームに対して [FORM SET ENTRY ORDER](form-set-entry-order.md) コマンドが前もってコールされていないと、*objectNames* 配列は空で返されます。
* *\** を渡した場合には、**FORM GET ENTRY ORDER** はカレントページの実際の入力順を返します。つまり、*objectNames* 配列には**有効な**オブジェクト名のみが返されます (有効なオブジェクトについての詳細は [FORM SET ENTRY ORDER](form-set-entry-order.md) コマンドの説明を参照ください)。実際のフォーム入力順は次のいずれかを反映します:  
   * オブジェクトの階層に準じたデフォルトのフォーム入力順  
   * フォームエディターが使用された場合はその入力順 (*データの入力順を変更する* 参照)  
   * [FORM SET ENTRY ORDER](form-set-entry-order.md) コマンドがカレントプロセスで呼び出された場合には、その入力順  
実際の入力順にはページ 0 および継承フォームのオブジェクトが常に含まれます。

**注:** このコマンドが親フォームに対して呼ばれた場合、サブフォーム内の入力順は返されません。

#### 例題 

現在の入力順からいくつかのオブジェクトを除外します:

```4d
 ARRAY TEXT($arrTabOrderObject;0)
 var $vElem : Integer
 
 FORM GET ENTRY ORDER($arrTabOrderObject;*) //実際の入力順を取得します
 Repeat
    $vElem:=Find in array($arrTabOrderObject;"vTax@")
    If($vElem>0) // "vTax" で始まる名前を持つオブジェクトをデータ入力順から除外します
       DELETE FROM ARRAY($arrTabOrderObject;$vElem)
    End if
 Until($vElem<0)
 FORM SET ENTRY ORDER($arrTabOrderObject) // 新しい入力順を適用します
```

#### 参照 

[FORM SET ENTRY ORDER](form-set-entry-order.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1469 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


