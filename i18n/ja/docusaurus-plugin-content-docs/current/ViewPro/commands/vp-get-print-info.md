---
id: vp-get-print-info
title: VP Get print info
---

<!-- REF #_method_.VP Get print info.Syntax -->

**VP Get print info** ( vpAreaName : Text { ; sheet : Integer } ) : Object<!-- END REF -->

<!-- REF #_method_.VP Get print info.Params -->

| 引数         | 型      |    | 説明                                             |                  |
| ---------- | ------ | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | テキスト   | -> | 4D View Pro フォームオブジェクト名                        |                  |
| sheet      | 整数     | -> | シートのインデックス (省略した場合はカレントシート) |                  |
| 戻り値        | オブジェクト | <- | 印刷情報のオブジェクト                                    | <!-- END REF --> |

#### 説明

`VP Get print info` コマンドは、<!-- REF #_method_.VP Get print info.Summary -->*vpAreaName* 引数で指定したエリアの印刷属性を格納したオブジェクトを返します<!-- END REF -->。

*vpAreaName* には、4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、印刷属性を取得するスプレッドシートを指定することができます。  省略された場合、または `vk current sheet` を渡した場合、カレントスプレッドシートが使用されます。

#### 例題

以下のコードを実行すると:

```4d
$pinfo:=VP Get print info("ViewProArea")
```

... [VP SET PRINT INFO](vp-set-print-info.md) コマンドで設定された、4D View Pro エリアの以下のような印刷属性を返します:

```4d
{
bestFitColumns:false,
bestFitRows:false,
blackAndWhite:false,
centering:0,
columnEnd:8,
columnStart:0,
firstPageNumber:1,
fitPagesTall:1,
fitPagesWide:1,
footerCenter:"&BS.H.I.E.L.D. &A Sales Per Region",
footerCenterImage:,
footerLeft:,
footerLeftImage:,
footerRight:"page &P of &N",
footerRightImage:,
headerCenter:,
headerCenterImage:,
headerLeft:"&G",
headerLeftImage:logo.png,
headerRight:,
headerRightImage:,
margin:{top:75,bottom:75,left:70,right:70,header:30,footer:30},
orientation:2,
pageOrder:0,
pageRange:,
paperSize:{width:850,height:1100,kind:1},
qualityFactor:2,
repeatColumnEnd:-1,
repeatColumnStart:-1,
repeatRowEnd:-1,
repeatRowStart:-1,
rowEnd:24,
rowStart:0,
showBorder:false,
showColumnHeader:0,
showGridLine:false,
showRowHeader:0,
useMax:true,
watermark:[],
zoomFactor:1
}
```

#### 参照

[4D View Pro 印刷属性](../configuring.md#印刷属性)<br/>
[VP SET PRINT INFO](vp-set-print-info.md)
