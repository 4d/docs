---
id: focus-object
title: Focus object
slug: /commands/focus-object
displayed_sidebar: docs
---

<!--REF #_command_.Focus object.Syntax-->**Focus object**  : Pointer<!-- END REF-->
<!--REF #_command_.Focus object.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Puntero al objeto que tiene el foco |

<!-- END REF-->

#### Nota de compatibilidad 

<!--REF #_command_.Focus object.Summary-->Este comando sólo se conserva por razones de compatibilidad.<!-- END REF--> A partir de la versión 12 de 4D, se recomienda utilizar el comando [OBJECT Get pointer](object-get-pointer.md "OBJECT Get pointer").

#### Descripción 

Focus object devuelve un puntero al objeto que tiene el foco en el formulario actual. Si ningún objeto tiene el foco, el comando devuelve Nil. Puede utilizar Focus object para realizar una acción en un área de formulario sin saber cuál objeto está seleccionado actualmente. Asegúrese de probar si el objeto es del tipo correcto, utilizando [Type](type.md "Type"), antes de realizar una acción. 

**Nota:** cuando se utiliza con un list box de tipo array, la función Focus object devuelve un puntero al list box o a la columna del list box que tiene el foco. En el caso de los list boxes de tipo selección, la función devuelve:

* para una columna asociada a un campo, un puntero al campo asociado,
* para una columna asociada a una variable, un puntero a la variable,
* para una columna asociada a una expresión, un puntero a la variable del list box.

Este comando no puede utilizarse con campos en subformularios.

**Nota:** este comando se utiliza únicamente en el contexto de entrada de datos, de lo contrario se produce un error.

#### Ejemplo 

El siguiente ejemplo es un método de objeto para un botón. El método de objeto cambia los datos en el objeto actual a mayúsculas. El objeto debe ser del tipo texto o alfa (tipo 0 ó 24):

```4d
 $vp :=Focus object //Obtener el puntero al último objeto
 Case of
    :(Nil($vp)) //Ningún objeto tiene el foco
       ...
    :((Type($vp->)=Is alpha field)|(Type($vp->)=Is string var)) //Si es un objeto de tipo texto o alfa
       $vp->:=Uppercase($vp->) //Cambiar los datos a mayúsculas
 End case
```

#### Ver también 

[OBJECT Get pointer](object-get-pointer.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 278 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


