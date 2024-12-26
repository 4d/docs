---
id: object-set-list-by-name
title: OBJECT SET LIST BY NAME
slug: /commands/object-set-list-by-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET LIST BY NAME.Syntax-->**OBJECT SET LIST BY NAME** ( {* ;} *object* {; *listType*}; *list* )<!-- END REF-->
<!--REF #_command_.OBJECT SET LIST BY NAME.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時, Objectはオブジェクト名 (文字列) 省略時, Objectはフィールドまたは変数 |
| object | any | &#8594;  | オブジェクト名 (* 指定時), または フィールドまたは変数 (* 省略時) |
| listType | Integer | &#8594;  | リストの種類: 選択リスト、必須リスト、除外リスト |
| list | Text | &#8594;  | 選択リストとして使用するリストの名前 (デザインモードで定義) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET LIST BY NAME.Summary-->**OBJECT SET LIST BY NAME**コマンドは、*object*引数で指定されたオブジェクトあるいはオブジェクトグループの選択リストを、*list*に渡したリスト (デザインモードのリストエディタで定義) に設定あるいは置き換えます。<!-- END REF--> *list* 引数に名前を渡すリストは、リストエディターまたはデザインモードを使用して予め作成されている必要があります。

このコマンドは入力フォーム、ダイアログフォームにおいて、テキストが入力可能な変数またはフィールドに適用することが出来ます。

オプションの *\** 引数を指定した場合、*object*はオブジェクト名です (文字列) 。オプションの *\** 引数を省略すると、*object*はフィールドまたは変数です。この場合、文字列ではなくフィールドまたは変数参照 (フィールドまたは変数のみ) を指定します。

**注:** このコマンドはサブフォームリストフォームのフィールドには使用できません。

**OBJECT SET LIST BY NAME** コマンドは、*object* 引数と *\** によって指定されたオブジェクトに関連付けられた全ての型のリスト(選択リスト、指定リスト、除外リスト)を設定または置き換えることが出来るようになりました。そのためには、*listType* 引数に、 "*Form Objects (Properties)*" テーマ内の以下の定数のいづれか一つを渡して下さい。:

| 定数            | 型    | 値 | コメント                                  |
| ------------- | ---- | - | ------------------------------------- |
| Choice list   | 倍長整数 | 0 | 選択できる値のリスト(プロパティリスト内の「選択リスト」)。(デフォルト) |
| Excluded list | 倍長整数 | 2 | 入力できない値のリスト。(プロパティリスト内の「除外リスト」)       |
| Required list | 倍長整数 | 1 | 入力可能な値のリスト(プロパティリストの"指定リスト"オプション)。    |

この引数を省略した場合、自動的に 0 (Choice list) を渡したものとみなされます。

カレントプロセスにおいて、*object*, と関連付けられたリストとの関連付けを解除するためには、解除したい型のリストに対して *list* 引数に空の文字列 ("")を渡して下さい。

値の既存のリストは、そのリストがフォームオブジェクトに割り当てられた方法によって上書きされます:

* 選択リストを使用した場合: リスト自身が置き換えられます
* 配列を使用した場合: リストは配列要素にコピーされます
* オブジェクトを使用した場合(*バイナリーデータベースではサポートされていません*): リストは、オブジェクト内の*values* プロパティのコレクション要素としてコピーされます

#### 例題 1 

以下の例は、Shipperフィールドに選択項目リストを設定します。船積みを夜間に行う場合、夜間に船積みすることができる船積み業者のリストを選択項目リストに設定します。それ以外の場合は通常の船積み業者に設定します:

```4d
 If([Shipments]Overnight)
    OBJECT SET LIST BY NAME([Shipments]Shipper;"Fast Shippers")
 Else
    OBJECT SET LIST BY NAME([Shipments]Shipper;"Normal Shippers")
 End if
```

#### 例題 2 

"color\_choice" というリストを、"DoorColor"という単純なポップアップ/ドロップダウンリストと関連付ける場合:

```4d
 OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"color_choice")
  // この場合、第3引数(定数)は省略することが出来ます。
```

#### 例題 3 

"color\_choice" というリストを "WallColor" というコンボボックスと関連付けたい場合を考えます。コンボボックスは入力可能なので、 "black"や "purple" と言った色が入力されないようにしたい場合、これらの色を "excl\_colors" というリストに入れて以下の様に除外します:

```4d
 OBJECT SET LIST BY NAME(*;"WallColor";Choice list;"color_choice")
 OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"excl_colors")
```

#### 例題 4 

これらのリストの関連付けを解除したい場合:

```4d
  // 選択リストの解除
 OBJECT SET LIST BY NAME(*;"DoorColor";Choice list;"")
  // 入力が許可されていない値(除外リスト)の解除
 OBJECT SET LIST BY NAME(*;"WallColor";Excluded list;"")
```

#### 参照 

[OBJECT Get list name](object-get-list-name.md)  
[OBJECT SET LIST BY REFERENCE](object-set-list-by-reference.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 237 |
| スレッドセーフである | &cross; |


