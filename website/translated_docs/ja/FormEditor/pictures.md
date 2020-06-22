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

## High Resolution Pictures

4D supports high resolution pictures on both macOS and Windows platforms. High resolution pictures can be defined by either scale factor or dpi.

### Scale factor (macOS only)

従来の標準的なディスプレイと比較して、高解像度ディスプレイは高い画素密度を持ちます。 これらの高解像度ディスプレイにおいてピクチャーが正しく表示されるには、適用する *スケール係数* (例: 2倍、3倍など) に応じてその画素数を増やす必要があります。

When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture's name (where *n* designates the scale factor). In the table below, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

| Display Type | スケール係数              | 例題                                                                  |
| ------------ | ------------------- | ------------------------------------------------------------------- |
| 標準解像度        | 1:1 ピクセル密度          | **1x**  
![](assets/en/FormEditor/pictureScale1.png)  
*circle.png* |
| 高解像度         | ピクセル密度は2、または3の係数で増加 |                                                                     |


<table>
  <th>
    2x
  </th>
  
  <th>
    3x
  </th>
  
  <tr>
    <td>
      ![](assets/en/FormEditor/pictureScale2.png)<br />*circle@2x.png*
    </td>
    
    <td>
      ![](assets/en/FormEditor/pictureScale3.png)<br />*circle@3x.png*
    </td>
  </tr>
</table>

High resolution pictures with the @nx convention can be used in the following objects:

* [スタティックピクチャー](FormObjects/staticPicture.md)
* [Buttons](FormObjects/button_overview.md)/[radio](FormObjects/radio_overview.md)/[check boxes](FormObjects/checkbox_overview.md)
* [Picture buttons](FormObjects/pictureButton_overview.md)/[Picture pop-ups](FormObjects/picturePopupMenu_overview.md)
* [タブコントロール](FormObjects/tabControl.md)
* [リストボックスヘッダー](FormObjects/listbox_overview.md#list-box-headers)
* [メニューアイコン](Menus/properties.md#item-icon)

4D は自動的に最高解像度のピクチャーを優先します。 <br />  
**例**: 標準解像度と高解像度の２つのディスプレイを使用している際に、片方からもう片方へとフォームを移動させると、4D は常に使用可能な範囲内での最高解像度のピクチャーを表示します。 コマンドまたはプロパティが *circle.png* を指定していたとしても、*circle@3x.png* があれば、それを使用します。

> Note that resolution prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.

### DPI (macOs and Windows)

While 4D automatically prioritizes the highest resolution, there are, however, some behavioral differences depending on screen and image dpi*(*)*, and picture format:

| 演算子           | Behavior            |
| ------------- | ------------------- |
| Drop or Paste | If the picture has: |


<

p>

<

ul>

* **72dpi or 96dpi** - The picture is "[Center](FormObjects/properties_Picture.md#center--truncated-non-centered)" formatted and the object containing the picture has the same number of pixels.
* **Other dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)
* **No dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted.</p> 
    <
    
    p></li>| |[Automatic Size](https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057) (Form Editor context menu)|If the picture's display format is:
    
    <
    
    p>
    
    * **\[Scaled\](FormObjects/properties_Picture.md#scaled-to-fit)** - The object containing the picture is resized according to (picture's number of pixels * screen dpi) / (picture's dpi) 
    * **Not scaled** - The object containing the picture has the same number of pixels as the picture.
    
    <
    
    p>|
    
    *(*) Typically, macOS = 72dpi, Windows = 96dpi*
    
    ## ピクチャー上のマウス座標
    
    4D lets you retrieve the local coordinates of the mouse in an [input object](FormObjects/input_overview.md) associated with a [picture expression](FormObjects/properties_Object.md#expression-type), in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. このピクチャーマップに似た機構は、たとえば地図作製ソフトウェアのインターフェースや、スクロール可能なボタンバーを管理するのに使用できます。
    
    座標は *MouseX* と *MouseY* [システム変数](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.ja.html) に返されます。 座標はピクセル単位で表現され、ピクチャーの左上隅が起点 (0,0) となります。 マウスがピクチャの座標の外側にある場合には、*MouseX* と *MouseY* には-1が返されます。
    
    You can get the value of these variables as part of the [`On Clicked`](Events/onClicked.md), [`On Double Clicked`](Events/onDoubleClicked.md), [`On Mouse up`](Events/onMouseUp.md), [`On Mouse Enter`](Events/onMouseEnter.md), or [`On Mouse Move`](Events/onMouseMove.md) form events.