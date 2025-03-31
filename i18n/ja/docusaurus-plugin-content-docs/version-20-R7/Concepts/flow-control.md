---
id: control-flow
title: 制御フロー
---

メソッドや関数が単純か複雑かに関係なく、開発者は3つのプログラミング構造のうち、1つ以上を常に使用します。 プログラミング構造は、メソッド内でステートメントが実行される順序を決定する実行フローをコントロールします。 3つのタイプの構造があります:

- **シーケンシャル**: シーケンシャル構造は単純な線形構造です。 シーケンスとは、4Dが最初から最後まで次々に実行する一連のステートメントです。 オブジェクトメソッドで頻繁に使用される1行から成るルーチンはもっとも簡単なシーケンシャル構造の例です。 例: `[People]lastName:=Uppercase([People]lastName)`
- **分岐**: 分岐構造は、条件をテストし、その結果に基づいて異なる流れにメソッドを導きます。 条件は true または false に評価されるブール式です。 [`If...Else...End if`](#ifelseend-if) 構文は分岐構造の一例で、処理フローを二つに分岐します。 [`Case of...Else...End case`](#case-ofelseend-case) 構文も分岐構造の一つで、処理フローをもっとたくさん分岐することができます。
- **ループ**: メソッドの作成にあたって、何度も同じ処理を繰り返すことがあります。 これに実現するために、4D は以下のループ構造を備えています:

  - [`While...End while`](#whileend-while)
  - [`Repeat...Until`](#repeatuntil)
  - [`For...End for`](#forend-for)
  - [`For each...End for each`](#for-eachend-for-each)

ループを制御する方法には、条件が満たされるまでループする方法と、指定した回数だけループする方法の2通りがあります。 各ループ構造はいずれの方法にも用いることができますが、`While` ループと `Repeat` ループは条件が満たされるまで繰り返す場合に、`For` ループは指定した回数だけループする場合の利用に適切です。  `For each...End for each` ループは両方を組み合わせることが可能で、オブジェクトやコレクション内でループするために設計されています。

**注:** 4Dはプログラム構造 (If/While/For/Caes of/Repeat/For each) を512レベルまで入れ子で記述できます。

## If...Else...End if

`If...Else...End if` による制御フロー構造の正式な構文は以下のようになります:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
    statement(s)
 End if
```

`Else` 部分はオプションであり、省略して以下のように記述できます:

```4d
 If(Boolean_Expression)
    statement(s)
 End if
```

`If...Else...End if` 構造は、条件 (ブール式) が true か false かによって、処理の選択肢を2つメソッドに与えます。 ブール式が true の場合は、テストのすぐ後のステートメントを実行し、 ブール式が FALSE の場合には、Else 文のすぐ後のステートメントを実行します。 任意の `Else` が省略されていた場合、`End if` のすぐ後のステートメント (あれば) へと実行が続行されます。

ブール式は常に全体が評価されるという点に注意してください。 たとえば、以下のような場合:

```4d
 If(MethodA & MethodB)
    ...
 End if
```

この場合、両方のメソッドが true である場合に限り、式は true になります。 しかしながら *MethodA* が false であっても、4D は *MethodB* も評価するため、これは時間の無駄になります。 この場合には、以下のような構造を使用するほうが賢明といえます:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

上記の結果はほぼ同じで、*MethodB* は必要な場合にのみ評価されます。

> **注記:** [三項演算子](../dt_boolean.md#三項演算子) を使うことで、条件式を 1行で書くことができ、[If...Else](../cf_branching.md#ifelseend-if) 文を置き換えることもできます。

#### 例題

```4d
  // ユーザーに名前の入力を求めます
 $Find:=Request("名前を入力してください")
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("名前が入力されませんでした")
 End if 
```

**Tip:** 一方の条件に実行ステートメントがない分岐処理を書くこともできます。 下のようなコードはどちらも有効です:

```4d
 If(Boolean_Expression)
 Else
    statement(s)
 End if
```

または:

```4d
 If(Boolean_Expression)
    statement(s)
 Else
 End if
```

## Case of...Else...End case

`Case of...Else...End case` による制御フロー構造の正式な構文は以下のようになります:

```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

`Else` 部分はオプションであり、省略して以下のように記述できます:

```4d
 Case of
    :(Boolean_Expression)
       statement(s)
    :(Boolean_Expression)
       statement(s)
       .
       .
       .
 
    :(Boolean_Expression)
       statement(s)
 End case
```

`If...Else...End if` と同様に、`Case of...Else...End case` 構造も処理の選択肢をメソッドに与えます。 `If...Else...End` との違いは、`Case of...Else...End case` 構造が複数のブール式を評価し、その中から最初に true となるステートメントを実行することです。

ブール式の前にはそれぞれコロン (`:`) を付けます。 コロンとブール式の組み合わせをケースと呼びます。 例えば以下の行はケースです:

```4d
:(bValidate=1)
```

最初に true になったケースに続く (次のケースまでの) ステートメントだけが実行されます。 true になるケースがない場合、どのステートメントも実行されません (`Else` 文が指定されていない場合) 。

最後のケースの後に Else 文を含むことができます。 すべてのケースが FALSE の場合に、`Else` 文の後のステートメントが実行されます。

#### 例題

下記の例は数値変数を判定し、対応する数字をアラートボックスに表示します:

```4d
 Case of
    :(vResult=1) // 数値が1の場合
       ALERT("一です。") // 1のアラートボックスを表示します
    :(vResult=2) // 数値が2の場合
       ALERT("二です。") // 2のアラートボックスを表示します
    :(vResult=3) // 数値が3の場合
       ALERT("三です。") // 3のアラートボックスを表示します
    Else // 数値が1,2,3のいずれでもない場合
       ALERT("一、二、三のいずれでもありません。")
 End case
```

比較するために、同じことを `If...Else...End if` 構文で記述すると以下のようになります。

```4d
 If(vResult=1) // 数値が1の場合
    ALERT("一です。") // 1のアラートボックスを表示します
 Else
    If(vResult=2) // 数値が2の場合
       ALERT("二です。") // 2のアラートボックスを表示します
    Else
       If(vResult=3) // 数値が3の場合
          ALERT("三です。") // 3のアラートボックスを表示します
       Else // 数値が1,2,3のいずれでもない場合
          ALERT("一、二、三のいずれでもありません。")
       End if
    End if
 End if
```

`Case of...Else...End case` 構造は、最初に true になったケースだけを実行します。 2つ以上のケースが true の場合は、最初に true になったケースのステートメントだけを実行します。

したがって、階層的なテストを実行するときには、階層上で低い位置にある条件がテスト順序で先に記述されていることを確認する必要があります。 以下の例では、ケース2が true の場合、ケース1も必ず true であるため、ケース1は後に位置すべきです。 このままの順序では、ケース2のステートメントはけっして実行されません:

```4d
 Case of
    :(vResult=1)
       ... // ステートメントなど
    :((vResult=1) & (vCondition#2)) // このケースが判定されることはありません
       ... // ステートメントなど
 End case
```

vResult = 1の判定により他の条件を見る前に分岐するので、第2のケースが判定されることはありません。 コードが正しく実行されるためには次のように書きます:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) // このケースが先に判定されます
       ... // ステートメントなど
    :(vResult=1)
       ... // ステートメントなど
 End case
```

さらに階層的なテストを実行したい場合、コードも階層化する必要があります。

**Tip:** 分岐構造において、ケースに続くステートメントの記述は必須ではありません。 下のようなコードはどちらも有効です:

```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
      ...
 
    :(Boolean_Expression)
       statement(s)
    Else
       statement(s)
 End case
```

または:

```4d
 Case of
    :(Boolean_Expression)
    :(Boolean_Expression)
       statement(s)
       ...
        
    :(Boolean_Expression)
       statement(s)
    Else
 End case
```

または:

```4d
 Case of
    Else
       statement(s)
 End case
```

## While...End while

`While...End while` による制御フロー構造の正式な構文は以下のようになります:

```4d
 While(Boolean_Expression)
    statement(s)
    {break}  
    {continue}
 End while
```

`While...End while` ループは、ブール式が true である限り、ループ内のステートメントを実行し続けます。 ループの始めにブール式を評価し、ブール式が FALSE の場合にはループをおこないません。

`break` および `continue` ステートメントについては [後述します](#break-と-continue)。

一般に、`While...End while` ループに入る手前で、ブール式で判定する値を初期化しておきます。 通常はブール式が true になるように設定してからループに入ります。

ブール式は、ループ内の要素を使って設定されなければなりません。そうでなければ、ループは永久に続くでしょう。 以下の例では、*NeverStop* がいつも true であるので、ループは永久に続きます。

```4d
 NeverStop:=True
 While(NeverStop)
 End while
```

このようにメソッドの実行が制御不能になった場合には、トレース機能を使用し、ループを止めて、問題点を追跡することができます。 メソッドのトレース方法については、[エラー処理](error-handling.md) の章を見てください。

#### 例題

```4d
 CONFIRM("Add a new record?") // ユーザーに確認します
 While(OK=1) // 利用者が望む限りループします
    ADD RECORD([aTable]) // 新規にレコードを追加します
 End while // ループは必ず End while によって終わります
```

この例では、まずループに入る前に `CONFIRM` コマンドによりシステム変数 `OK` がセットされます。 ユーザーがダイアログボックスで **OK** ボタンをクリックすると、システム変数 `OK` に1がセットされ、ループを開始します。 それ以外の場合はシステム変数 `OK` に0が設定され、ループをスキップします。 ループに入ると、`ADD RECORD` コマンドはループを続けます。これは、ユーザーがレコードを保存した時点で、システム変数 `OK` に1が設定されるからです。 ユーザーが最後のレコードを取り消した (保存しない) 時点で、システム変数 `OK` に0がセットされ、ループは終了します。

## Repeat...Until

`Repeat...Until` による制御フロー構造の正式な構文は以下のようになります:

```4d
Repeat
	statement(s)
    {break}  
    {continue}
Until(Boolean_Expression)
```

`Repeat...Until` ループは、[While...End while](flow-control.md#whileend-while) ループと似ていますが、まずループの後でブール式を判定する点が異なります。 つまり、`Repeat...Until` ループは最低でも1回は必ずループを実行しますが、`While...End while` ループは最初のブール式が FALSE である場合には、ループを1回も実行しません。

もう一つの `While...End while` ループとの相違点は、 `Repeat...Until` はブール式が true になるまでループを続行することです。

`break` および `continue` ステートメントについては [後述します](#break-と-continue)。

#### 例題

以下の例を、`While...End while` ループの例と比較してください。 ブール式を、初期化しておく必要がない点に注目してください。システム変数　`OK` を初期化する `CONFIRM` コマンドはありません。

```4d
 Repeat
    ADD RECORD([aTable])
 Until(OK=0)
```

## For...End for

`For...End for` による制御フロー構造の正式な構文は以下のようになります:

```4d
For(Counter_Variable;Start_Expression;End_Expression{;Increment_Expression})
   statement(s)
    {break}  
    {continue}
End for
```

`For...End for` ループは、カウンター変数によりループを制御します:

- カウンター変数 *Counter_Variable* は、数値変数 (実数または倍長整数) で、*Start_Expression* に指定した値に初期化されます。
- ループを実行するたびに、任意の引数である *Increment_Expression* の値がカウンター変数に加算されます。 *Increment_Expression* を指定しない場合、増分値は1になります。
- カウンターが *End_Expression* の値を超えた時点で、ループを停止します。

**重要:** *Start_Expression*、*End_Expression*、*Increment_Expression* の値は、ループの始めに一度だけ評価されます。 これらの数値が変数で指定されている場合、ループ内でその変数の値を変更してもループは影響を受けません。

**Tip:** 特別な目的のために、カウンター変数 *Counter_Variable* の値を変更することができます。ループ内でカウンター変数を変更すると、ループはその影響を受けます。

- 通常、*Start_Expression* は *End_Expression* より小さい。
- *Start_Expression* と *End_Expression* が等しい場合、1回だけループがおこなわれます。
- *Start_Expression* が *End_Expression* より大きい場合、*Increment_Expression* に負の値を指定しない限り、ループはおこなわれません。 次に例を示します。

`break` および `continue` ステートメントについては [後述します](#break-と-continue)。

#### 基本的な使用例

1. 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;1;100)
  // なんらかの処理
 End for
```

2. 以下の例は、配列 anArray の全要素に対して処理をおこないます:

```4d
 For($vlElem;1;Size of array(anArray))
  // 各配列要素に対する処理
    anArray{$vlElem}:=...
 End for
```

3. テキスト変数 vtSomeText の文字を一つ一つループ処理します:

```4d
 For($vlChar;1;Length(vtSomeText))
    // 文字がタブであれば
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        // なんらかの処理をします
    End if
 End for
```

4. 以下の例は、テーブル [aTable] のカレントセクションの各レコードについて処理をおこないます:

```4d
 FIRST RECORD([aTable])
 For($vlRecord;1;Records in selection([aTable]))
  // 各レコードに対する処理
    SEND RECORD([aTable])
  //...
  // 次レコードへ移動します
    NEXT RECORD([aTable])
 End for
```

プロジェクトで作成する大部分の `For...End for` ループは、上記例題のいずれかの形式になるでしょう。

### カウンター変数

#### カウンター変数の減少

ループに際してカウンター変数を増加させるのではなく、減少させたい場合があります。 その場合、*Start_Expression* に *End_Expression* より大きい値を設定し、*Increment_Expression* に負の数を指定する必要があります。 次に挙げる例題は、前述の例と同じ処理を逆の順序でおこないます:

5. 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;100;1;-1)
  // なんらかの処理
 End for
```

6. 以下の例は、配列 anArray の全要素に対して処理をおこないます:

```4d
 For($vlElem;Size of array(anArray);1;-1)
  // 各配列要素に対する処理
    anArray{$vlElem}:=...
 End for
```

7. テキスト変数 vtSomeText の文字を一つ一つループ処理します:

```4d
 For($vlChar;Length(vtSomeText);1;-1)
    // 文字がタブであれば
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        // なんらかの処理をします
    End if
 End for
```

8. 以下の例は、テーブル [aTable] のカレントセクションの各レコードについて処理をおこないます:

```4d
 LAST RECORD([aTable])
 For($vlRecord;Records in selection([aTable]);1;-1)
  // 各レコードに対する処理
    SEND RECORD([aTable])
  //...
  // 前レコードへ移動します
    PREVIOUS RECORD([aTable])
 End for
```

#### 1より大きな値によるカウンター変数の増加

必要に応じて、*Increment_Expression* (正または負の値) に、その絶対値が1より大きな値を指定できます。

9. 以下の例は、配列 anArray の偶数要素について処理を行います:

```4d
 For($vlElem;2;Size of array(anArray);2)
  // 偶数要素 #2,#4...#2n に対する処理
    anArray{$vlElem}:=...
 End for
```

#### For...End for ループの最適化

カウンター変数 (インタープロセス、プロセス、ローカル変数) には実数、または整数タイプを使用します。 数多く繰り返されるループの場合、とくにコンパイルモードでは、倍長整数タイプのローカル変数を使用してください。

10. 次に例を示します:

```4d
 var $vlCounter : Integer // 整数型のローカル変数を使用します
 For($vlCounter;1;10000)
  //Do something
 End for
```

### ループ構造の比較

`For...End for` ループの例をもう一度見てみましょう。 以下の例は、100回の繰り返しをおこないます:

```4d
 For(vCounter;1;100)
  // なんらかの処理
 End for
```

`While...End while` ループと `Repeat...Until` ループで、同じ処理を実行する方法を調べてみましょう。 以下は、同じ処理を実行する `While...End while` ループです:

```4d
 $i:=1 // カウンターの初期化
 While($i<=100) // 100回のループ
  // なんらかの処理
    $i:=$i+1 // カウンターの増分が必要
 End while
```

同じことを `Repeat...Until` ループで記述すると以下のようになります:

```4d
 $i:=1 // カウンターの初期化
 Repeat
  // なんらかの処理
    $i:=$i+1 // カウンターの増分が必要
 Until($i=100) // 100回のループ
```

:::tip

`For...End for` ループは、`While...End while` や `Repeat...Until` ループよりも高速です。これは 4D が内部的にカウンター変数のテストおよび増加をおこなうからです。 したがって、可能な限り `For...End for` ループの使用が推奨されます。

:::

### For...End for の入れ子構造

制御構造は、必要に応じて入れ子にする (ネストする) ことができます。 `For...End for` ループも同じです。 誤りを避けるため、各ループ構造ごとに別のカウンター変数を使用してください。

次に例を示します:

1. 以下の例は二次元配列の全要素への処理です:

```4d
 For($vlElem;1;Size of array(anArray))
  //...
  // 各行に対する処理
  //...
    For($vlSubElem;1;Size of array(anArray{$vlElem}))
  // 各要素に対する処理
       anArray{$vlElem}{$vlSubElem}:=...
    End for
 End for
```

2. 以下の例は、データベースのすべての日付フィールドに対するポインターの配列を作成します:

```4d
 ARRAY POINTER($apDateFields;0)
 $vlElem:=0
 For($vlTable;1;Last table number)
    If(Is table number valid($vlTable))
       For($vlField;1;Last field number($vlTable))
          If(Is field number valid($vlTable;$vlField))
             $vpField:=Field($vlTable;$vlField)
             If(Type($vpField->)=Is date)
                $vlElem:=$vlElem+1
                INSERT IN ARRAY($apDateFields;$vlElem)
                $apDateFields{$vlElem}:=$vpField
             End if
          End if
       End for
    End if
 End for
```

## For each...End for each

`For each...End for each` による制御フロー構造の正式な構文は以下のようになります:

```4d
 For each(Current_Item;Expression{;begin{;end}}){Until|While}(Boolean_Expression)}
    statement(s)
    {break}  
    {continue}
 End for each
```

`For each...End for each` 構造は、*Expression* に含まれるすべての*Current_item* に対して処理を繰り返します。 *Current_item* の型は *Expression* の型に依存します。 `For each...End for each` ループは3種類の \*Expression \* を対象に反復処理をおこなうことができます:

- コレクション: コレクションの各要素をループします
- エンティティセレクション: 各エンティティをループします
- オブジェクト: 各オブジェクトプロパティをループします

以下の表は、`For each...End for each` の3つのタイプを比較したものです:

|                                      | コレクション内のループ                           | エンティティセレクション内のループ | オブジェクト内のループ   |
| ------------------------------------ | ------------------------------------- | ----------------- | ------------- |
| Current_Item の型 | コレクション要素と同じ型の変数                       | Entity            | テキスト変数        |
| Expression の型                        | (同じ型の要素を持つ) コレクション | エンティティセレクション      | オブジェクト        |
| ループ数 (デフォルト)      | コレクションの要素数                            | セレクション内のエンティティ数   | オブジェクトのプロパティ数 |
| begin / end パラメーターをサポート              | ◯                                     | ◯                 | ×             |

- ループの数は開始時に評価され、処理中に変化することはありません。 ループ中に項目を追加・削除することは、繰り返しの不足・重複を引き起こすことがあるため、一般的には推奨されません。
- デフォルトでは、内部の *statement(s)* 部の処理は、*Expression* の各項目に対して実行されます。 しかしながら、ループの先頭 (`While`) あるいはループの終わり (`Until`) で条件をテストすることで、ループを抜け出すことは可能です。
- 任意の *begin* および *end* パラメーターを指定することで、コレクションおよびエンティティセレクションに対してループの範囲を定義することができます。
- `For each...End for each` ループは **共有コレクション** や **共有オブジェクト** に対して使用することもできます。 コレクションの要素またはオブジェクトのプロパティを変更する場合は、`Use...End use` 構文も追加で必要です。 `Use...End use` 構文の使い方は、つぎのように状況に応じて異なります:
  - 整合性のため要素やプロパティを一括で処理しなくてはならない場合には、ループに入る前 (外側) に使います。
  - 要素やプロパティを個々に変更して差し支えない場合は、ループの中で使います。

`break` および `continue` ステートメントについては [後述します](#break-と-continue)。

### コレクション内のループ

`For each...End for each` が *Collection* 型の *Expression* に対して使用された場合、*Current_Item* はコレクション要素と同じ型の変数です。 デフォルトでは、ループの回数はコレクションの要素数に基づいています。

コレクションの要素はすべて同じ型でなくてはなりません。 そうでない場合には、*Current_Item* 変数に別の型の値が代入されたときにエラーが生成されます。

各ループの繰り返しにおいて、*Current_Item* 変数には、合致するコレクションの要素が自動的に代入されます。 このとき、以下の点に注意する必要があります:

- *Current_Item* 変数がオブジェクト型、あるいはコレクション型であった場合 (つまり *Expression* がオブジェクトのコレクション、あるいはコレクションのコレクションであった場合)、この変数を変更するとコレクションの対応する要素も自動的に変更されます (オブジェクトとコレクションは同じ参照を共有しているからです)。 変数がスカラー型である場合には、変数のみが変更されます。
- *Current_Item* 変数は、コレクション要素の型と合致していなくてはなりません。 コレクション要素のどれか一つでも、変数と異なる型のものがあった場合、エラーが生成され、ループは停止します。
- コレクションが **Null** 値の要素を格納していたとき、*Current_Item* 変数の型が **Null** 値をサポートしない型 (倍長整数変数など) であった場合にはエラーが生成されます。

#### 例題

数値のコレクションを対象に、統計情報を計算します:

```4d
 var $nums : Collection
 $nums:=New collection(10;5001;6665;33;1;42;7850)
 var $item;$vEven;$vOdd;$vUnder;$vOver : Integer
 For each($item;$nums)
    If($item%2=0)
       $vEven:=$vEven+1
    Else
       $vOdd:=$vOdd+1
    End if
    Case of
       :($item<5000)
          $vUnder:=$vUnder+1
       :($item>6000)
          $vOver:=$vOver+1
    End case
 End for each
  //$vEven=3, $vOdd=4
  //$vUnder=4,$vOver=2
```

### エンティティセレクション内のループ

`For each...End for each` が *Entity selection* 型の *Expression* に対して使用された場合、*Current_Item* は現在処理中のエンティティです。

ループの回数はエンティティセレクション内のエンティティの数に基づきます。 各ループの繰り返しにおいて、*Current_Item* には、処理の対象であるエンティティセレクション内のエンティティが自動的に代入されます。

**注:** エンティティセレクション内のエンティティが、途中で他のプロセスによって削除された場合、そのエンティティはループにおいて自動的にスキップされます。

カレントエンティティに対して適用された変更は、`entity.save()` で明示的に保存する必要があることに注意してください。

#### 例題

Employees データクラスの中から、英国の従業員の給与を引き上げます:

```4d
 var emp : Object
 For each(emp;ds.Employees.query("country='UK'"))
    emp.salary:=emp.salary*1,03
    emp.save()
 End for each
```

### オブジェクト内のループ

`For each...End for each` が Object 型の *Expression* に対して使用された場合、*Current_Item* は現在処理中のプロパティ名が自動代入されたテキスト変数です。

オブジェクトのプロパティは作成順に処理されていきます。 ループ中、プロパティをオブジェクトに追加/削除することが可能ですが、その場合でも残りのループ回数は、オブジェクトの元のプロパティ数に基づいているため、変化しません。

#### 例題

下のオブジェクトに格納されている名前に関したプロパティの値をすべて大文字に変えます:

```4d
{
    "firstname": "gregory",
    "lastname": "badikora",
    "age": 20
}
```

以下のように書くことができます:

```4d
 For each($property;$vObject)
    If(Value type($vObject[$property])=Is text)
       $vObject[$property]:=Uppercase($vObject[$property])
    End if
 End for each
```

```
{
    "firstname": "GREGORY",
    "lastname": "BADIKORA",
    "age": 20
}
```

### begin / end パラメーター

任意の begin と end パラメーターを指定することで、繰り返しの範囲を定義することができます。

**注:** *begin* と *end* パラメーターは、コレクションおよびエンティティセレクション型に対するループにおいてのみ使用することができます (オブジェクト型のときは無視されます)。

- *begin* には、*Expression* においてループを開始したい要素位置を渡します (このとき *begin* の値が指す要素はループに含まれます)。
- *end* には、*Expression* においてループを終了する要素位置を渡します (このとき *end* の値が指す要素はループに含まれません)。

*end* が省略されている、あるいは *end* が *Expression* の要素数より大きい場合、*begin* 引数の位置から最後の要素まで (含まれる) をループします。
*begin* と *end* が正の値の場合、それらは *Expression* 内の要素の実際の位置を表します。
*begin* 引数が負の値の場合、それは `begin:=begin+Expression のサイズ` として再計算されます (つまり、*Expression* の終端からのオフセットであるとみなされます)。 再計算された値も負の値だった場合、*begin* は0に設定されます。
**注:** *begin* が負の値だったとしても、繰り返しそのものは標準の順番で実行されます。
*end* が負の値だった場合、それは `end:=end+Expression のサイズ` として再計算されます。

例:

- コレクションには 10の要素が格納されています (ナンバリングは #0から#9)
- begin=-4 -> begin=-4+10=6 -> ループは6番目の要素 (#5) から開始されます
- end=-2 -> end=-2+10=8 -> 繰り返しは8番目の要素 (#7) の前に終了します、つまり7番目 (#6) の要素の処理が最後のループとなります。

#### 例題

```4d
 var $col;$col2 : Collection
 $col:=New collection("a";"b";"c";"d";"e")
 $col2:=New collection(1;2;3)
 var $item : Text
 For each($item;$col;0;3)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c"]
 For each($item;$col;-2;-1)
    $col2.push($item)
 End for each
  //$col2=[1,2,3,"a","b","c","d"]
```

### Until と While 条件

`For each...End for each` の実行は、`Until` あるいは `While` 条件を追加することでコントロールすることができます。 `Until(condition)` 条件がループに組み込まれた場合、`condition` の式が `true` に評価されるとループは停止します。 `While(condition)` 条件の場合は逆に、`condition` の式が `false` になるとループが停止します。

使用する条件は状況に応じて選べます:

- `Until` 条件は各ループの終わりにテストされます。そのため、*Expression* が空あるいは null でないかぎり、ループは少なくとも1回は実行されます。
- `While` 条件は各ループの始めにテストされます。そのため、評価の結果次第では、ループは一度も実行されないこともありえます。

#### 例題

```4d
 $colNum:=New collection(1;2;3;4;5;6;7;8;9;10)

 $total:=0
 For each($num;$colNum)While($total<30) // 最初にテストされます
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 36 (1+2+3+4+5+6+7+8)

 $total:=1000
 For each($num;$colNum)Until($total>30) // 最後にテストされます
    $total:=$total+$num
 End for each
 ALERT(String($total)) //$total = 1001 (1000+1)
```

## break と continue

上記のループ構造はすべて、`break`文および `continue`文をサポートしています。 これらの文は、ループを完全に終了させたり、現在の繰り返しだけを終了させたりすることで、ループをよりコントロールすることができます。

### break

`break`文は、その文が含まれるループを終了させます。 プログラムの制御は、ループ直後のステートメントに移ります。

[入れ子になったループ](#forend-for-の入れ子構造) (ループ内に別のループがある) の中に `break`文がある場合、`break`文は最も内側のループを終了させます。

#### 例題

```4d
For (vCounter;1;100)
    If ($tab{vCounter}="") // 条件が true になった場合
        break // forループを終了させます
    End if
End for
```

### continue

`continue`文は、ループにおいて現在実行中の繰り返しだけを終了させ、次の繰り返しよりループの実行を継続させます。

```4d
var $text : Text
For ($i; 0; 9)
    If ($i=3)
        continue // 次の繰り返しに移行します
    End if
    $text:=$text+String($i)
End for
// $text="012456789"

```

## return {expression}

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 19 R4 | 追加 |

</details>

`return`文はどこからでも呼び出すことができます。 関数やメソッドの中で `return` 文が使われると、その関数やメソッドの実行が中断されます。 残りのコードは実行されず、呼び出し元に制御が返されます。

`return` 文を使用して、呼び出し元に[戻り値](parameters.md#戻り値) を返すことができます。

#### 例題

```4d
var $message : Text
var $i : Integer

While (True) // 無限ループ
    $i:=$i+1
    $message+=String($i)+"A\r"  // 5まで実行されます
    logConsole($message)
    If ($i=5)
        return // ループを終了させます
    End if 
    $message+=String($i)+"B\r"  // 4まで実行されます
    logConsole($message)
End while 
$message+=String($i)+"C\r"  // 実行されることはありません 
logConsole($message)

// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A

```
