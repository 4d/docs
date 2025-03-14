---
id: vp-set-print-info
title: VP SET PRINT INFO
---

<!-- REF #_method_.VP SET PRINT INFO.Syntax -->

**VP SET PRINT INFO** ( *vpAreaName* : Text ; *printInfo* : Object { ; *sheet* : Integer }  ) <!-- END REF -->

<!-- REF #_method_.VP SET PRINT INFO.Params -->

| 引数         | 型       |    | 説明                                             |                  |
| ---------- | ------- | -- | ---------------------------------------------- | ---------------- |
| vpAreaName | Text    | -> | 4D View Pro エリア名                               |                  |
| printInfo  | Object  | -> | 印刷属性を格納するオブジェクト                                |                  |
| sheet      | Integer | -> | シートのインデックス (省略した場合はカレントシート) | <!-- END REF --> |

#### 説明

`VP SET PRINT INFO` コマンドは、<!-- REF #_method_.VP SET PRINT INFO.Summary -->*vpAreaName* 引数で指定したエリアを印刷する際に使用する属性を定義します<!-- END REF -->。

*vpAreaName* には、印刷する 4D View Pro エリアの名前を渡します。 存在しない名前を渡した場合、エラーが返されます。

*printInfo* には、様々な印刷属性の定義を格納したオブジェクトを渡します。 利用可能な属性の一覧については、[4D View Pro 印刷属性](../configuring.md#印刷属性) を参照してください。

任意の *sheet* 引数として、シートのインデックス (0 起点) を渡すことで、印刷するスプレッドシートを指定することができます。 省略された場合はデフォルトでカレントスプレッドシートが使用されます。 以下の定数を使用することでカレントのスプレッドシートを明示的に選択することができます:

- `vk current sheet`

#### 例題

以下のコードを実行すると、4D View Pro エリアを PDFドキュメントに出力します:

```4d
var $printInfo : Object

// 印刷属性オブジェクトを宣言します
$printInfo:=New object

// 印刷属性を定義します
$printInfo.headerCenter:="&BS.H.I.E.L.D. &A Sales Per Region"
$printInfo.firstPageNumber:=1
$printInfo.footerRight:="page &P of &N"
$printInfo.orientation:=vk print page orientation landscape
$printInfo.centering:=vk print centering horizontal
$printInfo.columnStart:=0
$printInfo.columnEnd:=8
$printInfo.rowStart:=0
$printInfo.rowEnd:=24

$printInfo.showGridLine:=True

// 会社のロゴを追加します
$printInfo.headerLeftImage:=logo.png
$printInfo.headerLeft:="&G"

$printInfo.showRowHeader:=vk print visibility hide
$printInfo.showColumnHeader:=vk print visibility hide
$printInfo.fitPagesWide:=1
$printInfo.fitPagesTall:=1

// 印刷情報を設定します
VP SET PRINT INFO ("ViewProArea";$printInfo)

// PDF を書き出します
VP EXPORT DOCUMENT("ViewProArea";"Sales2018.pdf";New object("formula";Formula(ALERT("PDF ready!"))))
```

出力されたPDF:

![](../../assets/en/ViewPro/cmd_vpSetPrintInfo.PNG)

#### 参照

[4D View Pro 印刷属性](../configuring.md#印刷属性)<br/>
[VP Convert to picture](vp-convert-to-picture.md)<br/>
[VP Get print info](vp-get-print-info.md)<br/>
[VP PRINT](vp-print.md)
