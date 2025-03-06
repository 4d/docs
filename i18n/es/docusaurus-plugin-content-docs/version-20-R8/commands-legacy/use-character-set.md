---
id: use-character-set
title: USE CHARACTER SET
slug: /commands/use-character-set
displayed_sidebar: docs
---

<!--REF #_command_.USE CHARACTER SET.Syntax-->**USE CHARACTER SET** ( *mapa* {; *mapaImpExp*} )<!-- END REF-->
<!--REF #_command_.USE CHARACTER SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| mapa | Text, * | &#8594;  | Nombre del conjunto de caracteres a a utilizar (Modo Unicode) o nombre del documento del mapa ASCII a utilizar (Modo ASCII) o * para restaurar el mapa ASCII/conjunto de caracteres por defecto |
| mapaImpExp | Integer | &#8594;  | 0 = Mapa de exportación 1 = Mapa de importación Si se omite, mapa de exportación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.USE CHARACTER SET.Summary-->USE CHARACTER SET modifica el conjunto de caracteres utilizado por 4D para todas las operaciones de transferencia de datos entre la base y un documento o puerto serial para el proceso actual.<!-- END REF--> Las operaciones de transferencia incluyen la importación y exportación de texto, DIF y SYLK. Un mapa de caracteres también funciona con los datos enviados por los comandos [SEND PACKET](send-packet.md), [RECEIVE PACKET](receive-packet.md) (para paquetes de tipo texto), y [RECEIVE BUFFER](receive-buffer.md). No tiene efecto en transferencias de datos realizadas con [SEND RECORD](send-record.md), [SEND VARIABLE](send-variable.md), [RECEIVE RECORD](receive-record.md), [SEND PACKET](send-packet.md), [RECEIVE PACKET](receive-packet.md) (para paquetes tipo BLOB) y [RECEIVE VARIABLE](receive-variable.md).

El parámetro *mapa* debe corresponder al nombre "IANA" del conjunto de caracteres a utilizar, o a uno de sus alias. Por ejemplo, los nombres "iso-8859-1" o "utf-8" son ambos nombres válidos, así como los alias "latin1" u "11". Para mayor información sobre estos nombres, por favor consulte la siguiente dirección: *http://www.iana.org/assignments/character-sets*. También se presentan ejemplos de nombres IANA en la descripción del comando [CONVERT FROM TEXT](convert-from-text.md). 

Si *mapaImpExp* es 0, el mapa está definido para la exportación. Si *mapaImpExp* es 1, el mapa es para importación. Si no pasa el parámetro *mapaImpExp*, se utiliza el mapa de exportación por defecto.

Cuando se pasa el parámetro \*, el conjunto de caracteres por defecto se restablece (mapa de importación o exportación dependiendo del valor de *mapaImpExp.*

En 4D, el conjunto de caracteres por defecto es UTF-8.

#### Ejemplo 

El siguiente ejemplo (modo Unicode) utiliza el conjunto de caracteres UTF-16 para exportar un texto, luego restablece el conjunto de caracteres por defecto:

```4d
 USE CHARACTER SET("UTF-16LE";0) // Utilizar el conjunto de caracteres UTF-16 "Litttle Endian"
 EXPORT TEXT([MiTabla];"MiTexto") // Exportar los datos con el mapa
 USE CHARACTER SET(*;0) // Restablecer el conjunto de caracteres por defecto
```

#### Variables y conjuntos del sistema 

La variable sistema OK toma el valor 1 si el mapa se carga correctamente, de lo contrario toma el valor 0.

#### Ver también 

[EXPORT DIF](export-dif.md)  
[EXPORT SYLK](export-sylk.md)  
[EXPORT TEXT](export-text.md)  
[IMPORT DIF](import-dif.md)  
[IMPORT SYLK](import-sylk.md)  
[IMPORT TEXT](import-text.md)  
[RECEIVE BUFFER](receive-buffer.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 205 |
| Hilo seguro | &check; |
| Modifica variables | OK |


