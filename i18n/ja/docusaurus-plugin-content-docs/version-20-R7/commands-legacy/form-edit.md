---
id: form-edit
title: FORM EDIT
slug: /commands/form-edit
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*aTable* ;} *form* )<!-- END REF-->
<!--REF #_command_.FORM EDIT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | 指定時はフォームが所属するテーブル、省略時にはデフォルトテーブルを指定またはプロジェクトフォームを使用 |
| form | Text | &#8594;  | フォーム名 |

<!-- END REF-->

## 説明 

<!--REF #_command_.FORM EDIT.Summary-->**FORM EDIT** コマンドは*aTable* 引数で指定したテーブルに関連づけられている、*form* 引数で指定したフォームを4D フォームエディターで開きます。<!-- END REF-->このとき、デザイン環境へのアクセスが必要である点に注意してください。ない場合には、エラー -9804("フォームを開けません")エラーが生成されます。

このコマンドは非同期です。つまりこのコマンドは呼び出されたあとすぐに呼び出し元メソッドへと戻り、フォームが開かれるのを待つことはしないということです。

任意の*aTable* 引数を渡した場合、そのテーブルに関連づけられたフォームを*form* 引数で指定します。この引数を省略した場合、*form* 引数はプロジェクトフォームであることを指定します。

*form* 引数には、4D フォームエディターで開くフォームの名前を渡します。存在しない名前を渡した場合、エラー 81("フォームが見つかりません")が生成されます。

## 例題 

*Contacts* テーブルの*Address* フォームを開きたい場合:

```4d
 FORM EDIT([Contacts];"Address")
```

*ContactList* プロジェクトフォームを開きたい場合:

```4d
 FORM EDIT("ContactList")
```

## 参照 

*デザインオブジェクトアクセスコマンド*  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1749 |
| スレッドセーフである | &cross; |


