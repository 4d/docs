---
id: propertiesAnimation
title: アニメーション
---

## 先頭フレームに戻る

ピクチャーを連続的に表示し続けます。 最後のピクチャーに到達して再度クリックすると、最初のピクチャーが表示されます。

#### JSON 文法

| 名称                   | データタイプ  | とりうる値       |
| -------------------- | ------- | ----------- |
| loopBackToFirstFrame | boolean | true, false |

#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

#### コマンド

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## マウスアップで戻る

ユーザーがボタンをクリックしているとき以外は、一番目のピクチャーが常に表示されます。 ボタンがクリックされると、マウスボタンが放されるまで二番目のピクチャーが表示されます。 このモードを使用すると、それぞれの状態 (アイドルとクリック) ごとに異なるピクチャーを使用した動作ボタンを作成することができます。 このモードを使って 3D 効果を作成したり、ボタンの動作を表現するピクチャーを表示することができます。

#### JSON 文法

| 名称                     | データタイプ  | とりうる値       |
| ---------------------- | ------- | ----------- |
| switchBackWhenReleased | boolean | true, false |

#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

#### コマンド

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## マウス押下中は自動更新

ユーザーがマウスボタンを押している間は、各ピクチャーが連続的に (アニメーションのように) 表示されます。 最後のピクチャーに達しても、オブジェクトは最初のピクチャーに戻りません。

#### JSON 文法

| 名称                 | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| switchContinuously | boolean | true, false |

#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

#### コマンド

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## アニメーション間隔 (tick)

このモードを使用すると、一定のスピードで (tick 単位) ピクチャーボタンの内容が繰り返し表示されます。 このモードでは、他のすべてのオプションが無視されます。

#### JSON 文法

| 名称         | データタイプ  | とりうる値                  |
| ---------- | ------- | ---------------------- |
| frameDelay | integer | 最小値: 0 |

#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

#### コマンド

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## ロールオーバー効果

マウスカーソルが通過すると、ピクチャーボタンの内容が変わります。 カーソルがボタンエリアを離れると、最初のピクチャーが再度表示されます。

#### JSON 文法

| 名称                 | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| switchWhenRollover | boolean | true, false |

#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

#### コマンド

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

---

## 無効時に最終フレームを使用

ボタンが無効な場合に表示するサムネールとして、最後のサムネールを使用します。 ボタンが使用不可の場合に用いられるサムネールは、4Dにより別に処理されます。このオプションと ”マウス押下中は自動更新” および ”先頭フレームへ戻る” オプションを組み合わせると、最終ピクチャーはボタンに割り当てられた順序から外され、無効時にのみ表示されるようになります。

#### JSON 文法

| 名称                     | データタイプ  | とりうる値       |
| :--------------------- | ------- | ----------- |
| useLastFrameAsDisabled | boolean | true, false |

#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

#### コマンド

[OBJECT Get format](../commands-legacy/object-get-format.md) - [OBJECT SET FORMAT](../commands-legacy/object-set-format.md)

