---
id: get-query-destination
title: GET QUERY DESTINATION
slug: /commands/get-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.GET QUERY DESTINATION.Syntax-->**GET QUERY DESTINATION** ( *destinoTipo* ; *destinoObjeto* ; *destinoPunt* )<!-- END REF-->
<!--REF #_command_.GET QUERY DESTINATION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| destinoTipo | Integer | &#8592; | 0=selección actual, 1=conjunto, 2=selección temporal, 3=variable |
| destinoObjeto | Text | &#8592; | Nombre del conjunto o Nombre de la selección temporal o Cadena vacía |
| destinoPunt | Pointer | &#8592; | Puntero a la variable local si destinoTipo=3 |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GET QUERY DESTINATION.Summary-->El comando **GET QUERY DESTINATION** devuelve el destino actual de los resultados de las búsquedas para el proceso en curso.<!-- END REF--> Por defecto, los resultados de las búsquedas modifican la selección actual, pero puede modificar este funcionamiento con la ayuda del comando [SET QUERY DESTINATION](set-query-destination.md).

En el parámetro *destinoTipo*, 4D devuelve un valor indicando el destino actual de las búsquedas y en el parámetro *destinoObjeto* devuelve el nombre del destino (si aplica). Puede comparar el valor del parámetro *destinoTipo* con las constantes del tema *Destinos de búsqueda*:

| Constante              | Tipo         | Valor |
| ---------------------- | ------------ | ----- |
| Into current selection | Entero largo | 0     |
| Into named selection   | Entero largo | 2     |
| Into set               | Entero largo | 1     |
| Into variable          | Entero largo | 3     |

El valor devuelto en el parámetro *destinoObjeto* depende del valor del parámetro *destinoTipo*:

| **Parámetro destinoTipo** | **Parámetro destinoObjeto**                                               |
| ------------------------- | ------------------------------------------------------------------------- |
| 0 (selección actual)      | *destinoObjeto* es una cadena vacía                                       |
| 1 (conjunto)              | *destinoObjeto* contiene el nombre del conjunto                           |
| 2 (selección temporal)    | *destinoObjeto* contiene el nombre de la selección                        |
| 3 (variable)              | *destinoObjeto* es una cadena vacía (utilizar el parámetro *destinoPunt*) |

 Cuando el destino de las búsquedas es una variable local (*destinoTipo* devuelve 3), 4D devuelve en el parámetro *destinoPunt* un puntero a esta variable.

#### Ejemplo 

Queremos modificar temporalmente el destino de búsqueda y restablecer los parámetros previos:

```4d
 GET QUERY DESTINATION($vType;$vName;$ptr)
  //recuperación de los parámetros actuales
 SET QUERY DESTINATION(Into set;"$temp")
  //modificación temporal del destino
 QUERY(...) //búsqueda
 SET QUERY DESTINATION($vType;$vName;$ptr)
  //restablecimiento de los parámetros
```

#### Ver también 

[SET QUERY DESTINATION](set-query-destination.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1155 |
| Hilo seguro | &check; |


