---
id: propertiesAnimation
title: アニメーション
---

* * *

## 先頭フレームに戻る

ピクチャーを連続的に表示し続けます。 最後のピクチャーに到達して再度クリックすると、最初のピクチャーが表示されます。

#### JSON 文法

| 名                    | データタイプ  | とりうる値       |
| -------------------- | ------- | ----------- |
| loopBackToFirstFrame | boolean | true, false |


#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

* * *

## マウスアップで戻る

ユーザーがボタンをクリックしているとき以外は、一番目のピクチャーが常に表示されます。 ボタンがクリックされると、マウスボタンが放されるまで二番目のピクチャーが表示されます。 このモードを使用すると、それぞれの状態 (アイドルとクリック) ごとに異なるピクチャーを使用した動作ボタンを作成することができます。 このモードを使って 3D 効果を作成したり、ボタンの動作を表現するピクチャーを表示することができます。

#### JSON 文法

| 名                      | データタイプ  | とりうる値       |
| ---------------------- | ------- | ----------- |
| switchBackWhenReleased | boolean | true, false |


#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

* * *

## マウス押下中は自動更新

ユーザーがマウスボタンを押している間は、各ピクチャーが連続的に (アニメーションのように) 表示されます。 最後のピクチャーに達しても、オブジェクトは最初のピクチャーに戻りません。

#### JSON 文法

| 名                  | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| switchContinuously | boolean | true, false |


#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

* * *

## アニメーション間隔 (tick)

Enables cycling through the contents of the picture button at the specified speed (in ticks). In this mode, all other options are ignored.

#### JSON 文法

| 名          | データタイプ  | とりうる値  |
| ---------- | ------- | ------ |
| frameDelay | integer | 最小値: 0 |


#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

* * *

## Switch when roll over

Modifies the contents of the picture button when the mouse cursor passes over it. The initial picture is displayed when the cursor leaves the button’s area.

#### JSON 文法

| 名                  | データタイプ  | とりうる値       |
| ------------------ | ------- | ----------- |
| switchWhenRollover | boolean | true, false |


#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)

* * *

## 無効時に最終フレームを使用

Enables setting the last thumbnail as the one to display when the button is disabled. The thumbnail used when the button is disabled is processed separately by 4D: when you combine this option with "Switch Continuously" and "Loop Back to First Frame", the last picture is excluded from the sequence associated with the button and only appears when it is disabled.

#### JSON 文法

| 名                      | データタイプ  | とりうる値       |
|:---------------------- | ------- | ----------- |
| useLastFrameAsDisabled | boolean | true, false |


#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md)