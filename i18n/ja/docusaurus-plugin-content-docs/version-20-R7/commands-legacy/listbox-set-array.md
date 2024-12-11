---
id: listbox-set-array
title: LISTBOX SET ARRAY
slug: /commands/listbox-set-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ARRAY.Syntax-->**LISTBOX SET ARRAY** ( {* ;} *object* ; *arrType* ; *arrPtr* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ARRAY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:objectはオブジェクト名(文字列)省略時:objectは変数 |
| object | any | &#8594;  | オブジェクト名(* 指定時)、または変数(* 省略時) |
| arrType | Integer | &#8594;  | 配列のタイプ |
| arrPtr | Pointer | &#8594;  | プロパティに関連付ける配列を指定 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET ARRAY.Summary-->**注:** このコマンドは配列型のリストボックスに対してのみ有効です。<!-- END REF-->

**LISTBOX SET ARRAY**コマンドは、 *object* and *\** によって指定されたリストボックスもしくはリストボックスコラムに、*arrType*配列を関連付けます。

**注:** デザインモードのプロパティリストを使用することによって、配列型のリストボックスにスタイル、文字色、背景色、行管理の配列を関連付けることができます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数で変数を指定します。対象がリストボックスなのか列なのかを、 *object* 引数で指定します。

*arrType* 引数にはリストボックスまたは列に関連付けたい配列の種類を、 "*List Box*" のテーマ内にある以下の定数を渡すことによって指定します。

| 定数                        | 型    | 値 | コメント                   |
| ------------------------- | ---- | - | ---------------------- |
| lk background color array | 倍長整数 | 1 |                        |
| lk control array          | 倍長整数 | 3 |                        |
| lk font color array       | 倍長整数 | 0 |                        |
| lk row height array       | 倍長整数 | 4 | (4D View Pro ライセンスが必要) |
| lk style array            | 倍長整数 | 2 |                        |

*arrPtr* 引数には、制御したいプロパティを制御するための配列に対するポインターを渡します。

#### 例題 1 

4列目のフォントカラー配列を10列目にも使いたいという場合を考えます。

```4d
  // 4列目で使用している配列に対するポインターを取得します。
 $Pointer:=LISTBOX Get array(*;"Col4";lk font color array)
  // 存在するかどうかをチェックします
 If(Not(Nil($Pointer)))
  // 10列目へ適用します。
    LISTBOX SET ARRAY(*;"Col10";lk font color array;$Pointer)
 End if
```

#### 例題 2 

リストボックス用に行高さ配列を設定します:

```4d
 LISTBOX SET ARRAY(*;"LB";lk row height array;->RowHeightArray)
```

#### 参照 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX GET ARRAYS](listbox-get-arrays.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1279 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


