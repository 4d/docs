---
id: add-to-date
title: Add to date
slug: /commands/add-to-date
displayed_sidebar: docs
---

<!--REF #_command_.Add to date.Syntax-->**Add to date** ( *fecha* ; *años* ; *meses* ; *días* ) : Date<!-- END REF-->
<!--REF #_command_.Add to date.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| fecha | Date | &#8594;  | Fecha a la cual añadir días, meses y años |
| años | Integer | &#8594;  | Número de años a añadir a la fecha |
| meses | Integer | &#8594;  | Número de meses a añadir a la fecha |
| días | Integer | &#8594;  | Número de días a añadir a la fecha |
| Resultado | Date | &#8592; | Fecha resultante |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Add to date.Summary-->El comando Add to date añade *años*, *meses,* y *días* a la fecha pasada en *fecha*, luego devuelve la fecha resultante.<!-- END REF-->

Aunque usted puede utilizar los *Operadores de fechas* para añadir días a una fecha, Add to date le permite rápidamente añadir meses y años sin tener que lidiar con el número de días al mes o años bisiestos (como lo haría cuando utiliza el operador + en fechas).

#### Ejemplo 

```4d
  // Esta línea calcula la fecha dentro de un año, el mismo día
 $vdInUnaño:=Add to date(Current date;1;0;0)
 
  // Esta línea calcula la fecha el próximo mes, el mismo día
 $vdProximoMes:=Add to date(Current date;0;1;0)
 
  // Esta línea hace lo mismo que $vdMañana:=Current date+1
 $vdMañana:=Add to date(Current date;0;0;1)
```


#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 393 |
| Hilo seguro | &check; |


