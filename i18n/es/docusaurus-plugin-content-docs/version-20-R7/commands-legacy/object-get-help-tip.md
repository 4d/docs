---
id: object-get-help-tip
title: OBJECT Get help tip
slug: /commands/object-get-help-tip
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get help tip.Syntax-->**OBJECT Get help tip** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get help tip.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Text | &#8592; | Mensaje de ayuda del objeto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get help tip.Summary-->El comando **OBJECT Get help tip** devuelve el mensaje de ayuda asociado al objeto o a los objetos designados por los parámetros *objeto* y *\** en el proceso actual.<!-- END REF-->  
  
Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si no pasa este parámetro, esto indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena.  
  
El comando devuelve el mensaje de ayuda actual asociado al objeto, tal como está definido en el modo Diseño o para el proceso utilizando el comando [OBJECT SET HELP TIP](object-set-help-tip.md). La cadena devuelta muestra el mensaje como aparece cuando se ejecuta el formulario. Si contiene elementos variables (*resname* xliff o referencias 4D), se interpretan en función del contexto. 

#### Ejemplo 

El título de un botón imagen se guarda en forma de mensaje de ayuda. Este título se guarda en un archivo xliff y difiere en función del lenguaje actual de la aplicación: 

```4d
 OBJECT SET HELP TIP(*;"button1";":xliff:btn_discover")
 $helpmessage:=OBJECT Get help tip(*;"button1")
  // $helpmessage contiene por ejemplo "Découvrir" con un 4D francés y "Discover" con un 4D inglés.
```

#### Ver también 

[OBJECT SET HELP TIP](object-set-help-tip.md)  