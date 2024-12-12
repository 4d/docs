---
id: is-field-value-null
title: Is field value Null
slug: /commands/is-field-value-null
displayed_sidebar: docs
---

<!--REF #_command_.Is field value Null.Syntax-->**Is field value Null** ( *aField* ) : Boolean<!-- END REF-->
<!--REF #_command_.Is field value Null.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| aField | Field | &#8594;  | 評価するフィールド |
| 戻り値 | Boolean | &#8592; | True = フィールドはNULL, False = フィールドはNULLでない |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Is field value Null.Summary-->Is field value Null コマンドは*aField*引数 によって指定されたフィールドがNULL値を含む場合[True](true.md "True")を返します。<!-- END REF-->その他の場合[False](false.md "False")を返します。 

4DのSQLカーネルはNULL値を使用します。詳細については、4Dの*SQLリファレンス* マニュアルを参照して下さい。

このコマンドによって返された値は、ストラクチャーエディターのフィールド定義において"*ヌル値を空値にマップ*" のオプションがチェックされていない場合に限り有効です。そうでない場合には、このコマンドは常に**False** を返します。

**注:** このコマンドはオブジェクト型およびオブジェクトプロパティに対しては使用できません。オブジェクトフィールドのNull 値は、[Null](null.md) コマンドを通して管理されます。

#### 参照 

[Null](null.md)  
[SET FIELD VALUE NULL](set-field-value-null.md)  