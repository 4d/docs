---
id: branching
title: 分岐構造
---

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

この場合、両方のメソッドが true である場合に限り、式は true になります。 However, even if _MethodA_ returns FALSE, 4D will still evaluate _MethodB_, which is a useless waste of time. この場合には、以下のような構造を使用するほうが賢明といえます:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

The result is similar and _MethodB_ is evaluated only if necessary.

### 例題

```4d
  // Ask the user to enter a name
 $Find:=Request(Type a name)
 If(OK=1)
    QUERY([People];[People]LastName=$Find)
 Else
    ALERT("You did not enter a name.")
 End if
```

**Tip:** Branching can be performed without statements to be executed in one case or the other. 下のようなコードはどちらも有効です:

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

### 例題

下記の例は数値変数を判定し、対応する数字をアラートボックスに表示します:

```4d
 Case of
    :(vResult=1) //Test if the number is 1
       ALERT("One.") //If it is 1, display an alert
    :(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    :(vResult=3) //Test if the number is 3
       ALERT("Three.") //If it is 3, display an alert
    Else //If it is not 1, 2, or 3, display an alert
       ALERT("It was not one, two, or three.")
 End case
```

比較するために、同じことを `If...Else...End if` 構文で記述すると以下のようになります。

```4d
 If(vResult=1) //Test if the number is 1
    ALERT("One.") //If it is 1, display an alert
 Else
    If(vResult=2) //Test if the number is 2
       ALERT("Two.") //If it is 2, display an alert
    Else
       If(vResult=3) //Test if the number is 3
          ALERT("Three.") //If it is 3, display an alert
       Else //If it is not 1, 2, or 3, display an alert
          ALERT("It was not one, two, or three.")
       End if
    End if
 End if
```

`Case of...Else...End case` 構造は、最初に true になったケースだけを実行します。 2つ以上のケースが true の場合は、最初に true になったケースのステートメントだけを実行します。

したがって、階層的なテストを実行するときには、階層上で低い位置にある条件がテスト順序で先に記述されていることを確認する必要があります。 以下の例では、ケース2が true の場合、ケース1も必ず true であるため、ケース1は後に位置すべきです。 このままの順序では、ケース2のステートメントはけっして実行されません:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) //this case will never be detected
       ... //statement(s)
 End case
```

vResult = 1の判定により他の条件を見る前に分岐するので、第2のケースが判定されることはありません。 コードが正しく実行されるためには次のように書きます:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) //this case will be detected first
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
 End case
```

さらに階層的なテストを実行したい場合、コードも階層化する必要があります。

**Tip:** Branching can be performed without statements to be executed in one case or another. 下のようなコードはどちらも有効です:
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
