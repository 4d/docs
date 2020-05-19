---
id: pictures
title: ピクチャー
---

## サポートされるネイティブフォーマット

4Dはピクチャーフォーマットのネイティブ管理を統合しています。 これは、ピクチャーが変換されることなく、元のフォーマットのまま 4D で格納、表示されることを意味します。 (シェイドや透過など) フォーマットにより異なる特定の機能はコピー・ペーストされる際にも保持され、改変なく表示されます。 This native support is valid for all pictures stored in 4D forms: [static pictures](FormObjects/staticPicture.md) pasted in Design mode, pictures pasted into [inputs objects](FormObjects/input_overview.md) at runtime, etc.

もっとも一般的なフォーマット (例: jpeg、gif、png、tiff、bmp、等) はどちらのフォーマットでもサポートされます。 macOS では、PDF フォーマットのエンコーディング/デコーディングも可能です。

> サポートされるフォーマットの完全なリストは OS や、マシンにインストールされているカスタムコーデックによって異なります。 To find out which codecs are available, you must use the `PICTURE CODEC LIST` command (see also the [picture data type](Concepts/dt_picture.md) description).

### 利用不可能なピクチャーフォーマット

マシン上で利用できないフォーマットのピクチャーに対しては、専用のアイコンが表示されます。 アイコンの下部にその拡張子が表示されます。

![](assets/en/FormEditor/picNoFormat.png)

このアイコンは、そのピクチャーが表示されるべきところに自動的に使用されます:

![](assets/en/FormEditor/picNoFormat2.png)

このアイコンは、そのピクチャーがローカルでは表示も編集もできないことを意味します。ですが、中身を改変することなく保存し、他のマシンで表示することは可能です。 たとえば、Windows での PDF ピクチャーや、PICT フォーマットのピクチャーなどが該当します。

## ピクチャー上のマウス座標

4D lets you retrieve the local coordinates of the mouse in an [input object](FormObjects/input_overview.md) associated with a [picture expression](FormObjects/properties_Object.md#expression-type), in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. このピクチャーマップに似た機構は、たとえば地図作製ソフトウェアのインターフェースや、スクロール可能なボタンバーを管理するのに使用できます。

座標は *MouseX* と *MouseY* [システム変数](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.ja.html) に返されます。 座標はピクセル単位で表現され、ピクチャーの左上隅が起点 (0,0) となります。 マウスがピクチャの座標の外側にある場合には、*MouseX* と *MouseY* には-1が返されます。

You can get the value of these variables as part of the [`On Clicked`](Events/onClicked.md), [`On Double Clicked`](Events/onDoubleClicked.md), [`On Mouse up`](Events/onMouseUp.md), [`On Mouse Enter`](Events/onMouseEnter.md), or [`On Mouse Move`](Events/onMouseMove.md) form events.