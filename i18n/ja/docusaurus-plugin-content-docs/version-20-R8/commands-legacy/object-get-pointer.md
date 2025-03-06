---
id: object-get-pointer
title: OBJECT Get pointer
slug: /commands/object-get-pointer
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get pointer.Syntax-->**OBJECT Get pointer** {( *selector* {; *objectName* {; *subformName*}})} : Pointer<!-- END REF-->
<!--REF #_command_.OBJECT Get pointer.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | オブジェクトカテゴリ |
| objectName | Text | &#8594;  | オブジェクト名 |
| subformName | Text | &#8594;  | サブフォームオブジェクト名 |
| 戻り値 | Pointer | &#8592; | オブジェクト変数へのポインタ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get pointer.Summary-->**OBJECT Get pointer**コマンドはフォームオブジェクトの変数へのポインタを返します。<!-- END REF-->

このコマンドを使用して、*selector*引数の値に基づき、異なるオブジェクトを指定できます。この引数には*Form Objects (Access)*テーマの定数を渡します:

* Object current (*selector*省略時のデフォルト): このセレクタを渡すか*selector*引数を省略した場合、コマンドはカレントオブジェクト (メソッドを実行しているオブジェクト) に割り当てられた変数へのポインタを返します。  
**注:** これは以前の[Self](self.md)コマンドとまったく同じ動作です。[Self](self.md)コマンドは互換性の目的でのみ保持されています。
* Object with focus: このセレクタを渡すと、コマンドはフォーム内でフォーカスを持つオブジェクトに割り当てられた変数へのポインタを返します。残り2つのオプション引数は渡されても無視されます。  
**注** **:** これは完全に[Focus object](focus-object.md)コマンドと同じ動作です。[Focus object](focus-object.md)コマンドは4D v12で廃止予定となりました。
* Object subform container: このセレクタを渡すと、コマンドはサブフォームコンテナにバインドされた変数へのポインタを返します。残り2つのオプション引数は渡されても無視されます。つまりこのセレクタは、コンテナオブジェクトにバインドされた変数にアクセスするために、サブフォームとして使用されるフォームのコンテキストでのみ利用できます。
* Object named: このセレクタを渡す場合、2番目の*objectName*引数も渡さなければなりません。この場合、コマンドはこの引数に渡された名前を持つオブジェクトに割り当てられた変数へのポインタを返します。  
**注** **:** *objectName* がサブフォームに対応し、"一覧サブフォーム"オプションがチェックされていると、コマンドはソーステーブルが指定されていればサブフォームのテーブルへのポインタを返します。そうでなければNilを返します。

**注:** このコマンドがリストボックスのコンテキストにおいて使用された時、Object current あるいは Object with focus セレクターを用いた**OBJECT Get pointer** コマンドは、コンテキストに応じてリストボックス、カラム、ヘッダーへのポインターを返します。詳細な情報については、*リストボックスオブジェクトの管理* のページを参照してください。

オプションの*subformName*引数を使用してカレントのコンテキスト (すなわち親フォーム) に属さない*objectName*オブジェクトへのポインタを取得できます。この引数を使用可能にするには、Object named セレクタを使用しなければなりません。   
*subformName*引数が渡されると、**OBJECT Get pointer**コマンドはまずカレントフォーム内で*subformName*という名称のサブフォームを探し、そしてその中で*objectName*という名称のオブジェクトを探します。このオブジェクトが見つかると、このオブジェクトの変数へのポインタを返します。 

#### 例題 

同じ親フォーム上でサブフォームとして2回使用される"SF"フォームがあります。サブフォームオブジェクトにはそれぞれ"SF1"と"SF2"という名前が与えられます。"SF"フォームには*CurrentValue*という名称のオブジェクトがあります。親フォームのフォームメソッドの"On Load"フォームイベントで、SF1の*CurrentValue*オブジェクトを"January"に、SF2のそれを"February"に初期化します: 

```4d
 var $Ptr : Pointer
 $Ptr:=OBJECT Get pointer(Object named;"CurrentValue";"SF1")
 $Ptr->:="January"
 $Ptr:=OBJECT Get pointer(Object named;"CurrentValue";"SF2")
 $Ptr->:="February"
```

#### 参照 

[Focus object](focus-object.md)  
*Form Objects (Access)*  
[OBJECT Get name](object-get-name.md)  
[OBJECT Get subform container value](object-get-subform-container-value.md)  
[Self](self.md)  
*オブジェクト(フォーム)*  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1124 |
| スレッドセーフである | &cross; |


