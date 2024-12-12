---
id: soap-declaration
title: SOAP DECLARATION
slug: /commands/soap-declaration
displayed_sidebar: docs
---

<!--REF #_command_.SOAP DECLARATION.Syntax-->**SOAP DECLARATION** ( *variable* ; *tipo* ; entrada_salida {; *alias*} )<!-- END REF-->
<!--REF #_command_.SOAP DECLARATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| variable | Variable | &#8594;  | Variable que referencia un argumento SOAP entrante o saliente |
| tipo | Integer | &#8594;  | Tipo 4D al cual apunta el argumento |
| entrada_salida | Integer | &#8594;  | 1 = Entrada SOAP, 2 = Salida SOAP |
| alias | Text | &#8594;  | Nombre publicado para este argumento durante los intercambios SOAP |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SOAP DECLARATION.Summary-->El comando SOAP DECLARATION permite declarar explícitamente el tipo de los parámetros utilizados en un método 4D publicado como servicio web.<!-- END REF-->

Cuando se publica un método como servicio web, los parámetros estándar *$0*, *$1*... *$n* se utilizan para describir los parámetros del servicio web al mundo exterior (más particularmente en el archivo WSDL). El protocolo SOAP necesita que los parámetros sean nombrados explícitamente; 4D utiliza por defecto los nombres “FourD\_arg0, FourD\_arg1 ... FourD\_argn”.

Este funcionamiento por defecto puede ser problemático por las siguientes razones:

* No es posible declarar *$0* o *$1*, *$2*, etc. como un array. Por lo tanto, es necesario utilizar punteros; sin embargo, en este caso, es necesario conocer el tipo de los valores para la generación del archivo WSDL.
* Luego, puede ser útil o necesario personalizar los nombres de los parámetros (entrantes y salientes).
* Si lo desea, puede utilizar parámetros como las estructuras XML y referencias DOM.
* Igualmente, es necesario devolver los valores de un tamaño superior a 32 KB (limite de los argumentos de tipo Texto).
* Por último, este funcionamiento hace imposible devolver más de un valor por llamada RPC (en *$0*).

El comando SOAP DECLARATION le permite liberar estos límites. Puede ejecutar este comando para cada parámetro entrante y saliente y asignarle un nombre y un tipo.

**Nota:** incluso si se utiliza el comando SOAP DECLARATION, siempre es necesario declarar las variables y los arrays 4D ven el método Compiler\_Web utilizando los comandos del tema “*Compilador*”.

En *variable*, pase la variable 4D a referenciar cuando llame al servicio web.

**Advertencia:** puede referenciar únicamente las variables proceso o los argumentos de los métodos 4D (*$0* a *$n*). Las variables locales e interproceso no pueden utilizarse.

Por defecto, como sólo pueden utilizarse los argumento de tipo texto, las respuestas del servidor SOAP están limitadas a 32 KB. Sin embargo, es posible devolver argumentos SOAP con un tamaño mayor a 32 KB, utilizando BLOBs. Para exceder este límite, simplemente necesita declarar los argumentos como BLOBs antes de llamar al comando SOAP DECLARATION (ver ejemplo 4).

**Notas:** 

* Del lado del cliente, si suscribe este tipo de servicio web con 4D, el asistente de servicios web generará naturalmente una variable de tipo Texto en el método proxy. Para poder utilizarla, sólo necesita digitar nuevamente esta variable como un BLOB en el método proxy.
* Este comando no soporta objetos blob (tipo 4D.Blob). Ver *Pasar blobs y objetos blob a comandos 4D* en developer.4d.com.

En *tipo*, pase el tipo 4D correspondiente. Pueden ser utilizados la mayoría de los tipos de variables y arrays 4D. Puede utilizar las siguientes constantes predefinidas, ubicadas en el tema “*Servicios Web (Servidor)*”:

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is real       | Entero largo | 1     |
| Is text       | Entero largo | 2     |
| Is date       | Entero largo | 4     |
| Is Boolean    | Entero largo | 6     |
| Is integer    | Entero largo | 8     |
| Is longint    | Entero largo | 9     |
| Is time       | Entero largo | 11    |
| Real array    | Entero largo | 14    |
| Integer array | Entero largo | 15    |
| LongInt array | Entero largo | 16    |
| Date array    | Entero largo | 17    |
| Text array    | Entero largo | 18    |
| String array  | Entero largo | 21    |
| Boolean array | Entero largo | 22    |
| Is string var | Entero largo | 24    |
| Is BLOB       | Entero largo | 30    |

| Constante        | Tipo         | Valor |
| ---------------- | ------------ | ----- |
| Is XML           | Entero largo | 36    |
| Is DOM reference | Entero largo | 37    |

En *entrada\_salida*, pase un valor indicando si el parámetro procesado es “entrante” (es decir corresponde a un valor recibido por el método) o “saliente” (por ejemplo corresponde a un valor devuelto por el método). Puede utilizar las siguientes constantes predefinidas, ubicadas en el tema “*Servicios Web (Servidor)*”:

| Constante   | Tipo         | Valor |
| ----------- | ------------ | ----- |
| SOAP input  | Entero largo | 1     |
| SOAP output | Entero largo | 2     |

##### Utilización de tipos XML 

Puede declarar las variables de tipo "estructura XML" y "DOM reference", de entrada y salida, vía las constantes Is XML y Is DOM reference. Cuando los parámetros de este tipo son definidos, no se aplica ningún proceso ni codificación y los datos se trasmiten "tal cual" (ver ejemplo 5).

* **Parámetros de salida**
 \- Is XML indica que el parámetro contiene una estructura XML,  
 \- Is DOM reference indica que el parámetro contiene la referencia DOM de una estructura XML. En este caso, la inserción de la estructura XML en el mensaje SOAP es   
equivalente a ejecutar el comando [DOM EXPORT TO VAR](dom-export-to-var.md "DOM EXPORT TO VAR")**.** 

**Nota:** en el caso de las referencias DOM utilizadas como parámetros de salida, se recomienda utilizar las referencias globales, creadas, por ejemplo, al inicio o al cierre de la aplicación. De hecho, una referencia DOM creada dentro del mismo servicio web no puede cerrarse con[DOM CLOSE XML](dom-close-xml.md "DOM CLOSE XML")**,** de lo contrario el servicio web no devuelve nada. Las llamadas múltiples al servicio web implican por lo tanto la creación de múltiples referencias DOM no cerradas, las cuales pueden provocar una saturación de la memoria.

* **Parámetros de entrada**  
    
\- Is XML indica que el parámetro debe recibir un argumento XML enviado por el cliente SOAP.  
 \- Is DOM reference indica que el parámetro debe recibir la referencia DOM de una estructura XML correspondiente al argumento XML enviado por el cliente SOAP**.**
* **Modificación del WSDL**  
    
Las estructuras XML serán declaradas por 4D como "anyType" (tipo indeterminado) en el WSDL. Si quiere dar un tipo preciso a una estructura XML, debe guardar el archivo WSDL y añadir manualmente el esquema de datos que quiere en la sección <types> del WSDL.

##### Método COMPILER\_WEB 

 Los argumentos SOAP entrantes referenciados con la ayuda de variables 4D (y no por los argumentos de métodos 4D) deben ser declarados primero en el método de proyecto COMPILER\_WEB. De hecho, el uso de variables de proceso en los métodos Web Services necesitan ser declaradas antes de la llamada al método. Se llama el método de proyecto COMPILER\_WEB, si existe, para cada petición SOAP aceptada. Por defecto, el método COMPILER\_WEB no existe. Usted debe crearlo específicamente.   
  
Note que el método COMPILER\_WEB también es llamado por el servidor web de 4D durante la recepción de peticiones web “convencionales” de tipo POST (ver la sección *URLs y acciones de formularios*).

En *alias*, pase el nombre del argumento que debe aparecer en WSDL y en los intercambios SOAP.

**Advertencia:** este nombre debe ser único en la llamada RPC (parámetros entrantes y salientes), de lo contrario, sólo la última declaración será tenida en cuenta por 4D.

**Nota:** los nombres de los argumentos no deben comenzar por un número ni contener espacios. Además, para evitar riesgos de incompatibilidad, se recomienda no utilizar caracteres extendidos (tales como caracteres con acentos).  
Si se omite el parámetro *alias*, 4D utilizará, por defecto, el nombre de la variable o FourD\_argN para los argumentos de los métodos 4D (*$0* a *$n*).

**Nota:** el comando SOAP DECLARATION debe estar incluido en el método publicado como servicio web. No es posible llamarlo desde otro método. 

#### Ejemplo 1 

Este ejemplo especifica un nombre de parámetro:

```4d
  // En el método COMPILER_WEB
 var $1 : Integer
 
  // En el método del servicio Web
  // Durante la generación del archivo WSDL y las llamadas SOAP, la palabra
  // zipcode se utilizará en lugar de fourD_arg1
 SOAP DECLARATION($1;Is longint;SOAP input;"zipcode")
```

#### Ejemplo 2 

Este ejemplo se utiliza para recuperar un array de códigos postales en forma de enteros largos:

```4d
  //En el método COMPILER_WEB
 ARRAY LONGINT(codes;0)
 
  //En el método del servicio Web
 SOAP DECLARATION(codes;LongInt array;SOAP input;"in_codes")
```

#### Ejemplo 3 

Este ejemplo se utiliza para referenciar dos valores devueltos sin especificar un nombre de argumento: 

```4d
 SOAP DECLARATION(ret1;Is longint;SOAP output)
 SOAP DECLARATION(ret2;Is longint;SOAP output)
```

#### Ejemplo 4 

Este ejemplo permite al servidor 4D SOAP devolver un argumento de un tamaño mayor a 32 KB: 

```4d
 var $0 : Blob
 SOAP DECLARATION($0;Is text;SOAP output)
```

  
Note el tipo Is Text (y no Is BLOB). Esto permite que el argumento sea procesado correctamente.

#### Ejemplo 5 

Este ejemplo illustra los resultados de los diferentes tipos de declaraciones: 

```4d
 ALL RECORDS([Contactos])
 
  //Construcción de una estructura XML de la selección de contactos y almacenar el XML en un BLOB
 var ws_vx_xmlBlob : Blob
 obtenerContactosXML(->ws_vx_xmlBlob)
  //Recuperar la estructura XML en una variable de tipo texto
 var ws_vt_xml : Text
 ws_vt_xml:=BLOB to text(ws_vx_xmlBlob;UTF8 text without length)
  //Recuperar una referencia DOM a la estructura XML
 var ws_vt_xmlRef : Text
 ws_vt_xmlRef:=DOM Parse XML variable(ws_vt_xml)
 
  //Prueba las diferentes declaraciones
 SOAP DECLARATION(ws_vx_xmlBlob;Is BLOB;SOAP output;"contactListsX")
  //El XML se convierte en Base64 por 4D
 
 SOAP DECLARATION(ws_vt_xml;Is text;SOAP output;"contactListsText")
  //El XML se convierte en texto por 4D (< > become entities)
 
 SOAP DECLARATION(ws_vt_xml;Is XML;SOAP output;"xmlContacts")
  //El XML se pasa a texto XML
 
 SOAP DECLARATION(ws_vx_xmlBlob;Is XML;SOAP output;"blobContacts")
  //El XML se pasa a un blob XML
 
 SOAP DECLARATION(ws_vt_xmlRef;Is DOM reference;SOAP output;"contactByRef")
  //El XML se pasa como una referencia
```

#### Ver también 

[Is data file locked](is-data-file-locked.md)  
[SOAP get info](soap-get-info.md)  
[SOAP SEND FAULT](soap-send-fault.md)  