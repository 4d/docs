---
id: defer
title: defer
slug: /commands/defer
displayed_sidebar: docs
---

<!--REF #_command_.defer.Syntax-->**defer** ( *exitFormula* : Expression )<!-- END REF-->
<!--REF #_command_.defer.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| exitFormula | Expression | &#8594;  | 終了時に実行される式 |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|21 R4|追加|

</details>
</div>

## 説明 

<!--REF #_command_.defer.Summary-->`defer` コマンドは、*exitFormula* 式を宣言します。これはメソッドまたは関数の終了時に必ず実行され、エラーがスローされた場合や `return` が実行された場合でも実行されます<!-- END REF-->. `defer` を使用すると、終了時に後処理コードを実行して、メソッドや関数を正しく終了させることができます。さらに、各 return や catch ブロックで同じ終了コードを重複して記述する必要がなくなります。

:::tip 関連ブログ記事

[Streamline Your Clean-Up Code with the “defer” Command](https://blog.4d.com/streamline-your-clean-up-code-with-the-defer-command)

:::

`defer` コマンドはメソッドまたは関数コード内の任意の場所で呼び出すことができ、必要な数だけ `defer` 式を記述できます。実行中に見つかった *exitFormula* 式はすべてスタックに積まれます。実行が停止すると、その理由が通常フロー、break、エラー、ユーザー中断、return などのいずれであっても、遅延スタック内の式が LIFO (*Last In First Out*) 順で取り出されて実行されます。

例:

```4d
defer(ALERT("1"))
defer(ALERT("2"))
// 終了時に "2"、次に "1" の順でアラートが表示されます
```

*exitFormula* には、メソッドまたは関数終了時に評価させたい式を渡します。終了理由は問いません。内部的には、`defer` が呼ばれるたびに 4D は *exitFormula* を [formula](../../commands/formula) に変換し、メソッドまたは関数に関連付けられたスタックへ追加します。メソッドまたは関数が終了すると、スタックに保存されたすべての formula がコレクション内の順序に従って評価されます。

すべての [formulas](../../commands/formula) と同様に、*exitFormula* がローカル変数を使用している場合、その時点の値は **遅延スタックに格納されるタイミングで** 返される formula オブジェクトへコピーされて保存されます。実行時には、ローカル変数の現在値ではなく、コピーされた値が使用されます。

:::note 注記

- ローカル変数は [object](../../Concepts/dt_object.md#assignment) 値および [collection](../../Concepts/dt_collection.md#assignment) 値について **参照** を保持することに注意してください。
- *exitFormula* に別の `defer` ステートメントが含まれている場合、エラーがスローされます。

:::

*exitFormula* がエラーをスローした場合、そのエラーは自動的に補足されて無視され、実行フローは中断せずに継続します。

## 例題 1

以下は、サポートされる *exitFormula* 式の例です:

```4d
// メソッド呼び出し
defer(aMethod)

// オブジェクト関数呼び出し
defer(myObject.aFunction(something))

// シングルトン関数呼び出し
defer(cs.aClass.me.aFunction(something))
```

## 例題 2

メモリーリークの可能性を避けるため、XML 参照を必ず適切に解放したい場合:

```4d
var $xmlRef:=DOM Create XML ref("theRoot")
defer(DOM CLOSE XML($xmlRef))
...
```

## 例題 3 

メソッドの終了時にアクティビティ監視を確実に停止したい場合:

```4d
START MONITORING ACTIVITY(0.001;Activity all)
defer(STOP MONITORING ACTIVITY())
...
```

## 例題 4 

ログ出力を制御したい場合:

```4d
$logRecording:=Get database parameter(Diagnostic log recording)
SET DATABASE PARAMETER(Diagnostic log recording; 1)
defer(SET DATABASE PARAMETER(Diagnostic log recording; $logRecording))

$logLevel:=Get database parameter(Diagnostic log level)
SET DATABASE PARAMETER(Diagnostic log level; Log trace)
defer(SET DATABASE PARAMETER(Diagnostic log level; $logLevel))
```

## 参照 

[throw](../commands/throw)  
[Last errors](../commands/last-errors)  
[ON ERR CALL](../commands/on-err-call)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1805 |
| スレッドセーフである | no |
