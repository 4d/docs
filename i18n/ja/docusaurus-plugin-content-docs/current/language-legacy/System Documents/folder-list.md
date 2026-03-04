---
id: folder-list
title: FOLDER LIST
slug: /commands/folder-list
displayed_sidebar: docs
---

<!--REF #_command_.FOLDER LIST.Syntax-->**FOLDER LIST** ( *pathname* : Text ; *directories* : Text array )<!-- END REF-->
<!--REF #_command_.FOLDER LIST.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| pathname | Text | &#8594; | ボリュームのパス名、ディレクトリ、またはフォルダ |
| directories | Text array | &#8592; | ロケーションにあるディレクトリの名前 |
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

<!--REF #_command_.FOLDER LIST.Summary-->FOLDER LIST コマンド は、*pathname*に渡すパス名にあるフォルダの名前を要素とするテキストまたは文字列配列*directories*を生成します。<!-- END REF-->引数*pathname* は完全なパス名だけを受け入れます。 

指定した場所にフォルダがない場合、コマンドは空の配列を返します。*pathname*に渡すパス名が無効だと、FOLDER LISTはファイルマネジャエラーを生成します。このエラーは[ON ERR CALL](../commands/on-err-call)メソッドを使用して検知することができます。

## 参照 

[DOCUMENT LIST](../commands/document-list)  
[VOLUME LIST](../commands/volume-list)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 473 |
| スレッドセーフである | yes |
| システム変数を更新する | error |


