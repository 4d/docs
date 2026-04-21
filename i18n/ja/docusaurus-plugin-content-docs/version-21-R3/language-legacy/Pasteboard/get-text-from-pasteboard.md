---
id: get-text-from-pasteboard
title: Get text from pasteboard
slug: /commands/get-text-from-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.Get text from pasteboard.Syntax-->**Get text from pasteboard**  : Text<!-- END REF-->
<!--REF #_command_.Get text from pasteboard.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Text | &#8592; | ペーストボード中のテキスト (あれば) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get text from pasteboard.Summary-->Get text from pasteboard は、ペーストボードに存在するテキストを返します。<!-- END REF-->

**Note:** コピー/ペースト操作では、ペーストボードはクリップボードと同じです。

ペーストボードにRTFフォーマットなどのリッチテキストが含まれる場合、コピー先がサポートすれば、ドロップやペーストされたときテキストの属性は保持されます。

4Dのテキスト変数やフィールドは、2GBまでを含めることができます。

## システム変数およびセット 

テキストが正しく取り出されるとOKに1が、そうでなければ0が設定されます。

## 参照 

[GET PASTEBOARD DATA](../commands/get-pasteboard-data)  
[GET PICTURE FROM PASTEBOARD](../commands/get-picture-from-pasteboard)  
[Pasteboard data size](../commands/pasteboard-data-size)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 524 |
| スレッドセーフである | no |
| システム変数を更新する | OK |


