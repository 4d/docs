---
id: object-set-subform
title: OBJECT SET SUBFORM
slug: /commands/object-set-subform
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SUBFORM.Syntax-->**OBJECT SET SUBFORM** ( {* ;} *objeto* {; *aTabla*}; *subFormDet* {; *subFormList*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SUBFORM.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| aTable | Table | &#8594;  | Tabla de formulario (si tabla de formulario) |
| subFormDet | Text, Object | &#8594;  | Nombre del formulario detallado de subformulario |
| subFormList | Text, Object | &#8594;  | Nombre del formulario listado de subformulario (formulario tabla) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT SET SUBFORM.Summary-->El comando **OBJECT SET SUBFORM** permite modificar dinámicamente el formulario detallado así como también, opcionalmente, el formulario listado asociado al objeto subformulario designado por los parámetros *objeto* y *\**.<!-- END REF-->  
  
**Nota**: este comando no permite cambiar el tipo de subformulario mismo (lista o página). Esta propiedad sólo se puede configurar en modo Diseño.   
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.   
  
En el parámetro *aTabla*, pase la tabla de los formularios a utilizar. Este parámetro es opcional; puede omitirlo si especifica un formulario proyecto como subformulario detallado.  

En los parámetros *subFormDet* y *subFormList*, pase:

* el nombre de un formulario, o
* la ruta\* (en sintaxis POSIX) a un archivo .json válido que contiene una descripción del formulario a usar (ver *Ruta de archivo del formulario*), o
* un objeto que contiene una descripción del formulario.

\*A diferencia de otros comandos relacionados con formularios, las rutas de archivo de OBJECT SET SUBFORM son relativas al formulario principal del subformulario.

**Nota**: el parámetro *subFormList* sólo se puede pasar cuando modifica un subformulario de tipo lista. 

Cuando modifica un subformulario página, el comando puede ejecutarse en cualquier momento; las selecciones actuales no se modifican. Sin embargo, cuando modifica un subformulario listado, sólo puede modificarse cuando muestra la lista. Si el comando se ejecuta cuando el formulario detallado se muestra después de un doble clic en la lista, se genera un error.

#### Ver también 

[OBJECT GET SUBFORM](../commands/object-get-subform.md)  
[OBJECT GET SUBFORM CONTAINER SIZE](object-get-subform-container-size.md)  