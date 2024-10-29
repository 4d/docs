---
id: vp-set-custom-functions
title: VP SET CUSTOM FUNCTIONS
---

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Syntax -->

**VP SET CUSTOM FUNCTIONS** ( *vpAreaName* : Text ; *formulaObj* : Object  ) <!-- END REF -->

<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Params -->

| 引数         | 型      |    | 説明                      |                  |
| ---------- | ------ | -- | ----------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名 |                  |
| formulaObj | オブジェクト | -> | フォーミュラオブジェクト            | <!-- END REF --> |

#### 説明

`VP SET CUSTOM FUNCTIONS` コマンドは、<!-- REF #_method_.VP SET CUSTOM FUNCTIONS.Summary -->4D View Pro フォーミュラから直接呼び出し可能な 4Dフォーミュラを指定します<!-- END REF -->。 カスタムのファンクションはドキュメント内に保存されていないので、`VP SET CUSTOM FUNCTIONS` は `On Load` フォームイベント内で呼び出される必要があります。

`VP SET CUSTOM FUNCTIONS` で指定されたフォーミュラは、最初の文字が入力されるとポップアップメニューに表示されます。 詳細については [式と関数](../formulas.md) を参照ください。

> `VP SET CUSTOM FUNCTIONS` が同一セッション中に同じエリアに対して複数回呼び出された場合、最後の呼び出しのみが有効になります。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*formulaObj* 引数として、4D View Pro フォーミュラから呼び出し可能な 4Dフォーミュラと、その追加のプロパティを格納したオブジェクトを渡します。 *formulaObj* 引数の各 `customFunction` プロパティが 4D View Pro エリア内でのファンクション名になります。

| プロパティ              |            |                                                                                | 型                   | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------ | ---------- | ------------------------------------------------------------------------------ | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<customFunction>` |            |                                                                                | オブジェクト              | カスタムファンクションの名前。 `<customFunction>` は、4D View Pro フォーミュラで表示するカスタムファンクションの名前を定義します (スペースは使用できません)                                                                                                                                                                                                                                                                                                                                                                              |
|                    | formula    |                                                                                | オブジェクト              | 4Dフォーミュラオブジェクト (必須)。 `Formula` コマンド参照。                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|                    | parameters |                                                                                | Object の Collection | 引数のコレクション (フォーミュラ内で定義されている順). 詳細については [引数](../formulas.md#引数) の章を参照ください。                                                                                                                                                                                                                                                                                                                                                                                     |
|                    |            | \[ ].name | テキスト                | 4D View Pro に表示する引数の名前。                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    |            | \[ ].type | Number              | 引数の型。 サポートされている型:<li>`Is Boolean`</li><li>`Is collection`</li><li>`Is date`</li><li>`Is Integer`</li><li>`Is object`</li><li>`Is real`</li><li>`Is text`</li><li>`Is time`</li>*type* は省略するか、デフォルト値 (-1) を渡すことができます (ただし、コレクション型の引数が 1つでも存在する場合は、引数の型宣言は必須です)。 <br/>*type* を省略した、または -1 を渡した場合、値は型と一緒に渡されますが、日付と時間の値に関してはオブジェクトとして送られます。 *type* が `Is object` の場合、オブジェクト引数は `.value` プロパティに格納されて渡されます。 [引数](../formulas.md#引数) の章を参照ください。 |
|                    | summary    |                                                                                | テキスト                | 4D View Pro に表示するフォーミュラの説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|                    | minParams  |                                                                                | Number              | 引数の最小の数                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                    | maxParams  |                                                                                | Number              | 引数の最大の数。 ここに *parameters* の length より大きな値を渡すことによって、デフォルトの型を持つ "任意の" 引数を宣言できるようになります。                                                                                                                                                                                                                                                                                                                                                                                                            |

> **警告**

> - `VP SET CUSTOM FUNCTIONS` が呼び出された場合、[VP SET ALLOWED METHODS](vp-set-allowed-methods.md) コマンドにより許可されたメソッド (あれば) は同 4D View Pro エリアにおいて無視されます。
> - `VP SET CUSTOM FUNCTIONS` が呼び出されると、4D View Pro エリアは `SET TABLE TITLES` や `SET FIELD TITLES` コマンドに基づく機能を無視します。

#### 例題

4D View Pro エリア内で、フォーミュラオブジェクトを使用して、数値を追加し、顧客の苗字・敬称および平均売上を取得します:

```4d
Case of
    :(FORM Event.code=On Load)
 
       var $o : Object
       $o:=New object
 
// "addnum" メソッドを使用して "addnum" ファンクションを定義します
       $o.addnum:=New object
       $o.addnum.formula:=Formula(addnum)
       $o.addnum.parameters:=New collection
       $o.addnum.parameters.push(New object("name";"num1";"type";Is Integer))
       $o.addnum.parameters.push(New object("name";"num2";"type";Is Integer))
 
// データベースフィールドから "ClientLastName" ファンクションを定義します
       $o.ClientLastName:=New object
       $o.ClientLastName.formula:=Formula([Customers]lastname)
       $o.ClientLastName.summary:="Lastname of the current client"
 
// 引数を 1つ受け取る 4D式から "label" ファンクションを定義します
       $o.label:=New object
       $o.label.formula:=Formula(ds.Customers.get($1).label)
       $o.label.parameters:=New collection
       $o.label.parameters.push(New object("name";"ID";"type";Is Integer))
 
// "AverageValues" メソッドを使用して "AverageValues" ファンクションを定義します 
       $o.AverageValues:=New object
       $o.AverageValues.formula:=Formula(AverageValues)
       $o.AverageValues.parameters:=New collection
       $o.AverageValues.parameters.push(New object("name";"Mycollection";"type";Is collection))
        
// "Title" という名の変数から "Title" ファンクションを定義します 
       $o.Title:=New object
       $o.Title.formula:=Formula(Title)
 
       VP SET CUSTOM FUNCTIONS("ViewProArea";$o)
 
End case
```

#### 参照

[4D functions](../formulas.md#4d-functions)<br/>
[VP SET ALLOWED METHODS](vp-set-allowed-methods.md)<br/>
[4D View Pro: 4D フォーミュラをスプレッドシートで使用する (ブログ記事)](https://blog.4d.com/ja/4d-view-pro-use-4d-formulas-in-your-spreadsheet/)
