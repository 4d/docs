---
id: query-by-attribute
title: QUERY BY ATTRIBUTE
slug: /commands/query-by-attribute
displayed_sidebar: docs
---

<!--REF #_command_.QUERY BY ATTRIBUTE.Syntax-->**QUERY BY ATTRIBUTE** ( {*aTable*}{;}{*conjOp* ;} *objectField* ; *attributePath* ; *queryOp* ; *value* {; *} )<!-- END REF-->
<!--REF #_command_.QUERY BY ATTRIBUTE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | セレクションまたはレコードを返すテーブル 省略時:デフォルトテーブル |
| conjOp | * | &#8594;  | 複数のクエリ(あれば)を連結する際に使用する結合演算子 |
| objectField | Field | &#8594;  | 属性をクエリするオブジェクトフィールド |
| attributePath | Text | &#8594;  | 属性の名前またはパス |
| queryOp | Text, * | &#8594;  | クエリ演算子(比較演算子) |
| value | Text, Number, Date, Time | &#8594;  | 比較する値 |
| * | 演算子 | &#8594;  | クエリ継続フラグ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QUERY BY ATTRIBUTE.Summary-->**QUERY BY ATTRIBUTE** は*objectField*、*attributePath*、*queryOp* そして *value* 引数を使用して定義されたクエリ文字列に合致するレコードを検索し、*aTable* に対しレコードのセレクションを返します。<!-- END REF-->

**QUERY BY ATTRIBUTE** はカレントプロセスにおいて*aTable* で指定されたテーブルのカレントセレクションを変更し、新しいセレクションの第一レコードをカレントレコードとします。*aTable* 引数が省略されていた場合、コマンドはデフォルトのテーブルへと適用されます。デフォルトテーブルが設定されていない場合、エラーが発生します。

任意の*conjOp* 引数を使用すると、**QUERY BY ATTRIBUTE** の呼び出しを複数のクエリ定義と組み合わせることができます。使用可能な接続演算子は[QUERY](query.md) コマンドに対して使用できるものと同じです:

| **接続子** | **QUERY BY ATTRIBUTEで使用する記号** |
| ------- | ----------------------------- |
| AND     | &                             |
| OR      | \|                            |
| Except  | #                             |

*conjOp* 引数は、複数のクエリの最初の**QUERY BY ATTRIBUTE** の呼び出しには使用しません。また単一のクエリの場合にも使用しません。複数のクエリにおいて省略された場合、AND (&) 演算子がデフォルトで使用されます。

*objectField* 引数には、クエリしたい属性のオブジェクトフィールドを渡します。そのオブジェクトフィールドが*aTable* 引数で指定したテーブルに自動または手動でリレートした1テーブルに属していた場合、*objectField* には他のテーブルに属するフィールドを指定することもできます。  
**QUERY BY ATTRIBUTE** はドキュメントがオブジェクトフィールドに保存されていた場合、4D Write Proのカスタム属性をサポートします。この点についてのより詳細な情報については、*4D Write Proドキュメントを4Dオブジェクトフィールドに保存する* の章を参照して下さい。

*attributePath* 引数にはレコード毎に値を比較したい属性のパスを渡します (例: "children.girls.age")。単一の属性名 (例えば "place") を渡した場合には、オブジェクトフィールドの第一レベルでその名称に合致する属性を指定したことになります。属性"x"が配列であった場合、**QUERY BY ATTRIBUTE** コマンドは、少なくとも一つの要素が条件に合致する属性"x"を含むレコードを検索します。配列内の属性を検索するためには、*attributePath* 引数内において属性”x”の名前に".\[\]"を付与することにより、**QUERY BY ATTRIBUTE** コマンドに対し、属性"x"が配列であるという事を指示する必要があります(例3を参照して下さい)。

カッコで括った文字を追加する(例 "\[b\]")ことで引数をリンクすることができます(後述の*配列属性のクエリ引数をリンクする*の段落を参照してください)。

**注:** 

* 属性名は大文字と小文字が区別されるという点に注して下さい。つまり同じレコード内にて"MyAtt" と "myAtt" という、異なる属性名を持つことができるということです。
* 属性名は不要な空白を取り除くために短縮されます。例えば、" my first attribute .my second attribute " は、 "my first attribute.my second attribute"として解釈されます。
* "." や "\[ \]" といった特殊文字を含む属性名を使用することはできません。文字列での並べ替えの際にトークンとして不正に評価されてしまうからです。詳細な情報については、*オブジェクトプロパティ識別子*の段落を参照してください。

*queryOp* 引数は、*objectField* 引数と *value* 引数の間に適用される比較演算子です。以下の記号のどれか一つを渡す事ができます:

| **比較**    | **QUERY BY ATTRIBUTEで使用する記号** |
| --------- | ----------------------------- |
| 同値である     | \=                            |
| 同値でない(\*) | #                             |
| 未満        | <                             |
| を超える      | \>                            |
| 以下        | <=                            |
| 以上        | \>=                           |

(\*) 配列要素に対して使用した場合、# 演算子は"どれも含まれない"を意味します。

**注:** 比較演算子を記号ではなく、テキスト表現で指定することも可能です。詳細な情報に関しては、[QUERY](query.md) コマンドの説明を参照して下さい。

*value* 引数は、*attributePath* 引数と比較するためのデータです。この値は*attributePath*引数と同じデータ型として評価されるものであればどんな表現も可能です。値は一度だけ、クエリの最初に評価されます。値はそれぞれのレコードに対して毎回評価されることはありません。文字列内に含まれる文字列をクエリする("を含む"クエリ)ためには、ワイルドカード記号(@)を*value* 引数に使用して検索したい文字列を隔離します(例:"@Smith@")。この場合、インデックスの利点を一部しか享受しないという点に注して下さい(データ保存のコンパクト化)。

属性によるクエリのストラクチャーは以下の様になります:

```4d
 QUERY BY ATTRIBUTE([Table] ;[Table]ObjectField ;"attribute1.attribute2";=;value)
```

**注**: 全ての演算子(ただし"#"は除く)に対して、オブジェクトフィールドには属性が含まれている、というのが暗示的な前提条件になります。しかしながら、"#"演算子に対しては、未定義の属性も使用可能です(以下を参照して下さい)。

##### 

**#** 演算子を使用して属性をクエリする場合、レコードないに属性が存在しない場合も考慮にいれる必要があります。例えば、以下の様な宣言を考えます:

```4d
 QUERY BY ATTRIBUTE([People];[People]Animals;"dog.name";#;"Rex")
```

このクエリは"Rex"ではない名前の犬を飼っている人のレコードを返しますが、犬を飼っていない人のレコード、あるいは名前のない犬を飼っている人のレコード(つまり"dog.name"プロパティの値が**null** であるレコード)は**返しません**。この理由となる概念は次のようなものです: クエリエンジンは比較不能な比較(つまり不足しているまたは存在していないデータとの比較)は行えません。そのため、検索条件と比較できないレコードはクエリから除外されてしまいます。

より一般的な例題を使用してみます:

```4d
 QUERY BY ATTRIBUTE([Table];[Table]ObjectField;"attribute1.attribute2";#;value)
```

このクエリは、値が*value* ではない*attribute2* 属性を格納しているオブジェクトである*attribute1* 属性をもつオブジェクトを格納している *\[Table\]ObjectField* テーブルの全てのレコードを返します。しかし以下のものは**返されません**:

* *attribute1* を格納していないオブジェクトフィールド
* **attribute1.attribute*2 を格納していないオブジェクトフィールド
* **attribute1.attribute*2=null を格納しているオブジェクトフィールド

この原理はまた、配列の属性に対しても適用されます。例えば、以下のクエリは一つまたは複数の住所を持つ人のレコードを返しますが、パリの住所を持つ人は返されません。

```4d
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";#;"paris")
```

**注:** 属性が未定義であるレコードを指定して取得したい場合、空のオブジェクトを使用する方法があります(例題2参照)。しかしながら、配列要素内においてNULL 値を検索することはサポートされていないことに注意してください。

##### 複数のクエリの作成 

属性によるクエリを複数組み合わせる際には、以下のルールが適用されます:

* 最初のクエリ文字列は接続子を含んではいけません。
* その後のそれぞれのクエリ文字列は接続子から始まります。省略した場合mAND(&)演算子がデフォルトで使用されます。
* 最初のクエリと、最後を除く他の全てのクエリは、 *\** 演算子を使用しなければなりません。
* **QUERY BY ATTRIBUTE** コマンドは[QUERY](query.md) コマンドと組み合わせて使用することができます(例を参照して下さい)。
* クエリを実行するためには、最後の**QUERY BY ATTRIBUTE** コマンドにおいて *\** 引数を指定してはいけません。その代り、[QUERY](query.md) コマンドをテーブルのみで(他の引数を必要とせず)実行する事ができます。

**注:** それぞれのテーブルは現在ビルトされたクエリを維持します。これはつまり、それぞれのテーブルに対して一つずつ、複数のクエリを同時に作成できるという事です。

どのように定義されたとしても、クエリには以下の制限がつきますNo matter which way a query has been defined:

* 実際のクエリオペレーションが実行にある程度の時間が必要になる場合、4Dは自動的に進捗バー(サーモメーター)を含めたメッセージを表示します。このメッセージは[MESSAGES ON](messages-on.md) や [MESSAGES OFF](messages-off.md)  コマンドを使用することによってオン・オフを切り替えることができます。進捗バーが表示されているとき、ユーザーはストップボタンを押すことによってクエリを中断することができます。クエリが完了すると、OK変数が1に設定されます。それ以外の場合、例えがクエリが中断されたばあなどには、OK変数は0(ゼロ)に設定されます。
* インデックスされたオブジェクトフィールドが指定された場合、クエリは毎回可能な限り最適化されるので(インデックスされたフィールドから先に検索されます)、結果として可能な限り最小限の時間でクエリを終えることができます。

##### オブジェクト内の日付の値 

日付はオブジェクト内において、データベース設定に沿った形で保存されています。デフォルトでは、タイムゾーンは考慮されます([SET DATABASE PARAMETER](set-database-parameter.md) コマンドのJSON use local time を参照して下さい)。

```json
!1973-05-22! -> "1973-05-21T23:00:00.000Z"
```

この設定はクエリにおいても影響するので、データベースを常に毎回同じ場所で使用し、データにアクセスる全てのマシンの設定が同じであれば何も心配する必要がありません。この場合、以下のクエリは、Birthday属性が!1973-05-22!("1973-05-21T23:00:00.00Z"として保存されている)に一致するレコードを正確に返します:

```4d
 QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"Birthday";=;!1973-05-22!)
```

GMT設定を使用したくない場合、これらの設定を以下の様にして変更する事ができます:

```4d
 SET DATABASE PARAMETER(JSON use local time;0)
```

ただし、この設定のスコープはプロセスのみであるという点に注意して下さい。設定をこのように変更した場合、1965年10月1日は"1965-10-01T00:00:00.000Z"として保存されますが、クエリを実行する前に同じ引数を設定する必要が出てきます:

```4d
 SET DATABASE PARAMETER(JSON use local time;0)
 QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"Birthday";=;!1976-11-27!)
```

##### 仮想的長さプロパティの使用 

このコマンドでは、仮想的な"長さ"プロパティを使用する事ができます。このプロパティは全ての配列型属性に対して自動的に利用可能で、配列のサイズ、つまり含まれる要素の数を返します。**QUERY BY ATTRIBUTE**コマンドを実行するコンテキストにおいて使用する事ができます(例第4を参照)。

##### 配列属性のクエリ引数をリンクする 

(4D v16 R2からの新機能) AND演算子で結合された複数のクエリ引数で配列属性を検索する場合、異なる要素内で引数が見つかるレコードではなく、全ての引数に合致する要素を含むレコードのみが確実に返されるようにしたい場合があるでしょう。このためには、クエリ引数を配列要素に*リンク*する必要があり、これによりリンクされた引数を含む一つの要素のみが見つかるようにする必要があります。

例えば、以下の二つのレコードがある場合を考えます:

*Record 1:*  
\[People\]name: "martin"  
\[People\]OB\_Field:   
 "locations" : \[ {  
 "kind":"home",  
 "city":"paris"   
 } \]

*Record 2:*  
\[People\]name: "smith"  
\[People\]OB\_Field:   
 "locations" : \[ {  
 "kind":"home",  
 "city":"lyon"   
 } , {  
 "kind":"office",  
 "city":"paris"   
 } \]

"home"の"locations"の"kind"が"paris"である人物を探したいとします。ここで以下のように書いた場合: 

```4d
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].city";=;"paris";*)
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[].kind";=;"home")
```

... 上記のクエリでは"martin"に加えて"smith"までも結果として返されます。なぜなら、"smith"は"kind"が"home"である"locations"要素を持ち、"city"が"paris"である"locations"要素も持っているからです。ですが、この二つの要素は実際には異なる要素です。

合致する引数が同じ要素にあるレコードのみを取得したいのであれば、**引数をリンク**する必要があります。クエリ引数をリンクするためには、以下のようにします:

* \[\]で括られた文字を最初のパスに追加し、リンクされた引数には同じ文字で繰り返します。例えば、**locations\[a\].city**そして**locations\[a\].kind**のようにです。ラテン文字であればどの文字でも使用することができます(大文字・小文字は区別されません)。
* 同じクエリ内で、異なるリンクされた条件を追加するためには、別の文字を使用します(以下の例題参照)。単一のクエリ内で、26個まで条件の組み合わせを作成し追加することができます。

上記のレコードにおいては、以下のように記述した場合:

```4d
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[a].city";=;"paris";*)
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations[a].kind";=;"home")
```

... 上記のクエリは"martin"のみを返します。"locations"要素において"kind"が"home"であり、"city"が"paris"であるからです。"smith"に関しては、"home"と"paris"という値が同じ配列要素内に入っていないため、検索結果としては返されません。この機能についての詳細については以下の例題を参照してください。

**注:** リンクされたシンタックスを単一のクエリ行で実行しても、"#"演算子を使用した場合を除き、標準のクエリと同じ結果が返されます。"#"演算子を使用した場合には、無効な結果が返される可能性があります。そのため、この特定のシンタックスはこの場合にはサポートされていません。

#### 例題 1 

この例においては、"age"属性は文字列か整数の値であり、年齢が20歳から29歳の人を検索したい場合を考えます。最初の2行は属性を整数としてクエリし(>=20 かつ < 30)、最後の1行はフィールドを文字列としてクエリします("2" で始まるが、"2"ではない値)。

```4d
 QUERY BY ATTRIBUTE([Persons];[Persons]OB_Info;"age";>=;20;*)
 QUERY BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";<;30;*)
 QUERY BY ATTRIBUTE([Persons];|;[Persons]OB_Info;"age";=;"2@";*)
 QUERY BY ATTRIBUTE([Persons];&;[Persons]OB_Info;"age";#;"2") //実行したいので、ここでは最後の * は無い
```

#### 例題 2 

**QUERY BY ATTRIBUTE** コマンドを使用すると、特定の属性が定義されている(あるいは定義されていない)レコードを探す事ができます。そのためには、空のオブジェクトを使用します。

```4d
  //オブジェクトフィールド内にてEメールが定義されているレコードを探す
 var $undefined : Object
 QUERY BY ATTRIBUTE([Persons];[Persons]Info;"e-mail";#;$undefined)
```

```4d
  //オブジェクトフィールド内にてZIPコード(郵便番号)が定義されていないレコードを探す
 var $undefined : Object
 QUERY BY ATTRIBUTE([Persons];[Persons]Info;"zip code";=;$undefined)
```

**注:** この特定のシンタックスは配列型属性ではサポートされていません。配列要素内でNULL値を検索した場合には不正な結果が返されます。

#### 例題 3 

配列の属性を含むフィールドを検索したい場合を考えます。以下の二つのレコードがあった時、:

*レコード1:*  
\[People\]name: "martin"  
\[People\]OB\_Field:  
 "locations" : \[ {  
 "kind":"office",  
 "city":"paris"   
 } \]

*レコード2:* 
\[People\]name: "smith"  
\[People\]OB\_Field:  
 "locations" : \[ {  
 "kind":"home",  
 "city":"lyon"   
 } , {  
 "kind":"office",  
 "city":"paris"   
 } \]

 ... **QUERY BY ATTRIBUTE** コマンドに対して以下の宣言をすると、locationが"paris"である人を探します:

```4d
  //配列の属性を".[]" シンタックスでフラグ付けする
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations.[].city";=;"paris")
  //"martin" と "smith" を返す
```

**注:** 同じ配列の属性に対し複数の条件を定義した場合、合致した条件は必ずしも同じ配列の要素に対して適用されるとは限りません。以下の例においては、”kind"が"home"である”locations"要素と、"city"が"paris"である"locations"要素を持っているために"smith"が返されますが、これら二つは同じ要素ではありません:

```4d
 QUERY BY ATTRIBUTE([People];[People]OB_Field;"locations.[].kind";=;"home";*)
 QUERY BY ATTRIBUTE([People];&;[People]OB_Field;"locations.[].city";=;"paris")
  //"smith"を返す
```

#### 例題 4 

この例題では、仮想的な"長さ"プロパティの使用について説明します。データベースには\[Customer\]full\_Dataというオブジェクトフィールドがあり、以下のデータが入っているものとします:

![](../assets/en/commands/pict2994114.en.png)

子供が二人以上いる顧客のレコードを取得したい場合を考えます。この場合、以下のように書く事ができます:

```4d
 QUERY BY ATTRIBUTE([Customer];[Customer]full_Data;"Children.length";>=;2)
```

#### 例題 5 

以下の例は配列でのリンクされたクエリ引数において利用可能な様々な組み合わせを示しています。ここでは以下のようなレコードがある場合を考えます:

*Record1:*  
\[Person\]Name: "Sam"  
\[Person\]ObjectField:   
 "Children": \[ {  
 "Name": "Harry",  
 "Age": "15",  
 "Toy": \[ {  
 "Name": "Car",  
 "Color": "Blue"   
 }, {  
 "Name": "Teddy Bear",  
 "Color": "Brown"   
 } \]  
 }, {  
 "Name": "Betty",  
 "Age": "9",  
 "Toy": \[ {  
 "Name": "Car",  
 "Color": "Green"   
 }, {  
 "Name": "Puzzle",  
 "Color": "Blue"   
 } \]  
 } \]

*Record2:*  
\[Person\]Name: "Louis"  
\[Person\]ObjectField:  
 "Children": \[ {  
 "Name": "Harry",  
 "Age": "15",  
 "Toy": \[ {  
 "Name": "Water gun",  
 "Color": "Blue"   
 } \]  
 }, {  
 "Name": "Betty",  
 "Age": "3",  
 "Toy": \[ {  
 "Name": "Car",  
 "Color": "Blue"   
 }, {  
 "Name": "Puzzle",  
 "Color": "Green"   
 } \]  
 } \]

*Record3:*  
\[Person\]Name: "Victor"  
\[Person\]ObjectField:   
 "Children": \[ {  
 "Name": "Harry",  
 "Age": "9",  
 "Toy": \[ {  
 "Name": "Doll",  
 "Color": "Pink"   
 }, {  
 "Name": "Puzzle",  
 "Color": "Blue"   
 } \]  
 }, {  
 "Name": "Betty",  
 "Age": "15",  
 "Toy": \[ {  
 "Name": "Water gun",  
 "Color": "Blue"   
 } \]  
 } \]

この中から、15歳の"Betty"という名前の子供を持つ人物を探したい場合:

```4d
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Betty";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15")
  //検索結果は"Victor"
 
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Betty";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15")
  //検索結果は"Sam"、"Louis" および "Victor"
```

15歳の"Betty"という名前の子供と、9歳の"Harry"という名前の子供を持つ人物を探したい場合:

```4d
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Betty";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[b].Name";=;"Harry";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[b].Age";=;"9")
  //検索結果は "Victor"
 
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Betty";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Harry";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"9")
  //検索結果は "Sam" および "Victor"
```

15歳の"Harry"という名前で、"blue car"のおもちゃを持っている子供を持っている人物を探したい場合(配列の配列を検索する):

```4d
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[a].Name";=;"Harry";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Toy[b].Name";=;"Car";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[a].Toy[b].Color";=;"Blue")
  //検索結果は "Sam"
 
 QUERY BY ATTRIBUTE([Person];[Person]ObjectField;"Children[].Name";=;"Harry";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Age";=;"15";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Toy[].Name";=;"Car";*)
 QUERY BY ATTRIBUTE([Person];&;[Person]ObjectField;"Children[].Toy[].Color";=;"Blue")
  //検索結果は "Sam" および "Louis"
```

#### システム変数およびセット 

クエリが正しく実行されると、OKシステム変数が1に設定されます。以下の場合は0に設定されます:  

* クエリダイアログボックスでユーザがキャンセルボタンをクリックした。
* "QUERY and LOCK"モード ([SET QUERY AND LOCK](set-query-and-lock.md "SET QUERY AND LOCK")コマンド参照)、クエリが一つ以上のロックされたレコードを見つけた。この場合、LockedSetシステムセットが更新されます。

#### 参照 

  
*4Dオブジェクトの構造*  
[QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)  