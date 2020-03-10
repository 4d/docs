---
id: version-18.0-branching
title: 分岐構造
original_id: branching
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

`If...Else...End if` 構造は、条件 (ブール式) が TRUE か FALSE かによって、処理の選択肢を2つメソッドに与えます。 ブール式が TRUE の場合は、テストのすぐ後のステートメントを実行し、 ブール式が FALSE の場合には、Else 文のすぐ後のステートメントを実行します。 任意の `Else` が省略されていた場合、`End if` のすぐ後のステートメント (あれば) へと実行が続行されます。

ブール式は常に全体が評価されるという点に注意してください。 たとえば、以下のような場合:

```4d
 If(MethodA & MethodB)
    ...
 End if
```

この場合、両方のメソッドが TRUE である場合に限り、式は TRUE になります。 しかしながら *MethodA* が FALSE あっても、4Dは*MethodB* も評価するため、これは時間の無駄になります。 この場合には、以下のような構造を使用するほうが賢明といえます:

```4d
 If(MethodA)
    If(MethodB)
       ...
    End if
 End if
```

上記の結果はほぼ同じで、*MethodB* は必要な場合にのみ評価されます。

### 例題

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

`If...Else...End if` と同様に、`Case of...Else...End case` 構造も処理の選択肢をメソッドに与えます。 `If...Else...End` との違いは、`Case of...Else...End case` 構造が複数のブール式を評価し、その中から最初に TRUE となるステートメントを実行することです。

ブール式の前にはそれぞれコロン (`:`) を付けます。 コロンとブール式の組み合わせをケースと呼びます。 例えば以下の行はケースです:

```4d
:(bValidate=1)
```

最初に TRUE になったケースに続く (次のケースまでの) ステートメントだけが実行されます。 TRUE になるケースがない場合、どのステートメントも実行されません (`Else` 文が指定されていない場合) 。

最後のケースの後に Else 文を含むことができます。 すべてのケースが FALSE の場合に、`Else` 文の後のステートメントが実行されます。

### 例題

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

`Case of...Else...End case` 構造は、最初に TRUE になったケースだけを実行します。 2つ以上のケースが TRUE の場合は、最初に TRUE になったケースのステートメントだけを実行します。

したがって、階層的なテストを実行するときには、階層上で低い位置にある条件がテスト順序で先に記述されていることを確認する必要があります。 以下の例では、ケース2が TRUE の場合、ケース1も必ず TRUE であるため、ケース1は後に位置すべきです。 このままの順序では、ケース2のステートメントはけっして実行されません:

```4d
 Case of
    :(vResult=1)
       ... //statement(s)
    :((vResult=1) & (vCondition#2)) // このケースが判定されることはありません
       ... //statement(s)
 End case
```

vResult = 1の判定により他の条件を見る前に分岐するので、第2のケースが判定されることはありません。 コードが正しく実行されるためには次のように書きます:

```4d
 Case of
    :((vResult=1) & (vCondition#2)) // このケースが先に判定されます
       ... //statement(s)
    :(vResult=1)
       ... //statement(s)
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