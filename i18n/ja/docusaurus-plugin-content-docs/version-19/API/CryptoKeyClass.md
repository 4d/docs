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

|                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #4D.CryptoKey.new().Summary -->|
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.curve.Summary --> |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.decrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.encrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPrivateKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.getPublicKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.sign().Summary --> |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.size.Summary --> |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.type.Summary --> |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #CryptoKey.verify().Summary -->|

## 4D.CryptoKey.new()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #4D.CryptoKey.new().Syntax -->
**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->

<!-- REF #4D.CryptoKey.new().Params -->
| 引数       | タイプ          |    | 詳細                                               |
| -------- | ------------ | -- | ------------------------------------------------ |
| settings | Object       | -> | キーペアを生成・ロードするための設定                               |
| result   | 4D.CryptoKey | <- | 暗号化キーペアをカプセル化したオブジェクト|<!-- END REF -->

|

The `4D.CryptoKey.new()` function <!-- REF #4D.CryptoKey.new().Summary -->creates a new `4D.CryptoKey` object encapsulating an encryption key pair<!-- END REF -->, based upon the *settings* object parameter. 新規の RSA または ECDSA キーを生成するほか、PEM 形式の既存のキーペアをロードすることができます。

#### *settings*

| プロパティ           | タイプ  | 詳細                            |
| --------------- | ---- | ----------------------------- |
| [curve](#curve) | text | ECDSA 曲線名                     |
| [pem](#pem)     | text | ロードする PEM 形式の暗号化キー            |
| [size](#size)   | 整数   | RSA キーのサイズ (ビット単位)            |
| [type](#type)   | text | キーのタイプ: "RSA", "ECDSA", "PEM" |

#### *CryptoKey*

戻り値の `CryptoKey` オブジェクトは、暗号化キーペアをカプセル化します。 これは共有オブジェクトのため、複数の 4D プロセスによって同時使用できます。

<!-- REF CryptoKey.curve -->
## .curve

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.curve.Syntax -->
**.curve** : Text<!-- END REF -->

Defined only for ECDSA keys: the <!-- REF #CryptoKey.curve.Summary -->normalised curve name of the key<!-- END REF -->. 通常、ES256 (デフォルト) の場合は "prime256v1", ES384 の場合は "secp384r1", ES512 の場合は "secp521r1"。
<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->
## .decrypt()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.decrypt().Syntax -->
**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->

<!-- REF #CryptoKey.decrypt().Params -->
| 引数      | タイプ    |    | 詳細                                                |
| ------- | ------ | -- | ------------------------------------------------- |
| message | テキスト   | -> | `options.encodingEncrypted` を使ってデコードし復号するメッセージ文字列 |
| options | Object | -> | デコーディングオプション                                      |
| Result  | Object | <- | Status|<!-- END REF -->

|

The `.decrypt()` function <!-- REF #CryptoKey.decrypt().Summary -->decrypts the *message* parameter using the **private** key<!-- END REF -->. 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

#### *options*

| プロパティ             | タイプ  | 詳細                                                                                         |
| ----------------- | ---- | ------------------------------------------------------------------------------------------ |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                       |
| encodingEncrypted | text | 復号するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"   |
| encodingDecrypted | text | バイナリの復号メッセージを文字列に変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |

#### *Result*

`message` の復号に成功した場合には、success プロパティが `true` に設定された *status* オブジェクトを返します。

| プロパティ   | タイプ        | 詳細                                                |
| ------- | ---------- | ------------------------------------------------- |
| success | boolean    | メッセージの復号に成功した場合は true                             |
| result  | text       | options.encodingDecrypted を使って復号およびデコードされたメッセージ   |
| errors  | collection | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。 |

キーまたはアルゴリズムが合致しないなどの理由で *message* の復号に成功しなかった場合、返される `status` オブジェクトの `status.errors` プロパティにはエラーのコレクションが格納されます。
<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.encrypt().Syntax -->
**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->

<!-- REF #CryptoKey.encrypt().Params -->
| 引数      | タイプ    |    | 詳細                                                                           |
| ------- | ------ | -- | ---------------------------------------------------------------------------- |
| message | テキスト   | -> | `options.encodingDecrypted` を使ってエンコードし暗号化するメッセージ文字列                          |
| options | Object | -> | エンコーディングオプション                                                                |
| Result  | テキスト   | <- | options.encodingEncrypted を使って暗号化およびエンコードされたメッセージ|<!-- END REF -->

|

The `.encrypt()` function <!-- REF #CryptoKey.encrypt().Summary -->encrypts the *message* parameter using the **public** key<!-- END REF -->. 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

##### *options*

| プロパティ             | タイプ  | 詳細                                                                                                |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------- |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                              |
| encodingEncrypted | text | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"               |
| encodingDecrypted | text | 暗号化するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |

#### *Result*

戻り値は暗号化されたメッセージです。
<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->
**.getPrivateKey()** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPrivateKey().Params -->
| 引数     | タイプ  |    | 詳細                                    |
| ------ | ---- | -- | ------------------------------------- |
| Result | テキスト | <- | PEM 形式の秘密鍵|<!-- END REF -->

|

The `.getPrivateKey()` function  <!-- REF #CryptoKey.getPrivateKey().Summary -->returns the private key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Result*

戻り値は秘密鍵です。
<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->
**.getPublicKey( )** : Text<!-- END REF -->

<!-- REF #CryptoKey.getPublicKey().Params -->
| 引数     | タイプ  |    | 詳細                                    |
| ------ | ---- | -- | ------------------------------------- |
| Result | テキスト | <- | PEM 形式の公開鍵|<!-- END REF -->

|

The `.getPublicKey()` function <!-- REF #CryptoKey.getPublicKey().Summary -->returns the public key of the `CryptoKey` object<!-- END REF --> in PEM format, or an empty string if none is available.

#### *Result*

戻り値は公開鍵です。
<!-- END REF -->

---
<!-- REF CryptoKey.pem.Desc -->
## .pem

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.pem.Syntax -->
**.pem** : Text<!-- END REF -->

<!-- REF #CryptoKey.pem.Summary -->
ロードする PEM 形式の暗号化キー。 秘密鍵を渡した場合、RSA または ECDSA の公開鍵は秘密鍵から推定されます。 <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->
## .sign()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.sign().Syntax -->
.**sign** (*message* : Text ; *options* : Text) : Text<!-- END REF -->

<!-- REF #CryptoKey.sign().Params -->
| 引数      | タイプ    |    | 詳細                                                                                                         |
| ------- | ------ | -- | ---------------------------------------------------------------------------------------------------------- |
| message | テキスト   | -> | 署名をするメッセージ                                                                                                 |
| options | Object | -> | 署名オプション                                                                                                    |
| Result  | テキスト   | <- | Signature in Base64 or Base64URL representation, depending on "encoding" option|<!-- END REF -->

|

The `.sign()` function <!-- REF #CryptoKey.sign().Summary -->signs the utf8 representation of a *message* string<!-- END REF --> using the `CryptoKey` object keys and provided *options*. `options.encoding` 属性に指定した値に応じて、base64 または base64URL 形式の署名を返します。

`CryptoKey` は有効な **秘密** 鍵を格納していなくてはなりません。

#### *options*

| プロパティ             | タイプ     | 詳細                                                                                                                           |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| encodingEncrypted | text    | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                          |
| pss               | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                           |
| encoding          | text    | 戻り値の署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                             |

#### *Result*

utf8 形式の *message* 文字列。
<!-- END REF -->

<!-- REF CryptoKey.size -->
## .size
<!-- END REF -->

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.size.Syntax -->
**.size** : Integer<!-- END REF -->

Defined only for RSA keys: <!-- REF #CryptoKey.size.Summary -->the size of the key in bits<!-- END REF -->. .

<!-- REF CryptoKey.type -->
## .type
<!-- END REF -->

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.type.Syntax -->
**.type** : Text<!-- END REF -->

<!-- REF #CryptoKey.type.Summary -->
キーのタイプ: "RSA", "ECDSA", "PEM" <!-- END REF -->.<li>"RSA": `settings.size` に指定されたサイズを [.size](#size) として使った、RSA キーペア</li><li>"ECDSA": `settings.curve` に指定された曲線を [.curve](#curve) として用いた、楕円曲線デジタル署名アルゴリズム (Elliptic Curve Digital Signature Algorithm) キーペア ECDSA キーは署名だけに使用されるもので、暗号化には使用できないことに留意してください。</li><li>"PEM": a key pair definition in PEM format, using `settings.pem` as [.pem](#pem).</li><!-- END REF -->

<!-- REF CryptoKey.verify().Desc -->
## .verify()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.verify().Syntax -->
**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->

<!-- REF #CryptoKey.verify().Params -->
| 引数        | タイプ    |    | 詳細                                                          |
| --------- | ------ | -- | ----------------------------------------------------------- |
| message   | テキスト   | -> | 署名生成時に使われたメッセージ文字列                                          |
| signature | テキスト   | -> | 検証の対象である、`options.encoding` に応じて Base64 または Base64URL 形式の署名 |
| options   | Object | -> | 署名オプション                                                     |
| Result    | Object | <- | 検証ステータス|<!-- END REF -->

|

The `.verify()` function <!-- REF #CryptoKey.verify().Summary -->verifies the base64 signature against the utf8 representation of *message*<!-- END REF --> using the `CryptoKey` object keys and provided *options*.

`CryptoKey` は有効な **公開** 鍵を格納していなくてはなりません。

#### *options*

| プロパティ    | タイプ     | 詳細                                                                                                                           |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash     | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| pss      | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                           |
| encoding | text    | 署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                 |

#### *Result*

検証で署名が合致した場合には、`success` プロパティが `true` に設定された `status` オブジェクトを返します。

*message*、キーまたはアルゴリズムが署名と合致しないなどの理由で検証が成功しなかった場合、返される `status` オブジェクトの `status.errors` プロパティにはエラーのコレクションが格納されます。

| プロパティ   | タイプ        | 詳細                                                                                     |
| ------- | ---------- | -------------------------------------------------------------------------------------- |
| success | boolean    | 署名がメッセージと合致すれば true                                                                    |
| errors  | collection | If `success` is `false`, may contain a collection of errors|<!-- END REF -->
|
