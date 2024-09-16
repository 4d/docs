---
id: vp-find
title: VP Find
---

<!-- REF #_method_.VP Find.Syntax -->

**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object } ) : Object<br/>**VP Find** (  *rangeObj* : Object ; *searchValue* : Text ; *searchCondition* : Object ; *replaceValue* : Text ) : Object<!-- END REF -->

<!-- REF #_method_.VP Find.Params -->

| 引数              | 型      |                             | 説明              |                  |
| --------------- | ------ | --------------------------- | --------------- | ---------------- |
| rangeObj        | Object | ->                          | レンジオブジェクト       |                  |
| searchValue     | Text   | ->                          | 検索値             |                  |
| searchCondition | Object | ->                          | 検索条件を格納したオブジェクト |                  |
| replaceValue    | Text   | ->                          | 置き換え値           |                  |
| 戻り値             | Object | <- | レンジオブジェクト       | <!-- END REF --> |

#### 説明

`VP Find` コマンドは、<!-- REF #_method_.VP Find.Summary -->*rangeObj* に指定したレンジ内で *searchValue* に指定した値を検索します<!-- END REF -->。 任意の引数を渡すことで、検索条件を詳細に指定したり、検索結果を置換したりすることができます。

*rangeObj* 引数として、検索対象のレンジを格納したオブジェクトを渡します。

*searchValue* 引数として、*rangeObj* に指定したレンジ内で検索するテキスト値を渡します。

任意の *searchCondition* 引数を渡すことで、検索がどのように実行されるかを指定することができます。 以下のプロパティがサポートされています:

| プロパティ       | 型       | 説明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ----------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| afterColumn | Integer | 検索を開始するカラムの直前のカラムの番号。 *rangeObj* 引数が統合されたレンジの場合、渡されるカラムの番号は最初のレンジのものでなければなりません。 デフォルト値: -1 (*rangeObj* の最初)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| afterRow    | Integer | 検索を開始する行の直前の行番号。 *rangeObj* 引数が統合されたレンジの場合、渡される行番号は最初のレンジのものでなければなりません。 デフォルト値: -1 (*rangeObj* の最初)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| all         | Boolean | <li>true - *rangeObj* 内で *searchValue* の値に合致するセルはすべて返されます。</li><li>false - (デフォルト値) *rangeObj* 内で *searchValue* の値に合致する最初のセルのみが返されます。</li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| flags       | Integer | <table><tr><td>`vk find flag exact match`</td><td>セルの中身全体が検索値と完全に一致する必要があります</td></tr><tr><td>`vk find flag ignore case`</td><td>文字の大小は区別されません。 例: "a" と "A" は同じとみなされます。</td></tr><tr><td>`vk find flag none`</td><td>検索フラグは指定されていません (デフォルト)。</td></tr><tr><td>`vk find flag use wild cards`</td><td>検索文字列においてワイルドカード文字 (\*,?) を使用できます。 ワイルドカードは、すべての文字列の比較に使用することができ、ワイルドカードによって置き換わる文字の数は指定されません:<li>\* は 0 から複数文字に使用可能です (例: "bl*" を検索した場合、"bl"、"black"、"blob" などが合致します)。</li><li>? は単一文字に使用可能です (例: "h?t" を検索した場合、"hot"、"hit" などが合致します)。</li></td></tr></table>フラグは組み合わせることができます。 例: <code>$search.flags:=vk find flag use wild cards+vk find flag ignore case</code> |
| order       | Integer | <table><tr><td>`vk find order by columns`</td><td>検索がカラムごとに実行されます。 カラムの各行が検索されたあとに次のカラムへと移動します。</td></tr><tr><td>`vk find order by rows`</td><td>検索が行ごとに実行されます。 行の各カラムが検索されたあとに次の行へと移動します (デフォルト)。</td></tr></table>                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| target      | Integer | <table><tr><td>`vk find target formula`</td><td>セルフォーミュラ内で検索がおこなわれます。</td></tr><tr><td>`vk find target tag`</td><td>セルタグ内で検索がおこなわれます。</td></tr><tr><td>`vk find target text`</td><td>セルテキスト内で検索がおこなわれます (デフォルト)。</td></tr></table><p>フラグは組み合わせることができます。 例:<code>$search.target:=vk find target formula+vk find target text</code></p>                                                                                                                                                                                                                                                                                                                                      |

任意の *replaceValue* 引数として、*rangeObj* 内で見つかった *searchValue* の値のテキストを置換するテキストを渡すことができます。

#### 返されるオブジェクト

この関数は、検出または置換された検索値の詳細を格納したレンジオブジェクトを返します。 何も見つからなかった場合には、空のレンジオブジェクトが返されます。

#### 例題 1

"Total" という単語が入っている最初のセルを見つけるには:

```4d
var $range;$result : Object
 
$range:=VP All("ViewProArea")
 
$result:=VP Find($range;"Total")
```

#### 例題 2

"Total" のセルを検出し、それを "Grand Total" で置き換えるには:

```4d
var $range;$condition;$result : Object

$range:=VP All("ViewProArea")

$condition:=New object
$condition.target:=vk find target text
$condition.all:=True // ドキュメント全体を検索します
$condition.flags:=vk find flag exact match

  // カレントシートにおいて "Total" のみを格納しているセルを "Grand Total" で置き換えます
$result:=VP Find($range;"Total";$condition;"Grand Total")

  // 戻り値のレンジオブジェクトが空かどうかをチェックします
If($result.ranges.length=0)
    ALERT("No result found")
Else
    ALERT($result.ranges.length+" results found")
End if
```
