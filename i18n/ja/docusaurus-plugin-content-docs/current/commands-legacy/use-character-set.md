---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( map | * {; *mapInOut*} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| map &#124; * | 文字, 演算子 | &#8594;  | 使用する文字セット名 (Unicodeモード), または 使用するASCIIマップドキュメント名 (ASCIIモード), または * の場合、デフォルトの文字セット/ASCIIマップにリセット |
| mapInOut | Integer | &#8594;  | 0 = 出力マップ 1 = 入力マップ 省略した場合、出力マップ |

<!-- END REF-->

#### 説明 

<!--REF #_command_.USE CHARACTER SET.Summary-->**USE CHARACTER SET**は、データベースとドキュメントまたはシリアルポート間のデータ交換の際、4Dが 使用する文字セットを変更するために使用できます。<!-- END REF-->このコマンドはカレントプロセスに有効です。交換操作にはテキスト, DIF, そして SYLK ファイルの読み込み/書き出しが含まれます。文字マップはまた[SEND PACKET](send-packet.md), [RECEIVE PACKET](receive-packet.md) (テキスト型パケット) そして[RECEIVE BUFFER](receive-buffer.md)によるデータ交換にも使用されます。[SEND RECORD](send-record.md), [SEND VARIABLE](send-variable.md), [RECEIVE RECORD](receive-record.md), [SEND PACKET](send-packet.md), [RECEIVE PACKET](receive-packet.md) (BLOB型パケット) そして [RECEIVE VARIABLE](receive-variable.md) によるデータ交換には影響しません。

*map* 引数は使用する文字セットの“IANA”名、またはそのエイリアス名と対応していなければなりません。例えば、“iso-8859-1”と“utf-8”は有効 な名前であり、そのエイリアス“latin1”あるいは“l1”もまた有効です。これらの名前に関する詳細は、以下のサイトを参照してください:

*http://www.iana.org/assignments/character-sets*

IANA名に関する説明は[CONVERT FROM TEXT](convert-from-text.md)コマンドにもあります。

*mapInOut*が0の場合、マップは書き出しのために設定されます。*mapInOut*が1の場合、マップは読み込みのために設定されます。*mapInOut* 引数を渡さない場合、デフォルトで書き出しマップが使用されます。

*\** 引数が渡されると、 (*mapInOut*の値に基づき、読み込みまたは書き込みが) デフォルトの文字セットに再設定されます。  
4Dが使用するデフォルトの文字コードはUTF-8です。

#### 例題 

以下の例題 (Unicodeモード) では、UTF-16文字セットをテキストの書き出しに使用し、その後デフォルトの文字セットに再設定します:

```4d
 USE CHARACTER SET("UTF-16LE";0) // UTF-16 'リトルエンディアン' 文字セットを使用
 EXPORT TEXT([MyTable];"MyText") // マップを通してデータを書き出し
 USE CHARACTER SET(*;0) // デフォルト文字セットに戻す
```

#### システム変数およびセット 

マップが正しくロードされるとシステム変数OKに1が設定され、そうでなければ0が設定されます。  

#### 参照 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 205 |
| スレッドセーフである | &check; |
| システム変数を更新する | OK |
| サーバー上での使用は不可 ||


