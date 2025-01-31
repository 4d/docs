---
id: set-default-century
title: SET DEFAULT CENTURY
slug: /commands/set-default-century
displayed_sidebar: docs
---

<!--REF #_command_.SET DEFAULT CENTURY.Syntax-->**SET DEFAULT CENTURY** ( *siglo* {; *añoPivote*} )<!-- END REF-->
<!--REF #_command_.SET DEFAULT CENTURY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| siglo | Integer | &#8594;  | Siglo por defecto (menos uno) para la entrada de años con dos dígitos |
| añoPivote | Integer | &#8594;  | Año pivote para la entrada de años con dos dígitos |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET DEFAULT CENTURY.Summary-->El comando SET DEFAULT CENTURY permite especificar el siglo por defecto y el año pivote utilizado por 4D cuando introduce una fecha con sólo dos dígitos para el año.<!-- END REF-->

El valor del año pivote define la forma como 4D interpretará la entrada de datos de una fecha con un año de dos dígitos:

* Si el año es mayor o igual al año pivote, 4D utiliza el siglo actual por defecto.
* Si el año es menor que el año pivote, 4D utiliza el siguiente siglo (relativo al siglo actual por defecto).

Por defecto, 4D establece el siglo 20 como el siglo por defecto y utiliza 30 como año pivote. Por ejemplo:

* 25/01/97 significa 25 de enero de 1997.
* 25/01/30 significa 25 de enero de 1930.
* 25/01/29 significa 25 de enero de 2029.
* 25/01/07 significa 25 de enero de 2007.

Para cambiar este comportamiento por defecto, ejecute el comando SET DEFAULT CENTURY. El efecto del comando es inmediato. Puede pasar únicamente un nuevo siglo por defecto, o un nuevo siglo por defecto y un año pivote.

Si pasa sólo un nuevo siglo por defecto menos uno en *siglo*, 4D interpretará todos los años introducidos con dos dígitos como que pertenecen a este siglo.   
  
Por ejemplo, después de llamar:

```4d
 SET DEFAULT CENTURY(20) // Fijar el siglo 21 como siglo por defecto
```

* 25/01/97 significa 25 de enero de 2097
* 25/01/07 significa 25 de enero de 2007

Adicionalmente, puede especificar el parámetro opcional *añoPivote*.  
  
Por ejemplo, después de este llamado, en el cual el año pivote es 1995:

```4d
 SET DEFAULT CENTURY(19;95) // Fijar el siglo 21 como siglo por defecto si el año es menor que 95
```

* 25/01/97 significa 25 de enero de 1997
* 25/01/07 significa 25 de enero de, 2007

**Nota:** este comando afecta únicamente cómo 4D interpreta las fechas introducidas con años de dos dígitos.   
  
En todos los casos:

* 25/01/1997 significa enero 25, 1997
* 25/01/2097 significa enero 25, 2097
* 25/01/1907 significa enero 25, 1907
* 25/01/2007 significa enero 25, 2007

Este comando afecta sólo la entrada de datos. No tiene ningún efecto en el almacenamiento de datos, cálculos, etc.


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 392 |
| Hilo seguro | &check; |


