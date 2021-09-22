---
id: CryptoKeyClass
title: CryptoKey
---


4D ランゲージの `CryptoKey` クラスは、非対称の暗号化キーペアをカプセル化します。

このクラスは `4D` クラスストアより提供されます。

### 例題

たとえば ES256 JSON Web Token (JWT) を作成するために新規 ECDSA キーペアを使ってメッセージの署名と検証をおこないます。

```4d
 // 新規 ECDSA キーペアの生成
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // base64 形式で署名を取得
$message:="hello world" 
$signature:=$key.sign($message;New object("hash";"SHA256"))

  // 署名の検証
$status:=$key.verify($message;$signature;New object("hash";"SHA256"))
ASSERT($status.success)
```


### 概要
|                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------- |
| [**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey](#4dcryptokeynew)<p>&nbsp;&nbsp;&nbsp;&nbsp;creates a new `4D.CryptoKey` object encapsulating an encryption key pair</p>                |
| [**.curve** : Text](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;normalised curve name of the key.  </p>                                                                  |
| [**.decrypt**( *message* : Text ; *options* : Object ) : Object](#decrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;decrypts the *message* parameter using the **private** key</p>                   |
| [**.encrypt**( *message* : Text ; *options* : Object ) : Text](#encrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;encrypts the *message* parameter using the **public** key</p>                     |
| [**.getPrivateKey()** : Text](#getprivatekey)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the private key of the `CryptoKey` object</p>                                                |
| [**.getPublicKey( )** : Text](#getpublickey)<p>&nbsp;&nbsp;&nbsp;&nbsp;returns the public key of the `CryptoKey` object</p>                                                 |
| [.**sign** (*message* : Text ; *options* : Text) : Text](#sign)<p>&nbsp;&nbsp;&nbsp;&nbsp;signs the utf8 representation of a *message* string </p>                              |
| [**.size** : Integer](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;the size of the key in bits </p>                                                                 |
| [**.type** : Text](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;キーのタイプ: "RSA", "ECDSA", "PEM" </p>                                                                    |
| [**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object](#verify)<p>&nbsp;&nbsp;&nbsp;&nbsp;verifies the base64 signature against the utf8 representation of *message*</p> |








## 4D.CryptoKey.new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey
| 引数       | タイプ          |    | 説明                                          |
| -------- | ------------ | -- | ------------------------------------------- |
| settings | オブジェクト       | -> | キーペアを生成・ロードするための設定                          |
| result   | 4D.CryptoKey | <- | Object encapsulating an encryption key pair |

The `4D.CryptoKey.new()` function creates a new `4D.CryptoKey` object encapsulating an encryption key pair, based upon the *settings* object parameter. 新規の RSA または ECDSA キーを生成するほか、PEM 形式の既存のキーペアをロードすることができます。

#### *settings*

| プロパティ           | タイプ     | 説明                                 |
| --------------- | ------- | ---------------------------------- |
| [curve](#curve) | text    | ECDSA 曲線名                          |
| [pem](#pem)     | text    | ロードする PEM 形式の暗号化キー                 |
| [size](#size)   | integer | RSA キーのサイズ (ビット単位)                 |
| [type](#type)   | text    | キーのタイプ: "RSA", "ECDSA", "PEM"</li> |


#### *CryptoKey*

戻り値の `CryptoKey` オブジェクトは、暗号化キーペアをカプセル化します。 これは共有オブジェクトのため、複数の 4D プロセスによって同時使用できます。



## .curve

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

**.curve** : Text



Defined only for ECDSA keys: the normalised curve name of the key. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.


## .decrypt()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


**.decrypt**( *message* : Text ; *options* : Object ) : Object
| 引数      | タイプ    |    | 説明                                                |
| ------- | ------ | -- | ------------------------------------------------- |
| message | テキスト   | -> | `options.encodingEncrypted` を使ってデコードし復号するメッセージ文字列 |
| options | オブジェクト | -> | デコーディングオプション                                      |
| 戻り値     | オブジェクト | <- | ステータス                                             |



The `.decrypt()` function decrypts the *message* parameter using the **private** key. 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

#### *options*

| プロパティ             | タイプ  | 説明                                                                                         |
| ----------------- | ---- | ------------------------------------------------------------------------------------------ |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                       |
| encodingEncrypted | text | 復号するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"   |
| encodingDecrypted | text | バイナリの復号メッセージを文字列に変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |


#### *戻り値*

`message` の復号に成功した場合には、success プロパティが `true` に設定された *status* オブジェクトを返します。

| プロパティ   | タイプ        | 説明                                                |
| ------- | ---------- | ------------------------------------------------- |
| success | boolean    | メッセージの復号に成功した場合は true                             |
| result  | text       | options.encodingDecrypted を使って復号およびデコードされたメッセージ   |
| errors  | collection | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。 |


キーまたはアルゴリズムが合致しないなどの理由で *message* の復号に成功しなかった場合、返される `status` オブジェクトの `status.errors` プロパティにはエラーのコレクションが格納されます。


## .encrypt()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


**.encrypt**( *message* : Text ; *options* : Object ) : Text
| 引数      | タイプ    |    | 説明                                                  |
| ------- | ------ | -- | --------------------------------------------------- |
| message | テキスト   | -> | `options.encodingDecrypted` を使ってエンコードし暗号化するメッセージ文字列 |
| options | オブジェクト | -> | エンコーディングオプション                                       |
| 戻り値     | テキスト   | <- | options.encodingEncrypted を使って暗号化およびエンコードされたメッセージ   |

The `.encrypt()` function encrypts the *message* parameter using the **public** key. 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

##### *options*

| プロパティ             | タイプ  | 説明                                                                                                |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------- |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                              |
| encodingEncrypted | text | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"               |
| encodingDecrypted | text | 暗号化するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |


#### *戻り値*

The returned value is an encrypted message.




## .getPrivateKey()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


**.getPrivateKey()** : Text

| 引数  | タイプ  |    | 説明         |
| --- | ---- | -- | ---------- |
| 戻り値 | テキスト | <- | PEM 形式の秘密鍵 |

The `.getPrivateKey()` function  returns the private key of the `CryptoKey` object in PEM format, or an empty string if none is available.

#### *戻り値*

The returned value is the private key.



## .getPublicKey()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


**.getPublicKey( )** : Text
| 引数  | タイプ  |    | 説明         |
| --- | ---- | -- | ---------- |
| 戻り値 | Text | <- | PEM 形式の公開鍵 |


The `.getPublicKey()` function returns the public key of the `CryptoKey` object in PEM format, or an empty string if none is available.

#### *戻り値*

The returned value is the public key.

---
## .pem

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


**.pem** : Text

PEM definition of an encryption key to load. 秘密鍵を渡した場合、RSA または ECDSA の公開鍵は秘密鍵から推定されます。



## .sign()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

.**sign** (*message* : Text ; *options* : Text) : Text
| 引数      | タイプ    |    | 説明                                              |
| ------- | ------ | -- | ----------------------------------------------- |
| message | テキスト   | -> | 署名をするメッセージ                                      |
| options | オブジェクト | -> | 署名オプション                                         |
| 戻り値     | テキスト   | <- | "encoding" オプションに応じて Base64 または Base64URL 形式の署名 |

The `.sign()` function signs the utf8 representation of a *message* string using the `CryptoKey` object keys and provided *options*. `options.encoding` 属性に指定した値に応じて、base64 または base64URL 形式の署名を返します。

`CryptoKey` は有効な **秘密** 鍵を格納していなくてはなりません。

#### *options*

| プロパティ             | タイプ     | 説明                                                                                                                           |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| encodingEncrypted | text    | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                          |
| pss               | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                           |
| encoding          | text    | 戻り値の署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                             |


#### *戻り値*

utf8 形式の *message* 文字列。


## .size

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

**.size** : Integer

Defined only for RSA keys: the size of the key in bits. 通常は 2048 (デフォルト)


## .type

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


**.type** : Text
キーのタイプ: "RSA", "ECDSA", "PEM"<li>"RSA": `settings.size` に指定されたサイズを [.size](#size) として使った、RSA キーペア</li><li>"ECDSA": `settings.curve` に指定された曲線を [.curve](#curve) として用いた、楕円曲線デジタル署名アルゴリズム (Elliptic Curve Digital Signature Algorithm) キーペア ECDSA キーは署名だけに使用されるもので、暗号化には使用できないことに留意してください。</li><li>"PEM": `settings.pem` を [.pem](#pem) として使った、PEM 形式のキーペア


## .verify()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object
| 引数        | タイプ    |    | 説明                                                          |
| --------- | ------ | -- | ----------------------------------------------------------- |
| message   | テキスト   | -> | 署名生成時に使われたメッセージ文字列                                          |
| signature | テキスト   | -> | 検証の対象である、`options.encoding` に応じて Base64 または Base64URL 形式の署名 |
| options   | オブジェクト | -> | 署名オプション                                                     |
| 戻り値       | オブジェクト | <- | 検証ステータス                                                     |

The `.verify()` function verifies the base64 signature against the utf8 representation of *message* using the `CryptoKey` object keys and provided *options*.

`CryptoKey` は有効な **公開** 鍵を格納していなくてはなりません。


#### *options*

| プロパティ    | タイプ     | 説明                                                                                                                           |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash     | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| pss      | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                           |
| encoding | text    | 署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                 |


#### *戻り値*

検証で署名が合致した場合には、`success` プロパティが `true` に設定された `status` オブジェクトを返します。

*message*、キーまたはアルゴリズムが署名と合致しないなどの理由で検証が成功しなかった場合、返される `status` オブジェクトの `status.errors` プロパティにはエラーのコレクションが格納されます。

| プロパティ   | タイプ        | 説明                                                |
| ------- | ---------- | ------------------------------------------------- |
| success | boolean    | 署名がメッセージと合致すれば true                               |
| errors  | collection | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。 |

<style> h2 { background: #d9ebff;}</style>
