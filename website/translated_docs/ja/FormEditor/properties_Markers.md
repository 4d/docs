---
id: markers
title: マーカー
---


これらのプロパティを使用して、**テーブルフォーム** の縦ルーラー上でのマーカーの位置を精密に指定することができます。 マーカーは主に出力フォームで使用されます。 マーカーはリストされる情報を制御し、ヘッダーやブレーク、詳細、フッターを設定します。 各エリア内に配置されたオブジェクトは、対応する場所に表示や印刷されます。

フォームが出力フォームとして使用されるときは、画面用であれ印刷用であれ、マーカー設定が考慮されて各エリアが指定された場所に表示/印刷されます。 また、サブフォームエリア内のリストフォームとしてフォームが使用される場合も出力マーカーは有効です。 ただし、フォームが入力フォームとして使用される場合、マーカー設定は無視されます。

これらのエリアに配置されたオブジェクトに割り当てられたメソッドは、適切なイベントが有効にされていれば、エリアが表示/印刷されるときに実行されます。 たとえば、ヘッダーエリアに配置されたオブジェクトのメソッドは `On Header` イベントで実行されます。

---

## フォームブレーク

フォームブレークエリアはレコードリストの下に一回だけ表示あるいは印刷されます。

ブレークエリアは詳細マーカー (D) とブレークマーカー (B0) の間です。 レポートに [複数のブレークエリア](#追加マーカーの作成)を追加することもできます。

ブレークエリアの大きさは変更することができます。 レコードデータではない情報 (説明や日付、時刻など) のほか、線やその他のグラフィック要素を表示するためにブレークエリアを使用できます。 印刷レポートでは、小計などのサマリ計算をおこなって印刷するために使用できます。


#### JSON 文法

| 名称          | データタイプ                            | とりうる値                                                            |
| ----------- | --------------------------------- | ---------------------------------------------------------------- |
| markerBreak | integer &#x7c; integer collection | ブレークマーカーの位置 (ピクセル単位)、またはブレークマーカー位置のコレクションを指定します。<br>最小値: 0 |

---

## フォーム詳細

フォーム詳細エリアは、レポート中のレコード毎に画面に表示されたり印刷されたりします。 詳細エリアはヘッダーマーカー (H) と詳細マーカー (D) の間です。

詳細エリアの大きさは変更することができます。 詳細エリアに配置したオブジェクトはレコード毎に表示または印刷されます。 主にフィールドや変数を配置して、各レコードの情報を表示/印刷しますが、他のオブジェクトを配置することもできます。

#### JSON 文法

| 名称         | データタイプ  | とりうる値             |
| ---------- | ------- | ----------------- |
| markerBody | integer | 詳細マーカーの位置。 最小値: 0 |

---

## フォームフッター

フォームフッターエリアは、画面ではレコードリストの下の表示されます。 印刷レポートの場合は、各ページの一番下に印刷されます。 フッターエリアはブレークマーカー (B0) とフッターマーカー (F) の間です。
フッターエリアの大きさは変更することができます。<p>

フッターエリアを使用して画像、ページ番号、日付、また各ページの下部に配置したいテキストを何でも印刷できます。 通常、画面表示用の出力フォームでは、フッターエリアに検索や並べ替え、印刷などをおこなうためのボタンを配置します。 すべてのアクティブオブジェクトを配置できます。

#### JSON 文法

| 名称           | データタイプ  | とりうる値  |
| ------------ | ------- | ------ |
| markerFooter | integer | 最小値: 0 |


---

## フォームヘッダー

フォームヘッダーエリアは画面の一番上に表示され、また印刷時には各ページの一番上に印刷されます。 ヘッダーエリアはフォームの一番上からヘッダーマーカー (H) までの間です。
ヘッダーエリアの大きさは変更することができます。 ヘッダーエリアには列のタイトル、フォームの説明、その他の情報、会社ロゴなどの画像を配置します。<p>

サブフォームとして表示される出力フォーム、あるいは `DISPLAY SELECTION` や `MODIFY SELECTION` コマンドを使用して表示される出力フォームのヘッダーエリアにアクティブオブジェクトを配置して使用することもできます。 以下のようなアクティブオブジェクトを配置できます:

- ボタン、ピクチャーボタン
- コンボボックス、ドロップダウンリスト、ピクチャーポップアップメニュー
- 階層リスト、リストボックス
- ラジオボタン、チェックボックス、3Dチェックボックス
- 進捗インジケーター、ルーラー、ステッパー、スピナー

`addSubrecord` (サブレコード追加) や `cancel`、`automaticSplitter` (自動スプリッター) などの標準アクションをボタンに割り当てることができます。 ヘッダーエリアに配置したアクティブオブジェクトでは以下のイベントを使用できます: `On Load`, `On Clicked`, `On Header`, `On Printing Footer`, `On Double Clicked`, `On Drop`, `On Drag Over`, `On Unload`。 フォームメソッドが `On Header` イベントで呼び出されるのは、エリアのオブジェクトメソッドが呼び出された後になります。

The form can contains [additional header areas](#additional-areas) to be associated with additional breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed.



#### JSON 文法

| 名称           | データタイプ                            | とりうる値                                                                                                |
| ------------ | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| markerHeader | integer &#x7c; integer collection | Header marker position or collection of header marker positions in pixels.<br>Minimum value: 0 |



---

## 追加マーカーの作成

You can create additional Break areas and Header areas for a report. These additional areas allow you to print subtotals and other calculations in a report and to display other information effectively.

Additional areas are defined when you use a collection of positions in the [Form Break](#form-break) and [Form Header](#form-header) properties.

> In the 4D Form editor, you create additional control lines by holding down the **Alt** key while clicking the appropriate control marker.

A form always starts with a Header, Detail, Break level 0, and Footer areas.

Break at level 0 zero takes in all the records; it occurs after all the records are printed. Additional Break areas can be added, i.e. a Break level 1, Break level 2, etc.

A Break level 1 occurs after the records grouped by the first sorted field are printed.

| Label        | 説明               | Prints after groups created by: |
| ------------ | ---------------- | ------------------------------- |
| Form Break 1 | Break at level 1 | First sorted field              |
| Form Break 2 | Break at level 2 | Second sorted field             |
| Form Break 3 | Break at level 3 | Third sorted field              |

Additional Header areas are associated with Breaks. A level 1 Header is printed just before the records grouped by the first sorted field are printed.

| Label         | 説明                | Prints after groups created by: |
| ------------- | ----------------- | ------------------------------- |
| Form Header 1 | Header at level 1 | First sorted field              |
| Form Header 2 | Header at level 2 | Second sorted field             |
| Form Header 3 | Header at level 3 | Third sorted field              |


If you use the `Subtotal` function to initiate Break processing, you should create a Break area for every level of Break that will be generated by the sort order, minus one. If you do not need anything printed in one of the Break areas, you can reduce its size to nothing by placing its marker on top of another control line. If you have more sort levels than Break areas, the last Break area will be repeated during printing.
