---
id: wp-get-elements
title: WP Get elements
slug: /WritePro/commands/wp-get-elements
displayed_sidebar: docs
---

<!--REF #_command_.WP Get elements.Syntax-->**WP Get elements** ( *targetObj* {; *elementType*} ) -> 戻り値<!-- END REF-->
<!--REF #_command_.WP Get elements.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| targetObj | Object | &#8594;  | 4D Write Pro ドキュメント、レンジ、または要素 |
| elementType | Integer | &#8594;  | 取得したい要素の型 |
| 戻り値 | Collection | &#8592; | 要素の参照を格納するコレクション |

<!-- END REF-->

#### 説明 

<!--REF #_command_.WP Get elements.Summary-->**WP Get elements** コマンドは、段落、画像、表および行などを格納したオブジェクトのコレクションを返します。<!-- END REF-->

*targetObj* 引数には、以下のものを渡すことができます:

* レンジ
* 要素 ( 表 / 行 / 段落 / 本文 / ヘッダー / フッター / セクション / サブセクション / テキストボックス)
* 4D Write Pro ドキュメント

**注:** *targetObj* 引数にサブセクションを渡した場合、コマンドはその親セクションの要素を返します。

型指定されたレンジあるいは要素が渡された場合、コマンドはそれに対応する型の要素のみを格納したコレクションを返します(ただし*elementType* 引数で型を指定した場合を除きます。以下参照)。そうでない場合、コマンドは*targetObj* 引数内にある利用可能な全ての要素を格納したコレクションを返します。

オプションとして、*elementType* 引数を渡すことで、コレクションに返される要素の型を指定することができます。以下の型を使用することができます:

| 定数                     | 値   | コメント                         |
| ---------------------- | --- | ---------------------------- |
| wk type default        | 0   | デフォルトのレンジ型                   |
| wk type image          | 2   | アンカーされた画像/インライン画像            |
| wk type image anchored | 200 | ドキュメントオブジェクトに対するアンカーされた画像の参照 |
| wk type image inline   | 100 | ドキュメントオブジェクトに対するインライン画像の参照   |
| wk type paragraph      | 1   | 段落タイプレンジ                     |
| wk type table          | 4   | テーブル参照                       |
| wk type table row      | 5   | テーブルの行参照                     |
| wk type text box       | 300 | テキストボックス(wk type 用の値)        |

**注:**

* wk type default セレクターを渡した場合、コマンドは何もフィルターされていないコレクションを返します。
* wk type paragraph, wk type image あるいは wk type table セレクターを渡した場合、返されるコレクションにはその型の要素のみが格納されます。これは*elementType* 引数での指定より優先されます。
* *targetObj* 引数で渡されたオブジェクトに格納される要素がレンジ内に完全に格納されていない場合、返される結果にはその要素全体が含まれます。例えば、レンジ内に表の一部(全体ではない)が含まれる場合、表全体への参照が返されますが、含まれるのはセル(段落)参照のみとなります。
* *elementType* 引数にwk type text box を渡す場合、*targetObj* に渡せるのは4D Write Pro ドキュメントだけです。この場合に*targetObj* 引数にドキュメント以外のものを渡した場合には、エラーが返されます。

##### 要素の並べ替え順 

返されたコレクション内の要素は、*targetObj* 引数のオブジェクトの中身に応じて並べ替えられます:

* *targetObj* 引数にレンジあるいは要素(段落、表、本文、ヘッダー、フッター、等)を渡した場合、コレクション内の要素はドキュメントのフロー(ドキュメント内で要素が現れる順番)と同じ順番に並べ替えられます。
* *targetObj* 引数に4D Write Pro ドキュメントを渡した場合、ドキュメントエリア全体が返されるため、コレクション内の要素はそのID 順に並べ替えられます(ただしwk type image anchored 引数が使用された際のアンカーされた画像の場合を除きます。この場合、画像はZ順にソートされます)。**テキストボックス**内にある*elementType* 型のインライン要素(あれば)は、コレクションの最後に返されます。

例えばドキュメントの本文内の段落の背景色を交互に入れ替えたい場合、コレクション内の要素の順番がドキュメントの段落の出現順と一致するように、*targetObj* 引数にはドキュメントではなく本文要素を渡す必要があるという点に注意してください。

#### 例題 1 

ドキュメント内にある全ての段落のコレクションを返したい場合を考えます:

```4d
 var $docElements : Collection
 $docElements:=WP Get elements($myDoc;wk type paragraph)
  //段落要素のみを格納するコレクションを返す
```

#### 例題 2 

ドキュメント内の段落で、文字の揃え方とカラーを交互に切り替えたい場合を考えます:

```4d
 var $col : Collection
 var $obj : Object
 var $body : Object
 var $i;$n : Integer
 $col:=New collection
 $body:=WP Get body(myDoc)
 $col:=WP Get elements($body;wk type paragraph)
 $i:=0
 $n:=$col.length
 For($i;0;$n-1)
    $obj:=$col[$i]
    WP RESET ATTRIBUTES($obj)
    WP SET ATTRIBUTES($obj;wk font bold;wk false)
    WP SET ATTRIBUTES($obj;wk font italic;wk false)
    If($i%2=0)
       WP SET ATTRIBUTES($obj;wk text align;wk left)
       WP SET ATTRIBUTES($obj;wk font bold;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#804040")
       WP SET ATTRIBUTES($obj;wk margin right;"5cm")
       WP SET ATTRIBUTES($obj;wk margin left;"1cm")
    Else
       WP SET ATTRIBUTES($obj;wk text align;wk right)
       WP SET ATTRIBUTES($obj;wk font italic;wk true)
       WP SET ATTRIBUTES($obj;wk text color;"#404020")
       WP SET ATTRIBUTES($obj;wk margin left;"5cm")
       WP SET ATTRIBUTES($obj;wk margin right;"1cm")
    End if
 End for
```

#### 参照 

[WP Get breaks](wp-get-breaks.md)  
[WP Get element by ID](wp-get-element-by-id.md)  
[WP Table range](wp-table-range.md)  