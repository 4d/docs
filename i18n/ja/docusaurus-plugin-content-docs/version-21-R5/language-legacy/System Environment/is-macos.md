---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** : Boolean<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | OS = macOS である場合にはTrue、そうでない場合にはFalse |
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

<!--REF #_command_.Is macOS.Summary-->**Is macOS** コマンドは、カレントのOSがmacOS の場合にはTrue を返します。<!-- END REF-->

## 例題 

カレントのOS がmacOS であるかどうかを調べたい場合を考えます:

```4d
 If(Is macOS)
    ALERT("It's macOS")
 Else
    ALERT("It's not macOS")
 End if
```

## 参照 

[System info](../commands/system-info)  
[Is Windows](../commands/is-windows)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1572 |
| スレッドセーフである | yes |


