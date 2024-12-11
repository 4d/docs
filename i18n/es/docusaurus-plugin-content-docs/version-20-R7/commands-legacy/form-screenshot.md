---
id: form-screenshot
title: FORM SCREENSHOT
slug: /commands/form-screenshot
displayed_sidebar: docs
---

<!--REF #_command_.FORM SCREENSHOT.Syntax-->**FORM SCREENSHOT** ( {{*tabla* ;} *nomForm* ;} *imagForm* {; *pagNum*} )<!-- END REF-->
<!--REF #_command_.FORM SCREENSHOT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del formulario |
| nomForm | Text | &#8594;  | Nombre del formulario |
| imagForm | Picture | &#8592; | Imagen del formulario en ejecución si el primer parámetro se omite, o <br/>Imagen del formulario en el editor de formularios si se pasa un nombre de formulario |
| pagNum | Integer | &#8594;  | Número de página del formulario |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM SCREENSHOT.Summary-->El comando **FORM SCREENSHOT** devuelve un formulario en forma de imagen.<!-- END REF--> Este comando admite dos sintaxis diferentes: en función de la sintaxis utilizada, puede obtener la imagen de un formulario ejecutado, o la imagen del formulario en el editor de formularios.

* FORM SCREENSHOT ( *imagF* *orm* )  
Esta sintaxis permite obtener una captura de pantalla de la página actual del formulario en ejecución o cargado vía el comando [FORM LOAD](form-load.md): la imagen devuelta en el parámetro   *imagenForm* contiene todos los objetos visibles del formulario con los valores actuales de los campos y de las variables del formulario, subformulario, etc. El formulario es devuelto en su totalidad, sin tener en cuenta el tamaño de la ventana que lo contiene.  
Tenga en cuenta que esta sintaxis sólo funciona con formularios de entrada.
* FORM SCREENSHOT ( {*tabla* ;} nomForm; *imagForm*{; *pagNum*} )  
Esta sintaxis permite obtener una captura de pantalla de una "plantilla" de formulario como la que se muestra en el editor de formularios. Todos los objetos visibles se dibujan como en el editor, el comando tiene en cuenta los formularios heredados y los objetos ubicados en la página 0.  
Si desea una captura de pantalla de un formulario tabla, pase la tabla del formulario en el parámetro *tabla* y luego su nombre como una cadena en *nomForm*. Para un formulario proyecto, pase directamente el nombre del formulario en *nomForm*.  
Por defecto, el comando devuelve una captura de pantalla de la página 1 del formulario. Si sólo desea una imagen de la página 0, o de cualquier otra página del formulario, pase el número de página en el parámetro *pagNum*.

**Notas:** 

* Las áreas web no se dibujan en la captura de pantalla devuelta.
* Los dos primeros parámetros de este comando son opcionales, no puede pasar directamente como un argumento una función que devuelva un puntero como [Current form table](current-form-table.md)\-> o [Table](table.md)\->. Aunque esta sintaxis funcionaría en modo interpretado, sería rechazada durante la compilación, así que es necesario en este caso utilizar una variable puntero intermediaria. Para obtener más información, consulte "*Uso directo de los comandos que devuelven punteros*".

#### Ver también 

[FORM LOAD](form-load.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 940 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


