---
id: transformation-tags
title: 変換タグ
---

4Dでは、参照を 4D変数や式に挿入したり、様々な処理をソーステキスト ("テンプレート") に対して実行したりするための変換タグのセットを用意しています。 これらのタグは、ソーステキストが実行されてアウトプットテキストが生成されたときに解釈されます。

4D Webサーバーにおいて [Web テンプレートページ](WebServer/templates.md) をビルドするにあたって、この原理が使用されます。

これらのタグは原則として HTMLコメント (`<!--#Tag Contents-->`) として挿入します。 しかしながら、[xml に準じた代替シンタックス](#4dtext-4dhtml-4deval-の代替シンタックス) も一部利用可能です。

複数タイプのタグを混用することも可能です。 たとえば、以下の HTML構造は、問題なく実行可能です:

```html
<HTML>
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (メソッド呼び出し)
<!--#4DIF (myvar=1)-->   (If 条件)
   <!--#4DINCLUDE banner1.html-->   (サブページ挿入)
<!--#4DENDIF-->   (End if)
<!--#4DIF (mtvar=2)-->
   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (カレントセレクションでのループ)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->  (サブページの挿入)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>   (フィールド表示)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   ](End for)
</BODY>
</HTML>
```

## タグ利用の原則

### 解析

_テンプレート_ ソースの解析は、2つのコンテキストでおこなわれます:

- `PROCESS 4D TAGS` コマンド使用時: このコマンドは _テンプレート_ に加えて任意の引数を受け入れ、処理の結果であるテキストを返します。

- 4D の統合された HTTPサーバー使用時: `WEB SEND FILE` (.htm, .html, .shtm, .shtml)、`WEB SEND BLOB` (text/html型 BLOB)、および `WEB SEND TEXT` コマンドによって [テンプレートページ](WebServer/templates.md) を送信、あるいは URL で呼び出します。 URL で呼び出す場合、".htm" と ".html" で終わるページは最適化のため解析されません。 この場合に HTMLページを解析するには、末尾を ".shtm" または ".shtml" とする必要があります (例: <http://www.server.com/dir/page.shtm>)。

### 再起的処理

4Dタグは繰り返し解釈されます。4D は常に変換の結果を解釈しようとし、新しい変換が起きた際にはそれに伴う新しい解釈が実行され、取得結果の変換が必要がなくなるまで繰り返されます。 たとえば、以下のようなステートメントがあった場合:

```html
<!--#4DHTML [Mail]Letter_type-->
```

もし `[Mail]Letter_type` テキストフィールド自体にもタグ (たとえば `<!--#4DSCRIPT/m_Gender-->`) が含まれていた場合、このタグは 4DHTMLタグの解釈の後に、それに伴って評価されます。

この強力な原則は、テキスト変換に関連するほとんどの需要を満たすことができます。 しかしながら、Webコンテキストにおいて、これは場合によって悪意のあるコードの侵入を許す可能性があるという点に注意が必要です。これを防ぐ方法については [悪意あるコードの侵入を防止](WebServer/templates.md#悪意あるコードの侵入を防止) を参照ください。

### トークンを使用した識別子

4D のバージョンや言語設定に左右されずに、タグ経由の式の評価が正しくおこなわれることを確実にするため、バージョン間で名前が変わりうる要素 (コマンド、テーブル、フィールド、定数) については、トークンシンタックスを使用することが推奨されます。 たとえば、`Current time` コマンドを挿入するには、"`Current time:C178`"と入力します。

### "." を小数点として使用

4D は常にピリオド文字 (.) を小数点として使用して、 4DTEXT、4DHTML、および 4DEVAL の 4Dタグで数値表現を評価します。 リージョン設定は無視されます。 この機能により、4Dの言語設定とバージョンが異なっていてもメンテナンスが容易となり互換性が保たれます。

## 4DBASE

#### シンタックス: `<!--#4DBASE folderPath-->`

`<!--#4DBASE -->` タグは `<!--#4DINCLUDE-->` タグで使用されるワーキングディレクトリを指定します。

Webページ内で呼び出されると、`<!--#4DBASE -->` タグは同ページ内であとに続くすべての <`!--#4DINCLUDE-->` 呼び出しのディレクトリを変更します (次の `<!--#4DBASE -->` があるまで)。 組み込まれたファイル内で `<!--#4DBASE -->` フォルダーが変更されると、親のファイルから元となる値を取得します。

_folderPath_ 引数には現在のページに対する相対パスを指定し、パスは "`/`" で終わっていなければなりません。 また、指定フォルダーは Webフォルダー内になければなりません。

"WEBFOLDER" キーワードを渡すと、(そのページに対して相対の) デフォルトパスに戻されます。

以下のように、各呼び出しごとに相対パスを指定したコードは:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage1.html-->
<!--#4DINCLUDE folder/subpage2.html-->
<!--#4DINCLUDE folder/subpage3.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

... これは次と同等です。

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE folder/-->
<!--#4DINCLUDE subpage1.html-->
<!--#4DINCLUDE subpage2.html-->
<!--#4DINCLUDE subpage3.html-->
<!--#4DBASE ../folder/-->
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE WEBFOLDER-->
```

たとえば、ホームページのディレクトリを設定する場合:

```html
/* Index.html */
<!--#4DIF LangFR=True-->
    <!--#4DBASE FR/-->
<!--#4DELSE-->
    <!--#4DBASE US/-->
<!--#4DENDIF-->
<!--#4DINCLUDE head.html-->
<!--#4DINCLUDE body.html-->
<!--#4DINCLUDE footer.html-->
```

上で組み込まれる "head.html" ファイル内でカレントフォルダーが `<!--#4DBASE -->` を使用して変更されても、"index.html" 内では変更されません:

```html
/* Head.htm */
/* ここでのワーキングディレクトリはインクルードされるファイルに対して相対的 (FR/ または US/) */
<!--#4DBASE Styles/-->
<!--#4DINCLUDE main.css-->
<!--#4DINCLUDE product.css-->
<!--#4DBASE Scripts/-->
<!--#4DINCLUDE main.js-->
<!--#4DINCLUDE product.js-->
```

## 4DCODE

#### シンタックス: `<!--#4DCODE codeLines-->`

`4DCODE` タグを使用すると、複数行の4Dコードのブロックをテンプレートに挿入できます。

`<!--#4DCODE` シークエンスとそれに続くスペース、CR または LF 文字が検知されると、4D は次の `-->` シークエンスまでのコードを解釈します。 コードブロック自体はキャリッジリターンもラインフィードも、あるいはその両方も含むことができ、4D によってシーケンシャルに解釈されます。

たとえば、以下のようにテンプレートに書くことができます:

```html
<!--#4DCODE
// パラメーターの初期化
C_OBJECT:C1216($graphParameters)
OB SET:C1220($graphParameters;"graphType";1)
$graphType:=1
// ...ここにコードを書きます
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
-->
```

4DCODE タグの機能は以下の通りです:

- `TRACE` コマンドがサポートされています。これは 4Dデバッガーを起動するので、テンプレートコードをデバッグすることができます。
- エラーは標準のエラーダイアログを表示します。これを使って、ユーザーはコードの実行を中止したりデバッグモードに入ったりすることができます。
- `<!--#4DCODE` と `-->` の間のテキストは改行され、どのような改行コードでも受け取ります (cr、lf、または crlf)。
- テキストは `PROCESS 4D TAGS` を呼び出したデータベースのコンテキストにてトークナイズされます。 これは、たとえばプロジェクトメソッドの認識等において重要です。 [公開オプション: 4DタグとURL(4DACTION...)](WebServer/allowProject.md) メソッドプロパティは考慮されません。
- テキストが常に English-US設定であったとしても、4Dのバージョン間においてコマンドや定数名が改名されることによる問題を避けるため、コマンド名や定数名はトークンシンタックスを使用することが推奨されいます。

> 4DCODE タグがあらゆる 4Dランゲージコマンドおよびプロジェクトメソッドを呼び出せるという事実は、とくにデータベースが HTTP経由で使用可能な場合等に、セキュリティ上の問題になり得ます。 しかしながら、タグはサーバー側のコードをテンプレートファイルから実行するため、タグそのものはセキュリティ上の問題になりません。 このようなコンテキストにおいては、あらゆる Webサーバーと同様に、セキュリティは主にサーバーファイルへのリモートアクセスレベルにおいて管理されています。

## 4DEACH と 4DENDEACH

#### シンタックス: `<!--#4DEACH variable in expression-->` `<!--#4DENDEACH-->`

`<!--#4DEACH-->` コメントは、_expression_ に含まれるすべての要素に対して処理を繰り返します。 各要素は _variable_ に代入され、その型は _expression_ の型に依存します。

`<!--#4DEACH-->` コメントは 3種類の _expression_ を対象に反復処理をおこなうことができます:

- [コレクション](#--4deach-item-in-collection--): コレクションの各要素をループします
- [エンティティセレクション](#--4deach-entity-in-entityselection--): エンティティセレクションの各エンティティをループします
- [オブジェクト](#--4deach-property-in-object--): オブジェクトの各プロパティをループします

ループの数は開始時に評価され、処理中に変化することはありません。 ループ中に項目を追加・削除することは、繰り返しの不足・重複を引き起こすことがあるため、一般的には推奨されません。

### `<!--#4DEACH item in collection-->`

このシンタックスは、_コレクション_ の _各要素_ を対象に反復処理をおこないます。 `<!--#4DEACH -->` と `<!--#4DENDEACH-->` の間に書かれたコードが、各コレクション要素について繰り返されます。

_item_ はコレクション要素と同じ型の変数です。

コレクションの **要素はすべて同じ型** でなくてはなりません。そうでない場合には、_item_ 変数に別の型の値が代入されたときにエラーが生成されます。

ループの回数はコレクションの要素数に基づいています。 各繰り返しにおいて、_item_ 変数には、コレクションの合致する要素が自動的に代入されます。 このとき、以下の点に注意する必要があります:

- _item_ 変数がオブジェクト型あるいはコレクション型であった場合 (つまり _expression_ がオブジェクトのコレクション、あるいはコレクションのコレクションであった場合)、この変数を変更すると自動的にコレクションの対応する要素も変更されます (オブジェクトとコレクションは同じ参照を共有しているからです)。 変数がスカラー型である場合には、変数のみが変更されます。
- _item_ 変数には、コレクションの先頭要素の型が設定されます。 コレクション要素のどれか一つでも、変数と異なる型のものがあった場合、エラーが生成され、ループは停止します。
- コレクションが Null値の要素を格納していたとき、_item_ 変数の型が Null値をサポートしない型 (倍長整数変数など) であった場合にはエラーが生成されます。

#### 例題: スカラー値のコレクション

_getNames_ は文字列のコレクションを返すメソッドです。 このメソッドは [公開オプション: 4DタグとURL](WebServer/allowProject.md) が有効になっています。

```html
 <table class="table">    

        <tr><th>Name</th></tr>

          <!--#4DEACH $name in getNames-->
        <tr>
            <td><!--#4DTEXT $name--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### 例題: オブジェクトのコレクション

_getSalesPersons_ はオブジェクトのコレクションを返すメソッドです。

```html
    <table class="table">    
         <!--#4DCODE
            $salePersons:=getSalesPersons
          -->          
       <tr><th>ID</th><th>Firstname</th><th>Lastname</th></tr>

          <!--#4DEACH $salesPerson in $salePersons-->
        <tr>
            <td><!--#4DTEXT $salesPerson.ID--></td>
            <td><!--#4DTEXT $salesPerson.firstname--></td>
            <td><!--#4DTEXT $salesPerson.lastname--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

### `<!--#4DEACH entity in entitySelection-->`

このシンタックスは、_エンティティセレクション_ の _各エンティティ_ を対象に反復処理をおこないます。 `<!--#4DEACH -->` と `<!--#4DENDEACH-->` の間に書かれたコードが、エンティティセレクションの各エンティティについて繰り返されます。

_entity_ は Entityクラスのオブジェクト変数です。

ループの回数はエンティティセレクション内のエンティティの数に基づきます。 各繰り返しにおいて、_entity_ オブジェクト変数には、エンティティセレクションの合致するエンティティが自動的に代入されます。

#### 例題: html のテーブル

```html
    <table class="table">     

        <tr><th>ID</th><th>Name</th><th>Total purchase</th></tr>

          <!--#4DEACH $customer in ds.Customers.all()-->
        <tr>
            <td><!--#4DTEXT $customer.ID--></td>
            <td><!--#4DTEXT $customer.name--></td>
            <td><center><!--#4DTEXT String($customer.totalPurchase;"$###,##0")--></center></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
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

このシンタックスは、_オブジェクト_ の _各プロパティ_ を対象に反復処理をおこないます。 `<!--#4DEACH -->` と `<!--#4DENDEACH-->` の間に書かれたコードが、各オブジェクトプロパティについて繰り返されます。

_property_ は現在処理中のプロパティ名が自動代入されたテキスト変数です。

オブジェクトのプロパティは作成順に処理されていきます。 ループ中、プロパティをオブジェクトに追加/削除することが可能ですが、その場合でも残りのループ回数は、オブジェクトの元のプロパティ数に基づいているため、変化しません。

#### 例題: オブジェクトのプロパティ

_getGamers_ は、ゲームスコアを管理するために ("Mary"; 10; "Ann"; 20; "John"; 40) のようなオブジェクトを返すプロジェクトメソッドです。

```html
    <table class="table">    
          <!--#4DCODE
           $gamers:=getGamers
          -->          

        <tr><th>Gamers</th><th>Scores</th></tr>

          <!--#4DEACH $key in $gamers-->
        <tr>
            <td ><!--#4DTEXT $key--></td>
            <td ><!--#4DTEXT $gamers[$key]--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
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
  //$output = "43"
```

解釈エラーの場合、`<!--#4DEVAL expr-->: ## エラー # エラーコード` というテキストが挿入されます。

> セキュリティ上の理由から、[悪意あるコードの侵入・挿入](WebServer/templates.md#悪意あるコードの侵入を防止)を防ぐために、アプリケーション外から導入されたデータを処理するときには [`4DTEXT`](#4dtext) タグの使用が推奨されます。

## 4DHTML

#### シンタックス: `<!--#4DHTML expression-->`

#### 代替シンタックス: `$4DHTML(expression)`

`4DTEXT` タグ同様、このタグを使用すると、4Dの変数や値を返す式を HTML式として挿入できます。 一方 `4DTEXT` タグとは異なり、このタグはHTML特殊文字 (例: ">") をエスケープしません。

たとえば、4Dタグを使用して 4Dのテキスト変数 myvar を処理した結果は以下の様になります:

| myvar の値       | タグ                     | 戻り値                         |
| -------------- | ---------------------- | --------------------------- |
| `myvar:="<B>"` | `<!--#4DTEXT myvar-->` | `&amp;lt;B&amp;gt;` |
| `myvar:="<B>"` | `<!--#4DHTML myvar-->` | `<B>`                       |

解釈エラーの場合、 `<!--#4DHTML myvar-->: ## エラー # エラーコード` というテキストが挿入されます。

> セキュリティ上の理由から、[悪意あるコードの侵入・挿入](WebServer/templates.md#悪意あるコードの侵入を防止)を防ぐために、アプリケーション外から導入されたデータを処理するときには [`4DTEXT`](#4dtext) タグの使用が推奨されます。

## 4DIF, 4DELSE, 4DELSEIF と 4DENDIF

#### シンタックス: `<!--#4DIF expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

`<!--#4DELSEIF-->` (任意), `<!--#4DELSE-->` (任意) および `<!--#4DENDIF-->` コメントと共に使用することで、`<!--#4DIF expression-->` コメントはコードの一部に条件分岐を実行させることを可能にします。

_expression_ はブール値を返す有効な 4D式です。 式は括弧の中に記述され、4Dのシンタックスルールに準拠していなければなりません。

`<!--#4DIF expression-->` ... `<!--#4DENDIF-->` のブロックは入れ子にすることができます。 4Dと同じく、それぞれの `<!--#4DIF expression-->` には対応する `<!--#4DENDIF-->` がなければなりません。

解釈エラーの場合、`<!--#4DIF -->` と `<!--#4DENDIF-->` の間のコンテンツの代わりに、"`<!--#4DIF expression-->`: ブール式が必要です" というテキストが挿入されます。 同様に、`<!--#4DIF -->` が同じ数の `<!--#4DENDIF-->` で閉じられていない場合、`<!--#4DIF -->` と `<!--#4DENDIF-->` の間のコンテンツの代わりに "`<!--#4DIF expression-->`: 4DENDIFが必要です" というテキストが挿入されます。

`<!--#4DELSEIF-->` タグを使用すると、数に制限なく条件をテストできます。 最初に `true` と判定されたブロック内にあるコードだけが実行されます。 true ブロックがなく、最後に `<!--#4DELSE-->` もない場合には、なにも実行されません。
`<!--#4DELSE-->`タグは、最後の `<!--#4DELSEIF-->` の後に記述できます。 それまでの条件がすべて `false` の場合、`<!--#4DELSE-->` ブロックの文が実行されます。

以下の2つのコードは同等です。

`4DELSE` のみを使用する場合:

```html
<!--#4DIF Condition1-->
  /* Condition1 が true の場合 */
<!--#4DELSE-->
    <!--#4DIF Condition2-->
        /* Condition2 が true の場合 */
    <!--#4DELSE-->
        <!--#4DIF Condition3-->
            /* Condition3 が true の場合 */
        <!--#4DELSE-->
            /* いずれの条件も true でない場合 */
        <!--#4DENDIF-->
    <!--#4DENDIF-->
<!--#4DENDIF-->
```

同じ内容を `4DELSEIF` タグを使用して記述した場合:

```
<!--#4DIF Condition1-->
     /* Condition1 が true の場合 */
<!--#4DELSEIF Condition2-->
     /* Condition2 が true の場合 */
<!--#4DELSEIF Condition3-->
    /* Condition3 が true の場合 */
<!--#4DELSE-->
    /* いずれの条件も true でない場合 */
<!--#4DENDIF-->
```

スタティックな HTMLページに書かれたこの例題のコードは、`vname#""` 式の結果に応じ、異なるラベルを表示します:

```html
<BODY>
...
<!--#4DIF (vname#"")-->
Names starting with <!--#4DTEXT vname-->.
<!--#4DELSE-->
No name has been found.
<!--#4DENDIF-->
...
</BODY>
```

この例題は接続したユーザーによって異なるページを返します:

```html
<!--#4DIF LoggedIn=False-->
    <!--#4DINCLUDE Login.htm -->
<!--#4DELSEIF User="Admin" -->
    <!--#4DINCLUDE AdminPanel.htm -->
<!--#4DELSEIF User="Manager" -->
    <!--#4DINCLUDE SalesDashboard.htm -->
<!--#4DELSE-->
    <!--#4DINCLUDE ItemList.htm -->
<!--#4DENDIF-->
```

## 4DINCLUDE

#### シンタックス: `<!--#4DINCLUDE path-->`

このタグは主に、ある (_path_ で指定された) HTMLページを別の HTMLページに含めるためにデザインされました。 デフォルトで、HTMLページのボディー部、つまり `<body>` と `</body>` タグの間の内容だけが統合されます (bodyタグは含まれません)。 これにより、ヘッダーに含まれるメタタグ関連の衝突が回避されます。

しかし、指定された HTMLページ中に `<body>``</body>` タグがない場合、ページ全体が統合されます。 この場合、メタタグの整合性を管理するのは開発者の役割です。

`<!--#4DINCLUDE -->` コメントは、テスト (`<!--#4DIF-->`) やループ (`<!--#4DLOOP-->`) と使用するととても便利です。 条件に基づきあるいはランダムにバナーなどを挿入する便利な方法です。
このタグを使用してページをインクルードするとき、拡張子にかかわらず、4Dは呼び出されたページを解析してから、内容を `4DINCLUDE` 呼び出し元のページに挿入します。

`<!--#4DINCLUDE -->` コメントで挿入されたページは、URLで呼ばれたページや `WEB SEND FILE` コマンドで送信されたページと同じように、Webサーバーキャッシュにロードされます。

_path_ には、挿入するドキュメントのパスを記述します。 警告: `4DINCLUDE` を呼び出す場合、パスは解析される親ドキュメントを起点とした相対パスです。 フォルダ区切り文字にはスラッシュ (/) を使用し、レベルをさかのぼるには 2つのドット (..)  を使用します (HTMLシンタックス)。 `PROCESS 4D TAGS` コマンドで `4DINCLUDE` タグを使用する場合のデフォルトフォルダーはプロジェクトフォルダーです。

> `4DINCLUDE` タグで使用されるデフォルトフォルダーは [`<!--#4DBASE -->`](#4dbase) タグを使って変更できます。

ページ内で使用できる `<!--#4DINCLUDE path-->` の数に制限はありません。 しかし `<!--#4DINCLUDE path-->` の呼び出しは 1レベルのみ有効です。 つまり、たとえば _mydoc1.html_ ページに `<!--#4DINCLUDE mydoc2.html-->` によって挿入される _mydoc2.html_ がある場合、そのボディ内でさらに `<!--#4DINCLUDE mydoc3.html-->` を使うことはできません。 さらに、4Dはインクルードが再帰的かどうかを確認します。

エラーの場合、"`<!--#4DINCLUDE path-->` : ドキュメントを開けません" というテキストが挿入されます。

例:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

## 4DLOOP と 4DENDLOOP

#### シンタックス: `<!--#4DLOOP condition-->` `<!--#4DENDLOOP-->`

このコメントを使用して、条件を満たす間、コードの一部を繰り返すことができます。 繰り返し部のコードは '<!--#4DLOOP-->' と '<!--#4DENDLOOP-->' で挟まれます。

`<!--#4DLOOP condition-->` ... `<!--#4DENDLOOP-->` のブロックは入れ子にすることができます。 4Dと同じく、それぞれの `<!--#4DLOOP condition-->` には対応する `<!--#4DENDLOOP-->` がなければなりません。

5種類の条件を使用できます:

### `<!--#4DLOOP [table]-->`

このシンタックスは、カレントプロセスのカレントセレクションに基づき、指定したテーブルのレコード毎にループします。 カレントセレクションレコード毎に、2つのコメントの間のコードは繰り返されます。

> テーブルを条件として `4DLOOP` タグが使用されると、レコードが "読み取り専用" モードでロードされます。

以下のコードは:

```html
<!--#4DLOOP [People]-->
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><br/>
<!--#4DENDLOOP-->
```

... 4Dランゲージで表すと以下のとおりです:

```4d
 FIRST RECORD([People])
 While(Not(End selection([People])))
    ...
    NEXT RECORD([People])
 End while
```

### `<!--#4DLOOP array-->`

このシンタックスは、配列項目ごとにループします。 2つのコメントの間のコードが繰り返されるたびに、配列のカレント項目がインクリメントされます。

> このシンタックスで二次元配列を使用することはできません。 この場合には、代わりにメソッドを条件としたループをネストして使用します。

以下のコードは:

```html
<!--#4DLOOP arr_names-->
<!--#4DTEXT arr_names{arr_names}--><br/>
<!--#4DENDLOOP-->
```

... 4Dランゲージで表すと以下のとおりです:

```4d
 For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
```

### `<!--#4DLOOP method-->`

このシンタックスでは、メソッドが `true` を返す間ループがおこなわれます。 メソッドは、倍長整数タイプの引数を受け取ります。 まずメソッドは引数 0 を渡されます。これは (必要に応じて) 初期化ステージとして使用できます。その後、`true` が返されるまで 1, 2, 3 と渡される引数値がインクリメントされます。

セキュリティのため、Webプロセス内では、`On Web Authentication` データベースメソッドが初期化ステージ (引数に0が渡されて実行される) の前に一度呼び出されます。 認証に成功すると、初期化に進みます。

コンパイルのため、`C_BOOLEAN($0)` と `C_LONGINT($1)` が必ず宣言されていなければなりません。

以下のコードは:

```html
<!--#4DLOOP my_method-->
<!--#4DTEXT var--> <br/>
<!--#4DENDLOOP-->
```

... 4Dランゲージで表すと以下のとおりです:

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

`my_method` は以下のようになります:

```4d
 C_LONGINT($1)
 C_BOOLEAN($0)
 If($1=0) `初期化
    $0:=True
 Else
    If($1<50)
       ...
       var:=...
       $0:=True
    Else
       $0:=False `ループ停止
    End if
 End if
```

### `<!--#4DLOOP expression-->`

このシンタックスでは、`4DLOOP` タグは _expression_ に指定した式が `true` を返す間ループがおこなわれます。 式は有効なブール式であればよく、無限ループを防ぐために、ループごとに評価される変数部分を含んでいる必要があります。

たとえば、以下のコードは:

```html
<!--#4DEVAL $i:=0-->
<!--#4DLOOP ($i<4)-->
<!--#4DEVAL $i-->
<!--#4DEVAL $i:=$i+1-->
<!--#4DENDLOOP-->
```

以下の結果を生成します:

```

0

1
2
3
```

### `<!--#4DLOOP pointerArray-->`

この場合、`4DLOOP` タグは配列のときと同じように振るまいます: ポインターによって参照された配列の要素ごとにループを繰り返します。 カレントの配列要素は、コードが繰り返される度に増加していきます。

このシンタックスは `PROCESS 4D TAGS` コマンドに対して配列ポインターを渡した場合に有用です。

例:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:="<!--#4DEVAL $1-->"
 $input:=$input+"<!--#4DLOOP $2-->"
 $input:=$input+"<!--#4DEVAL $2->{$2->}--> "
 $input:=$input+"<!--#4DENDLOOP-->"
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world "
```

解釈エラーの場合、`<!--#4DLOOP -->` と `<!--#4DENDLOOP-->` の間のコンテンツの代わりに "`<!--#4DLOOP expression-->`: エラーの説明” というテキストが挿入されます。

以下のメッセージが表示されます:

- 予期しない式のタイプ (標準のエラー);
- テーブル名が正しくありません (テーブル名のエラー);
- 配列が必要です (変数が配列でないか、二次元配列が指定された);
- メソッドが存在しません;
- シンタックスエラー (メソッド実行時);
- アクセス権エラー (テーブルやメソッドにアクセスする権限がない);
- 4DENDLOOP が必要です (`<!--#4DLOOP -->` が対応する `<!--#4DENDLOOP-->` で閉じられていない)。

## 4DSCRIPT/

#### シンタックス: `<!--#4DSCRIPT/MethodName/MyParam-->`

`4DSCRIPT` タグは、テンプレートを処理する際に 4Dメソッドを実行することを可能にします。 `<!--#4DSCRIPT/MyMethod/MyParam-->` タグが HTMLコメントとしてページに現れると、`MyMethod` メソッドが `$1` に `Param` を受け取って実行されます。

> タグが Webプロセスのコンテキストにおいて呼び出された場合、Webページがロードされると、4Dは `On Web Authentication` データベースメソッドを (存在すれば) 呼び出します。 このメソッドが <code>true</code> を返すと、4Dはメソッドを実行します。

メソッドは `$0` にテキストを返す必要があります。 文字列が文字コード 1 (つまり、`Char(1)` のこと) から始まっていると、それは HTMLソースとして扱われます (`4DHTML` と同じ原則)。

たとえば、次のコメントをテンプレートWebページに挿入したとしましょう: "今日の日付は`<!--#4DSCRIPT/MYMETH/MYPARAM-->`" 。 ページをロードする際、4Dは `On Web Authentication` データベースメソッドを (存在すれば) 呼び出し、そして `MYMETH` メソッドの `$1` に文字列 “/MYPARAM” を引数として渡して呼び出します。 メソッドは $0 にテキストを返します (たとえば “21/12/31”)。 "`今日の日付は <!--#4DSCRIPT/MYMETH/MYPARAM-->`" というコメントの結果は "今日の日付は 21/12/31" となります。

`MYMETH` メソッドは以下のとおりです:

```4d
  //MYMETH
 C_TEXT($0;$1) // これらのパラメーターは常に宣言する必要があります
 $0:=String(Current date)
```

> `4DSCRIPT` から呼び出されるメソッドは、インタフェース要素 (`DIALOG`, `ALERT` など) を呼び出してはいけません。

4Dはメソッドを見つけた順に実行するため、ドキュメントの後の方で参照される変数の値を設定するメソッドを呼び出すことも可能です。モードは関係ありません。 テンプレートには必要なだけ `<!--#4DSCRIPT...-->` コメントを記述できます。

## 4DTEXT

#### シンタックス: `<!--#4DTEXT expression-->`

#### 代替シンタックス: `$4DTEXT(expression)`

タグ `<!--#4DTEXT VarName-->` を使用して 4D変数や値を返す式への参照を挿入できます。 たとえば、(HTMLページ内にて) 以下のように記述すると:

```html
<P><!--#4DTEXT vtSiteName--> へようこそ！ </P>
```

4D変数 `vtSiteName` の値が HTMLページに送信時に挿入されます。 値はテキストとして挿入されます。">"のようなHTMLの特殊文字は、自動的にエスケープされます。

4DTEXT タグを使用して、4D式も挿入できます。 たとえば、フィールドの値を直接挿入できるほか (`<!--#4DTEXT [tableName]fieldName-->`) 、配列要素の値も挿入できますし (`<!--#4DTEXT tabarr{1}-->`) 、値を返すメソッドも使用できます (`<!--#4DTEXT mymethod-->`)。 式の変換には、変数の場合と同じルールが適用されます。 さらに、式は 4Dのシンタックスルールに適合していなければなりません。

> セキュリティ上の理由から、[悪意あるコードの侵入・挿入](WebServer/templates.md#悪意あるコードの侵入を防止)を防ぐために、アプリケーション外から導入されたデータを処理するときには、このタグの使用が推奨されます。

解釈エラーの場合、"`<!--#4DTEXT myvar--> : ## エラー # エラーコード`" というテキストが挿入されます。

- プロセス変数を使用する必要があります。
- ピクチャーフィールドの内容を表示できます。 しかし、ピクチャー配列の要素を表示することはできません。
- 4D式を使用して、オブジェクトフィールドの中身を表示させることができます。 たとえば、次の様に記述します: `<!--#4DTEXT OB Get:C1224([Rect]Desc;\"color\")-->`。
- 通常はテキスト変数を使用します。 しかし、BLOB変数を使用することもできます。 この場合、長さ情報なしのテキストBLOBを使用します。

## 4DTEXT, 4DHTML, 4DEVAL の代替シンタックス

いくつかの既存の 4D変換タグは、$-ベースのシンタックスを使用して表現することができます:

#### $4dtag (expression)

という表記を次の代わりに使用することができます:

#### `<!--#4dtag expression-->`

この代替シンタックスは、処理後の値を返すタグにおいてのみ使用可能です:

- [4DTEXT](#4dtext)
- [4DHTML](#4dhtml)
- [4DEVAL](#4deval)

(その他のタグ、たとえば 4DIF や 4DSCRIPT などでは、通常のシンタックスを使用しなければなりません)。

たとえば:

```html
$4DEVAL(UserName)
```

は次の代わりになります:

```html
<!--#4DEVAL(UserName)-->
```

このシンタックスの主な利点は、XML準拠のテンプレートが書けることです。 一部の 4Dデベロッパーは、XML準拠のテンプレートを標準の XMLパーサーツールで作成・評価する必要があります。 "<" 文字は XML属性値としては無効なため、ドキュメントのシンタックスを破らずに4Dタグの "`<!-- -->`" シンタックスを使用することはできませんでした。 その一方で、"<" 文字をエスケープしてしまうと、4Dがタグを正常に解釈できなくなってしまいます。

たとえば、以下のコードは属性値の最初の "<" 文字のために XMLパースエラーを引き起こします:

```xml
<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
```

$シンタックスを使用すると、パーサーによって以下のコードが評価されます:

```xml
<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
```

ここで、`$4dtag` と `<--#4dtag-->` は厳密には同じではないという点に注意が必要です。`<--#4dtag-->` とは異なり、`$4dtag` は 4Dタグを [繰り返し解釈](#再起的処理) することはありません。 `$` タグは常に一度だけ解釈され、その結果は標準テキストとして読まれます。

この違いの理由は、悪意あるコードの侵入を防ぐためにあります。 [悪意あるコードの侵入を防止](#悪意あるコードの侵入を防止) の章で説明されているように、ユーザーテキストを使用する場合に不要なタグの再解釈を避けるには、`4DHTML` タグではなく `4DTEXT` タグの使用が強く推奨されます。`4DTEXT` を使用した場合、"<" などの特殊記号はエスケープされるため、`<!--#4dtag expression-->` シンタックスを使用している 4Dタグはすべて元の意味を失います。 しかしながら、`4DTEXT` は `$` 記号をエスケープしないため、悪意あるコードの侵入を防ぐために `$4dtag (expression)` シンタックスにおける再帰的処理はサポートしないことになりました。

以下の例では、使用されるシンタックスとタグによる処理の結果の違いを表しています:

```4d
  // 例 1
 myName:="<!--#4DHTML QUIT 4D-->" // 悪意あるコードの侵入
 input:="My name is: <!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  // 4D は終了していまいます
```

```4d
  // 例 2
 myName:="<!--#4DHTML QUIT 4D-->" // 悪意あるコードの侵入
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  // 結果は "My name is: <!--#4DHTML QUIT 4D-->"
```

```4d
  // 例 3
 myName:="$4DEVAL(QUIT 4D)" // 悪意あるコードの侵入
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  // 結果は "My name is: $4DEVAL(QUIT 4D)"
```

`$4dtag` シンタックスは、引用符や括弧の開閉ペアをサポートしているという点に注意してください。 たとえば、以下の (非現実的な) 文字列を評価しなければならない場合:

```
String(1) + "\"(hello)\""
```

以下のように書くことができます:

```4d
 input:="$4DEVAL( String(1)+\"\\\"(hello)\\\"\")"
 PROCESS 4D TAGS(input;output)
 --> 結果は: 1"(hello)"
```
