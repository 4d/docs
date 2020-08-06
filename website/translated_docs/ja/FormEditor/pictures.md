---
id: pictures
title: ピクチャー
---

## サポートされるネイティブフォーマット

4Dはピクチャーフォーマットのネイティブ管理を統合しています。 これは、ピクチャーが変換されることなく、元のフォーマットのまま 4D で格納、表示されることを意味します。 (シェイドや透過など) フォーマットにより異なる特定の機能はコピー・ペーストされる際にも保持され、改変なく表示されます。 このネイティブサポートは 4D に格納されるすべてのピクチャー (デザインモードでフォームにペーストされた [スタティックピクチャー](FormObjects/staticPicture.md)、ランタイムで [入力オブジェクト](FormObjects/input_overview.md) にペーストされたピクチャーなど) に対して有効です。

もっとも一般的なフォーマット (例: jpeg、gif、png、tiff、bmp、等) はどちらのフォーマットでもサポートされます。 macOS では、PDF フォーマットのエンコーディング/デコーディングも可能です。

> サポートされるフォーマットの完全なリストは OS や、マシンにインストールされているカスタムコーデックによって異なります。 どのコーデックが利用可能かを調べるためには、`PICTURE CODEC LIST` コマンドを使用してください。また、データ型の [ピクチャー](Concepts/dt_picture.md) の項も参照ください。




### 利用不可能なピクチャーフォーマット

マシン上で利用できないフォーマットのピクチャーに対しては、専用のアイコンが表示されます。 アイコンの下部にその拡張子が表示されます。

![](assets/en/FormEditor/picNoFormat.png)

このアイコンは、そのピクチャーが表示されるべきところに自動的に使用されます:

![](assets/en/FormEditor/picNoFormat2.png)

このアイコンは、そのピクチャーがローカルでは表示も編集もできないことを意味します。ですが、中身を改変することなく保存し、他のマシンで表示することは可能です。 たとえば、Windows での PDF ピクチャーや、PICT フォーマットのピクチャーなどが該当します。


## 高解像度ピクチャー

4D は macOS および Windows の両方で高解像度ピクチャーの表示をサポートしています。 高解像度ピクチャーは、スケール係数または dpi によって定義されます。

### スケール係数 (macOS のみ)

従来の標準的なディスプレイと比較して、高解像度ディスプレイは高い画素密度を持ちます。 For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

When using high resolution pictures, you can specify the scale factor by adding "@nx" in the picture's name (where *n* designates the scale factor). In the table below, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

| 表示タイプ | スケール係数              | 例題                                                                       |
| ----- | ------------------- | ------------------------------------------------------------------------ |
| 標準解像度 | 1:1 ピクセル密度          | **1x**<br>![](assets/en/FormEditor/pictureScale1.png) *circle.png* |
| 高解像度  | ピクセル密度は2、または3の係数で増加 | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/FormEditor/pictureScale2.png)*circle@2x.png*</td><td>![](assets/en/FormEditor/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                                |



"@nx" で定義された高解像度ピクチャーは、次のオブジェクトで使用できます。

*   [スタティックピクチャー](FormObjects/staticPicture.md)
*   [ボタン](FormObjects/button_overview.md)/[ラジオボタン](FormObjects/radio_overview.md)/[チェックボックス](FormObjects/checkbox_overview.md)
*   [ピクチャーボタン](FormObjects/pictureButton_overview.md)/[ピクチャーポップアップメニュー](FormObjects/picturePopupMenu_overview.md)
*   [タブコントロール](FormObjects/tabControl.md)
*   [リストボックスヘッダー](FormObjects/listbox_overview.md#list-box-headers)
*   [メニューアイコン](Menus/properties.md#item-icon)



4D は自動的に最高解像度のピクチャーを優先します。 <br><br> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D  automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).
> 解像度の優先順位付けはスクリーン上のピクチャー表示にのみ適用され、印刷に関しては自動適用されないことに留意が必要です。



### DPI (macOS および Windows)

While 4D automatically prioritizes the highest resolution,  there are, however, some behavioral differences depending on screen and image dpi*(\*)*, and picture format:

| 演算子                                                                                                                                      | 動作                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| ドロップ、ペースト                                                                                                                                | ピクチャーの設定:<ul><li>**72dpi or 96dpi** - The picture is "[Center](FormObjects/properties_Picture.md#center--truncated-non-centered)" formatted and the object containing the picture has the same number of pixels.</li><li>**Other dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted and the object containing the picture is equal to (picture's number of pixels * screen dpi) / (picture's dpi)</li> <li>**No dpi** - The picture is "[Scaled to fit](FormObjects/properties_Picture.md#scaled-to-fit)" formatted.</li> |
| [Automatic Size](https://doc.4d.com/4Dv18/4D/18/Setting-object-display-properties.300-4575725.en.html#148057) (Form Editor context menu) | If the picture's display format  is:<ul><li>**[スケーリング](FormObjects/properties_Picture.md#スケーリング)** - ピクチャーを表示しているオブジェクトのピクセル数は (ピクチャーのピクセル数 / ピクチャーの dpi) * (スクリーンの dpi) にリサイズされます。 </li> <li>**スケーリング以外** - ピクチャーを表示しているオブジェクトは、ピクチャーと同じピクセル数です。</li></ul><p>                        |

*(\*) Typically,  macOS = 72dpi, Windows = 96dpi*





## ピクチャー上のマウス座標

4D では、[ピクチャー式](FormObjects/properties_Object.md#式の型) が設定された [入力オブジェクト](FormObjects/input_overview.md) をクリック、またはホバーした際のマウスのローカル座標を取得できます。これはスクロールやズーム処理がおこなわれている場合でも可能です。 このピクチャーマップに似た機構は、たとえば地図作製ソフトウェアのインターフェースや、スクロール可能なボタンバーを管理するのに使用できます。

座標は *MouseX* と *MouseY* [システム変数](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.ja.html) に返されます。 座標はピクセル単位で表現され、ピクチャーの左上隅が起点 (0,0) となります。 マウスがピクチャの座標の外側にある場合には、*MouseX* と *MouseY* には-1が返されます。

これらの値は、[`On Clicked`](Events/onClicked.md)、[`On Double Clicked`](Events/onDoubleClicked.md)、[`On Mouse up`](Events/onMouseUp.md)、[`On Mouse Enter`](Events/onMouseEnter.md)、あるいは [`On Mouse Move`](Events/onMouseMove.md) フォームイベントの一部として取得することができます。
