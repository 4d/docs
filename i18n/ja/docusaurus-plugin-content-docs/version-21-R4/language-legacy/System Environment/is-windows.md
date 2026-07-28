---
id: is-windows
title: Is Windows
slug: /commands/is-windows
displayed_sidebar: docs
---

<!--REF #_command_.Is Windows.Syntax-->**Is Windows** : Boolean<!-- END REF-->
<!--REF #_command_.Is Windows.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | OS = Windows ならTrue、そうでなければFalse |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|17|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Is Windows.Summary-->**Is Windows** コマンドは、カレントのOSがWindows の場合にはTrue を返します。<!-- END REF-->

## 例題 

カレントのOS がWindows であるかどうかを調べたい場合を考えます:

```4d
 If(Is Windows)
    ALERT("It's Windows")
 Else
    ALERT("It's not Windows")
 End if
```

## 参照 

[System info](../commands/system-info)  
[Is macOS](../commands/is-macos)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1573 |
| スレッドセーフである | yes |


