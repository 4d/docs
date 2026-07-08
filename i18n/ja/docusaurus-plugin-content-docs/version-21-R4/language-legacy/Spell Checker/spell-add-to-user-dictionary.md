---
id: spell-add-to-user-dictionary
title: SPELL ADD TO USER DICTIONARY
slug: /commands/spell-add-to-user-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Syntax-->**SPELL ADD TO USER DICTIONARY** ( *words* : Text, Text array )<!-- END REF-->
<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| words | Text, Text配列 | &#8594; | ユーザー辞書に追加する単語または単語リスト |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|13|初出|

</details>
</div>

## 説明 

<!--REF #_command_.SPELL ADD TO USER DICTIONARY.Summary-->**SPELL ADD TO USER DICTIONARY**コマンドはカレントのユーザー辞書に単語を追加します。<!-- END REF-->

ユーザー辞書は、ユーザーがカレント辞書に追加した単語を含む辞書のことです。この辞書は*UserDictionaryxxx.dic*という名前のファイルで (xxxはカレント辞書のIDです)、カレントの4Dフォルダーに自動で作成されます。使用される各カレント辞書ごとにユーザー辞書があります。 

*words*には、ユーザー辞書に追加する単語を含む文字あるいは文字配列を渡します。すでに登録されている単語は無視されます。

## 例題 

ユーザー辞書に特定の名刺を追加する:

```4d
 ARRAY TEXT($arrTwords;0)
 APPEND TO ARRAY($arrTwords;"4D")
 APPEND TO ARRAY($arrTwords;"Wakanda")
 APPEND TO ARRAY($arrTwords;"Clichy")
 SPELL ADD TO USER DICTIONARY($arrTwords)
```

## 参照 

[SPELL CHECK TEXT](../commands/spell-check-text)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1214 |
| スレッドセーフである | no |


