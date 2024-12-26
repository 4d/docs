---
id: multi-sort-array
title: MULTI SORT ARRAY
slug: /commands/multi-sort-array
displayed_sidebar: docs
---

<!--REF #_command_.MULTI SORT ARRAY.Syntax-->**MULTI SORT ARRAY** ( *array* {; *orden*}{; *array2* ; *orden2* ; ... ; *arrayN* ; *ordenN*} ) <br/>
**MULTI SORT ARRAY** ( *ptrArrayNombre* ; *ordenArrayNombre* )<!-- END REF-->
<!--REF #_command_.MULTI SORT ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array(s) a ordenar |
| orden | * | &#8594;  | ">" efectuar una ordenación creciente o "<" efectuar una ordenación decreciente Si se omite "aa" no ordenación |
| MULTI SORT ARRAY ( ptrArrayNombre ; ordenArrayNombre ) |
| Parámetro | Tipo | Descripción |
| ptrArrayNombre | Pointer array | &#8594;  | Array de punteros de arrays |
| ordenArrayNombre | Integer array | &#8594;  | Array de criterio de ordenación (1= ordenar por orden creciente, -1= ordenar por orden decreciente), 0= sincronización con ordenaciones anteriores |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.MULTI SORT ARRAY.Summary-->El comando MULTI SORT ARRAY permite efectuar una ordenación multicriterios en un conjunto de arrays.<!-- END REF-->

Este comando admite dos sintaxis diferentes.

**• Primera sintaxis: MULTI SORT** **ARRAY (Array{; orden}{; array2; sort2; ...; arrayN; ordenN})**   
  
Esta sintaxis es la más sencilla; le permite pasar directamente los nombres de los arrays sincronizados a donde usted quiere aplicar una ordenación multicriterio.

Puede pasar un número ilimitado de parejas (*Array* *;> o <*) y/o sólo arrays. Todos los arrays pasados como parámetros se ordenan en de una manera sincronizada.

Para utilizar los contenidos de un array como criterio de ordenación, pase el parámetro *orden*. El valor del parámetro (*\> o <*) determina el orden (creciente o decreciente) en el cual el array será ordenado. Si se omite el parámetro *orden*, el contenido del array no se utiliza como criterio de ordenación.

**Nota:** recuerde que debe pasarse al menos un criterio de ordenación para que el comando funcione. Si no se define un criterio de ordenación, se genera un error.

Los niveles de ordenación se determinan por el orden en el cual los arrays se pasan al comando: la posición de un array con criterio de ordenación en la sintaxis determina su nivel de ordenación.

**• Segunda sintaxis: MULTI SORT ARRAY (ptrArrayNombre; ordenArrayNombre)**

Esta sintaxis, más compleja, es muy valiosa para los desarrollos genéricos (por ejemplo, usted puede crear un método genérico para ordenar arrays de todo tipo, o una vez más crear el equivalente de un comando [SORT ARRAY](sort-array.md "SORT ARRAY") genérico).

El parámetro *ptrArrayNombre* contiene el nombre de un array de punteros de array; cada elemento de este array es un puntero designando un array a ordenar. Las ordenaciones serán efectuadas en el orden de los punteros de array definidos por *ptrArrayNombre*. **Advertencia:** todos los arrays apuntados por *ptrArrayNombre* deben tener el mismo número de elementos.

**Nota:** *ptrArrayNombre* puede ser un array de punteros local ($ptrArrayNombre), proceso (ptrArrayNombre) o interproceso (<>ptrArrayNombre). En cambio, los elementos de este array deben apuntar a arrays de proceso o interproceso únicamente.

El parámetro *ordenArrayNombre* contiene el nombre de un array en el cual cada elemento indica el criterio de ordenación (-1, 0 o 1) del elemento del array de punteros correspondiente:  
  
\-1 = Ordenación decreciente.  
0 = El array no se utiliza como criterio de ordenación pero debe ser ordenado en función de otras ordenaciones.   
1 = Ordenación creciente.

Para cada elemento del array *ptrArrayNombre*, debe corresponder un elemento del array *ordenArrayNombre*. Por lo tanto los dos arrays deben tener exactamente el mismo número de elementos.

**Notas:** 

* no es posible ordenar arrays de tipo Puntero o [Imagen](# "Can be any Windows or Macintosh picture"). Puede ordenar un elemento de un array de bidimensional (es decir *a2DArray{$vlThisElem}*) pero no puede ordenar el array bidimensional en sí mismo (es decir *a2DArray*).
* You can sort Object arrays. Null elements are grouped and array elements are sorted with an internal order.

#### Ejemplo 1 

El siguiente ejemplo utiliza la primera sintaxis: crea cuatro arrays y los ordena por ciudad (orden ascendente) luego por salario (orden descendente) con los dos últimos arrays *nombres\_array* y *telNum\_array*, siendo sincronizados de acuerdo con los criterios de ordenación anteriores:

```4d
 ALL RECORDS([Empleados])
 SELECTION TO ARRAY([Empleados]Ciudad;ciudades;[Empleados]Salario;salarios;[Empleados]Nombre;
 nombres;[Empleados]TelNum;telNums)
 MULTI SORT ARRAY(ciudades;>;salarios;<;nombres;telNums)
```

Si quiere que el array de nombres sea utilizado como tercer criterio de ordenación, sólo añada *\> o <* después del parámetro *nombres\_array.*   
Observe que la sintaxis:

```4d
 MULTI SORT ARRAY(ciudades;>;salarios;nombres;telNums)
```

es equivalente a:

```4d
 SORT ARRAY(ciudades;salarios;nombres;telNums;>)
```

#### Ejemplo 2 

El siguiente ejemplo utiliza la segunda sintaxis: crea cuatro arrays y los ordena por ciudad (orden creciente) y empresa (orden decreciente); los últimos dos arrays, nombres\_Array y telNum\_Array, están sincronizados de acuerdo al criterio de ordenación anterior:

```4d
 ALL RECORDS([Empleados])
 SELECTION TO ARRAY([Empleados]Ciudad;ciudades;[Empleados]Empresa;empresas;[Empleados]Nombre;
 nombres;[Empleados]TelNum;telNums)
 ARRAY POINTER(punteros_Array;4)
 ARRAY LONGINT(sorts_Array;4)
 Array_punteros{1}:=->ciudades
 Array_orden{1}:=1
 Array_punteros{2}:=->empresas
 Array_orden{2}:=-1
 Array_punteros{3}:=->nombres
 Array_orden{3}:=0
 Array_punteros{4}:=->telNums
 Array_orden{4}:=0
 MULTI SORT ARRAY(Array_punteros;Array_orden)
```

Si quiere que el array de nombres se utilice como tercer criterio de ordenación, debe asignar el valor 1 al elemento Array\_orden{3}. O bien, si quiere que los arrays se ordenen sólo por el criterio ciudades, asigne el valor 0 a los elementos Array\_orden{2}, Array\_orden{3} y Array\_orden{4}. De esta manera, puede obtener un resultado idéntico a SORT ARRAY(ciudades;empresas;nombres;telNums;>). 

#### Ver también 

[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  
[SORT ARRAY](sort-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 718 |
| Hilo seguro | &check; |


