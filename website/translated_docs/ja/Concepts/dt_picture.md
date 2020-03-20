---
id: picture
title: ピクチャー
---

ピクチャーのフィールド・変数・式に格納されるデータは、任意の Windows または Macintosh の画像です。 これらの画像には、ペーストボード上に置いたり、4Dコマンドやプラグインコマンドを使用してディスクから読み出すことのできる画像を含みます。

## サポートされるネイティブフォーマット

4Dはピクチャーフォーマットのネイティブ管理を統合しています。 これは、ピクチャーが変換されることなく、元のフォーマットのまま 4D で格納、表示されることを意味します。 (シェイドや透過など) フォーマットにより異なる特定の機能はコピー・ペーストされる際にも保持され、改変なく表示されます。 このネイティブサポートは 4D に格納されるすべてのピクチャー (ライブラリピクチャー、デザインモードでフォームにペーストされたピクチャー、アプリケーションモードでフィールドや変数にペーストされたピクチャーなど) に対して有効です。

4D は Windows と macOS の両方においてネイティブな API を使用してフィールドや変数のピクチャーをエンコード (書き込み) およびデコード (読み込み) します。 これらの実装は現在デジタルカメラで使用されている RAW フォーマット含め、数多くのネイティブなフォーマットへのアクセスを提供します。

- Windows では、4DはWIC (Windows Imaging Component) を使用します。
- macOS では、4D は ImageIO を使用します。 

もっとも一般的なフォーマット (例: jpeg、gif、png、tiff、bmp、等) はどちらのフォーマットでもサポートされます。 macOS では、PDF フォーマットのエンコーディング/デコーディングも可能です。

サポートされるフォーマットの完全なリストは OS や、マシンにインストールされているカスタムコーデックによって異なります。 どのコーデックが利用可能かを調べるためには、`PICTURE CODEC LIST` コマンドを使用してください。 エンコーディング (書き込み) 用コーデックにはライセンスが必要な場合があるため、利用できるコーデックの一覧は、読み込み用と書き込み用で異なる可能性があることに注意してください。

**注:** WIC および ImageIO はピクチャー内のメタデータの書き込みを許可しています。 `SET PICTURE METADATA` および `GET PICTURE METADATA` コマンドを使用することで、それらのメタデータを開発に役立てることができます。

### ピクチャー Codec ID

4D が認識するピクチャーフォーマットは `PICTURE CODEC LIST` コマンドからピクチャー Codec IDとして返されます。 これは以下の形式で返されます:

- 拡張子 (例: “.gif”)
- MIME タイプ (例: “image/jpeg”)

それぞれのピクチャーフォーマットに対して返される形式は、当該 Codec が OS レベルで記録されている方法に基づきます。 多くの 4Dピクチャー管理コマンドは Codec ID を引数として受けとることができます。 したがって、`PICTURE CODEC LIST` から返されるシステムIDを使用しなければなりません。

### 利用不可能なピクチャーフォーマット

マシン上で利用できないフォーマットのピクチャーに対しては、専用のアイコンが表示されます。 アイコンの下部にその拡張子が表示されます。 このアイコンは、そのピクチャーが表示されるべきところに自動的に使用されます:

![](assets/en/Concepts/missingpict.en.png)

このアイコンは、そのピクチャーがローカルでは表示も編集もできないことを意味します。ですが、中身を改変することなく保存し、他のマシンで表示することは可能です。 たとえば、Windows における PDF ピクチャーや、古い PICT フォーマットのピクチャーなどが該当します。

## ピクチャー演算子

| 演算子    | シンタックス             | 戻り値   | 動作                                                                                                                 |
| ------ | ------------------ | ----- | ------------------------------------------------------------------------------------------------------------------ |
| 水平連結   | Pict1 + Pict2      | ピクチャー | Pict1 の右側に Pict2 を追加します                                                                                            |
| 垂直連結   | Pict1 / Pict2      | ピクチャー | Pict1 の下側に Pict2 を追加します                                                                                            |
| 排他的論理和 | Pict1 & Pict2      | ピクチャー | Pict1 の前面に Pict2 を重ねます (Pict2 が前面) `COMBINE PICTURES(pict3;pict1;Superimposition;pict2)` と同じ結果になります。               |
| 包括的論理和 | Pict1 &#124; Pict2 | ピクチャー | Pict1 と Pict2 を重ね、そのマスクした結果を返します (両ピクチャーとも同じサイズである必要があります) `$equal:=Equal pictures(Pict1;Pict2;Pict3)` と同じ結果になります。 |
| 水平移動   | ピクチャー + 数値         | ピクチャー | 指定ピクセル分、ピクチャーを横に移動します。                                                                                             |
| 垂直移動   | ピクチャー / 数値         | ピクチャー | 指定ピクセル分、ピクチャーを縦に移動します。                                                                                             |
| サイズ変更  | ピクチャー * 数値         | ピクチャー | 割合によってピクチャーをサイズ変更します。                                                                                              |
| 水平スケール | ピクチャー *+ 数値        | ピクチャー | 割合によってピクチャー幅をサイズ変更します。                                                                                             |
| 垂直スケール | ピクチャー *| 数値        | ピクチャー | 割合によってピクチャー高さをサイズ変更します。                                                                                            |


**注:**

- | 演算子を使用するためには、Pict1 と Pict2 が完全に同一のサイズでなければなりません。 二つのピクチャーサイズに違いがある場合、Pict1 | Pict2 は空のピクチャーを生成します。
- `COMBINE PICTURES` コマンドは、それぞれのソースピクチャーの特性を結果ピクチャーに保持しつつ、ピクチャーの重ね合わせをおこないます。
- 2つの元ピクチャーがベクター形式の場合、ピクチャー演算子はベクターピクチャーを返します。 しかし、表示形式 On Background でプリントされるピクチャーはビットマップとしてプリントされる点に留意してください。
- `TRANSFORM PICTURE` コマンドを使って、さらなる画像処理をおこなうことができます。
- ピクチャー用の比較演算子はありませんが、`Equal picture` コマンドを使って 2つのピクチャーを比較することができます。 
- 4D ではピクチャーフィールドや変数をクリック、またはホバーした際のマウスのローカル座標を取得できます。これはスクロールやズーム処理がおこなわれている場合でも可能です。 このピクチャーマップに似た機構は、たとえば地図作製ソフトウェアのインターフェースや、スクロール可能なボタンバーを管理するのに使用できます。 座標は *MouseX* と *MouseY* **システム変数** に返されます。 座標はピクセル単位で表現され、ピクチャーの左上隅が起点 (0,0) となります。 マウスがピクチャの座標の外側にある場合には、*MouseX* と *MouseY* には-1が返されます。 これらの値は、**On Clicked**、**On Double Clicked**、**On Mouse up**、**On Mouse Enter**、あるいは **On Mouse Move** フォームイベントの一部として取得することができます。

### 例題

以下の例では、ピクチャーの表示形式はすべて **On Background** に設定しています。

これは circle (円) ピクチャーです:![](assets/en/Concepts/Circle.en.png)

これは rectangle (長方形) ピクチャーです:![](assets/en/Concepts/rectangle.en.png)

以下の例は、各ピクチャー演算子の効果を表したものです。

水平連結

```4d
 circle+rectangle // circle の右に rectangle が追加されます。
 rectangle+circle // rectangle の右に circle が追加されます。
```

![](assets/en/Concepts/concatHor.en.png) ![](assets/en/Concepts/concatHor2.en.png)

垂直連結

```4d
 circle/rectangle // circle の下に rectangle が追加されます。
 rectangle/circle // rectangle の下に circle が追加されます。
```

![](assets/en/Concepts/concatVer.en.png) ![](assets/en/Concepts/concatVer2.en.png)

排他的論理和

```4d
Pict3:=Pict1 & Pict2 // Pict1 の上に Pict2 を重ねます。
```

![](assets/en/Concepts/superimpoExc.fr.png)

包括的論理和

```4d
Pict3:=Pict1|Pict2 // 同じサイズの二つのピクチャーを重ね合わせた上でそのマスクの結果を返します。
```

![](assets/en/Concepts/superimpoInc.fr.png)

水平移動

```4d
rectangle+50 // rectangle を右に 50ピクセル移動します。
rectangle-50 // rectangle を左に 50ピクセル移動します。
```

![](assets/en/Concepts/hormove.en.png)

垂直移動

```4d
rectangle/50 // rectangle を下に 50ピクセル移動します。
rectangle/-20 // rectangle を上に 20ピクセル移動します。
```

![](assets/en/Concepts/vertmove.en.png)![](assets/en/Concepts/vertmove2.en.png)

サイズ変更

```4d
rectangle*1.5 // rectangle を 50%拡大します。
rectangle*0.5 // rectangle を 50%縮小します。
```

![](assets/en/Concepts/resize.en.png)![](assets/en/Concepts/resisze2.en.png)

水平スケール

```4d
circle*+3 // circle の幅を 3倍に広げます。
circle*+0.25 // circle の幅を 25%に縮めます。
```

![](assets/en/Concepts/Horscaling.en.png)![](assets/en/Concepts/Horscaling2.en.png)

垂直スケール

```4d
circle*|2 // circle の高さを 2倍に伸ばします。
circle *| 0.25 // circle の高さを 25%に縮めます。
```

![](assets/en/Concepts/vertscaling.en.png)![](assets/en/Concepts/veticalscaling2.en.png)