---
id: is-license-available
title: Is license available
slug: /commands/is-license-available
displayed_sidebar: docs
---

<!--REF #_command_.Is license available.Syntax-->**Is license available** ( *license* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is license available.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| license | Integer | &#8594; | ライセンスの有効性テストを行うプラグイン |
| 戻り値 | Boolean | &#8592; | プラグインが利用可能な場合はTrue、その他の場合はFalse |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|14 R3|変更|
|2004|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Is license available.Summary-->Is license available コマンドを使用して、プラグインの有効性を確認することができます。<!-- END REF-->例えば、プラグインが必要な機能を表示または非表示にする際に有効です。

Is license available コマンドは次のような3通りの使用が可能です。

* 引数 *license* を省略する場合：4Dアプリケーションがデモモードの場合に、コマンドは [False](../commands/false) を返します。
* 以下の “*Is License Available*” テーマの定数のうちの1つを引数 *license* に渡す場合。  
| 定数                     | 型    | 値         |  
| ---------------------- | ---- | --------- |  
| 4D Client SOAP license | 倍長整数 | 808465465 |  
| 4D Client Web license  | 倍長整数 | 808465209 |  
| 4D for OCI license     | 倍長整数 | 808465208 |  
| 4D ODBC Pro license    | 倍長整数 | 808464946 |  
| 4D REST Test license   | 倍長整数 | 808465719 |  
| 4D SOAP license        | 倍長整数 | 808465464 |  
| 4D View license        | 倍長整数 | 808465207 |  
| 4D Web license         | 倍長整数 | 808464945 |  
| 4D Write license       | 倍長整数 | 808464697 |  
    
この方法では、対応するプラグインのライセンスが有効な場合、コマンドは [True](../commands/true) を返します。コマンドはデザインモード、[SET PLUGIN ACCESS](../commands/set-plugin-access) コマンドの結果等を考慮に入れて結果を返します。  
プラグインがデモモードで動作している場合、Is license available は[False](../commands/false) を返します。
* プラグイン “4BNX” リソースのID番号を引数licenseに直接渡す場合、コマンドは、前述の通りに動作します。

## 参照 

[CHANGE LICENSES](../commands/change-licenses)  
[License info](../commands/license-info)  
[Get plugin access](../commands/get-plugin-access)  
[PLUGIN LIST](../commands/plugin-list)  
[SET PLUGIN ACCESS](../commands/set-plugin-access)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 714 |
| スレッドセーフである | no |



