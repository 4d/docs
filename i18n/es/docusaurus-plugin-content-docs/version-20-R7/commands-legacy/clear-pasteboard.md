---
id: clear-pasteboard
title: CLEAR PASTEBOARD
slug: /commands/clear-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR PASTEBOARD.Syntax-->**CLEAR PASTEBOARD**<!-- END REF-->
<!--REF #_command_.CLEAR PASTEBOARD.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CLEAR PASTEBOARD.Summary-->El comando CLEAR PASTEBOARD borra el contenido del portapapeles.<!-- END REF--> Si el portapapeles contiene múltiples instancias de los mismos datos, todas las instancias se borran. Después de llamar a CLEAR PASTEBOARD, el portapapeles queda vacío.

Debe llamar CLEAR PASTEBOARD antes de añadir nuevos datos al portapapeles utilizando el comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD"), porque este último comando no limpia el portapapeles antes de añadir nuevos datos. 

Si llama a CLEAR PASTEBOARD una vez y luego llama a [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD") muchas veces puede cortar o copiar los mismos datos bajo diferentes formatos. 

Por el contrario, los comandos [SET TEXT TO PASTEBOARD](set-text-to-pasteboard.md "SET TEXT TO PASTEBOARD") y [SET PICTURE TO PASTEBOARD](set-picture-to-pasteboard.md "SET PICTURE TO PASTEBOARD") limpian automáticamente el portapapeles antes de poner datos TEXT o PICT en él.

#### Ejemplo 1 

El siguiente código borra y luego añade datos al portapapeles:

```4d
 CLEAR PASTEBOARD //Borra el contenido del portapapeles
 APPEND DATA TO PASTEBOARD('XWKZ';$vxAlgunDato) // Añade datos de tipo 'XWKZ'
 APPEND DATA TO PASTEBOARD('SYLK';$vxSylkDatos) // Añade datos de tipo SYLK
```

#### Ejemplo 2 

Ver el ejemplo del comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Ver también 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 402 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


