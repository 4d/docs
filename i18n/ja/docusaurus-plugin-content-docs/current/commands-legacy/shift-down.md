---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | Shift キーのステータス |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Shift down.Summary-->Shift down コマンドはShift キーが押されていると[True](true.md "True")を返します。<!-- END REF-->

#### 例題 

ボタン *bAnyButton* に対する以下のオブジェクトメソッドは、ボタンがクリックされた際にどのモディファイアが押されているかによって異なる動作をします。

```4d
  // bAnyButton オブジェクトメソッド
 Case of
  //このほかの複数のキーの組み合わせをここでテストすることも可能
  // ...
    :(Shift down&Windows Ctrl down)
  // Shift および Windows Ctrl (または Macintosh command) キーが押されてた場合
       DO ACTION1
  // ...
    :(Shift down)
  //Shift キーだけが押されてた場合
       DO ACTION2
  // ...
    :(Windows Ctrl down)
  //Windows Ctrl (または Macintosh command) キーだけが押された場合
       DO ACTION3
  // ...
  //このほかの個々のキーをここでテストすることも可能
  // ...
 End case
```

#### 参照 

[Caps lock down](caps-lock-down.md)  
[Macintosh command down](macintosh-command-down.md)  
[Macintosh control down](macintosh-control-down.md)  
[Macintosh option down](macintosh-option-down.md)  
[Windows Alt down](windows-alt-down.md)  
[Windows Ctrl down](windows-ctrl-down.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 543 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


