---
id: spell-get-current-dictionary
title: SPELL Get current dictionary
slug: /commands/spell-get-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL Get current dictionary.Syntax-->**SPELL Get current dictionary**  : Integer<!-- END REF-->
<!--REF #_command_.SPELL Get current dictionary.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Integer | &#8592; | スペルチェックに使用される辞書のID |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SPELL Get current dictionary.Summary-->**SPELL Get current dictionary**コマンドは使用中の辞書のID番号を返します。<!-- END REF-->

#### 例題 

カレント辞書の言語を表示します: 

```4d
  // ロードされた辞書のリスト
 SPELL GET DICTIONARY LIST($IDs_al;$Codes_at;$Names_at)
 $curLangCode:=SPELL Get current dictionary
 $countryName:=$Names_at{Find in array($IDs_al;$curLangCode)}
  // メッセージを表示
 ALERT("カレント辞書: "+$countryName) // Spanish
```

#### 参照 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1205 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


