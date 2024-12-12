---
id: break-level
title: BREAK LEVEL
slug: /commands/break-level
displayed_sidebar: docs
---

<!--REF #_command_.BREAK LEVEL.Syntax-->**BREAK LEVEL** ( *nivel* {; *saltoPag*} )<!-- END REF-->
<!--REF #_command_.BREAK LEVEL.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nivel | Integer | &#8594;  | Número de niveles de ruptura |
| saltoPag | Integer | &#8594;  | Nivel del salto de página |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.BREAK LEVEL.Summary-->BREAK LEVEL especifica el número de niveles de ruptura en un informe realizado utilizando [PRINT SELECTION](print-selection.md "PRINT SELECTION").<!-- END REF-->

**Debe** ejecutar BREAK LEVEL y [ACCUMULATE](accumulate.md "ACCUMULATE") antes de cada informe en el cual quiera utilizar rupturas. Estos comandos activan el proceso de rupturas para un informe. Ver la explicación para el comando [Subtotal](subtotal.md "Subtotal").

El parámetro *nivel* indica el último nivel de ruptura para el que quiere realizar procesos de rupturas. Debe haber ordenado los registros con al menos ese número de niveles. Si ha ordenado más niveles, estos niveles serán impresos como están ordenados, pero no serán procesados para rupturas.

Cada nivel de ruptura generado imprimirá las áreas de rupturas y de encabezado correspondientes en el formulario. Debe haber en el formulario al menos tantas áreas de ruptura como el número que pasó en *nivel*. Si hay más áreas de ruptura, serán ignoradas y no se imprimirán.

El segundo parámetro, opcional, *saltoPag*, se utiliza para provocar saltos de página durante la impresión. 

#### Ejemplo 

El siguiente ejemplo imprime un informe con dos niveles de ruptura. La selección es ordenada en cuatro niveles, pero el comando **BREAK LEVEL** especifica sólo dos niveles de ruptura. Un campo se acumula con el comando [ACCUMULATE](accumulate.md):

```4d
 ORDER BY([Emp]Dept;>;[Emp]Title;>;[Emp]Apellido;>;[Emp]Nombre;>) // Ordenar en cuatro niveles
 BREAK LEVEL(2) // Fijar dos niveles de ruptura(Dept y Title)
 ACCUMULATE([Emp]Salario) // Acumular los salarios
 FORM SET OUTPUT([Emp];"Dept salario") // Seleccionar el formulario a imprimir
 PRINT SELECTION([Emp]) // Imprimir el informe
```

#### Ver también 

[ACCUMULATE](accumulate.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  