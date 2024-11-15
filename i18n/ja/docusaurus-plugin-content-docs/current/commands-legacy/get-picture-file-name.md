---
id: get-picture-file-name
title: Get picture file name
slug: /commands/get-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.Get picture file name.Syntax-->**Get picture file name** ( *picture* ) : Text<!-- END REF-->
<!--REF #_command_.Get picture file name.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| picture | Picture, Picture | &#8594;  | デフォルト名を取得するピクチャー |
| 戻り値 | Text | &#8592; | ピクチャーファイルのデフォルト名 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Get picture file name.Summary-->**Get picture file name**コマンドは引数に渡されたピクチャーのカレントデフォルト名を返します。<!-- END REF-->

デフォルト名はピクチャーをディスクファイルに書き出す際に使用されます。この名前はピクチャーフィールドや変数にピクチャーファイルを読み込んだ時の元の名前あるいは[SET PICTURE FILE NAME](set-picture-file-name.md)コマンドにより設定されているかもしれません。詳細はデザインリファレンスマニュアルを参照してください。 

ピクチャーにデフォルト名が設定されていない場合、コマンドは空の文字列を返します。

#### 参照 

[SET PICTURE FILE NAME](set-picture-file-name.md)  