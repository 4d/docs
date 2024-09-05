---
id: vp-get-default-style
title: VP Get default style
---

<!-- REF #_method_.VP Get default style.Syntax -->

**VP Get default style** ( *vpAreaName* : Text { ; *sheet* :  Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get default style.Params -->

| 引数         | 型      |    | 説明                                             |                  |
| ---------- | ------ | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro エリアフォームオブジェクト名                     |                  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | オブジェクト | <- | デフォルトスタイル設定                                    | <!-- END REF --> |

#### 説明

`VP Get default style` コマンドは、<!-- REF #_method_.VP Get default style.Summary -->シートのデフォルトスタイルオブジェクトを返します<!-- END REF -->。 返されるオブジェクトには、ドキュメントの基本的なレンダリングプロパティに加え、[VP SET DEFAULT STYLE](vp-set-default-style.md) コマンドによって事前に設定されたデフォルトのスタイル設定 (あれば) が格納されます。 スタイルプロパティの詳細な情報については、[スタイルオブジェクトとスタイルシート](../configuring.md#スタイルオブジェクトとスタイルシート) を参照ください。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数にシートインデックス (0 起点) を指定することで、どのシートのカラム数を取得するかを定義することができます。 省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

このドキュメントのデフォルトスタイルを取得したい場合:

![](../../assets/en/ViewPro/cmd_vpGetDefaultStyle.PNG)

以下のコードを実行すると:

```4d
$defaultStyle:=VP Get default style("myDoc")
```

*$defaultStyle* オブジェクトに以下のような情報が返されます:

```4d
{
 backColor:#E6E6FA,
 hAlign:0,
 vAlign:0,
 font:12pt papyrus
}
```

#### 参照

[VP Get cell style](vp-get-cell-style.md)<br/>
[VP SET DEFAULT STYLE](vp-set-default-style.md)
