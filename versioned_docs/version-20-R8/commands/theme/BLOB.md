---
id: BLOB
title: BLOB
---
||
|---|
|[**BLOB PROPERTIES** ( *blob* ; *compressed* {; *expandedSize* {; *currentSize*}} )](../../commands-legacy/blob-properties)<br/>The **BLOB PROPERTIES** command returns information about the BLOB *blob*.|
|[**BLOB size** ( *blob* ) : Integer](../../commands-legacy/blob-size)<br/>BLOB sizereturns the size of *blob* expressed in bytes.|
|[**BLOB TO DOCUMENT** ( *document* ; *blob* )](../../commands-legacy/blob-to-document)<br/>BLOB TO DOCUMENT rewrites the whole contents of *document* using the data stored in *blob*.|
|[**BLOB to integer** ( *blob* ; *byteOrder* {; *offset*} ) : Integer](../../commands-legacy/blob-to-integer)<br/>The BLOB to integer command returns a 2-byte Integer value read from the BLOB *blob*.|
|[**BLOB to list** ( *blob* {; *offset*} ) : Integer](../../commands-legacy/blob-to-list)<br/>The BLOB to list command creates a new hierarchical list with the data stored within the BLOB *blob* at the byte offset (starting at zero) specified by *offset* and returns a List Reference number for that new list.|
|[**BLOB to longint** ( *blob* ; *byteOrder* {; *offset*} ) : Integer](../../commands-legacy/blob-to-longint)<br/>The BLOB to longint command returns a 4-byte Long Integer value read from the BLOB *blob*.|
|[**BLOB to real** ( *blob* ; *realFormat* {; *offset*} ) : Real](../../commands-legacy/blob-to-real)<br/>The BLOB to real command returns a Real value read from the BLOB *blob*.|
|[**BLOB to text** ( *blob* ; *textFormat* {; *offset* {; *textLength*}} )  : Text](../../commands-legacy/blob-to-text)<br/>The BLOB to text command returns a Text value read from the BLOB *blob*.|
|[**BLOB TO VARIABLE** ( *blob* ; *variable* {; *offset*} )](../../commands-legacy/blob-to-variable)<br/>The BLOB TO VARIABLE command rewrites the variable *variable* with the data stored within the BLOB *blob* at the byte offset (starting at zero) specified by *offset*.|
|[**COMPRESS BLOB** ( *blob* {; *compression*} )](../../commands-legacy/compress-blob)<br/>The **COMPRESS BLOB** command compresses the BLOB *blob* using a compression algorithm.|
|[**COPY BLOB** ( *srcBLOB* ; *dstBLOB* ; *srcOffset* ; *dstOffset* ; *len* )](../../commands-legacy/copy-blob)<br/>The COPY BLOB command copies the number of bytes specified by *len* from the BLOB *srcBLOB* to the BLOB *dstBLOB*.|
|[**DECRYPT BLOB** ( *toDecrypt* ; *sendPubKey* {; *recipPrivKey*} )](../../commands-legacy/decrypt-blob)<br/>The DECRYPT BLOB command decrypts the content of the BLOB *toDecrypt* using the sender’s public key *sendPubKey* and, optionally, the recipient’s private key *recipPrivKey*.|
|[**DELETE FROM BLOB** ( *blob* ; *offset* ; *len* )](../../commands-legacy/delete-from-blob)<br/>The DELETE FROM BLOB command deletes the number of bytes specified by *len* from the BLOB *blob* at the position specified by *offset* (expressed relative to the beginning of the BLOB).|
|[**DOCUMENT TO BLOB** ( *document* ; *blob* )](../../commands-legacy/document-to-blob)<br/>DOCUMENT TO BLOB loads the whole contents of *document* into *blob*.|
|[**ENCRYPT BLOB** ( *toEncrypt* ; *sendPrivKey* {; *recipPubKey*} )](../../commands-legacy/encrypt-blob)<br/>The ENCRYPT BLOB command encrypts the content of the *toEncrypt* BLOB with the sender’s private key *sendPrivKey*, as well as optionally the recipient’s public key *recipPubKey*.|
|[**EXPAND BLOB** ( *blob* )](../../commands-legacy/expand-blob)<br/>The **EXPAND BLOB** command expands the BLOB *blob* that was previously compressed using the [COMPRESS BLOB](compress-blob.md) command*.|
|[**INSERT IN BLOB** ( *blob* ; *offset* ; *len* {; *filler*} )](../../commands-legacy/insert-in-blob)<br/>The INSERT IN BLOB command inserts the number of bytes specified by *len* into the BLOB *blob* at the position specified by *offset*.|
|[**INTEGER TO BLOB** ( *entier* ; *blob* ; *ordreOctet* {; offset | *} )](../../commands-legacy/integer-to-blob)<br/>The INTEGER TO BLOB command writes the 2-byte Integer value *integer* into the BLOB *blob*.|
|[**LIST TO BLOB** ( *list* ; *blob* {; *} )](../../commands-legacy/list-to-blob)<br/>The LIST TO BLOB command stores the hierarchical list *list* in the BLOB *blob*.|
|[**LONGINT TO BLOB** ( *longInt* ; *blob* ; *byteOrder* {; offset | *} )](../../commands-legacy/longint-to-blob)<br/>The LONGINT TO BLOB command writes the 4-byte Long Integer value *integer* into the BLOB *blob*.|
|[**REAL TO BLOB** ( *real* ; *blob* ; *realFormat* {; offset | *} )](../../commands-legacy/real-to-blob)<br/>The REAL TO BLOB command writes the Real value *real* into the BLOB *blob*.|
|[**SET BLOB SIZE** ( *blob* ; *size* {; *filler*} )](../../commands-legacy/set-blob-size)<br/>SET BLOB SIZE resizes the BLOB *blob* according to the value passed in *size*.|
|[**TEXT TO BLOB** ( *text* ; *blob* {; *textFormat* {; offset | *}} )](../../commands-legacy/text-to-blob)<br/>The TEXT TO BLOB command writes the Text value *text* into the BLOB *blob*.|
|[**VARIABLE TO BLOB** ( *variable* ; *blob* {; offset | *} )](../../commands-legacy/variable-to-blob)<br/>The VARIABLE TO BLOB command stores the variable *variable* in the BLOB *blob*.|
