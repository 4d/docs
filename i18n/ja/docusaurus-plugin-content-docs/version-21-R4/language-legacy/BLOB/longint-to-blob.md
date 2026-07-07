---
id: longint-to-blob
title: LONGINT TO BLOB
slug: /commands/longint-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.LONGINT TO BLOB.Syntax-->**LONGINT TO BLOB** ( *longint* : Integer ; *blob* : Blob ; *byteOrder* : Integer {; *offset* : Variable} )<br/>**LONGINT TO BLOB** ( *longint* : Integer ; *blob* : Blob ; *byteOrder* : Integer {; *} )<!-- END REF-->
<!--REF #_command_.LONGINT TO BLOB.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| longint | Integer | &#8594; | BLOBに書き込む倍長整数値 |
| Blob | Blob | &#8594; | 倍長整数値を受け取るBLOB |
| byteOrder | Integer | &#8594; | 0 Native byte ordering 1 Macintosh byte ordering 2 PC byte ordering |
| offset &#124; * | 変数, 演算子 | &#8596; | BLOB内のオフセット (バイト単位) または値を追加する場合 * |
|  |  |  | *でない場合、書き込み後の新しいオフセット |
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

<!--REF #_command_.LONGINT TO BLOB.Summary-->LONGINT TO BLOB コマンドは、*blob*に4バイトの*longint*値を書き込みます。<!-- END REF-->

*byteOrder*引数は、4バイト倍長整数値が書き込まれる際のバイトオーダーを決定します。4Dが提供する以下の定義済み定数のうち、いずれか1つを渡します:

| 定数                      | 型    | 値 |
| ----------------------- | ---- | - |
| Macintosh byte ordering | 倍長整数 | 1 |
| Native byte ordering    | 倍長整数 | 0 |
| PC byte ordering        | 倍長整数 | 2 |

**プラットフォーム独立性に関する注意**  

MacintoshとPCプラットフォーム間でBLOBを交換する場合、このコマンドを使用する際のバイトスワップの管理は開発者に任されています。

オプションの *\** 引数を渡すと、4バイト倍長整数値はBLOBの最後に追加され、BLOBサイズはそれに従い拡張されます。オプションの *\** 引数を使用することで、BLOBがメモリに収まる限り、整数, 倍長整数, 実数 または テキスト値 (他のBLOBコマンド参照) をBLOBに連続して格納できます。 

オプション引数 *\** や*offset*変数引数を指定しない場合、4バイトの倍長整数値はBLOBの最初に格納され、それ以前の内容を上書きします。これに合わせてBLOBのサイズも調整されます。

*offset*変数引数を渡した場合、4バイト倍長整数値はBLOB内のオフセット （ゼロから開始）に書き込まれます。4バイトの倍長整数の値を書き込む位置に関わらず、BLOBのサイズは渡した位置に従って（必要に応じてさらに最大4 バイトまで）増加します。現在書き込んでいるバイト以外の新しく割り当てられるバイトは、ゼロに初期化されます。

呼び出し後、*offset*変数引数は、書き込まれたバイト数分だけインクリメントされます。したがって、同じ*offset*変数引数を別のBLOB書き込みコマンドにも使用し、別の値をBLOBに追加できます。

### 注 

**互換性に関する注意:** このコマンドは引数として渡されたBlob を変更するため、Blob オブジェクト(4D.Blob 型)はサポートしません。developer.4d.com での*Passing blobs and blob objects to 4D commands* のページを参照してください。
