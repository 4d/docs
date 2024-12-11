---
id: object-set-value
title: OBJECT SET VALUE
slug: /commands/object-set-value
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET VALUE.Syntax-->**OBJECT SET VALUE** ( *nomObjeto* ; *valor* )<!-- END REF-->
<!--REF #_command_.OBJECT SET VALUE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomObjeto | Text | &#8594;  | Nombre de objeto |
| valor | any | &#8594;  | Nuevo valor para la fuente de datos del objeto de formulario |

<!-- END REF-->

#### Ejemplo 1 

<!--REF #_command_.OBJECT SET VALUE.Summary-->**OBJECT SET VALUE** define el *valor* de la fuente de datos actual para los objetos de formulario designados por el parámetro *nomObjeto*.<!-- END REF-->

En el parámetro *nomObjeto*, pase el nombre de un objeto de formulario (una cadena). Puede definir el valor de varios objetos de formulario utilizando el carácter comodín ("@").

El parámetro *valor* le permite pasar un nuevo valor (cualquier tipo) para la fuente de datos del objeto de formulario.

**Nota**: si la fuente de datos es una expresión no asignable, **OBJECT SET VALUE** no hace nada. Para más información, consulte *Expresiones asignables frente a no asignables*.

#### Ejemplo 2 

Desea obtener el valor de la fuente de datos para un objeto de formulario, obtener su nombre y definir un nuevo valor:

```4d
 var $value : Variant
 
 $value:=OBJECT Get value(OBJECT Get name(Object current)) //verifica el valor definido
 
 OBJECT SET VALUE(OBJECT Get name(Object current);$value+10) //encuentra el nombre del objeto del formulario y define el valor en 50
```

#### Ver también 

[OBJECT Get value](object-get-value.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1742 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


