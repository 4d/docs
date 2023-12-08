---
id: error-handling
title: エラー処理
---

エラー処理とは、アプリケーション内で発生する可能性のあるエラーに備え、対処することです。 ランタイムにおけるエラーのキャッチや報告、またそれらの条件を検証するため、4Dは包括的なサポートを提供しています。

エラー処理は次の2つの要望に応えます:

- 開発フェーズにおいて、問題となりうるコードのエラーやバグを発見して修正したい。
- 運用フェーズにおいて、予期しないエラーを検知して回復したい。とくに、システムエラーダイアログ (ディスクが一杯、ファイルがない、など) を独自のインターフェースに置換できます。

Basically, there are two ways to handle errors in 4D. You can [install an error-handling method](#installing-an-error-handling-method), or write [`try()` keywords](#try-expression) before pieces of code that call a function, method, or expression that can throw an error.

:::tip グッドプラクティス

サーバー上で実行されるコードのため、4D Server にはグローバルなエラー処理メソッドを実装しておくことが強く推奨されます。 4D Server が [ヘッドレス](../Admin/cli.md) で実行されていない場合 (つまり、[管理画面](../ServerWindow/overview.md) 付きで起動されている場合)、このメソッドによって、予期せぬダイアログがサーバーマシン上に表示されることを防ぎます。 ヘッドレスモードでは、エラーは解析のため [4DDebugLog ファイル](../Debugging/debugLogFiles.md#4ddebuglogtxt-standard) に記録されます。

:::


## エラー/ステータス

`entity.save()` や `transporter.send()` など、おおくの 4D クラス関数は *status* オブジェクトを返します。 ランタイムにおいて "想定される"、プログラムの実行を停止させないエラー (無効なパスワード、ロックされたエンティティなど) がこのオブジェクトに格納されます。 これらのエラーへの対応は、通常のコードによっておこなうことができます。

ディスク書き込みエラーやネットワークの問題などのイレギュラーな中断は "想定されない" エラーです。 This category of errors generates exceptions and needs to be handled through an error-handling method or a `try()` keyword.


## エラー処理メソッドの実装

4D においては、エラー専用のプロジェクトメソッドである **エラー処理** (または **エラーキャッチ**) メソッド内ですべてのエラーをキャッチし、処理することができます。

インストールされたエラーハンドラーは、4Dアプリケーションまたはそのコンポーネントでエラーが発生した場合、インタープリターモードまたはコンパイル済モードで自動的に呼び出されます。 実行コンテキストに応じて、異なるエラーハンドラーを呼び出すこともできます (後述参照)。

エラー処理用のプロジェクトメソッドを *実装* するには、[`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/ja/page155.html) コマンドをコールし、当該プロジェクトメソッド名と (任意で) スコープを引数として渡します。 例:

```4d
ON ERR CALL("IO_Errors";ek local) // ローカルなエラー処理メソッドを実装します
```

実行コンテキストにおいてエラーの検知を中止するには、空の文字列を指定して再度 `ON ERR CALL` コマンドをコールします:

```4d
ON ERR CALL("";ek local) // ローカルプロセスにおいてエラーの検知を中止します
```

[`Method called on error`](https://doc.4d.com/4dv19/help/command/ja/page704.html) コマンドは、`ON ERR CALL` によってカレントプロセスにインストールされているエラー処理メソッド名を返します。 このコマンドは汎用的なコードでとくに有用です。エラー処理メソッドを一時的に変更し、後で復元することができます:

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

![エラー管理](../assets/en/Concepts/error-schema.png)


### メソッド内でのエラー処理

独自に作成したエラー処理メソッド内では、エラーを調査するための情報がいくつか提供されています:

- 専用のシステム変数:

  - `Error` (倍長整数): エラーコード
  - `Error method` (テキスト): エラーを生成したメソッドの名称
  - `Error line` (倍長整数): エラーを生成したメソッドの行番号
  - `Error formula` (テキスト): エラーの元となった 4D コードのフォーミュラ (テキスト)

:::info

4D は、いくつかの **システム変数** と呼ばれる専用の変数を自動的に管理しています。 *4D ランゲージリファレンスマニュアル* を参照ください。

:::

- [`Last errors`](https://doc.4d.com/4dv19/help/command/ja/page1799.html) コマンドは、4Dアプリケーションのカレントエラースタックに関する情報をコレクションとして返します。 また、同じ情報を配列として返す [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/ja/page1015.html) コマンドを使用することもできます。
- `Get call chain` コマンドは、カレントプロセス内における、メソッド呼び出しチェーンの各ステップを詳細に説明するオブジェクトのコレクションを返します。


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
    ALERT("エラー "+String(Error)+" が発生しました。 問題となったコードはこちらです: \""+Error formula+"\"")
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


## try(expression)

The `try(expression)` statement allows you to test a single-line expression in its actual execution context (including, in particular, local variable values) and to intercept errors it throws so that the 4D error dialog box is not displayed. Using `try(expression)` provides an easy way to handle simple error cases with a very low number of code lines, and without requiring an error-handling method.

The formal syntax of the `try(expression)` statement is:

```4d

try (expression) : any | Undefined

```

*expression* can be any valid expression.

If an error occurred during its execution, it is intercepted and no error dialog is displayed, whether an [error-handling method](#installing-an-error-handling-method) was installed or not before the call to `try()`. If *expression* returns a value, `try()` returns the last evaluated value, otherwise it returns `Undefined`.

You can handle the error(s) using the [`Last errors`](https://doc.4d.com/4dv20/help/command/en/page1799.html) command. If *expression* throws an error within a stack of `try()` calls, the execution flow stops and returns to the latest executed `try()` (the first found back in the call stack).

:::note

If an [error-handling method](#installing-an-error-handling-method) is installed by *expression*, it is called in case of error.

:::


### 例題

1. You want to display the contents of a file if the file can be open without error, and if its contents can be read. 以下のように書くことができます:

```4d
var $text : Text
var $file : 4D.File := File("/RESOURCES/myFile.txt")
var $fileHandle : 4D.FileHandle := try($file.open())
If ($fileHandle # Null)
  $text:=try($fileHandle.readText()) || "Error reading the file"
End if
```


2. You want to handle the divide by zero error. In this case, you want to return 0 and throw an error:

```4d
function divide( $p1: real; $p2: real)-> $result: real
  if ($p2=0)
     $result:=0 //only for clarity (0 is the default for reals)
     throw(-12345; "Division by zero")
  else
    $result:=$p1/$p2
  end if

function test()
  $result:=try(divide($p1;$p2))
  If (Last errors # null)
    ALERT("Error")
  End if

```

3. You want to handle both [predictable and non-predictable](#error-or-status) errors:

```4d
var $e:=ds.Employee.new()
$e.name:="Smith"
$status:=try($e.save()) //catch predictable and non-predictable errors
If ($status.success)
   ALERT( "Success")
Else
   ALERT( "Error: "+JSON Stringify($status.errors))
End if

``` 




