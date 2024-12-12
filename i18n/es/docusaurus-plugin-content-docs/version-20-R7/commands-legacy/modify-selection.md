---
id: modify-selection
title: MODIFY SELECTION
slug: /commands/modify-selection
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY SELECTION.Syntax-->**MODIFY SELECTION** ( {*tabla*}{; *modoSelección*}{; *entradaList*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.MODIFY SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a mostrar y modificar o Tabla por defecto, si se omite |
| modoSelección | Integer | &#8594;  | Modo de selección |
| entradaList | Boolean | &#8594;  | Autorizar entrada en lista |
| * | Operator |  &#8594;  | Utilizar formulario de salida para un sólo registro y ocultar las barras de desplazamiento en el formulario de     entrada |
| * | Operator |  &#8594;  | Mostrar las barras de desplazamiento en el formulario de entrada (anula la segunda opción del primer parámetro *) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.MODIFY SELECTION.Summary-->MODIFY SELECTION es casi idéntico al comando [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION").<!-- END REF--> Consulte la descripción del comando [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION") para una descripción detallada. Las diferencias entre los dos comandos son: 

1\. [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION") y MODIFY SELECTION permite mostrar los registros de la selección actual en modo listado o en el formulario de entrada al hacer doble clic en un registro. Utilizando MODIFY SELECTION, también puede modificar los campos del registro en el formulario de entrada cuando hace doble clic en el registro, (si no está siendo utilizado por otro proceso o usuario) o en modo "Entrada en lista" (si está autorizado).

2\. [DISPLAY SELECTION](display-selection.md "DISPLAY SELECTION") carga los registros en modo sólo lectura en el proceso actual, lo cual significa que no están bloqueados para escritura en los otros procesos. MODIFY SELECTION coloca todos los registros de la selección en modo lectura-escritura, lo que significa que son bloqueados automáticamente para escritura en otros procesos. MODIFY SELECTION libera los registros cuando termina su ejecución.

#### Ver también 

*Conjuntos*  
[DISPLAY SELECTION](display-selection.md)  
[Form event code](form-event-code.md)  