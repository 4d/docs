---
id: assert
title: ASSERT
slug: /commands/assert
displayed_sidebar: docs
---

<!--REF #_command_.ASSERT.Syntax-->**ASSERT** ( *boolExpression* : Boolean {; *messageText* : Text} )<!-- END REF-->
<!--REF #_command_.ASSERT.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| boolExpression | Boolean | &#8594; | ブール式 |
| messageText | Text | &#8594; | エラーメッセージテキスト |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|12|初出|

</details>
</div>

## 説明 

<!--REF #_command_.ASSERT.Summary-->**ASSERT** コマンドは*boolExpression* 引数に渡されたアサーションを評価し、Falseを返す場合にはコードの実行を中止するとともにエラーメッセージを出します。<!-- END REF-->このコマンドはインタープリタモードでもコンパイル済みモードでも動作します。

*boolExpression* 引数がTrueの場合は、何も起こりません。Falseになった場合には、このコマンドはエラー-10518をトリガーし、デフォルトでアサーションのテキストとその後に"アサーション違反:"というメッセージを表示します。このエラーは[ON ERR CALL](../commands/on-err-call)コマンドで実装されたメソッドを使う事により割り込み可能で、それにより、例えばログファイルに情報を記録するなどすることができます。

任意の引数*messageText* を使用する事で、アサーションのテキストの代わりにカスタムのエラーメッセージを表示する事ができます。

アサーションはコードに挿入された指示命令で、コード実行中の例外を検知するために使用します。ある時点において式の検証をしたときに[True](../commands/true)であれば正常であり、そうでなければ例外が発生したことになります。アサーションはなにより、発生するはずのないケースを検知するために使用します。主にプログラミングバグを検知するために使用します。[SET ASSERT ENABLED](../commands/set-assert-enabled) コマンドを使用して、(例えばバージョンにより)アプリケーションのすべてのアサーションを全体として有効にしたり無効にしたりできます。

プログラミングにおけるアサーションについての詳細は、Wikipediaの関連情報をご覧ください: [http://ja.wikipedia.org/wiki/表明](http://ja.wikipedia.org/wiki/%E8%A1%A8%E6%98%8E)

## 例題 1 

レコードに対する処理を実行する前に、開発者はレコードが正しく読み/書きモードでロードされたかを確認する必要があります:

```4d
 READ WRITE([Table 1])
 LOAD RECORD([Table 1])
 ASSERT(Not(Locked([Table 1])))
  // レコードがロックされていると -10518 エラーが生成される
```

## 例題 2 

アサーションはプロジェクトメソッドに渡された引数をテストして、異常な値を検知するために使用できます。以下の例題では、カスタム警告メッセージが表示されます。

```4d
  // $1に渡された名前に基づき、クライアントの番号を返す
 var $1 : Text // クライアントの名前
 ASSERT($name#"";"クライアント名が空です")
  // このケースでは空の名前は異常な値です
  // アサーションがfalseの場合、以下がエラーダイアログに表示されます:
  //"アサーション違反: クライアント名が空です"
```

## 参照 

[Asserted](../commands/asserted)  
[Get assert enabled](../commands/get-assert-enabled)  
[SET ASSERT ENABLED](../commands/set-assert-enabled)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1129 |
| スレッドセーフである | yes |
| システム変数を更新する | error |


