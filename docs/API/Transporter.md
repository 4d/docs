---
id: Transporter
title: Transporter Class
---

## Description


## .acceptUnsecureConnection

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

**.acceptUnsecureConnection** : Boolean

#### Description

The `.acceptUnsecureConnection` property contains **True** if 4D is allowed to establish an unencrypted connection when encrypted connection is not possible. 

It contains **False** if unencrypted connections are unallowed, in which case an error in returned when encrypted connection is not possible.

Available secured ports are:

- SMTP
	- 465: SMTPS
	- 587 or 25: SMTP with STARTTLS upgrade if supported by the server.

- IMAP 
	- 143: IMAP non-encrypted port
	- 993: IMAP with STARTTLS upgrade if supported by the server
 
- POP3
	- 110: POP3 non-encrypted port
	- 995: POP3 with STARTTLS upgrade if supported by the server.

--- 
 
 ## .authenticationMode 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

**.authenticationMode** : Text
#### Description

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server. 

By default, the most secured mode supported by the server is used.

Possible values are:

|Value|Constants|Comment|
|---|---|---|
|CRAM-MD5|`IMAP authentication CRAM MD5`|Authentication using CRAM-MD5 protocol|
|LOGIN|`IMAP authentication login`|Authentication using LOGIN protocol|
|OAUTH2|`IMAP authentication OAUTH2`|Authentication using OAuth2 protocol|
|PLAIN|`IMAP authentication plain`|Authentication using PLAIN protocol|


--- 
 
 ## .authenticationMode 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>


**.authenticationMode** : Text

#### Description

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server. 

By default, the most secured mode supported by the server is used.

Possible values are:

|Value|Constants|Comment|
|---|---|---|
|APOP|`POP3 authentication APOP`|Authentication using APOP protocol (POP3 only)|
|CRAM-MD5|`POP3 authentication CRAM-MD5`|Authentication using CRAM-MD5 protocol|
|LOGIN|`POP3 authentication login`|Authentication using LOGIN protocol|
|OAUTH2|`POP3 authentication OAUTH2`|Authentication using OAuth2 protocol|
|PLAIN|`POP3 authentication plain`|Authentication using PLAIN protocol|


--- 
 
 ## .authenticationMode 

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>


**.authenticationMode** : Text

#### Description

The `.authenticationMode` property contains the authentication mode used to open the session on the mail server. 

By default, the most secured mode supported by the server is used.

Possible values are:

|Value|Constants|Comment|
|---|---|---|
|CRAM-MD5|`SMTP authentication CRAM MD5`|Authentication using CRAM-MD5 protocol|
|LOGIN|`SMTP authentication login`|Authentication using LOGIN protocol|
|OAUTH2|`SMTP authentication OAUTH2`|Authentication using OAuth2 protocol|
|PLAIN|`SMTP authentication plain`|Authentication using PLAIN protocol|


---

## .bodyCharset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v18|Support for UTF8 base64|
|v17 R5|Added|
</details>

**.bodyCharset** : Text

#### Description

The `.bodyCharset` property contains   the charset and encoding used for the body part of the email.

*	subject, 
*	attachment filename(s), 
*	email name.

**Possible values:**

|Constant|	Value|	Comment|
|---|---|---|
|mail mode ISO2022JP|	US-ASCII_ISO-2022-JP_UTF8_QP	|<ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>|
|mail mode ISO88591	|ISO-8859-1	|<ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>|
|mail mode UTF8	|US-ASCII_UTF8_QP|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (**default value**)|
|mail mode UTF8 in base64|US-ASCII_UTF8_B64|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64|


---


## .connectionTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.connectionTimeOut** : Integer


#### Description

The `.connectionTimeOut` property contains the maximum wait time (in seconds) allowed to establish a connection to the server. By default, if the property has not been set in the server object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, or `IMAP New transporter`), the value is 30.



---

## .headerCharset

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.headerCharset** : Text

#### Description

The `.headerCharset` property contains  the charset and encoding used for the email header. The header includes the following parts of the email: 

*	subject, 
*	attachment filename(s), 
*	email name.

**Possible values:**

|Constant|	Value|	Comment|
|---|---|---|
|mail mode ISO2022JP|	US-ASCII_ISO-2022-JP_UTF8_QP	|<ul><li>*headerCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & Quoted-printable if possible, otherwise UTF-8 & Quoted-printable</li><li>*bodyCharset*: US-ASCII if possible, Japanese (ISO-2022-JP) & 7-bit if possible, otherwise UTF-8 & Quoted-printable</li></ul>|
|mail mode ISO88591	|ISO-8859-1	|<ul><li>*headerCharset*: ISO-8859-1 & Quoted-printable</li><li>*bodyCharset*: ISO-8859-1 & 8-bit</li></ul>|
|mail mode UTF8	|US-ASCII_UTF8_QP|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & Quoted-printable (default value)|
|mail mode UTF8 in base64|	US-ASCII_UTF8_B64|*headerCharset* & *bodyCharset*: US-ASCII if possible, otherwise UTF-8 & base64|


---


## .host

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.host** : Text

#### Description

The `.host` property contains the name or the IP address of the host server. Used for mail transactions (SMTP, POP3, IMAP).


---

## .logFile

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R5|Added|
</details>

**.logFile** : Text

#### Description

The `.logFile` property contains the path of the extended log file defined (if any) for the mail connection. It can be relative (to the current Logs folder) or absolute. 

Unlike regular log files (enabled via the `SET DATABASE PARAMETER` command), extended log files store MIME contents of all sent mails and do not have any size limit. For more information about extended log files, refer to:

*	**SMTP connections** - [4DSMTPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt) 
*	**POP3 connections** - [4DPOP3Log.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)
*	**IMAP connections** - [4DIMAPLog.txt](Admin/debugLogFiles.md#4dsmtplogtxt-4dpop3logtxt-and-4dimaplogtxt)






---

## .port

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

**.port** : Integer

#### Description

The `.port` property contains  the port number used for mail transactions. By default, if the *port* property has not been set in the *server* object (used to create the transporter object with `SMTP New transporter`, `POP3 New transporter`, `IMAP New transporter`), the port used is:

*	**SMTP** - 587
*	**POP3** - 995
*	**IMAP** - 993




---


## .sendTimeOut

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added
</details>

**.sendTimeOut** : Integer

#### Description
The `.sendTimeOut` property contains  the maximum wait time (in seconds) of a call to `.send( )` before a timeout occurs. By default, if the `.sendTimeOut` property has not been set in the `server` object, the value 100 is used.


---


## .user

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

**.user** : Text

#### Description
The `.user` property contains  the user name used for authentication on the mail server. 


---

## .checkConnection()

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v17 R4|Added|
</details>

**.checkConnection()** : Object
|Parameter|Type||Description|
|---------|--- |:---:|------|
|Result|Object|<-|Status of the transporter object connection|


#### Description

The `.checkConnection()` function  checks the connection using information stored in the transporter object, recreates the connection if necessary, and returns the status. This function allows you to verify that the values provided by the user are valid and consistent.


#### Returned object

The function sends a request to the mail server and returns an object describing the mail status. This object can contain the following properties:

|Property||Type|Description|
|---|---|---|---|
|success||boolean|True if the check is successful, False otherwise|
|status||number|(SMTP only) Status code returned by the mail server (0 in case of an issue unrelated to the mail processing)|
|statusText| |text|Status message returned by the mail server, or last error returned in the 4D error stack|
|errors	||collection|4D error stack (not returned if a mail server response is received)|
||\[ ].errCode|number|4D error code|
||\[ ].message|text|Description of the 4D error|
||\[ ].componentSignature|text|Signature of the internal component which returned the error|






