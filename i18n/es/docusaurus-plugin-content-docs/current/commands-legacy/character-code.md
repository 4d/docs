---
id: character-code
title: Character code
slug: /commands/character-code
displayed_sidebar: docs
---

<!--REF #_command_.Character code.Syntax-->**Character code** ( *unCaracter* ) : Integer<!-- END REF-->
<!--REF #_command_.Character code.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unCaracter | Text | &#8594;  | Caracter para el cual obtener el código |
| Resultado | Integer | &#8592; | Código del caracter |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Character code.Summary-->El comando **Character code** devuelve el código Unicode UTF-16 (incluído entre 1 y 65535) de *unCaracter*.<!-- END REF-->   
  
Si hay más de un carácter en la cadena, **Character code** devuelve únicamente el código del primer carácter.

La función [Char](char.md) es la contraparte de **Character code**. Devuelve el carácter designado por un código UTF-16\. 

#### Ejemplo 1 

Los caracteres en mayúsculas y minúsculas se consideran iguales en una comparación. Puede utilizar Character code para diferenciar entre los caracteres en mayúsculas y en minúsculas. Por lo tanto, esta línea devuelve True:

```4d
 ("A"="a")
```

Por otra parte, esta línea devuelve False:  
  
(Character code("A")=Character code("a"))

#### Ejemplo 2 

Este ejemplo devuelve el código del primer carácter de la cadena *"ABC"*:

```4d
 RecupCod:=Character code("ABC") // RecupCod toma el valor 65, el código del carácter de A
```

#### Ejemplo 3 

El siguiente ejemplo prueba los retornos de carro y los tabuladores: 

```4d
 For($vlCar;1;Length(vtText))
    Case of
       :(vtText[[$vlCar]]=Char(Carriage return))
  // Hacer algo
       :(vtText[[$vlCar]]=Char(Tab))
  // Hacer otra cosa
       :(...)
  // ...
    End case
 End for
```

Cuando se ejecuta muchas veces en textos largos, se ejecutará más rápido, una vez compilado, si se escribe de esta forma:

```4d
 For($vlCar;1;Length(vtText))
    $vlCode:=Character code(vtText[[$vlCar]])
    Case of
       :($vlCode=Carriage return)
  // Hacer algo
       :($vlCode=Tab)
  // Hacer otra cosa
       :(...)
  // ...
    End case
 End for
```

El segundo código se ejecuta más rápido por dos razones: sólo referencia un carácter por iteración y utiliza comparaciones de enteros largos en lugar de comparaciones de cadenas para probar los retornos de carro y las tabulaciones. Utilice esta técnica cuando trabaje con códigos comunes tales como CR y TAB.

#### Ver también 

[Char](char.md)  
*Símbolos de referencia de caracteres*  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 91 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


