---
id: blob-to-picture
title: BLOB TO PICTURE
slug: /commands/blob-to-picture
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO PICTURE.Syntax-->**BLOB TO PICTURE** ( *pictureBlob* : Blob ; *picture* : Picture {; *codec* : Text} )<!-- END REF-->
<!--REF #_command_.BLOB TO PICTURE.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pictureBlob | Blob | &#8594; | ピクチャを格納したBLOB |
| picture | Picture | &#8592; | BLOBから取り出したピクチャ |
| codec | Text | &#8594; | ピクチャcodec ID |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL Release 2|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.BLOB TO PICTURE.Summary-->BLOB TO PICTURE コマンドは、元のフォーマットに関わらず、BLOBに格納されたピクチャを4Dのピクチャ変数やフィールドに挿入します。<!-- END REF-->

このコマンドは [READ PICTURE FILE](../commands/read-picture-file)コマンドと同様ですが、ファイルではなくBLOBに対して適用されます。このコマンドを使用すると、ネイティブのフォーマットでBLOBに保存されているピクチャを表示することができます。ピクチャのBLOBへのロードは、例えば [DOCUMENT TO BLOB](../commands/document-to-blob) あるいは [PICTURE TO BLOB](../commands/picture-to-blob) コマンドを使用して行うことができます。

*pictureBlob*引数には、ピクチャを納めたBLOBタイプの変数やフィールドを渡します。このピクチャのフォーマットは4Dがネイティブにサポートされるものであればいずれの形式でも構いません。 [PICTURE CODEC LIST](../commands/picture-codec-list) コマンドを使用すると、使用可能なフォーマットのリストを取得できます。任意の*codec* 引数を渡すと、4Dはこの引数で指定された値を使用してBLOBをデコードします (この3番目の引数を使用した特別な機能については後述の説明を参照)。

*picture* 引数にはピクチャを表示する4Dピクチャフィールドまたは変数を渡します。

**注:** 内部的なピクチャフォーマットは4Dの変数やフィールドに格納されます。

コマンドが実行され、BLOBが正しくデコードされると、*picture* 引数には表示するピクチャが返されます。

オプションの*codec* 引数を使用して、BLOBのデコード方法を指定できます。

*codec*に4Dが認識する ([PICTURE CODEC LIST](picture-codec-list.md "PICTURE CODEC LIST") コマンドから返される) codecを渡すと、それはBLOBとピクチャフィールドや変数に返されるピクチャに適用されます。  
  
*codec*に4Dが認識できないcodecを渡すと、新しいcodecが動的に引数に渡したIDで記録されます。そして4DはBLOBをカプセル化したピクチャを返し、OK変数に1を設定します。この場合BLOBを取り出すには、同じカスタムIDを使用して[PICTURE TO BLOB](picture-to-blob.md "PICTURE TO BLOB") コマンドを使用します。この特別なメカニズムは以下のような2つの特定のニーズで使用できます*:*

* ピクチャでないBLOBをカプセル化してピクチャに格納する
* codecを使用せずにピクチャをロードする

こ れらのメカニズムの実装は特に、ピクチャ配列を使用したBLOB配列の作成を可能にします。配列は全体がメモリにロードされるため、このメカニズムは注意 して使用されなければなりません。大きなサイズのBLOBで作業を行うと、アプリケーションの動作に影響を与えることがあります。

**Note:** [VARIABLE TO BLOB](../commands/variable-to-blob) コマンドで作成されたBLOBは自動で管理されます。BLOBは署名されるため、カプセル化するためにcodecを渡す必要はありません。この場合、反対の操作にはcodec IDとして".4DVarBlob"を [PICTURE TO BLOB](../commands/picture-to-blob) コマンドに渡します。  

## システム変数およびセット 

コマンドが正しく実行されるとシステム変数OKは1に設定されます。変換に失敗 (QuickTimeがインストールされていない、Blobに読み取り可能なピクチャが格納されていない、codec引数を認識できたがBlobが有効でないなど) した場合、OKは0に設定され、4Dのピクチャ変数やフィールドは空になります。

## 参照 

[PICTURE CODEC LIST](../commands/picture-codec-list)  
[PICTURE TO BLOB](../commands/picture-to-blob)  
[READ PICTURE FILE](../commands/read-picture-file)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 682 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


