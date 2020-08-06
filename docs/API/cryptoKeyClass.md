---
id: cryptoClass
title: CryptoKey 
---

## Overview

The `CryptoKey` class in the 4D language encapsulates an asymetric encryption key pair. 

This class is available from the `4D` class store.
 

**Example**

The following example signs and verifies a message using a new ECDSA key pair, for example in order to make a ES256 JSON Web token.

```4d
 // Generate a new ECDSA key pair
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))

  // Get signature as base64
$message:="hello world" 
$signature:=$key.sign($message;New object("hash";"HASH256"))

  // Verify signature
$status:=$key.verify($message;$signature;New object("hash";"HASH256"))
ASSERT($status.success)
```


## Object Properties

A `cryptoKey` object is instanciated by the [4D.CryptoKey.new](#4dcryptokeynew) function. It has the following properties (all are read-only):

<!-- INCLUDE cryptokey.properties -->




## Functions


|Summary|
|---|
|[<!-- INCLUDE #cryptokey.new().Syntax -->](#new-)|
|<!-- INCLUDE #cryptokey.new().Summary -->|
|[<!-- INCLUDE #cryptokey.getPrivateKey().Syntax -->](#getprivatekey-)| 
|<!-- INCLUDE #cryptokey.getPrivateKey().Summary -->|
|[<!-- INCLUDE #cryptokey.getPublicKey().Syntax -->](#getpublickey-) |
|<!-- INCLUDE #cryptokey.getPublicKey().Summary --> |
|[<!-- INCLUDE #cryptokey.sign().Syntax -->](#sign-) |
|<!-- INCLUDE #cryptokey.sign().Summary --> |
|[<!-- INCLUDE #cryptokey.verify().Syntax -->](#verify-)|
|<!-- INCLUDE #cryptokey.verify().Summary -->|
|[<!-- INCLUDE #cryptokey.encrypt().Syntax -->](#encrypt-)|
|<!-- INCLUDE #cryptokey.encrypt().Summary -->|
|[<!-- INCLUDE #cryptokey.decrypt().Syntax -->](#decrypt-)|
|<!-- INCLUDE #cryptokey.decrypt().Summary -->|



<!-- INCLUDE cryptokey.new().Desc -->

<!-- INCLUDE cryptokey.getPrivateKey().Desc -->

<!-- INCLUDE cryptokey.getPublicKey().Desc -->

<!-- INCLUDE cryptokey.sign().Desc -->

<!-- INCLUDE cryptokey.verify().Desc -->

<!-- INCLUDE cryptokey.encrypt().Desc -->

<!-- INCLUDE cryptokey.decrypt().Desc -->






