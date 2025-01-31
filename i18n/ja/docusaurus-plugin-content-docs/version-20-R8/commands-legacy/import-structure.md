---
id: import-structure
title: IMPORT STRUCTURE
slug: /commands/import-structure
displayed_sidebar: docs
---

<!--REF #_command_.IMPORT STRUCTURE.Syntax-->**IMPORT STRUCTURE** ( *xmlStructure* )<!-- END REF-->
<!--REF #_command_.IMPORT STRUCTURE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| xmlStructure | Text | &#8594;  | 4D データベースストラクチャーのXML定義ファイル |

<!-- END REF-->

#### 説明 

<!--REF #_command_.IMPORT STRUCTURE.Summary-->**IMPORT STRUCTURE** コマンドは、カレントデータベース内に、 *xmlStructure* に渡した4D XMLストラクチャー定義を読み込みます。<!-- END REF-->

*xmlStructure* 引数にはXMLフォーマットでの有効な4Dストラクチャー定義を渡す必要があります。以下の機能うちのどれか一つを使用して、有効なストラクチャー定義を得ることができます:

* 新しい [EXPORT STRUCTURE](export-structure.md) コマンドを実行します。
* 4D デザインモードのインターフェースでのメニューから、**書き出し -> ストラクチャー定義をXMLファイルに書き出し...** を選択します(*ストラクチャー定義の書き出しと読み込み*を参照して下さい)
* 4D アプリケーションの"**DTD**"フォルダ内のPublic文書型宣言に基づいてカスタムのXMLファイルを作成、または編集します。

イ ンポートされたストラクチャー定義はカレントのストラクチャーに追加され、既存のテーブル(存在する場合)と一緒に標準の4D ストラクチャーエディター内に表示されます。読み込んだテーブルがもともとあったテーブルと同じ名前のとき、エラーが生成され、読み込みオペレーションは キャンセルされます。

ストラクチャーは空のデータベースにも読み込むことができ、その結果新しいデータベースを作成することになります。

ストラクチャーが読み込みのみモード、もしくはコンパイル済みの場合はエラーが生成されます。

また、ストラクチャーは4D リモートアプリケーションから呼び出すことはできません。

#### 配布に関する注意 

このコマンドはデータベースストラクチャーを変更するため、読み出し専用のパッケージアプリ(*Program Files* フォルダ内にまたは.4dz ファイル内にインストールされている.4dc ファイル)のコンテキストにおいては使用することができません。

#### 例題 

保存されたストラクチャー定義を、カレントデータベースに読み込む場合を考えます:

```4d
 $struc:=Document to text("c:\\4DStructures\\Employee.xml")
 IMPORT STRUCTURE($struc)
```

#### 参照 

[EXPORT STRUCTURE](export-structure.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1310 |
| スレッドセーフである | &cross; |


