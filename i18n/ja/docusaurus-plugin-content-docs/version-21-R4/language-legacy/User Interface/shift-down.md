---
id: shift-down
title: Shift down
slug: /commands/shift-down
displayed_sidebar: docs
---

<!--REF #_command_.Shift down.Syntax-->**Shift down**  : Boolean<!-- END REF-->
<!--REF #_command_.Shift down.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | Shift キーのステータス |
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

<!--REF #_command_.Shift down.Summary-->Shift down コマンドはShift キーが押されていると[True](../commands/true)を返します。<!-- END REF-->

## 例題 

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

## 参照 

[Caps lock down](../commands/caps-lock-down)  
[Macintosh command down](../commands/macintosh-command-down)  
[Macintosh control down](../commands/macintosh-control-down)  
[Macintosh option down](../commands/macintosh-option-down)  
[Windows Alt down](../commands/windows-alt-down)  
[Windows Ctrl down](../commands/windows-ctrl-down)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 543 |
| スレッドセーフである | yes |


