---
id: propertiesPicture
title: ピクチャー
---

---
## パス名

[ピクチャーボタン](pictureButton_overview.md)、[ピクチャーポップアップメニュー](picturePopupMenu_overview.md)、または [スタティックピクチャー](staticPicture.md) に表示させるピクチャーのパス名です。 POSIX シンタックスを使用します。

ピクチャーパスに指定できる場所は次の 2箇所です:

- in the **Resources** folder of the project database. アプリケーション内の複数のフォームで画像を共有する場合に適切です。 この場合、パス名は "/RESOURCES/\<picture path\>" となります。
- in an image folder (e.g. named **Images**) within the form folder. 特定のフォームでしか画像が使われない場合や、そのフォームの全体を複製してプロジェクト内、または別のプロジェクトに移動させたい場合に適切です。 この場合、パス名は "\<picture path\>" となり、フォームフォルダーを基準とした相対パスです。


#### JSON 文法

|    名    | データタイプ | とりうる値                           |
|:-------:|:------:| ------------------------------- |
| picture |  テキスト  | POSIX シンタックスの相対パス、またはファイルシステムパス |


#### 対象オブジェクト

[ピクチャーボタン](pictureButton_overview.md) - [ピクチャーポップアップメニュー](picturePopupMenu_overview.md) - [スタティックピクチャー](staticPicture.md)


---
## 表示フォーマット


### スケーリング

`JSON 文法では: "scaled"`

The **Scaled to fit** format causes 4D to resize the picture to fit the dimensions of the area.

![](assets/en/FormObjects/property_pictureFormat_ScaledToFit.png)

### 繰り返し

`JSON 文法では: "tiled"`

When the area that contains a picture with the **Replicated** format is enlarged, the picture is not deformed but is replicated as many times as necessary in order to fill the area entirely.

![](assets/en/FormObjects/property_pictureFormat_Replicated.png)

フィールドがオリジナルのピクチャーよりも小さいサイズにされた場合、ピクチャーはトランケート (中央合わせなし) されます。



### 中央合わせ / トランケート (中央合わせしない)

`JSON 文法では: "truncatedCenter" / "truncatedTopLeft"`

The **Center** format causes 4D to center the picture in the area and crop any portion that does not fit within the area. 上下、および左右のはみ出し量は同じになります。

The **Truncated (non-centered)** format causes 4D to place the upper-left corner of the picture in the upper-left corner of the area and crop any portion that does not fit within the area. ピクチャーは右と下にはみ出します。
> When the picture format is **Truncated (non-centered)**, it is possible to add scroll bars to the input area.

![](assets/en/FormObjects/property_pictureFormat_Truncated.png)


#### JSON 文法

| 名             | データタイプ | とりうる値                                                    |
| ------------- | ------ | -------------------------------------------------------- |
| pictureFormat | string | "scaled", "tiled", "truncatedCenter", "truncatedTopLeft" |

#### 対象オブジェクト

[スタティックピクチャー](staticPicture.md)
