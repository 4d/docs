---
id: receive-variable
title: RECEIVE VARIABLE
slug: /commands/receive-variable
displayed_sidebar: docs
---

<!--REF #_command_.RECEIVE VARIABLE.Syntax-->**RECEIVE VARIABLE** ( *variable* )<!-- END REF-->
<!--REF #_command_.RECEIVE VARIABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| variable | Variable | &#8592; | Variable en la cual recibir |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.RECEIVE VARIABLE.Summary-->RECEIVE VARIABLE recibe a *variable*, la cual fue enviada previamente por [SEND VARIABLE](send-variable.md "SEND VARIABLE") desde el documento o puerto serial previamente abierto por [SET CHANNEL](set-channel.md "SET CHANNEL").<!-- END REF--> 

En modo interpretado, si la variable no existe antes del llamado de RECEIVE VARIABLE, la variable se crea, digita y asigna de acuerdo a lo que se ha recibido. En modo compilado, la variable debe ser del mismo tipo de la que se recibe. En ambos casos, el contenido de la variable se reemplaza con el de la variable recibida.

**Notas:**

1\. Si recibe una variable desde un documento utilizando este comando, el documento debe haber sido abierto utilizando el comando [SET CHANNEL](set-channel.md "SET CHANNEL"). No puede utilizar RECEIVE VARIABLE con un documento abierto con [Open document](open-document.md "Open document"), [Append document](append-document.md "Append document") o [Create document](create-document.md "Create document").  
  
2\. Este comando no soporta variables de tipo array. Si quiere enviar y recibir arrays desde un documento o un puerto serial, utilice los *Comandos BLOB*.

3\. Durante la ejecución de RECEIVE VARIABLE, el usuario puede interrumpir la recepción presionando Ctrl-Alt-Mayús (Windows) o Comando-Opción-Mayús (Macintosh). Esta interrupción genera un error -9994 que puede interceptar con un método instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL"). Generalmente, sólo necesita administrar la interrupción de una recepción mientras la comunicación sobre un puerto serial.

#### Ejemplo 

Ver el ejemplo del comando [RECEIVE RECORD](receive-record.md "RECEIVE RECORD").

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si se recibe la variable. De lo contrario, la variable sistema OK toma el valor 0.

#### Ver también 

[ON ERR CALL](on-err-call.md)  
[RECEIVE RECORD](receive-record.md)  
[SEND RECORD](send-record.md)  
[SEND VARIABLE](send-variable.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 81 |
| Hilo seguro | &check; |
| Modifica variables | OK, error |
| Prohibido en el servidor ||


