---
id: form-next-page
title: FORM NEXT PAGE
slug: /commands/form-next-page
displayed_sidebar: docs
---

<!--REF #_command_.FORM NEXT PAGE.Syntax-->**FORM NEXT PAGE**<!-- END REF-->
<!--REF #_command_.FORM NEXT PAGE.Params-->
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

<!--REF #_command_.FORM NEXT PAGE.Summary-->FORM NEXT PAGE コマンドは、現在表示されているフォームページから次のフォームページに移動します。<!-- END REF-->フォームが表示されていない、または[FORM LOAD](../commands/form-load) コマンドによってロードされてない場合や、すでに最終のフォームページが表示されている場合、FORM NEXT PAGE コマンドは何も行いません。

## 例題 

以下の例は、メニューから呼び出される1行のメソッドです。これは、現在の次のフォームページを表示します:

```4d
 FORM NEXT PAGE
```

## 参照 

[FORM FIRST PAGE](../commands/form-first-page)  
[FORM Get current page](../commands/form-get-current-page)  
[FORM GOTO PAGE](../commands/form-goto-page)  
[FORM LAST PAGE](../commands/form-last-page)  
[FORM PREVIOUS PAGE](../commands/form-previous-page)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 248 |
| スレッドセーフである | no |



