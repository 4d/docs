---
id: length
title: Length
slug: /commands/length
displayed_sidebar: docs
---

<!--REF #_command_.Length.Syntax-->**Length** ( *cadena* ) : Integer<!-- END REF-->
<!--REF #_command_.Length.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| cadena | Text | &#8594;  | Cadena de  la cual devolver la longitud |
| Resultado | Integer | &#8592; | Longitud de la cadena |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Length.Summary-->**Length** permite obtener la longitud de *cadena*.<!-- END REF-->devuelve el número de caracteres alfanuméricos en *cadena*.

**Nota:** en modo Unicode, si quiere verificar que una cadena contiene caracteres, incluyendo caracteres ignorables, debe utilizar el último If(Length(vtAnyText)=0) en lugar de If(vtAnyText=""). Si la cadena contiene por ejemplo Char(1), que es carácter ignorable, Length(vtAnyText) devuelve 1 pero vtAnyText="" devuelve True.

#### Ejemplo 

Este ejemplo ilustra el uso de Length. Los resultados, descritos en los comentarios, se asignan a la variable *vlResult*.

```4d
 vlResult:=Length("Topacio") // vlResult obtiene 7
 vlResult:=Length("Ciudadano") // vlResult obtiene 9
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 16 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


