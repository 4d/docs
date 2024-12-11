---
id: listbox-get-array
title: LISTBOX Get array
slug: /commands/listbox-get-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get array.Syntax-->**LISTBOX Get array** ( {* ;} *object* ; *arrType* ) : Pointer<!-- END REF-->
<!--REF #_command_.LISTBOX Get array.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時:objectはオブジェクト名(文字列)省略時:objectは変数 |
| object | any | &#8594;  | オブジェクト名(* 指定時)、または変数(* 省略時) |
| arrType | Integer | &#8594;  | 配列のタイプ |
| 戻り値 | Pointer | &#8592; | プロパティに関連付けられた配列へのポインター |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX Get array.Summary-->**注:** このコマンドは配列型のリストボックスに対してのみ有効です。<!-- END REF-->

**LISTBOX Get array**コマンドは、 *object* と *\** によって指定されたリストボックスまたはリストボックスコラムの配列へのポインターを*arrType* 配列に返します。

スタイル、カラー、背景色、または行管理配列は、デザインモードのプロパティリスト、あるいは [LISTBOX SET ARRAY](listbox-set-array.md) コマンドを使用することで、配列型のリストボックス、または (行管理配列以外のみ) 配列型リストボックスのカラムと関連付けすることができます。

任意の \* 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数で変数を指定します。対象がリストボックスなのか列なのかを、 *object* 引数で指定します。

*arrType* 引数には、取得したいプロパティの配列の型を渡します。 "*List Box*" テーマ内にある以下の定数を使用することができます。

| 定数                        | 型    | 値 |
| ------------------------- | ---- | - |
| lk background color array | 倍長整数 | 1 |
| lk control array          | 倍長整数 | 3 |
| lk font color array       | 倍長整数 | 0 |
| lk row height array       | 倍長整数 | 4 |
| lk style array            | 倍長整数 | 2 |

戻り値は以下のどれかになります:

* 要求されたプロパティの配列がそのリストボックスまたは列に関連付けされていない場合、[Is nil pointer](is-nil-pointer.md)が返ってきます。
* ユーザーによって定義されたプロパティの配列へのポインター
* [LISTBOX SET ROW COLOR](listbox-set-row-color.md) や [LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md) コマンドを使用して設定されたプロパティの配列へのポインター

#### 例題 

典型的な使用例:

```4d
 vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)
  // "MyLB" というリストボックスに関連付けされた
  // フォントカラー配列を返します。
 
 vPtr:=LISTBOX Get array(*;"Col4";lk style array)
  // "Col4" リストボックスの列に関連付けされた
  // フォントスタイル配列を返します。
```

#### 参照 

[LISTBOX GET ARRAYS](listbox-get-arrays.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1278 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


