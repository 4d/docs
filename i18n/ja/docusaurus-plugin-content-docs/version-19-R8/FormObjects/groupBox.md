---
id: groupBox
title: グループボックス
---

グループボックスはスタティックオブジェクトの一つで、複数のフォームオブジェクトを視覚的にまとめます。

![](../assets/en/FormObjects/groupBox.png)
> グループボックスの名前はスタティックテキストです。これは他の 4D ラベルと同様にローカライズすることができます (4D デザインリファレンスの [スタティックテキスト中で参照を使用する](https://doc.4d.com/4Dv18/4D/18/Using-references-in-static-text.300-4575714.ja.html) および [付録 B: XLIFF アーキテクチャー](https://doc.4d.com/4Dv18/4D/18/Appendix-B-XLIFF-architecture.300-4575737.ja.html) の章を参照ください)。



#### JSON 例:

```
    "myGroup": {
        "type": "groupBox", 
        "title": "Employee Info"
        "left": 60,
        "top": 160,
        "width": 100,
        "height": 20
        }
```

#### プロパティ一覧
[タイプ](properties_Object.md#タイプ) - [オブジェクト名](properties_Object.md#オブジェクト名) - [タイトル](properties_Object.md#タイトル) - [CSSクラス](properties_Object.md#cssクラス) - [左](properties_CoordinatesAndSizing.md#左) - [上](properties_CoordinatesAndSizing.md#上) - [右](properties_CoordinatesAndSizing.md#右) - [下](properties_CoordinatesAndSizing.md#下) - [幅](properties_CoordinatesAndSizing.md#幅) - [高さ](properties_CoordinatesAndSizing.md#高さ) - [横方向サイズ変更](properties_ResizingOptions.md#横方向サイズ変更) - [縦方向サイズ変更](properties_ResizingOptions.md#縦方向サイズ変更) - [表示状態](properties_Display.md#表示状態) - [フォント](properties_Text.md#フォント) - [フォントサイズ](properties_Text.md#フォントサイズ) - [太字](properties_Text.md#太字) - [イタリック](properties_Text.md#イタリック) - [下線](properties_Text.md#下線) - [フォントカラー](properties_Text.md#フォントカラー) - [横揃え](properties_Text.md#横揃え) 