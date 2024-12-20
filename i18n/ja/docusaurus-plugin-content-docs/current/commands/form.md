---
id: form
title: フォーム
displayed_sidebar: docs
---

<!--REF #_command_.Form.Syntax-->**Form**  : Object<!-- END REF-->

<!--REF #_command_.Form.Params-->

| 引数  | 型      |   | 説明                |
| --- | ------ | - | ----------------- |
| 戻り値 | Object | ← | カレントのフォームのフォームデータ |

<!-- END REF-->

*このコマンドはスレッドセーフではないので、プリエンプティブなコードでは使用できません。*

<details><summary>履歴</summary>

| リリース  | 内容           |
| ----- | ------------ |
| 20 R8 | フォームクラスのサポート |

</details>

#### 説明

<!--REF #_command_.Form.Summary-->The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).<!-- END REF-->The **Form** command returns the object associated with the current form (instantiated from the *formData* parameter or the user class assigned in the Form editor).**Form** コマンドはカレントフォームに割り当てられている(*formData* 引数、またはフォームエディターで割り当てられたユーザークラスによってインスタンス化された)オブジェクトを返します。 4D は以下の場合にはカレントフォームに自動的にオブジェクトを割り当てます: 4D は以下の場合にはカレントフォームに自動的にオブジェクトを割り当てます:

- カレントフォームが、[`DIALOG`](dialog.md)、[`Print form`](print-form.md) あるいは [`FORM LOAD`](form-load.md) コマンドのいずれか一つによってロードされた場合。
- カレントフォームがサブフォームである場合。
- テーブルフォームが現在画面上に表示されている場合。

##### コマンド(DIALOGなど)

カレントのフォームが[DIALOG](dialog.md)、[`Print form`](print-form.md) あるいは [`FORM LOAD`](form-load.md) コマンドによって表示あるいはロードされていた場合、は以下のいずれかのものを返します:

- コマンドに引数として渡された*formData* オブジェクト(あれば)。
- [フォームに割り当てられているユーザークラス](../FormEditor/properties_FormProperties.md#form-class) のインスタンス化されたオブジェクト(あれば)。
- または、空のオブジェクト。

##### サブフォーム

カレントフォームがサブフォームの場合、返されるオブジェクトは親コンテナ変数に依存します:

- 親コンテナに割り当てられている変数がオブジェクト型であった場合、**Form** はその変数の値を返します。\
  この場合、**Form** から返されるオブジェクトは、以下の式から返されるものと同じになります:\
  In the context of an input form displayed from an output form (i.e. after a double-click on a record), the returned object contains the following property:

```4d
 (OBJECT Get pointer(Object subform container))->  
```

- 親コンテナに割り当てられている変数がオブジェクト型として型指定されていない場合、**Form** は、サブフォームのコンテキストで4D によって維持される、空のオブジェクトを返します。

より詳細な情報については、*サブフォームページ* の章を参照してください。

##### テーブルフォーム

**Form** は画面に表示されているテーブルフォームに割り当てられているオブジェクトを返します。 **Form** は画面に表示されているテーブルフォームに割り当てられているオブジェクトを返します。 出力フォームから表示された入力フォームのコンテキスト(つまりレコードをダブルクリックした後)の場合、返されるオブジェクトには以下のプロパティが格納されています:

| **プロパティ**  | **型**  | **Description**         |
| ---------- | ------ | ----------------------- |
| parentForm | object | 親出力フォームの**Form** オブジェクト |

#### 例題

人物のレコードを表示しているフォームにおいて、"Check children" ボタンを押すとその人物の子供の名前と年齢を検証あるいは変更するダイアログが開く場合を考えます:

![](../assets/en/commands/pict3542015.en.png)

**注:** "Children" オブジェクトフィールドはこの例題においての構造を示すために表示されているだけです。

検証フォームでは、入力に対していくつかのフォームオブジェクトプロパティを割り当てているものとします:

![](../assets/en/commands/pict3541682.en.png)

"Check children" ボタンの中身のコードは以下のようになります:

```4d
 var $win;$n;$i : Integer
 var $save : Boolean
 ARRAY OBJECT($children;0)
 OB GET ARRAY([Person]Children;"children";$children) //children コレクションを取得
 $save:=False //save 変数を初期化
 
 $n:=Size of array($children)
 If($n>0)
    $win:=Open form window("Edit_Children";Movable form dialog box)
    SET WINDOW TITLE("Check children for "+[Person]Name)
    For($i;1;$n) // それぞれの子供に対して
       DIALOG("Edit_Children";$children{$i}) //値が入ったダイアログを表示
       If(OK=1) // ユーザーがOK をクリックした
          $save:=True
       End if
    End for
    If($save=True)
       [Person]Children:=[Person]Children // 強制的にオブジェクトフィールドを更新
    End if
    CLOSE WINDOW($win)
 Else
    ALERT("No child to check.")
 End if
```

フォームはそれぞれの子供についての情報を表示します:

![](../assets/en/commands/pict3515152.en.png)

値が変更されてOKボタンがクリックされた場合、フィールドは更新されます(その後、親のレコードも保存される必要があります)。

#### 参照

[DIALOG](dialog.md)
