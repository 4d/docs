---
id: get-application-color-scheme
title: Get Application color scheme
slug: /commands/get-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.Get Application color scheme.Syntax-->**Get Application color scheme** ( * ) : Text<!-- END REF-->
<!--REF #_command_.Get Application color scheme.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594; | ホストデータベースのカラースキームを返す |
| 戻り値 | Text | &#8592; | カレントアプリケーションのカラースキーム |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|19|初出|

</details>
</div>

## 説明 

<!--REF #_command_.Get Application color scheme.Summary-->**Get Application color scheme** コマンドは、アプリケーションレベルで使用されている実際のカラースキームの名前を返します。<!-- END REF-->

**注:** Windows では、このコマンドは常に"light" を返します。

実際のカラースキームは以下の方法で定義することができます:

* [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) コマンドを呼び出す
* [SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) コマンドが呼び出されていない、あるいは引数値で呼び出されていた場合、データベース設定(コンポーネントの場合にはホストデータベース設定が適用されます)
* 設定が"継承する"に設定されていた場合にはOS のユーザー設定

*\** 引数は、このコマンドがコンポーネントから呼び出された場合に有用です。渡された場合、コマンドはホストデータベースのカラースキームを返します。

カラースキーム名の詳細については、[SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme) コマンドの詳細を参照してください。

## 例題 

```4d
 var $colorScheme : Text
 
  // ホストデータベースのカラースキームを取得する
 $colorScheme:=Get Application color scheme(*)
```

## 参照 

[FORM Get color scheme](../commands/form-get-color-scheme)  
[SET APPLICATION COLOR SCHEME](../commands/set-application-color-scheme)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1763 |
| スレッドセーフである | no |


