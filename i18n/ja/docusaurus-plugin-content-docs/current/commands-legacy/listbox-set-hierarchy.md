---
id: listbox-set-hierarchy
title: LISTBOX SET HIERARCHY
slug: /commands/listbox-set-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HIERARCHY.Syntax-->**LISTBOX SET HIERARCHY** ( {* ;} *object* ; *hierarchical* {; *hierarchy*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HIERARCHY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、objectはオブジェクト名 (文字列)<br/>省略時、objectは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>変数 (* 省略時) |
| hierarchical | Boolean | &#8594;  | True = 階層リストボックス<br/>False = 非階層リストボックス |
| hierarchy | Pointer array | &#8594;  | ポインタの配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.LISTBOX SET HIERARCHY.Summary-->LISTBOX SET HIERARCHY コマンドを使用して*object*と*\**で指定されたリストボックスを階層モードにするか非階層モードにするか設定できます。<!-- END REF-->. 

**Note:**このコマンドは配列を表示するリストボックスに対してのみ機能します。セレクション表示モードのリストボックスに対してこのコマンドが適用された場合、なにも行いません。 

オプションの*\** 引数を渡した場合、*object*引数はオブジェクト名 (文字列) です。この引数を渡さない場合*object*は変数です。この場合、文字列ではなく変数参照を渡します。  
  
ブール型の*hierarchical*引数を使用してリストボックスのモードを指定します:
* Trueを渡すと、リストボックスは階層モードで表示されます。
* Falseを渡すと、リストボックスは (階層モードではない) 標準配列モードで表示されます。

階層モードのリストボックスを渡すと、特定のプロパティは自動で制限されます。詳しくは*階層リストボックスの管理*を参照してください。

*hierarchy*引数には、階層を構成するために使用されるリストボックスの配列を指定します (例題参照)。 リストボックスを階層モードで表示し、この引数を省略すると:

* すでにリストボックスが階層モードの場合、コマンドはなにも行いません。
* リストボックスが現在非階層モードで、過去にも階層であると設定されたことがなければ、デフォルトで最初の配列が階層として使用されます。
* リストボックスが現在非階層モードで、以前に階層モードとして設定されたことがあれば、最後の時点の階層が再構築されます。

#### 例題 

aCountry、aRegion、そしてaCity配列をリストボックスの階層として定義する:

```4d
 ARRAY POINTER($ArrHierarch;3)
 $ArrHierarch{1}:=->aCountry // 一番目のブレークレベル
 $ArrHierarch{2}:=->aRegion // 二番目のブレークレベル
 $ArrHierarch{3}:=->aCity // 三番目のブレークレベル
 LISTBOX SET HIERARCHY(*;"mylistbox";True;$ArrHierarch)
```

#### 参照 

[LISTBOX GET HIERARCHY](listbox-get-hierarchy.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1098 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


