---
id: control-flow
title: 制御フロー
---

メソッドが単純か複雑かに関係なく、開発者は3つのプログラミング構造のうち、1つ以上を常に使用します。 プログラミング構造は、メソッド内でステートメントが実行される順序を決定する実行フローをコントロールします。 3つのタイプの構造があります:

- **Sequential**: a sequential structure is a simple, linear structure. シーケンスとは、4Dが最初から最後まで次々に実行する一連のステートメントです。 オブジェクトメソッドで頻繁に使用される1行から成るルーチンはもっとも簡単なシーケンシャル構造の例です。 例: `[People]lastName:=Uppercase([People]lastName)`
- **[Branching](Concepts/cf_branching.md)**: A branching structure allows methods to test a condition and take alternative paths, depending on the result. 条件は true または false に評価されるブール式です。 `If...Else...End if` 構文は分岐構造の一例で、処理フローを二つに分岐します。 `Case of...Else...End case` 構文も分岐構造の一つで、処理フローをもっとたくさん分岐することができます。
- **[Looping](Concepts/cf_looping.md)**: When writing methods, it is very common to find that you need a sequence of statements to repeat a number of times. これに実現するために、4Dは以下のループ構造を備えています:
    - `While...End while`
    - `Repeat...Until`
    - `For...End for`
    - `For each...End for each`<br> ルー プを制御する方法には、条件が満たされるまでループする方法と、指定した回数だけループする方法の2通りがあります。 各ループ構造はいずれの方法にも用いることができますが、`While` ループと `Repeat` ループは条件が満たされるまで繰り返す場合に、`For` ループは指定した回数だけループする場合の利用に適切です。  `For each...End for each` ループは両方を組み合わせることが可能で、オブジェクトやコレクション内でループするために設計されています。

**Note:** 4D allows you to embed programming structures up to a "depth" of 512 levels.
