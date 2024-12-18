---
id: new-shared-object
title: New shared object
slug: /commands/new-shared-object
displayed_sidebar: docs
---

<!--REF #_command_.New shared object.Syntax-->**New shared object** {( *property* ; *value* {; *property2* ; *value2* ; ... ; *propertyN* ; *valueN*} )} : Object<!-- END REF-->
<!--REF #_command_.New shared object.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| property | Text | &#8594;  | 作成するプロパティ名 |
| value | Text, Date, Boolean, Pointer, Number, Object | &#8594;  | プロパティの値 |
| 戻り値 | Object | &#8592; | 新しい共有オブジェクト |

<!-- END REF-->

#### 説明 

<!--REF #_command_.New shared object.Summary-->**New shared object** コマンドは新しい空の、あるいは値が入れられた共有オブジェクトを作成し、その参照を返します。<!-- END REF-->このオブジェクトにプロパティを追加、あるいはプロパティを編集する際には必ず*Use...End use* 構造でくくる必要があり、そうでない場合にはエラーが生成されます。ただし、属性の読み出しは*Use...End use* 構造の外側でも可能です。

**注:** 共有オブジェクトについてのより詳細な情報については、*共有オブジェクトと共有コレクション* のページを参照してください。

引数を何も渡さなかった場合、**New shared object** は空のオブジェクトを作成し、その参照を返します。この参照は必ず[C\_OBJECT](c-object.md) コマンドで宣言された4D 変数に割り当てる必要があります。

**注:** [C\_OBJECT](c-object.md) コマンドはObject 型の変数を宣言しますが、オブジェクトは作成しません。

オプションとして、引数として一つあるいは複数の*property*/*value* ペアを渡すことで、新しいオブジェクトを値の入った状態で作成することができます:

* *property* 引数には、作成するプロパティのラベルを渡します(最大255文字)。*property* 引数は大文字と小文字を区別することに注意してください。
* *value* 引数には、そのプロパティに対して設定したい値を渡します。共有オブジェクトには、以下の型の値しか格納することができません:  
   * 数値(実数、倍長整数、等) 数値は常に実数として保存されます。  
   * テキスト  
   * ブール  
   * 日付  
   * 時間 (ミリ秒の数(実数)として保存されます)  
   * null  
   * 共有オブジェクト(\*)  
   * 共有コレクション(\*)  
**注:** 標準オブジェクト(非共有オブジェクト)とは異なり、共有オブジェクトはピクチャー、ポインター、および共有でないオブジェクトおよびコレクションはサポートしていません。  
    
(\*)共有オブジェクトが共有オブジェクトに追加された場合、それらは同じロック識別子を共有します。この点についてのより詳細な情報については、*ロック識別子* の章を参照してください。

#### 例題 1 

値が既に格納されている新しい共有オブジェクトを作成したい場合を考えます:

```4d
 var $contact : Object
 $contact:=New shared object("name";"Smith";"firstname";"John")
```

#### 例題 2 

共有オブジェクトを作成し編集したい場合を考えます。このオブジェクトに対しては、必ず 構造を呼ぶ必要があります:   

```4d
 var $s_obj : Object
 $s_obj:=New shared object("prop1";"alpha")
 Use($s_obj)
    $s_obj.prop1:="omega"
 End use
```

#### 参照 

[New object](new-object.md)  
[New shared collection](new-shared-collection.md)  
*共有オブジェクトと共有コレクション*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1526 |
| スレッドセーフである | &check; |


