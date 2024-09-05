---
id: CryptoKeyClass
title: CryptoKey
---


4D ランゲージの `CryptoKey` クラスは、非対称の暗号化キーペアをカプセル化します。

このクラスは `4D` クラスストアより提供されます。

:::info こちらもご覧ください

このクラスの包括的な概要については、[**CryptoKey: 暗号化、復号化、署名、検証！**](https://blog.4d.com/ja/cryptokey-encrypt-decrypt-sign-and-verify/) ブログ記事を参照ください。

:::

### 概要

|                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #4D.CryptoKey.new().Syntax -->](#4dcryptokeynew)<br/><!-- INCLUDE #4D.CryptoKey.new().Summary -->|
| [<!-- INCLUDE #CryptoKey.curve.Syntax -->](#curve)<br/><!-- INCLUDE #CryptoKey.curve.Summary --> |
| [<!-- INCLUDE #CryptoKey.decrypt().Syntax -->](#decrypt)<br/><!-- INCLUDE #CryptoKey.decrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.encrypt().Syntax -->](#encrypt)<br/><!-- INCLUDE #CryptoKey.encrypt().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPrivateKey().Syntax -->](#getprivatekey)<br/><!-- INCLUDE #CryptoKey.getPrivateKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.getPublicKey().Syntax -->](#getpublickey)<br/><!-- INCLUDE #CryptoKey.getPublicKey().Summary -->|
| [<!-- INCLUDE #CryptoKey.sign().Syntax -->](#sign)<br/><!-- INCLUDE #CryptoKey.sign().Summary --> |
| [<!-- INCLUDE #CryptoKey.size.Syntax -->](#size)<br/><!-- INCLUDE #CryptoKey.size.Summary --> |
| [<!-- INCLUDE #CryptoKey.type.Syntax -->](#type)<br/><!-- INCLUDE #CryptoKey.type.Summary --> |
| [<!-- INCLUDE #CryptoKey.verify().Syntax -->](#verify)<br/><!-- INCLUDE #CryptoKey.verify().Summary -->|

## 4D.CryptoKey.new()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #4D.CryptoKey.new().Syntax -->**4D.CryptoKey.new**( *settings* : Object ) : 4D.CryptoKey<!-- END REF -->


<!-- REF #4D.CryptoKey.new().Params -->
| 引数       | 型            |    | 説明                    |
| -------- | ------------ | -- | --------------------- |
| settings | オブジェクト       | -> | キーペアを生成・ロードするための設定    |
| 戻り値      | 4D.CryptoKey | <- | 暗号化キーペアをカプセル化したオブジェクト |
<!-- END REF -->

`4D.CryptoKey.new()` 関数は、 <!-- REF #4D.CryptoKey.new().Summary -->暗号化キーペアをカプセル化する `4D.CryptoKey` オブジェクトを新規作成します<!-- END REF -->。この暗号化キーペアは *settings* オブジェクト引数に基づきます。 新規の RSA または ECDSA キーを生成するほか、PEM 形式の既存のキーペアをロードすることができます。

#### *settings*

| プロパティ           | 型       | 説明                                                                                           |
| --------------- | ------- | -------------------------------------------------------------------------------------------- |
| [type](#type)   | text    | 作成するキーのタイプを定義します: <li>"RSA": [.size](#size) に指定されたサイズを使って、RSA キーペアを生成します。</li><li>"ECDSA": [.curve](#curve) に指定された曲線を用いて、楕円曲線デジタル署名アルゴリズム (Elliptic Curve Digital Signature Algorithm) を使ったキーペアを生成します。 ECDSA キーは署名だけに使用されるもので、暗号化には使用できないことに留意してください。</li><li>"PEM": [.pem](#pem) を使って、PEM 形式のキーペアをロードします。</li> |
| [curve](#curve) | text    | ECDSA 曲線名                                                                                    |
| [pem](#pem)     | text    | ロードする PEM 形式の暗号化キー                                                                           |
| [size](#size)   | integer | RSA キーのサイズ (ビット単位)                                                                           |


#### *CryptoKey*

戻り値の `CryptoKey` オブジェクトは、暗号化キーペアをカプセル化します。 これは共有オブジェクトのため、複数の 4D プロセスによって同時使用できます。

#### 例題 1

メッセージが秘密鍵で署名され、その署名は対応する公開鍵で検証されます。 以下のコードは、簡単なメッセージの署名を作成し、検証するものです。

- Bob側:

```4d
// メッセージを作成します
$message:="hello world"
Folder(fk desktop folder).file("message.txt").setText($message)

// キーを作成します
$type:=New object("type";"RSA")
$key:=4D.CryptoKey.new($type)

// 公開鍵を取得して保存します
Folder(fk desktop folder).file("public.pem").setText($key.getPublicKey())

// 署名を base64 形式で取得して保存します
Folder(fk desktop folder).file("signature").setText($key.sign($message;$type))

/*Bob はメッセージと公開鍵、署名を Alice に送信します*/
```

- Alice側:

```4d
// メッセージと公開鍵、署名を取得します
$message:=Folder(fk desktop folder).file("message.txt").getText()
$publicKey:=Folder(fk desktop folder).file("public.pem").getText()
$signature:=Folder(fk desktop folder).file("signature").getText()

// キーを作成します 
$type:=New object("type";"PEM";"pem";$publicKey)
$key:=4D.CryptoKey.new($type)

// 署名を検証します
If ($key.verify($message;$signature;$type).success)
// 署名は有効です

End if
```

#### 例題 2

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





<!-- REF CryptoKey.curve -->
## .curve

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.curve.Syntax -->**.curve** : Text<!-- END REF -->


ECDSA キーのみ: <!-- REF #CryptoKey.curve.Summary -->キーの楕円曲線名<!-- END REF -->. 通常、ES256 (デフォルト) の場合は "prime256v1"、ES384 の場合は "secp384r1"、ES512 の場合は "secp521r1"。
<!-- END REF -->

<!-- REF CryptoKey.decrypt().Desc -->
## .decrypt()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.decrypt().Syntax -->**.decrypt**( *message* : Text ; *options* : Object ) : Object<!-- END REF -->


<!-- REF #CryptoKey.decrypt().Params -->
| 引数      | 型      |    | 説明                                                |
| ------- | ------ | -- | ------------------------------------------------- |
| message | Text   | -> | `options.encodingEncrypted` を使ってデコードし復号するメッセージ文字列 |
| options | オブジェクト | -> | デコーディングオプション                                      |
| 戻り値     | オブジェクト | <- | ステータス                                             |
<!-- END REF -->

`.decrypt()` 関数は、 <!-- REF #CryptoKey.decrypt().Summary -->**秘密** 鍵を使って *message* を復号します<!-- END REF -->. 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

#### *options*

| プロパティ             | 型    | 説明                                                                                         |
| ----------------- | ---- | ------------------------------------------------------------------------------------------ |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                       |
| encodingEncrypted | text | 復号するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"   |
| encodingDecrypted | text | バイナリの復号メッセージを文字列に変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |

#### *戻り値*

`message` の復号に成功した場合には、success プロパティが `true` に設定された *status* オブジェクトを返します。

| プロパティ   | 型          | 説明                                                |
| ------- | ---------- | ------------------------------------------------- |
| success | boolean    | メッセージの復号に成功した場合は true                             |
| 戻り値     | text       | options.encodingDecrypted を使って復号およびデコードされたメッセージ   |
| errors  | collection | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。 |

キーまたはアルゴリズムが合致しないなどの理由で *message* の復号に成功しなかった場合、返される `status` オブジェクトの `status.errors` プロパティにはエラーのコレクションが格納されます。
<!-- END REF -->

<!-- REF CryptoKey.encrypt().Desc -->
## .encrypt()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.encrypt().Syntax -->**.encrypt**( *message* : Text ; *options* : Object ) : Text<!-- END REF -->


<!-- REF #CryptoKey.encrypt().Params -->
| 引数      | 型      |    | 説明                                                  |
| ------- | ------ | -- | --------------------------------------------------- |
| message | Text   | -> | `options.encodingDecrypted` を使ってエンコードし暗号化するメッセージ文字列 |
| options | オブジェクト | -> | エンコーディングオプション                                       |
| 戻り値     | Text   | <- | `options.encodingEncrypted` を使って暗号化およびエンコードされたメッセージ |
<!-- END REF -->

`.encrypt()` 関数は、 <!-- REF #CryptoKey.encrypt().Summary -->**公開** 鍵を使って *message* を暗号化します<!-- END REF -->. 使用されるアルゴリズムはキーの種類に依存します。

キーは RSA キーでなければならず、アルゴリズムは RSA-OAEP です ([RFC 3447](https://tools.ietf.org/html/rfc3447) 参照)。

##### *options*

| プロパティ             | 型    | 説明                                                                                                |
| ----------------- | ---- | ------------------------------------------------------------------------------------------------- |
| hash              | text | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。                                              |
| encodingEncrypted | text | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"               |
| encodingDecrypted | text | 暗号化するバイナリ形式に `message` を変換するためのエンコーディング。 可能な値: "UTF-8", "Base64" または "Base64URL"。 デフォルト値: "UTF-8" |

#### *戻り値*

戻り値は暗号化されたメッセージです。
<!-- END REF -->

<!-- REF CryptoKey.getPrivateKey().Desc -->
## .getPrivateKey()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.getPrivateKey().Syntax -->**.getPrivateKey()** : Text<!-- END REF -->


<!-- REF #CryptoKey.getPrivateKey().Params -->
| 引数  | 型    |    | 説明         |
| --- | ---- | -- | ---------- |
| 戻り値 | Text | <- | PEM 形式の秘密鍵 |
<!-- END REF -->

`.getPrivateKey()` 関数は、  <!-- REF #CryptoKey.getPrivateKey().Summary -->`CryptoKey` オブジェクトの秘密鍵を返します (PEM形式)<!-- END REF --> 。無い場合は空の文字列を返します。

#### *戻り値*

戻り値は秘密鍵です。
<!-- END REF -->

<!-- REF CryptoKey.getPublicKey().Desc -->
## .getPublicKey()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.getPublicKey().Syntax -->**.getPublicKey**() : Text<!-- END REF -->


<!-- REF #CryptoKey.getPublicKey().Params -->
| 引数  | 型    |    | 説明         |
| --- | ---- | -- | ---------- |
| 戻り値 | Text | <- | PEM 形式の公開鍵 |
<!-- END REF -->

`.getPublicKey()` 関数は、 <!-- REF #CryptoKey.getPublicKey().Summary -->`CryptoKey` オブジェクトの公開鍵を返します (PEM形式)<!-- END REF --> 。無い場合は空の文字列を返します。

#### *戻り値*

戻り値は公開鍵です。
<!-- END REF -->

---
<!-- REF CryptoKey.pem.Desc -->
## .pem

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.pem.Syntax -->**.pem** : Text<!-- END REF -->


<!-- REF #CryptoKey.pem.Summary -->
ロードする PEM 形式の暗号化キー。 秘密鍵を渡した場合、RSA または ECDSA の公開鍵は秘密鍵から推定されます。 <!-- END REF -->

<!-- REF CryptoKey.sign().Desc -->
## .sign()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.sign().Syntax -->.**sign** (*message* : Text ; *options* : Object) : Text<!-- END REF -->


<!-- REF #CryptoKey.sign().Params -->
| 引数      | 型      |    | 説明                                              |
| ------- | ------ | -- | ----------------------------------------------- |
| message | Text   | -> | 署名をするメッセージ                                      |
| options | オブジェクト | -> | 署名オプション                                         |
| 戻り値     | Text   | <- | "encoding" オプションに応じて Base64 または Base64URL 形式の署名 |
<!-- END REF -->

`.sign()` 関数は、 <!-- REF #CryptoKey.sign().Summary -->utf8 形式の *message* 文字列を署名します<!-- END REF --> 。この際、`CryptoKey` オブジェクトキーおよび指定された *options* が使われます。 `options.encoding` 属性に指定した値に応じて、base64 または base64URL 形式の署名を返します。

`CryptoKey` は有効な **秘密** 鍵を格納していなくてはなりません。

#### *options*

| プロパティ             | 型       | 説明                                                                                                                           |
| ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash              | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| encodingEncrypted | text    | バイナリの暗号化メッセージを文字列に変換するためのエンコーディング。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                          |
| pss               | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                           |
| encoding          | text    | 戻り値の署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                             |

#### *戻り値*

utf8 形式の *message* 文字列。
<!-- END REF -->

<!-- REF CryptoKey.size -->
## .size
<!-- END REF -->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.size.Syntax -->**.size** : Integer<!-- END REF -->


RSA キーのみ: <!-- REF #CryptoKey.size.Summary -->キーのサイズ (ビット単位)<!-- END REF -->. 通常は 2048 (デフォルト)。

<!-- REF CryptoKey.type -->
## .type
<!-- END REF -->

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.type.Syntax -->**.type** : Text<!-- END REF -->


 <!-- REF #CryptoKey.type.Summary -->キーのタイプ: "RSA", "ECDSA", "PEM" <!-- END REF -->.


- "RSA": `settings.size` に指定されたサイズを [.size](#size) として使った、RSA キーペア
- "ECDSA": `settings.curve` に指定された曲線を [.curve](#curve) として用いた、楕円曲線デジタル署名アルゴリズム (Elliptic Curve Digital Signature Algorithm) キーペア。 ECDSA キーは署名だけに使用されるもので、暗号化には使用できないことに留意してください。
- "PEM": `settings.pem` を [.pem](#pem) として使った、PEM 形式のキーペア



<!-- REF CryptoKey.verify().Desc -->
## .verify()

<details><summary>履歴</summary>

| リリース  | 内容 |
| ----- | -- |
| 18 R4 | 追加 |
</details>

<!-- REF #CryptoKey.verify().Syntax -->**.verify**( *message* : Text ; *signature* : Text ; *options* : Object) : object<!-- END REF -->


<!-- REF #CryptoKey.verify().Params -->
| 引数        | 型      |    | 説明                                                          |
| --------- | ------ | -- | ----------------------------------------------------------- |
| message   | Text   | -> | 署名生成時に使われたメッセージ文字列                                          |
| signature | Text   | -> | 検証の対象である、`options.encoding` に応じて Base64 または Base64URL 形式の署名 |
| options   | オブジェクト | -> | 署名オプション                                                     |
| 戻り値       | オブジェクト | <- | 検証ステータス                                                     |
<!-- END REF -->


`.verify()` 関数は、 <!-- REF #CryptoKey.verify().Summary -->utf8 形式の *message* 文字列の署名を検証します。<!-- END REF --> 。この際、`CryptoKey` オブジェクトキーおよび指定された *options* が使われます。

`CryptoKey` は有効な **公開** 鍵を格納していなくてはなりません。

#### *options*

| プロパティ    | 型       | 説明                                                                                                                           |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| hash     | text    | 使用する Digest アルゴリズム。 例: "SHA256", "SHA384", "SHA512"。 JWT の生成に使われた場合、ハッシュサイズは PS@, ES@, RS@, または PS@ のアルゴリズムサイズと同じでなくてはなりません。 |
| pss      | boolean | 確率的署名スキーム (PSS) を使用する。 RSA キーでない場合は無視されます。 PS＠ アルゴリズム用の JWT を生成する場合は `true` を渡します。                                           |
| encoding | テキスト    | 署名のエンコード方式。 可能な値: "Base64" または "Base64URL"。 デフォルト値: "Base64"                                                                 |

#### *戻り値*

検証で署名が合致した場合には、`success` プロパティが `true` に設定された `status` オブジェクトを返します。

*message*、キーまたはアルゴリズムが署名と合致しないなどの理由で検証が成功しなかった場合、返される `status` オブジェクトの `status.errors` プロパティにはエラーのコレクションが格納されます。

| プロパティ   | 型          | 説明                                                |
| ------- | ---------- | ------------------------------------------------- |
| success | boolean    | 署名がメッセージと合致すれば true                               |
| errors  | collection | `success` が `false` の場合、エラーのコレクションが含まれている場合があります。 |
<!-- END REF -->
