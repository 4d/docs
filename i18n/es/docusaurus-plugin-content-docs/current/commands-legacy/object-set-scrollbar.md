---
id: object-set-scrollbar
title: OBJECT SET SCROLLBAR
slug: /commands/object-set-scrollbar
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SCROLLBAR.Syntax-->**OBJECT SET SCROLLBAR** ( {* ;} *objeto* ; *horizontal* ; *vertical* )<!-- END REF-->
<!--REF #_command_.OBJECT SET SCROLLBAR.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Variable (si se omite *) |
| horizontal | Boolean, Integer | &#8594;  | True = mostrar, False = ocultar |
| vertical | Boolean, Integer | &#8594;  | True = mostrar, False = ocultar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET SCROLLBAR.Summary-->El comando OBJECT SET SCROLLBAR le permite mostrar u ocultar las barras de desplazamiento horizontal o vertical en el objeto designado por los parámetros *objeto* y *\**.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa el parámetro opcional \*, indica que el parámetro *objeto* es una variable. En este caso, no se pasa una cadena sino una referencia de una variable. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*.

Pase en los parámetros *horizontal* y *vertical* los valores indicando si las barras de desplazamiento correspondientes deben ser mostrarse. Puede pasar valores booleanos (True=mostrado, False=oculto), o valores numéricos (0=oculto, 1=mostrado, 2=modo automático). El uso de valores numéricos le da acceso al modo automático, donde sólo se muestran las barras de desplazamiento cuando sea necesario.  
  
.

| **Objetos con barras de desplazamiento** | **Ocultar barra de desplazamiento** | **Mostrar barra de desplazamiento** | **Modo automático** |
| ---------------------------------------- | ----------------------------------- | ----------------------------------- | ------------------- |
| Text object fields and variables         | False o 0                           | True o 1                            | *no disponible*     |
| Campos y variable objeto texto           | False o 0                           | True o 1                            | 2                   |
| List boxes                               | False o 0                           | True o 1                            | 2                   |
| Listas jerárquicas                       | False o 0                           | True o 1                            | 2                   |
| Subformularios                           | False o 0                           | True o 1                            | *no disponible*     |

 Por defecto, se muestran las barras de desplazamiento.

**Nota:** para obtener más información sobre el modo automático, consulte *Barras de desplazamiento*.

#### Ver también 

[LISTBOX Get property](listbox-get-property.md)  
[LISTBOX SET GRID](listbox-set-grid.md)  
[OBJECT GET SCROLLBAR](object-get-scrollbar.md)  
[OBJECT SET VISIBLE](object-set-visible.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 843 |
| Hilo seguro | &cross; |


