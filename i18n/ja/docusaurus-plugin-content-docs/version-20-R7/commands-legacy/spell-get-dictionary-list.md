---
id: spell-get-dictionary-list
title: SPELL GET DICTIONARY LIST
slug: /commands/spell-get-dictionary-list
displayed_sidebar: docs
---

<!--REF #_command_.SPELL GET DICTIONARY LIST.Syntax-->**SPELL GET DICTIONARY LIST** ( *langID* ; *langFiles* ; *langNames* )<!-- END REF-->
<!--REF #_command_.SPELL GET DICTIONARY LIST.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| langID | Integer array | &#8592; | 言語のユニークID |
| langFiles | Text array | &#8592; | インストールされた言語ファイルの名前 |
| langNames | Text array | &#8592; | 言語のローカル名 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SPELL GET DICTIONARY LIST.Summary-->**SPELL GET DICTIONARY LIST**コマンドはマシンにインストールされたハンスペル辞書ファイルのID、ファイル名、言語名をそれぞれ*langID*、*langFiles*そして*langNames*配列に返します。<!-- END REF-->

**注:** ハンスペル辞書についての詳細な情報は、デザインリファレンスの*スペルチェック* のセクションを参照して下さい。   
* *langID* には [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md) コマンドによって自動的に生成され使用されるID番号が返されます。  
IDは固有であり、ファイル名に基づいているという点に注意して下さい。このコマンドは主に開発において有用です。データベースが実行されるたびにIDを再生成する必要がないからです。
* *langFiles* にはマシンにインストールされた辞書ファイルの名前(拡張子なし)が返されます。
* *langNames* にはカレントのアプリケーション言語内で指定された言語の名前が返されます。例えば、フランス語の辞書に関してはフランス語を使用するマシンにおいては "français (France)" という値が返され、英語を使用するマシンにおいては "French (France)" と返されます。この言語名の後には "- Hunspell" と続きます。このフィールドは4Dにとって既知のファイルに対してのみ有効です。未知のファイル(例えばカスタムのファイル)に対しては、 "N/A - Hunspell" という名前が返されます。(ファイルが有効である限り) これによって辞書の使用が妨げられることはなく、返されたIDは[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md) コマンドへと渡す事ができます。

#### 例題 

Hunspell辞書に"fr-classic+reform1990.aff"、"fr-classic+reform1990.dic"、"fr-dentist.aff"および"fr-dentist.dic"を配置したとします:

```4d
 ARRAY LONGINT($langID;0)
 ARRAY TEXT($dicName;0)
 ARRAY TEXT($langDesc;0)
 SPELL GET DICTIONARY LIST($langID;$dictName;$langDesc)
```

| **$langID** | **$dictName**         | **$langDesc**             |
| ----------- | --------------------- | ------------------------- |
| 65536       | en\_GB                | 英語 (イギリス)                 |
| 65792       | en\_US                | 英語 (アメリカ合衆国)              |
| 131072      | de\_DE                | ドイツ語 (ドイツ)                |
| 196608      | es\_ES                | スペイン語                     |
| 262144      | fr\_FR                | フランス語 (フランス)              |
| 1074036166  | fr-classic+reform1990 | フランス語 (フランス) - Hunspell   |
| 1073901273  | fr-dentist            | No description - Hunspell |

#### 参照 

[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  