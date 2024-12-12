---
id: object-get-enabled
title: OBJECT Get enabled
slug: /commands/object-get-enabled
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get enabled.Syntax-->**OBJECT Get enabled** ( {* ;} *objeto* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get enabled.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable o un campo |
| objeto | any | &#8594;  | Nombre del objeto (si se especifica *) o Variables (si se omite *) |
| Resultado | Boolean | &#8592; | True = objeto(s) activo(s), de lo contrario False |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get enabled.Summary-->El comando OBJECT Get enabled devuelve True si el objeto o grupo de objetos designado por objeto está activo en el formulario y False si no está activo.<!-- END REF-->   
  
Un objeto activo reacciona a los clics y atajos de teclado.  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable (variable objeto únicamente) en lugar de una cadena.   
  
Este comando se puede aplicar a los siguientes tipos de objetos:  
  
* Botón, Botón por defecto, Botón 3D, Botón invisible, Botón inverso
* Botón radio, Botón radio 3D, Botón Imagen
* Casilla de selección, Casilla de selección 3D
* Pop-up menú, Lista desplegable, Combo box, Menú/Lista desplegable
* Termómetro, Regla

#### Ver también 

[OBJECT SET ENABLED](object-set-enabled.md)  