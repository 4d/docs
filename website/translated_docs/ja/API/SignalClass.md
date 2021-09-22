---
id: SignalClass
title: Signal
---

シグナルは、マルチプロセスアプリケーションにおいてプロセス間でのやり取りを管理し衝突を避けるために 4Dランゲージが提供するツールです。 シグナルは、1つ以上のプロセスが実行を一時停止し、特定のタスクが完了するまで待つようにする仕組みです。 どのプロセスもシグナルを待機またはリリースすることができます。

> プロセス間のやり取りを管理するには、セマフォーも使用できます。 セマフォーは、2つ以上のプロセスが同じリソース (ファイル、レコードなど) を同時に変更しないようにするための仕組みです。 セマフォーを解除できるのは、それを設定したプロセスのみです。


### Signal オブジェクト

シグナルは、ワーカーやプロセスを呼び出す/作成するコマンドに対して引数として渡す必要のある共有オブジェクトです。

`4D.Signal` オブジェクトは次のビルトインされたメソッドおよびプロパティを持ちます:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description)

シグナルの `.wait()` メソッドを呼び出したワーカーやプロセスは、`.signaled` プロパティが true になるまで実行を停止します。 シグナルを待っている間、呼び出したプロセスは CPU を消費しません。 これはマルチプロセスアプリケーションのパフォーマンスを鑑みると有意義な仕組みです。 `.signaled` プロパティは、いずれかのワーカーまたはプロセスがシグナルの `.trigger()` メソッドを呼び出した時点で true になります。

また、コードのブロックを避けるため、`.wait()` 呼び出しの際に定義したタイムアウト時間に達することでも待機状態を脱することができます。

Signal オブジェクトは、[New signal](#new-signal) コマンドによって作成されます。


### シグナルの使い方

4D では、[`New signal`](#new-signal) コマンドを呼び出すことで新規 Signal オブジェクトを作成します。 作成したシグナルは、`New process` あるいは `CALL WORKER` コマンドに引数として渡す必要があります。それにより、プロセスやワーカーはタスクを完了した際にシグナルを書き換えることができます。

- `signal.wait()` は、他のワーカー/プロセスのタスクが完了するまで待機するワーカー/プロセスから呼び出す必要があります。
- `signal.trigger()` は、他のワーカー/プロセスを待機状態から解放するために、タスク実行を終えたワーカー/プロセスが呼び出す必要があります。


![](assets/en/API/signal.png)

`signal.trigger()` の呼び出しによって解放されたシグナルは 、再利用することができません。 別のシグナルを設定するには、`New signal` コマンドをあらためて呼び出す必要があります。

Signal オブジェクトは [共有オブジェクト](Concepts/shared.md) であるため、呼び出されたワーカー/プロセスから結果を返すために使用することもできます。この場合、`Use...End use` 構文内で値を書き込む必要があります。

### 例題

```4d
 var $signal : 4D.Signal

  // シグナルを作成します
 $signal:=New signal

  // メインプロセスを呼び出し、OpenForm メソッドを実行します
 CALL WORKER(1;"OpenForm";$signal)
  // 他の計算をします
 ...
  // プロセスの終了を待機します
 $signaled:=$signal.wait()

  // 結果を処理します
 $calc:=$signal.result+...
```

***OpenForm*** メソッド:

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // フォームを開きます
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // $signal 共有オブジェクトに新しい属性を追加することで、他のプロセスに返り値を受け渡します:
 Use($signal)
    $signal.result:=$form.value
 End use

  // 待機プロセスに向けてシグナルをトリガーします
 $signal.trigger()
```

### 概要


|                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**.description** : Text](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains a custom description for the `Signal` object.                                                                                                  |
| [**.signaled** : Boolean](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;contains the current state of the `Signal` object                                                                                                          |
| [**.trigger( )**](#trigger)<p>&nbsp;&nbsp;&nbsp;&nbsp;sets the `signaled` property of the signal object to **true**                                                                                                       |
| [**.wait**( { *timeout* : Real } ) : Boolean ](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire |




## New signal


<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**New signal** { ( *description* : Text ) } : 4D.Signal
| 引数          | タイプ       |    | 説明                   |
| ----------- | --------- |:--:| -------------------- |
| description | テキスト      | -> | シグナルの詳細              |
| 戻り値         | 4D.Signal | <- | シグナルを格納するネイティブオブジェクト |


#### 説明

The `New signal` command creates a `4D.Signal` object.

シグナルは、ワーカー/プロセスから他のワーカー/プロセスへと引数のように渡せる共有オブジェクトです。そのため、以下のようなことが可能になります:

*   呼び出されたワーカー/プロセスは特定の処理が完了した後に Signal オブジェクトを更新することができます。
*   呼び出し元のワーカー/プロセスは CPUリソースを消費することなく、実行を停止してシグナルが更新されるまで待つことができます。

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
 $signaled:=$signal.wait(1) // 最大で1秒待機します

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



## .description

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.description** : Text
#### 説明

The `.description` property contains a custom description for the `Signal` object..

`.description` は、Signal オブジェクトの作成時、あるいはその他のタイミングでも設定することができます。 ただし、`Signal` オブジェクトは共有オブジェクトであるため、`.description` プロパティに書き込む際には必ず `Use...End use` 構文を使わなくてはならない点に留意が必要です。

**読み書き可能** プロパティです。




## .signaled

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

**.signaled** : Boolean
#### 説明

The `.signaled` property contains the current state of the `Signal` object. Signal オブジェクトが作成された時点では、`.signaled` は **false** です。 Signal オブジェクトに対して `.trigger()` が呼び出された時に **true** となります。

このプロパティは **読み取り専用** です。




## .trigger()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.trigger( )**
| 引数 | タイプ |  | 説明                |
| -- | --- |::| ----------------- |
|    |     |  | このコマンドは引数を必要としません |


#### 説明

The `.trigger( )` function sets the `signaled` property of the signal object to **true** and awakens all workers or processes waiting for this signal.

Signal がすでにシグナルされている (つまり `signaled` プロパティが **true** になっている) 状態であった場合、この関数は何もしません。




## .wait()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |
</details>

**.wait**( { *timeout* : Real } ) : Boolean
| 引数      | タイプ |    | 説明                   |
| ------- | --- | -- | -------------------- |
| timeout | 実数  | -> | シグナルの最大待機時間 (秒単位)    |
| 戻り値     | ブール | <- | `.signaled` プロパティの状態 |


#### 説明

The `.wait( )` function makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire.

コード実行のブロックを防ぐため、*timeout* 引数を使用して最長待機時間を秒単位で指定することもできます(小数を使用できます)。
> **警告**: *timeout* 引数を渡さずに `.wait()` を 4D のメインプロセスで呼び出すことは推奨されていません。最悪の場合 4Dアプリケーション全体がフリーズしてしまう恐れがあります。

Signal がすでにシグナルされている (つまり `signaled` プロパティが **true** になっている) 状態であった場合、この関数は即座に戻り値を返します。

この関数は `.signaled` プロパティの値を返します。 この値を評価することで、待機が終了したのは `.trigger()` が呼び出されたためか (`.signaled` プロパティは **true**)、それともタイムアウト時間が経過したためか (`.signaled` プロパティは **false**) を知ることができます。
> Signal オブジェクトを待機しているプロセスの状態は `Waiting for internal flag` です。



<style> h2 { background: #d9ebff;}</style>
