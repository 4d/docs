---
id: cryptoClass
title: CryptoKey
---


4D ランゲージの `CryptoKey` クラスは、非対称の暗号化キーペアをカプセル化します。

このクラスは `4D` クラスストアより提供されます。

### 例題

The following sample code signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token.

```4d
 // Generate a new ECDSA key pair
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Get signature as base64
$message:="hello world"
$signature:=$key.sign($message;New object("hash";"SHA256"))

  // Verify signature
$status:=$key.verify($message;$signature;New object("hash";"SHA256"))
ASSERT($status.success)
```


### Summary
|                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->|
| [<!-- INCLUDE #cryptokey.curve.Syntax -->](#curve)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.curve.Summary --> |
| [<!-- INCLUDE #cryptokey.decrypt().Syntax -->](#decrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.decrypt().Summary -->|
| [<!-- INCLUDE #cryptokey.encrypt().Syntax -->](#encrypt)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.encrypt().Summary -->|
| [<!-- INCLUDE #cryptokey.getPrivateKey().Syntax -->](#getprivatekey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.getPrivateKey().Summary -->|
| [<!-- INCLUDE #cryptokey.getPublicKey().Syntax -->](#getpublickey)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.getPublicKey().Summary -->|
| [<!-- INCLUDE #cryptokey.sign().Syntax -->](#sign)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.sign().Summary --> |
| [<!-- INCLUDE #cryptokey.size.Syntax -->](#size)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.size.Summary --> |
| [<!-- INCLUDE #cryptokey.type.Syntax -->](#type)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.type.Summary --> |
| [<!-- INCLUDE #cryptokey.verify().Syntax -->](#verify)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #cryptokey.verify().Summary -->|









## 4D.CryptoKey.new()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->
| 参照       | タイプ          |    | 説明                                                                     |
| -------- | ------------ | -- | ---------------------------------------------------------------------- |
| settings | オブジェクト       | -> | キーペアを生成・ロードするための設定                                                     |
| result   | 4D.CryptoKey | <- | Object encapsulating an encryption key pair|<!-- END REF -->


|


The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. 新規の RSA または ECDSA キーを生成するほか、PEM 形式の既存のキーペアをロードすることができます。

#### *settings*

| プロパティ           | タイプ     | 説明                                             |
| --------------- | ------- | ---------------------------------------------- |
| [curve](#curve) | text    | Name of ECDSA curve                            |
| [pem](#pem)     | text    | PEM definition of an encryption key to load    |
| [size](#size)   | integer | Size of RSA key in bits                        |
| [type](#type)   | text    | Type of the key: "RSA", "ECDSA", or "PEM"</li> |


#### *cryptoKey*

The returned `cryptoKey` object encapsulates an encryption key pair. It is a shared object and can therefore be used by multiple 4D processes simultaneously.



<!-- REF cryptokey.curve -->
## .curve

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #cryptokey.curve.Syntax -->**.curve** : Text<!-- END REF -->




Defined only for ECDSA keys: the <!-- REF #cryptokey.curve.Summary -->normalised curve name of the key. <!-- END REF -->
Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512.
<!-- END REF -->


<!-- REF cryptokey.decrypt().Desc -->
## .decrypt()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


<!-- REF #cryptokey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #cryptokey.decrypt().Params -->
| 参照      | タイプ    |    | 説明                                                                            |
| ------- | ------ | -- | ----------------------------------------------------------------------------- |
| message | テキスト   | -> | Message string to be decoded using `options.encodingEncrypted` and decrypted. |
| options | オブジェクト | -> | デコーディングオプション                                                                  |
| 戻り値     | オブジェクト | <- | ステータス                                                                         |
<!-- END REF -->


The `.decrypt()` function <!-- REF #cryptokey.decrypt().Summary -->decrypts the *message* parameter using the **private** key<!-- END REF -->. 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

#### *options*

| プロパティ             | タイプ  | 説明                                                                                         |
| ----------------- | ---- | ------------------------------------------------------------------------------------------ |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                       |
| encodingEncrypted | text | 復号するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"   |
| encodingDecrypted | text | バイナリの復号メッセージを文字列に変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |


#### *戻り値*

The function returns a status object with `success` property set to `true` if the *message* could be successfully decrypted.

| プロパティ   | タイプ        | 説明                                                |
| ------- | ---------- | ------------------------------------------------- |
| success | boolean    | メッセージの復号に成功した場合は true                             |
| result  | text       | options.encodingDecrypted を使って復号およびデコードされたメッセージ   |
| errors  | collection | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。 |

In case the *message* couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.
<!-- END REF -->


<!-- REF cryptokey.encrypt().Desc -->
## .encrypt()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


<!-- REF #cryptokey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #cryptokey.encrypt().Params -->
| 参照      | タイプ    |    | 説明                                                                            |
| ------- | ------ | -- | ----------------------------------------------------------------------------- |
| message | テキスト   | -> | Message string to be encoded using `options.encodingDecrypted` and encrypted. |
| options | オブジェクト | -> | エンコーディングオプション                                                                 |
| 戻り値     | テキスト   | <- | options.encodingEncrypted を使って暗号化およびエンコードされたメッセージ                             |
<!-- END REF -->

The `.encrypt()` function <!-- REF #cryptokey.encrypt().Summary -->encrypts the *message* parameter using the **public** key<!-- END REF -->. 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

##### *options*

| プロパティ             | タイプ  | 説明                                                                                                |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------- |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                              |
| encodingEncrypted | text | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"               |
| encodingDecrypted | text | 暗号化するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |


#### *戻り値*

The returned value is an encrypted message.
<!-- END REF -->




<!-- REF cryptokey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


<!-- REF #cryptokey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->


<!-- REF #cryptokey.getPrivateKey().Params -->
| 参照  | タイプ  |    | 説明         |
| --- | ---- | -- | ---------- |
| 戻り値 | テキスト | <- | PEM 形式の秘密鍵 |
<!-- END REF -->

The `.getPrivateKey()` function  <!-- REF #cryptokey.getPrivateKey().Summary -->returns the private key of the `cryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *戻り値*

The returned value is the private key.
<!-- END REF -->



<!-- REF cryptokey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


<!-- REF #cryptokey.getPublicKey().Syntax -->**.getPublicKey( )** : Text<!-- END REF -->

<!-- REF #cryptokey.getPublicKey().Params -->
| 参照  | タイプ  |    | 説明         |
| --- | ---- | -- | ---------- |
| 戻り値 | テキスト | <- | PEM 形式の公開鍵 |
<!-- END REF -->


The `.getPublicKey()` function <!-- REF #cryptokey.getPublicKey().Summary -->returns the public key of the `cryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *戻り値*

The returned value is the public key.
<!-- END REF -->

---
<!-- REF cryptokey.pem.Desc -->
## .pem

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


<!-- REF #cryptokey.pem.Syntax -->**.pem** : Text<!-- END REF -->


<!-- REF #cryptokey.pem.Summary -->PEM definition of an encryption key to load<!-- END REF -->. 秘密鍵を渡した場合、RSA または ECDSA の公開鍵は秘密鍵から推定されます。
<!-- END REF -->



<!-- REF cryptokey.sign().Desc -->
## .sign()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #cryptokey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->

<!-- REF #cryptokey.sign().Params -->
| 参照      | タイプ    |    | 説明                                                                              |
| ------- | ------ | -- | ------------------------------------------------------------------------------- |
| message | テキスト   | -> | 署名をするメッセージ                                                                      |
| options | オブジェクト | -> | 署名オプション                                                                         |
| 戻り値     | テキスト   | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option |
<!-- END REF -->

The `.sign()` function <!-- REF #cryptokey.sign().Summary -->signs the utf8 representation of a *message* string<!-- END REF --> using the `cryptoKey` object keys and provided *options*. `options.encoding` 属性に指定した値に応じて、base64 または base64URL 形式の署名を返します。

`cryptoKey` は有効な **秘密** 鍵を格納していなくてはなりません。

#### *options*

| プロパティ             | タイプ     | 説明                                                                                                                           |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| encodingEncrypted | text    | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                          |
| pss               | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                           |
| encoding          | text    | ERepresentation to be used for result signature. 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                            |


#### *戻り値*

The utf8 representation of the *message* string.
<!-- END REF -->


<!-- REF cryptokey.size -->
## .size
<!-- END REF -->

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #cryptokey.size.Syntax -->**.size** : Integer<!-- END REF -->


Defined only for RSA keys: <!-- REF #cryptokey.size.Summary -->the size of the key in bits<!-- END REF -->. Typically 2048 (default).


<!-- REF cryptokey.type -->
## .type
<!-- END REF -->

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>


<!-- REF #cryptokey.type.Syntax -->**.type** : Text<!-- END REF -->


<!-- REF #cryptokey.type.Summary -->Name of the key type - "RSA", "ECDSA", "PEM"<!-- END REF --><li>"RSA": an RSA key pair, using `settings.size` as [.size](#size).</li><li>"ECDSA": an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as [.curve](#curve). ECDSA キーは署名だけに使用されるもので、暗号化には使用できないことに留意してください。</li><li>"PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).


<!-- REF cryptokey.verify().Desc -->
## .verify()

<details><summary>履歴</summary>
| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #cryptokey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #cryptokey.verify().Params -->
| 参照        | タイプ    |    | 説明                                                                                                |
| --------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message   | テキスト   | -> | 署名生成時に使われたメッセージ文字列                                                                                |
| signature | テキスト   | -> | Signature to verify, in Base64 or Base64URL representation, depending on `options.encoding` value |
| options   | オブジェクト | -> | 署名オプション                                                                                           |
| 戻り値       | オブジェクト | <- | Status of the verification                                                                        |
<!-- END REF -->

The `.verify()` function <!-- REF #cryptokey.verify().Summary -->verifies the base64 signature against the utf8 representation of *message*<!-- END REF --> using the `cryptoKey` object keys and provided *options*.

`cryptoKey` は有効な **公開** 鍵を格納していなくてはなりません。


#### *options*

| プロパティ    | タイプ     | 説明                                                                                                                           |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash     | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| pss      | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                           |
| encoding | text    | 署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                 |


#### *戻り値*

The function returns a status object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same *message*, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

| プロパティ   | タイプ        | 説明                                                |
| ------- | ---------- | ------------------------------------------------- |
| success | boolean    | 署名がメッセージと合致すれば true                               |
| errors  | collection | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。 |
<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
