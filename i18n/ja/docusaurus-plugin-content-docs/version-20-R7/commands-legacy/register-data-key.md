---
id: register-data-key
title: Register data key
slug: /commands/register-data-key
displayed_sidebar: docs
---

<!--REF #_command_.Register data key.Syntax-->**Register data key** ( curPassPhrase | curDataKey ) : Boolean<!-- END REF-->
<!--REF #_command_.Register data key.Params-->
| 引数 | 型 |  | 説明 |
| --- | --- | --- | --- |
| curPassPhrase &#124; curDataKey | テキスト, オブジェクト | &#8594;  | カレントのパスフレーズ(テキスト)またはカレントのデータ暗号化キー(オブジェクト) |
| 戻り値 | Boolean | &#8592; | 暗号化キーが正常に4D キーチェーンに読み込まれた場合にはTrue、キーがすでに4D キーチェーンに入っていた場合にはFlaseを返す |

<!-- END REF-->

#### 説明 

<!--REF #_command_.Register data key.Summary-->**Register data key** コマンドは、引数として渡されたデータ暗号化キーを4D キーチェーンに追加します。<!-- END REF-->

4D キーチェーンは、メモリにロードされる一つ以上の暗号化キーのセットのことで、4D はデータファイルを復号化/暗号化するためにデータキーが必要になるときには自動的にそれをスキャンします。より詳細な情報については、*データの暗号化*を参照してください。

第一引数には、追加する暗号化キーを定義する、*curPassPhrase* 引数または *curDataKey* 引数のどちらかを渡してください:

* *curPassPhrase*: 暗号化キーを生成するのに使用された文字列。この引数を使用する場合、暗号化キーが生成されます。
* *curDataKey*: データ暗号化キーを格納するオブジェクト(*encodedKey* プロパティを持つ)。このキーは[New data key](new-data-key.md) コマンドで生成された可能性があります。

**返される値**

* 暗号化キーが4D キーチェーンに正常に読み込まれた場合には**True**
* 4D キーチェーンの中に同じ暗号化キーが既にあった場合には**False**

#### 例題 

```4d
 var $passphrase : Text
 var $added : Boolean
 
 $passphrase:=Request("Enter the passphrase:")
 If(OK=1)
    $added:=Register data key($passphrase)
 
    OPEN DATA FILE("data.4DD") //4D キーチェーンの中に入っているので、ここではキーは必要ない
 End if
```

#### 参照 

  
[New data key](new-data-key.md)  