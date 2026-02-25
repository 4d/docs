---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( map | * {; *mapInOut*} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
<div class="no-index">

| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| map &#124; * | Text, Operator | &#8594; | 使用する文字セット名 (Unicodeモード), または 使用するASCIIマップドキュメント名 (ASCIIモード), または * の場合、デフォルトの文字セット/ASCIIマップにリセット |
| mapInOut | Integer | &#8594; | 0 = 出力マップ 1 = 入力マップ 省略した場合、出力マップ |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>履歴</summary>

|リリース|内容|
|---|---|
|11 SQL|変更|
|<6|初出|

</details>
</div>

## 説明 

<!--REF #_command_.USE CHARACTER SET.Summary-->**USE CHARACTER SET**は、データベースとドキュメントまたはシリアルポート間のデータ交換の際、4Dが 使用する文字セットを変更するために使用できます。<!-- END REF-->このコマンドはカレントプロセスに有効です。交換操作にはテキスト, DIF, そして SYLK ファイルの読み込み/書き出しが含まれます。文字マップはまた[SEND PACKET](../commands/send-packet), [RECEIVE PACKET](../commands/receive-packet) (テキスト型パケット) そして[RECEIVE BUFFER](../commands/receive-buffer)によるデータ交換にも使用されます。[SEND RECORD](../commands/send-record), [SEND VARIABLE](../commands/send-variable), [RECEIVE RECORD](../commands/receive-record), [SEND PACKET](../commands/send-packet), [RECEIVE PACKET](../commands/receive-packet) (BLOB型パケット) そして [RECEIVE VARIABLE](../commands/receive-variable) によるデータ交換には影響しません。

*map* 引数は使用する文字セットの“IANA”名、またはそのエイリアス名と対応していなければなりません。例えば、“iso-8859-1”と“utf-8”は有効 な名前であり、そのエイリアス“latin1”あるいは“l1”もまた有効です。これらの名前に関する詳細は、以下のサイトを参照してください:

*http://www.iana.org/assignments/character-sets*

IANA名に関する説明は[CONVERT FROM TEXT](../commands/convert-from-text)コマンドにもあります。

*mapInOut*が0の場合、マップは書き出しのために設定されます。*mapInOut*が1の場合、マップは読み込みのために設定されます。*mapInOut* 引数を渡さない場合、デフォルトで書き出しマップが使用されます。

*\** 引数が渡されると、 (*mapInOut*の値に基づき、読み込みまたは書き込みが) デフォルトの文字セットに再設定されます。  
4Dが使用するデフォルトの文字コードはUTF-8です。

## 例題 

以下の例題 (Unicodeモード) では、UTF-16文字セットをテキストの書き出しに使用し、その後デフォルトの文字セットに再設定します:

```4d
 USE CHARACTER SET("UTF-16LE";0) // UTF-16 'リトルエンディアン' 文字セットを使用
 EXPORT TEXT([MyTable];"MyText") // マップを通してデータを書き出し
 USE CHARACTER SET(*;0) // デフォルト文字セットに戻す
```

## システム変数およびセット 

マップが正しくロードされるとシステム変数OKに1が設定され、そうでなければ0が設定されます。  

## 参照 

[EXPORT DIF](../commands/export-dif)  
[EXPORT SYLK](../commands/export-sylk)  
[EXPORT TEXT](../commands/export-text)  
[IMPORT DIF](../commands/import-dif)  
[IMPORT SYLK](../commands/import-sylk)  
[IMPORT TEXT](../commands/import-text)  
[RECEIVE BUFFER](../commands/receive-buffer)  
[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  

## プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 205 |
| スレッドセーフである | yes |
| システム変数を更新する | OK |


