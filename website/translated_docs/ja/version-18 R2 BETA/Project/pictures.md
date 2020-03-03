---
id: version-18R2_BETA-pictures
title: Pictures
original_id: pictures
---

## サポートされるネイティブフォーマット

4Dはピクチャーフォーマットのネイティブ管理を統合しています。 これは、ピクチャーが変換されることなく、元のフォーマットのまま 4D で格納、表示されることを意味します。 (シェイドや透過など) フォーマットにより異なる特定の機能はコピー・ペーストされる際にも保持され、改変なく表示されます。 このネイティブサポートは 4D に格納されるすべてのピクチャー (ライブラリピクチャー、デザインモードでフォームにペーストされたピクチャー、アプリケーションモードでフィールドや変数にペーストされたピクチャーなど) に対して有効です。

4D は Windows と macOS の両方においてネイティブな API を使用してフィールドや変数のピクチャーをエンコード (書き込み) およびデコード (読み込み) します。 これらの実装は現在デジタルカメラで使用されている RAW フォーマット含め、数多くのネイティブなフォーマットへのアクセスを提供します。

* Windows, 4D uses WIC (Windows Imaging Component). 
* macOS, 4D uses ImageIO.

もっとも一般的なフォーマット (例: jpeg、gif、png、tiff、bmp、等) はどちらのフォーマットでもサポートされます。 macOS では、PDF フォーマットのエンコーディング/デコーディングも可能です。

サポートされるフォーマットの完全なリストは OS や、マシンにインストールされているカスタムコーデックによって異なります。 To find out which codecs are available, you must use the PICTURE CODEC LIST command. エンコーディング (書き込み) 用コーデックにはライセンスが必要な場合があるため、利用できるコーデックの一覧は、読み込み用と書き込み用で異なる可能性があることに注意してください。

> WIC and ImageIO permit the use of metadata in pictures. Two commands, SET PICTURE METADATA and GET PICTURE METADATA, let you benefit from metadata in your developments.

### ピクチャー Codec ID

Picture formats recognized by 4D are returned by the PICTURE CODEC LIST command as picture Codec IDs. これは以下の形式で返されます:

* 拡張子 (例: “.gif”)
* MIME タイプ (例: “image/jpeg”)

それぞれのピクチャーフォーマットに対して返される形式は、当該 Codec が OS レベルで記録されている方法に基づきます。

多くの 4Dピクチャー管理コマンドは Codec ID を引数として受けとることができます。 It is therefore imperative to use the system ID returned by the PICTURE CODEC LIST command.

### 利用不可能なピクチャーフォーマット

マシン上で利用できないフォーマットのピクチャーに対しては、専用のアイコンが表示されます。 The extension of the missing format is shown at the bottom of the icon:

![](assets/en/Project/picNoFormat.png)

このアイコンは、そのピクチャーが表示されるべきところに自動的に使用されます:

![](assets/en/Project/picNoFormat2.png)

このアイコンは、そのピクチャーがローカルでは表示も編集もできないことを意味します。ですが、中身を改変することなく保存し、他のマシンで表示することは可能です。 This is the case, for instance, for PDF pictures on Windows, or for PICT format pictures.

## Picture Resolution

4D supports both standard and high resolution displays on both macOS and Windows platforms.

High resolution displays have a higher pixel density than traditional standard displays. For pictures to render correctly on high resolution displays, the number of pixels in the picture must be multiplied by the *scale factor* (*i.e.*, two times larger, three times larger, etc.).

The following table demonstrates the difference between display resolution and picture pixel density.

| Display Type        | Scale Factor                                   | 例題                                                               |
| ------------------- | ---------------------------------------------- | ---------------------------------------------------------------- |
| Standard Resolution | 1:1 pixel density.                             | **1x**  
![](assets/en/Project/pictureScale1.png)  
*circle.png* |
| High Resolution     | Pixel density increased by a factor of 2 or 3. |                                                                  |


<table>
  <th>
    2x
  </th>
  
  <th>
    3x
  </th>
  
  <tr>
    <td>
      ![](assets/en/Project/pictureScale2.png)<br />*circle@2x.png*
    </td>
    
    <td>
      ![](assets/en/Project/pictureScale3.png)<br />*circle@3x.png*
    </td>
  </tr>
</table>

When using high resolution pictures, the scale factor is specified by adding "@nx" in the picture's name (*n* designates the scale factor). In the table above, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

> 4D automatically prioritizes pictures with the highest resolution. <br />  
> **Example**: When using two screens (one high resolution display, one standard display) and you move a form from one screen to another, 4D automatically renders the highest possible resolution of the picture. Even if a command or property specifies *circle.png*, *circle@3x.png* will be used (if it exists).

This resolution behavior is supported by all [4D form objects](../FormObjects/formObjectsOverview.html) which support images.

## Mouse Coordinates in a Picture

4D ではピクチャーフィールドや変数をクリック、またはホバーした際のマウスのローカル座標を取得できます。これはスクロールやズーム処理がおこなわれている場合でも可能です。 このピクチャーマップに似た機構は、たとえば地図作製ソフトウェアのインターフェースや、スクロール可能なボタンバーを管理するのに使用できます。

The coordinates are returned in the MouseX and MouseY System Variables. 座標はピクセル単位で表現され、ピクチャーの左上隅が起点 (0,0) となります。 If the mouse is outside of the picture coordinates system, -1 is returned in MouseX and MouseY.

You can get the value of these variables as part of the On Clicked, On Double Clicked, On Mouse up, On Mouse Enter, or On Mouse Move form events.

## Picture Operators

4D allows you to carry out operations on 4D pictures, such as concatenation, superimposing, etc. This point is covered in the Picture Operators section.