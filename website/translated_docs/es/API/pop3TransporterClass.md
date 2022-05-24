---
id: POP3TransporterClass
title: POP3Transporter
---

The `POP3Transporter` class allows you to retrieve messages from a POP3 email server.


### Objeto POP3 Transporter

POP3 Transporter objects are instantiated with the [POP3 New transporter](#pop3-new-transporter) command. They provide the following properties and functions:


|                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|



<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R2  | Añadidos       |
</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->
**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF POP3TransporterClass.POP3 New transporter.Params -->
| Parámetros | Tipo               |    | Descripción                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| server     | objeto             | -> | Información del servidor de correo                  |
| Resultado  | 4D.POP3Transporter | <- | [Objeto POP3 transporter](#pop3-transporter-object) |
<!-- END REF -->


#### Descripción

El comando `POP3 New transporter` <!-- REF #_command_.POP3 New transporter.Summary -->configura una nueva conexión POP3<!-- END REF -->en función del parámetro *servidor* y devuelve un nuevo objeto *[POP3 transporter](#pop3-transporter-object)*. El objeto transportador devuelto se utilizará normalmente para recibir correos electrónicos.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:


| *server*                                                                                                                                                                                                                                                                                                                                                                                                                              | Valor por defecto (si se omite)                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                               |
| .**accessTokenOAuth2**: Text<br/>.**accessTokenOAuth2**: Object<p>Cadena de texto u objeto token que representan las credenciales de autorización OAuth 2. Used only with OAUTH2 `authenticationMode`. If `accessTokenOAuth2` is used but `authenticationMode` is omitted, the OAuth 2 protocol is used (if allowed by the server). Not returned in *[SMTP transporter](#smtptransporterobject)* object. | ninguno                                                             |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| the most secure authentication mode supported by the server is used |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                  |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *obligatorio*                                                       |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| ninguno                                                             |
| **.password** : Text<p>Contraseña del usuario para la autenticación en el servidor. Not returned in *[SMTP transporter](#smtptransporterobject)* object.                                                                                                                                                                                                                                                       | ninguno                                                             |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                                 |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| ninguno                                                             |


#### Resultado

La función devuelve un [**objeto POP3 transporter**](#pop3-transporter-object). Todas las propiedades devueltas son **de sólo lectura**.
> The POP3 connection is automatically closed when the transporter object is destroyed.

#### Ejemplo

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log to save in the Logs folder

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

<!-- END REF -->

## 4D.POP3Transporter.new()


<!-- REF #4D.POP3Transporter.new().Syntax -->
**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->

<!-- REF #4D.POP3Transporter.new().Params -->
| Parámetros | Tipo               |    | Descripción                                         |
| ---------- | ------------------ |:--:| --------------------------------------------------- |
| server     | Objeto             | -> | Información del servidor de correo                  |
| Resultado  | 4D.POP3Transporter | <- | [Objeto POP3 transporter](#pop3-transporter-object) |
<!-- END REF -->

#### Descripción

La función `4D.POP3Transporter.new()` <!-- REF #4D.POP3Transporter.new().Summary -->crea y devuelve un nuevo objeto del tipo `4D.POP3Transporter`<!-- END REF -->. Es idéntico al comando [`POP3 New transporter`](#pop3-new-transporter) (acceso directo).

<!-- INCLUDE transporter.acceptUnsecureConnection.Desc -->




<!-- INCLUDE transporter.authenticationModePOP3.Desc -->



<!-- INCLUDE transporter.checkConnection().Desc -->

#### Ejemplo

```4d
 var $pw :  Text
 var $options : Object
 $options:=New object

 $pw:=Request("Please enter your password:")
 if(OK=1)
    $options.host:="pop3.gmail.com"

    $options.user:="test@gmail.com"
    $options.password:=$pw

    $transporter:=POP3 New transporter($options)

    $status:=$transporter.checkConnection()
    If($status.success)
       ALERT("POP3 connection check successful!")
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
```


<!-- INCLUDE transporter.connectionTimeOut.Desc -->




## .delete()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R2  | Añadidos       |
</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->
**.delete**( *msgNumber* : Integer )<!-- END REF -->

<!-- REF #POP3TransporterClass.delete().Params -->
| Parámetros | Tipo    |    | Descripción                   |
| ---------- | ------- |:--:| ----------------------------- |
| msgNumber  | Integer | -> | Número del mensaje a eliminar |
<!-- END REF -->


##### Descripción

La función `.delete( )` <!-- REF #POP3TransporterClass.delete().Summary -->marca el email *msgNumber* a eliminar en el servidor POP3<!-- END REF -->.

En el parámetro *msgNumber*, pase el número del correo electrónico a eliminar. Este número es devuelto en la propiedad number por el método [`.getMailInfoList()`](#getmailinfolist).

La ejecución de este método no elimina realmente ningún correo electrónico. El correo electrónico marcado se eliminará del servidor POP3 sólo cuando se destruya el objeto `POP3_transporter` (creado con `POP3 New transporter`). El marcador también puede eliminarse utilizando el método `.undeleteAll()`.
> If the current session unexpectedly terminates and the connection is closed (e.g., timeout, network failure, etc.), an error message is generated and messages marked for deletion will remain on the POP3 server.

##### Ejemplo

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // Mark your mail as "to be deleted at the end of the session"
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // Force the session closure to delete the mails marked for deletion
 CONFIRM("Selected messages will be deleted.";"Delete";"Undo")
 If(OK=1) //deletion confirmed
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() //remove deletion flags
 End if
```




## .getBoxInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R2  | Añadidos       |
</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->
**.getBoxInfo()** : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
| Parámetros | Tipo   |    | Descripción    |
| ---------- | ------ |:--:| -------------- |
| Resultado  | Objeto | <- | objeto boxInfo |
<!-- END REF -->


##### Descripción

La función `.getBoxInfo()` <!-- REF #POP3TransporterClass.getBoxInfo().Summary -->devuelve un objeto `boxInfo` correspondiente al buzón designado por el [`Transporter`](#pop3-transporter-object)<!-- END REF -->. Esta función permite recuperar la información sobre el buzón.

El objeto `boxInfo` devuelto contiene las siguientes propiedades:

| Propiedad | Tipo   | Descripción                    |
| --------- | ------ | ------------------------------ |
| mailCount | Número | Número de mensajes en el buzón |
| size      | Número | Tamaño del mensaje en bytes    |



##### Ejemplo

```4d
 var $server; $boxinfo : Object

 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

  //mailbox info
 $boxInfo:=$transporter.getBoxInfo()
 ALERT("The mailbox contains "+String($boxInfo.mailCount)+" messages.")
```




## .getMail()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R2  | Añadidos       |
</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->
**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMail().Params -->
| Parámetros | Tipo    |    | Descripción                                      |
| ---------- | ------- |:--:| ------------------------------------------------ |
| msgNumber  | Integer | -> | Número del mensaje en la lista                   |
| Resultado  | Objeto  | <- | [Objeto Email](EmailObjectClass.md#email-object) |
<!-- END REF -->


##### Descripción

La función `.getMail()` <!-- REF #POP3TransporterClass.getMail().Summary -->devuelve el objeto `Email` correspondiente al *msgNumber* en el buzón designado por el [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Esta función le permite manejar localmente el contenido del correo electrónico.

Pase en *msgNumber* el número del mensaje a recuperar. Este número es devuelto en la propiedad number por la función [`.getMailInfoList()`](#getmailinfolist).

El método devuelve Null si:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete( )`.


**Objeto devuelto**

`.getMail()` devuelve un objeto [`Email`](EmailObjectClass.md#email-object).


##### Ejemplo

Quiere saber el remitente del primer correo del buzón:

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```




## .getMailInfo()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R2  | Añadidos       |
</details>

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->
**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfo().Params -->
| Parámetros | Tipo    |    | Descripción                    |
| ---------- | ------- |:--:| ------------------------------ |
| msgNumber  | Integer | -> | Número del mensaje en la lista |
| Resultado  | Objeto  | <- | objeto mailInfo                |
<!-- END REF -->


##### Descripción

La función `.getMailInfo()` <!-- REF #POP3TransporterClass.getMailInfo().Summary -->devuelve un objeto `mailInfo` correspondiente al *msgNumber* en el buzón designado por el [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Esta función permite recuperar la información sobre el email.

En *msgNumber*, pase el número del mensaje a recuperar. Este número es devuelto en la propiedad number por el método [`.getMailInfoList()`](#getmailinfolist).

El objeto `mailInfo` devuelto contiene las siguientes propiedades:

| Propiedad | Tipo   | Descripción                 |
| --------- | ------ | --------------------------- |
| size      | Número | Tamaño del mensaje en bytes |
| id        | Texto  | ID único del mensaje        |

El método devuelve **Null** si:

*   *msgNumber* designates a non-existing message,
*   the message was marked for deletion using `.delete( )`.


##### Ejemplo


```4d
 var $server; $mailInfo : Object
 var $mailNumber : Integer

 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

  //message info
 $mailInfo:=$transporter.getMailInfo(1) //get the first mail
 If($mailInfo #Null)
    ALERT("First mail size is:"+String($mailInfo.size)+" bytes.")
 End if
```




## .getMailInfoList()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R2  | Añadidos       |
</details>

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->
**.getMailInfoList()** : Collection<!-- END REF -->

<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
| Parámetros | Tipo       |    | Descripción                     |
| ---------- | ---------- |:--:| ------------------------------- |
| Resultado  | Collection | <- | Colección de objetos `mailInfo` |
<!-- END REF -->


##### Descripción

La función `.getMailInfoList()` <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->devuelve una colección de objetos `mailInfo` que describen todos los mensajes del buzón designado por el [`POP3 transporter`](#pop3-transporter-object)<!-- END REF -->. Esta función permite gestionar localmente la lista de mensajes localizados en el servidor de correo POP3.

Cada objeto `mailInfo` de la colección devuelta contiene las siguientes propiedades:

| Propiedad    | Tipo   | Descripción                                                   |
| ------------ | ------ | ------------------------------------------------------------- |
| \[ ].size   | Número | Tamaño del mensaje en bytes                                   |
| \[ ].number | Número | Número del mensaje                                            |
| \[ ].id     | Texto  | ID único del mensaje (útil si almacena el mensaje localmente) |

Si el buzón no contiene ningún mensaje, se devuelve una colección vacía.



#### Propiedades number e ID

*number* es el número de un mensaje del buzón en el momento en que se creó el `POP3_transporter`. La propiedad *number* no es un valor estático en relación con ningún mensaje específico y cambiará de una sesión a otra dependiendo de su relación con otros mensajes en el buzón en el momento en que se abrió la sesión. Los números asignados a los mensajes sólo son válidos durante la vigencia del [`POP3_transporter`](#pop3-transporter-object). En el momento en que el `POP3_transporter` sea eliminado cualquier mensaje marcado para ser borrado será eliminado. Cuando el usuario vuelva a conectarse al servidor, los mensajes actuales en el buzón serán renumerados de 1 a x.

Sin embargo, el *id* es un número único asignado al mensaje cuando fue recibido por el servidor. Este número se calcula utilizando la hora y la fecha de recepción del mensaje y es un valor asignado por su servidor POP3. Lamentablemente, los servidores POP3 no utilizan el *id* como referencia principal de sus mensajes. A lo largo de las sesiones POP3 deberá especificar el *number* como referencia a los mensajes del servidor. Los desarrolladores deben tener cierto cuidado si desarrollan soluciones que introducen referencias a los mensajes en una base de datos pero dejan el cuerpo del mensaje en el servidor.


##### Ejemplo

Quiere saber el número total y el tamaño de los correos electrónicos en el buzón:

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Mandatory
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 C_COLLECTION($mailInfo)
 C_LONGINT($vNum;$vSize)

 $mailInfo:=$transporter.getMailInfoList()
 $vNum:=$mailInfo.length
 $vSize:=$mailInfo.sum("size")

 ALERT("The mailbox contains "+String($vNum)+" message(s) for "+String($vSize)+" bytes.")
```




## .getMIMEAsBlob()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R3  | Añadidos       |
</details>

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->
**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
| Parámetros | Tipo    |    | Descripción                                               |
| ---------- | ------- |:--:| --------------------------------------------------------- |
| msgNumber  | Integer | -> | Número del mensaje en la lista                            |
| Resultado  | Blob    | <- | Blob de la cadena MIME devuelta por el servidor de correo |
<!-- END REF -->


##### Descripción

La función `.getMIMEAsBlob()` <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->devuelve un BLOB con el contenido MIME del mensaje correspondiente al *msgNumber* en el buzón designado por el [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

En *msgNumber*, pase el número del mensaje a recuperar. Este número es devuelto en la propiedad number por el método [`.getMailInfoList()`](#getmailinfolist).

El método devuelve un BLOB vacío si:

*   *msgNumber* designates a non-existing message,
*   el mensaje se marcó para su eliminación utilizando `.delete()`.


**BLOB devuelto**

`.getMIMEAsBlob()` devuelve un `BLOB` que puede almacenarse en una base de datos o convertirse en un objeto [`Email`](EmailObjectClass.md#email-object) con el comando `MAIL Convert from MIME`.


##### Ejemplo

Quiere saber el número total y el tamaño de los correos electrónicos en el buzón:

```4d
 var $server : Object
 var $mailInfo : Collection
 var $blob : Blob
 var $transporter : 4D.POP3Transporter

 $server:=New object
 $server.host:="pop.gmail.com"
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $blob:=$transporter.getMIMEAsBlob($mailInfo[0].number)
```



<!-- INCLUDE transporter.host.Desc -->






<!-- INCLUDE transporter.logFile.Desc -->



<!-- INCLUDE transporter.port.Desc -->





<!-- REF POP3TransporterClass.undeleteAll().Desc -->
## .undeleteAll()

<details><summary>Histórico</summary>
| Versión | Modificaciones |
| ------- | -------------- |
| v18 R2  | Añadidos       |
</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->
**.undeleteAll()**<!-- END REF -->

<!-- REF #POP3TransporterClass.undeleteAll().Params -->
| Parámetros | Tipo |  | Descripción                  |
| ---------- | ---- |::| ---------------------------- |
|            |      |  | No requiere ningún parámetro |
<!-- END REF -->


##### Descripción

La función `.undeleteAll()` <!-- REF #POP3TransporterClass.undeleteAll().Summary -->elimina todas las banderas de borrado definidas en los correos electrónicos en el [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->. 

<!-- END REF -->



<!-- INCLUDE transporter.user.Desc -->



<style> h2 { background: #d9ebff;}</style>
