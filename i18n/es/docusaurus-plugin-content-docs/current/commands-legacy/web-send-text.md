---
id: web-send-text
title: WEB SEND TEXT
slug: /commands/web-send-text
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND TEXT.Syntax-->**WEB SEND TEXT** ( *textoHTML* {; *tipo*} )<!-- END REF-->
<!--REF #_command_.WEB SEND TEXT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| textoHTML | Text | &#8594;  | Campo o variable de tipo texto con formato HTML a enviar al navegador web |
| tipo | Text | &#8594;  | True = Ir al modo contextual False o si se omite = Permanecer en el modo actual |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.WEB SEND TEXT.Summary-->El comando **WEB SEND TEXT** envia directamente los datos de texto con formato HTML.<!-- END REF-->  
  
El parámetro *textoHTML* contiene los datos a enviar. Como 4D no efectúa ningún control sobre el contenido de este parámetro, asegúrese de que la codificación HTML sea correcta.

Las eventuales referencias a las variables 4D y etiquetas de tipo *4DSCRIPT* en el texto siempre se analizan.

Por defecto, si omite el parámetro *tipo*, 4D asume que los datos enviados son de tipo "text/html". El comando equivale exactamente al envío de un BLOB de tipo "text/html" utilizando el comando [WEB SEND BLOB](web-send-blob.md). 

También puede utilizar el parámetro *tipo* para especificar el tipo MIME del texto a enviar. Para mayor información sobre los tipos MIME soportados, consulte la descripción del comando [WEB SEND BLOB](web-send-blob.md).

#### Ejemplo 

El siguiente método: 

```4d
 TEXT TO BLOB(""+String(Current time)+"";$blob;UTF8 Text without length)
 WEB SEND BLOB($blob;"text/html")
```

... puede reemplazarse por una sola línea:

```4d
 WEB SEND TEXT(""+String(Current time)+"")
```

#### Ver también 

[WEB SEND BLOB](web-send-blob.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 677 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


