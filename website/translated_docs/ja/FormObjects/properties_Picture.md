---
id: propertiesPicture
title: ピクチャー
---

* * *

## パス名

[ピクチャーボタン](pictureButton_overview.md)、[ピクチャーポップアップメニュー](picturePopupMenu_overview.md)、または [スタティックピクチャー](staticPicture.md) に表示させるピクチャーのパス名です。 POSIX シンタックスを使用します。

ピクチャーパスに指定できる場所は次の 2箇所です:

- プロジェクトデータベースの **Resources** フォルダー。 アプリケーション内の複数のフォームで画像を共有する場合に適切です。 この場合、パス名は: "/RESOURCES/\<picture path\>".
- フォームフォルダー内の画像用フォルダー (たとえば、**Images** と名付けたフォルダー)。 特定のフォームでしか画像が使われない場合や、そのフォームの全体を複製してプロジェクト内、または別のプロジェクトに移動させたい場合に適切です。 In this case, the Pathname is "\<picture path\>" and is resolved from the root of the form folder.

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

### 中央合わせ / トランケート (中央合わせしない)

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

[スタティックピクチャー](staticPicture.md)