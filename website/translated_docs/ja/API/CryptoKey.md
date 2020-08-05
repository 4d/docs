---
id: cryptoClass
title: CryptoKey クラス
---

## 概要

4D ランゲージの `CryptoKey` クラスは、非対称の暗号化キーペアをカプセル化します。

このクラスは `4D` クラスストアより提供されます。

### `cryptoKey` オブジェクトプロパティ

`cryptoKey` オブジェクトは [4D.CryptoKey.new](#4dcryptokeynew) メソッドによってインスタンス化されます。 また、次のプロパティを持ちます (すべて読み取り専用プロパティです):

| プロパティ | 型    | 説明                                                              |
| ----- | ---- | --------------------------------------------------------------- |
| type  | テキスト | キータイプの名称。 例: "ECDSA" または "RSA"。                                 |
| size  | 整数   | RSA キーのみ: キーのサイズ (ビット単位) 例: 2048                                |
| curve | テキスト | ECDSA キーのみ: キーの楕円曲線名。 例: "prime256v1", "secp384r1", "secp521r1" |


### 例題

たとえば ES256 JSON Web Token (JWT) を作成するために新規 ECDSA キーペアを使ってメッセージの署名と検証をおこないます。

```4d
 // 新規 ECDSA キーペアの生成
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // base64 形式で署名を取得
$message:="hello world" 
$signature:=$key.sign($message;New object("hash";"HASH256"))

  // 署名の検証
$status:=$key.verify($message;$signature;New object("hash";"HASH256"))
ASSERT($status.success)
```

## 4D.CryptoKey.new()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details> 

#### 4D.CryptoKey.new(settings) -> keyPair

| 引数       | プロパティ | 型      |    | 説明                                                                                            |
| -------- | ----- | ------ | -- | --------------------------------------------------------------------------------------------- |
| settings |       | オブジェクト | -> | キーペアを生成・ロードするための設定                                                                            |
|          | type  | テキスト   |    | キーのタイプ: "RSA", "ECDSA", "PEM" (後述参照)                                                          |
|          | size  | 整数     |    | RSA キーのサイズ (ビット単位)。 デフォルト値: 2048                                                              |
|          | curve | テキスト   |    | ECDSA 曲線名。 通常、ES256 (デフォルト) の場合は "prime256v1", ES384 の場合は "secp384r1", ES512 の場合は "secp521r1" |
|          | pem   | テキスト   |    | ロードする PEM 形式の暗号化キー。 秘密鍵を渡した場合、RSA または ECDSA の公開鍵は秘密鍵から推定されます。                                 |
|          |       |        |    |                                                                                               |
| keyPair  |       | オブジェクト | <- | 暗号化キーペアをカプセル化したオブジェクト                                                                         |


このメソッドは、`settings` オブジェクト引数に基づいて暗号化キーペアをカプセル化するオブジェクトを新規作成します。 新規の RSA または ECDSA キーを生成するほか、PEM 形式の既存のキーペアをロードすることができます。

`settings` の `type` プロパティには、キーのタイプを指定します。

- "RSA": `settings.size` に指定されたサイズを使って、RSA キーペアを生成します。
- "ECDSA": `settings.curve` に指定された曲線を用いて、楕円曲線デジタル署名アルゴリズム (Elliptic Curve Digital Signature Algorithm) を使ったキーペアを生成します。 ECDSA キーは署名だけに使用されるもので、暗号化には使用できないことに留意してください。
- "PEM": `settings.pem` を使って、PEM 形式のキーペアをロードします。

戻り値の `keyPair` オブジェクトは共有オブジェクトのため、複数の 4D プロセスによって同時使用できます。

## cryptoKey.getPrivateKey()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details> 

#### cryptoKey.getPrivateKey() -> privateKey

| 引数         | プロパティ | 型    |    | 説明         |
| ---------- | ----- | ---- | -- | ---------- |
|            |       |      |    |            |
| privateKey |       | テキスト | <- | PEM 形式の秘密鍵 |


このメソッドは、`cryptoKey` オブジェクトの秘密鍵を PEM 形式で返します。無い場合はからの文字列を返します。

## cryptoKey.getPublicKey()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details> 

#### cryptoKey.getPublicKey() -> publicKey

| 引数        | プロパティ | 型    |    | 説明         |
| --------- | ----- | ---- | -- | ---------- |
|           |       |      |    |            |
| publicKey |       | テキスト | <- | PEM 形式の公開鍵 |


このメソッドは、`cryptoKey` オブジェクトの公開鍵を PEM 形式で返します。無い場合はからの文字列を返します。

## cryptoKey.sign()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details> 

#### cryptoKey.sign(message;options) -> signature

| 引数        | プロパティ    | 型      |    | 説明                                                                                                                              |
| --------- | -------- | ------ | -- | ------------------------------------------------------------------------------------------------------------------------------- |
| message   |          | テキスト   | -> | 署名をするメッセージ                                                                                                                      |
| options   |          | オブジェクト | -> | 署名オプション                                                                                                                         |
|           | hash     | テキスト   |    | 使用する Digest アルゴリズム。 例: "HASH256", "HASH384", "HASH512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
|           | pss      | ブール    |    | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                              |
|           | encoding | テキスト   |    | 戻り値の署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                |
|           |          |        |    |                                                                                                                                 |
| signature |          | テキスト   | <- | "encoding" オプションに応じて、Base64 あるいは Base64URL でエンコードされた署名。                                                                         |


このメソッドは、`cryptoKey` オブジェクトキーおよび指定された `options` を使って、utf8 形式の `message` 文字列を署名します。 It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed.

The `cryptoKey` must contain a valid **private** key.

## cryptoKey.verify()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details> 

#### cryptoKey.verify(message;signature;options) -> status

| 引数        | プロパティ    | 型          |    | 説明                                                                                                                              |
| --------- | -------- | ---------- | -- | ------------------------------------------------------------------------------------------------------------------------------- |
| message   |          | テキスト       | -> | Message string that was used to produce the signature                                                                           |
| signature |          | テキスト       | -> | Signature to verify, in Base64 or Base64URL representation, depending on "encoding" option                                      |
| options   |          | オブジェクト     | -> | 署名オプション                                                                                                                         |
|           | hash     | テキスト       |    | 使用する Digest アルゴリズム。 例: "HASH256", "HASH384", "HASH512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
|           | pss      | ブール        |    | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 Pass `true` when verifying a JWT for PS@ algorithm                                   |
|           | encoding | テキスト       |    | Representation of provided signature. Possible values are "Base64" or "Base64URL". デフォルト値: "Base64"                             |
|           |          |            |    |                                                                                                                                 |
| status    |          | オブジェクト     | <- | Result of the verification                                                                                                      |
|           | success  | ブール        |    | True if the signature matches the message                                                                                       |
|           | errors   | collection |    | If `success` is `false`, may contain a collection of errors                                                                     |


This method verifies the base64 signature against the utf8 representation of `message` using the `cryptoKey` object keys and provided `options`.

The method returns a `status` object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches).

In case the signature couldn't be verified because it was not signed with the same `message`, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

The `cryptoKey` must contain a valid **public** key.

## cryptoKey.encrypt()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details> 

#### cryptoKey.encrypt(message;options) -> result

| 引数      | プロパティ             | 型      |    | 説明                                                                                                                                                        |
| ------- | ----------------- | ------ | -- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| message |                   | テキスト   | -> | Message string to be encoded using options.encodingDecrypted and encrypted.                                                                               |
| options |                   | オブジェクト | -> | Encoding options                                                                                                                                          |
|         | hash              | テキスト   |    | 使用する Digest アルゴリズム。 例: "HASH256", "HASH384", "HASH512"。                                                                                                   |
|         | encodingEncrypted | テキスト   |    | Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". デフォルト値: "Base64"                           |
|         | encodingDecrypted | テキスト   |    | Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8". |
|         |                   |        |    |                                                                                                                                                           |
| result  |                   | テキスト   | <- | Message encrypted and encoded using the `options.encodingEncrypted`                                                                                       |


This method encrypts the `message` parameter using the **public** key. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

## cryptoKey.decrypt()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details> 

#### cryptoKey.decrypt(message;options) -> status

| 引数      | プロパティ             | 型          |    | 説明                                                                                                                                           |
| ------- | ----------------- | ---------- | -- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| message |                   | テキスト       | -> | Message string to be decoded using options.encodingEncrypted and decrypted.                                                                  |
| options |                   | オブジェクト     | -> | Decoding options                                                                                                                             |
|         | hash              | テキスト       |    | 使用する Digest アルゴリズム。 例: "HASH256", "HASH384", "HASH512"。                                                                                      |
|         | encodingEncrypted | テキスト       |    | Encoding used to convert the `message` parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". デフォルト値: "Base64" |
|         | encodingDecrypted | テキスト       |    | Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".  |
|         |                   |            |    |                                                                                                                                              |
| status  |                   | オブジェクト     | <- | Result                                                                                                                                       |
|         | success           | ブール        |    | True if the message has been successfully decrypted                                                                                          |
|         | result            | テキスト       |    | Message decrypted and decoded using the `options.encodingDecrypted`                                                                          |
|         | errors            | collection |    | If `success` is `false`, may contain a collection of errors                                                                                  |


This method decrypts the `message` parameter using the **private** key. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

The method returns a status object with `success` property set to `true` if the `message` could be successfully decrypted.

In case the `message` couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.