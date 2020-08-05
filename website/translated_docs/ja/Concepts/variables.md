---
id: variables
title: 変数
---

4D のデータは、根本的に異なっている 2つの方法で保持されます。 **Fields** store data permanently on disk; **variables** store data temporarily in memory.

データベースを作成する際には、フィールドに名前とデータタイプを指定します。 同様に、変数にも名前と [データタイプ](Concepts/data-types.md) を指定します。

変数はランゲージの要素です。画面上に表示されることのない、裏方に徹した変数を作成・利用することができます。 もちろん、フォーム上に変数の値を表示することもできます (ポインターやBLOBを除く)。また、変数に値を入力したり、変数の値をレポートに印刷したりすることも可能です。 このとき、入力可や入力不可の変数オブジェクトはフィールドオブジェクトと同様に振舞い、提供されるコントロールも類似しています。 フォーム上のボタン、リストボックス、スクロールエリア、ピクチャーボタンなどのオブジェクトも変数を使って制御することができるほか、保存不要な計算結果を表示させることもできます。

## 変数の作成

変数を作成するには、"コンパイラー" または "配列" テーマのコマンドを使って変数を宣言します。

**Note:**Arrays are a particular type of variables. 配列とは、同じタイプの変数を番号付きで並べたものです。 詳細については [配列](Concepts/arrays.md) を参照ください。

たとえば、テキスト変数を宣言するには次のように書きます:

```4d
 C_TEXT(myText)
```

**Note:** Although it is usually not recommended, you can create variables simply by using them; you do not necessarily need to formally define them as you do with fields. たとえば、今日の日付に30日を加えた日付を保持する変数が必要な場合、以下のように書くことができます:

```4d
 MyDate:=Current date+30 // MyDateを作成し、そこに30日後の日付が代入されます
```

いったん作成された変数は、データベースで必要とされる場所に使用できます。 たとえば、テキスト変数を同じタイプのフィールドに格納するには次のように書きます:

```4d
 [MyTable]MyField:=MyText
```

いくつかの基本的な変数宣言の例です:

```4d

 C_BLOB(vxMyBlob) // プロセス変数 vxMyBlob を BLOB型として宣言します
 C_DATE($vdCurDate) // ローカル変数 $vdCurDate を日付型として宣言します
 C_LONGINT(vg1;vg2;vg3) // 3つのプロセス変数 vg1, vg2, vg3 を倍長整数型として宣言します
 C_OBJECT($vObj) // ローカル変数 $vObj をオブジェクト型として宣言します
 C_COLLECTION($vCol) // ローカル変数 $vCol をコレクション型として宣言します
 ARRAY LONGINT(alAnArray;10) // プロセス変数 alAnArray を 10個の倍長整数型要素を持つ配列として宣言します
```

## 変数への代入

変数を対象に、データを格納したり、格納したデータを別の対象にコピーしたりすることができます。 Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). 代入演算子はフィールドに対してデータを代入する場合にも使います。

代入演算子は、変数を作成し、変数にデータを代入するために使用します。 作成する変数名を代入演算子の左側に書きます。 たとえば:

```4d
MyNumber:=3
```

creates the variable _MyNumber_ and puts the number 3 into it. MyNumber が既に存在していれば、そこに数値 3が代入されます。

もちろん、変数からデータを取り出すことができなければ、便利とはいえません。 再度代入演算子を使用します。 If you need to put the value of MyNumber in a field called [Products]Size, you would write _MyNumber_ on the right side of the assignment operator:

```4d
[Products]Size:=MyNumber
```

In this case, _[Products]Size_ would be equal to 3. この例はとても単純ですが、ある場所から別の場所へランゲージによってデータを転送させる基本的な手順を表しています。

配列要素にデータを代入するには中カッコ ({...}) を使用します:

```4d
atNames{1}:="Richard"
```

## ローカル、プロセス、およびインタープロセス変数

You can create three types of variables: **local**, **process**, and **interprocess**. これらの変数の違いは使用できるスコープにあります。また、それらを使用することのできるオブジェクトも異なります。

### ローカル変数

ローカル変数はその名のとおりメソッド内でローカルであり、変数が作成されたメソッドの範囲内でのみ使用可能で、その他のメソッドからはアクセスできません。 Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

ローカル変数は、以下のような目的のために使用されます:

- 他の変数名との重複を避ける。
- データを一時的に使用する。
- プロセス変数の数を減らす。

ローカル変数の名前は必ずドル記号 ($) で始め、この記号を除く31文字までの文字を指定できます。 これより長い名前を指定すると、4D は余分の32文字以降を切り捨てます。

多くのメソッドや変数を持つデータベースで作業する場合、現在作業しているメソッドの範囲内で一時的に変数が必要となる場合がよくあります。 この場合、同じ変数名が他で使用されていないかどうかを気にすることなくローカル変数を作成することができます。

データベースではしばしば、ユーザーによる少量のデータ入力を必要とする場合があります。 `Request` コマンドを使って、この情報を取得することができます。 このコマンドはデータ入力を求めるダイアログボックスを表示し、 ユーザーがデータを入力すると、その情報を戻り値として返します。 このようなデータは通常、メソッド内で長期間維持する必要はありません。 これは、ローカル変数を使用する典型的な例といえます。 次に例を示します:

```4d
 $vsID:=Request("ID を入力してください:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

このメソッドは、ユーザーに ID を入力するように要求します。 ローカル変数 $vsID にレスポンスが代入され、ユーザーが入力した ID に基づいた検索がおこなわれます。 このメソッドが終了した時点で、$vsID ローカル変数はメモリから消去されます。 この変数は 1回のみ、このメソッド内でしか使われないため、これ以上維持する必要はありません。

**Note:** Parameters $1, $2... passed to methods are local variables. 詳細については [パラメーター](Concepts/parameters.md) を参照ください。

### プロセス変数

プロセス変数は、同じプロセスの範囲内に限り使用可能です。 この変数はプロセスメソッドと、そのプロセス内で呼び出された他のメソッドで使用することができます。

プロセス変数には名前に付ける接頭辞がありません。 プロセス変数の名前は、最大31文字までの長さで指定できます。

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. たとえば、プロセスP_1 とプロセスP_2 の両方においてプロセス変数 myVar が存在していても、それらはそれぞれ別のインスタンスです。

バージョン6より、`GET PROCESS VARIABLE` や `SET PROCESS VARIABLE` を使用して、あるプロセスから他のプロセスのプロセス変数の値を取得したり、設定したりできるようになりました。 これらのコマンドの利用は、以下のような状況に限定することが、良いプログラミングの作法です:

- コード内の特定の箇所におけるプロセス間通信
- プロセス間のドラッグ＆ドロップ処理
- クライアント/サーバーにおいて、クライアントマシン上のプロセスとサーバーマシン上のストアドプロシージャー間の通信

For more information, see the chapter **Processes** and the description of these commands.

### インタープロセス変数

インタープロセス変数はデータベース全体で使用することができ、すべてのコオペラティブプロセスで共有されます。 これらは主としてプロセス間で情報を共有するために使われます。

> プリエンプティブプロセスにおいては使用できないことと、コードの保守管理を煩雑にすることから、インタープロセス変数の使用は推奨されません。

インタープロセス変数の名前は、必ずインタープロセス記号 (<>) で始めます。記号の後に31バイトまでの名前を指定できます。

クライアント/サーバーでは、各マシン (クライアントマシンとサーバーマシン) で同じインタープロセス変数定義を共有しますが、マシンごとに各変数のインスタンスが存在します。
