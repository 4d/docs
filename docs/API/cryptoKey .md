---
id: cryptoKey
title: CryptoKey Class
---

## Description


## Properties

<!-- REF cryptokey.properties -->
|Property|Type|Description|
|----|----|-----------|
|<!-- REF cryptokey.type -->type<!-- END REF -->|<!-- REF #cryptokey.type.type -->text<!-- END REF -->|<!-- REF #cryptokey.type.Summary -->Name of the key type. For example: "ECDSA" or "RSA".<!-- END REF -->|
|<!-- REF cryptokey.size -->size<!-- END REF -->| <!-- REF #cryptokey.size.type -->integer<!-- END REF -->|<!-- REF #cryptokey.size.Summary -->Defined only for RSA keys: the size of the key in bits. Typically 2048<!-- END REF -->|
|<!-- REF cryptokey.curve -->curve<!-- END REF -->|<!-- REF #cryptokey.curve.type -->text<!-- END REF --> |<!-- REF #cryptokey.exists.Summary --> Defined only for ECDSA keys: the normalised curve name of the key. For example: "prime256v1", "secp384r1" or "secp521r1"<!-- END REF -->|
<!-- END REF -->



## Functions

<!-- REF cryptokey.new().Desc -->
### .new( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

<!-- REF #cryptokey.new().Syntax -->
**4D.CryptoKey.new**( *settings* ) -> keyPair<!-- END REF -->

<!-- REF #cryptokey.new().Params -->
|Parameter|Property|Type||Description|
|---|---|----|---|---|
|settings||object|->|Settings to generate or load a key pair|  
||type|text||Type of the key: "RSA", "ECDSA", or "PEM" (see below)|
||size|integer||Size of RSA key in bits. 2048 by default|
||curve|text||name of ECDSA curve. Usually "prime256v1" for ES256 (default), "secp384r1" for ES384, "secp521r1" for ES512|
||pem|text||PEM definition of an encryption key to load. If the key is a private key, the RSA or ECDSA public key will be deduced from it.|
||||||
|keyPair||object|<-|Object encapsulating an encryption key pair|
<!-- END REF -->


##### Description
The `.new( )` function  <!-- REF #cryptokey.new().Summary -->creates a new object encapsulating an encryption key pair, based upon the `settings` object parameter. It allows to generate a new RSA or ECDSA key, or to load an existing key pair from a PEM definition<!-- END REF -->.

Pass the type of key in the *type* property of the *settings* parameter:

*	"RSA": generates an RSA key pair, using `settings.size` as size.
*	"ECDSA": generates an Elliptic Curve Digital Signature Algorithm key pair, using `settings.curve` as curve. Note that ECDSA keys cannot be used for encryption but only for signature.
*	"PEM": loads a key pair definition in PEM format, using `settings.pem`.


**Returned value**

A `keyPair` object which is a shared object and can therefore be used by multiple 4D processes simultaneously.
<!-- END REF -->





<!-- REF cryptokey.getPrivateKey().Desc -->
### .getPrivateKey( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

<!-- REF #cryptokey.getPrivateKey().Syntax -->
**.getPrivateKey( )**  -> privateKey<!-- END REF -->

<!-- REF #cryptokey.getPrivateKey().Params -->
|Parameter|Property|Type||Description|
|---|---|----|---|---|
||||||
|privateKey||text|<-|Private key in PEM format|
<!-- END REF -->

##### Description
The `.getPrivateKey( )` function  <!-- REF #cryptokey.getPrivateKey().Summary -->returns the private key of the `cryptoKey` object in PEM format, or an empty string if none is available<!-- END REF -->. 

**Returned value**

A private key.
<!-- END REF -->



<!-- REF cryptokey.getPublicKey().Desc -->
### .getPublicKey( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

<!-- REF #cryptokey.getPublicKey().Syntax -->
**.getPublicKey**( ) -> publicKey<!-- END REF -->

<!-- REF #cryptokey.getPublicKey().Params -->
|Parameter|Property|Type||Description|
|---|---|----|---|---|
||||||
|publicKey||text|<-|Public key in PEM format|
<!-- END REF -->


##### Description
The `.getPublicKey( )` function <!-- REF #cryptokey.getPublicKey().Summary -->returns the public key of the `cryptoKey` object in PEM format, or an empty string if none is available<!-- END REF -->.

**Returned value**

A public key.
<!-- END REF -->





<!-- REF cryptokey.sign().Desc -->
### .sign( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

<!-- REF #cryptokey.sign().Syntax -->
**.sign**( *message* ; *options*) -> signature<!-- END REF -->

<!-- REF #cryptokey.sign().Params -->
|Parameter|Property|Type||Description|
|---|---|----|---|---|
|message||text|->|Message string to sign|  
|options||object|->|Signing options|  
||hash|text||Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size|
||pss|boolean||Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when producing a JWT for PS@ algorithm|
||encoding|text||Representation to be used for result signature. Possible values: "Base64" or "Base64URL". Default is "Base64".|
||||||
|signature||text|<-|Resulting signature in Base64 or Base64URL representation, depending on "encoding" option|
<!-- END REF -->


##### Description
The `.sign( )` function <!-- REF #cryptokey.sign().Summary -->signs the utf8 representation of a `message` string using the `cryptoKey` object keys and provided `options`. It returns its signature in base64 or base64URL format, depending on the value of the `options.encoding` attribute you passed<!-- END REF -->.

The `cryptoKey` must contain a valid **private** key.

**Returned value**

A signature.
<!-- END REF -->




<!-- REF cryptokey.verify().Desc -->
### .verify( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

<!-- REF #cryptokey.verify().Syntax -->
**.verify**( *message* ; *signature* ; *options* ) -> status<!-- END REF -->

<!-- REF #cryptokey.verify().Params -->
|Parameter|Property|Type||Description|
|---|---|----|---|---|
|message||text|->|Message string that was used to produce the signature|  
|signature||text|->|Signature to verify, in Base64 or Base64URL representation, depending on "encoding" option|
|options||object|->|Signing options|  
||hash|text||Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". When used to produce a JWT, the hash size must match the PS@, ES@, RS@, or PS@ algorithm size|
||pss|boolean||Use Probabilistic Signature Scheme (PSS). Ignored if the key is not an RSA key. Pass `true` when verifying a JWT for PS@ algorithm|
||encoding|text||Representation of provided signature. Possible values are "Base64" or "Base64URL". Default is "Base64".
||||||
|status||object|<-|Result of the verification|
||success|boolean||True if the signature matches the message|
||errors|collection||If `success` is `false`, may contain a collection of errors|
<!-- END REF -->


##### Description
The `.verify( )` function <!-- REF #cryptokey.verify().Summary -->verifies the base64 signature against the utf8 representation of `message` using the `cryptoKey` object keys and provided `options`<!-- END REF -->.

The function returns a `status` object with `success` property set to `true` if `message` could be successfully verified (i.e. the signature matches). 

In case the signature couldn't be verified because it was not signed with the same `message`, key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

The `cryptoKey` must contain a valid **public** key.


**Returned value**

A status object.
<!-- END REF -->



<!-- REF cryptokey.encrypt().Desc -->
### .encrypt( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

<!-- REF #cryptokey.encrypt().Syntax -->
**.encrypt**( *message* ; *options* ) -> encrypted message<!-- END REF -->

<!-- REF #cryptokey.encrypt().Params -->
|Parameter|Property|Type||Description|
|---|---|----|---|---|
|message||text|->|Message string to be encoded using options.encodingDecrypted and encrypted.|  
|options||object|->|Encoding options|
||hash|text||Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". |
||encodingEncrypted|text||Encoding used to convert the binary encrypted message into the result string. Can be "Base64", or "Base64URL". Default is "Base64".|
||encodingDecrypted|text||Encoding used to convert the `message` parameter into the binary representation to encrypt. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".|
||||||
|result||text|<-|Message encrypted and encoded using the `options.encodingEncrypted`|
<!-- END REF -->


##### Description
The `.encrypt( )` function <!-- REF #cryptokey.encrypt().Summary -->encrypts the `message` parameter using the **public** key<!-- END REF -->. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).

**Returned value**

Encrypted message.
<!-- END REF -->




<!-- REF cryptokey.decrypt().Desc -->
### .decrypt( )

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18 R4|Added
</details>

<!-- REF #cryptokey.decrypt().Syntax -->
**.decrypt**( *message* ; *options* ) -> status<!-- END REF -->

<!-- REF #cryptokey.decrypt().Params -->
|Parameter|Property|Type||Description|
|---|---|----|---|---|
|message||text|->|Message string to be decoded using options.encodingEncrypted and decrypted.|  
|options||object|->|Decoding options|
||hash|text||Digest algorithm to use. For example: "HASH256", "HASH384", or "HASH512". |
||encodingEncrypted|text||Encoding used to convert the `message` parameter into the binary representation to decrypt. Can be "Base64" or "Base64URL". Default is "Base64".|
||encodingDecrypted|text||Encoding used to convert the binary decrypted message into the result string. Can be "UTF-8", "Base64", or "Base64URL". Default is "UTF-8".|
||||||
|status||object|<-|Result|
||success|boolean||True if the message has been successfully decrypted|  
||result|text||Message decrypted and decoded using the `options.encodingDecrypted`|
||errors|collection||If `success` is `false`, may contain a collection of errors|
<!-- END REF -->


##### Description
The `.decrypt( )` function <!-- REF #cryptokey.decrypt().Summary -->decrypts the `message` parameter using the **private** key<!-- END REF -->. The algorithm used depends on the type of the key.

The key must be a RSA key, the algorithm is RSA-OAEP (see [RFC 3447](https://tools.ietf.org/html/rfc3447)).


**Returned value**

The function returns a status object with `success` property set to `true` if the `message` could be successfully decrypted.

In case the `message` couldn't be decrypted because it was not encrypted with the same key or algorithm, the `status` object being returned contains an error collection in `status.errors`.

<!-- END REF -->


 
 



