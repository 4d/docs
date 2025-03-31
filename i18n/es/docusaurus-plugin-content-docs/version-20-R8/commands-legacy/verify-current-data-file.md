---
id: verify-current-data-file
title: VERIFY CURRENT DATA FILE
slug: /commands/verify-current-data-file
displayed_sidebar: docs
---

<!--REF #_command_.VERIFY CURRENT DATA FILE.Syntax-->**VERIFY CURRENT DATA FILE** {( *objetos* ; *opciones* ; *metodo* {; *arrayTablas* {; *arrayCampos*}} )}<!-- END REF-->
<!--REF #_command_.VERIFY CURRENT DATA FILE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objetos | Integer | &#8594;  | Objetos a verificar |
| opciones | Integer | &#8594;  | Opciones de verificación |
| metodo | Text | &#8594;  | Nombre del método 4D de retrollamada |
| arrayTablas | Integer array | &#8594;  | Números de las tablas a verificar |
| arrayCampos | 2D Integer array, 2D Integer array, 2D Real array | &#8594;  | Números de los índices a verificar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.VERIFY CURRENT DATA FILE.Summary-->El comando VERIFY CURRENT DATA FILE efectúa una verificación estructural de los objetos encontrados en el archivo de datos abierto actualmente por 4D.<!-- END REF--> 

Este comando tiene un funcionamiento idéntico al del comando [VERIFY DATA FILE](verify-data-file.md), excepto que sólo aplica al archivo de datos actual de la base de datos abierta. No son necesarios los parámetros que especifican la estructura y los datos.  
Consulte el comando [VERIFY DATA FILE](verify-data-file.md) para la descripción de los parámetros.

Si pasa el comando VERIFY CURRENT DATA FILE sin parámetros, la verificación se lleva a cabo con los valores por defecto de los parámetros:

* *objetos* \= Verificar todos (= valor 16)
* *opciones* \= 0 (se crea el archivo de historial pero sin marca de tiempo)
* *metodo* \= ""
* *arrayTablas* y *arrayCampos* se omiten.

Cuando se ejecuta este comando, el caché de los datos se vacía y todas las operaciones de acceso de datos se bloquean durante la verificación.

Si un archivo de historial se ha generado, su ruta completa se devuelve en la variable sistema *Document*. 

#### Variables y conjuntos del sistema 

Si el método de retrollamada no existe, la verificación no se efectúa, se genera un error y la variable sistema OK toma el valor 0\. Si un archivo de historial se ha generado, su ruta completa se devuelve en la variable sistema Document.  

#### Ver también 

[VERIFY DATA FILE](verify-data-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1008 |
| Hilo seguro | &check; |
| Modifica variables | OK, Document, error |


