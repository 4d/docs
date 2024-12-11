---
id: object-get-format
title: OBJECT Get format
slug: /commands/object-get-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get format.Syntax-->**OBJECT Get format** ( {* ;} *objeto* ) : Text<!-- END REF-->
<!--REF #_command_.OBJECT Get format.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| Resultado | Text | &#8592; | Formato de salida del objeto |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT Get format.Summary-->El comando OBJECT Get format devuelve el formato de salida actual aplicado al objeto especificado en el parámetro *objeto*.<!-- END REF-->

Si pasa el parámetro opcional *\**, indica un nombre de objeto (en este caso, pase una cadena en *objeto*). Si omite este parámetro, indica que el parámetro *objeto* es un campo o una variable. En este caso, usted no pasa una cadena, sino una referencia de campo o de variable.

Este comando devuelve el formato de salida actual del objeto, es decir el formato definido en el entorno Diseño o utilizando el comando [OBJECT SET FORMAT](object-set-format.md). OBJECT Get format funciona con todos los tipos de objetos de formulario (campos o variables) que aceptan un formato de salida: booleano, fecha, hora, imagen, cadena, numérico, como también con rejillas de botones, dials, termómetros, reglas, menús imagen desplegable, botones imagen, botones 3D y encabezados de list box. Para mayor información sobre formatos de salida de estos objetos, consulte la documentación del comando [OBJECT SET FORMAT](object-set-format.md). 

**Nota:** si aplica el comando a un conjunto de objetos, el formulario, se devuelve el formulario del último objeto seleccionado.  
  
Cuando el comando OBJECT Get format se aplica a objetos de tipo fecha, hora o imagen (formatos definidos como constantes), la cadena que se devuelve corresponde al código del carácter de la constante. Para obtener el valor de la constante, simplemente aplique la función [Character code](character-code.md) al resultado (ver ejemplo a continuación). 

#### Ejemplo 1 

Este ejemplo le permite obtener el valor de la constante del formato aplicado a la variable imagen llamada “mifoto”: 

```4d
 C_STRING(2;$formato)
 OBJECT SET FORMAT(*;"mifoto";Char(On background))
  //Aplicación del formato de fondo (valor = 3)
 $formato:=OBJECT Get format(*;"mifoto")
 ALERT("Formato número:"+String(Character code($formato)))
  //Mostrar el valor "3"
```

#### Ejemplo 2 

Este ejemplo le permite obtener el formato aplicado al campo booleano \[Miembros\]Estado\_civil: 

```4d
 C_STRING(30;$formato)
 $formato:=OBJECT Get format([Miembros]Estado_civil)
 ALERT($formato) //Visualizar formato, por ejemplo "Casado;Soltero"
```

#### Ejemplo 3 

Customized formats are returned untouched:

```4d
 var $format : Text
 OBJECT SET FORMAT(*;"timeinput";":m") //":" is required for single-char patterns
 $format:=OBJECT Get format(*;"timeinput") // ":m"
```

#### Ver también 

[OBJECT SET FORMAT](object-set-format.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 894 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


