---
id: form-last-page
title: FORM LAST PAGE
slug: /commands/form-last-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM LAST PAGE.Syntax-->**FORM LAST PAGE**<!-- END REF-->
<!--REF #_command_.FORM LAST PAGE.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|<6|初出|
|12|名称変更|

</details>
</div>

## 説明 

<!--REF #_command_.FORM LAST PAGE.Summary-->FORM LAST PAGE コマンドは、現在表示されているフォームページを最終のフォームページに変更します。<!-- END REF-->フォームが表示されていない、または[FORM LOAD](../commands/form-load.md) コマンドによってロードされてない場合や、すでに最終のフォームページが表示されている場合、FORM LAST PAGEコマンドは何も行いません。

## 例題 

以下の例は、メニューから呼び出される1行のメソッドです。これは、最終のフォームページを表示します:

```4d
 FORM LAST PAGE
```

## 参照 

[FORM FIRST PAGE](form-first-page.md)  
[FORM Get current page](form-get-current-page.md)  
[FORM GOTO PAGE](form-goto-page.md)  
[FORM NEXT PAGE](form-next-page.md)  
[FORM PREVIOUS PAGE](form-previous-page.md)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 251 |
| スレッドセーフである | no |


