---
id: qr-find-column
title: QR Find column
slug: /commands/qr-find-column
displayed_sidebar: docs
---

<!--REF #_command_.QR Find column.Syntax-->**QR Find column** ( *area* ; *expression* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Find column.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| expression | Text, Pointer | &#8594;  | カラムオブジェクト |
| 戻り値 | Integer | &#8592; | カラム番号 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Find column.Summary-->QR Find column コマンドは、*expression*引数で渡された表現式に一致する内容を持つ最初のカラムの番号を返します。<!-- END REF-->

*expression* には文字列またはポインタを渡します。

対象となるカラムが見つからない場合、は-1を返します。

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

#### 例題 

次のコードは、\[G.NQR Tests\]Quarterフィールドが格納されているカラム番号を取得し、そのカラムを削除します:

```4d
 $NumColumn:=QR Find column(MyArea;->[G.NQR Tests]Quarter)
```

または:  

```4d
 $NumColumn:=QR Find column(MyArea;"[G.NQR Tests]Quarter")
```

そして:

```4d
 If($NumColumn#-1)
    QR DELETE COLUMN(MyArea;$NumColumn)
 End if
```


#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 776 |
| スレッドセーフである | &check; |
| システム変数を更新する | error |
| サーバー上での使用は不可 ||


