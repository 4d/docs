---
id: SignalClass
title: Signal
---

シグナルは、マルチプロセスアプリケーションにおいてプロセス間でのやり取りを管理し衝突を避けるために 4Dランゲージが提供するツールです。 シグナルは、1つ以上のプロセスが実行を一時停止し、特定のタスクが完了するまで待つようにする仕組みです。 どのプロセスもシグナルを待機またはリリースすることができます。

> プロセス間のやり取りを管理するには、セマフォーも使用できます。 セマフォーは、2つ以上のプロセスが同じリソース (ファイル、レコードなど)  を同時に変更しないようにするための仕組みです。 セマフォーを解除できるのは、それを設定したプロセスのみです。

### Signal オブジェクト

シグナルは、ワーカーやプロセスを呼び出す/作成するコマンドに対して引数として渡す必要のある共有オブジェクトです。

`4D.Signal` オブジェクトは次のビルトインされたメソッドおよびプロパティを持ちます:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description)

シグナルの `.wait()` メソッドを呼び出したワーカーやプロセスは、`.signaled` プロパティが true になるまで実行を停止します。 シグナルを待っている間、呼び出したプロセスは CPU を消費しません。 これはマルチプロセスアプリケーションのパフォーマンスを鑑みると有意義な仕組みです。 `.signaled` プロパティは、いずれかのワーカーまたはプロセスがシグナルの `.trigger()` メソッドを呼び出した時点で true になります。

また、コードのブロックを避けるため、`.wait()` 呼び出しの際に定義したタイムアウト時間に達することでも待機状態を脱することができます。

Signal オブジェクトは、[`New signal`](../commands/new-signal.md) コマンドによって作成されます。

### シグナルの使い方

4D では、[`New signal`](../commands/new-signal.md) コマンドを呼び出すことで新規 Signal オブジェクトを作成します。 作成したシグナルは、`New process` あるいは `CALL WORKER` コマンドに引数として渡す必要があります。それにより、プロセスやワーカーはタスクを完了した際にシグナルを書き換えることができます。

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

|                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)<br/><!-- INCLUDE #SignalClass.description.Summary --> |
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<br/><!-- INCLUDE #SignalClass.signaled.Summary -->          |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<br/><!-- INCLUDE #SignalClass.trigger().Summary -->         |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #SignalClass.wait().Summary -->                  |

<!-- REF SignalClass.description.Desc -->

## .description

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SignalClass.description.Syntax -->**.description** : Text<!-- END REF -->

#### 説明

`.description` プロパティは、<!-- REF #SignalClass.description.Summary -->`Signal` オブジェクトのカスタムな詳細<!-- END REF -->を格納します。

`.description` は、Signal オブジェクトの作成時、あるいはその他のタイミングでも設定することができます。 ただし、`Signal` オブジェクトは共有オブジェクトであるため、`.description` プロパティに書き込む際には必ず `Use...End use` 構文を使わなくてはならない点に留意が必要です。

**読み書き可能** プロパティです。

<!-- END REF -->

<!-- REF SignalClass.signaled.Desc -->

## .signaled

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SignalClass.signaled.Syntax -->**.signaled** : Boolean<!-- END REF -->

#### 説明

`.signaled` プロパティは、<!-- REF #SignalClass.signaled.Summary -->`Signal` オブジェクトの現在の状態<!-- END REF -->を格納します。 Signal オブジェクトが作成された時点では、`.signaled` は **false** です。 Signal オブジェクトに対して `.trigger()` が呼び出された時に **true** となります。

このプロパティは **読み取り専用** です。

<!-- END REF -->

<!-- REF SignalClass.trigger().Desc -->

## .trigger()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SignalClass.trigger().Syntax -->**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->

| 引数 | 型 |     | 説明         |
| -- | - | :-: | ---------- |
|    |   |     | 引数を必要としません |

<!-- END REF -->

#### 説明

`.trigger()` 関数は、<!-- REF #SignalClass.trigger().Summary -->シグナルオブジェクトの `signaled` プロパティを **true** に設定します<!-- END REF --> 。すると、このシグナルを待機していたワーカーやプロセスが開始されます。

Signal がすでにシグナルされている (つまり `signaled` プロパティが **true** になっている) 状態であった場合、この関数は何もしません。

<!-- END REF -->

<!-- REF SignalClass.wait().Desc -->

## .wait()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 17 R4 | 追加 |

</details>

<!-- REF #SignalClass.wait().Syntax -->**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->

| 引数      | 型       |                             | 説明                                   |
| ------- | ------- | --------------------------- | ------------------------------------ |
| timeout | Real    | ->                          | シグナルの最大待機時間 (秒単位) |
| 戻り値     | Boolean | <- | `.signaled` プロパティの状態                 |

<!-- END REF -->

#### 説明

`.wait()` 関数は、<!-- REF #SignalClass.wait().Summary -->シグナルオブジェクトの `.signaled` プロパティが **true** になるか、任意の *timeout* に指定したタイムアウト時間が経過するまで、カレントプロセスを待機させます<!-- END REF -->。

コード実行のブロックを防ぐため、*timeout* 引数を使用して最長待機時間を秒単位で指定することもできます(小数を使用できます)。

> **警告**: *timeout* 引数を渡さずに `.wait()` を 4D のメインプロセスで呼び出すことは推奨されていません。最悪の場合 4Dアプリケーション全体がフリーズしてしまう恐れがあります。

Signal がすでにシグナルされている (つまり `signaled` プロパティが **true** になっている) 状態であった場合、この関数は即座に戻り値を返します。

この関数は `.signaled` プロパティの値を返します。 この値を評価することで、待機が終了したのは `.trigger()` が呼び出されたためか (`.signaled` プロパティは **true**)、それともタイムアウト時間が経過したためか (`.signaled` プロパティは **false**) を知ることができます。

> Signal オブジェクトを待機しているプロセスの状態は `Waiting for internal flag` です。

<!-- END REF -->
