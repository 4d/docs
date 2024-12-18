---
id: qr-get-document-property
title: QR Get document property
slug: /commands/qr-get-document-property
displayed_sidebar: docs
---

<!--REF #_command_.QR Get document property.Syntax-->**QR Get document property** ( *area* ; *property* ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get document property.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| area | Integer | &#8594;  | エリア参照 |
| property | Integer | &#8594;  | 1 = 印刷ダイアログ, 2 = ドキュメント単位 |
| 戻り値 | Integer | &#8592; | プロパティ値 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.QR Get document property.Summary-->QR Get document property コマンドを使用し、印刷ダイアログの表示の有無、または*area*に表示されるドキュメントの単位を取得することができます。<!-- END REF-->

*property*には、定数テーマ内にある次の定数を渡すことができます: 

| 定数                  | 型    | 値 | コメント                                                                                         |
| ------------------- | ---- | - | -------------------------------------------------------------------------------------------- |
| qr field separator  | 倍長整数 | 3 | フィールド区切り文字の文字コード。デフォルトの値はシステム変数FldDelimit です(デフォルトではTab)。                                    |
| qr printing dialog  | 倍長整数 | 1 | プリントダイアログボックスの表示<br/>値が1の場合、印刷の前に印刷ダイアログが表示されます。(デフォルト)値が0の場合、印刷の前に印刷ダイアログが表示されません。  |
| qr record separator | 倍長整数 | 4 | レコード区切り文字の文字コード。デフォルトの値はシステム変数RecDelimit です(デフォルトではキャリッジリターン)。                               |
| qr unit             | 倍長整数 | 2 | ドキュメントの単位<br/>値が0の場合、ドキュメントの単位はポイントです。値が1の場合、ドキュメントの単位はセンチです。値が2の場合、ドキュメントの単位はインチです。 |

無効な*area*番号を渡した場合、エラー番号-9850が生成されます。

無効な*property*引数を渡した場合、エラー番号-9852が生成されます。

#### 参照 

[QR SET DOCUMENT PROPERTY](qr-set-document-property.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 773 |
| スレッドセーフである | &cross; |


