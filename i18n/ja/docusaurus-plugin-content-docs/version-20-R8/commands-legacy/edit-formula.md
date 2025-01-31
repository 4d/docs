---
id: edit-formula
title: EDIT FORMULA
slug: /commands/edit-formula
displayed_sidebar: docs
---

<!--REF #_command_.EDIT FORMULA.Syntax-->**EDIT FORMULA** ( *aTable* ; *formula* )<!-- END REF-->
<!--REF #_command_.EDIT FORMULA.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | フォーミュラエディタにデフォルトで表示するテーブル |
| formula | Text | &#8594;  | フォーミュラエディタに表示するフォーミュラを含む変 またはエディタの実を表示するには "" |
| &#8592; | ユーザが確定したフォーミュラ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.EDIT FORMULA.Summary-->**EDIT FORMULA**コマンドを使用してフォーミュラーエディターを開き、ユーザーはフォーミュラーを作成したり変更したりできます。<!-- END REF-->次の項目をデフォルトとして表示することができます。

* 左側のリストには引数 *aTable* に渡したテーブルのフィールド。
* フォーミュラーエリアには、*formula* 変数に格納されたフォーミュラー。*formula*に空の文字列を渡した場合、デフォルトのフォーミュラーは表示されず、フォーミュラーエディターのみが表示されます。

ユーザーは表示された*formula*を変更して保存できます。また新規にフォーミュラーを記述したりロードしたりすることもできます。ユーザーがダイアログを受け入れると、システム変数OKに1が設定され、*formula* 変数にはユーザーが決定したフォーミュラーが格納されます。ユーザーがフォーミュラーをキャンセルすると、システム変数OKに0が設定され、*formula* 変数は変更されません。

**Note:**

* デフォルトで、すべてのユーザーに対してメソッドとコマンドの使用は制限されます。（4D2004.4以降のバージョンにて作成されたデータベースで、DesignerとAdministratorを除く）。このメカニズムが有効であるとき、開発者は[SET ALLOWED METHODS](../commands/set-allowed-methods.md)コマンドを使用して、ユーザが利用可能な要素を明示的に指定する必要があります。もし*formula*が、[SET ALLOWED METHODS](../commands/set-allowed-methods.md) コマンドを使用してフォーミュラエディターで許可されていないメソッドを呼び出すと、シンタックスエラーが生成され、ダイアログボックスを受け入れることはできません。
* デフォルトでは、フォーミュラーエディターはメニューバーと関連付いていません。フォーミュラーエディター内でカット・コピー・ペースト等のショートカットを使うには、呼び出しプロセスにおいて標準の**編集**メニューを設定しておく必要があります。
* [SET TABLE TITLES](set-table-titles.md) および[SET FIELD TITLES](set-field-titles.md) コマンドによって定義されたバーチャルストラクチャーは(あった場合)、*formula* 変数内で使用してはいけません。また返される値においても4D はバーチャルストラクチャーを使用しません。バーチャルストラクチャーはフォーミュラエディターのダイアログボックス内においてのみ使用されます。

ダイアログボックスが確定したとしても、*formula*が実行されないことを心に留めてください。フォーミュラの検証と変数の中身が更新されるだけです。*formula*を実行する必要がある場合は、[EXECUTE FORMULA](execute-formula.md) コマンドを使用しなければなりません。

#### 例題 

事前に入力されたフォーミュラは使用せず、\[Employees\]テーブルを使用してフォーミュラエディタを表示します:

```4d
 $myFormula:=""
 EDIT FORMULA([Employees];$myFormula)
 If(OK=1)
    APPLY TO SELECTION([Employees];EXECUTE FORMULA($myFormula))
 End if
```

#### システム変数およびセット 

ユーザがダイアログボックスを受け入れるとシステム変数OKに1が、キャンセルすると0が設定されます。

#### 参照 

[APPLY TO SELECTION](apply-to-selection.md)  
[EXECUTE FORMULA](execute-formula.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 806 |
| スレッドセーフである | &cross; |
| システム変数を更新する | OK |


