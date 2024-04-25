---
id: onAfterKeystroke
title: On After Keystroke
---

| コード | 呼び出し元                                                                                                                                                                                                                                                | 定義                                                                               |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 28  | [4D Write Pro エリア](FormObjects/writeProArea_overview) - [コンボボックス](FormObjects/comboBox_overview.md) - フォーム - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) | フォーカスのあるオブジェクトに文字が入力されようとしている。 `Get edited text` はこの文字を **含む** オブジェクトのテキストを返します。 |

<details><summary>履歴</summary>

| リリース  | 内容                                         |
| ----- | ------------------------------------------ |
| 18 R5 | - 入力不可リストボックスのサポート - イベントは IME確定後にトリガーされます |

</details>

## 説明

> `On After Keystroke` イベントは、一般的に [`On After Edit`](onAfterEdit.md) イベントで置き換えることができます (後述参照)。

[`On Before Keystroke`](onBeforeKeystroke.md) と `On After Keystroke` イベントプロパティを選択すると、`FORM Event` コマンドを使用して返される `On Before Keystroke` と `On After Keystroke` イベントを検知し、オブジェクトへのキーストロークを処理できます (詳細は `Get edited text` コマンドの説明を参照ください)。

> これらのイベントは `POST KEY` のようなユーザーアクションをシミュレートするコマンドによっても生成されます。

`On After Keystroke` イベントは次の場合には生成されません:

- [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) メソッドの場合、ただし、セルを編集している場合を除きます ([リストボックス](FormObjects/listbox_overview.md) メソッドではどのような場合でも生成されます)。
- キーボードを使用せずに (ペーストやドラッグ＆ドロップ、チェックボックス、ドロップダウンリスト、コンボボックス) おこなわれた変更の場合。 これらのイベントを処理するには [`On After Edit`](onAfterEdit.md) を使用します。

### キーストロークシーケンス

入力に一連のキーストロークが必要な場合、[`On Before Keystroke`](onBeforeKeystroke.md) と `On After Keystroke` イベントは、入力がユーザーによって完全に確定されたときにのみ生成されます。 `Keystroke` コマンドは、確定済みの文字を返します。 このケースは主に以下のように発生します:

- ^ や ~ のような特殊キーが使用された場合: その後に拡張された文字が入力された場合にのみ生成されます (例: "ê" や "ñ")。
- IME (Input Method Editor) が、文字の組み合わせを入力するための中間的なダイアログボックスを表示している場合: IME のダイアログが確定されたときにのみイベントが発生します。

### 参照

[On Before Keystroke](onBeforeKeystroke.md)。
