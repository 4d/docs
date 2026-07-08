---
id: get-picture-keywords
title: GET PICTURE KEYWORDS
slug: /commands/get-picture-keywords
displayed_sidebar: docs
---

<!--REF #_command_.GET PICTURE KEYWORDS.Syntax-->**GET PICTURE KEYWORDS** ( *picture* : Picture ; *arrKeywords* : Text array {; *} )<!-- END REF-->
<!--REF #_command_.GET PICTURE KEYWORDS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594; | 割り当てられたキーワードを取得するピクチャー |
| arrKeywords | Text array | &#8592; | キーワードを受け取る配列 |
| * | 演算子 | &#8594; | 指定時: 重複するキーワードを取り除く |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|初出|

</details>
</div>

## 説明 

<!--REF #_command_.GET PICTURE KEYWORDS.Summary-->**GET PICTURE KEYWORDS**コマンドは引数に渡したピクチャーに割り当てられたキーワードのリストを*arrKeywords*配列に返します。<!-- END REF-->メタデータを使用して設定されたキーワードだけが返されます。他のタイプのメタデータはこのコマンドから無視されます。このコマンドは、このタイプのメタデータをサポートするピクチャー (JPEG, TIFF, 等) に対してのみ動作します。

**注:** 4DはIPTC/Keywordsタイプのメタデータをインデックスすることが可能です (デザインリファレンスマニュアルを参照)。

*\** 引数を渡すと、コマンドはキーワードの重複しない値のみを返します。つまりリスト中のすべての値がユニークになります。

ピクチャーにIPTC/Keywordsメターデータが含まれない場合、コマンドは空の配列を返し、エラーは生成されません。

**注:** このコマンドから返される結果はデータベース設定の"非文字・非数字のみをキーワード区切り文字とする"の現在値により異なります ([DOM GET XML CHILD NODES](../commands/dom-get-xml-child-nodes)参照)。

## 参照 

[GET PICTURE METADATA](../commands/get-picture-metadata)  
[SET PICTURE METADATA](../commands/set-picture-metadata)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1142 |
| スレッドセーフである | yes |


