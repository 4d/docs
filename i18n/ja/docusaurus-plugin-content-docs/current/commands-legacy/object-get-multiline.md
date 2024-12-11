---
id: object-get-multiline
title: OBJECT Get multiline
slug: /commands/object-get-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get multiline.Syntax-->**OBJECT Get multiline** ( {* ;} *object* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get multiline.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| 戻り値 | Integer | &#8592; | 複数行の状態 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT Get multiline.Summary-->**OBJECT Get multiline**コマンドは、引数 *object* と *\** で指定したオブジェクトの、"複数行"のオプションのカレントの状態を返します。<!-- END REF-->

「複数行」のオプションはデザインモードのプロパティリストを使用するか、 [OBJECT SET MULTILINE](object-set-multiline.md) という新しいコマンドを使用して設定することができます。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。

返ってきた値は "*Form Objects (Properties)*" テーマ内にある以下の定数と対応しています:

| 定数             | 型    | 値 | コメント                                                                                                                                 |
| -------------- | ---- | - | ------------------------------------------------------------------------------------------------------------------------------------ |
| Multiline Auto | 倍長整数 | 0 | 単独行のエリアでは、行に表示しきれない単語は切り落とされ、改行はされません。<br/>複数行のエリアでは、改行が行われます。                                                               |
| Multiline No   | 倍長整数 | 2 | 改行は禁止されます。テキストは必ず単独行として表示されます。文字列かテキストフィールドか変数に改行が含まれていたとしても、改行は行われません。                                                              |
| Multiline Yes  | 倍長整数 | 1 | 単独行のエリアでは、テキストは最初の改行までか、単語全体を表示できる最後の単語までが表示されます。その後改行が挿入されるので、↓キーを押すことによってエリアの内容をスクロールすることができます。<br/>複数行のエリアでは、自動で改行が行われます。 |

**注:** **OBJECT Get multiline** コマンドを、複数行のオプションがないオブジェクトに対して使用した場合、コマンドは 0 を返します。

#### 参照 

[OBJECT SET MULTILINE](object-set-multiline.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1254 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


