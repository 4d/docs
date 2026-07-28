---
id: tickcount
title: Tickcount
slug: /commands/tickcount
displayed_sidebar: docs
---

<!--REF #_command_.Tickcount.Syntax-->**Tickcount**  : Integer<!-- END REF-->
<!--REF #_command_.Tickcount.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | マシンが起動されてからの 経過Tick数 (1/60秒) |
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

<!--REF #_command_.Tickcount.Summary-->Tickcount はマシンが起動されてから経過したTick (1/60秒) 数を返します。<!-- END REF-->Tickcount は倍長整数型の値を返します。

## 例題 

[Milliseconds](milliseconds.md "Milliseconds")コマンドの例題を参照。

## 参照 

[Current time](../commands/current-time)  
[Milliseconds](../commands/milliseconds)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 458 |
| スレッドセーフである | yes |


