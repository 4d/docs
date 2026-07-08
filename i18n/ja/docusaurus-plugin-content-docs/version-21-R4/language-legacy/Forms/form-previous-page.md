---
id: form-previous-page
title: FORM PREVIOUS PAGE
slug: /commands/form-previous-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM PREVIOUS PAGE.Syntax-->**FORM PREVIOUS PAGE**<!-- END REF-->
<!--REF #_command_.FORM PREVIOUS PAGE.Params-->
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

<!--REF #_command_.FORM PREVIOUS PAGE.Summary-->FORM PREVIOUS PAGE コマンドは、現在表示されているフォームページから前のフォームページに移動します。<!-- END REF-->フォームが表示されていない、または[FORM LOAD](../commands/form-load) コマンドによってロードされてない場合や、すでに先頭のフォームページが表示されている場合、FORM PREVIOUS PAGE コマンドは何も行いません。

## 例題 

以下の例は、メニューから呼び出される1行のメソッドです。これは、前のフォームページを表示します:

```4d
 FORM PREVIOUS PAGE
```

## 参照 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM NEXT PAGE](../commands/form-next-page)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 249 |
| スレッドセーフである | no |



