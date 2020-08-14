---
id: cryptoClass
title: CryptoKey クラス
---

## 概要

4D ランゲージの `CryptoKey` クラスは、非対称の暗号化キーペアをカプセル化します。

このクラスは `4D` クラスストアより提供されます。

### `cryptoKey` オブジェクトプロパティ

`cryptoKey` オブジェクトは [4D.CryptoKey.new](#4dcryptokeynew) メソッドによってインスタンス化されます。 また、次のプロパティを持ちます (すべて読み取り専用プロパティです):

| プロパティ | 型       | 説明                                                              |
| ----- | ------- | --------------------------------------------------------------- |
| type  | text    | キータイプの名称。 例: "ECDSA" または "RSA"。                                 |
| size  | integer | RSA キーのみ: キーのサイズ (ビット単位) 例: 2048                                |
| curve | text    | ECDSA キーのみ: キーの楕円曲線名。 例: "prime256v1", "secp384r1", "secp521r1" |

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

| 引数       | プロパティ | 型       |    | 説明                                                                                            |
| -------- | ----- | ------- | -- | --------------------------------------------------------------------------------------------- |
| settings |       | オブジェクト  | -> | キーペアを生成・ロードするための設定                                                                            |
|          | type  | text    |    | キーのタイプ: "RSA", "ECDSA", "PEM" (後述参照)                                                          |
|          | size  | integer |    | RSA キーのサイズ (ビット単位)。 デフォルト値: 2048                                                              |
|          | curve | text    |    | ECDSA 曲線名。 通常、ES256 (デフォルト) の場合は "prime256v1", ES384 の場合は "secp384r1", ES512 の場合は "secp521r1" |
|          | pem   | text    |    | ロードする PEM 形式の暗号化キー。 秘密鍵を渡した場合、RSA または ECDSA の公開鍵は秘密鍵から推定されます。                                 |
|          |       |         |    |                                                                                               |
| keyPair  |       | オブジェクト  | <- | 暗号化キーペアをカプセル化したオブジェクト                                                                         |

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
| privateKey |       | text | <- | PEM 形式の秘密鍵 |

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
| publicKey |       | text | <- | PEM 形式の公開鍵 |

このメソッドは、`cryptoKey` オブジェクトの公開鍵を PEM 形式で返します。無い場合はからの文字列を返します。


## cryptoKey.sign()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

#### cryptoKey.sign(message;options) -> signature

| 引数        | プロパティ    | 型       |    | 説明                                                                                                                              |
| --------- | -------- | ------- | -- | ------------------------------------------------------------------------------------------------------------------------------- |
| message   |          | text    | -> | 署名をするメッセージ                                                                                                                      |
| options   |          | オブジェクト  | -> | 署名オプション                                                                                                                         |
|           | hash     | text    |    | 使用する Digest アルゴリズム。 例: "HASH256", "HASH384", "HASH512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
|           | pss      | boolean |    | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                              |
|           | encoding | text    |    | 戻り値の署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                |
|           |          |         |    |                                                                                                                                 |
| signature |          | text    | <- | "encoding" オプションに応じて、Base64 あるいは Base64URL でエンコードされた署名。                                                                         |

このメソッドは、`cryptoKey` オブジェクトキーおよび指定された `options` を使って、utf8 形式の `message` 文字列を署名します。 `options.encoding` 属性に指定した値に応じて、base64 または base64URL 形式の署名を返します。

`cryptoKey` は有効な **秘密** 鍵を格納していなくてはなりません。

## cryptoKey.verify()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

#### cryptoKey.verify(message;signature;options) -> status

| 引数        | プロパティ    | 型       |    | 説明                                                                                                                              |
| --------- | -------- | ------- | -- | ------------------------------------------------------------------------------------------------------------------------------- |
| message   |          | text    | -> | 署名生成時に使われたメッセージ文字列                                                                                                              |
| signature |          | text    | -> | 検証の対象である、"encoding" オプションに応じて Base64 または Base64URL 形式の署名                                                                        |
| options   |          | オブジェクト  | -> | 署名オプション                                                                                                                         |
|           | hash     | text    |    | 使用する Digest アルゴリズム。 例: "HASH256", "HASH384", "HASH512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
|           | pss      | boolean |    | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                              |
|           | encoding | text    |    | 署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                    |
|           |          |         |    |                                                                                                                                 |
| status    |          | オブジェクト  | <- | 検証の結果                                                                                                                           |
|           | success  | boolean |    | 署名がメッセージと合致すれば true                                                                                                             |
|           | errors   | コレクション  |    | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。                                                                               |

このメソッドは、`cryptoKey` オブジェクトキーおよび指定された `options` を使って、utf8 形式の `message` 文字列の署名を検証します。

検証で署名が合致した場合には、`success` プロパティが `true` に設定された `status` オブジェクトを返します。

`message`、キーまたはアルゴリズムが署名と合致しないなどの理由で検証が成功しなかった場合、返される `status` オブジェクトの `status.errors` プロパティにはエラーのコレクションが格納されます。

`cryptoKey` は有効な **公開** 鍵を格納していなくてはなりません。

## cryptoKey.encrypt()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

#### cryptoKey.encrypt(message;options) -> result

| 引数      | プロパティ             | 型      |    | 説明                                                                                                |
| ------- | ----------------- | ------ | -- | ------------------------------------------------------------------------------------------------- |
| message |                   | text   | -> | options.encodingDecrypted を使ってエンコードし暗号化するメッセージ文字列                                                 |
| options |                   | オブジェクト | -> | エンコーディングオプション                                                                                     |
|         | hash              | text   |    | 使用する Digest アルゴリズム。 例: "HASH256", "HASH384", "HASH512"。                                           |
|         | encodingEncrypted | text   |    | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"               |
|         | encodingDecrypted | text   |    | 暗号化するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |
|         |                   |        |    |                                                                                                   |
| result  |                   | text   | <- | options.encodingEncrypted を使って暗号化およびエンコードされたメッセージ                                                 |

このメソッドは **公開** 鍵を使って `message` を暗号化します。 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。



## cryptoKey.decrypt()

<details><summary>履歴</summary>

| バージョン  | 内容 |
| ------ | -- |
| v18 R4 | 追加 |
</details>

#### cryptoKey.decrypt(message;options) -> status

| 引数      | プロパティ             | 型       |    | 説明                                                                                         |
| ------- | ----------------- | ------- | -- | ------------------------------------------------------------------------------------------ |
| message |                   | text    | -> | options.encodingEncrypted を使ってデコードし復号するメッセージ文字列                                            |
| options |                   | オブジェクト  | -> | デコーディングオプション                                                                               |
|         | hash              | text    |    | 使用する Digest アルゴリズム。 例: "HASH256", "HASH384", "HASH512"。                                    |
|         | encodingEncrypted | text    |    | 復号するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"   |
|         | encodingDecrypted | text    |    | バイナリの復号メッセージを文字列に変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |
|         |                   |         |    |                                                                                            |
| status  |                   | オブジェクト  | <- | 戻り値                                                                                        |
|         | success           | boolean |    | メッセージの復号に成功した場合は true                                                                      |
|         | result            | text    |    | options.encodingDecrypted を使って復号およびデコードされたメッセージ                                            |
|         | errors            | コレクション  |    | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。                                          |

このメソッドは **秘密** 鍵を使って `message` を復号します。 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

`message` の復号に成功した場合には、success プロパティが `true` に設定された `status` オブジェクトを返します。

キーまたはアルゴリズムが合致しないなどの理由で `message` の復号に成功しなかった場合、返される `status` オブジェクトの `status.errors` プロパティにはエラーのコレクションが格納されます。

