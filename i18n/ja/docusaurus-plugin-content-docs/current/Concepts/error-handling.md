---
id: error-handling
title: エラー処理
---

エラー処理とは、アプリケーション内で発生する可能性のあるエラーに備え、対処することです。 ランタイムにおけるエラーのキャッチや報告、またそれらの条件を検証するため、4Dは包括的なサポートを提供しています。

エラー処理は次の2つの要望に応えます:

- 開発フェーズにおいて、問題となりうるコードのエラーやバグを発見して修正したい。
- 運用フェーズにおいて、予期しないエラーを検知して回復したい。とくに、システムエラーダイアログ (ディスクが一杯、ファイルがない、など) を独自のインターフェースに置換できます。

:::tip Good practice

It is highly recommended to install a global error-handling method on 4D Server, for all code running on the server. This method would avoid unexpected dialog boxes to be displayed on the server machine (if run with interface), and could log errors in a dedicated file for further analyses.

:::


## エラー/ステータス

`entity.save()` や `transporter.send()` など、おおくの 4D クラス関数は *status* オブジェクトを返します。 ランタイムにおいて "想定される"、プログラムの実行を停止させないエラー (無効なパスワード、ロックされたエンティティなど) がこのオブジェクトに格納されます。 これらのエラーへの対応は、通常のコードによっておこなうことができます。

ディスク書き込みエラーやネットワークの問題などのイレギュラーな中断は "想定されない" エラーです。 これらのエラーは例外を発生させ、エラー処理メソッドを介して対応する必要があります。


## エラー処理メソッドの実装

In 4D, all errors can be caught and handled by specific project methods, named **error-handling** (or **error-catching**) methods.

Once installed, error handlers are automatically called in interpreted or compiled mode in case of error in the 4D application or one of its components. A different error handler can be called depending on the execution context (see below).

To *install* an error-handling project method, you just need to call the [`ON ERR CALL`](https://doc.4d.com/4dv19/help/command/en/page155.html) command with the project method name and (optionnally) scope as parameters. 例:

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
```

To stop catching errors for an execution context and give back hand, call `ON ERR CALL` with an empty string:

```4d
ON ERR CALL("";ek local) //gives back control for the local process
```

The  [`Method called on error`](https://doc.4d.com/4dv19/help/command/en/page704.html) command allows you to know the name of the method installed by `ON ERR CALL` for the current process. このコマンドは汎用的なコードでとくに有用です。エラー処理メソッドを一時的に変更し、後で復元することができます:

```4d
 $methCurrent:=Method called on error(ek local)
 ON ERR CALL("NewMethod";ek local)
  //If the document cannot be opened, an error is generated
 $ref:=Open document("MyDocument")
  //Reinstallation of previous method
 ON ERR CALL($methCurrent;ek local)

```

### スコープとコンポーネント

An error-handling method can be set for different execution contexts:

- for the **current process**- a local error handler will be only called for errors that occurred in the current process,
- for the **whole application**- a global error handler will be called for all errors that occurred in the application execution context,
- for the **components**- it will be called in the host for all errors that occurred in the components.

例:

```4d
ON ERR CALL("IO_Errors";ek local) //Installs a local error-handling method
ON ERR CALL("globalHandler";ek global) //Installs a global error-handling method
ON ERR CALL("componentHandler";ek errors from components) //Installs an error-handling method for components
```

You can install a global error handler that will serve as "fallback" and specific local error handlers for certain processes. A global error handler is also useful on the server to avoid error dialogs on the server when run with interface.

アプリケーションにおいて一つのエラーキャッチメソッドを使うやり方もあれば、アプリケーションのモジュールごとに違うメソッドを定義する方法もあります。 However, only one method can be installed per execution context.

When an error occurs, only one method is called, even if several "concurrent" error handlers are installed:

- if the error occurs in the current process, the local handler is called and NOT the global handler;
- if the error occurs in a component and the component has its own error handler, the error handler of the component is called and NOT the "errors from components" handler of the host application.


### メソッド内でのエラー処理

Within a custom error method, you have access to several pieces of information that will help you identifying the error:

- dedicated system variables:

  - `Error` (倍長整数): エラーコード
  - `Error method` (テキスト): エラーを生成したメソッドの名称
  - `Error line` (倍長整数): エラーを生成したメソッドの行番号
  - `Error formula` (テキスト): エラーの元となった 4D コードのフォーミュラ (テキスト)

:::info

4D automatically maintains a number of variables called **system variables**, meeting different needs. See the *4D Language Reference manual*.

:::

- the [`Last errors`](https://doc.4d.com/4dv19/help/command/en/page1799.html) command that returns a collection of the current stack of errors that occurred in the 4D application. You can also use the [`GET LAST ERROR STACK`](https://doc.4d.com/4dv19/help/command/en/page1015.html) command that returns the same information as arrays.
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


