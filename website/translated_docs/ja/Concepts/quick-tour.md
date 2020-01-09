---
id: quick-tour
title: 概要
sidebar_label: 概要
---

4D ランゲージを使用して "Hello, world!" メッセージを表示するには複数の方法があります。 一番簡単な方法はおそらく、プロジェクトメソッドにコードを1行、次のように書くやり方です:

```code4d
ALERT("Hello, World!")
```

このコードは、 "Hello, World!" メッセージが表示された、OK ボタンの付いたプラットフォームの標準的なアラートダイアログボックスを開きます。 コードを実行するには、メソッドエディターの左上にある実行ボタンをクリックします:

![alt-text](assets/en/Concepts/helloworld.png)

あるいは、フォーム内のボタンにこのコードを付けた場合、フォームを実行した状態でボタンをクリックすると、その都度アラートメッセージが表示されます。 いずれの方法でも、前述の1行のコードを実行するだけで目的達成です！

## 値の代入

変数、フィールド、配列要素などを対象に、データを格納したり、格納したデータを別の対象にコピーしたりすることができます。 変数にデータを格納することを、変数にデータを代入すると言い、代入演算子 (:=) を使っておこないます。 代入演算子はフィールドや配列要素に対してデータを代入する場合にも使います。

```code4d
$MyNumber:=3 // MyNumber 変数に数値の3を代入します
[Products]Size:=$MyNumber // [Products]Size フィールドに MyNumber 変数の値を代入します
arrDays{2}:="Tuesday" // arrDays 配列の第二要素に文字列 "Tuesday" を代入します
MyVar:=Length("Acme") // MyVar 変数に関数の結果 (数値の4) を代入します
$myDate:=!2018/01/21! // 日付リテラルを代入します
$myHour:=?08:12:55? // 時間リテラルを代入します
```

代入演算 (:=) は必ず他の演算と区別しなければなりません。 代入演算子は、被演算子を組み合わせて新しい一つのものにするのではなく、演算子の右側の式の値を左側の変数やフィールドにコピーします。

**重要:** 代入演算子 (:=) と比較演算子 (=) とを混同しないように注意してください。 (=) とは異なる代入演算子が採用されたのは意図的なことで、他のプログラミング言語で (==) や (===) の使用によって度々起こる間違いを避けるためです。 このような間違いはコンパイラーにとっても発見しにくく、時間を消耗するトラブルシューティングのもとです。

## 変数

4D ランゲージは強い型付けの言語ですが、多くの場合に柔軟性も発揮します。 型付けのされた変数は `C_XXX` コマンドを使って作成します。 たとえば、日付型の変数を作成するには、次のように書くことができます:

```code4d
C_DATE(MyDate) // MyDate 変数を日付型として宣言
```

推奨はされませんが、変数を使用することで作成することもできます。フィールドとは異なり、変数は必ずしも正式に宣言する必要はありません。 たとえば、今日の日付に30日足した値を格納した変数が欲しい場合、次のように書くことができます:

```code4d
MyOtherDate:=Current date+30
```

上のコードは "MyOtherDate に、現在の日付に30日を加算した値を代入します" という意味です。この1行で変数が作成され、変数に (仮の) データ型とデータが割り当てられます。 このように代入によって作成された変数はデータ型が規定されていないと解釈され、コードの違う行では別のデータ型の値を代入することもでき、その際にはデータ型を動的に変化させます。 `C_XXX` によって宣言された変数はデータ型を変化させることはできません。 コンパイルモードにおいては、その作成方法にかかわらず、変数のデータ型は変更できません。

## コマンド

4D コマンドとは、処理を実行するために 4D に組み込まれている命令文のことです。 すべての 4D コマンド、たとえば `CREATE RECORD` や `ALERT` などのコマンドはテーマ別に *4D ランゲージリファレンス* に記載されています。 コマンドに引数を渡す場合は、コマンド名の後の括弧 () に引数を入れ、セミコロン (;) で区切ります。 例: 

```code4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

コレクションやオブジェクトにコマンドが属している場合、それらは名前付きメソッドであり、ドット記法を用いて使用します。 たとえば:

```code4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

4D プラグインや 4D コンポーネントを利用して、4D 開発環境に新しくコマンドを追加することもできます。

4D のユーザーコミュニティーや、サードパーティーデベロッパーによるプラグインが多数存在します。 たとえば, [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) プラグインを macOS で使用した場合は次のコードが書けます:

```code4d
PDF REMOVE PAGE(path;page)
```

4D SVG はアプリケーションの機能を拡張するユーティリティコンポーネントの一例です:

```code4d
// 図の描画
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```

4D SVG は 4D に含まれています。

## 定数 

4D では多くの定義済定数が用意されており、それらの値は名前によってアクセスすることができます。 たとえば、`Read Mode` は定数で、その値は 2 です。 メソッドエディターにおいて、定義済定数はデフォルトで下線付きで表示されます。 定義済みの定数によって、より可読性の高いコードを書くことができます。

```code4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // ドキュメントを読み取り専用モードで開きます
```

## メソッド

4D が提供するたくさんのビルトインコマンドを使って、独自の **プロジェクトメソッド** を組み立てることができます。 プロジェクトメソッドとはユーザー定義のメソッドで、コマンドや演算子などの要素から成り立ちます。 プロジェクトメソッドは汎用性のあるメソッドですが、そうではない他の種類のメソッドも存在します: オブジェクトメソッド、フォームメソッド、テーブルメソッド (トリガー)、データベースメソッド。

メソッドは、一つ以上のステートメントで構成されます。ステートメントとは、メソッドの1行のことで1つの命令を実行します。 ステートメントは単純な場合もあれば、複雑な場合もあります。

たとえば、次のステートメントは確認ダイアログボックスを表示します:

```code4d
CONFIRM("このアカウントを本当に閉じますか？";"はい";"いいえ")
```

メソッドは、テストとループの制御フローの実行を含みます。 `If...Else...End if` および `Case of...Else...End case` の分岐構造が使用できるほか、ループ構造としては `While...End while`、`Repeat...Until`、`For...End for`、そして `For each...End for each` が使用可能です:

テキスト変数 vtSomeText の文字を一つ一つループ処理します:

```code4d
For($vlChar;1;Length(vtSomeText))
    // 文字がタブであれば
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        // なんらかの処理をします
    End if
End for
```

プロジェクトメソッドは他のプロジェクトメソッドを呼び出すことができ、その際に引数を渡すことも可能です。 メソッドに引数を渡す場合は、メソッド名の後の括弧 () に引数を入れ、 セミコロン (;) で区切ります。 引数は受け取り側のメソッドにて、受け取り順に番号が付けられたローカル変数 ($1, $2, ...$n) に格納されます。 メソッドの一つの値を戻り値とすることができ、$0 パラメーターを使います。 メソッドを呼び出すには、メソッド名を書きます:

```code4d
$myText:="hello"
$myText:=Do_Something($myText) // Do_Something メソッドを呼び出します
ALERT($myText) //"HELLO"

  // Do_Something メソッドのコードです
$0:=Uppercase($1)
```

## データタイプ

4D ランゲージで扱うデータにはいくつかの種別があり、これらのデータ種別を "データタイプ" と呼びます。 基本的なデータタイプ (文字、数値、日付、時間、ブール、ピクチャー、ポインター、配列) と混合型のデータタイプ (BLOB、オブジェクト、コレクション) があります。

データタイプのうち、文字タイプと数値タイプは、複数の類似するフィールドタイプに対応する点に注意してください。 これらのフィールドにデータが格納されるとき、4D ランゲージはフィールドタイプに合致するデータタイプへとデータを自動的に変換します。 反対に、たとえば整数フィールドのデータを呼び出すと、そのデータは自動的に数値タイプとして扱われます。 つまり、4D ランゲージを使用する際に、類似するフィールドタイプを厳密に区別する必要はありません。

しかし、プログラミングにおいて異なるデータタイプを混同しないようにすることは重要です。 "ABC" を日付フィールドに格納しても意味がないように、日付型の変数に "ABC" を格納することも意味がありません。 4D は、コードに書かれたことをできるだけ有効にしようとします。 たとえば、日付に数値を加算した場合は、日付に日数を加算したいものと認識します。しかし、日付に文字列を加算した場合には、4D はその操作が意味を持たないことを警告します。

あるタイプとして格納したデータを、別のタイプとして使用する場合があります。 4D ランゲージには、データタイプを変換するためのコマンドが用意されています。 たとえば、数値で始まり、"abc" 等の文字で終了する部品番号を作成する場合、 以下のように記述することができます:

```code4d
[Products]Part_Number:=String(Number)+"abc"
```

数値変数 *Number* の値が17であれば、*[Products]Part_Number* に "17abc" という文字列が代入されます。

データタイプについては [データタイプ](Concepts/data-types.md) の節で詳しく説明しています。

## オブジェクトとコレクション

4D ランゲージのオブジェクトとコレクションは、オブジェクト記法を使用して値を代入・取得することができます。 たとえば:

```code4d
employee.name:="Smith"
```

大カッコ内と文字列の組み合わせを用いることもできます:

```code4d
$vName:=employee["name"]
```

オブジェクトプロパティ値には、オブジェクトあるいはコレクションも設定することが可能です。これらのサブプロパティにアクセスするため、オブジェクト記法では連続した記号を受け入れることができます:

```code4d
$vAge:=employee.children[2].age
```

オブジェクトのプロパティ値が、メソッド (フォーミュラ) をカプセル化したオブジェクトである場合には、プロパティ名の後に括弧 ( ) をつけることで実行できます:

    $f:=New object
    $f.message:=New formula(ALERT("Hello world!"))
    $f.message() // "Hello world!" を表示します
    

コレクションの要素にアクセスするためには、大カッコでくくった要素番号を渡します:

```code4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  // コレクションの4番目の要素にアクセスします (0起点)
```

## 演算子

プログラミング言語を使用する際に、データのみを必要とする場合は非常に稀です。 データを加工、または何らかの目的のために使用することがほとんどです。 そういった計算は演算子を使っておこないます。 一般的に演算子とは、2つのデータをもとに処理をおこない、1つの新しいデータを生成します。 日常的に使用されている演算子も多くあります。 例えば、1 + 2 という式は加算演算子（プラス記号）を使用し、2つの数値を足し合わせて、3という結果を返します。 以下に、よく知られている 4つの演算子を示します。

| 演算子 | オペレーション  | 例題           |
| --- | -------- | ------------ |
| +   | 加算 (足し算) | 1 + 2 の結果は 3 |
| –   | 減算 (引き算) | 3 - 2 の結果は 1 |
| *   | 乗算 (かけ算) | 2 * 3 の結果は 6 |
| /   | 除算 (割り算) | 6 / 2 の結果は 3 |

数値演算子は、使用可能な演算子のうちの 1種にすぎません。 4Dは、数値・テキスト・日付・ピクチャー等、異なるタイプのデータを扱うために、各データタイプで演算を実行するための演算子を備えています。

対象のデータタイプによって、同じ記号が異なる処理に使用される場合があります。 例えば、データタイプによってプラス記号 (+) は下記のように異なる演算を実行します:

| データタイプ | オペレーション  | 例題                                                        |
| ------ | -------- | --------------------------------------------------------- |
| 数値     | 加算 (足し算) | 1 + 2 は数値を加算し、結果は 3 です。                                   |
| 文字     | 連結 (結合)  | "みなさん" + "こんにちは" は文字を連結 (結合) し、結果は "みなさんこんにちは" です。        |
| 日付と数値  | 日付の加算    | !2006/12/4! + 20 は、2006年12月4日に 20日を加算し、結果は 2006年12月24日です。 |

演算子についての詳細は演算子の章を参照してください。

## 式

式は、値を返します。 4D ランゲージでコードを書く際には、意識していなくても常に式を使用しています。 式は、"フォーミュラ" と呼ぶこともあります。

コマンド・演算子・変数・フィールド・オブジェクトプロパティ・コレクション要素等、複数のランゲージの要素を組み合わせて式は構成されます。 式により、ステートメント (メソッドの 1文や 1行) を構成します。 データが必要なとき、式が必要になります。

式が単独で使われることはほとんどありませんが、単独で使用できる場合がいくつかあります :

- フォーミュラエディター (フォーミュラによるクエリや並べ替えなど)
- `EXECUTE FORMULA` コマンド
- フォームオブジェクトやウィジェットのデータソースとして
- デバッガー内で式の値を確認することができます
- クイックレポートエディターでカラムにフォーミュラを使用することができます

### 式のタイプ

生成する値のタイプによって、式のタイプを定義することができます。 式のタイプは複数あります。 様々なタイプの式の例を以下に示します。

| 式                           | タイプ         | 説明                                                                              |
| --------------------------- | ----------- | ------------------------------------------------------------------------------- |
| "こんにちは"                     | 文字          | これは文字列定数 "こんにちは" です。 文字列定数であることを表すために二重引用符が必要です。                                |
| "みなさん" + "こんにちは"            | 文字          | 2つの文字列 "みなさん" と "こんにちは" が + 演算子により結合され、 "みなさんこんにちは" を返します。                      |
| [People]Name + "様"          | 文字          | 2つの文字列の結合です。 [People]Name フィールドと文字列 "様" が結合されます。 フィールドの値が "小林" の場合、"小林様" を返します。 |
| Uppercase ("smith")         | 文字          | この式は `Uppercase` コマンドを使用して、文字列 "smith" を英大文字に変換します。 そして "SMITH" を返します。          |
| 4                           | 数値          | これは数値定数 4です。                                                                    |
| 4 * 2                       | 数値          | 2つの数値、4 と 2 の乗算です。乗算演算子の (*) を使用しています。 数値の 8を返します。                              |
| myButton                    | 数値          | これはボタンに紐づけられた変数です。 ボタンの現在の値を返します: クリックされた場合に 1、それ以外は 0 を返します。                   |
| !06/12/24! または !2006/12/24! | 日付          | この式は日付定数で 2006年12月24日を表します。                                                     |
| Current date + 30           | 日付          | これは日付の計算です。`Current date` コマンドは現在の日付を返します。 現在の日付に 30日を加えた日付を返します。               |
| ?8:05:30?                   | 時間          | これは時間定数で、8時5分30秒を表します。                                                          |
| ?2:03:04? + ?1:02:03?       | 時間          | 2つの時間の足し算をおこない、3時5分7秒を返します。                                                     |
| True                        | ブール         | このコマンドはブール値のTRUE (真) を返します。                                                     |
| 10 # 20                     | ブール         | これは 2つの数値の論理比較です。 #記号は、"等しくない" を表します。 10と20は "等しくない" ため、この式は TRUE (真) を返します。    |
| "ABC" = "XYZ"               | ブール         | これは文字列の論理比較です。 文字列は等しくないため、式は FALSE (偽) を返します。                                  |
| My Picture + 50             | ピクチャー       | この式は My Picture 変数に入っているピクチャーを右に 50ピクセル移動したピクチャーを返します。                          |
| ->[People]Name              | ポインター       | この式は [People]Name フィールドへのポインターを返します。                                            |
| Table (1)                   | ポインター       | このコマンドは一番目に定義されたテーブルへのポインターを返します。                                               |
| JSON Parse (MyString)       | オブジェクト      | このコマンドは MyString が適切なフォーマットであれば、オブジェクトとして返します。                                  |
| JSON Parse (MyJSONArray)    | コレクション      | このコマンドは MyJSONArray が適切なフォーマットであれば、コレクションとして返します。                               |
| Form.pageNumber             | オブジェクトプロパティ | オブジェクトプロパティは式として、サポートされているいずれのタイプでもありえます。                                       |
| Col[5]                      | コレクション要素    | コレクション要素は式として、サポートされているいずれのタイプでもありえます。                                          |
| $entitySel[0]               | エンティティ      | ORDA のエンティティセレクションの要素である、エンティティを返します。 これは **代入不可の式** です。                        |

### 代入可 vs 代入不可の式

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them. In 4D, expressions can be **assignable**. An expression is assignable when it can be used on the right side of an assignation. たとえば:

```code4d
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write:  
Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable:
Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
```

In general, expressions that use an operator are non-assignable. For example, `[Person]FirstName+" "+[Person]LastName` is not assignable.

## Pointers

The 4D language provides an advanced implementation of pointers, that allow writing powerful and modular code. You can use pointers to reference tables, fields, variables, arrays, and array elements.

A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.

```code4d
MyVar:="Hello"
MyPointer:=->MyVar
ALERT(MyPointer->)
```

## Comments

Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called.

There are two ways to create comments:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

Both styles of comments can be used simultaneously.

#### Single line comments (//)

Insert `//` at the beginning of a line or after a statement to add a single line comment. 例: 

```code4d
//This is a comment
For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
 End for
```

#### Inline or multiline comments (/* */)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. 例: 

```code4d
For /* inline comment */ ($vCounter;1;100)
    ...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). 例: 

```code4d
For ($vCounter;1;100)
/*
comments  
    /* 
    other comments
    */
*/
...
End for
```