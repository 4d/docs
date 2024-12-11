---
id: get-serial-port-mapping
title: GET SERIAL PORT MAPPING
slug: /commands/get-serial-port-mapping
displayed_sidebar: docs
---

<!--REF #_command_.GET SERIAL PORT MAPPING.Syntax-->**GET SERIAL PORT MAPPING** ( *numArray* ; *nameArray* )<!-- END REF-->
<!--REF #_command_.GET SERIAL PORT MAPPING.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| numArray | Integer array | &#8592; | ポート番号の配列 |
| nameArray | Text array | &#8592; | ポート名の配列 |

<!-- END REF-->

#### 説明 

<!--REF #_command_.GET SERIAL PORT MAPPING.Summary-->GET SERIAL PORT MAPPING コマンドはマシンのシリアルポート番号とシリアルポート名を、2つの配列*numArray* と *nameArray*に返します。<!-- END REF--> 

Mac OS Xでは、USBシリアルアダプターの使用時に、OSがポート番号を動的に割り当てるため、このコマンドが役立ちます。シリアルポートの実際のIDとは関係なく、その名前（固定）を用いてシリアルポートを取り扱うことができます。

**Note:** このコマンドは標準ポートでは、意味ある値を返しません。標準ポートを使用する場合は、[SET CHANNEL](set-channel.md "SET CHANNEL")コマンドに旧方式である0または1のポート番号を指定してください。

#### 例題 

このプロジェクトメソッドは、割り当てられたシリアルポート番号に関係なく同じシリアルポートを取得するために使用できます:

```4d
 ARRAY TEXT($arrPortNames;0)
 ARRAY LONGINT($arrPortNums;0)
 var $vPortNum;$vFinalPortNum : Integer
 
  // シリアルポートの現在の番号を取得
 GET SERIAL PORT MAPPING($arrPortNums;$arrPortNames)
 $vPortNum:=Find in array($arrPortNames;vPortName)
  // vPortName には使用するポートの名前が格納されている;
  // この値はダイアログで設定したり、フィールドに格納されている
 If(arrPortNums{$vPortNum}=0)
    $vFinalPortNum:=0 // macOS 環境下での特殊なケース
 Else
    $vFinalPortNum:=arrPortNums{$vPortNum}+100
 End if
 SET CHANNEL($vFinalPortNum;params) // params には通信パラメタが格納されている
 ... // 処理を実行
 SET CHANNEL(11) // ポートを閉じる
```

#### 参照 

[SET CHANNEL](set-channel.md)  

#### プロパティ
|  |  |
| --- | --- |
| コマンド番号 | 909 |
| スレッドセーフである | &check; |
| サーバー上での使用は不可 ||


