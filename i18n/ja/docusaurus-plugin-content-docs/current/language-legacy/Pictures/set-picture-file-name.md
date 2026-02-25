---
id: set-picture-file-name
title: SET PICTURE FILE NAME
slug: /commands/set-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.SET PICTURE FILE NAME.Syntax-->**SET PICTURE FILE NAME** ( *picture* : Picture ; *fileName* : Text )<!-- END REF-->
<!--REF #_command_.SET PICTURE FILE NAME.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture | &#8594; | デフォルト名を設定するピクチャー |
| fileName | Text | &#8594; | デフォルトピクチャー名 |
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

<!--REF #_command_.SET PICTURE FILE NAME.Summary-->**SET PICTURE FILE NAME**コマンドは引数に渡したピクチャーのデフォルト名を設定あるいは変更します。<!-- END REF-->

デフォルト名はピクチャーをディスクファイルに書き出す際のデフォルト名として使用されます。フィールドの内容が変数や他のフィールドにコピーされると、デフォルト名もコピーされます。詳細はデザインリファレンスマニュアルを参照してください。

## 参照 

[Get picture file name](../commands/get-picture-file-name)  
[WRITE PICTURE FILE](../commands/write-picture-file)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1172 |
| スレッドセーフである | yes |


