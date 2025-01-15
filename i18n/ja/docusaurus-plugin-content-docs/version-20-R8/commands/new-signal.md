---
id: new-signal
title: New signal
displayed_sidebar: docs
---

<!-- REF #_command_.New signal.Syntax -->**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!--REF #_command_.New signal.Params-->

| 引数          | 型                         |   | 説明                   |
| ----------- | ------------------------- | - | -------------------- |
| description | Text                      | → | シグナルの詳細              |
| 戻り値         | 4D.Signal | ← | シグナルを格納するネイティブオブジェクト |

<!-- END REF-->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

#### 説明

`New signal` コマンドは、<!-- REF #_command_.New signal.Summary -->`4D.Signal` オブジェクトを作成します<!-- END REF -->。

シグナルは、ワーカー/プロセスから他のワーカー/プロセスへと引数のように渡せる共有オブジェクトです。 そのため、以下のようなことが可能になります:

- 呼び出されたワーカー/プロセスは特定の処理が完了した後に Signal オブジェクトを更新することができます。
- 呼び出し元のワーカー/プロセスは CPUリソースを消費することなく、実行を停止してシグナルが更新されるまで待つことができます。

任意で *description* 引数に、シグナルの詳細を説明するカスタムテキストを渡すことができます。 テキストは、シグナルの作成後に定義することも可能です。

Signal オブジェクトは共有オブジェクトのため、`Use...End use` 構文を使用することで、[`.description`](#description) プロパティのほか、ユーザー独自のプロパティを管理するのに使用することもできます。

**戻り値**

新規の [`4D.Signal` オブジェクト](#signal-object)。

#### 例題

以下は、シグナルを設定するワーカーの典型的な例です:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) // 最大で 1秒待機します

 If($signaled)
    ALERT("myworker はタスクを終了しました。 結果: "+$signal.myresult)
 Else
    ALERT("myworker は 1秒以内にタスクを終了できませんでした。")
 End if
```

以下は、***doSomething*** メソッドの一例です:

```4d
 #DECLARE ($signal : 4D.Signal)
  // 何らかの処理
  //...
 Use($signal)
    $signal.myresult:=$processingResult  // 結果を返します
 End use
 $signal.trigger() // 処理が完了しました
```

#### プロパティ

|         |                                                                 |
| ------- | --------------------------------------------------------------- |
| コマンド番号  | 1641                                                            |
| スレッドセーフ | &amp;amp;amp;amp;amp;amp;amp;amp;amp;check; |
