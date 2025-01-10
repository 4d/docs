---
id: POP3TransporterClass
title: POP3Transporter
---

La clase `POP3Transporter` permite recuperar mensajes de un servidor de correo electrónico POP3.

### Objeto POP3 Transporter

Los objetos POP3 Transporter se instancian con el comando [POP3 New transporter](#pop3-new-transporter). Ofrecen las siguientes propiedades y funciones:

|                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->|
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->|
| [<!-- INCLUDE #transporter.checkConnection().Syntax -->](#checkconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.checkConnection().Summary -->|
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.delete().Syntax -->](#delete)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.delete().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Syntax -->](#getboxinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getBoxInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMail().Syntax -->](#getmail)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMail().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfo().Syntax -->](#getmailinfo)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfo().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Syntax -->](#getmailinfolist)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMailInfoList().Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Syntax -->](#getmimeasblob)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.getMIMEAsBlob().Summary -->|
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->|
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->|
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->|
| [<!-- INCLUDE #POP3TransporterClass.undeleteAll().Syntax -->](#undeleteall)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #POP3TransporterClass.undeleteAll().Summary -->|
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->|


<!-- REF POP3TransporterClass.POP3 New transporter.Desc -->
## POP3 New transporter

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

<!-- REF #_command_.POP3 New transporter.Syntax -->**POP3 New transporter**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #_command_.POP3 New transporter.Params -->
| Parámetros | Tipo               |    | Descripción                                                                    |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | object             | -> | Información del servidor de correo                                             |
| Result     | 4D.POP3Transporter | <- | [POP3 transporter object](#pop3-transporter-object)|<!-- END REF -->


|


#### Descripción

El comando `POP3 New transporter` <!-- REF #_command_.POP3 New transporter.Summary -->configura una nueva conexión POP3<!-- END REF -->según el parámetro *server* y devuelve un nuevo objeto *[POP3 transporter](#pop3-transporter-object)*. El objeto transportador devuelto se utilizará normalmente para recibir correos electrónicos.

En el parámetro *server*, pase un objeto que contenga las siguientes propiedades:

| *server*                                                                                                                                                                                                                                                                                                                                                         | Valor por defecto (si se omite)                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [<!-- INCLUDE #transporter.acceptUnsecureConnection.Syntax -->](#acceptunsecureconnection)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.acceptUnsecureConnection.Summary -->| False                                                                    |
| .**accessTokenOAuth2**: Text String representing OAuth 2 authorization credentials. Sólo se utiliza con OAUTH2 `authenticationMode`. Si se utiliza `accessTokenOAuth2` pero se omite `authenticationMode`, se utiliza el protocolo OAuth 2 (si el servidor lo permite). Cadena de texto u objeto token que representan las credenciales de autorización OAuth 2. | ninguno                                                                  |
| [<!-- INCLUDE #transporter.authenticationMode.Syntax -->](#authenticationmode)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.authenticationMode.Summary -->| se utiliza el modo de autenticación más seguro soportado por el servidor |
| [<!-- INCLUDE #transporter.connectionTimeOut.Syntax -->](#connectiontimeout)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.connectionTimeOut.Summary -->| 30                                                                       |
| [<!-- INCLUDE #transporter.host.Syntax -->](#host)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.host.Summary -->| *mandatory*                                                              |
| [<!-- INCLUDE #transporter.logFile.Syntax -->](#logfile)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.logFile.Summary -->| ninguno                                                                  |
| **.password** : Text  User password for authentication on the server. Cadena de texto u objeto token que representan las credenciales de autorización OAuth 2.                                                                                                                                                                                                   | ninguno                                                                  |
| [<!-- INCLUDE #transporter.port.Syntax -->](#port)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.port.Summary -->| 995                                                                      |
| [<!-- INCLUDE #transporter.user.Syntax -->](#user)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #transporter.user.Summary -->| ninguno                                                                  |

#### Result

La función devuelve un [**objeto POP3 transporter**](#pop3-transporter-object). Todas las propiedades devueltas son **de sólo lectura**.
> La conexión POP3 se cierra automáticamente cuando se destruye el objeto transportador.

#### Ejemplo

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obligatorio
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"
 $server.logFile:="LogTest.txt" //log a registrar en la carpeta Logs

 var $transporter : 4D.POP3Transporter
 $transporter:=POP3 New transporter($server)

 $status:=$transporter.checkConnection()
 If(Not($status.success))
    ALERT("An error occurred receiving the mail: "+$status.statusText)
 End if
```

<!-- END REF -->

## 4D.POP3Transporter.new()

<!-- REF #4D.POP3Transporter.new().Syntax -->**4D.POP3Transporter.new**( *server* : Object ) : 4D.POP3Transporter<!-- END REF -->


<!-- REF #4D.POP3Transporter.new().Params -->
| Parámetros | Tipo               |    | Descripción                                                                    |
| ---------- | ------------------ |:--:| ------------------------------------------------------------------------------ |
| server     | Object             | -> | Información del servidor de correo                                             |
| Result     | 4D.POP3Transporter | <- | [POP3 transporter object](#pop3-transporter-object)|<!-- END REF -->

|

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
    Else
       ALERT("Error: "+$status.statusText)
    End if
 End if
```

<!-- INCLUDE transporter.connectionTimeOut.Desc -->

## .delete()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

<!-- REF #POP3TransporterClass.delete().Syntax -->**.delete**( *msgNumber* : Integer )<!-- END REF -->


<!-- REF #POP3TransporterClass.delete().Params -->
| Parámetros | Tipo    |    | Descripción                                              |
| ---------- | ------- |:--:| -------------------------------------------------------- |
| msgNumber  | Integer | -> | Número del mensaje a eliminar|<!-- END REF -->

|

##### Descripción

La función `.delete( )` <!-- REF #POP3TransporterClass.delete().Summary -->marca el correo electrónico *msgNumber* para su eliminación del servidor POP3<!-- END REF -->.

En el parámetro *msgNumber*, pase el número del correo electrónico a eliminar. Este número es devuelto en la propiedad number por el método [`.getMailInfoList()`](#getmailinfolist).

La ejecución de este método no elimina realmente ningún correo electrónico. El correo electrónico marcado se eliminará del servidor POP3 sólo cuando se destruya el objeto `POP3_transporter` (creado con `POP3 New transporter`). El marcador también puede eliminarse utilizando el método `.undeleteAll()`.
> Si la sesión actual termina inesperadamente y se cierra la conexión (por ejemplo, por tiempo de espera, fallo de la red, etc.), se genera un mensaje de error y los mensajes marcados para ser borrados permanecerán en el servidor POP3.

##### Ejemplo

```4d
 $mailInfoList:=$POP3_transporter.getMailInfoList()
 For each($mailInfo;$mailInfoList)
  // Marcar el correo como "a eliminar al final de la sesión"
    $POP3_transporter.delete($mailInfo.number)
 End for each
  // Forzar el cierre de sesión para eliminar los correos marcados para ser borrados
 CONFIRM("Selected messages will be deleted.";"Delete";"Undo")
 If(OK=1) //borrado confirmado
    $POP3_transporter:=Null
 Else
    $POP3_transporter.undeleteAll() //eliminar los marcadores de eliminación
 End if
```

## .getBoxInfo()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

<!-- REF #POP3TransporterClass.getBoxInfo().Syntax -->**.getBoxInfo()** : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getBoxInfo().Params -->
| Parámetros | Tipo   |    | Descripción                               |
| ---------- | ------ |:--:| ----------------------------------------- |
| Result     | Object | <- | objeto boxInfo|<!-- END REF -->

|

##### Descripción

La función `.getBoxInfo()` <!-- REF #POP3TransporterClass.getBoxInfo().Summary -->devuelve un objeto `boxInfo` correspondiente al buzón designado por el [`transportador POP3`](#pop3-transporter-object)<!-- END REF -->. Esta función permite recuperar la información sobre el buzón.

El objeto `boxInfo` devuelto contiene las siguientes propiedades:

| Propiedad | Tipo   | Descripción                    |
| --------- | ------ | ------------------------------ |
| mailCount | Number | Número de mensajes en el buzón |
| size      | Number | Tamaño del mensaje en bytes    |

##### Ejemplo

```4d
 var $server; $boxinfo : Object

 $server:=New object
 $server.host:="pop.gmail.com" //Obligatorio
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

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

<!-- REF #POP3TransporterClass.getMail().Syntax -->**.getMail**( *msgNumber* : Integer ) : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMail().Params -->
| Parámetros | Tipo    |    | Descripción                                                                 |
| ---------- | ------- |:--:| --------------------------------------------------------------------------- |
| msgNumber  | Integer | -> | Número del mensaje en la lista                                              |
| Result     | Object  | <- | [Objeto Email](EmailObjectClass.md#email-object)|<!-- END REF -->

|

##### Descripción

La función `.getMail()` <!-- REF #POP3TransporterClass.getMail().Summary -->devuelve el objeto `Email` correspondiente al *msgNumber* en el buzón designado por el [`transportador POP3`](#pop3-transporter-object)<!-- END REF -->. Esta función permite recuperar la información sobre el email.

Pase en *msgNumber* el número del mensaje a recuperar. Este número es devuelto en la propiedad number por la función [`.getMailInfoList()`](#getmailinfolist).

El método devuelve Null si:

* *msgNumber* designa un mensaje inexistente,
* el mensaje se marcó para su eliminación utilizando `.delete( )`.

**Objeto devuelto**

`.getMail()` devuelve un objeto [`Email`](EmailObjectClass.md#email-object).

##### Ejemplo

Quiere saber el remitente del primer correo del buzón:

```4d
 var $server; $transporter : Object
 var $mailInfo : Collection
 var $sender : Variant

 $server:=New object
 $server.host:="pop.gmail.com" //Obligatorio
 $server.port:=995
 $server.user:="4d@gmail.com"
 $server.password:="XXXXXXXX"

 $transporter:=POP3 New transporter($server)

 $mailInfo:=$transporter.getMailInfoList()
 $sender:=$transporter.getMail($mailInfo[0].number).from
```

## .getMailInfo()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

<!-- REF #POP3TransporterClass.getMailInfo().Syntax -->**.getMailInfo**( *msgNumber* : Integer ) : Object<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfo().Params -->
| Parámetros | Tipo    |    | Descripción                                |
| ---------- | ------- |:--:| ------------------------------------------ |
| msgNumber  | Integer | -> | Número del mensaje en la lista             |
| Result     | Object  | <- | objeto mailInfo|<!-- END REF -->

|

##### Descripción

La función `.getMailInfo()` <!-- REF #POP3TransporterClass.getMailInfo().Summary -->devuelve un objeto `mailInfo` correspondiente al *msgNumber* en el buzón designado por el [`transportista POP3`](#pop3-transporter-object)<!-- END REF -->. Esta función permite gestionar localmente la lista de mensajes localizados en el servidor de correo POP3.

En *msgNumber*, pase el número del mensaje a recuperar. Este número es devuelto en la propiedad number por el método [`.getMailInfoList()`](#getmailinfolist).

El objeto `mailInfo` devuelto contiene las siguientes propiedades:

| Propiedad | Tipo   | Descripción                 |
| --------- | ------ | --------------------------- |
| size      | Number | Tamaño del mensaje en bytes |
| id        | Text   | ID único del mensaje        |

El método devuelve **Null** si:

* *msgNumber* designa un mensaje inexistente,
* el mensaje se marcó para su eliminación utilizando `.delete( )`.

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
 End if
```

## .getMailInfoList()

<details><summary>Histórico</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

<!-- REF #POP3TransporterClass.getMailInfoList().Syntax -->**.getMailInfoList()** : Collection<!-- END REF -->


<!-- REF #POP3TransporterClass.getMailInfoList().Params -->
| Parámetros | Tipo       |    | Descripción                                                |
| ---------- | ---------- |:--:| ---------------------------------------------------------- |
| Result     | Collection | <- | Colección de objetos `mailInfo`|<!-- END REF -->

|

##### Descripción

La función `.getMailInfoList()` <!-- REF #POP3TransporterClass.getMailInfoList().Summary -->devuelve una colección de objetos `mailInfo` que describen todos los mensajes del buzón designado por el [`transportador POP3`](#pop3-transporter-object)<!-- END REF -->. Esta función permite gestionar localmente la lista de mensajes localizados en el servidor de correo POP3.

Cada objeto `mailInfo` de la colección devuelta contiene las siguientes propiedades:

| Propiedad    | Tipo   | Descripción                                                   |
| ------------ | ------ | ------------------------------------------------------------- |
| \[ ].size   | Number | Tamaño del mensaje en bytes                                   |
| \[ ].number | Number | Número del mensaje                                            |
| \[ ].id     | Text   | ID único del mensaje (útil si almacena el mensaje localmente) |

Si el buzón no contiene ningún mensaje, se devuelve una colección vacía.

#### Propiedades number e ID

*number* es el número de un mensaje del buzón en el momento en que se creó el `POP3_transporter`. La propiedad *number* no es un valor estático en relación con ningún mensaje específico y cambiará de una sesión a otra dependiendo de su relación con otros mensajes en el buzón en el momento en que se abrió la sesión. Los números asignados a los mensajes sólo son válidos durante la vigencia del [`POP3_transporter`](#pop3-transporter-object). En el momento en que el `POP3_transporter` sea eliminado cualquier mensaje marcado para ser borrado será eliminado. Cuando el usuario vuelva a conectarse al servidor, los mensajes actuales en el buzón serán renumerados de 1 a x.

Sin embargo, el *id* es un número único asignado al mensaje cuando fue recibido por el servidor. Este número se calcula utilizando la hora y la fecha de recepción del mensaje y es un valor asignado por su servidor POP3. Lamentablemente, los servidores POP3 no utilizan el *id* como referencia principal de sus mensajes. A lo largo de las sesiones POP3 deberá especificar el *number* como referencia a los mensajes del servidor. Los desarrolladores deben tener cierto cuidado si desarrollan soluciones que introducen referencias a los mensajes en una base de datos pero dejan el cuerpo del mensaje en el servidor.

##### Ejemplo

Quiere saber el número total y el tamaño de los correos electrónicos en el buzón:

```4d
 var $server : Object
 $server:=New object
 $server.host:="pop.gmail.com" //Obligatorio
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

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R3       | Añadidos       |

</details>

<!-- REF #POP3TransporterClass.getMIMEAsBlob().Syntax -->**.getMIMEAsBlob**( *msgNumber* : Integer ) : Blob<!-- END REF -->


<!-- REF #POP3TransporterClass.getMIMEAsBlob().Params -->
| Parámetros | Tipo    |    | Descripción                                                                          |
| ---------- | ------- |:--:| ------------------------------------------------------------------------------------ |
| msgNumber  | Integer | -> | Número del mensaje en la lista                                                       |
| Result     | Blob    | <- | Blob de la cadena MIME devuelta por el servidor de correo|<!-- END REF -->

|

##### Descripción

La función `.getMIMEAsBlob()` <!-- REF #POP3TransporterClass.getMIMEAsBlob().Summary -->The `.getMIMEAsBlob()` function<!-- END REF -->.

En *msgNumber*, pase el número del mensaje a recuperar. Este número es devuelto en la propiedad number por el método [`.getMailInfoList()`](#getmailinfolist).

El método devuelve un BLOB vacío si:

* *msgNumber* designa un mensaje inexistente,
* el mensaje se marcó para su eliminación utilizando `.delete()`.

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

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 18 R2       | Añadidos       |

</details>

<!-- REF #POP3TransporterClass.undeleteAll().Syntax -->**.undeleteAll()**<!-- END REF -->


<!-- REF #POP3TransporterClass.undeleteAll().Params -->
| Parámetros | Tipo |  | Descripción                                             |
| ---------- | ---- |::| ------------------------------------------------------- |
|            |      |  | No requiere ningún parámetro|<!-- END REF -->

|

##### Descripción

La función `.undeleteAll()` <!-- REF #POP3TransporterClass.undeleteAll().Summary -->elimina todas las banderas de borrado establecidas en los correos electrónicos en el [`POP3_transporter`](#pop3-transporter-object)<!-- END REF -->.

<!-- END REF -->

<!-- INCLUDE transporter.user.Desc -->
