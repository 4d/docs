---
id: discover-data-key
title: Discover data key
slug: /commands/discover-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Discover data key.Syntax-->**Discover data key**  : Boolean<!-- END REF-->
<!--REF #_command_.Discover data key.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| 戻り値 | Boolean | &#8592; | 現在開かれているデータファイルに対する有効な暗号化キーが見つかった場合にはTrue、そうでない場合にはFalse |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Discover data key.Summary-->**Discover data key** コマンドは、現在開かれているデータファイルに対応する有効な暗号化キーを、接続されている全てのデバイスのルートレベルで検索し、それに成功した場合には**True** を返します。<!-- END REF-->

検索対象となる接続されたデバイスには、USBキーや外部ディスクも含まれます。有効な暗号化キーは、暗号化されたデータベースへの読み/書きのアクセスを行うためには必要です。このコマンドは例えば、ユーザーがUSB キーを挿入した後のデータベースのスタートアップ時などに呼び出すことができます。

キーファイル(".4DKeyChain" 拡張子のファイル)は接続されたデバイスのトップレベルに保存されている必要があります(フォルダ階層の中までは検索されません)。暗号化キーはJSON フォーマットで保存されている必要があります(*4D デザインリファレンス*の*データ暗号化キーをファイルに保存する* を参照してください)。

**返される値**

* 現在開かれているデータファイルに対して有効な暗号化キーが見つかった場合には**True**を返します。その場合、以下のことが可能になります:  
   * 必要に応じて暗号化キーを適用することで、暗号化されたデータを使用することができる(読み/書き操作へのアクセスが可能)。  
   * 暗号化キーは4D キーチェーンに追加されます。
* 現在開かれているデータファイルに対して有効な暗号化キーが見つからなかった場合には**False** が返され、この場合にはデータへのアクセスは不可能となります。

#### 例題 

```4d
 var $status : Object
 var $keyFound : Boolean
 
 $status:=ds.encryptionStatus()
 
 If(($status.isEncrypted)&(Not($status.keyProvided))) // キーが提供されていない
  // キーがないので暗号化されたデータへはアクセスできない
    $keyFound:=Discover data key // キーを検索
    If($keyFound=True)
       ALERT("A valid encryption key has been found.")
    End if
 End if
```

#### 参照 

  
[New data key](new-data-key.md)  

#### プロパティ

|  |  |
| --- | --- |
| コマンド番号 | 1639 |
| スレッドセーフである | &check; |


