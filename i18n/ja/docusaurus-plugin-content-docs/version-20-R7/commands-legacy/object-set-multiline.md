---
id: object-set-multiline
title: OBJECT SET MULTILINE
slug: /commands/object-set-multiline
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET MULTILINE.Syntax-->**OBJECT SET MULTILINE** ( {* ;} *object* ; *multiline* )<!-- END REF-->
<!--REF #_command_.OBJECT SET MULTILINE.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| * | 演算子 | &#8594;  | 指定時: object はオブジェクト名(文字列)、 省略時: object は変数またはフィールド |
| object | any | &#8594;  | オブジェクト名( * 指定時)、または変数やフィールド( * 省略時) |
| multiline | Integer | &#8594;  | 複数行プロパティの状態 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.OBJECT SET MULTILINE.Summary-->**OBJECT SET MULTILINE**コマンドは、引数 *object* と *\** で指定したオブジェクトの"複数行"のプロパティを変更します。<!-- END REF-->

複 数行のプロパティはテキストエリアの表示と印刷に関係する二つの状態を管理します。単独行の最後に置かれる単語の表示と、改行の自動挿入です。詳細な情報 に関しては *Design Reference* マニュアルの *複数行* を参照して下さい。このプロパティが存在しないオブジェクトに対してコマンドを適用した場合、何も起こりません。

任意の *\** 演算子を渡した場合、 *object* 引数でオブジェクト名を文字列で指定します。省略時には *object* 引数でフィールドまたは変数を指定します。 

*multiline* 引数には、設定を決める値を渡します。値としては "*Form Objects (Properties)*" テーマ内にある、以下の定数を使用することができます:

| 定数             | 型    | 値 | コメント                                                                                                                                 |
| -------------- | ---- | - | ------------------------------------------------------------------------------------------------------------------------------------ |
| Multiline Auto | 倍長整数 | 0 | 単独行のエリアでは、行に表示しきれない単語は切り落とされ、改行はされません。<br/>複数行のエリアでは、改行が行われます。                                                               |
| Multiline No   | 倍長整数 | 2 | 改行は禁止されます。テキストは必ず単独行として表示されます。文字列かテキストフィールドか変数に改行が含まれていたとしても、改行は行われません。                                                              |
| Multiline Yes  | 倍長整数 | 1 | 単独行のエリアでは、テキストは最初の改行までか、単語全体を表示できる最後の単語までが表示されます。その後改行が挿入されるので、↓キーを押すことによってエリアの内容をスクロールすることができます。<br/>複数行のエリアでは、自動で改行が行われます。 |

#### 例題 

入力エリアにおいて、改行を禁止したい場合:

```4d
 OBJECT SET MULTILINE(*;"vEntry";Multiline No)
```

#### 参照 

[OBJECT Get multiline](object-get-multiline.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 1253 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


