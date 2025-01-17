---
id: metodo-base-on-web-authentication
title: Metodo base On Web Authentication
slug: /commands/metodo-base-on-web-authentication
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Web Authentication.Syntax-->$1, $2, $3, $4, $5, $6 -> Método base On Web Authentication : Boolean<!-- END REF-->
<!--REF #_command_.Metodo base On Web Authentication.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| $1 | Texto | &#8592; | URL |
| $2 | Texto | &#8592; | Encabezado HTTP + Cuerpo HTTP |
| $3 | Texto | &#8592; | Dirección IP del navegador |
| $4 | Texto | &#8592; | Dirección IP del servidor |
| $5 | Texto | &#8592; | Nombre de usuario |
| $6 | Texto | &#8592; | Contraseña |
| Resultado | Boolean | &#8592; | True = petición aceptada, False = petición rechazada |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Metodo base On Web Authentication.Summary-->El Método base On Web Authenticationestá a cargo de administrar el acceso al motor del servidor web.<!-- END REF--> Es llamado automáticamente por 4D o 4D Server cuando una petición de un navegador web requiere la ejecución de un método 4D en el servidor (llamada de un método vía un URL *4DACTION* o  una etiqueta *4DSCRIPT*, etc.). 

Este método recibe seis parámetros de tipo Texto, pasados por 4D: $1, $2, $3, $4, $5, y $6 y devuelve un booleano, $0\. La descripción de estos parámetros es la siguiente:

| **Parámetros** | **Tipo** | **Descripción**                                      |
| -------------- | -------- | ---------------------------------------------------- |
| $1             | Texto    | URL                                                  |
| $2             | Texto    | Encabezado + Cuerpo HTTP (32 KB máximo)              |
| $3             | Texto    | Dirección IP del navegador                           |
| $4             | Texto    | Dirección IP que llama al servidor                   |
| $5             | Texto    | Nombre del usuario                                   |
| $6             | Texto    | Contraseña                                           |
| $0             | Booleano | True = petición aceptada, False = petición rechazada |

Debe declarar estos parámetros de esta forma:

```4d
  // Método de base On Web Authentication
 
 var $1;$2;$3;$4;$5;$6 : Text
 var $0 : Boolean
 
  // Código para el método
```

**Nota:** todos los parámetros del Método base On Web Authenticationno se llenarán. La información recibida por el método de base depende las opciones que haya seleccionado previamente en la caja de diálogo de Propiedades de la base. Consulte la sección *Seguridad de las conexiones*).

* **URL**

 El primer parámetro (*$1*) es el URL introducido por el usuario en el área ubicación de su navegador web, menos la dirección local.

 Tomemos el ejemplo de una conexión de Intranet. Supongamos que la dirección IP de su equipo servidor web 4D es *123.45.67.89*. La siguiente tabla muestra los valores de *$1* dependiendo del URL introducido en el navegador web:

| **URL introducido en el navegador web**    | **Valor del parámetro $1**     |
| ------------------------------------------ | ------------------------------ |
| 123.45.67.89                               | /                              |
| http://123.45.67.89                        | /                              |
| 123.45.67.89/Clientes                      | /Clientes                      |
| http://123.45.67.89/Clientes               | /Clientes                      |
| http://123.45.67.89/Clientes/Añadir        | /Clientes/Añadir               |
| 123.45.67.89/Hacer\_esto/Si\_OK/Hacer\_eso | /Hacer\_esto/Si\_OK/Hacer\_eso |

* **Encabezado y cuerpo de la petición HTTP**

 El segundo parámetro (*$2*) es el encabezado y el cuerpo de la petición HTTP enviada por el navegador web. Note que esta información se pasa al Método base On Web Authentication tal como está. El contenido varía en función del tipo de navegador web que esté intentando la conexión. Si su aplicación manipula esta información, es su decisión si analiza el encabezado y el cuerpo.

**Notas:**

* Por razones de rendimiento, el tamaño de los datos que transita vía el parámetro $2 no debe superar los 32 KB. De lo contrario serán truncados por el servidor HTTP de 4D.
* Para mayor información sobre este parámetro, consulte la descripción del [Método base On Web Connection](metodo-base-on-web-connection.md).
* **Dirección IP del navegador**  
El tercer parámetro $3 recibe la dirección IP del equipo navegador. Esta información permite distinguir entre las conexiones de Intranet e Internet.  
**Nota:** 4D devuelve las direcciones IPv4 en un formato híbrido IPv6 escritos con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la dirección IPv4 192.168.2.34\. Para mayor información, consulte la sección *Soporte de IP v6*.
* **Dirección IP para llamar al servidor**  
El cuarto parámetro $4 recibe la dirección IP utilizada para llamar al servidor Web. 4D a partir de la versión 6.5 autoriza el multi-homing, permitiendo explotar equipos con más de una dirección IP. Para mayor información, consulte la sección [QR DELETE COLUMN](qr-delete-column.md).
* **Nombre del usuario y contraseña**  
Los parámetros $5 y $6 reciben el nombre de usuario y contraseña introducidos por el usuario en la caja de diálogo estándar de identificación mostrada por el navegador. Esta caja de diálogo aparece para cada conexión, si una opción de gestión de contraseñas ha sido seleccionada en las Propiedades de la base (ver la sección *Seguridad de las conexiones*).

**Nota:** si el nombre de usuario enviado por el navegador existe en 4D, el parámetro $6 (la contraseña del usuario) no se devuelve por razones de seguridad.

**• Parámetro $0**  
  
 El Método base On Web Authentication devuelve un booleano en $0:

   * Si $0 es [True](true.md "True"), la conexión es aceptada.
   * Si $0 es [False](false.md "False"), la conexión es rechazada.

El [Método base On Web Connection](metodo-base-on-web-connection.md) sólo se ejecuta si la conexión ha sido aceptada por **On Web Authentication**.

**Advertencia:** si no se pasa ningún valor en *$0* o si *$0* no se define en el Método base On Web Authentication, la conexión se considerará como aceptada y se ejecuta el [Método base On Web Connection](metodo-base-on-web-connection.md)*Licenses*.

**Notas:**

* No llame elementos de interfaz en el Método base On Web Authentication ([ALERT](alert.md), [DIALOG](../commands/dialog.md), etc.) porque de lo contrario su ejecución se interrumpirá y la conexión será rechazada. Lo mismo sucede si se presenta un error durante su proceso.
* Es posible evitar la ejecución por *4DACTION* o *4DSCRIPT* de cada método de proyecto con la ayuda de la opción “Disponible vía las etiquetas HTML y URLs (4DACTION...) en la caja de diálogo de las Propiedades de los métodos. Para mayor información sobre este punto, consulte la sección *Seguridad de las conexiones*.

#### Llamadas del método base On Web Authentication 

El Método base On Web Authentication se llama automáticamente, sin importar el modo, cuando una petición o proceso requiere la ejecución de un método 4D. También se llama cuando el servidor web recibe un URL estático inválido (por ejemplo, si la página estática solicitada no existe). 

Por lo tanto el Método base On Web Authentication se llama en los siguientes casos:

* cuando 4D recibe un URL que comienza por *4DACTION/*
* cuando 4D recibe un URL que comienza por *4DCGI/*
* cuando 4D recibe un URL que comienza por *4DSYNC/*
* cuando 4D recibe un URL solicitando una página estática que no existe
* cuando 4D recibe un URL de acceso a la raíz y no se ha definido una página de inicio en las propiedades de la base o por medio del comando [WEB SET HOME PAGE](web-set-home-page.md)
* cuando 4D procesa una etiqueta *4DSCRIPT* en una página semidinámica
* cuando 4D procesa una etiqueta *4DLOOP* basada en un método en una página semidinámica.
**Nota de compatibilidad:** el método base también se llama cuando 4D recibe un URL que comienza por *4DMETHOD/*. Este URL es obsoleto y sólo se conserva por razones de compatibilidad.

Note que el Método base On Web Authentication NO se llama cuando el servidor recibe un URL solicitando una página estática válida.

#### Ejemplo 1 

Ejemplo del *Método de base On Web Authentication* en modo BASIC: 

```4d
  //Método de base On Web Authentication
 var $5;$6;$3;$4 : Text
 var $usuario;$contraseña;$IPNavegador;$IPServidor : Text
 var $4Dusuario : Boolean
 ARRAY TEXT($usuarios;0)
 ARRAY LONGINT($nums;0)
 var $upos : Integer
 var $0 : Boolean
 
 $0:=False
 
 $usuario:=$5
 $contraseña:=$6
 $IPNavegador:=$3
 $IPServidor:=$4
 
  //Por razones de seguridad, rechazar nombres que contengan @
 If(WithWildcard($usuario)|WithWildcard($contraseña))
    $0:=False
  //El método WithWildcard se describe a continuación
 Else
  //Verificar para ver si es un usuario 4D
    GET USER LIST($usuarios;$nums)
    $upos:=Find in array($usuarios;$usuario)
    If($upos >0)
       $usuario4D:=Not(Is user deleted($nums{$upos}))
    Else
       $usuario4D:=False
    End if
 
    If(Not($usuario4D))
  //No es un usuario definido en 4D, buscar en la tabla de usuarios Web
       QUERY([UsuariosWeb];[UsuariosWeb]usuario=$usuario;*)
       QUERY([UsuariosWeb]; & [UsuariosWeb]contraseña=$contraseña)
       $0:=(Records in selection([UsuariosWeb])=1)
    Else
       $0:=True
    End if
 End if
  //¿Esta es una conexión de intranet?
 If(Substring($IPNavegador;1;7)#"192.100.")
    $0:=False
 End if
```

#### Ejemplo 2 

Ejemplo del  en modo DIGEST:

```4d
  //Método de base On Web Authentication
 var $1;$2;$5;$6;$3;$4 : Text
 var $usuario : Text
 var $0 : Boolean
 $0:=False
 $usuario:=$5
  //Por razones de seguridad, rechazar los nombres que contengan @
 If(WithWildcard($usuario))
    $0:=False
  //El método WithWildcard se describe a continuación
 Else
    QUERY([UsuariosWeb];[UsuariosWeb]usuario=$usuario)
    If(OK=1)
       $0:=WEB Validate digest($usuario;[UsuariosWeb]contraseña)
    Else
       $0:=False //Usuario inexistente
    End if
 End if
 
 El método de proyecto WithWildcard es el siguiente:
```

```4d
  //Método WithWildcard
  //WithWildcard ( Cadena) -> Booleano
  //WithWildcard ( Nombre ) -> Contiene un carácter arroba
 
 C_INTEGER($i)
 var $0 : Boolean
 var $1 : Text
 
 $0:=False
 For($i;1;Length($1))
    If(Character code(Substring($1;$i;1))=Character code("@"))
       $0:=True
    End if
 End for
```
