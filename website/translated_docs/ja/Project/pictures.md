---
id: pictures
title: ピクチャー
---

## サポートされるネイティブフォーマット

4Dはピクチャーフォーマットのネイティブ管理を統合しています。 これは、ピクチャーが変換されることなく、元のフォーマットのまま 4D で格納、表示されることを意味します。 (シェイドや透過など) フォーマットにより異なる特定の機能はコピー・ペーストされる際にも保持され、改変なく表示されます。 This native support is valid for all pictures stored in 4D: static pictures, pictures pasted into forms in Design mode, pictures pasted into fields or variables in Application mode, etc.

4D は Windows と macOS の両方においてネイティブな API を使用してフィールドや変数のピクチャーをエンコード (書き込み) およびデコード (読み込み) します。 これらの実装は現在デジタルカメラで使用されている RAW フォーマット含め、数多くのネイティブなフォーマットへのアクセスを提供します。

*   Windows, 4D uses WIC (Windows Imaging Component).
*   macOS, 4D uses ImageIO.

もっとも一般的なフォーマット (例: jpeg、gif、png、tiff、bmp、等) はどちらのフォーマットでもサポートされます。 macOS では、PDF フォーマットのエンコーディング/デコーディングも可能です。

サポートされるフォーマットの完全なリストは OS や、マシンにインストールされているカスタムコーデックによって異なります。 To find out which codecs are available, you must use the `PICTURE CODEC LIST` command. エンコーディング (書き込み) 用コーデックにはライセンスが必要な場合があるため、利用できるコーデックの一覧は、読み込み用と書き込み用で異なる可能性があることに注意してください。
> WIC および ImageIO はピクチャー内のメタデータの書き込みを許可しています。 `SET PICTURE METADATA` および `GET PICTURE METADATA` コマンドを使用することで、それらのメタデータを開発に役立てることができます。


### ピクチャー Codec ID

4D が認識するピクチャーフォーマットは `PICTURE CODEC LIST` コマンドからピクチャー Codec IDとして返されます。 これは以下の形式で返されます:

*   拡張子 (例: “.gif”)
*   MIME タイプ (例: “image/jpeg”)

それぞれのピクチャーフォーマットに対して返される形式は、当該 Codec が OS レベルで記録されている方法に基づきます。

Most of the 4D picture management commands can receive a Codec ID as a parameter. したがって、`PICTURE CODEC LIST` から返されるシステムIDを使用しなければなりません。




### 利用不可能なピクチャーフォーマット

マシン上で利用できないフォーマットのピクチャーに対しては、専用のアイコンが表示されます。 アイコンの下部にその拡張子が表示されます。

![](assets/en/Project/picNoFormat.png)

このアイコンは、そのピクチャーが表示されるべきところに自動的に使用されます:

![](assets/en/Project/picNoFormat2.png)

このアイコンは、そのピクチャーがローカルでは表示も編集もできないことを意味します。ですが、中身を改変することなく保存し、他のマシンで表示することは可能です。 たとえば、Windows での PDF ピクチャーや、PICT フォーマットのピクチャーなどが該当します。



### Picture Resolution

4D supports high resolution displays on both macOS and Windows platforms for the following:

*   スタティックピクチャー
*   3D buttons/radio/check boxes
*   Picture buttons/pop-ups
*   タブコントロール
*   メニューアイコン
*   リストボックスヘッダー

従来の標準的なディスプレイと比較して、高解像度ディスプレイは高い画素密度を持ちます。 これらの高解像度ディスプレイにおいてピクチャーが正しく表示されるには、適用する *スケール係数* (例: 2倍、3倍など) に応じてその画素数を増やす必要があります。

The following table demonstrates the difference between display resolution and picture pixel density.

| 表示タイプ | スケール係数              | 例題                                                                             |
| ----- | ------------------- | ------------------------------------------------------------------------------ |
| 標準解像度 | 1:1 ピクセル密度          | **1x**<br>![](assets/en/Project/pictureScale1.png)<br>*circle.png* |
| 高解像度  | ピクセル密度は2、または3の係数で増加 | <table><th>2x</th><th>3x</th><tr><td>![](assets/en/Project/pictureScale2.png)<br>*circle@2x.png*</td><td>![](assets/en/Project/pictureScale3.png)<br>*circle@3x.png*</td></tr></table>                                                      |

When using high resolution pictures, the scale factor is specified by adding "@nx" in the picture's name (*n* designates the scale factor). In the table above, you can see that the scale factor is indicated in the names of the high resolution pictures, *circle@2x.png* and *circle@3x.png*.

4D は自動的に最高解像度のピクチャーを優先します。 <br><br> **例**: 標準解像度と高解像度の２つのディスプレイを使用している際に、片方からもう片方へとフォームを移動させると、4D は常に使用可能な範囲内での最高解像度のピクチャーを表示します。 コマンドまたはプロパティが *circle.png* を指定していたとしても、*circle@3x.png* があれば、それを使用します。
> Note that this prioritization occurs only for displaying pictures onscreen, there is no automatic prioritization made when printing.

This resolution behavior is supported for project databases by all [4D form objects](../FormObjects/formObjectsOverview.html) which support images.




## ピクチャー上のマウス座標

4D lets you retrieve the local coordinates of the mouse in a picture field or variable in case of a click or a hovering, even if a scroll or zoom has been applied to the picture. このピクチャーマップに似た機構は、たとえば地図作製ソフトウェアのインターフェースや、スクロール可能なボタンバーを管理するのに使用できます。

座標は *MouseX* と *MouseY* [システム変数](https://doc.4d.com/4Dv18/4D/18/System-Variables.300-4505547.ja.html) に返されます。 座標はピクセル単位で表現され、ピクチャーの左上隅が起点 (0,0) となります。 マウスがピクチャの座標の外側にある場合には、*MouseX* と *MouseY* には-1が返されます。

これらの値は、`On Clicked`、`On Double Clicked`、`On Mouse up`、`On Mouse Enter`、あるいは `On Mouse Move` フォームイベントの一部として取得することができます。

## Picture Operators

4D allows you to carry out **operations** on 4D pictures, such as concatenation, superimposing, etc. This point is covered in the *Picture Operators* section of the *4D Language Reference*.

