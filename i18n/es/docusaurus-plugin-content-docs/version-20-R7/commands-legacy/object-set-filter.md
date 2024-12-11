---
id: object-set-filter
title: OBJECT SET FILTER
slug: /commands/object-set-filter
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FILTER.Syntax-->**OBJECT SET FILTER** ( {* ;} *objeto* ; *filtroEntrada* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FILTER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *), o Campo o variable (si se omite *) |
| filtroEntrada | Text | &#8594;  | Nuevo filtro de entrada para el área editable |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OBJECT SET FILTER.Summary-->OBJECT SET FILTER reemplaza el filtro de entrada para los objetos especificados por *objeto* por *filtroEntrada*.<!-- END REF--> 

Si pasa el parámetro opcional *\**, indica que el parámetro *objeto* es un nombre de objeto (una cadena). Si omite el parámetro opcional \*, indica que el parámetro *objeto* es un campo o una variable. En este caso, usted especifica una referencia de un campo o de una variable (campo o variable de tipo objeto únicamente) en lugar de una cadena. Para mayor información sobre nombres de objetos, consulte la sección *Propiedades de los objetos*. 

OBJECT SET FILTER puede utilizarse en formularios de entrada y diálogos y puede aplicarse a los campos y variables editables que aceptan un filtro de entrada en el entorno Diseño.

Al pasar una cadena vacía en *filtroEntrada* se elimina el filtro de entrada actual para los objetos.

**Nota:** este comando no puede utilizarse con campos ubicados en el formulario listado de un subformulario.

**Nota:** en *filtroEntrada*, para utilizar filtros de entrada predefinidos utilizando la Caja de herramientas, coloque un prefijo en el filtro de entrada, una barra vertical (|). 

#### Ejemplo 1 

El siguiente ejemplo define el filtro de entrada para el campo código postal. Si la dirección es de España, el filtro se define para los códigos postales españoles. De lo contrario, puede aceptar todo valor de entrada: 

```4d
 If([Empresas]Pais ="ES") // Definir el filtro para un formato del código postal español
    OBJECT SET FILTER([Empresas]Codigo Postal;"&9#####")
 Else // Definir el filtro para aceptar todo valor alfanumérico y mayúsculas
    OBJECT SET FILTER([Empresas]Codigo Postal;"~@")
 End if
```

#### Ejemplo 2 

El siguiente ejemplo permite únicamente la entrada de las letras “a,” “b,” “c,” o “g” en un campo de dos letras: 

```4d
 OBJECT SET FILTER([Tabla]Campo ;"&"+Char(Double quote)+"a;b;c;g"+Char(Double quote)+"##")
```

**Nota:** este ejemplo define el filtro de entrada *&"a;b;c;g"##*.

#### Ver también 

[OBJECT Get filter](object-get-filter.md)  
[OBJECT SET FORMAT](object-set-format.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 235 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


