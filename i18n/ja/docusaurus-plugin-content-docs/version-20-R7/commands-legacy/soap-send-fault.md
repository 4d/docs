---
id: soap-send-fault
title: SOAP SEND FAULT
slug: /commands/soap-send-fault
displayed_sidebar: docs
---

<!--REF #_command_.SOAP SEND FAULT.Syntax-->**SOAP SEND FAULT** ( *faultType* ; *description* )<!-- END REF-->
<!--REF #_command_.SOAP SEND FAULT.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| faultType | Integer | &#8594;  | 1 = クライアント側のエラー, 2 = サーバー側のエラー |
| description | Text | &#8594;  | SOAPクライアントに送信する、エラーの説明 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.SOAP SEND FAULT.Summary-->**SOAP SEND FAULT**コマンドを使用して、SOAPクライアントにエラーの発生元 (クライアントまたはサーバ) を示すエラーを送ることができます。<!-- END REF-->このコマンドを使用することで、結果を返さなくても、クライアントにエラー示すことができます。

例えば、“Square\_root” Webサービスが呼び出された時に負数がクライアントから送信された場合、クライアントによるエラーが検知します。このコマンドを使用してクライアントに、正数が必要であることを通知できます。

サーバ側のエラーとしては、例えば、メソッド実行時のメモリ不足などがあります。

*faultType*にエラーの発生元を渡します。*Web Services (Server)*テーマの定義済み定数を使用できます:

| 定数                | 型    | 値 |
| ----------------- | ---- | - |
| SOAP client fault | 倍長整数 | 1 |
| SOAP server fault | 倍長整数 | 2 |
  
  
*description*にはエラーの説明を渡します。クライアントの実装が対応していれば、エラーを処理できます。

#### 例題 

“Square\_root” Webサービスの例題において、負数が渡された場合にリクエストを処理するため、以下のコードを使用できます:

```4d
 SOAP SEND FAULT(SOAP client fault;"Positive values required")
```

#### 参照 

[SOAP DECLARATION](soap-declaration.md)  
[SOAP Get info](soap-get-info.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 781 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


