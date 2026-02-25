---
id: set-environment-variable
title: SET ENVIRONMENT VARIABLE
slug: /commands/set-environment-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Syntax-->**SET ENVIRONMENT VARIABLE** ( *varName* : Text ; *varValue* : Text )<!-- END REF-->
<!--REF #_command_.SET ENVIRONMENT VARIABLE.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| varName | Text | &#8594; | 設定する変数の名前 |
| varValue | Text | &#8594; | 変数の値、 またはデフォルト値をリセットする "" |
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

<!--REF #_command_.SET ENVIRONMENT VARIABLE.Summary-->**SET ENVIRONMENT VARIABLE**コマンドを用いて、macOS とWindowsで環境変数値を設定できます。<!-- END REF-->このコマンドは[LAUNCH EXTERNAL PROCESS](../commands/launch-external-process)コマンドと共に使用します。

変数の名前を*varName* に、その値を*varValue* に渡して定義します。

* 環境変数の概略リストと可能な値を取得するには、オペレーティングシステムのテクニカルドキュメントを参照してください。
* [LAUNCH EXTERNAL PROCESS](../commands/launch-external-process) コマンドのコンテキストで使用するために、3つの特定の環境変数が利用可能です:  
*\_4D\_OPTION\_CURRENT\_DIRECTORY*  
*\_4D\_OPTION\_HIDE\_CONSOLE* (Windows のみ)  
*\_4D\_OPTION\_BLOCKING\_EXTERNAL\_PROCESS*.  
    
これらの変数の詳細については、[LAUNCH EXTERNAL PROCESS](../commands/launch-external-process) コマンドの詳細を参照してください。

## 例題 

[LAUNCH EXTERNAL PROCESS](../commands/launch-external-process)コマンドの例題を参照してください。 

## 参照 

[LAUNCH EXTERNAL PROCESS](../commands/launch-external-process)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 812 |
| スレッドセーフである | yes |


