---
id: set-timeout
title: SET TIMEOUT
slug: /commands/set-timeout
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMEOUT.Syntax-->**SET TIMEOUT** ( *segundos* )<!-- END REF-->
<!--REF #_command_.SET TIMEOUT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| segundos | Integer | &#8594;  | Número de segundos hasta el timeout |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET TIMEOUT.Summary-->El comando SET TIMEOUT especifica cuánto tiempo tiene para la ejecución un comando de puerto serial.<!-- END REF--> Si el comando no termina dentro del tiempo especificado, *segundos*, el comando del puerto serial se cancela, se genera un error -9990, y la variable sistema OK toma el valor 0\. Puede interceptar este error con la ayuda de un método instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

Note que el tiempo es el tiempo total permitido para que el comando se ejecute, no el tiempo entre los caracteres recibidos. Para cancelar un parámetro anterior y detener el monitoreo de la comunicación de puerto serial, utilice un parámetro de 0 para *segundos*.

Los comandos que se afectan por el parámetro timeout son:

* [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET")
* [RECEIVE RECORD](receive-record.md "RECEIVE RECORD")
* [RECEIVE VARIABLE](receive-variable.md "RECEIVE VARIABLE")

#### Ejemplo 

El siguiente ejemplo fija el puerto serial para recibir datos y el timeout. Los datos se leen con [RECEIVE PACKET](receive-packet.md "RECEIVE PACKET"). Si los datos no se reciben en el tiempo definido, ocurre un error:

```4d
 SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none) // Apertura del puerto serial
 SET TIMEOUT(10) // Fijar el timeout en 10 segundos
 ON ERR CALL("INTERCEPTAR ERRORES COM") // Tratar las interrupciones eventuales
 RECEIVE PACKET(vtBuffer;Char(13)) // Leer hasta encontrar un retorno de carro
 If(OK=0)
    ALERT("Error durante la recepción de datos.")
 Else
    [Personas]Nombre:=vtBuffer // Guardar los datos recibidos en un campo
 End if
 ON ERR CALL("")
```

#### Ver también 

[ON ERR CALL](on-err-call.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[RECEIVE RECORD](receive-record.md)  
[RECEIVE VARIABLE](receive-variable.md)  