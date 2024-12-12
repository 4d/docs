---
id: undefined
title: Undefined
slug: /commands/undefined
displayed_sidebar: docs
---

<!--REF #_command_.Undefined.Syntax-->**Undefined** ( *expression* ) : Boolean<!-- END REF-->
<!--REF #_command_.Undefined.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| expression | Expression | &#8594;  | テストしたい結果の値を返す式 |
| 戻り値 | Boolean | &#8592; | True = 変数は現在未定義である False = 変数は現在定義されている |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Undefined.Summary-->Undefined コマンドは、*expression* の評価の結果が未定義の値である場合には[True](true.md "True")を返し、それ以外の場合には[False](false.md "False")を返します。<!-- END REF-->

* 変数が定義されるのは、コンパイラ命令で変数が作成された場合や値が変数に代入された場合です。その他の場合は定義されません。データベースがコンパイルされている場合、Undefined コマンドはすべての変数に対して[False](false.md "False") を返します。
* オブジェクト内に存在しないオブジェクトプロパティは未定義です。
* Undefined はフィールド参照に対しては常に[False](false.md "False") を返します。

**注:** **Undefined** は*expression* 引数を評価するという点に注意して下さい。以下の宣言は同等の意味を持ちます:  

```4d
 $result:=Undefined($exp)
  // 以下と同じ結果:
 $result:=(Value type($exp)=Is undefined)
```

一部の場合において、変数の評価が行われて欲しくないこともあるかもしれません(例えば、変数が未定義があるかどうかをチェックするために変数へのポインターを使用している場合など)。その場合には、以下のように書く必要があります:  

```4d
 $result:=(Type($ptr->)=Is undefined) // ポイントしている変数が存在しない場合はtrue(エラーなし)
```

#### 例題 

オブジェクトプロパティを対象に、このコマンドおよび [Null](null.md) コマンドを使用した場合の結果の例です:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 $undefined:=Undefined(vEmp.name) // False
 $null:=(vEmp.name=Null) //False
 
 $undefined:=Undefined(vEmp.children) // False
 $null:=(vEmp.children=Null) //True
 
 $undefined:=Undefined(vEmp.parent) // True
 $null:=(vEmp.parent=Null) //True
```

#### 参照 

[CLEAR VARIABLE](clear-variable.md)  