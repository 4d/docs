---
id: tags
title: 変換タグ
---

4Dでは、参照を 4D変数や式に挿入したり、様々な処理をソーステキスト ("テンプレート") に対して実行したりするための変換タグのセットを用意しています。 これらのタグは、ソーステキストが実行されてアウトプットテキストが生成されたときに解釈されます。

4D Webサーバーにおいて [Web テンプレートページ](WebServer/templates.md) をビルドするにあたって、この原理が使用されます。

これらのタグは原則として HTMLコメント (`<--#Tag Contents-->`) として挿入されます。しかしながら、 [xml に準じた代替シンタックス](#4dtext-4dhtml-4deval-の代替シンタックス) も一部利用可能です。

複数タイプのタグを混用することも可能です。 たとえば、以下の HTML構造は、問題なく実行可能です:

```html
<HTML>
...
<BODY><!--#4DSCRIPT/PRE_PROCESS-->(メソッド呼び出し)<!--#4DIF (myvar=1)-->(If 条件)<!--#4DINCLUDE banner1.html-->(サブページ挿入)<!--#4DENDIF-->(End if)<!--#4DIF (mtvar=2)--><!--#4DINCLUDE banner2.html--><!--#4DENDIF--><!--#4DLOOP [TABLE]-->(カレントセレクションでのループ)<!--#4DIF ([TABLE]ValNum>10)-->(If [TABLE]ValNum>10)<!--#4DINCLUDE subpage.html-->(サブページの挿入)<!--#4DELSE-->(Else)
   <B>Value:<!--#4DTEXT [TABLE]ValNum--></B><BR>   (フィールド表示)<!--#4DENDIF--><!--#4DENDLOOP-->](End for)
</BODY>
</HTML>
```



## タグ利用の原則

### 解析

*テンプレート* ソースの解析は、2つのコンテキストでおこなわれます:

- `PROCESS 4D TAGS` コマンド使用時: このコマンドは *テンプレート* に加えて任意の引数を受け入れ、処理の結果であるテキストを返します。

- 4D の統合された HTTPサーバー使用時: `WEB SEND FILE` (.htm, .html, .shtm, .shtml)、`WEB SEND BLOB` (text/html型 BLOB)、および `WEB SEND TEXT` コマンドによって [テンプレートページ](WebServer/templates.md) を送信、あるいは URL で呼び出します。 URL で呼び出す場合、".htm" と ".html" で終わるページは最適化のため解析されません。 この場合に HTMLページを解析させるには、終わりを ".shtm" または ".shtml" とする必要があります (例: http://www.server.com/dir/page.shtm)。


### 再起的処理

4Dタグは繰り返し解釈されます。4D は常に変換の結果を解釈しようとし、新しい変換が起きた際にはそれに伴う新しい解釈が実行され、取得結果の変換が必要がなくなるまで繰り返されます。 たとえば、以下のようなステートメントがあった場合:

```html<!--#4DHTML [Mail]Letter_type-->```

もし `[Mail]Letter_type` テキストフィールド自体にもタグ (たとえば`<!--#4DSCRIPT/m_Gender-->`) が含まれていた場合、このタグは 4DHTMLタグの解釈の後に、それに伴って評価されます。

この強力な原則は、テキスト変換に関連するほとんどの需要を満たすことができます。 しかしながら、Webコンテキストにおいて、これは場合によって悪意のあるコードの侵入を許す可能性があるという点に注意が必要です。これを防ぐ方法については [悪意あるコードの侵入を防止](WebServer/templates.md#悪意あるコードの侵入を防止) を参照ください。


### トークンを使用した識別子

4D のバージョンや言語設定に左右されずに、タグ経由の式の評価が正しくおこなわれることを確実にするため、バージョン間で名前が変わりうる要素 (コマンド、テーブル、フィールド、定数) については、トークンシンタックスを使用することが推奨されます。 たとえば、`Current time` コマンドを挿入するには、"`Current time:C178`"と入力します。

### "." を小数点として使用

`4DTEXT`、`4DHTML`、および `4DEVAL` の 4Dタグで数値表現を評価する際、4D は常にピリオド文字 (.) を小数点として使用します。 リージョン設定は無視されます。 この機能により、4Dの言語設定とバージョンが異なっていてもメンテナンスが容易となり互換性が保たれます。


## 4DBASE

#### シンタックス: `<!--#4DBASE folderPath-->`

`<!--#4DBASE -->` タグは `<!--#4DINCLUDE-->` タグで使用されるワーキングディレクトリを指定します。

Webページ内で呼び出されると、`<!--#4DBASE -->` タグは同ページ内であとに続くすべての `<!--#4DINCLUDE-->` 呼び出しのディレクトリを変更します (次の `<!--#4DBASE -->` があるまで)。 組み込まれたファイル内で `<!--#4DBASE -->`フォルダーが変更されると、親のファイルから元となる値を取得します。

*folderPath* 引数には現在のページに対する相対パスを指定し、パスは "/" で終わっていなければなりません。 また、指定フォルダーは Webフォルダー内になければなりません。

"WEBFOLDER" キーワードを渡すと、(そのページに対して相対の) デフォルトパスに戻されます。

以下のように、各呼び出しごとに相対パスを指定したコードは:

```html<!--#4DINCLUDE subpage.html--><!--#4DINCLUDE folder/subpage1.html--><!--#4DINCLUDE folder/subpage2.html--><!--#4DINCLUDE folder/subpage3.html--><!--#4DINCLUDE ../folder/subpage.html-->```
以下のコードと同一です:

```html<!--#4DINCLUDE subpage.html--><!--#4DBASE folder/--><!--#4DINCLUDE subpage1.html--><!--#4DINCLUDE subpage2.html--><!--#4DINCLUDE subpage3.html--><!--#4DBASE ../folder/--><!--#4DINCLUDE subpage.html--><!--#4DBASE WEBFOLDER-->```

たとえば、ホームページのディレクトリを設定する場合:

```html
/* Index.html */<!--#4DIF LangFR=True--><!--#4DBASE FR/--><!--#4DELSE--><!--#4DBASE US/--><!--#4DENDIF--><!--#4DINCLUDE head.html--><!--#4DINCLUDE body.html--><!--#4DINCLUDE footer.html-->```

上で組み込まれる "head.html" ファイル内でカレントフォルダーが `<!--#4DBASE -->` を使用して変更されても、"index.html" 内では変更されません:

```html
/* Head.htm */
/* ここでのワーキングディレクトリはインクルードされるファイルに対して相対的 (FR/ または US/) */<!--#4DBASE Styles/--><!--#4DINCLUDE main.css--><!--#4DINCLUDE product.css--><!--#4DBASE Scripts/--><!--#4DINCLUDE main.js--><!--#4DINCLUDE product.js-->```


## 4DCODE

#### シンタックス: `<!--#4DCODE codeLines-->`

`4DCODE` タグを使用すると、複数行の4Dコードのブロックをテンプレートに挿入できます。

"`<!--#4DCODE`" シークエンスとそれに続くスペース、CRまたはLF文字が検知されると、4D は次の "`-->`"シークエンスまでのコードを解釈します。 コードブロック自体はキャリッジリターンもラインフィードも、あるいはその両方も含むことができ、4D によってシーケンシャルに解釈されます。

たとえば、以下のようにテンプレートに書くことができます:

```html<!--#4DCODE
// パラメーターの初期化
C_OBJECT:C1216($graphParameters)
OB SET:C1220($graphParameters;"graphType";1)
$graphType:=1
//...ここにコードを書きます
If(OB Is defined:C1231($graphParameters;"graphType"))
    $graphType:=OB GET:C1224($graphParameters;"graphType")
    If($graphType=7)
        $nbSeries:=1
        If($nbValues>8)
            DELETE FROM ARRAY:C228 ($yValuesArrPtr{1}->;9;100000)
            $nbValues:=8
        End if
    End if
End if
-->```


4DCODE タグの機能は以下の通りです:

- `TRACE` コマンドがサポートされています。これは 4Dデバッガーを起動するので、テンプレートコードをデバッグすることができます。
- エラーは標準のエラーダイアログを表示します。これを使って、ユーザーはコードの実行を中止したりデバッグモードに入ったりすることができます。
- `<!--#4DCODE` と `-->` の間のテキストは改行され、どのような改行コードでも受け取ります (cr、lf、または crlf)。
- テキストは `PROCESS 4D TAGS` を呼び出したデータベースのコンテキストにてトークナイズされます。 これは、たとえばプロジェクトメソッドの認識等において重要です。 [公開オプション: 4DタグとURL(4DACTION...)](WebServer/allowProject.md) メソッドプロパティは考慮されません。
- テキストが常に English-US設定であったとしても、4Dのバージョン間においてコマンドや定数名が改名されることによる問題を避けるため、コマンド名や定数名はトークンシンタックスを使用することが推奨されいます。

> 4DCODE タグがあらゆる 4Dランゲージコマンドおよびプロジェクトメソッドを呼び出せるという事実は、とくにデータベースが HTTP経由で使用可能な場合等に、セキュリティ上の問題になり得ます。 しかしながら、タグはサーバー側のコードをテンプレートファイルから実行するため、タグそのものはセキュリティ上の問題になりません。 このようなコンテキストにおいては、あらゆる Webサーバーと同様に、セキュリティは主にサーバーファイルへのリモートアクセスレベルにおいて管理されています。


## 4DEACH と 4DENDEACH

#### シンタックス: `<!--#4DEACH variable in expression-->` `<!--#4DENDEACH-->`

`<!--#4DEACH-->` コメントは、*expression* に含まれるすべての要素に対して処理を繰り返します。 各要素は *variable* に代入され、その型は *expression* の型に依存します。

`<!--#4DEACH-->` コメントは 3種類の *expression* を対象に反復処理をおこなうことができます:

- [コレクション](#--4deach-item-in-collection--): コレクションの各要素をループします
- [エンティティセレクション](#--4deach-entity-in-entityselection--): エンティティセレクションの各エンティティをループします
- [オブジェクト](#--4deach-property-in-object--): オブジェクトの各プロパティをループします

ループの数は開始時に評価され、処理中に変化することはありません。 ループ中に項目を追加・削除することは、繰り返しの不足・重複を引き起こすことがあるため、一般的には推奨されません。


### `<!--#4DEACH item in collection-->`

このシンタックスは、コレクションの各要素を対象に反復処理をおこないます。 `<!--#4DEACH -->` と `<!--#4DENDEACH-->` の間に書かれたコードが、各コレクション要素について繰り返されます。

*item* はコレクション要素と同じ型の変数です。

コレクションの **要素はすべて同じ型** でなくてはなりません。そうでない場合には、*item* 変数に別の型の値が代入されたときにエラーが生成されます。

ループの回数はコレクションの要素数に基づいています。 各繰り返しにおいて、*item* 変数には、コレクションの合致する要素が自動的に代入されます。 このとき、以下の点に注意する必要があります:

- *item* 変数がオブジェクト型あるいはコレクション型であった場合 (つまり *expression* がオブジェクトのコレクション、あるいはコレクションのコレクションであった場合)、この変数を変更すると自動的にコレクションの対応する要素も変更されます (オブジェクトとコレクションは同じ参照を共有しているからです)。 変数がスカラー型である場合、変数のみが変更されます。
- *item* 変数には、コレクションの先頭要素の型が設定されます。 コレクション要素のどれか一つでも、変数と異なる型のものがあった場合、エラーが生成され、ループは停止します。
- コレクションが Null値の要素を格納していたとき、*item* 変数の型が Null値をサポートしない型 (倍長整数変数など) であった場合にはエラーが生成されます。

#### 例題: スカラー値のコレクション

*getNames* は文字列のコレクションを返すメソッドです。 このメソッドは [公開オプション: 4DタグとURL](WebServer/allowProject.md) が有効になっています。


```html
    <table class="table">    

        <tr><th>Name</th></tr><!--#4DEACH $name in getNames--><tr>
            <td><!--#4DTEXT $name--></td>
        </tr><!--#4DENDEACH--></table>
```

#### 例題: オブジェクトのコレクション

*getSalesPersons* はオブジェクトのコレクションを返すメソッドです。

```html
    <table class="table"><!--#4DCODE 
            $salePersons:=getSalesPersons
          --><tr><th>ID</th><th>Firstname</th><th>Lastname</th></tr><!--#4DEACH $salesPerson in $salePersons--><tr>
            <td><!--#4DTEXT $salesPerson.ID--></td>
            <td><!--#4DTEXT $salesPerson.firstname--></td>
            <td><!--#4DTEXT $salesPerson.lastname--></td>
        </tr><!--#4DENDEACH--></table>
```


### `<!--#4DEACH entity in entitySelection-->`

このシンタックスは、エンティティセレクションの各エンティティを対象に反復処理をおこないます。 `<!--#4DEACH -->` と `<!--#4DENDEACH-->` の間に書かれたコードが、エンティティセレクションの各エンティティについて繰り返されます。

*entity* は Entityクラスのオブジェクト変数です。


ループの回数はエンティティセレクション内のエンティティの数に基づきます。 各繰り返しにおいて、*entity* オブジェクト変数には、エンティティセレクションの合致するエンティティが自動的に代入されます。

#### 例題: html のテーブル

```html
    <table class="table">     

        <tr><th>ID</th><th>Name</th><th>Total purchase</th></tr><!--#4DEACH $customer in ds.Customers.all()--><tr>
            <td><!--#4DTEXT $customer.ID--></td>
            <td><!--#4DTEXT $customer.name--></td>
            <td><center><!--#4DTEXT String($customer.totalPurchase;"$###,##0")--></center></td>
        </tr><!--#4DENDEACH--></table>
```

#### 例題: `PROCESS 4D TAGS`

```4d
var customers : cs.CustomersSelection
var $input; $output : Text

customers:=ds.Customers.all()
$input:="<!--#4DEACH $cust in customers-->" 
$input:=$input+"<!--#4DTEXT $cust.name -->"+Char(Carriage return)
$input:=$input+"<!--#4DENDEACH-->" 
PROCESS 4D TAGS($input; $output)
TEXT TO DOCUMENT("customers.txt"; $output)
```

### `<!--#4DEACH property in object-->`

このシンタックスは、オブジェクトの各プロパティを対象に反復処理をおこないます。 `<!--#4DEACH -->` と `<!--#4DENDEACH-->` の間に書かれたコードが、各オブジェクトプロパティについて繰り返されます。

*property* は現在処理中のプロパティ名が自動代入されたテキスト変数です。

オブジェクトのプロパティは作成順に処理されていきます。 ループ中、プロパティをオブジェクトに追加/削除することが可能ですが、その場合でも残りのループ回数は、オブジェクトの元のプロパティ数に基づいているため、変化しません。

#### 例題: オブジェクトのプロパティ

*getGamers* は、ゲームスコアを管理するために ("Mary"; 10; "Ann"; 20; "John"; 40) のようなオブジェクトを返すプロジェクトメソッドです。

```html
    <table class="table"><!--#4DCODE
           $gamers:=getGamers
          --><tr><th>Gamers</th><th>Scores</th></tr><!--#4DEACH $key in $gamers--><tr>
            <td ><!--#4DTEXT $key--></td>
            <td ><!--#4DTEXT $gamers[$key]--></td>
        </tr><!--#4DENDEACH--></table>
```




## 4DEVAL

#### シンタックス: `<!--#4DEVAL expression-->`
#### 代替シンタックス: `$4DEVAL(expression)`

`4DEVAL` タグを使用すると、4Dの変数や式を評価できます。 [`4DHTML`](#4dhtml) タグのように、`4DEVAL` タグはテキストを返す際にHTML特殊文字をエスケープしません。 しかしながら、[`4DHTML`](#4dhtml) や [`4DTEXT`](#4dtext) と異なり、`4DEVAL` は有効な 4D宣言であればどれでも実行することができます (値を返さない代入や式も含まれます)。

たとえば、以下の様なコードを実行することができます:

```
 $input:="<!--#4DEVAL a:=42-->" // 代入
 $input:=$input+"<!--#4DEVAL a+1-->" // 計算
 PROCESS 4D TAGS($input;$output)
  // $output = "43"
```

解釈エラーの場合、"`<!--#4DEVAL expr-->: ## エラー # エラーコード`" というテキストが挿入されます。

> セキュリティ上の理由から、[悪意あるコードの侵入・挿入](WebServer/templates.md#悪意あるコードの侵入を防止)を防ぐために、アプリケーション外から導入されたデータを処理するときには [`4DTEXT`](#4dtext) タグの使用が推奨されます。


## 4DHTML

#### シンタックス: `<!--#4DHTML expression-->`
#### 代替シンタックス: `$4DHTML(expression)`


`4DTEXT` タグ同様、このタグを使用すると、4Dの変数や値を返す式を HTML式として挿入できます。 一方 `4DTEXT` タグとは異なり、このタグはHTML特殊文字(例: ">")をエスケープしません。

たとえば、4Dタグを使用して 4Dのテキスト変数 myvar を処理した結果は以下の様になります:

| myvar の値             | タグ                           | 戻り値                 |
| -------------------- | ---------------------------- | ------------------- |
| `myvar:="<B>"` | `<!--#4DTEXT myvar-->` | `&lt;B&gt;` |
| `myvar:="<B>"` | `<!--#4DHTML myvar-->` | `<B>`         |

解釈エラーの場合、"`<!--#4DHTML myvar-->: ## エラー # エラーコード`" というテキストが挿入されます。

> セキュリティ上の理由から、[悪意あるコードの侵入・挿入](WebServer/templates.md#悪意あるコードの侵入を防止)を防ぐために、アプリケーション外から導入されたデータを処理するときには [`4DTEXT`](#4dtext) タグの使用が推奨されます。


## 4DIF, 4DELSE, 4DELSEIF と 4DENDIF

#### シンタックス: `<!--#4DIF expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

`<!--#4DELSEIF-->` (任意), `<!--#4DELSE-->` (任意) および `<!--#4DENDIF-->` コメントと共に使用することで、`<!--#4DIF expression-->` コメントはコードの一部に条件分岐を実行させることを可能にします。

*expression* はブール値を返す有効な 4D式です。 式は括弧の中に記述され、4Dのシンタックスルールに準拠していなければなりません。

`<!--#4DIF expression-->` ... `<!--#4DENDIF-->` は複数レベルでネストできます。 4Dと同じく、それぞれの `<!--#4DIF expression-->` には対応する `<!--#4DENDIF-->` がなければなりません。

解釈エラーの場合、`<!--#4DIF -->` と `<!--#4DENDIF-->` の間のコンテンツの代わりに、"`<!--#4DIF expression-->`: ブール式が必要です" というテキストが挿入されます。 同様に、`<!--#4DIF -->` が同じ数の `<!--#4DENDIF-->` で閉じられていない場合、`<!--#4DIF -->` と `<!--#4DENDIF-->` の間のコンテンツの代わりに "`<!--#4DIF expression-->`: 4DENDIFが必要です" というテキストが挿入されます。

`<!--#4DELSEIF-->` タグを使用すると、数に制限なく条件をテストできます。 最初に `true` と判定されたブロック内にあるコードだけが実行されます。 `true` ブロックがなく、`<!--#4DELSE-->` もない場合には、なにも実行されません。 `<!--#4DELSE-->`タグは、最後の `<!--#4DELSEIF-->` の後に記述できます。 それまでの条件がすべて `false` の場合、`<!--#4DELSE-->`ブロックの文が実行されます。

以下の2つのコードは同等です。

`4DELSE` のみを使用する場合:

```html<!--#4DIF Condition1-->/* Condition1 が true の場合*/<!--#4DELSE--><!--#4DIF Condition2-->/* Condition2 が true の場合*/<!--#4DELSE--><!--#4DIF Condition3-->/* Condition3 が true の場合 */<!--#4DELSE-->/*いずれの条件も true でない場合*/<!--#4DENDIF-->
        <!--#4DENDIF-->
    <!--#4DENDIF-->
```

同じ内容を `4DELSEIF` タグを使用して記述した場合:

```<!--#4DIF Condition1-->/* Condition1 が true の場合*/<!--#4DELSEIF Condition2-->/* Condition2 が true の場合*/<!--#4DELSEIF Condition3-->/* Condition3 が true の場合 */<!--#4DELSE-->/* いずれの条件も true でない場合*/<!--#4DENDIF-->```

スタティックな HTMLページに書かれたこの例題のコードは、`vname#""` 式の結果に応じ、異なるラベルを表示します:

```html
<BODY>
...<!--#4DIF (vname#"")-->Names starting with<!--#4DTEXT vname-->.<!--#4DELSE-->No name has been found.<!--#4DENDIF-->...
</BODY>
```

この例題は接続したユーザーによって異なるページを返します:

```html<!--#4DIF LoggedIn=False--><!--#4DINCLUDE Login.htm --><!--#4DELSEIF User="Admin" --><!--#4DINCLUDE AdminPanel.htm --><!--#4DELSEIF User="Manager" --><!--#4DINCLUDE SalesDashboard.htm --><!--#4DELSE--><!--#4DINCLUDE ItemList.htm --><!--#4DENDIF-->```


## 4DINCLUDE

#### シンタックス: `<!--#4DINCLUDE path-->`

このタグは主に、ある (*path* で指定された) HTMLページを別の HTMLページに含めるためにデザインされました。 デフォルトで、HTMLページのボディー部、つまり `<body>` と`</body>` タグの間の内容だけが統合されます (bodyタグは含まれません)。 これにより、ヘッダーに含まれるメタタグ関連の衝突が回避されます。

しかし、指定された HTMLページ中に `<body>` `</body>` タグがない場合、ページ全体が統合されます。 この場合、メタタグの整合性を管理するのは開発者の役割です。

`<!--#4DINCLUDE -->` コメントは、テスト (`<!--#4DIF-->`) やループ (`<!--#4DLOOP-->`) と使用するととても便利です。 条件に基づきあるいはランダムにバナーなどを挿入する便利な方法です。 このタグを使用してページをインクルードするとき、拡張子にかかわらず、4Dは呼び出されたページを解析してから、内容を `4DINCLUDE` 呼び出し元のページに挿入します。

`<!--#4DINCLUDE -->` コメントで挿入されたページは、URLで呼ばれたページや `WEB SEND FILE` コマンドで送信されたページと同じように、Webサーバーキャッシュにロードされます。

*path* には、挿入するドキュメントのパスを記述します。 警告: `4DINCLUDE` を呼び出す場合、パスは解析される親ドキュメントを起点とした相対パスです。 フォルダ区切り文字にはスラッシュ (/) を使用し、レベルをさかのぼるには 2つのドット (..) を使用します (HTMLシンタックス)。 `PROCESS 4D TAGS` コマンドで `4DINCLUDE` タグを使用する場合のデフォルトフォルダーはプロジェクトフォルダーです。

> `4DINCLUDE` タグで使用されるデフォルトフォルダーは [`<!--#4DBASE -->`](#4dbase) タグを使って変更できます。

ページ内で使用できる `<!--#4DINCLUDE path-->` 数に制限はありません。 しかし `<!--#4DINCLUDE path-->` の呼び出しは 1レベルのみ有効です。 つまり、たとえば *mydoc1.html* ページに `<!--#4DINCLUDE mydoc2.html-->` によって挿入される *mydoc2.html* がある場合、そのボディ内でさらに `<!--#4DINCLUDE mydoc3.html-->` を使うことはできません。 さらに、4Dはインクルードが再帰的かどうかを確認します。

エラーの場合、"`<!--#4DINCLUDE path-->` : ドキュメントを開けません" というテキストが挿入されます。

例:

```html<!--#4DINCLUDE subpage.html--><!--#4DINCLUDE folder/subpage.html--><!--#4DINCLUDE ../folder/subpage.html-->```



## 4DLOOP と 4DENDLOOP

#### シンタックス: `<!--#4DLOOP condition-->` `<!--#4DENDLOOP-->`

This comment allows repetition of a portion of code as long as the condition is fulfilled. The portion is delimited by `<!--#4DLOOP-->` and `<!--#4DENDLOOP-->`.

The `<!--#4DLOOP condition-->` ... `<!--#4DENDLOOP-->` blocks can be nested. Like in 4D, each `<!--#4DLOOP condition-->` must match a `<!--#4DENDLOOP-->`.

There are five kinds of conditions:

### `<!--#4DLOOP [table]-->`

This syntax makes a loop for each record from the table current selection in the current process. The code portion located between the two comments is repeated for each current selection record.

> When the `4DLOOP` tag is used with a table, records are loaded in "Read only" mode.

The following code:

```html<!--#4DLOOP [People]--><!--#4DTEXT [People]Name--><!--#4DTEXT [People]Surname--><BR><!--#4DENDLOOP-->```

... could be expressed in 4D language in the following way:

```4d
 FIRST RECORD([People])
 While(Not(End selec tion([People])))
    ...
    NEXT RECORD([People])
 End while
```

### `<!--#4DLOOP array-->`

This syntax makes a loop for each array item. The array current item is increased when each code portion is repeated.

> This syntax cannot be used with two dimension arrays. In this case, it is better to combine a method with nested loops.

The following code example:

```html<!--#4DLOOP arr_names--><!--#4DTEXT arr_names{arr_names}--><BR><!--#4DENDLOOP-->```

... could be expressed in 4D language in the following way:

```4d
 For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
```

### `<!--#4DLOOP method-->`

This syntax makes a loop as long as the method returns `True`. The method takes a Long Integer parameter type. First it is called with the value 0 to allow an initialization stage (if necessary); it is then called with the values 1 ,then 2, then 3 and so on, as long as it returns `True`.

For security reasons, within a Web process, the `On Web Authentication` database method can be called once just before the initialization stage (method execution with 0 as parameter). If the authentication is OK, the initialization stage will proceed.

`C_BOOLEAN($0)` and `C_LONGINT($1)` MUST be declared within the method for compilation purposes.

The following code example:

```html<!--#4DLOOP my_method--><!--#4DTEXT var--><BR><!--#4DENDLOOP-->```

... could be expressed in 4D language in the following way:

```4d
 If(AuthenticationWebOK)
    If(my_method(0))
       $counter:=1
       While(my_method($counter))
          ...
          $counter:=$counter+1
       End while
    End if
 End if
```

The `my_method` method can be as follows:

```4d
 C_LONGINT($1)
 C_BOOLEAN($0)
 If($1=0) `Initialisation
    $0:=True
 Else
    If($1<50)
       ...
       var:=...
       $0:=True
    Else
       $0:=False `Stops the loop
    End if
 End if
```

### `<!--#4DLOOP expression-->`

With this syntax, the `4DLOOP` tag makes a loop as long as the *expression* returns `True`. The expression can be any valid Boolean expression and must contain a variable part to be evaluated in each loop to avoid infinite loops.

For example, the following code:

```html<!--#4DEVAL $i:=0--><!--#4DLOOP ($i<4)--><!--#4DEVAL $i--><!--#4DEVAL $i:=$i+1--><!--#4DENDLOOP-->```

...produces the following result:

```
0
1
2
3
```

### `<!--#4DLOOP pointerArray-->`

In this case, the `4DLOOP` tag works like it does with an array: it makes a loop for each element of the array referenced by the pointer. The current array element is increased each time the portion of code is repeated.

This syntax is useful when you pass an array pointer as a parameter to the `PROCESS 4D TAGS` command.

例:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:="<!--#4DEVAL $1-->"
 $input:=$input+"<!--#4DLOOP $2-->"
 $input:=$input+"<!--#4DEVAL $2->{$2->}-->"
 $input:=$input+"<!--#4DENDLOOP-->"
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world "
```

In case of an interpretation error, the text "`<!--#4DLOOP expression-->`: description" is inserted instead of the contents located between `<!--#4DLOOP -->` and `<!--#4DENDLOOP-->`.

The following messages can be displayed:

- Unexpected expression type (standard error);
- Incorrect table name (error on the table name);
- An array was expected (the variable is not an array or is a two dimension array);
- The method does not exist;
- Syntax error (when the method is executing);
- Access error (you do not have the appropriate access privileges to access the table or the method).
- 4DENDLOOP expected (the `<!--#4DENDLOOP-->` number does not match the `<!--#4DLOOP -->`).

## 4DSCRIPT/

#### Syntax: `<!--#4DSCRIPT/MethodName/MyParam-->`

The `4DSCRIPT` tag allows you to execute 4D methods when processing the template. The presence of the `<!--#4DSCRIPT/MyMethod/MyParam-->` tag as an HTML comment launches the execution of the `MyMethod` method with the `Param` parameter as a string in `$1`.

> If the tag is called in the context of a Web process, when the page is loaded, 4D calls the `On Web Authentication` database method (if it exists). If it returns True, 4D executes the method.

The method must return text in `$0`. If the string starts with the code character 1, it is considered as HTML (the same principle is true for the `4DHTML` tag).

For example, let’s say that you insert the following comment `“Today is<!--#4DSCRIPT/MYMETH/MYPARAM-->”` into a template Web page. When loading the page, 4D calls the `On Web Authentication` database method, then calls the `MYMETH` method and passes the string “/MYPARAM” as the parameter `$1`. The method returns text in $0 (for example "12/31/21"); the expression "`Today is<!--#4DSCRIPT/MYMETH/MYPARAM––>`" therefore becomes "Today is 12/31/21".

The `MYMETH` method is as follows:

```4d
  //MYMETH
 C_TEXT($0;$1) //These parameters must always be declared
 $0:=String(Current date)
```

> A method called by `4DSCRIPT` must not call interface elements (`DIALOG`, `ALERT`, etc.).

As 4D executes methods in their order of appearance, it is absolutely possible to call a method that sets the value of many variables that are referenced further in the document, whichever mode you are using. You can insert as many `<!--#4DSCRIPT...-->` comments as you want in a template.



## 4DTEXT

#### Syntax: `<!--#4DTEXT expression-->`
#### Alternative syntax: `$4DTEXT(expression)`


The tag `<!--#4DTEXT expression-->` allows you to insert a reference to a 4D variable or expression returning a value. For example, if you write (in an HTML page):

```html
<P>Welcome to<!--#4DTEXT vtSiteName-->!</P>
```

The value of the 4D variable `vtSiteName` will be inserted in the HTML page when it is sent. This value is inserted as simple text, special HTML characters such as ">" are automatically escaped.

You can also insert 4D expressions. You can for example directly insert the contents of a field (`<!--#4DTEXT [tableName]fieldName-->`), an array element (`<!--#4DTEXT tabarr{1}-->`) or a method returning a value (`<!--#4DTEXT mymethod-->`). The expression conversion follows the same rules as the variable ones. Moreover, the expression must comply with 4D syntax rules.

> For security reasons, it is recommended to use this tag when processing data introduced from outside the application, in order to prevent the [insertion of malicious code](#prevention-of-malicious-code-insertion).

In case of an evaluation error, the inserted text will appear as `<!--#4DTEXT myvar-->: ## error # error code`.

- You must use process variables.
- You can display the content of a picture field. However, it is not possible to display the content of a picture array item.
- It is possible to display the contents of an object field by means of a 4D formula. For example, you can write `<!--#4DTEXT OB Get:C1224([Rect]Desc;\"color\")-->`.
- You will usually work with Text variables. However, you can also use BLOB variables. You just need to generate BLOBs in `Text without length` mode.






## 4dtext, 4dhtml, 4deval の代替シンタックス

Several existing 4D transformation tags can be expressed using a $-based syntax:

#### $4dtag (expression)
can be used instead of
#### `<!--#4dtag expression-->`

This alternative syntax is available only for tags used to return processed values:

- [4DTEXT](#4dtext)
- [4DHTML](#4dhtml)
- [4DEVAL](#4deval)

(Other tags, such as 4DIF or 4DSCRIPT, must be written with the regular syntax).

たとえば:

```html
$4DEVAL(UserName)
```

instead of:

```html<!--#4DEVAL(UserName)-->```

The main advantage of this syntax is that it allows you to write XML-compliant templates. Some 4D developers need to create and validate XML-based templates using standard XML parser tools. Since the "<" character is invalid in an XML attribute value, it was not possible to use the "`<!-- -->`" syntax of 4D tags without breaking the document syntax. On the other hand, escaping the "<" character will prevent 4D from interpreting the tags correctly.

For example, the following code would cause an XML parsing error because of the first "<" character in the attribute value:

```xml
<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
```

Using the $ syntax, the following code is validated by the parser:

```xml
<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
```

Note that `$4dtag` and `<--#4dtag -->` are not strictly equivalent: unlike `<--#4dtag -->`, `$4dtag` processing does not interpret 4D tags [recursively](#recursive-processing). `$` tags are always evaluated once and the result is considered as plain text.

The reason for this difference is to prevent malicious code injection. As [explained below](#prevention-of-malicious-code-insertion), it is strongly recommended to use `4DTEXT` tags instead of `4DHTML` tags when handling user text to protect against unwanted reinterpretation of tags: with `4DTEXT`, special characters such as "<" are escaped, thus any 4D tags using the `<!--#4dtag expression -->` syntax will lose their particular meaning. However, since `4DTEXT` does not escape the `$` symbol, we decided to break support for recursion in order to prevent malicious injection using the `$4dtag (expression)` syntax.

The following examples show the result of processing depending on the syntax and tag used:

```4d
  // example 1
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is:<!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  //4D will quit!
```
```4d
  // example 2
 myName:="<!--#4DHTML QUIT 4D-->" //malicious injection
 input:="My name is:<!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is:<!--#4DHTML QUIT 4D-->"
```
```4d
  // example 3
 myName:="$4DEVAL(QUIT 4D)" //malicious injection
 input:="My name is:<!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output is "My name is: $4DEVAL(QUIT 4D)"
```

Note that the `$4dtag` syntax supports matching pairs of enclosed quotes or parenthesis. For example, suppose that you need to evaluate the following complex (unrealistic) string:

```
String(1) + "\"(hello)\""
```

以下のように書くことができます:

```4d
 input:="$4DEVAL( String(1)+\"\\\"(hello)\\\"\")"
 PROCESS 4D TAGS(input;output)
 -->output is 1"(hello)"
```


