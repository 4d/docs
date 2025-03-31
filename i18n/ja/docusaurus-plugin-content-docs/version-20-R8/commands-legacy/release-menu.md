---
id: release-menu
title: RELEASE MENU
slug: /commands/release-menu
displayed_sidebar: docs
---

<!--REF #_command_.RELEASE MENU.Syntax-->**RELEASE MENU** ( *menu* )<!-- END REF-->
<!--REF #_command_.RELEASE MENU.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| menu | Text | &#8594;  | メニュー参照 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.RELEASE MENU.Summary-->RELEASE MENU コマンドは*menu* に渡したIDを持つメニューをメモリから解放します。<!-- END REF-->このメニューは[Create menu](create-menu.md "Create menu") コマンドで作成されたものでなければなりません。以下のルールが適用されます: 各[Create menu](create-menu.md)に対応する[RELEASE MENU](release-menu.md)コマンドが呼び出されなければなりません。

このコマンドは*menu*メニューのすべてのインスタンスを、すべてのプロセスのすべてのメニューバーから取り除きます。メニューが使用中のメニューバーに属する場合、引き続き使用することはできますが、変更することはできなくなります。このメニューは、それがメニューバーに現れなくなった後に、実際にメモリから取り除かれます。

このコマンドはメニューバーとして使用されるメニューに使用できます。

*menu*により使用されるサブメニューが直接[Create menu](create-menu.md)コマンドで作成されていた場合は、取り除かれません。この場合個々に取り除く必要があります (先のルールが適用されます)。しかしサブメニューが既存のメニューの複製である場合、[RELEASE MENU](release-menu.md)で取り除くことはできません。4Dが自動で取り除きます。

#### 例題 

この例題では、このコマンドの異なる用法を示します:

```4d
 newMenu:=Create menu
 APPEND MENU ITEM(newMenu;"Test1")
 subMenu:=Create menu
 APPEND MENU ITEM(subMenu;"SubTest1")
 APPEND MENU ITEM(subMenu;"SubTest2") // サブメニューに項目を追加する
 
 APPEND MENU ITEM(newMenu;"Test2";subMenu) // メニューにサブメニューを追加
 
  // この時点でサブメニューがメニューに追加されています。あとでこのサブメニューを使用しなのであれば、この時点で削除を行うことができます。
  // 削除を行っても即座にsubMenuが消去されるわけではありません。それはサブメニューがまだnewMenuにより使用されているからです。subMenuはnewMenuが削除されたときに、削除されます。
  // ここでサブメニューを削除することでメモリを節約できます。
 RELEASE MENU(subMenu)
 
 $result1:=Dynamic pop up menu(newMenu) // メニューを使用する
 copyMenu:=Create menu(newMenu) // newMenuをコピーして新しいメニューを作成する (subMenuもコピーされます)
 RELEASE MENU(newMenu) // newMenuはもう必要ありません
 
 $result2:=Dynamic pop up menu(copyMenu)
 RELEASE MENU(copyMenu)
  // copyMenuのサブメニューについて考慮する必要はありません。サブメニューはCreate menuを使用して作成されたものではないからです。
  // 従うべきルールは、各Create menuに対応するRELEASE MENUを呼び出すことです。
```

#### 参照 

[Create menu](create-menu.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 978 |
| スレッドセーフである | &cross; |


