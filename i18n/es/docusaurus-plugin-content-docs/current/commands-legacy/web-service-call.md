---
id: web-service-call
title: WEB SERVICE CALL
slug: /commands/web-service-call
displayed_sidebar: docs
---

<!--REF #_command_.WEB SERVICE CALL.Syntax-->**WEB SERVICE CALL** ( *urlAcceso* ; *soapAccion* ; *nomMetodo* ; *nomEspacio* {; *tipoCompuesto* {; *}} )<!-- END REF-->
<!--REF #_command_.WEB SERVICE CALL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| urlAcceso | Text | &#8594;  | URL de acceso al servicio Web |
| soapAccion | Text | &#8594;  | Contenido del campo SOAPAction |
| nomMetodo | Text | &#8594;  | Nombre del método |
| nomEspacio | Text | &#8594;  | Espacio del nombre (Namespace) |
| tipoCompuesto | Integer | &#8594;  | Configuración de tipos compuestos (tipos simples si se omite) |
| * | Operador | &#8594;  | No cerrar la conexión |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SERVICE CALL.Summary-->El comando **WEB SERVICE CALL** se utiliza para llamar un servicio web enviando una petición HTTP.<!-- END REF--> Esta petición contiene el mensaje SOAP creado previamente utilizando el comando [WEB SERVICE SET PARAMETER](web-service-set-parameter.md). 

Toda llamada posterior al comando [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) provocará la creación de una nueva petición. La ejecución de un comando **WEB SERVICE CALL** también borra todo resultado del servicio web llamado anteriormente y lo reemplaza con los nuevos resultados.

En *urlAcceso*, pase el URL completo que permite acceder al servicio web (no confunda este URL con el del archivo WSDL, que describe el servicio web).

* **Acceso en modo seguro (SSL)**

 Si quiere utilizar un servicio web en modo seguro utilizando SSL, pase https:// delante del URL en lugar de http://. Esta configuración activa automáticamente la conexión en modo seguro.

Note que este comando puede utilizar un certificado servidor (ver el comando [HTTP SET CERTIFICATES FOLDER](http-set-certificates-folder.md)). Si este certificado no es valido (vencido o revocado), la variable sistema OK toma el valor y se devuelve el error 901 "Certificado servidor invalido". Puede interceptar este error utilizando un método de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md). 

En *soapAccion*, pase el contenido del campo SOAPAction de la petición. Este campo contiene por lo general el valor “ServiceName#MethodName”. 

En *nomMetodo*, pase el nombre del método remoto (que pertenece al servicio web) que quiere ejecutar. 

En *espacioNombre*, pase el espacio del nombre XML (namespace) utilizado para la petición SOAP. Para mayor información sobre los nombres de espacios XML, consulte el Manual de Diseño.

El parámetro opcional *tipoCompuesto* especifica la configuración de los parámetros web Service enviados o recibidos (definidos utilizando los comandos [WEB SERVICE SET PARAMETER](web-service-set-parameter.md) y [WEB SERVICE GET RESULT](web-service-get-result.md).   
El valor del parámetro *tipoCompuesto* depende del modo de publicación del servicio web (DOC o RPC, ver el Manual de Diseño) y sus propios parámetros.

En *tipoCompuesto*, debe pasar una de las siguientes constantes, ubicadas en el tema *Servicios Web (Cliente)*:  

| Constante              | Tipo         | Valor |
| ---------------------- | ------------ | ----- |
| Web Service dynamic    | Entero largo | 0     |
| Web Service manual     | Entero largo | 3     |
| Web Service manual in  | Entero largo | 1     |
| Web Service manual out | Entero largo | 2     |

Cada constante corresponde a una “configuración”. Una configuración representa una combinación entre el modo de publicación (RPC/DOC) y los tipos de parámetros (entrada/salida, simple o compuesto) implementado. 

**Nota:** recuerde que la característica “entrada” o “salida” de los parámetros se evalúa desde el punto de vista del método proxy/servicio web:

* un parámetro “entrada” es un valor pasado al método proxy y por lo tanto al servicio web,
* un parámetro “salida” es devuelto por el servicio web y por lo tanto por el método proxy (generalmente vía $0).

La siguiente tabla muestra todas las configuraciones posibles como también las constantes correspondientes: 

| **Parámetros entrada** |                        |                       |
| ---------------------- | ---------------------- | --------------------- |
| **Parámetros entrada** | **Simples**            | **Compuestos**        |
| **Simples**            | Web Service Dynamic    | Web Service Manual In |
| | (Modo RPC)           | (Modo RPC)             |                       |
| **Compues**tos         | Web Service Manual Out | Web Service Manual    |
| (Modo RPC)             | (Modo RPC o Modo DOC)  |                       |

Las cinco configuraciones descritas a continuación pueden implementarse. En todos los caso, 4D administrará el formato de la petición SOAP a enviar al servicio web como también su sobre. Es su decisión darle formato a los contenidos de esta petición de acuerdo a la configuración utilizada.

**Nota:** a pesar del hecho de que los tipos XML compuestos, los arrays de datos son tratados por 4D como tipos simples. 

##### Modo RPC, entrada y salida simples 

Esta configuración es la más fácil de utilizar. En este caso, el parámetro *tipoCompuesto* contiene la constante Web Service Dynamic o se omite.

Los parámetros enviados y las respuestas recibidas pueden ser manipulados directamente, sin procesamiento previo. 

Consulte el ejemplo del comando [WEB SERVICE GET RESULT](web-service-get-result.md).

##### Modo RPC, entrada compuesta y salida simple 

En este caso, el parámetro *tipoComplejo* contiene la constante Web Service Manual In. Con esta configuración, debe pasar “manualmente” al servicio Web cada elemento XML fuente bajo la forma de un BLOB, con la ayuda del comando [WEB SERVICE SET PARAMETER](web-service-set-parameter.md). 

Depende de usted formatear el BLOB inicial como un elemento XML válido. Este BLOB debe contener como primer elemento el primer elemento “hijo” del elemento <Body> de la petición final.

**Ejemplo**  
  
```4d
 var $1 : Blob
 var $0 : Boolean
 
 WEB SERVICE SET PARAMETER("MyXMLBlob";$1)
 WEB SERVICE CALL("http://my.domain.com/my_service";"MiAccionSoap";"ElMetodo";"http://mi.nombrespacio.com/";Web Service manual in)
 WEB SERVICE GET RESULT($0;"MiVarSalida";*)
```

  
##### Modo RPC, entrada simple y salida compuestas 

En este caso, el parámetro *tipoCompuesto* contiene la constante Web Service Manual Out. Cada parámetro de salida será devuelto por el servicio Web bajo la forma del elemento XML almacenado en un BLOB. Recupera este parámetro utilizando el comando [WEB SERVICE GET RESULT](web-service-get-result.md). Luego puede analizar el contenido del BLOB recibido utilizando los comandos XML de 4D.   
  
**Ejemplo**  
  
```4d
 var $0 : Blob
 var $1 : Boolean
 
 WEB SERVICE SET PARAMETER("MiVarEntrada";$1)
 WEB SERVICE CALL("http://mi.dominio.com/mi_servicio";"MiAccionSoap";"ElMetodo";"http://mi.nombrespacio.com/";Web Service manual out)
 WEB SERVICE GET RESULT($0;"MiXMLSalida";*)
```

##### Modo RPC, entrada y salida compuestas 

En este caso, el parámetro *tipoCompuesto* contiene la constantes Web Service Manual. Cada parámetro de entrada y de salida debe ser almacenado en la forma de los elementos XML en los BLOBs, como se describió en las dos configuraciones anteriores.  
  
**Ejemplo**  
  
```4d
 var $0 : Blob
 var $1 : Blob
 
 WEB SERVICE SET PARAMETER("MiBlobXMLEntrada";$1)
 WEB SERVICE CALL("http://mi.dominio.com/mi_servicio";"MiAccionSoap";"ElMetodo";"http://mi.nombrespacio.com/";Web Service manual)
 WEB SERVICE GET RESULT($0;"MiXMLSalida";*)
```

##### Modo DOC 

Un método proxy de llamada de un servicio web DOC es similar a un método proxy de llamada de un servicio web RPC utilizando los parámetros de entrada y de salida compuestos. 

La única diferencia entre estas dos configuraciones es el nivel del contenido XML de los parámetros BLOB pasados y recibidos. Desde el punto de vista de 4D, la construcción y el envío de la petición SOAP son idénticos.

**Ejemplo**  
  
```4d
 var $0 : Blob
 var $1 : Blob
 
 WEB SERVICE SET PARAMETER("MiXMLEntrada";$1)
 WEB SERVICE CALL("http://mi.dominio.com/mi_servicio";"MiAccionSoap";"ElMetodo";"http://mi.nombrespacio.com/";Web Service manual)
 WEB SERVICE GET RESULT($0;"MiXMLSalida";*)
```

  
**Nota:** en el caso de los servicios web DOC, el valor de las cadenas (“MiXMLEntrada” y “MiXMLSalida”) pasadas como parámetros no es de importancia; incluso es posible pasar cadenas vacías"". De hecho, estos valores no se utilizan en la petición SOAP contenida en el documento XML. Es obligatorio pasar estos parámetros. 

Para utilizar un servicio web publicado en modo DOC (o en modo RPC con tipos compuestos), es recomendable proceder de esta forma:

* Generar el método proxy utilizando el Asistente Client Web Services.  
El método proxy se llamará de esta forma: *$XMLresultadoBlob:=$DOCproxy\_Metodo($XMLparamBlob)*
* Familiariarisece con los contenidos de las peticiones SOAP a enviar al servicio web utilizando una herramienta de prueba en línea (por ejemplo, *http://soapclient.com/soaptest.html*). Este tipo de herramienta se utiliza para generar los formularios de prueba HTML, a partir del WSDL del servicio web.
* Copie el contenido XML generado a partir del primer hijo de *<body>*.
* Escriba el método permitiendo ubicar los valores reales de los parámetros en el código XML; este código debe estar ubicado en el BLOB *$XMLparamBlob*.
* Para analizar la respuesta, puede igualmente utilizar una herramienta de prueba en línea, o utilizar el WSDL que especifica los elementos devueltos.

El parámetro *\** puede utilizarse para optimizar llamadas. Cuando se pasa, el comando no cierra la conexión utilizada por el proceso al final de su ejecución. En este caso, la próxima llamada a **WEB SERVICE CALL** reutilizará la misma conexión si se pasa el parámetro *\**, etc. Para cerrar la conexión, simplemente ejecute el comando **WEB SERVICE CALL** sin el parámetro *\**. Este mecanismo puede utilizarse para acelerar sensiblemente los procesos en caso de llamadas sucesivas a varios servicios web en el mismo servidor, en particular en una configuración WAN (vía Internet, por ejemplo). Note que este mecanismo depende del parámetro “keep-alive” del servidor web. Este parámetro por lo general define un número máximo de peticiones vía la misma conexión, e incluso puede negar peticiones. Si las peticiones **WEB SERVICE CALL** encadenadas en la misma conexión alcanzan este número máximo, o si las conexiones keep-alive no son permitidas, 4D creará una nueva conexión para cada petición.

#### Variables y conjuntos del sistema 

Si la petición se enruta correctamente y el servicio web la acepta, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0 y se devuelve un error.

#### Ver también 

[WEB SERVICE GET RESULT](web-service-get-result.md)  
[WEB SERVICE SET PARAMETER](web-service-set-parameter.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 778 |
| Hilo seguro | &check; |
| Modifica variables | OK |


