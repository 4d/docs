---
id: control-flow
title: 制御フロー
---

Regardless of the simplicity or complexity of a method or function, you will always use one or more of three types of programming structures. プログラミング構造は、メソッド内でステートメントが実行される順序を決定する実行フローをコントロールします。 3つのタイプの構造があります:

- **シーケンシャル**: シーケンシャル構造は単純な線形構造です。 シーケンスとは、4Dが最初から最後まで次々に実行する一連のステートメントです。 オブジェクトメソッドで頻繁に使用される1行から成るルーチンはもっとも簡単なシーケンシャル構造の例です。 例: `[People]lastName:=Uppercase([People]lastName)`
- **[分岐](Concepts/cf_branching.md)**: 分岐構造は、条件をテストし、その結果に基づいて異なる流れにメソッドを導きます。 条件は true または false に評価されるブール式です。 `If...Else...End if` 構文は分岐構造の一例で、処理フローを二つに分岐します。 `Case of...Else...End case` 構文も分岐構造の一つで、処理フローをもっとたくさん分岐することができます。
- **[ループ](Concepts/cf_looping.md)**: メソッドの作成にあたって、何度も同じ処理を繰り返すことがあります。 これに実現するために、4Dは以下のループ構造を備えています:
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - `For each...End for each`<br> ルー プを制御する方法には、条件が満たされるまでループする方法と、指定した回数だけループする方法の2通りがあります。 各ループ構造はいずれの方法にも用いることができますが、`While` ループと `Repeat` ループは条件が満たされるまで繰り返す場合に、`For` ループは指定した回数だけループする場合の利用に適切です。  `For each...End for each` ループは両方を組み合わせることが可能で、オブジェクトやコレクション内でループするために設計されています。

**注:** 4Dはプログラム構造 (If/While/For/Caes of/Repeat/For each) を512レベルまで入れ子で記述できます。


## return {expression}

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v19 R4 | 追加 |
</details>

The `return` statement can be called from anywhere. When a `return` statement is used in a function or method, the execution of the function or method is stopped. The remaining code is not executed and the control is returned to the caller.

The `return` statement can be used to [return a value](parameters.md#return-expression) to the caller.

### 例題

```4d
var $message : Text
var $i : Integer

While (True) //infinite loop
    $i:=$i+1
    $message+=String($i)+"A\r"  // until 5
    logConsole($message)
    If ($i=5)
        return //stops the loop
    End if 
    $message+=String($i)+"B\r"  // until 4
    logConsole($message)
End while 
$message+=String($i)+"C\r"  //never executed 
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

