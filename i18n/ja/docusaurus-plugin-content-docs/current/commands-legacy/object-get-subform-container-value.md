---
id: object-get-subform-container-value
title: OBJECT Get subform container value
slug: /commands/object-get-subform-container-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get subform container value.Syntax-->**OBJECT Get subform container value**  : any<!-- END REF-->
<!--REF #_command_.OBJECT Get subform container value.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | any | &#8592; | サブフォームコンテナデータソースのカレントの値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get subform container value.Summary-->**OBJECT Get subform container value** コマンドは親フォームに表示されたサブフォームコンテナにバインドされたデータソースのカレントの値を返します。<!-- END REF-->

このコマンドはサブフォームとして使用されているフォームのコンテキストにおいてのみ使用できます。それ以外のコンテキストにおいては、このコマンドは**Undefined** を返します。

* データソースが式の場合、コマンドは式のカレントの値を返します。これは最後に実行されたフォームイベントサイクルの後に評価された値です。
* データソースが配列の場合、コマンドは配列のインデックス(整数)を返します。

バインド変数とフォーム/サブフォームの相互作用についての詳細な情報については、developer.4d.com の*バインドされた変数あるいは式の管理* を参照してください。

#### 例題 

以下のようなメインフォームとサブフォームの両方に入力フォームオブエクトがある場合: 

![](../assets/en/commands/pict5864479.en.png)

メインフォーム内の入力オブジェクトとサブフォームオブジェクトは数値型の*Form.numeric* という式がバインドされています。

メインフォームの入力オブジェクトとサブフォームの入力オブジェクトは、どちらもプロパティリストで*On Data Change* イベントが設定されています。

サブフォームのフォームメソッドには以下のようなコードが書かれています: 

```4d
 If(Form event code=On bound variable change)
    Form.displayNumeric:=OBJECT Get subform container value
 End if
```

そしてサブフォーム内では、入力テキストオブジェクトメソッドには以下のようなコードが書かれています: 

```4d
 OBJECT SET SUBFORM CONTAINER VALUE(Form.displayNumeric)
```

結果として、メインフォームの入力オブジェクトの値を変更すると、サブフォームの入力オブジェクトの値も更新され、その逆も同じように更新されます。

#### 参照 

[Form](../commands/form.md)  
[OBJECT Get pointer](object-get-pointer.md)  
[OBJECT SET SUBFORM CONTAINER VALUE](object-set-subform-container-value.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1785 |
| スレッドセーフである | &cross; |


