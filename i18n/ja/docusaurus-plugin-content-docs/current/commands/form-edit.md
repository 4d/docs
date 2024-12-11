---
id: form-edit
title: FORM EDIT
displayed_sidebar: docs
---

<!--REF #_command_.FORM EDIT.Syntax-->**FORM EDIT** ( {*aTable* ;} *form* )<br/>**FORM EDIT** ( {*aTable* ;} *form* ; *object* )<!-- END REF-->

<!--REF #_command_.FORM EDIT.Params-->

| 引数     | 型    |   | 説明                                                |
| ------ | ---- | - | ------------------------------------------------- |
| aTable | テーブル | → | フォームの属するテーブルまたは 省略した場合はデフォルトテーブルまたは プロジェクトフォームを使用 |
| form   | Text | → | フォーム名                                             |
| object | Text | → | フォームオブジェクト名またはグループ名                               |

<!-- END REF-->

*このコマンドはスレッドセーフではないので、プリエンプティブなコードでは使用できません。*

<details><summary>履歴</summary>

| リリース  | 内容               |
| ----- | ---------------- |
| 20 R8 | *object* 引数のサポート |

</details>

#### 説明

<!--REF #_command_.FORM EDIT.Summary-->The **FORM EDIT** command opens the *form* associated to *aTable* in the 4D Form editor, with optionnally *object* selected.<!-- END REF-->**FORM EDIT** コマンドは*aTable* 引数で指定したテーブルに関連づけられている、*form* 引数で指定したフォームを4D フォームエディターで開きます。オプションとして、*object* 引数で指定したフォームオブジェクトを選択した状態で開くこともできます。 このとき、デザイン環境へのアクセスが必要である点に注意してください。ない場合には、エラー -9804("フォームを開けません")エラーが生成されます。

このコマンドは非同期です。つまりこのコマンドは呼び出されたあとすぐに呼び出し元メソッドへと戻り、フォームが開かれるのを待つことはしないということです。

任意の*aTable* 引数を渡した場合、そのテーブルに関連づけられたフォームを*form* 引数で指定します。 この引数を省略した場合、*form* 引数はプロジェクトフォームであることを指定します。

*form* 引数には、4D フォームエディターで開くフォームの名前を渡します。 存在しない名前を渡した場合、エラー 81("フォームが見つかりません")が生成されます。

オプションとして、引数にフォームオブジェクト名またはグループ名を渡すことで、4D フォームエディター内でそれ(またはそれら)を自動的に選択された状態にします。 この機能を使用することで、例えば、[`Compile project`](compile-project.md) から返された式のエラーに基づいたフォームをデバッグする場合などに時間を節約できます。

*form* のフォーム内にて*object* 引数で指定したフォームオブジェクトが見つからない場合でも、フォームは開かれエラーは特に返されません。

*form* で開いたフォーム内で全てのフォームオブジェクトの選択を解除したい場合には*object* 引数に空の文字列を渡します。

#### 例題

*Contacts* テーブルの*Address* フォームを開きたい場合を考えます:

```4d
 FORM EDIT([Contacts];"Address")
```

*ContactList* プロジェクトフォームを開きたい場合を考えます:

```4d
 FORM EDIT("ContactList")
```

*ContactPage* プロジェクトフォームを、"name-input" オブジェクトが選択された状態で開きたい場合を考えます:

```4d
 FORM EDIT("ContactList"; "name-input")
```

#### 参照

*デザインオブジェクトアクセスコマンド*
