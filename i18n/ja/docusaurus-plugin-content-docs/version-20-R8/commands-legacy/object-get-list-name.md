---
id: object-get-list-name
title: OBJECT Get list name
slug: /commands/object-get-list-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get list name.Syntax-->**OBJECT Get list name** ( {* ;} *object* {; *listType*} ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get list name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: objectはオブジェクト名 (文字) <br/>省略時: objectは変数またはフィールド |
| object | any | &#8594;  | オブジェクト名 (* 指定時) または <br/>フィールドまたは変数 (* 省略時) |
| listType | Integer | &#8594;  | Type of list: Choice list, Required list or Excluded list |
| 戻り値 | Text | &#8592; | (デザインモードで指定された) 選択リストの名前 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get list name.Summary-->OBJECT Get list name コマンドは *object*で指定されたオブジェクトまたはオブジェクトグループに割り当てられた選択リストの名前を返します。<!-- END REF--> 4Dではフォームエディタあるいは [OBJECT SET LIST BY NAME](object-set-list-by-name.md) コマンドを使用してフォームオブジェクトに (デザインモードのリストエディタで作成された) 選択リストを割り当てることができます。

オプションの *\** 引数を渡すと、*object*引数はオブジェクト名 (文字) です。この引数を渡さないと、*object*はフィールドまたは変数です。この場合、文字ではなくフィールドまたは変数への参照 (フィールドまたは変数オブジェクトのみ) を渡します。

任意の *listType* 引数を使用して取得したいリストの型を指定することもできます。この引数を省略した場合、コマンドはデフォルトでオブジェクトに関連付けられた選択リスト(値のリスト)の名前を返します。"*Form Objects (Properties)*"テーマ内にある以下のいづれか一つの定数を *listType* 引数に渡すことによって、指定リストや除外リストの名前を取得することもできます:

| 定数            | 型    | 値 | コメント                                  |
| ------------- | ---- | - | ------------------------------------- |
| Choice list   | 倍長整数 | 0 | 選択できる値のリスト(プロパティリスト内の「選択リスト」)。(デフォルト) |
| Excluded list | 倍長整数 | 2 | 入力できない値のリスト。(プロパティリスト内の「除外リスト」)       |
| Required list | 倍長整数 | 1 | 入力可能な値のリスト(プロパティリストの"指定リスト"オプション)。    |

*object* で指定されたオブジェクトに指定されたリストが関連付けられていない場合、コマンドは空の文字列("")を返します。

#### 参照 

[OBJECT Get list reference](object-get-list-reference.md)  
[OBJECT SET LIST BY NAME](object-set-list-by-name.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1072 |
| スレッドセーフである | &cross; |


