---
id: "null"
title: "Null"
slug: /commands/null
displayed_sidebar: docs
---

<!--REF #_command_.Null.Syntax-->**Null**  : Null<!-- END REF-->
<!--REF #_command_.Null.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Null | &#8592; | Null値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Null.Summary-->**Null** は、Null 型の値**null** を返します。<!-- END REF-->

この関数を使用すると、以下のランゲージ要素に**null** 値を割り当てる、あるいは**null** 値と比較することができます:

| **ランゲージ要素**                                | **補足**                                                                                                                                                                           |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| オブジェクトプロパティ値                               | **Null** をオブジェクトプロパティと比較すると、プロパティ値がnull あるいはプロパティがオブジェクト内に存在しない場合にtrue を返します。                                                                                                    |
| オブジェクトプロパティ値                               | **Null** をオブジェクトプロパティと比較すると、プロパティ値がnull の場合にはtrue、それ以外の場合にはfalseが返されます。コードの単純化のため、**Null** をオブジェクト内に存在しないプロパティ(つまり[Undefined](undefined.md))と比較した場合にもtrue を返します。詳細は例題4を参照してください。 |
| コレクション要素                                   | コレクションが連続しない要素を追加したことで拡張されたとき、その中間の要素は全て**null** 値を自動的に受け取ります。                                                                                                                   |
| オブジェクト変数(*C\_OBJECT*)         | 以下の(\*)を参照のこと                                                                                                                                                                    |
| コレクション変数(*C\_COLLECTION*) | 以下の(\*)を参照のこと                                                                                                                                                                    |
| ポインター変数(*C\_POINTER*)        | 以下の(\*)を参照のこと                                                                                                                                                                    |
| ピクチャー変数(*C\_PICTURE*)        | (\*) これらの型の変数に**null** 値を割り当てると、コンテンツがクリアされます。この場合、[CLEAR VARIABLE](clear-variable.md) コマンドを呼び出すのと同じ効果があります。                                                                     |
| バリアント変数(*C\_VARIANT*)        |                                                                                                                                                                                  |

**Null** 値は引数としてメソッドに渡したり、あるいは戻り値として返すことはできません。

**注:** このコマンドはスカラーデータベースフィールドと使用することはできません。データベース内のNull 値はSQL エンジンによって管理されており、[Is field value Null](is-field-value-null.md) と[SET FIELD VALUE NULL](set-field-value-null.md) コマンドを通して管理されているからです。

#### 例題 1 

**null** 値をオブジェクトプロパティに割り当ててテストをしたい場合を考えます:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 If(vEmp.children=Null) //true
 End if
 If(vEmp.name=Null) //false
 End if
 If(vEmp.parent=Null) //true
 End if
```

**注:** この例題ではデータベースでオブジェクト記法が有効化されている必要があります。

#### 例題 2 

コレクション要素に**null** 値を割り当てて比較をしたい場合を考えます:

```4d
 var myCol : Collection
 myCol:=New collection(10;20;Null)
 ...
 If(myCol[2]=Null)
  // 第3要素がnull であるなら
    ...
 End if
```

#### 例題 3 

以下の例では、**null** 値を変数に割り当てて比較する様々な方法を紹介しています:

```4d
  //オブジェクト変数
 var $o : Object
 $o:=New object
 $o:=Null //CLEAR VARIABLE($o) に相等
 If($o#Null) //If (OB Is defined($o)) に相等
 End if
```

```4d
  //コレクション変数
 var $c : Collection
 $c:=New collection
 $c:=Null //CLEAR VARIABLE($c) に相等
 If($c#Null)
 End if
```

```4d
  //ポインター変数
 var $p : Pointer
 $p:=->$v
 $p:=Null //CLEAR VARIABLE($p) に相等
 If($p=Null) //If (Is Nil pointer($p)) に相等
 End if
```

```4d
  //ピクチャー変数
 var $i : Picture
 $i:=$vpicture
 $i:=Null //CLEAR VARIABLE($i) に相等
 If($i#Null) //If (Picture size($i)#0) に相等
 End if
```

#### 例題 4 

オブジェクトプロパティを対象に、このコマンドおよび [Null](null.md) コマンドを使用した場合の結果の例です:

```4d
 var vEmp : Object
 vEmp:=New object
 vEmp.name:="Smith"
 vEmp.children:=Null
 
 $undefined:=Null(vEmp.name) // False
 $null:=(vEmp.name=Null) //False
 
 $undefined:=Null(vEmp.children) // False
 $null:=(vEmp.children=Null) //True
 
 $undefined:=Null(vEmp.parent) // True
 $null:=(vEmp.parent=Null) //True
```

#### 参照 

[Is field value Null](is-field-value-null.md)  
[OB SET NULL](ob-set-null.md)  
[SET FIELD VALUE NULL](set-field-value-null.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1517 |
| スレッドセーフである | &check; |


