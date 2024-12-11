---
id: set-channel
title: SET CHANNEL
slug: /commands/set-channel
displayed_sidebar: docs
---

<!--REF #_command_.SET CHANNEL.Syntax-->**SET CHANNEL** ( *puerto* ; *param* ) <br/>
**SET CHANNEL** ( *operacion* ; *doc* )<!-- END REF-->
<!--REF #_command_.SET CHANNEL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| puerto | Integer | &#8594;  | Número de puerto serial |
| param | Integer | &#8594;  | Parámetros de puerto serial |
| SET CHANNEL ( operacion ; doc ) |
| Parámetro | Tipo | Descripción |
| operacion | Integer | &#8594;  | Operación a efectuar en el documento |
| doc | Text | &#8594;  | Nombre del documento |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET CHANNEL.Summary-->El comando SET CHANNEL abre un puerto serial o un documento.<!-- END REF--> Sólo puede abrir un puerto serial o un documento al tiempo con este comando. Para cerrar un puerto serial abierto, pase SET CHANNEL (11).

**Nota histórica:** este comando fue originalmente el primer comando 4D utilizado para trabajar con puertos seriales y documentos en discos. Desde entonces, se han añadido nuevos comandos. Hoy en día, se trabaja generalmente con documentos en disco utilizando los comandos [Open document](open-document.md "Open document"), [Create document](create-document.md "Create document") y [Append document](append-document.md "Append document"). Con estos comandos, puede leer y escribir caracteres en los documentos utilizando [SEND PACKET](send-packet.md "SEND PACKET") o [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET") (estos comandos trabajan también con SET CHANNEL). Sin embargo, si quiere utilizar los comandos [SEND VARIABLE](send-variable.md "SEND VARIABLE"), [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE"), [SEND RECORD](send-record.md "SEND RECORD") y [RECEIVE RECORD](receive-record.md "RECEIVE RECORD"), debe utilizar SET CHANNEL para acceder a los documentos en el disco. 

La descripción de SET CHANNEL está compuesta de dos secciones:

* Trabajar con los puertos seriales
* Trabajar con documentos

#### Trabajar con los puertos seriales - SET CHANNEL (puerto;parametros) 

La primera forma del comando SET CHANNEL abre un puerto serial, define el protocolo de comunicación así como otra información del puerto. Los datos pueden ser enviados por los comandos [SEND PACKET](send-packet.md "SEND PACKET"), [SEND RECORD](send-record.md "SEND RECORD") o [SEND VARIABLE](send-variable.md "SEND VARIABLE"), y recibidos con [RECEIVE BUFFER](receive-buffer.md "RECEIVE BUFFER"), [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET"), [RECEIVE RECORD](receive-record.md "RECEIVE RECORD") o [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE").

* El primer parámetro, *puerto*, selecciona el puerto y el protocolo. Puede direccionar hasta 99 puertos seriales (uno a la vez). La siguiente tabla lista los valores para *puerto*:

| **Valores puerto** | **Descripción**                                                                     |               |
| ------------------ | ----------------------------------------------------------------------------------- | ------------- |
| 0                  | Puerto impresora (Macintosh) o COM2 (PC) sin protocolo                              |               |
| 1                  | Puerto modem (Macintosh) o COM1 (PC) sin protocolo                                  |               |
| 20                 | Puerto impresora (Macintosh) o COM2 (PC) con protocolo de sofware tal               | como XON/XOFF |
| 21                 | Puerto modem (Macintosh) o COM1 (PC) con protocolo de sofware tal como XON/XOFF     |               |
| 30                 | Puerto impresora (Macintosh) o COM2 (PC) con protocolo de hardware tal como RTS/CTS |               |
| 31                 | Puerto modem (Macintosh) o COM1 (PC) con protocolo de hardware tal como RTS/CTS     |               |
| 101 a 199          | Comunicación serial sin protocolo                                                   |               |
| 201 a 299          | Comunicación serial con protocolo de software tal como XON/XOFF                     |               |
| 301 a 399          | Comunicación serial con protocolo de hardware tal como RTS/CTS                      |               |

**Importante:** el valor que pasa en *puerto* se refiere a un puerto serial COM existente reconocido por el sistema operativo. Por ejemplo, para que pueda utilizar los valores 101, 103 y 125, los puertos seriales COM1, COM3 y COM25 deben haber sido configurados correctamente.

##### Nota sobre los puertos seriales 

En una configuración estándar, Mac OS y Windows reconocen dos puertos seriales: en Mac OS, el puerto modem y el puerto impresora; en Windows, los puertos COM1 y COM2\. Sin embargo, se pueden añadir puertos seriales adicionales por medio de tableros de extensión. Inicialmente, 4D sólo direccionaba dos puertos seriales estándar y más adelante se implementó el soporte de puertos adicionales. Por razones de compatibilidad, se conservan ambos sistemas de direccionamiento.  
\- Si quiere direccionar un puerto serial estándar (impresora/COM2 o modem/COM1), puede pasar en el parámetro *puerto* uno de los siguientes valores 0, 1, 20, 21, 30 y 31 (que corresponde al método de direccionamiento antiguo), o un valor mayor a 100 (por favor vea la siguiente explicación).   
\- Si quiere direccionar puertos seriales adicionales, debe pasar el valor N+100 (donde N es el valor del puerto a direccionar). También puede considerar añadir 100 o 200 al valor menciondo anteriormente (N+100), si quiere seleccionar respectivamente un protocolo de software o de hardware. 

##### Ejemplo 1 

Si quiere utilizar el puerto impresora/COM2 sin protocolo, puede utilizar una de las siguientes sintaxis:

```4d
 SET CHANNEL(0;param)
```

o

```4d
 SET CHANNEL(102;param)
```

##### Ejemplo 2 

Si quiere utilizar el puerto modem/COM1 con el protocolo XON/XOFF, puede utilizar una de las siguientes sintaxis:

```4d
 SET CHANNEL(21;param)
```

o

```4d
 SET CHANNEL(201;param)
```

##### Ejemplo 3 

Si quiere utilizar el puerto COM 25 con el protocolo RTS/CTS, debe utilizar las siguientes sintaxis: 

```4d
 SET CHANNEL(325;param)
```

• El parámetro *param* fija la velocidad, el número de bits de datos, el número de bits de stop y la paridad. Puede determinar el valor para los *param* añadiendo los valores de velocidad, bits de datos, bits de stop y paridad, como se listan en la siguiente tabla. Por ejemplo, para definir 1200 baud, 8 bits de datos, 1 bit de stop y ninguno de paridad, usted sumaría 94 + 3072 + 16384 + 0 = 19550\. Entonces pasaría 19550 como el valor del parámetro *param.* 

| **Valor a acumular** **en param** | **Descripción** |         |
| --------------------------------- | --------------- | ------- |
| Velocidad                         | 380             | 300     |
| (en baud)                         | 189             | 600     |
| 94                                | 1200            |         |
| 62                                | 1800            |         |
| 46                                | 2400            |         |
| 30                                | 3600            |         |
| 22                                | 4800            |         |
| 14                                | 7200            |         |
| 10                                | 9600            |         |
| 4                                 | 19200           |         |
| 2                                 | 28800           |         |
| 1                                 | 38400           |         |
| 0                                 | 57600           |         |
| 1022                              | 115200          |         |
| 1021                              | 230400          |         |
| Bits de datos                     | 0               | 5       |
| 2048                              | 6               |         |
| 1024                              | 7               |         |
| 3072                              | 8               |         |
| Bits de stop                      | 16384           | 1       |
| –32768                            | 1.5             |         |
| –16384                            | 2               |         |
| Paridad                           | 0               | Ninguno |
| 4096                              | Impar           |         |
| 12288                             | Par             |         |

**Truco:** los diferentes valores numéricos a acumular y pasar en *puerto* y *param* (a excepción de los valores de COM1...COM99) están disponibles como constantes predefinidas en el tema Comunicaciones del explorador en el entorno Diseño. Para los valores COM1...COM99, utilice los valores numéricos literales. 

#### Trabajar con documentos en disco - SET CHANNEL(operacion;documento) 

La segunda forma del comando SET CHANNEL le permite crear, abrir, y cerrar un documento. A diferencia de los comandos del tema Documentos del sistema, SET CHANNEL sólo puede abrir un documento a la vez. El documento puede leerse o escribirse. Consulte la sección  para mayor información al respecto.

El parámetro *operacion* especifica la operación a realizar en el documento especificado por *documento*. La siguientes tabla lista los valores de *operacion* y el resultado obtenido, en función del valor de *documento*. La primera columna lista los valores posibles de *operacion*. La segunda columna lista los valores posibles de *documento*. La tercera columna lista la operación resultante. 

Por ejemplo, para visualizar una caja de diálogo de abrir un archivo, puede utilizar la siguiente línea:

```4d
 SET CHANNEL(13;"")
```
  
  
| **Operación**                                           | **Documento**     | **Resultado**                                                                      |
| ------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| 10                                                      | Cadena            | Abre el documento especificado por Cadena.                                         |
| Si el documento no existe, se crea y abre el documento. |                   |                                                                                    |
| 10                                                      | "" (cadena vacía) | Muestra la ventana de abrir archivo.                                               |
| Todos los tipos de archivos se presentan.               |                   |                                                                                    |
| 11                                                      | ninguno           | Cierra un archivo abierto.                                                         |
| 12                                                      | "" (cadena vacía) | Muestra la ventana de guardar archivo para crear un nuevo archivo.                 |
| 13                                                      | "" (cadena vacía) | Muestra la ventana de abrir archivo. Sólo se presentan los archivos de tipo texto. |

Todas las operaciones en esta tabla modifican la variable sistema Document si es necesario. Igualmente la variable sistema OK toma el valor 1 si la operación fue exitosa. De lo contrario, la variable sistema OK toma el valor 0.

##### Ejemplo 4 

Ver los ejemplos de los comandos [RECEIVE BUFFER](receive-buffer.md "RECEIVE BUFFER"), [SET TIMEOUT](set-timeout.md "SET TIMEOUT") y [RECEIVE RECORD](receive-record.md "RECEIVE RECORD").

#### Ver también 

[Append document](append-document.md)  
*Comunicaciones*  
[Create document](create-document.md)  
[GET SERIAL PORT MAPPING](get-serial-port-mapping.md)  
[Open document](open-document.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  
[SEND PACKET](send-packet.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  
[SET TIMEOUT](set-timeout.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 77 |
| Hilo seguro | &check; |
| Modifica variables | OK, Document |
| Prohibido en el servidor ||


