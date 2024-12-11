---
id: is-new-record
title: Is new record
slug: /commands/is-new-record
displayed_sidebar: docs
---

<!--REF #_command_.Is new record.Syntax-->**Is new record** {( *tabla* )} : Boolean<!-- END REF-->
<!--REF #_command_.Is new record.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla del registro a examinar o Tabla por defecto si se omite este parámetro |
| Resultado | Boolean | &#8592; | True si el registro está siendo creado, False si no |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is new record.Summary-->El comando Is new record devuelve [True](true.md "True") cuando el registro actual de *tabla* está siendo creado y aún no ha sido guardado en el proceso actual.<!-- END REF-->es posible obtener la misma información utilizando el comando existente [Record Number](record-number.md "Record Number"), y probando si devuelve -3\. Sin embargo, recomendamos utilizar Is new record en lugar de [Record Number](record-number.md "Record Number") en este caso. De hecho, el comando Is new record asegura una mejor compatibilidad con las futuras versiones de 4D.

**4D Server:** este comando devuelve un resultado diferente en el contexto del evento de formulario On Validate dependiendo de si se ejecuta en 4D (monopuesto) o 4D Client. En versión monopuesto, el comando devuelve [False](false.md "False") (el registro se considera como creado). En versión cliente/servidor, el comando devuelve [True](true.md "True") porque en este caso, el registro ya ha sido creado en el servidor pero la información no ha sido enviada aún al cliente. 

#### Ejemplo 

Las dos siguientes instrucciones siguientes son idénticas. La segunda se recomienda para que el código sea compatible con las próximas versiones de 4D:

```4d
 If(Record number([Tabla])=-3) //No se recomienda
  // ...
 End if
 
 If(Is new record([Tabla])) //Recomendada
  // ...
 End if
```

#### Ver también 

[Modified record](modified-record.md)  
[Record number](record-number.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 668 |
| Hilo seguro | &check; |


