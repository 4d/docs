---
id: onBeforeKeystroke
title: On Before Keystroke
---

| コード | 呼び出し元                                                                                                                                                                                                                                                | 定義                                                                                 |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| 17  | [4D Write Pro エリア](FormObjects/writeProArea_overview) - [コンボボックス](FormObjects/comboBox_overview.md) - フォーム - [入力](FormObjects/input_overview.md) - [リストボックス](FormObjects/listbox_overview.md) - [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) | フォーカスのあるオブジェクトに文字が入力されようとしている。 `Get edited text` はこの文字を **含まない** オブジェクトのテキストを返します。 |

<details><summary>履歴</summary>

| バージョン  | 内容                                                                                      |
| ------ | --------------------------------------------------------------------------------------- |
| v18 R5 | - Support in non-enterable list boxes - The event is now triggered after IME validation |

</details>

## 詳細

`On Before Keystroke` と [`On After Keystroke`](onAfterKeystroke.md) イベントプロパティを選択すると、`FORM Event` コマンドを使用して返される `On Before Keystroke` と [`On After Keystroke`](onAfterKeystroke.md) イベントを検知し、オブジェクトへのキーストロークを処理できます (詳細は `Get edited text` コマンドの説明を参照ください)。 `On Before Keystroke` イベント内では、`FILTER KEYSTROKE` コマンドを使って、入力された文字をフィルターできます。

> これらのイベントは `POST KEY` のようなユーザーアクションをシミュレートするコマンドによっても生成されます。

`On Before Keystroke` イベントは次の場合には生成されません:

- [リストボックス列](FormObjects/listbox_overview.md#リストボックス列) メソッドの場合、ただし、セルを編集している場合を除きます ([リストボックス](FormObjects/listbox_overview.md) メソッドではどのような場合でも生成されます)。
- キーボードを使用せずに (ペーストやドラッグ＆ドロップ、チェックボックス、ドロップダウンリスト、コンボボックス) おこなわれた変更の場合。 これらのイベントを処理するには [`On After Edit`](onAfterEdit.md) を使用します。

### 入力不可オブジェクト

`On Before Keystroke` イベントは、入力不可能なオブジェクトでも発生させることができます。 たとえば、リストボックスのセルが入力不可能であったり、行が選択不可能であったりしても、リストボックスで発生させることができます。 これにより、ユーザーが値の最初の文字を入力することで、リストボックスの特定の行に動的にスクロールできるようなインターフェースを構築することができます。 リストボックスのセルが入力可能な場合は、`Is editing text` コマンドを使用して、ユーザーが実際にセルにテキストを入力しているのか、タイプアヘッド機能を使用しているのかを確認し、適切なコードを実行することができます。

### キーストロークシーケンス

入力に一連のキーストロークが必要な場合、`On Before Keystroke` と [`On After Keystroke`](onAfterKeystroke.md) イベントは、入力がユーザーによって完全に確定されたときにのみ生成されます。 `Keystroke` コマンドは、確定済みの文字を返します。 このケースは主に以下のように発生します:

- ^ や ~ のような特殊キーが使用された場合: その後に拡張された文字が入力された場合にのみ生成されます (例: "ê" や "ñ")。
- IME (Input Method Editor) が、文字の組み合わせを入力するための中間的なダイアログボックスを表示している場合: IME のダイアログが確定されたときにのみイベントが発生します。

### 参照

[On After Keystroke](onAfterKeystroke.md)。
