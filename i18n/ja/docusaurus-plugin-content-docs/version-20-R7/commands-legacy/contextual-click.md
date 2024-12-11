---
id: contextual-click
title: Contextual click
slug: /commands/contextual-click
displayed_sidebar: docs
---

<!--REF #_command_.Contextual click.Syntax-->**Contextual click**  : Boolean<!-- END REF-->
<!--REF #_command_.Contextual click.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | コンテキストクリックを検知した場合True、 そうでなければFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Contextual click.Summary-->Contextual click コマンドは、コンテキストクリックが行われた場合に[True](true.md "True")を返します。<!-- END REF-->

* WindowsとMac OSにおいて、コンテキストクリックはマウスの右ボタンを使用して行います。
* Mac OSにおいて、コンテキストクリックは、**Control+クリック**でも行うことができます。

このコマンドはOn clickedフォームイベントのコンテキストで使用します。したがって、デザインモードにおいて、このイベントがフォームや特定のオブジェクトのプロパティで適切に選択されていることを確認する必要があります。

#### 例題 

このメソッドをスクロールエリアと組み合わせて使用すると、コンテキストメニューを用いて配列要素の値を変更することができます: 

```4d
 If(Contextual click)
    If(Pop up menu("True;False")=1)
       myArray{myArray}:="True"
    Else
       myArray{myArray}:="False"
    End if
 End if
```

#### 参照 

[Form event code](form-event-code.md)  
[Right click](right-click.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 713 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


