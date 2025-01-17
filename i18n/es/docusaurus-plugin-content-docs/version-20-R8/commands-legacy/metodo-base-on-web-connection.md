---
id: metodo-base-on-web-connection
title: Metodo base On Web Connection
slug: /commands/metodo-base-on-web-connection
displayed_sidebar: docs
---

<!--REF #_command_.Metodo base On Web Connection.Syntax-->$1, $2, $3, $4, $5, $6 -> Método base On Web Connection<!-- END REF-->
<!--REF #_command_.Metodo base On Web Connection.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| $1 | Texto | &#8592; | URL |
| $2 | Texto | &#8592; | Encabezado HTTP + Cuerpo HTTP |
| $3 | Texto | &#8592; | Dirección IP del navegador |
| $4 | Texto | &#8592; | Dirección IP del servidor |
| $5 | Texto | &#8592; | Nombre de usuario |
| $6 | Texto | &#8592; | Contraseña |

<!-- END REF-->

#### 

<!--REF #_command_.Metodo base On Web Connection.Summary-->El Método base On Web Connection puede llamarse en los siguientes casos: 

* el servidor web recibe una petición que comienza por el URL *4DCGI*.<!-- END REF-->
* el servidor web recibe una petición inválida.

Para mayor información, consulte el párrafo “” abajo.

La petición debe haber sido aceptada previamente por el [Método base On Web Authentication](metodo-base-on-web-authentication.md) (si existe) y el servidor web debe lanzarse.

El Método base On Web Connection recibe seis parámetros de tipo texto, pasados por 4D ($1, $2, $3, $4, $5 y $6). Los contenidos de estos parámetros son los siguientes: 

| **Parámetros** | **Tipo** | **Descripción**                                       |
| -------------- | -------- | ----------------------------------------------------- |
| $1             | Texto    | URL                                                   |
| $2             | Texto    | Encabezado HTTP + cuerpo HTTP (hasta 32 kb de límite) |
| $3             | Texto    | Dirección IP del navegador                            |
| $4             | Texto    | Dirección IP llamada del servidor                     |
| $5             | Texto    | Nombre de usuario                                     |
| $6             | Texto    | Contraseña                                            |

Debe declarar estos seis parámetros de esta manera:

```4d
  // Método de base On Web Connection
 
 var $1;$2;$3;$4;$5;$6 : Text
 
  // Código para el método
```

* **Datos extra del URL**  
    
El primer parámetro (*$1*) es el URL introducido por el usuario en el área de ubicación de su navegador web, menos la dirección local.  
Tomemos el ejemplo de una conexión de Intranet. Supongamos que la dirección IP de su equipo servidor web 4D es *123.45.67.89*. La tabla siguiente muestra los valores de *$1* dependiendo del URL introducido en el navegador web:  
    
| **URL introducido en el navegador**        | **Valor del parámetro $1**     |  
| ------------------------------------------ | ------------------------------ |  
| 123.45.67.89                               | /                              |  
| http://123.45.67.89                        | /                              |  
| 123.45.67.89/Clientes                      | /Clientes                      |  
| http://123.45.67.89/Clientes               | /Clientes                      |  
| http://123.45.67.89/Clientes/Añadir        | /Clientes/Añadir               |  
| 123.45.67.89/Hacer\_esto/Si\_OK/Hacer\_eso | /Hacer\_esto/Si\_OK/Hacer\_eso |  
    
    
Note que usted es libre de utilizar este parámetro a su conveniencia. 4D simplemente ignora los valores pasados más allá de la parte local del URL. Por ejemplo, puede establecer una convención donde el valor *"/Clientes/Añadir"* signifique “ir directamente a añadir un nuevo registro en la tabla *\[Clientes\]*.” Suministrando a los usuarios web de su base una lista de posibles valores y/o marcadores por defecto, puede ofrecer atajos a las diferentes partes de su aplicación. De esta forma, los usuarios web pueden acceder rápidamente a los recursos de su sitio web sin tener que navegar cada vez que se conecten a su base.

**Advertencia:** para evitar que un usuario acceda directamente a una base con un marcador creado durante una sesión anterior, 4D intercepta todo URL que corresponda a uno de los URLs estándar de 4D.

* **Encabezado y cuerpo de la petición HTTP**  
El segundo parámetro ($2) es el encabezado y el cuerpo de la petición HTTP enviada por el navegador web. Note que esta información se pasa a su Método base On Web Connection tal como está. El contenido varía en función del tipo de navegador web que esté intentando la conexión  
Con Safari corriendo en Mac OS, puede recibir un encabezado similar a este:  
```RAW  
GET /favicon.ico HTTP/1.1Referer: http://123.45.67.89/4dcgi/testUser-Agent:  Mozilla/5.0 (Macintosh; U; Intel Mac OS X; fr-fr) AppleWebKit/523.10.3  (KHTML, like Gecko) Version/3.0.4 Safari/523.10Cache-Control: max-age=0Accept: */*Accept-Language: fr-frAccept-Encoding: gzip, deflateConnection: keep-aliveHost: 123.45.67.89  
```  
    
    
Con Microsoft Internet Edge en Windows, puede recibir un encabezado similar a este:  
```RAW  
GET / HTTP/1.1Accept: image/jpeg, application/x-ms-application,  image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap,  application/vnd.ms-powerpoint, application/vnd.ms-excel,  application/msword, */*Accept-Language: fr-FRUser-Agent:  Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; Trident/4.0; SLCC2;  .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center  PC 6.0; .NET4.0C)Accept-Encoding: gzip, deflateHost: 123.45.67.89Connection: Keep-Alive  
```
 Si su aplicación manipula esta información, es su decisión analizar el encabezado y el cuerpo. **Nota:** por razones de rendimiento, el tamaño de estos datos no puede ser mayor a 32 KB. Si el tamaño es mayor, los datos son truncados por el servidor 4D HTTP.
* **Dirección IP del cliente web**  
El tercer parámetro *$3* recibe la dirección IP del equipo navegador. Esta información puede permitirle distinguir entre las conexiones de Intranet e Internet.  
Nota**:** 4D devuelve direcciones IPv4 en un formato híbrido IPv6 escrito con un prefijo de 96 bits, por ejemplo ::ffff:192.168.2.34 para la dirección IPv4 192.168.2.34\. Para mayor información, consulte la sección *Soporte de IP v6*.
* **Dirección IP del servidor**  
El cuarto parámetro *$4* recibe la dirección IP solicitada del servidor web 4D. 4D autoriza el multi-homing, el cual le permite explotar equipos que tengan más de una dirección IP. Para mayor información, consulte la sección *Parámetros del servidor web*.
* **Nombre de usuario y contraseña**  
Los parámetros *$5* y *$6* reciben el nombre de usuario y la contraseña introducidos por el usuario en la caja de diálogo estándar de identificación mostrada por el navegador. Esta caja de diálogo aparece para cada conexión, si la opción **Utilizar contraseñas** ha sido seleccionada en las Preferencias (ver sección *Seguridad de las conexiones*).

**Nota:** si el nombre de usuario enviado por el navegador existe en 4D, el parámetro *$6* (la contraseña del usuario) no se devuelve por razones de seguridad.

#### Llamadas al Método base On Web Connection 

El Método base On Web Connection puede utilizarse como punto de entrada para el servidor web 4D, bien sea utilizando la URL especial *4DCGI*, o utilizando las URLs de comando personalizadas.

**Advertencia:** la llamada de un comando 4D que muestra un elemento de interfaz ([DIALOG](../commands/dialog.md), [ALERT](alert.md)...) termina el procesamiento del método.

El Método base On Web Connection se llama en los siguientes casos:

* Cuando 4D recibe el URL */4DCGI*. El método base se llama con el URL */4DCGI/<action>* en *$1*.
* Cuando una página web llamada con un URL de tipo *<ruta>/<archivo>* no se encuentra. El método base se llama con la URL.
* Cuando una página web se llama con un URL del tipo *<file>/* y ninguna página ha sido definida por defecto. El método base se llama con la URL.
