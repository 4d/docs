---
id: modified-record
title: Modified record
slug: /commands/modified-record
displayed_sidebar: docs
---

<!--REF #_command_.Modified record.Syntax-->**Modified record** {( *tabla* )} : Boolean<!-- END REF-->
<!--REF #_command_.Modified record.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla a probar si el registro actual se ha modificado o Tabla por defecto, si se omite |
| Resultado | Boolean | &#8592; | El registro ha sido modificado (True), o El registro no ha sido modificado (False) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Modified record.Summary-->Modified record devuelve True si el registro actual de *tabla* se modificó pero no guardó; de lo contrario devuelve False.<!-- END REF--> Esta función permite determinar rápidamente si el registro necesita ser guardado. En los formularios de entrada, puede efectuar la prueba antes de pasar al siguiente registro. Esta función siempre devuelve [TRUE](true.md "TRUE") para un nuevo registro.

Note que esta función siempre devuelve True en los siguientes contextos:

* el registro actual es un nuevo registro,
* después de la ejecución de los comandos [PUSH RECORD](push-record.md) y [POP RECORD](pop-record.md),
* tan pronto como un valor ha sido asignado a un campo del registro, incluso si es el mismo valor que el anterior. Por ejemplo, **Modified record** devuelve True después de que se ejecute la siguiente instrucción:  
```4d  
 [Table_1]Field_1:=[Table_1]Field_1  
```

#### Ejemplo 

El siguiente ejemplo muestra una utilización típica de Modified record:

```4d
 If(Modified record([Clientes]))
    SAVE RECORD([Clientes])
 End if
```

#### Ver también 

[Modified](modified.md)  
[Old](old.md)  
[SAVE RECORD](save-record.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 314 |
| Hilo seguro | &check; |


