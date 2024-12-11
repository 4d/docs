---
id: clear-pasteboard
title: CLEAR PASTEBOARD
slug: /commands/clear-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR PASTEBOARD.Syntax-->**CLEAR PASTEBOARD**<!-- END REF-->
<!--REF #_command_.CLEAR PASTEBOARD.Params-->
| このコマンドは引数を必要としません |  |
| --- | --- |

<!-- END REF-->

#### 説明 

<!--REF #_command_.CLEAR PASTEBOARD.Summary-->CLEAR PASTEBOARD コマンドは、クリップボードの内容をすべて消去します。<!-- END REF-->クリップボードに同じデータの複数のインスタンスが含まれる場合には、すべてのインスタンスが消去されます。CLEAR PASTEBOARDコマンドを呼び出した後、クリップボードは空になります。

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD")コマンドを使用して新しいデータをクリップボードに追加する前に、CLEAR PASTEBOARDコマンドを1回呼び出す必要があります。これは[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD")コマンドが新しいデータを追加する前にクリップボードを消去しないためです。

CLEAR PASTEBOARDを1回呼び出してから、[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD")コマンドを複数回呼び出すと、異なるフォーマットで同じデータをカットまたはコピーすることができます。

一方[SET TEXT TO PASTEBOARD](set-text-to-pasteboard.md "SET TEXT TO PASTEBOARD")と[SET PICTURE TO PASTEBOARD](set-picture-to-pasteboard.md "SET PICTURE TO PASTEBOARD")コマンドは、クリップボードにデータを追加する前に自動的にクリップボードを消去します。

#### 例題 1 

以下の例はクリップボードを消去し、次にデータをペーストボードに追加します:

```4d
 CLEAR PASTEBOARD // ペーストボードを空にする
 APPEND DATA TO PASTEBOARD("com.4d.private.picture.gif";$vxSomeData) // gif ピクチャを追加
 APPEND DATA TO PASTEBOARD("com.4d.private.text.rtf";$vxSylkData) // RTFテキストを追加
```

#### 例題 2 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD") コマンドの例題参照

#### 参照 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 402 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


