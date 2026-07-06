---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *componentsArray* )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| componentsArray | Text array | &#8592; | コンポーネント名 |
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

<!--REF #_command_.COMPONENT LIST.Summary-->`COMPONENT LIST`コマンドは、4Dがカレントのホストプロジェクトにロードしたコンポーネントの名前を、*componentsArray* 配列に返します。<!-- END REF-->

プロジェクトが開かれると、4Dは有効なコンポーネントをロードします：

* [プロジェクトのComponentsフォルダー](../../Project/architecture.md#components) にあるもの。
* [プロジェクトの **dependencies.json** ファイル](../../Project/components.md#dependenciesjson-and-environment4djson) で宣言されているもの。

**注**： 同じコンポーネントが異なる場所にインストールされている場合、[優先順位](../../Project/components.md#priority) が適用されます。

このコマンドは、ホストプロジェクトまたはコンポーネントから呼び出すことができます。プロジェクトがコンポーネントを使用しない場合、*componentsArray* 配列は空となります。

コンポーネントの名前は、マトリクスデータベース (.4db, .4dc または .4dbase) のストラクチャー名です。このコマンドを使用して、コンポーネントがインストールされているかいないかにより追加の機能を提供する、アーキテクチャやモジュールインタフェースを設定できます。

4Dコンポーネントに関する詳細は、[こちらのページ](../../Concepts/components.md) を参照してください。

## 参照 

[PLUGIN LIST](plugin-list.md)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1001 |
| スレッドセーフである | yes |


