---
id: get-picture-formats
title: GET PICTURE FORMATS
slug: /commands/get-picture-formats
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE FORMATS.Syntax-->**GET PICTURE FORMATS** ( *picture* ; *codecIDs* )<!-- END REF-->
<!--REF #_command_.GET PICTURE FORMATS.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594;  | 解析するピクチャーフィールドあるいは変数 |
| codecIDs | Text array | &#8592; | ピクチャーのコーデックID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET PICTURE FORMATS.Summary-->**GET PICTURE FORMATS**コマンドは、引数として渡された*picture*引数内に含まれている全てのコーデックIDの配列を返します。<!-- END REF--> 4D ピクチャー (フィールドまたは変数) は、PNG、BMP、GIF など、複数の異なるフォーマットでエンコードされた同一の画像を格納することができます。  

*picture*引数には、含まれるフォーマットを*codecIDs*配列内に取得したいピクチャーフィールドあるいは変数を渡します。

返されるコーデックIDは、[PICTURE CODEC LIST](picture-codec-list.md)コマンドと同様に4Dによって確立されます。これらは以下の形式で受け取ることが可能です:

* 拡張子(例：“.gif”)
* Mimeタイプ(例：“image/jpeg”)
* 4文字のQuickTimeコード
**注** **:** 
* 4Dによって内部的に管理される以下のコーデックについては、必ず拡張子形式で返されます:JPEG、PNG、TIFF、GIF、BMP、SVG、PDF、EMF
* 4文字のQuickTimeコードは、QuickTime support互換性オプションが([SET DATABASE PARAMETER](set-database-parameter.md)コマンドを使用して)設定されているデータベースにおいて返すことが可能です。しかしながら、QuickTimeは4Dではサポートされておらず、QuickTimeコーデックの使用は推奨されません。

ピクチャーコーデックIDについてのより詳細な情報については、*ピクチャ*の章を参照して下さい。

#### 例題 

カレントレコードのフィールド内に保存されているピクチャーフォーマットを知りたいという場合を考えます:

```4d
 ARRAY TEXT($aTPictureFormats;0)
  //保存されている全てのフォーマットを取得
 GET PICTURE FORMATS([Employees]Photo;$aTPictureFormats)
```

#### 参照 

  