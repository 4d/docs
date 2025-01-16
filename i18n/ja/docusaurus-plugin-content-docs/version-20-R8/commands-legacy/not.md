---
id: not
title: Not
slug: /commands/not
displayed_sidebar: docs
---

<!--REF #_command_.Not.Syntax-->**Not** ( *boolean* ) : Boolean<!-- END REF-->
<!--REF #_command_.Not.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| boolean | Boolean | &#8594;  | 否定を求めるブール値 |
| 戻り値 | Boolean | &#8592; | 反対のブール値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Not.Summary-->Not は、*boolean*の否定を返します。<!-- END REF-->TrueをFalseに、FalseをTrueにします。

#### 例題 

以下の例は、変数にTrueを代入し変数の値をFalseにした後、再びTrueにします。

```4d
 vResult:=True // vResult をTrueに設定
 vResult:=Not(vResult) // vResult をFalseに設定
 vResult:=Not(vResult) // vResult をTrueに設定
```

#### 参照 

[False](false.md)  
[True](true.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 34 |
| スレッドセーフである | &check; |


