---
id: staticPicture
title: スタティックピクチャー
---

スタティックピクチャーは、4D フォームに設置することのできる [スタティックオブジェクト](formObjects_overview.md#アクティブオブジェクトとスタティックオブジェクト) で、フォームの装飾や、背景、ユーザーインターフェースなどの目的で使用されます。

![](../assets/en/FormObjects/StaticPict.png)

スタティックピクチャーはフォーム外に格納され、参照によって挿入されます。 フォームエディターにおいては、コピーペーストやドラッグ ＆ ドロップ操作によってスタティックピクチャーオブジェクトが作成されます。

> 複数ページあるフォームの 0ページにピクチャーを配置すると、そのピクチャーは自動ですべてのページに背景として表示されます。 またピクチャーを継承フォームに置くこともでき、そのフォームを継承するすべてのフォームの背景とすることもできます。 どちらの方法も、それぞれのページにピクチャーを配置するより、アプリケーションの動作が速くなります。

## 形式と保存場所

ピクチャーは 4D がネイティブに管理するフォーマットでなければなりません (4Dは主なピクチャーフォーマットを認識します: JPEG, PNG, BMP, SVG, GIF, 等)。

ピクチャーパスに指定できる場所は次の 2箇所です:

- プロジェクトの **Resources** フォルダー。 プロジェクト内の複数のフォームで画像を共有する場合に適切です。 この場合、パス名は "/RESOURCES/&lt;picture path&gt;" となります。
- フォームフォルダー内の画像用フォルダー (たとえば、**Images** と名付けたフォルダー)。 特定のフォームでしか画像が使われない場合や、そのフォームの全体を複製してプロジェクト内、または別のプロジェクトに移動させたい場合に適切です。 この場合、パス名は "&lt;picture path&gt;" となり、フォームフォルダーを基準とした相対パスです。

## プロパティ一覧

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [CSS Class](properties_Object.md#css-class) - [Display](properties_Picture.md#display) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Object Name](properties_Object.md#object-name) - [Pathname](properties_Picture.md#pathname) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility)  - [Width](properties_CoordinatesAndSizing.md#width)
