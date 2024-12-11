---
id: uppercase
title: Uppercase
slug: /commands/uppercase
displayed_sidebar: docs
---

<!--REF #_command_.Uppercase.Syntax-->**Uppercase** ( *laCadena* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Uppercase.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| laText | Text | &#8594;  | Cadena a convertir en mayúsculas |
| * | Operador | &#8594;  | Si se pasa: conservar los acentos |
| Resultado | Text | &#8592; | Cadena en mayúsculas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Uppercase.Summary-->Uppercase devuelve una cadena de caracteres igual a *laCadena* con todos los caracteres alfabéticos convertidos en mayúsculas.<!-- END REF-->

El parámetro opcional *\**, si se pasa, indica que los eventuales caracteres acentuados presentes en *laCadena* deben ser devueltos como caracteres en mayúsculas acentuados. Por defecto, cuando se omite este parámetro, los caracteres acentuados “pierden” sus acentos después de efectuada la conversión.

#### Ejemplo 1 

Este ejemplo compara los resultados obtenidos según se pase o no el parámetro *\**:

```4d
 $lacadena:=Uppercase("andrés") // $lacadena es igual a "ANDRES"
 $lacadena:=Uppercase("andrés";*) // $lacadena es igual a "ANDRÉS"
```

#### Ejemplo 2 

Ver el ejemplo para [Lowercase](lowercase.md "Lowercase").

#### Ver también 

[Lowercase](lowercase.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 13 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


