---
id: timestamp
title: Timestamp
slug: /commands/timestamp
displayed_sidebar: docs
---

<!--REF #_command_.Timestamp.Syntax-->**Timestamp** : Text<!-- END REF-->
<!--REF #_command_.Timestamp.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Hora actual devuelta utilizando el formato ISO con milisegundos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Timestamp.Summary-->**Timestamp** devuelve la hora UTC actual en formato ISO con milisegundos, es decir, aaaa-MM-ddTHH:mm:ss.<!-- END REF-->SSSZ. Tenga en cuenta que el carácter "Z" indica la zona horaria GMT.

Cada hora devuelta por **Timestamp** se expresa de acuerdo con la norma ISO 8601\. Para más información sobre este estándar, consulte: <https://en.wikipedia.org/wiki/ISO%5F8601>

**Note:** esta función no es adecuada para tiempos; Debe utilizar [Milliseconds](milliseconds.md) cuando desee medir el tiempo transcurrido.

#### Ejemplo 

Puede utilizar **Timestamp** en un archivo de historial para saber con precisión donde ocurrieron los eventos. Como se muestra a continuación, es posible que se produzcan varias operaciones durante el mismo segundo:

```4d
 $vhDocRef:=Append document("TimestampProject.log")
 $logWithTimestamp:=Timestamp+Char(Tab)+"Log with timestamp"+Char(Carriage return)
 SEND PACKET($vhDocRef;String($logWithTimestamp))
```

Resultado:

```RAW
2016-12-12T13:31:29.477Z   Log with timestamp2016-12-12T13:31:29.478Z   Connection of user12016-12-12T13:31:29.486Z   ERROR - Exception of type 'System exception'2016-12-12T13:31:29.492Z   Click on button16842016-12-12T13:31:29.502Z   [SP_HELP- 1 rows] Command processed2016-12-12T13:31:29.512Z   [SP_HELP- 5 rows] Result set fetched
```

#### Ver también 

[Milliseconds](milliseconds.md)  
[String](string.md)  
[Time](time.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1445 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


