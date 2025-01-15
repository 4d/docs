---
id: listbox-get-print-information
title: LISTBOX GET PRINT INFORMATION
slug: /commands/listbox-get-print-information
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Syntax-->**LISTBOX GET PRINT INFORMATION** ( {* ;} *object* ; *selector* ; *info* )<!-- END REF-->
<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、objectはオブジェクト名 (文字列)<br/>省略時、objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数 (* 省略時) |
| selector | Integer | &#8594;  | 取得する情報 |
| info | Integer | &#8592; | 現在の値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX GET PRINT INFORMATION.Summary-->LISTBOX GET PRINT INFORMATION コマンドは *object*と*\**で指定したリストボックスオブジェクトの印刷に関連する現在の情報を返します。<!-- END REF-->このコマンドを使用してリストボックスの内容の印刷を制御します。

オプションの \* 引数を渡した場合、*object*引数はオブジェクト名 (文字列) です。この引数を渡さない場合*object*は変数です。この場合、文字列ではなく変数参照を渡します。

このコマンドは[Print object](print-object.md "Print object")コマンドによるリストボックスの印刷のコンテキストで呼ばれなければなりません。このコンテキスト外では、意味のある値を返しません。

*selector*に知りたい情報を示す値を渡し、*info*には数値またはブール変数を渡します。*selector*には"*List Box*"テーマの以下の定数を渡します:

| 定数                         | 型    | 値 | コメント                                                                                                                                                                                                                                  |
| -------------------------- | ---- | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| lk last printed row number | 倍長整数 | 0 | *info*に印刷された最後の行番号を返します。これにより次に印刷される行の番号が分かります。<br/>リストボックスに非表示行が存在したり[OBJECT SET SCROLL POSITION](object-set-scroll-position.md)コマンドが呼び出されていたりすると、返される値は実際に印刷された行数よりも、大きくなることがあります。例えば行番号1, 18そして20が印刷されると、*info*には20が返されます。 |
| lk printed height          | 倍長整数 | 3 | *info*に実際に印刷されたオブジェクトの高さをピクセル単位で返します (ヘッダーや線等を含む)。印刷する行数がリストボックスの高さに満たない場合、高さは自動で減らされます。                                                                                                                                              |
| lk printed rows            | 倍長整数 | 1 | さいごの[Print object](print-object.md "Print object")最後のコマンド呼び出し時に実際に印刷された行数を*info*に返します。この数値には階層リストボックスの場合に追加されたブレーク行も含まれます。例えばリストボックスに20行あり、奇数行が隠されている場合、*info*は10になります。                                                               |
| lk printing is over        | 倍長整数 | 2 | リストボックスの最後の (表示) 行が印刷されたかどうかを示すブール値を*info*に返します。True = 行は印刷された; そうでなければFalse。                                                                                                                                                         |

リストボックスの印刷に関する原則については*リストボックスの印刷*を参照してください。

#### 例題 1 

すべての行が印刷されるまで印刷を行う:

```4d
 OPEN PRINTING JOB
 FORM LOAD("SalesForm")
 
 $Over:=False
 Repeat
    $Total:=Print object(*;"mylistbox")
    LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printing is over;$Over)
    PAGE BREAK
 Until($Over)
 
 CLOSE PRINTING JOB
```

#### 例題 2 

特定の行が隠されていて、リストボックスを最低500行印刷する:

```4d
 $GlobalPrinted:=0
 Repeat
    $Total:=Print object(*;"mylistbox")
    LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printed rows;$Printed)
    $GlobalPrinted:=$GlobalPrinted+$Printed
    PAGE BREAK
 Until($GlobalPrinted>=500)
```


#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1110 |
| スレッドセーフである | &cross; |


