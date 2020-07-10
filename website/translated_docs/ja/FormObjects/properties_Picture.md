---
id: propertiesPicture
title: ピクチャー
---

* * *

## Pathname

Pathname of a static source picture for a [picture button](pictureButton_overview.md), [picture pop-up Menu](picturePopupMenu_overview.md), or [static picture](staticPicture.md). You must use the POSIX syntax.

Two main locations can be used for static picture path:

- in the **Resources** folder of the project database. Appropriate when you want to share static pictures between several forms in the database. In this case, the Pathname is "/RESOURCES/\<picture path\>".
- in an image folder (e.g. named **Images**) within the form folder. Appropriate when the static pictures are used only in the form and/or you want to be able to move or duplicate the whole form within the project or different projects. In this case, the Pathname is "\<picture path\>" and is resolved from the root of the form folder.

#### JSON 文法

|    名    | データタイプ | とりうる値                                       |
|:-------:|:------:| ------------------------------------------- |
| picture |  テキスト  | Relative or filesystem path in POSIX syntax |


#### 対象オブジェクト

[Picture button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Static Picture](staticPicture.md)

* * *

## 表示フォーマット

### スケーリング

`JSON 文法では: "scaled"`

**スケーリング** を選択すると、ピクチャーはフィールドエリアの大きさに合うようにリサイズされます。

![](assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### 繰り返し

`JSON 文法では: "tiled"`

**繰り返し** フォーマットを持つピクチャーが含まれるエリアが拡大されると、ピクチャーは変形されず、エリア全体を埋めるのに必要なだけピクチャーが繰り返されます。

![](assets/en/FormObjects/property_pictureFormat_Replicated.png)

フィールドがオリジナルのピクチャーよりも小さいサイズにされた場合、ピクチャーはトランケート (中央合わせなし) されます。

### Center / Truncated (non-centered)

`JSON 文法では: "truncatedCenter" / "truncatedTopLeft"`

The **Center** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 上下、および左右のはみ出し量は同じになります。

**トランケート (中央合わせしない)** フォーマットを選択すると、4D はピクチャーの左上角をフィールドの左上角に合わせて配置し、フィールドエリアに収まらない部分はエリアからはみ出します。 ピクチャーは右と下にはみ出します。

> ピクチャーフォーマットが **トランケート (中央合わせしない)** の場合、入力エリアにスクロールバーを追加できます。

![](assets/en/FormObjects/property_pictureFormat_Truncated.png)

#### JSON 文法

| 名             | データタイプ | とりうる値                                                    |
| ------------- | ------ | -------------------------------------------------------- |
| pictureFormat | string | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |


#### 対象オブジェクト

[Static Picture](staticPicture.md)