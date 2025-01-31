---
id: substring
title: Substring
slug: /commands/substring
displayed_sidebar: docs
---

<!--REF #_command_.Substring.Syntax-->**Substring** ( *fuente* ; *aPartirDe* {; *numCaracteres*} ) : Text<!-- END REF-->
<!--REF #_command_.Substring.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fuente | Text | &#8594;  | Cadena de la cual obtener una subcadena |
| aPartirDe | Integer | &#8594;  | Posición del primer carácter |
| numCaracteres | Integer | &#8594;  | Número de caracteres a obtener |
| Resultado | Text | &#8592; | Subcadena de fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Substring.Summary-->El comando **Substring** devuelve la parte de *fuente* definida por *aPartirDe* y *numCars*.<!-- END REF--> 

El parámetro *aPartirDe* indica el primer carácter de la cadena a devolver, y *numCars* define el número de caracteres a devolver.

Si *aPartirDe* más *numCars* es mayor que el número de caracteres en la cadena o si *numCars* no está especificado, **Substring** devuelve todos los caracteres de la cadena a partir del carácter especificado por *aPartirDe*. Si *aPartirDe* es superior al número de caracteres en la cadena, **Substring** devuelve una cadena vacía ("").

**Atención**: cuando se utiliza este comando en un contexto multi-estilo, debe convertir los eventuales caracteres de fin de línea Windows ('\\r\\n') en caracteres de fin de línea simples ('\\r') para que el procesamiento sea válido. Esto se debe al mecanismo que normaliza los finales de línea 4D para asegurar la compatibilidad multi-plataforma para los textos. Para obtener más información, consulte *Normalización automática de fines de líneas*.   

#### Ejemplo 1 

Este ejemplo ilustra la utilización de Substring. Los resultados se asignan a la variable *vsResult*. 

```4d
 vsResult:=Substring("08/04/62";4;2) // vsResult toma el valor "04"
 vsResult:=Substring("Emergencia";1;6) // vsResult toma el valor "Emerge"
 vsResult:=Substring(var;2) // vsResult toma el valor de todos los caracteres excepto el primero
```

#### Ejemplo 2 

El siguiente método de proyecto añade los párrafos que se encuentran en el texto (pasado como primer parámetro) a una array de tipo texto o alfa (cuyo puntero se pasa como segundo parámetro):

```4d
  // EXTRACT PARAGRAPHS
  // EXTRACT PARAGRAPHS ( texto ; Puntero )
  // EXTRACT PARAGRAPHS ( Texto a analizar ; -> Array de párrafos )
 
 var $1 : Text
 var $2 : Pointer
 
 $vlElem:=Size of array($2->)
 Repeat
    $vlElem:=$vlElem+1
    INSERT IN ARRAY($2->;$vlElem)
    $vlPos:=Position(Char(Carriage return);$1)
    If($vlPos>0)
       $2->{$vlElem}:=Substring($1;1;$vlPos-1)
       $1:=Substring($1;$vlPos+1)
    Else
       $2->{$vlElem}:=$1
    End if
 Until($1="")
```

#### Ver también 

[Position](position.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 12 |
| Hilo seguro | &check; |


