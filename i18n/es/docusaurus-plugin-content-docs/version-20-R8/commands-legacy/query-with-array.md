---
id: query-with-array
title: QUERY WITH ARRAY
slug: /commands/query-with-array
displayed_sidebar: docs
---

<!--REF #_command_.QUERY WITH ARRAY.Syntax-->**QUERY WITH ARRAY** ( *campoObjetivo* ; *array* )<!-- END REF-->
<!--REF #_command_.QUERY WITH ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campoObjetivo | Field | &#8594;  | Campo utilizado para comparar los valores |
| array | Array | &#8594;  | Array de los valores buscados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.QUERY WITH ARRAY.Summary-->El comando **QUERY WITH ARRAY** busca en la tabla del campo pasado en el primer parámetro todos los registros para los cuales el valor de *campoObjetivo*, es igual al menos a uno de los valores de los elementos en [Array](# "Un array de valores").<!-- END REF--> Los registros encontrados constituyen la nueva selección actual. 

Este comando le permite construir rápida y simplemente una búsqueda en múltiples valores. 

**Notas:**  
  
• Este comando no puede utilizarse con campos de tipo Imagen, subcampo y BLOB.  
• *campoObjetivo* y [Array](# "Un array de valores") deben ser del mismo tipo. Excepción: puede utilizar un array de tipo Entero largo con un campo de tipo Hora. 

#### Ejemplo 

El siguiente ejemplo le permite recuperar los registros de clientes franceses y americanos:

```4d
 ARRAY TEXT(ArrayBusqueda;2)
 ArrayBusqueda{1}:="FR"
 ArrayBusqueda{2}:="US"
 QUERY WITH ARRAY([Clientes]Paises;ArrayBusqueda)
```

#### Ver también 

[QUERY SELECTION WITH ARRAY](query-selection-with-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 644 |
| Hilo seguro | &check; |
| Modifica la selección actual ||


