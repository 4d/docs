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

4D では、[`New signal`](#new-signal) コマンドを呼び出すことで新規 Signal オブジェクトを作成します。 作成したシグナルは、`New process` あるいは `CALL WORKER` コマンドに引数として渡す必要があります。

- `signal.wait()` は、他のワーカー/プロセスのタスクが完了するまで待機するワーカー/プロセスから呼び出す必要があります。
- `signal.trigger()` は、他のワーカー/プロセスを待機状態から解放するために、タスク実行を終えたワーカー/プロセスが呼び出す必要があります。


![](../assets/en/API/signal.png)

`signal.trigger()` の呼び出しによって解放されたシグナルは 、再利用することができません。 別のシグナルを設定するには、`New signal` コマンドをあらためて呼び出す必要があります。

Signal オブジェクトは [共有オブジェクト](Concepts/shared.md) であるため、呼び出されたワーカー/プロセスから結果を返すために使用することもできます。 この場合、`Use...End use` 構文内で値を書き込む必要があります。

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


|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |




<!-- REF SignalClass.New signal.Desc -->
## New signal


<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #_command_.New signal.Syntax -->

**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!-- REF SignalClass.New signal.Params -->
| 引数          | タイプ       |    | 詳細                                              |
| ----------- | --------- |:--:| ----------------------------------------------- |
| description | テキスト      | -> | シグナルの詳細                                         |
| Result      | 4D.Signal | <- | シグナルを格納するネイティブオブジェクト|<!-- END REF -->


|


#### 詳細

The `New signal` command <!-- REF #_command_.New signal.Summary -->creates a `4D.Signal` object<!-- END REF -->.

シグナルは、ワーカー/プロセスから他のワーカー/プロセスへと引数のように渡せる共有オブジェクトです。 そのため、以下のようなことが可能になります:

*   呼び出されたワーカー/プロセスは特定の処理が完了した後に Signal オブジェクトを更新することができます。
*   呼び出し元のワーカー/プロセスは CPUリソースを消費することなく、実行を停止してシグナルが更新されるまで待つことができます。

任意で *description* 引数に、シグナルの詳細を説明するカスタムテキストを渡すことができます。 テキストは、シグナルの作成後に定義することも可能です。

Signal オブジェクトは共有オブジェクトのため、`Use...End use` 構文を使用することで、[`.description`](#description) プロパティのほか、ユーザー独自のプロパティを管理するのに使用することもできます。


**戻り値**

新規の [`4D.Signal` オブジェクト](#signal-object)。

#### 例題

以下は、シグナルを設定するワーカーの典型的な例です:

```4d
 #DECLARE ($signal : 4D.Signal)
  // 何らかの処理
  //... Use($signal)
    $signal.myresult:=$processingResult  // 結果を返します
 End use
 $signal.trigger() // 処理が完了しました
```


以下は、***doSomething*** メソッドの一例です:

```4d
 #DECLARE ($signal : 4D.Signal)
  // 何らかの処理
  //...
 結果: "+$signal.myresult)
 Else
    ALERT("myworker は 1秒以内にタスクを終了できませんでした。 ")
 End if
```

<!-- END REF -->


<!-- REF SignalClass.description.Desc -->
## .description

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #SignalClass.description.Syntax -->

**.description** : Text<!-- END REF -->

#### 詳細

The `.description` property <!-- REF #SignalClass.description.Summary -->contains a custom description for the `Signal` object.<!-- END REF -->.

`.description` は、Signal オブジェクトの作成時、あるいはその他のタイミングでも設定することができます。 ただし、`Signal` オブジェクトは共有オブジェクトであるため、`.description` プロパティに書き込む際には必ず `Use...End use` 構文を使わなくてはならない点に留意が必要です。

**読み書き可能** プロパティです。

<!-- END REF -->



<!-- REF SignalClass.signaled.Desc -->
## .signaled

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #SignalClass.signaled.Syntax -->

**.signaled** : Boolean<!-- END REF -->

#### 詳細

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `Signal` object<!-- END REF -->. . When the signal is created, `.signaled` is **False**.

このプロパティは **読み取り専用** です。

<!-- END REF -->



<!-- REF SignalClass.trigger().Desc -->
## .trigger()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #SignalClass.trigger().Syntax -->

**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->
| 引数 | タイプ |  | 詳細                                                         |
| -- | --- |::| ---------------------------------------------------------- |
|    |     |  | Does not require any parameters|<!-- END REF -->


|


#### 詳細

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers or processes waiting for this signal.

Signal がすでにシグナルされている (つまり `signaled` プロパティが **true** になっている) 状態であった場合、この関数は何もしません。

<!-- END REF -->



<!-- REF SignalClass.wait().Desc -->
## .wait()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v17 R4 | 追加 |

</details>

<!-- REF #SignalClass.wait().Syntax -->

**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->
| 引数      | タイプ |    | 詳細                                              |
| ------- | --- | -- | ----------------------------------------------- |
| timeout | 実数  | -> | シグナルの最大待機時間 (秒単位)                               |
| Result  | ブール | <- | `.signaled` プロパティの状態|<!-- END REF -->


|


#### 詳細

The `.wait( )` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->.

コード実行のブロックを防ぐため、*timeout* 引数を使用して最長待機時間を秒単位で指定することもできます(小数を使用できます)。
> **警告**: *timeout* 引数を渡さずに `.wait()` を 4D のメインプロセスで呼び出すことは推奨されていません。 最悪の場合 4Dアプリケーション全体がフリーズしてしまう恐れがあります。

|

この関数は `.signaled` プロパティの値を返します。 この値を評価することで、待機が終了したのは `.trigger()` が呼び出されたためか (`.signaled` プロパティは **true**)、それともタイムアウト時間が経過したためか (`.signaled` プロパティは **false**) を知ることができます。
> Signal オブジェクトを待機しているプロセスの状態は `Waiting for internal flag` です。


<!-- END REF -->
