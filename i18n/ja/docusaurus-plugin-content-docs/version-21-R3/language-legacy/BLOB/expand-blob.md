---
id: expand-blob
title: EXPAND BLOB
slug: /commands/expand-blob
displayed_sidebar: docs
---

<!--REF #_command_.EXPAND BLOB.Syntax-->**EXPAND BLOB** ( *BLOB* : Blob )<!-- END REF-->
<!--REF #_command_.EXPAND BLOB.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| Blob | Blob | &#8594; | 展開するBLOB |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|6.5.3|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.EXPAND BLOB.Summary-->EXPAND BLOB コマンドは、[COMPRESS BLOB](compress-blob.md "COMPRESS BLOB")コマンドを使用して既に圧縮されている*blob*を解凍します。<!-- END REF-->  
  
呼び出し後、BLOBが解凍された場合は、システム変数OKは1に設定されます。BLOBが解凍できなかった場合は、システム変数OKは0に設定されます。

メモリ不足で解凍できない場合は、エラーが表示されず、メソッド実行をレジュームします。  
(BLOBが圧縮されていなかったり壊れていたりするなど) その他の場合、-10600のエラーを生成します。このエラーは、[ON ERR CALL](../commands/on-err-call)コマンドでとらえることができます。

BLOBが圧縮されているかを検証するには、[BLOB PROPERTIES](blob-properties.md "BLOB PROPERTIES") コマンドを使用します。

## 例題 1 

この例題はBLOB *vxMyBlob* が圧縮されているかテストし、圧縮されていれば解凍します:

```4d
 BLOB PROPERTIES(vxMyBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)
 If($vlCompressed#Is not compressed)
    EXPAND BLOB(vxMyBlob)
 End if
```

## 例題 2 

この例題はドキュメントを選択させ、圧縮されていれば解凍します:

```4d
 $vhDocRef :=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    DOCUMENT TO BLOB(Document;vxBlob)
    If(OK=1)
       BLOB PROPERTIES(vxBlob;$vlCompressed;$vlExpandedSize;$vlCurrentSize)
       If($vlCompressed#Is not compressed)
          EXPAND BLOB(vxBlob)
          If(OK=1)
             BLOB TO DOCUMENT(Document;vxBlob)
          End if
       End if
    End if
 End if
```

## システム変数およびセット 

BLOBが正しく解凍されるとOK変数は1に、そうでなければ0に設定されます。

## 参照 

[BLOB PROPERTIES](../commands/blob-properties)  
[COMPRESS BLOB](../commands/compress-blob)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 535 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


