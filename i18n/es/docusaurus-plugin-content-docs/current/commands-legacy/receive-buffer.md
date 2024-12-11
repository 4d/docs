---
id: receive-buffer
title: RECEIVE BUFFER
slug: /commands/receive-buffer
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE BUFFER.Syntax-->**RECEIVE BUFFER** ( *varRecep* )<!-- END REF-->
<!--REF #_command_.RECEIVE BUFFER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| varRecep | Text | &#8592; | Variable para recibir datos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RECEIVE BUFFER.Summary-->RECEIVE BUFFER lee los datos del puerto serial abierto previamente por el comando [SET CHANNEL](set-channel.md).<!-- END REF--> El puerto serial tiene un buffer que se llena con caracteres hasta que un comando los lee. RECEIVE BUFFER obtiene los caracteres del buffer serial, los coloca en la variable *varRecep* y luego limpia el buffer. Si no hay caracteres en el buffer, la variable *varRecep* estará vacía.

**En Windows**  
El buffer de puerto serial en Windows está limitado en tamaño a 10 Kbytes. Esto significa que el buffer puede saturarse. Cuando está lleno y se reciben nuevos caracteres, los nuevos caracteres se reemplazan los antiguos caracteres. Los antiguos caracteres se pierden; por lo tanto, es esencial que el buffer se lea rápidamente cuando se reciben nuevos caracteres.

**En Mac OS**  
El buffer del puerto serial en Mac OS X tiene una capacidad en principio ilimitada (depende de la memoria disponible). Si el buffer está lleno y se reciben nuevos caracteres, los nuevos caracteres reemplazan los antiguos caracteres. Los antiguos caracteres se pierden; por lo tanto, es esencial que el buffer se lea rápidamente cuando se reciben nuevos caracteres. 

El comando RECEIVE BUFFER es diferente de [RECEIVE PACKET](receive-packet.md) en la medida en que recupera todo lo que encuentra en el buffer y lo devuelve inmediatamente. [RECEIVE PACKET](receive-packet.md) espera hasta encontrar un carácter específico o un cierto número de caracteres en el buffer. 

Durante la ejecución de RECEIVE BUFFER, el usuario puede interrumpir la recepción presionando **Ctrl-Alt-Mayús** (Windows) o **Comando-Opción-Mayús** (Macintosh). Esta interrupción genera un error -9994 que puede interceptar con la ayuda de un método instalado por el comando [ON ERR CALL](on-err-call.md). 

#### Ejemplo 

El método de proyecto ESCUCHAR PUERTO SERIAL utiliza RECEIVE BUFFER para obtener texto del puerto serial y acumularlo en una variable interproceso:

```4d
  // ESCUCHAR PUERTO SERIAL
  // Abrir el puerto serial
 SET CHANNEL(201;Speed 9600+Data bits 8+Stop bits one+Parity none)
 <>IP_Escuchar_Puerto_Serial:=True
 While(<>IP_Escuchar_Puerto_Serial)
    RECEIVE BUFFER($vtBuffer)
    If((Length($vtBuffer)+Length(<>vtBuffer))>MAXTEXTLEN)
       <>vtBuffer:=""
    End if
    <>vtBuffer:=<>vtBuffer+$Buffer
 End while
```

En este punto, cualquier otro proceso puede leer la variable interproceso *vtBuffer* para trabajar con los datos que vienen del puerto serial.

Para dejar de escuchar al puerto serial, ejecute:

```4d
  // Dejar de escuchar al puerto serial
 ◊IP_Escuchar_Puerto_Serial:=False
```

Note que el acceso a la variable interproceso *vtBuffer* debe estar protegido por un semáforo, de manera que los procesos no entren en conflicto. Para mayor información ver el comando [Semaphore](semaphore.md "Semaphore").

#### Ver también 

[ON ERR CALL](on-err-call.md)  
[RECEIVE PACKET](receive-packet.md)  
[Semaphore](semaphore.md)  
[SET CHANNEL](set-channel.md)  
[USE CHARACTER SET](use-character-set.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 172 |
| Hilo seguro | &check; |
| Modifica variables | error |
| Prohibido en el servidor ||


