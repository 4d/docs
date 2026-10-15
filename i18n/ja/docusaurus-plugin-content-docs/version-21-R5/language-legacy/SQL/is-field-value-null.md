---
id: is-field-value-null
title: Is field value Null
slug: /commands/is-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.Is field value Null.Syntax-->**Is field value Null** ( *aField* : Field ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field value Null.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594; | 評価するフィールド |
| 戻り値 | Boolean | &#8592; | True = フィールドはNULL, False = フィールドはNULLでない |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Is field value Null.Summary-->Is field value Null コマンドは*aField*引数 によって指定されたフィールドがNULL値を含む場合[True](../commands/true)を返します。<!-- END REF-->その他の場合[False](../commands/false)を返します。 

4DのSQLカーネルはNULL値を使用します。詳細については、4Dの*SQLリファレンス* マニュアルを参照して下さい。

このコマンドによって返された値は、ストラクチャーエディターのフィールド定義において"*ヌル値を空値にマップ*" のオプションがチェックされていない場合に限り有効です。そうでない場合には、このコマンドは常に**False** を返します。

**注:** このコマンドはオブジェクト型およびオブジェクトプロパティに対しては使用できません。オブジェクトフィールドのNull 値は、[Null](../commands/null) コマンドを通して管理されます。

## 参照 

[Null](../commands/null)  
[SET FIELD VALUE NULL](../commands/set-field-value-null)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 964 |
| スレッドセーフである | yes |


