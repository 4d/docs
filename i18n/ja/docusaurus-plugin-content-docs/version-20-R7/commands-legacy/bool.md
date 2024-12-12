---
id: bool
title: Bool
slug: /commands/bool
displayed_sidebar: docs
---

<!--REF #_command_.Bool.Syntax-->**Bool** ( *expression* ) : Boolean<!-- END REF-->
<!--REF #_command_.Bool.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | ブール形式で返したい式 |
| 戻り値 | Boolean | &#8592; | 式のブール型 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Bool.Summary-->**Bool** コマンドは、*expression* 引数に渡した式のブール形式を返します。<!-- END REF-->

このコマンドは、*expression* 引数に渡した式の戻り値の型に応じて以下のような値を返します:

| **式の戻り値の型** | **Bool コマンドの結果**            |
| ----------- | --------------------------- |
| 未定義         | False                       |
| Null        | False                       |
| ブール         | falseの場合はFalse、それ以外の場合はTrue |
| 数値          | 0の場合はFalse、それ以外の場合はTrue     |
| 他の型         | False                       |

このコマンドは、コードがブール値の結果を期待している場合に、式の評価のが異なる型になりうる場合などに有効です(例・式が評価の結果**null**あるいは**未定義**を返す場合など)。

#### 例題 

オブジェクトフィールド属性の中身に応じて値を選択し、その属性がない場合も想定するとします:

```4d
 var $married : Text
 $married:=Choose(Bool([Person]data.married);"Married";"Single")
  //フィールド内で"married" 属性が見つからなければ "Single"
 ALERT("This person is "+$married)
```

#### 参照 

[Date](date.md)  
[Num](num.md)  
[String](string.md)  
[Time](time.md)  