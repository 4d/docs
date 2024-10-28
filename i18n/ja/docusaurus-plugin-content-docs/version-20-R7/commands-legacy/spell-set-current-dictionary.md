---
id: spell-set-current-dictionary
title: SPELL SET CURRENT DICTIONARY
slug: /commands/spell-set-current-dictionary
displayed_sidebar: docs
---

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Syntax-->**SPELL SET CURRENT DICTIONARY** ( *dictionary* )<!-- END REF-->
<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| dictionary | Integer, Text | &#8594;  | スペルチェック用に使用する辞書のID、名前または言語コード省略した場合デフォルトの辞書を使用 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.SPELL SET CURRENT DICTIONARY.Summary-->**SPELL SET CURRENT DICTIONARY**コマンドは、現在の辞書を引数*dictionary*に よって指定された辞書で置き換えます。<!-- END REF-->カレント辞書は、4Dに内蔵されているスペルチェック機能に使用されています(詳細については、 4D Design Referenceマニュアルや4D Write Proドキュメントを参照してください) 。設定された現在の辞書は即座にセッションを通して、データベースのすべてのプロセス、および4D Writeや4D Viewプラグインエリアに反映されます。

4Dは以下の辞書を使用します。

* Windows - アプリケーションの言語に対応するハンスペル辞書を使用します。
* Mac - システムのスペルチェッカーを使用します。

****Note:** Macにおいては、[SET DATABASE PARAMETER](set-database-parameter.md)コマンドを使用することでハンスペル辞書へと切り替えることもできます。詳細な情報に関しては、デザインリファレンスの*スペルチェック設定* のセクションを参照して下さい。

*dictionary* 引数を使用することによって、辞書を変更することが出来ます。以下のいづれかを渡す事ができます。

* ハンスペルの辞書ID番号([SPELL GET DICTIONARY LIST](spell-get-dictionary-list.md) コマンドによって返されます)。
* ハンスペルの辞書名(ハンスペル辞書のファイル名に対応、拡張子はあってもなくても可)。
* a BCP 47、 ISO 639-1 または ISO 639-2 言語コード。例えば、BCP 47 言語コードでは、 "en-US" はアメリカ英語を意味し、 "en-GB" はイギリス英語を意味します。これらのコードは4D内部で対応するカレントの辞書へとリダイレクトされます(ハンスペルまたはMacシステム辞書)。

**Compatibility note:** 旧バージョンの4Dでは、"コーディアル" 辞書はサポートされていました。互換性のために、"コーディアル"辞書の番号を *dictionary* 引数に渡す事は可能です(値もしくは "*Dictionaries*" テーマ内の定数)。しかしながらこの場合、辞書は4D内部でそれに相当するハンスペル辞書(またはMacの場合はシステムの辞書)へとリダイレクトされます。

#### システム変数およびセット 

*dictionary*が正しくロードされるとシステム変数OKに1が設定されます。そうでなければ0が設定されエラーが返されます。

#### 例題 

Hunspellフォルダーに配置した"fr-classic"辞書をロードする:

```4d
 SPELL SET CURRENT DICTIONARY("fr-classic")
  // SPELL SET CURRENT DICTIONARY ("FR-classic.dic") も使用できます
```

#### 参照 

[SPELL CHECKING](spell-checking.md)  
[SPELL Get current dictionary](spell-get-current-dictionary.md)  
[SPELL GET DICTIONARY LIST](spell-get-dictionary-list.md)  