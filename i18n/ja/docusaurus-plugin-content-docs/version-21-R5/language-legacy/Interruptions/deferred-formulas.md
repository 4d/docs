---
id: deferred-formulas
title: Deferred formulas
slug: /commands/deferred-formulas
displayed_sidebar: docs
---

<!--REF #_command_.Deferred formulas.Syntax-->**Deferred formulas** : Collection<!-- END REF-->
<!--REF #_command_.Deferred formulas.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Collection | &#8592; |関数またはメソッド内で遅延された数式のスタック|
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|21 R4|追加|

</details>
</div>

## 説明 

<!--REF #_command_.Deferred formulas.Summary-->`Deferred formulas` コマンドは、現在の関数またはメソッド内で [`defer`](../../commands/defer) コマンドを使用して遅延されたすべての数式のコレクションを返します<!-- END REF-->。 

コマンドが別のコンテキストから呼び出された場合、空のコレクションを返します。



## 例題

```4d
defer(ALERT("1"))
defer(ALERT("2"))
...
var $colStack:=Deferred formulas
    //$colStack = [<<Formula: ALERT("2")>>,<<Formula: ALERT("1")>>]
```

## 参照 

[defer](../commands/defer)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1861 |
| スレッドセーフである | yes |
