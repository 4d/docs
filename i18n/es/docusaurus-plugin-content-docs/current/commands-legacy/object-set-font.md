---
id: object-set-font
title: OBJECT SET FONT
slug: /commands/object-set-font
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FONT.Syntax-->**OBJECT SET FONT** ( {* ;} *objeto* ; *fuente* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FONT.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| fuente | Text | &#8594;  | Nombre o número de fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET FONT.Summary-->OBJECT SET FONT muestra el *objeto* utilizando la fuente especificada en el parámetro *fuente*.<!-- END REF--> El parámetro *fuente* debe contener un nombre de fuente válido.

Si especifica el parámetro opcional *\**, indica un nombre de objeto (una cadena) en *objeto*. Si omite el parámetro opcional *\**, indica que el parámetro *objeto* es un campo o una variable. En este caso, se especifica una referencia de campo o de variable (campo o variable objeto únicamente) en lugar de una cadena.

**Nota:** si utiliza este comando en un *objeto* que estaba utilizando una hoja de estilo, la referencia a la hoja de estilo se elimina automáticamente del objeto - incluso si asigna los mismos atributos que los de la hoja de estilo.

#### Ejemplo 1 

El siguiente ejemplo define la fuente de un botón llamado *bOK*: 

```4d
 OBJECT SET FONT(bOK;"Arial")
```

#### Ejemplo 2 

El siguiente ejemplo define la fuente para todos los objetos de formulario cuyo nombre contenga "info": 

```4d
 OBJECT SET FONT(*;"@info@";"Times")
```

#### Ejemplo 3 

El siguiente ejemplo utiliza la opción especial *%password*, diseñada para la entrada y visualización de campos de tipo “contraseña”. Cuando pase "%password" en el parámetro *fuente*:

* cada carácter introducido en el objeto se muestra con el mismo simbolo,
* las acciones "copiar" y "pegar" se desactivan en el objeto.

**Nota:** puede utilizar la opción *%password* con los objetos de tipo campo, variable y combo box.

```4d
 OBJECT SET FONT([Users]Password;"%password")
```

#### Ver también 

[Font file](font-file.md)  
[FONT LIST](font-list.md)  
*Interacción de comandos genéricos con textos multiestilos*  
[OBJECT Get font](object-get-font.md)  
[OBJECT SET FONT SIZE](object-set-font-size.md)  
[OBJECT SET FONT STYLE](object-set-font-style.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 164 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


