---
id: method-get-names
title: METHOD GET NAMES
slug: /commands/method-get-names
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET NAMES.Syntax-->**METHOD GET NAMES** ( *arrNoms* {; *filtro*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET NAMES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrNoms | Text array | &#8592; | Array de nombres de métodos de proyecto |
| filtro | Text | &#8594;  | Filtros de nombres |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.METHOD GET NAMES.Summary-->El comando **METHOD GET NAMES** llena el array *arrNoms* con los nombres de los métodos proyecto creados en la aplicación.<!-- END REF-->  
  
Por defecto, todos los métodos se listan. Puede restringir esta lista pasando una cadena de comparación en el parámetro *filtro*, en este caso, el comando sólo devuelve los métodos cuyo nombre coincide con el filtro. Debe utilizar el carácter @ con el fin de definir los filtros de tipo "comienza por", "termina en" o "contiene".  
  
Si se ejecuta este comando desde un componente, devuelve por defecto los nombres de los métodos proyecto del componente. Si pasa el parámetro *\**, el array contendrá los métodos proyecto de la base local.  
  
**Nota**: los métodos ubicados en la papelera no se listan. 

#### Ejemplo 

Ejemplos de uso:

```4d
  // Lista de todos los métodos proyecto de la base
 METHOD GET NAMES(t_Names)
 
  //  Lista de los métodos proyecto que comienzan por una cadena específica
 METHOD GET NAMES(t_Names;"web_@")
 
  // Lista de los métodos proyecto de la base local que comienzan por una cadena específica
 METHOD GET NAMES(t_Names;"web_@";*)
```


#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1166 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


