---
id: form-first-page
title: FORM FIRST PAGE
slug: /commands/form-first-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM FIRST PAGE.Syntax-->**FORM FIRST PAGE**<!-- END REF-->
<!--REF #_command_.FORM FIRST PAGE.Params-->
<div class="no-index">

| このコマンドは引数を必要としません |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|12|名称変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.FORM FIRST PAGE.Summary-->FORM FIRST PAGE コマンドは、現在表示されているフォームページを先頭のフォームページに変更します。<!-- END REF-->フォームが表示されていない、または[FORM LOAD](../commands/form-load) コマンドによってロードされてない場合や、すでに最初のフォームページが表示されている場合、FORM FIRST PAGE コマンドは何も行いません。

## 例題 

以下の例は、メニューから呼び出される1行のメソッドです。これは、先頭のフォームページを表示します:

```4d
 FORM FIRST PAGE
```

## 参照 

[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 250 |
| スレッドセーフである | no |



