---
id: set-application-color-scheme
title: SET APPLICATION COLOR SCHEME
slug: /commands/set-application-color-scheme
displayed_sidebar: docs
---

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Syntax-->**SET APPLICATION COLOR SCHEME** ( *colorScheme* : Text )<!-- END REF-->
<!--REF #_command_.SET APPLICATION COLOR SCHEME.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| colorScheme | Text | &#8594; | "light"、"dark"、または "inherited" |
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

<!--REF #_command_.SET APPLICATION COLOR SCHEME.Summary-->**SET APPLICATION COLOR SCHEME** コマンドは、カレントセッションにおいて、アプリケーションレベルで使用されるカラースキームを定義します。<!-- END REF-->このスキームは特定のスキームをまだ宣言していないフォームに対して適用されます(フォームレベルで定義されるカラースキームはアプリケーションレベルでの設定を上書きします)。

**注:** このコマンドはmacOS でのみ動作します。Windows 上では、利用できるカラースキームは"light"のみです。

*colorScheme* 引数には、適用したカラースキームを渡します:

* **"light"** \- アプリケーションはデフォルトのライトテーマを使用します。
* **"dark"** \- アプリケーションはデフォルトのダークテーマを使用します。
* **"inherited"** \- アプリケーションはより高い優先度レベル(設定)を継承します。

## 例題 

```4d
  // カレントのアプリケーションを強制的にダークモードに変更
 SET APPLICATION COLOR SCHEME("dark")
```

## 参照 

[FORM Get color scheme](../commands/form-get-color-scheme)  
[Get Application color scheme](../commands/get-application-color-scheme)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1762 |
| スレッドセーフである | no |


