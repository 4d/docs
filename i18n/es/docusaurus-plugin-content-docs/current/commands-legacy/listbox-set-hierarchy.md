---
id: listbox-set-hierarchy
title: LISTBOX SET HIERARCHY
slug: /commands/listbox-set-hierarchy
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HIERARCHY.Syntax-->**LISTBOX SET HIERARCHY** ( {* ;} *objeto* ; *jerarquico* {; *jerarquia*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HIERARCHY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| jerarquico | Boolean | &#8594;  | True = list box jerárquico False = list box no jerárquico |
| jerarquia | Pointer array | &#8594;  | Array de punteros |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.LISTBOX SET HIERARCHY.Summary-->El comando LISTBOX SET HIERARCHY permite configurar el objeto list box designado por los parámetros objeto y *\** en modo jerárquico o no jerárquico.<!-- END REF-->   
  
**Nota**: este comando sólo funciona con los list box basados en arrays. Cuando este comando se utiliza con un list box basado en las selecciones, no hace nada.  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (cadena). Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia variable en lugar de una cadena.   
  
El parámetro booleano *jerarquico* le permite especificar el modo del list box:  
  
 \* Si pasa True, el list box se muestra en modo jerárquico,  
 \* Si se pasa False, el list box se muestra en modo no jerárquico (modo array estándar).  
  
Cuando se pasa un list box en modo jerárquico, ciertas propiedades se restringen automáticamente. Para obtener más información, consulte la sección *Gestión de list box jerárquicos*.   
  
El parámetro *jerarquia* se utiliza para designar los arrays del list box a utilizar para la construcción de la jerarquía (ver ejemplo).   
Si muestra el list box en modo jerárquico y omite este parámetro:  
  
* Si el list box ya está en modo jerárquico, el comando no hace nada.
* Si el list box está en modo no jerárquico y nunca ha sido declarado jerárquico, el primer array se utiliza como la jerarquía por defecto.
* Si el list box está en modo no jerárquico, pero previamente ha sido declarado jerárquico, se restablece la última jerarquía.

#### Ejemplo 

Definición de los arrays aPais, aRegion y aCiudad como jerarquía de un list box:

```4d
 ARRAY POINTER($ArrHierarch;3)
 $ArrHierarch{1}:=->aPais //Primer nivel de ruptura
 $ArrHierarch{2}:=->aRegion //Segundo nivel de ruptura
 $ArrHierarch{3}:=->aCiudad //Tercer nivel de ruptura
 LISTBOX SET HIERARCHY(*;"mylistbox";True;$ArrHierarch)
```

#### Ver también 

[LISTBOX GET HIERARCHY](listbox-get-hierarchy.md)  