---
id: convert-to-text
title: Convert to text
slug: /commands/convert-to-text
displayed_sidebar: docs
---

<!--REF #_command_.Convert to text.Syntax-->**Convert to text** ( *BLOB* ; *juegoCaracteres* ) : Text<!-- END REF-->
<!--REF #_command_.Convert to text.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Blob | Blob | &#8594;  | BLOB que contiene un texto expresado en un juego de caracteres específico |
| juegoCaracteres | Text, Integer | &#8594;  | Nombre o número de juego de caracteres de blob |
| Resultado | Text | &#8592; | Contenido del BLOB expresado en el juego de caracteres 4D |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Convert to text.Summary-->El comando Convert to text convierte el texto contenido en el parámetro *blob* y lo devuelve en texto expresado en el juego de caracteres de 4D.<!-- END REF--> 4D utiliza por defecto el conjunto de caracteres UTF-16\. 

En *juegoCaracteres*, pase el conjunto de caracteres del texto contenido en el *blob*, el cual será utilizado para la conversión.   
Si el BLOB contiene texto copiado desde 4D, el texto del BLOB será probablemente UTF-16\. Puede pasar una cadena con el nombre estándar del conjunto de caracteres, o una con sus alias (por ejemplo, “ISO-8859-1” o “UTF-8”), o su identificador (entero largo). Para mayor información, consulte la descripción del comando [CONVERT FROM TEXT](convert-from-text.md "CONVERT FROM TEXT").

Convert to text soporta BOMs (Byte Order Marks). Si el conjunto de caracteres especificado es de tipo Unicode (UTF-8, UTF-16 o UTF-32), 4D intenta identificar un BOM entre los primeros bytes recibidos. Si lo detecta, se filtra del resultado y 4D utiliza el conjunto de caracteres definido en lugar del conjunto de caracteres especificado. 

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable OK toma el valor 1\. De lo contrario, toma el valor 0.

#### Ver también 

[CONVERT FROM TEXT](convert-from-text.md)  