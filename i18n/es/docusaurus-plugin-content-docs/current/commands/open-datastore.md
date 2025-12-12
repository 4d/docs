---
id: open-datastore
title: Open datastore
displayed_sidebar: docs
---

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                          |
| ----------- | --------------------------------------- |
| 21          | Qodly cloud discontinued                |
| 20 R6       | Support access to Qodly cloud instances |
| 20 R4       | Nueva propiedad *passwordAlgorithm*     |
| 18          | Añadidos                                |

</details>

<!--REF #_command_.Open datastore.Syntax-->**Open datastore**( *connectionInfo* : Object ; *localID* : Text ) : 4D.DataStoreImplementation<!-- END REF-->

<!--REF #_command_.Open datastore.Params-->

| Parámetros     | Tipo                                       |                             | Descripción                                                                                         |
| -------------- | ------------------------------------------ | --------------------------- | --------------------------------------------------------------------------------------------------- |
| connectionInfo | Object                                     | &#8594; | Propiedades de conexión utilizadas para alcanzar el almacén de datos remoto                         |
| localID        | Text                                       | &#8594; | Id para asignar al almacén de datos abierto en la aplicación local (obligatorio) |
| Resultado      | 4D.DataStoreImplementation | &#8592; | Objeto del almacén de datos                                                                         |

<!-- END REF-->

## Descripción

El comando `Open datastore` <!-- REF #_command_.Open datastore.Summary -->conecta la aplicación al datastore remoto identificado por el parámetro *connectionInfo*<!-- END REF --> y devuelve un objeto `4D.DataStoreImplementation` asociado con el alias local *localID*.

Exchanges with the remote datastore are automatically managed via REST requests. The *connectionInfo* 4D datastore must be available as a remote datastore, i.e.:

- its Web Server must be launched with http and/or https enabled,
- its datastore is exposed to REST ([**Expose as REST server**](REST/configuration.md#starting-the-rest-server) option checked),
- a client license must be available if required (see note).

:::note

Las peticiones `Open datastore` dependen de la API REST 4D y pueden requerir una licencia 4D Client para abrir la conexión en un 4D Server remoto. Consulte la [sección de inicio de sesión de usuario](../REST/authUsers.md#force-login-mode) para saber cómo configurar la autenticación dependiendo del modo de inicio de sesión de usuario seleccionado.

:::

Pase en *connectionInfo* un objeto que describa el almacén de datos remoto al que desea conectarse. Puede contener las siguientes propiedades (todas las propiedades son opcionales excepto *hostname*):

| Propiedad   | Tipo    | Aplicación 4D remota                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                          |
| ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| hostname    | Text    | Nombre o dirección IP de la base de datos remota + ":" + número de puerto (el número de puerto es obligatorio)                                                                                                                                                                                                                                                                                                                                  | API Endpoint de la instancia Qodly cloud |
| user        | Text    | Nombre de usuario                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |                                          |
| contraseña  | Text    | Contraseña del usuario                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                          |
| idleTimeout | Integer | Tiempo de espera de la sesión de inactividad (en minutos), después del cual la sesión es cerrada automáticamente por 4D. Si se omite, el valor por defecto es 60 (1h). El valor no puede ser < 60 (si se pasa un valor inferior, el tiempo de espera se establece en 60). Para más información, consulte **Cierre de sesiones**. |                                          |
| tls         | Boolean | True para utilizar una conexión segura(1). Si se omite, es false por defecto. Se recomienda utilizar una conexión segura siempre que sea posible.                                                                                                                                                                                                                                                               |                                          |
| type        | Text    | debe ser "4D Server"                                                                                                                                                                                                                                                                                                                                                                                                                                                               |                                          |

(1) Si `tls` es true, se utiliza el protocolo HTTPS si:

- HTTPS está activado en el almacén de datos remoto
- el número de puerto especificado coincide con el puerto HTTPS configurado en los ajustes de la base de datos
- un certificado válido y una llave privada de encriptación están instalados en la aplicación 4D. En caso contrario, se produce el error "1610 - Una solicitud remota al host xxx ha fallado"

*localID* es un alias local para la sesión abierta en el almacén de datos remoto. Si *localID* ya existe en la aplicación, se utiliza. En caso contrario, se crea una nueva sesión *localID* cuando se utiliza el objeto datastore.

Una vez abierta la sesión, las siguientes sentencias son equivalentes y devuelven una referencia sobre el mismo objeto datastore:

```4d
 $myds:=Open datastore(connectionInfo;"myLocalId")
 $myds2:=ds("myLocalId")
  //$myds y $myds2 son equivalentes
```

Los objetos disponibles en el `4D.DataStoreImplementation` son mapeados en función de las [reglas generales ORDA](ORDA/dsMapping.md#reglas-generales).

Si no se encuentra ningún datastore coincidente, `Open datastore` devuelve **Null**.

## Ejemplo 1

Conexión a un almacén de datos remoto sin usuario/contraseña:

```4d
 var $connectTo : Object
 var $remoteDS : 4D.DataStoreImplementation
 $connectTo:=New object("type";"4D Server";"hostname";"192.168.18.11:8044")
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

## Ejemplo 2

Conexión a un almacén de datos remoto con usuario/contraseña/ timeout / tls:

```4d
 var $connectTo : Object
 var $remoteDS : 4D.DataStoreImplementation
 $connectTo:=New object("type";"4D Server";"hostname";\"192.168.18.11:4443";\  
  "user";"marie";"password";$pwd;"idleTimeout";70;"tls";True)
 $remoteDS:=Open datastore($connectTo;"students")
 ALERT("This remote datastore contains "+String($remoteDS.Students.all().length)+" students")
```

## Ejemplo 3

Trabajar con varios almacenes de datos remotos:

```4d
 var $connectTo : Object
 var $frenchStudents; $foreignStudents : 4D.DataStoreImplementation
 $connectTo:=New object("hostname";"192.168.18.11:8044")
 $frenchStudents:=Open datastore($connectTo;"french")
 $connectTo.hostname:="192.168.18.11:8050"
 $foreignStudents:=Open datastore($connectTo;"foreign")
 ALERT("They are "+String($frenchStudents.Students.all().length)+" French students")
 ALERT("They are "+String($foreignStudents.Students.all().length)+" foreign students")
```

## Gestión de errores

En caso de error, el comando devuelve **Null**. Si no se puede acceder al almacén de datos remoto (dirección incorrecta, servidor web no iniciado, http y https no habilitados...), se produce el error 1610 "Ha fallado una petición remota al host XXX". Puede interceptar este error con un método instalado por `ON ERR CALL`.

## Ver también

[ds](ds.md)

## Propiedades

|                        |                             |
| ---------------------- | --------------------------- |
| Número de comando      | 1452                        |
| Hilo seguro            | &check; |
| Modifica las variables | error                       |


