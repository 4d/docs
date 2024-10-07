---
id: get-last-error-stack
title: GET LAST ERROR STACK
slug: /commands/get-last-error-stack
displayed_sidebar: docs
---

<!--REF #_command_.GET LAST ERROR STACK.Syntax-->**GET LAST ERROR STACK** ( *arrayCodigos* ; *arrayCompInternos* ; *arrayTextos* )<!-- END REF-->
<!--REF #_command_.GET LAST ERROR STACK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrayCodigos | Integer array | &#x1F858; | Números de errores |
| arrayCompInternos | Text array | &#x1F858; | Códigos de componentes internos |
| arrayTextos | Text array | &#x1F858; | Texto de errores |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET LAST ERROR STACK.Summary-->El comando GET LAST ERROR STACK devuelve información sobre la pila de errores actual relacionada con el uso del kernel SQL de la aplicación 4D.<!-- END REF--> Cuando una instrucción 4D provoca un error, la pila de errores actual contiene una descripción del error como también de todas las series de errores generadas. Por ejemplo, un error de tipo "disk full" provoca un error de escritura en el archivo luego un error en el comando de guardar registro: la pila por lo tanto contendrá tres errores. Si la última instrucción 4D no generó un error, la pila de errores actual está vacía.

Este comando genérico puede utilizarse para procesar todo tipo de error que pueda ocurrir en la aplicación 4D.

**Nota:** sin embargo, para obtener la información detallada correspondiente a los errores generados por una fuente ODBC, será necesario utilizar el comando SQL GET LAST ERROR.

Este comando debe llamarse desde un método de llamada de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

La información se devuelve en tres arrays sincronizados:

* *arrayCodigos*: este array recibe la lista de códigos de error generados.
* *arrayCompInternos*: este array contiene los códigos de los componentes internos asociados con cada error.
* *arrayTextos*: este array contiene el texto de cada error.

La lista de códigos de error y su texto se encuentra en la sección *Errores del motor SQL* del tema "Códigos de error".

#### Ver también 

[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  
[SQL GET LAST ERROR](sql-get-last-error.md)  