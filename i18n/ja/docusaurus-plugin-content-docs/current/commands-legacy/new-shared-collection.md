---
id: new-shared-collection
title: New shared collection
slug: /commands/new-shared-collection
displayed_sidebar: docs
---

<!--REF #_command_.New shared collection.Syntax-->**New shared collection** {( *value* {; *value2* ; ... ; *valueN*} )} -> 戻り値<!-- END REF-->
<!--REF #_command_.New shared collection.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| value | &#x1F852; | 共有コレクションの値 |
| 戻り値 | Collection | &#x1F850; | 新規の共有コレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.New shared collection.Summary-->**New shared collection** コマンドは、新しい空の、あるいは値が入れられたコレクションを作成し、その参照を返します。<!-- END REF-->このコレクションに要素を追加する場合には*Use...End use* 構造でくくる必要があり、そうでない場合にはエラーが返されます。ただし、属性の読み出しは*Use...End use* 構造の外側でも可能です。

**注:** *共有コレクション*についての詳細な情報については、*共有オブジェクトと共有コレクション* のページを参照してください。

何も引数を渡さない場合、**New shared collection** は空のコレクションを作成し、その参照を返します。

返された参照は、[C\_COLLECTION](c-collection.md) コマンドで宣言された4D 変数に割り当てる必要があります。  

**注:** [C\_COLLECTION](c-collection.md) はCollection 型の変数を宣言しますが、コレクションを作成するわけではないという点にご注意ください。

オプションとして、引数として一つあるいは複数の*value(s)* ペアを渡すことで、新しいコレクションを値の入った状態で作成することができます。それ以外の場合には、オブジェクト記法割り当てを通して要素を追加あるいは編集することができます(例題を参照してください)。

新しい要素のインデックスが共有コレクションの最後の既存の要素を超える場合、コレクションは自動的にリサイズされ、途中の要素は全て**null** 値が入れられます。

以下のサポートされる型であればいくつでも値を渡すことができます: 

* 数値(実数、倍長整数、等) 数値は常に実数として保存されます。
* テキスト
* ブール
* 日付
* 時間 (ミリ秒の数(実数)として保存されます)
* null
* 共有オブジェクト(\*)
* 共有コレクション(\*)

**注:** 標準コレクション(非共有コレクション)とは異なり、共有コレクションはピクチャー、ポインター、および共有でないオブジェクトおよびコレクションはサポートしていません。

 (\*)共有オブジェクトあるいはコレクションが共有オブジェクトに追加された場合、それらは同じ*ロック識別子*を共有します。この点についてのより詳細な情報については、*ロック識別子* の章を参照してください。

#### 例題 

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### 参照 

[New collection](new-collection.md)  
[New shared object](new-shared-object.md)  
*共有オブジェクトと共有コレクション*  