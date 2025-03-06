---
id: error-handling
title: エラー処理
---

エラー処理とは、アプリケーション内で発生する可能性のあるエラーに備え、対処することです。 ランタイムにおけるエラーのキャッチや報告、またそれらの条件を検証するため、4Dは包括的なサポートを提供しています。

エラー処理は次の2つの要望に応えます:

- 開発フェーズにおいて、問題となりうるコードのエラーやバグを発見して修正したい。
- 運用フェーズにおいて、予期しないエラーを検知して回復したい。とくに、システムエラーダイアログ (ディスクが一杯、ファイルがない、など)  を独自のインターフェースに置換できます。

基本的に、4D でエラー処理する方法は 2つあります。 次のことが可能です: 次のことが可能です:

- [エラー処理メソッドを実装する](#エラー処理メソッドの実装)
- エラーを投げる可能性のある関数・メソッド・式を呼び出すコードの前に [`Try()` keyword](#tryexpression) または [`Try/Catch` structure](#trycatchend-try) 文を使う

:::tip グッドプラクティス

サーバー上で実行されるコードのため、4D Server にはグローバルなエラー処理メソッドを実装しておくことが強く推奨されます。 サーバー上で実行されるコードのため、4D Server にはグローバルなエラー処理メソッドを実装しておくことが強く推奨されます。 4D Server が [ヘッドレス](../Admin/cli.md) で実行されていない場合 (つまり、[管理画面](../ServerWindow/overview.md) 付きで起動されている場合)、このメソッドによって、予期せぬダイアログがサーバーマシン上に表示されることを防ぎます。 ヘッドレスモードでは、エラーは解析のため [4DDebugLog ファイル](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) に記録されます。 ヘッドレスモードでは、エラーは解析のため [4DDebugLog ファイル](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) に記録されます。

:::

## エラー/ステータス

`entity.save()` や `transporter.send()` など、おおくの 4D クラス関数は *status* オブジェクトを返します。 ランタイムにおいて "想定される"、プログラムの実行を停止させないエラー (無効なパスワード、ロックされたエンティティなど) がこのオブジェクトに格納されます。 これらのエラーへの対応は、通常のコードによっておこなうことができます。 ランタイムにおいて "想定される"、プログラムの実行を停止させないエラー (無効なパスワード、ロックされたエンティティなど) がこのオブジェクトに格納されます。 これらのエラーへの対応は、通常のコードによっておこなうことができます。

ディスク書き込みエラーやネットワークの問題などのイレギュラーな中断は "想定されない" エラーです。 これらのエラーは例外を発生させ、エラー処理メソッドや `Try()` キーワードを介して対応する必要があります。

## エラー処理メソッドの実装

4D においては、エラー専用のプロジェクトメソッドである **エラー処理** (または **エラーキャッチ**) メソッド内ですべてのエラーをキャッチし、処理することができます。

インストールされたエラーハンドラーは、4Dアプリケーションまたはそのコンポーネントでエラーが発生した場合、インタープリターモードまたはコンパイル済モードで自動的に呼び出されます。 実行コンテキストに応じて、異なるエラーハンドラーを呼び出すこともできます (後述参照)。

エラー処理用のプロジェクトメソッドを *実装* するには、[`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/ja/page155.html) コマンドをコールし、当該プロジェクトメソッド名と (任意で) スコープを引数として渡します。 例: 例:

```4d
ON ERR CALL("IO_Errors";ek local) // ローカルなエラー処理メソッドを実装します
```

実行コンテキストにおいてエラーの検知を中止するには、空の文字列を指定して再度 `ON ERR CALL` コマンドをコールします:

```4d
ON ERR CALL("";ek local) // ローカルプロセスにおいてエラーの検知を中止します
```

[`Method called on error`](https://doc.4d.com/4dv20/help/command/en/page704.html) コマンドを使用すると、カレントプロセスにおいて`ON ERR CALL` で実装されたメソッドの名前を知ることができます。 このコマンドは汎用的なコードでとくに有用です。エラー処理メソッドを一時的に変更し、後で復元することができます: このコマンドは汎用的なコードでとくに有用です。エラー処理メソッドを一時的に変更し、後で復元することができます:

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  // ドキュメントが開けない場合にエラーが生成されます
 $ref:=Open document("MyDocument")
  // 前のエラー処理メソッドに戻します
 ON ERR CALL($methCurrent;ek local)

```

### スコープとコンポーネント

エラー処理メソッドは、実行コンテキストごとに設定することができます:

- **カレントプロセス** - ローカルなエラーハンドラーはカレントプロジェクトのカレントプロセスで発生したエラーに対してのみ呼び出されます。
- **アプリケーション全体** - グローバルなエラーハンドラーは、カレントプロジェクトのアプリケーションの実行コンテキストで発生したすべてのエラーに対して呼び出されます。
- **コンポーネント** - このエラーハンドラーはホストプロジェクトにおいて定義され、コンポーネント内で発生したすべてのエラーに対して、(コンポーネント内のハンドラーで処理されない場合に) ホスト内で呼び出されます。

例:

```4d
ON ERR CALL("IO_Errors";ek local) // ローカルなエラー処理メソッドをインストールします
ON ERR CALL("globalHandler";ek global) // グローバルなエラー処理メソッドをインストールします
ON ERR CALL("componentHandler";ek errors from components) // コンポーネント用のエラー処理メソッドをインストールします
```

"フォールバック" として機能するグローバルエラーハンドラーと、特定プロセス専用のローカルエラーハンドラーを同時にインストールすることができます。 グローバルなエラーハンドラーは、インターフェース付きでサーバーを実行している場合にエラーダイアログの表示を避けるためにも有効です。

アプリケーションにおいて一つのエラーキャッチメソッドを使うやり方もあれば、アプリケーションのモジュールごとに違うメソッドを定義する方法もあります。 ただし、一つのプロジェクトと一つの実行コンテキストにつき実装できるのは一つのメソッドのみです。

エラーが発生した場合、以下の図のように 1つのメソッドのみが呼び出されます:

![error management](../assets/en/Concepts/error-schema.png)

### メソッド内でのエラー処理

独自に作成したエラー処理メソッド内では、エラーを調査するための情報がいくつか提供されています:

- 専用のシステム変数:

 - `Error` (倍長整数): エラーコード
 - `Error method` (テキスト): エラーを生成したメソッドの名称
 - `Error line` (倍長整数): エラーを生成したメソッドの行番号
 - `Error formula` (テキスト): エラーの元となった 4D コードのフォーミュラ (テキスト)

:::info

4D automatically maintains a number of variables called [**system variables**](variables.md#system-variables), meeting different needs.
:::

- [`Last errors`](https://doc.4d.com/4dv19/help/command/ja/page1799.html) コマンドは、4Dアプリケーションのカレントエラースタックに関する情報をコレクションとして返します。 また同じ情報を配列として返す[`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1015.html) コマンドを使用することもできます。
- `Call chain` コマンドは、カレントプロセス内におけるメソッド呼び出しチェーンの各ステップを説明するオブジェクトのコレクションを返します。

#### 例題

簡単なエラー処理システムの例です:

```4d
// エラー処理メソッドをインストールします
 ON ERR CALL("errorMethod")
 //... コードの実行
 ON ERR CALL("") // エラーの検知を中止します
```

```4d
// errorMethod プロジェクトメソッド
 If(Error#1006) // これはユーザーによる割り込みではありません
    ALERT("エラー "+String(Error)+" が発生しました。問題となったコードはこちらです: \""+Error formula+"\"")
 End if
```

### 空のエラー処理メソッド

標準のエラーダイアログを表示させないようにするには、空のエラー処理メソッドを実装するだけで実現できます。 `Error` システム変数はエラー処理メソッド以外のメソッドでも確認することができます:

```4d
ON ERR CALL("emptyMethod") // emptyMethod は空のエラー処理メソッドです
$doc:=Open document( "myFile.txt")
If (Error=-43)
 ALERT("ファイルが見つかりません。")
End if
ON ERR CALL("")
```

## Try(expression)

`Try(expression)` 文は、実際の実行コンテキスト (特にローカル変数の値を含む) で単一行の式をテストし、スローされるエラーをキャッチすることで、4D のエラーダイアログボックスが表示されないようにできます。 `Try(expression)` を使用すると、非常に少ないコードで単純なエラーケースを処理することができ、エラー処理メソッドを必要としません。

:::note

単一行の式におさまらない、より複雑なコードをtry したい場合には、[`Try/Catch` 構造](#trycatchend-try)の使用を検討してみてください 。

:::

`Try(expression)` 文の正式なシンタックスは、以下の通りです:

```4d

Try (expression) : any | Undefined

```

*expression* には任意の有効な式を使用できます。

実行中にエラーが発生した場合、`Try()` の呼び出し前に [エラー処理メソッド](#エラー処理メソッドの実装) がインストールされたかどうかに関係なく、エラーダイアログは表示されず、エラーはキャッチされます。 *expression* が値を返す場合、`Try()` は最後に評価された値を返します。値が返されない場合、`Try()` は `Undefined` を返します。

エラーは、[`Last errors`](https://doc.4d.com/4dv20/help/command/ja/page1799.html) コマンドを使用することで処理できます。 *expression* が `Try()` のスタック内でエラーをスローした場合、実行フローは停止し、最後に実行された `Try()` (コールスタック内で最初に見つかったもの) に戻ります。

:::note

もし *expression* によって [エラー処理メソッド](#エラー処理メソッドの実装) がインストールされた場合、エラー発生時にはそれが呼び出されます。

:::

### 例題

1. ファイルをエラーなく開くことができ、その内容が読み取り可能な場合に、ファイルの内容を表示します。 以下のように書くことができます: 以下のように書くことができます:

```4d
var $text : Text
var $file : 4D.File := File("/RESOURCES/myFile.txt")
var $fileHandle : 4D.FileHandle := Try($file.open())
If ($fileHandle # Null)
  $text:=Try($fileHandle.readText()) || "ファイル読み込みエラー"
End if
```

2. ゼロ除算エラーを処理します。 ゼロ除算エラーを処理します。 ここでは 0 を返し、エラーをスローするようにします:

```4d
function divide( $p1: real; $p2: real)-> $result: real
  if ($p2=0)
     $result:=0 // 可読性のため (実数のデフォルトは 0 です)
     throw(-12345; "ゼロ除算")
  else
    $result:=$p1/$p2
  end if

function test()
  $result:=Try(divide($p1;$p2))
  If (Last errors # null)
    ALERT("エラー")
  End if

```

3. [予測可能なエラーと予測不可能なエラー](#エラーステータス) の両方を処理します。

```4d
var $e:=ds.Employee.new()
$e.name:="Smith"
$status:=Try($e.save()) // 予測可能なエラーと予測不可能なエラーをキャッチします
If ($status.success)
   ALERT( "成功")
Else
   ALERT( "エラー: "+JSON Stringify($status.errors))
End if

```

## Try...Catch...End try

The `Try...Catch...End try` structure allows you to test a block code in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed.

`Try(expression)` キーワードが単一の行の式を評価するのとは異なり、`Try...Catch...End try` 文は、単純なものから複雑なものまで、任意のコードブロックを評価することができます。エラー処理メソッドは必要としない点は同じです。 また、`Catch` ブロックは、任意の方法でエラーを処理するために使用できます。

`Try...Catch...End try` 構文の正式なシンタックスは、以下の通りです:

```4d

Try 
 statement(s) // 評価するコード
Catch
 statement(s) // エラーの場合に実行するコード
End try

```

`Try` と `Catch` キーワード間のコードが最初に実行されます。その後のフローは、実行に発生したエラーによって異なります。

- エラーがスローされなかった場合には、対応する `End try` キーワードの後へとコード実行が継続されます。 `Catch` と `End try` キーワード間のコードは実行されません。
- コードブロックの実行が *非遅延エラー* をスローした場合、実行フローは停止し、対応する `Catch` コードブロックを実行します。
- If the code block calls a method that throws a *deferred error*, the execution flow jumps directly to the corresponding `Catch` code block.
- 遅延エラーが `Try` ブロックから直接スローされた場合、実行フローは `Try` ブロックの終わりまで継続し、対応する `Catch` ブロックは実行しません。

:::note

*遅延* エラーが `Try` ブロック外で投げられた場合、メソッドまたは関数の終わりまでコードが実行されます。

:::

:::info

*遅延* エラーと *non-deferred* エラーの詳細については、[`throw`](https://doc.4d.com/4dv20R/help/command/en/page1805.html) コマンドの説明を参照してください。

:::

In the `Catch` code block, you can handle the error(s) using standard error handling commands. [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) 関数は最後のエラーに関するコレクションを格納しています。 このコードブロック内で[エラー処理メソッドを宣言する](#エラー処理メソッドの実装) こともできます。この場合エラー発生時にはそれが呼び出されます(宣言しない場合には、4Dエラーダイアログが表示されます)。

:::note

`Try` および `Catch` キーワードの間のコードで[エラー処理メソッド](#エラー処理メソッドの実装) がインストールされている場合には、エラー発生時にはそれが呼ばれます。

:::

### 例題

トランザクションと `Try...Catch...End try` 文を組み合わせることで、重要な機能のためにセキュアなコードを書くことができます。

```4d
Function createInvoice($customer : cs.customerEntity; $items : Collection; $invoiceRef : Text) : cs.invoiceEntity
	var $newInvoice : cs.invoiceEntity
	var $newInvoiceLine : cs.invoiceLineEntity
	var $item : Object
	ds.startTransaction()
	Try
		$newInvoice:=This.new()
		$newInvoice.customer:=$customer
		$newInvoice.invoiceRef:=$invoiceRef
		For each ($item; $items)
			$newInvoiceLine:=ds.invoiceLine.new()
			$newInvoiceLine.item:=$item.item
			$newInvoiceLine.amount:=$item.amount
			$newInvoiceLine.invoice:=$newInvoice
                        // インボイス項目を検証するその他の関数を呼び出します
			$newInvoiceLine.save()
		End for each 
		$newInvoice.save()
		ds.validateTransaction()
	Catch
		ds.cancelTransaction()
		ds.logErrors(Last errors)
		$newInvoice:=Null
	End try
	return $newInvoice

```
