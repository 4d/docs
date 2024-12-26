---
id: object-get-name
title: OBJECT Get name
slug: /commands/object-get-name
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get name.Syntax-->**OBJECT Get name** {( *selector* )} : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| selector | Integer | &#8594;  | Categoría de objeto |
| Resultado | Text | &#8592; | Nombre del objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get name.Summary-->El comando OBJECT Get name devuelve el nombre de un objeto de formulario.<!-- END REF--> 

El comando permite designar dos tipos de objetos en función del parámetro *selector*. En este parámetro, puede pasar una de las siguientes constantes (ubicadas en el tema "":

* Object current o *selector* omitido: si pasa este selector u omite el parámetro *selector*, el comando devuelve el nombre del objeto a partir del cual fue llamado (método objeto o submétodo llamado por el método de objeto). En este caso, el comando debe llamarse en el contexto de un objeto de formulario, de lo contrario devuelve una cadena vacía.
* Object with focus: si pasa este selector, el comando devuelve el nombre del objeto que tiene el foco en el formulario.

#### Ejemplo 

Método objeto del botón "bValidateForm":

```4d
 $btnName:=OBJECT Get name(Object current)
```

Después de la ejecución de este método objeto, la variable *$btnName* contiene el valor "bValidateForm".

#### Ver también 

[OBJECT Get pointer](object-get-pointer.md)  
*Objetos (Formularios)*  
*Objetos de formulario (Acceso)*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1087 |
| Hilo seguro | &cross; |


