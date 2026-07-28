---
id: is-compiled-mode
title: Is compiled mode
slug: /commands/is-compiled-mode
displayed_sidebar: docs
---

<!--REF #_command_.Is compiled mode.Syntax-->**Is compiled mode** ( * ) : Boolean<!-- END REF-->
<!--REF #_command_.Is compiled mode.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | ホストデータベースの情報を返す |
| 戻り値 | Boolean | &#8592; | コンパイル済み (True), インタプリタ (False) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Is compiled mode.Summary-->Is compiled modeは、データベースがコンパイルモード（True）、ま たはインタプリタモード（False）のどちらで実行されているかをテストします。<!-- END REF-->  
  
オプションの*\** 引数は、コンポーネントを使用するアーキテクチャで有用です。この引数は実行モードのテスト対象がホストデータベースか、コンポーネントかを指定するため に使用します。   

* コマンドがコンポーネントから呼ばれた場合:  
   * *\** 引数が渡されると、コマンドはホストデータベースの実行モードに応じて[True](../commands/true)または[False](../commands/false)を返します。  
   * *\** 引数が渡されないと、コマンドはコンポーネントの実行モードに応じて[True](../commands/true)または[False](../commands/false)を 返します。
* コマンドがホストデータベースから呼ばれた場合、コマンドはホストデータベースの実行モードに応じて[True](../commands/true)または[False](../commands/false)を返します。

## 例題 

インタプリタモードで実行している場合にだけ使用したいデバッグコードを記述するには、デバッグコードをIs compiled modeを呼び出すテストの中に記述します:

```4d
  // ...
 If(Not(Is compiled mode))
  // デバッグコードをここに記述
 End if
  // ...
```

## 参照 

[IDLE](../commands/idle)  
[Undefined](../commands/undefined)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 492 |
| スレッドセーフである | yes |


