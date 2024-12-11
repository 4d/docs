---
id: set-text-to-pasteboard
title: SET TEXT TO PASTEBOARD
slug: /commands/set-text-to-pasteboard
displayed_sidebar: docs
---

<!--REF #_command_.SET TEXT TO PASTEBOARD.Syntax-->**SET TEXT TO PASTEBOARD** ( *texto* )<!-- END REF-->
<!--REF #_command_.SET TEXT TO PASTEBOARD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| texto | Text | &#8594;  | Texto a copiar en el portapapeles |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET TEXT TO PASTEBOARD.Summary-->SET TEXT TO PASTEBOARD limpia el portapapeles y luego coloca una copia del texto en *texto* en el portapapeles.<!-- END REF--> 

**Nota:** en el caso de las operaciones copiar/pegar, pasteboard es equivalente a clipboard.

Después de colocar texto en el portapapeles, puede recuperarlo utilizando el comando [Get text from pasteboard](get-text-from-pasteboard.md "Get text from pasteboard") o llamando GET PASTEBOARD DATA("com.4d.text.native";...).

4D pueden contener hasta 2 GB de texto

**Nota:** el contenedor de datos está en modo sólo lectura durante el evento de formulario On Drag Over. No es posible utilizar este comando en este contexto.

#### Ejemplo 

Ver el ejemplo del comando [APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md "APPEND DATA TO PASTEBOARD").

#### Variables y conjuntos del sistema 

Si el texto se coloca correctamente en el portapapeles, la variable OK toma el valor 1\. Si no hay suficiente memoria para colocar una copia del texto en el portapapeles, la variable OK toma el valor 0, pero no se genera error.

#### Ver también 

[APPEND DATA TO PASTEBOARD](append-data-to-pasteboard.md)  
[Get text from pasteboard](get-text-from-pasteboard.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 523 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Prohibido en el servidor ||


