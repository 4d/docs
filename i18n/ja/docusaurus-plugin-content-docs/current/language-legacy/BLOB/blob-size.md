---
id: blob-size
title: BLOB size
slug: /commands/blob-size
displayed_sidebar: docs
---

<!--REF #_command_.BLOB size.Syntax-->**BLOB size** ( *BLOB* : Blob ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB size.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594; | BLOBフィールドまたは変数 |
| 戻り値 | Integer | &#8592; | バイト単位のBLOBサイズ |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.BLOB size.Summary-->BLOB size は、*blob*のサイズをバイト単位で返します。<!-- END REF-->

## 例題 

以下の例は*myBlob* BLOBに100バイトを追加します:

```4d
 SET BLOB SIZE(myBlob;BLOB size(myBlob)+100)
```

## 参照 

[SET BLOB SIZE](../commands/set-blob-size)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 605 |
| スレッドセーフである | yes |


