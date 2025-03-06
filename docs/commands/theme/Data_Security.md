---
id: Data_Security
title: Data Security
---
||
|---|
|[**Data file encryption status** ( structurePath , dataPath ) : Object](../../commands-legacy/data-file-encryption-status)<br/>The **Data file encryption status** command returns an object providing the encryption status for the data file designated by the *structurePath* and *dataPath* parameters.|
|[**Decrypt data BLOB** ( *blobToDecrypt* ; keyObject | passPhrase ; *salt* ; *decryptedBLOB* ) : Boolean](../../commands-legacy/decrypt-data-blob)<br/>The **Decrypt data BLOB** command decrypts the *blobToDecrypt* parameter with the same algorithm as 4D uses to decrypt data (AES-256) and returns the result in *decryptedBLOB*.|
|[**Discover data key**  : Boolean](../../commands-legacy/discover-data-key)<br/>The **Discover data key** command searches for a valid encryption key corresponding to the currently opened data file at the root level of all connected devices and returns **True** if successful.|
|[**Encrypt data BLOB** ( *blobToEncrypt* ; keyObject | passPhrase ; *salt* ; *encryptedBLOB* ) : Boolean](../../commands-legacy/encrypt-data-blob)<br/>The **Encrypt data BLOB** command encrypts the *blobToEncrypt* parameter with the same algorithm as 4D uses to encrypt data (AES-256) and returns the result in *encryptedBlob*.|
|[**Encrypt data file** ( *structurePath* ; *dataPath* {; newPassPhrase | newDataKey {; *archiveFolder* {; curPassPhrase | curDataKey {; *methodName*}}}} ) : Text](../../commands-legacy/encrypt-data-file)<br/>The **Encrypt data file** command is used to encrypt or re-encrypt the data file designated by the *dataPath* parameter associated to the *structurePath* parameter.|
|[**New data key** ( *passPhrase* ) : Object](../../commands-legacy/new-data-key)<br/>The **New data key** command generates a binary data encryption key from the text passed in the *passPhrase* parameter.|
|[**Register data key** ( curPassPhrase | curDataKey ) : Boolean](../../commands-legacy/register-data-key)<br/>The **Register data key** command adds the data encryption key passed in parameter to the 4D keychain.|
