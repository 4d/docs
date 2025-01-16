---
id: set-field-titles
title: SET FIELD TITLES
slug: /commands/set-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD TITLES.Syntax-->**SET FIELD TITLES** ( *tabla* ; *titulosCampos* ; *numCampos* {; *} )<!-- END REF-->
<!--REF #_command_.SET FIELD TITLES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual definir los títulos de los campos |
| titulosCampos | Text array | &#8594;  | Nuevos títulos de los campos |
| numCampos | Integer array | &#8594;  | Números de los campos |
| * | Operator |  &#8594;  | Utilizar los nombres personalizados en el editor de fórmulas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET FIELD TITLES.Summary-->**SET FIELD TITLES** permite ocultar, renombrar y reorganizar los campos de la tabla pasada en *tabla* cuando aparecen en las cajas de diálogo estándar de 4D, tal como el editor de búsquedas, en el entorno Aplicación(es decir, cuando el modo de inicio es **Aplicación**, o después de seleccionar **Probar aplicación** en el menú **Ejecutar**).<!-- END REF-->

Utilizando este comando, puede también renombrar instantáneamente las etiquetas de los campos en sus formularios, si ha utilizado nombres dinámicos. Para mayor información sobre la inserción de etiquetas de tablas y campos dinámicos en los formularios, consulte el Manual de Diseño 4D.

Los arrays *titulosCampos* y *numCampos* deben estar sincronizados. En el array *titulosCampos*, pase el nombre de los campos tal como quiere que aparezcan. Si no quiere mostrar un campo en particular, no incluya su nombre o nuevo título en el array. Los campos aparecerán en el orden que especifique en este array. En cada elemento del array *numCampos*, pase el número de la tabla que corresponde al nombre, nuevo o antiguo, del campo pasado en el mismo número de elemento que en el array *titulosCampos*.

Por ejemplo, usted tiene una tabla compuesta por los campos F, G, y H, creada en ese orden. Usted quiere que estos campos aparezcan como M, N, y O. Además usted no quiere mostrar el campo N. Por último, quiere mostrar O y M en ese orden. Para hacer esto, pase en el parámetro *titulosCampos un array que contenga* dos elementos, O y M, y pase en el parámetro *numCampos* un array que contenga dos elementos, 3 y 1.

**Nota:** si su aplicación da acceso al editor de fórmulas (por ejemplo por el editor de Informes rápidos), es necesario pasar el parámetro \* para mantener consistencia en la aplicación.

El parámetro opcional *\** indica si los nombres personalizados (estructuras "virtuales") definidos utilizando este comando puede ser utilizados en fórmulas 4D. Por defecto, cuando se omite este parámetro, las fórmulas ejecutadas en 4D no pueden utilizar estos nombres personalizados; es necesario utilizar los nombres de campos reales. Debe pasar este parámetro si desea controlar la información que se proporciona a los usuarios y garantizar la coherencia de la interfaz siempre que se utilicen fórmulas o expresiones, es decir:

* si su aplicación da acceso al editor de fórmulas (por ejemplo, a través del editor de informes rápidos),
* si su aplicación muestra referencias de expresión, como en los documentos 4D Write Pro.

**Nota**: cuando se pasa el parámetro *\**, los nombres definidos por este comando se pueden usar en las fórmulas ejecutadas por 4D. **Tenga cuidado en este caso**, los nombres personalizados no deben contener caracteres que son considerados como “prohibidos” por el interprete del lenguaje 4D, tal como "Rate\_in\_%" que no puede utilizarse en una fórmula (para mayor información, consulte la sección *Convenciones*). 

**SET FIELD TITLES** NO modifica la estructura de su base. Está diseñado para afectar usos posteriores de los editores estándar de 4D y de los formularios que utilizan nombres dinámicos cuando se utilizan en entorno Aplicación. El alcance del comando **SET FIELD TITLES** es la sesión de trabajo. Un beneficio en cliente/Servidor es que varias estaciones 4D cliente pueden “ver” simultáneamente su estructura de una manera diferente. Puede llamar **SET FIELD TITLES** tantas veces como quiera.

Utilice el comando **SET FIELD TITLES** para:

* Traducir dinámicamente su base.
* Mostrar los campos en el orden que usted quiera, independientemente de la definición real de su tabla.
* Mostrar los campos de manera que dependan de la identidad o de los privilegios personalizados de un usuario.

**Advertencia:**

* **SET FIELD TITLES** NO anula el efecto de la propiedad invisible de un campo. Cuando un campo se define para que sea invisible al nivel de la estructura, no aparecerá en modo Aplicación, aunque se incluya en una llamada a **SET FIELD TITLES**.
* Los plug-ins siempre acceden a la estructura "virtual" como está especificado por este comando.
* Si se llama el comando [SET TABLE TITLES](set-table-titles.md) sin parámetros, la estructura "virtual" (incluyendo los nombres de tablas y campos personalizados) se elimina completamente del entorno Aplicación.

#### Ejemplo 

Ver el ejemplo del comando [SET TABLE TITLES](set-table-titles.md "SET TABLE TITLES").

#### Ver también 

[Field name](field-name.md)  
[GET FIELD TITLES](get-field-titles.md)  
[Last field number](last-field-number.md)  
[Parse formula](parse-formula.md)  
[SET TABLE TITLES](set-table-titles.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 602 |
| Hilo seguro | &cross; |


