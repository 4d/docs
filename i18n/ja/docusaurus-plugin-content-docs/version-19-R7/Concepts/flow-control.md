---
id: control-flow
title: 制御フロー
---

メソッドや関数が単純か複雑かに関係なく、開発者は3つのプログラミング構造のうち、1つ以上を常に使用します。 プログラミング構造は、メソッド内でステートメントが実行される順序を決定する実行フローをコントロールします。 3つのタイプの構造があります:

- **Sequential**: a sequential structure is a simple, linear structure. A sequence is a series of statements that 4D executes one after the other, from first to last. A one-line routine, frequently used for object methods, is the simplest case of a sequential structure. For example: `[People]lastName:=Uppercase([People]lastName)`
- **[分岐](Concepts/cf_branching.md)**: 分岐構造は、条件をテストし、その結果に基づいて異なる流れにメソッドを導きます。 The condition is a Boolean expression, an expression that evaluates TRUE or FALSE. `If...Else...End if` 構文は分岐構造の一例で、処理フローを二つに分岐します。 `Case of...Else...End case` 構文も分岐構造の一つで、処理フローをもっとたくさん分岐することができます。
- **[ループ](Concepts/cf_looping.md)**: メソッドの作成にあたって、何度も同じ処理を繰り返すことがあります。 To deal with this need, the 4D language provides the following looping structures:
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - `For each...End for each`<br/> ループを制御する方法には、条件が満たされるまでループする方法と、指定した回数だけループする方法の 2通りがあります。 各ループ構造はいずれの方法にも用いることができますが、`While` ループと `Repeat` ループは条件が満たされるまで繰り返す場合に、`For` ループは指定した回数だけループする場合の利用に適切です。  `For each...End for each` ループは両方を組み合わせることが可能で、オブジェクトやコレクション内でループするために設計されています。

**注:** 4Dはプログラム構造 (If/While/For/Caes of/Repeat/For each) を512レベルまで入れ子で記述できます。


## return {expression}

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |
</details>

`return`文はどこからでも呼び出すことができます。 関数やメソッドの中で `return` 文が使われると、その関数やメソッドの実行が中断されます。 残りのコードは実行されず、呼び出し元に制御が返されます。

`return` 文を使用して、呼び出し元に[戻り値](parameters.md#戻り値) を返すことができます。

### 例題

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

