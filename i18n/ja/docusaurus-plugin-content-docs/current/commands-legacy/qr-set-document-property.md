---
id: qr-set-document-property
title: QR SET DOCUMENT PROPERTY
slug: /commands/qr-set-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR SET DOCUMENT PROPERTY.Syntax-->**QR SET DOCUMENT PROPERTY** ( *area* ; *property* ; *value* )<!-- END REF-->
<!--REF #_command_.QR SET DOCUMENT PROPERTY.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| property | Integer | &#8594;  | 1 = 印刷ダイアログ, 2 = ドキュメントの単位 |
| value | Integer | &#8594;  | プロパティ値 |

<!-- END REF-->

*このコマンドはスレッドセーフではないため、プリエンプティブなコードには使えません。*


#### 説明 

<!--REF #_command_.QR SET DOCUMENT PROPERTY.Summary-->QR SET DOCUMENT PROPERTY コマンドを使用し、印刷ダイアログの表示の有無、またはドキュメントで使用する単位の指定を行うことができます。<!-- END REF-->

*property* には、*QR Document Properties*定数テーマ内にある次の定数を渡すことができます: 

| 定数                  | 型    | 値 | コメント                                                                                         |
| ------------------- | ---- | - | -------------------------------------------------------------------------------------------- |
| qr field separator  | 倍長整数 | 3 | フィールド区切り文字の文字コード。デフォルトの値はシステム変数FldDelimit です(デフォルトではTab)。                                    |
| qr printing dialog  | 倍長整数 | 1 | プリントダイアログボックスの表示<br/>値が1の場合、印刷の前に印刷ダイアログが表示されます。(デフォルト)値が0の場合、印刷の前に印刷ダイアログが表示されません。  |
| qr record separator | 倍長整数 | 4 | レコード区切り文字の文字コード。デフォルトの値はシステム変数RecDelimit です(デフォルトではキャリッジリターン)。                               |
| qr unit             | 倍長整数 | 2 | ドキュメントの単位<br/>値が0の場合、ドキュメントの単位はポイントです。値が1の場合、ドキュメントの単位はセンチです。値が2の場合、ドキュメントの単位はインチです。 |

無効な*area* 番号を渡した場合、エラー番号-9850が生成されます。  
無効な値を*property* または*value* 引数に渡した場合、それぞれに対応するエラー番号(-9852 または -9853)が生成されます。

#### 参照 

[QR Get document property](qr-get-document-property.md)  