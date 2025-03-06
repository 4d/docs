---
id: goto-object
title: GOTO OBJECT
slug: /commands/goto-object
displayed_sidebar: docs
---

<!--REF #_command_.GOTO OBJECT.Syntax-->**GOTO OBJECT** ( {* ;} *object* )<!-- END REF-->
<!--REF #_command_.GOTO OBJECT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定した場合 = objectはオブジェクト名 (文字列) 省略した場合 = object はフィールドまたは変数参照 |
| object | Field, Variable | &#8594;  | オブジェクト名 (* を指定した場合) または フィールドまたは変数 (* を省略した場合) |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GOTO OBJECT.Summary-->GOTO OBJECTコマンドは、フォームのアクティブエリアとしてデータ入力オブジェクト*object* を選択するために使用します。<!-- END REF-->これはユーザがフィールドや変数をクリックしたりタブでフォーカスを移動したりするのと同じです。

オプションの *\** 引数を渡した場合、文字列でオブジェクト名を *object* に渡します。オプションの *\** 引数を省略した場合、*object* にはフィールドまたは変数渡します。この場合文字列ではなく、フィールまたは変数参照を渡します。オブジェクト名に関する詳細はの節を参照してください。

カレントのフォームのオブジェクトからフォーカスを外すには、このコマンドに空のオブジェクト名を渡します (例題 2参照)。

GOTO OBJECT コマンドをサブフォームのコンテキストで利用できます。コマンドがサブフォームから呼び出されると、まずサブフォーム内でオブジェクトを探し、そしてなにも見つからなければ親フォーム内を検索します。

#### 例題 1 

GOTO OBJECTコマンドは以下のように使用します:   

```4d
 GOTO OBJECT([People]Name) // フィールド参照
 GOTO OBJECT(*;"AgeArea") // オブジェクト名
```

#### 例題 2 

フォーカスを外す: 

```4d
 GOTO OBJECT(*;"")
```

#### 例題 3 

[REJECT](reject.md "REJECT")コマンドの例題参照

#### 参照 

[CALL SUBFORM CONTAINER](call-subform-container.md)  
[REJECT](reject.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 206 |
| スレッドセーフである | &cross; |


