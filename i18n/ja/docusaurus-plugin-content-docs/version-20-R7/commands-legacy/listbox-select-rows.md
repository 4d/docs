---
id: listbox-select-rows
title: LISTBOX SELECT ROWS
slug: /commands/listbox-select-rows
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SELECT ROWS.Syntax-->**LISTBOX SELECT ROWS** ( {* ;} *object* ; *selection* {; *action*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SELECT ROWS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時、 Object はオブジェクト名(文字列) 省略時、 Object は変数 |
| object | any | &#8594;  | オブジェクト名(* 指定時)、 または変数(* 省略時) |
| selection | Object, Collection | &#8594;  | 選択する行を指定するオブジェクトまたはコレクション |
| action | Integer | &#8594;  | lk replace selection (省略時のデフォルト)、lk add to selection、lk remove from selection |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.LISTBOX SELECT ROWS.Summary-->**LISTBOX SELECT ROWS** コマンドはエンティティセレクション型リストボックス/コレクション型リストボックスにおいて、*selection* 引数で指定したエンティティまたはオブジェクトに対応する行を選択します。<!-- END REF-->

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数で変数を指定します。この場合、文字列ではなく変数参照を渡します。オブジェクト名の詳細については、*オブジェクトプロパティ* の章を参照してください。

*selection* 引数には、リストボックスのタイプに応じて、Object またはCollection を渡してください:

**エンティティセレクション型リストボックスの場合**

**エンティティセレクション型リストボックス**に対しては、リストボックスのものと同じデータクラスからのエンティティを格納したオブジェクトを渡します。*selection* 引数がリストボックスのものとは異なるデータクラスからのエンティティセレクションオブジェクトだった場合、エラーが返されます。

**コレクション型リストボックスの場合**

コレクション型リストボックスに対しては、リストボックスに属しているオブジェクトのサブコレクションを渡します。リストボックスにスカラー値が格納されている場合、値のサブコレクションを渡します。

**注:**

* *selection* 引数の中身が有効なエンティティセレクションオブジェクト/コレクションではなかった場合、エラーが返されます。
* *selection* 引数の中身が空のエンティティセレクション/コレクションだった場合、デフォルトでリストボックスの全ての行が選択解除されます(以下の"replace" アクションに相当、以下参照)。その他のアクションのについては、コマンドは何もしません。
* *selection* 引数の中身がリストボックスに表示されていないエンティティ/要素だった場合、それは無視されます。

任意の*action* 引数を渡した場合、リストボックスに選択行が既に存在していた場合の選択アクションを定義することができます。この引数には(“*List Box*” テーマ内にある)以下の値または定数のいづれか一つを渡すことができます:

| 定数                       | 型    | 値 | コメント                                                                                                   |
| ------------------------ | ---- | - | ------------------------------------------------------------------------------------------------------ |
| lk add to selection      | 倍長整数 | 1 | 選択された行は既存の選択行に追加されます。指定した行が既存の選択に属している場合、コマンドは何も行いません。                                                 |
| lk remove from selection | 倍長整数 | 2 | 指定された行は既存の選択行から取り除かれます。指定した行が既存の選択に属さない場合、コマンドは何も行いません。                                                |
| lk replace selection     | 倍長整数 | 0 | 選択された行が新しい選択行となり、既存のものと置き換えられます。このコマンドは、ユーザが行をクリックした場合と同じ結果になります。これは (*action* 引数が省略された時の) デフォルトの動作です。 |

*action* 引数が省略されていた場合、デフォルトで、コマンドは*selection* 引数で定義されている行で選択行を置き換えます。

**注:** コマンドはそれぞれのオブジェクトまたはエンティティがリストボックス内において一度しか表示されていないという前提で実行されます。

#### 例題 1 

以下のコードは、一回のサーバーリクエストだけでエンティティセレクション内にある請求書を選択することができます:

```4d
  // このフォームのOn Load イベントにおいて、次のコードが実行されているとする: Form.invoices:=ds.Invoices.all()
  // "Invoices"リストボックスにはForm.invoices のエンティティセレクションを表示しているとする
 
 var $cash : Object
 var $card : Object
 
  // 現金で支払いが行われた請求書を選択
 $cash:=Form.invoices.query("paymentMethod=:1";"Cash")
 LISTBOX SELECT ROWS(*;"Invoices";$cash;lk replace selection)
```

#### 例題 2 

オブジェクトのコレクションがあり、指定された名前の生徒を選択行に追加したい場合を考えます:

```4d
 var $name : Text
 $name:=Request("Enter a name")
 If(OK=1)
  // Form.studentsColl はオブジェクトのコレクション
    $selection:=Form.studentsColl.query("lastname = :1";$name)
    LISTBOX SELECT ROWS(*;"LBStudents";$selection;lk add selection)
 End if
```

#### 参照 

[LISTBOX SELECT ROW](listbox-select-row.md)  