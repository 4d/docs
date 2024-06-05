---
id: onDisplayDetail
title: On Display Detail
---

| コード | 呼び出し元                                             | 定義                                        |
| --- | ------------------------------------------------- | ----------------------------------------- |
| 8   | フォーム - [リストボックス](FormObjects/listbox_overview.md) | レコードがリストフォーム中に、あるいは行がリストボックス中に表示されようとしている |

## 説明

`On Display Detail` イベントは次のコンテキストで利用できます:

### 出力フォーム

`DISPLAY SELECTION` や `MODIFY SELECTION` によって、リストフォームでレコードを表示されようとしています。

> このイベントは、プロジェクトフォームでは選択できず、**テーブルフォーム** でのみ利用できます。

このコンテキストにおいて、メソッドやフォームイベントが呼び出される順序は以下のとおりです:

- レコードごとに:
  - 詳細エリアのオブジェクトごとに:
    - オブジェクトメソッドの `On Display Detail` イベント
  - フォームメソッドの `On Display Detail` イベント

> ヘッダーエリアは、[`On Header`](onHeader.md) イベントで処理されます。

`On Display Detail` イベントから、ダイアログボックスを表示する 4Dコマンドを呼び出すことはできません。これはシンタックスエラーを起こします。 以下のコマンドが該当します: `ALERT`, `DIALOG`, `CONFIRM`, `Request`, `ADD RECORD`, `MODIFY RECORD`, `DISPLAY SELECTION`, `MODIFY SELECTION`。

### セレクションリストボックス

このイベントは、[**セレクション型**](FormObjects/listbox_overview.md#セレクションリストボックス) のリストボックスの行が表示されたときに発生します。

### Displayed line number

`Displayed line number` 4Dコマンドは、`On Display Detail` フォームイベントと連動します。 このコマンドは、レコードのリストまたはリストボックスの行が画面に表示されるときに処理されている行の番号を返します。
