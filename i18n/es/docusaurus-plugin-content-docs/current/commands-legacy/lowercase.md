---
id: lowercase
title: Lowercase
slug: /commands/lowercase
displayed_sidebar: docs
---

<!--REF #_command_.Lowercase.Syntax-->**Lowercase** ( *laCadena* {; *} ) : Text<!-- END REF-->
<!--REF #_command_.Lowercase.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| laText | Text | &#8594;  | Cadena a pasar a minúsculas |
| * | Operador | &#8594;  | Si se pasa: conservar los acentos |
| Resultado | Text | &#8592; | Cadena en minúsculas |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Lowercase.Summary-->Lowercase devuelve una cadena de caracteres igual a *laCadena* con todos los caracteres alfabéticos convertidos en minúsculas.<!-- END REF-->

El parámetro opcional *\**, si se pasa, indica que los eventuales caracteres acentuados presentes en *laCadena* deben devolverse como caracteres en minúsculas con acentos. Por defecto, cuando se omite este parámetro, los caracteres acentuados “pierden” sus acentos después de que se lleva a cabo la conversión.

#### Ejemplo 1 

El siguiente método de proyecto convierte a mayúsculas el primer carácter de la cadena o del texto recibido como parámetro. Por ejemplo, Nom:= Mayus ("juan") devuelve "Juan".

```4d
  // Método de proyecto Mayus
  // Mayus( Cadena) -> Cadena
  // Mayus( Todo texto o cadena) -> texto con una letra en mayúsculas
 
 $0:=Lowercase($1)
 If(Length($0)>0)
    $0[[1]]:=Uppercase($0[[1]])
 End if
```

#### Ejemplo 2 

Este ejemplo compara los resultados obtenidos de acuerdo a si se pasa o no el parámetro *\**:

```4d
 $lacadena:=Lowercase("DÉJÀ VU") // $lacadena es "deja vu"
 $lacadena:=Lowercase("DÉJÀ VU";*) // $lacadena es "déjà vu"
```

#### Ver también 

[Uppercase](uppercase.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 14 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


