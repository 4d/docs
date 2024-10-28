---
id: delete-selection
title: DELETE SELECTION
slug: /commands/delete-selection
displayed_sidebar: docs
---

<!--REF #_command_.DELETE SELECTION.Syntax-->**DELETE SELECTION** {( *tabla* )}<!-- END REF-->
<!--REF #_command_.DELETE SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual borrar la selección actual o Tabla por defecto, si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.DELETE SELECTION.Summary-->DELETE SELECTION borra la selección actual de registros de *tabla*.<!-- END REF--> Si la selección actual está vacía, DELETE SELECTION no hace nada. Después de borrar los registros, la selección actual queda vacía. Los registros que se borran durante una transacción están bloqueados para los otros usuarios y procesos hasta que la transacción se valide o cancele.

**Advertencia:** la eliminación de una selección de registros es una operación definitiva y no puede deshacerse.

Deseleccionar la opción **Registros borrados definitivamente** en el Inspector de tablas le permite aumentar la velocidad de las eliminaciones durante el uso de DELETE SELECTION (ver *Registros borrados definitivamente* en el manual *Modo Diseño*).

#### Ejemplo 1 

El siguiente ejemplo muestra todos los registros de la tabla \[Personas\] y permite al usuario seleccionar cuáles borrar. El ejemplo tiene dos partes. La primera es un método para mostrar los registros. La segunda es un método de objeto para un botón Borrar. Este es el primer método: 

```4d
 ALL RECORDS([Personas]) // Selección de todos los registros
 FORM SET OUTPUT([Personas];"Lista") // Definición del formulario para listar los registros
 DISPLAY SELECTION([Personas]) // Mostrar todos los registros
```

El siguiente es el método de objeto del botón Borrar, que aparece en el pie de página del formulario de salida. El método de objeto utiliza los registros seleccionados por el usuario (el conjunto sistema UserSet) para borrar la selección. Note que si el usuario no selecciona ningún registro, DELETE SELECTION no tiene ningún efecto.

```4d
  // Solicitar confirmación de que el usuario realmente quiere borrar los registros
 CONFIRM("Usted seleccionó"+String(Records in set("UserSet"))+" personas a borrar."
 +Char(13)+"Haga clic en OK para borrarlas.")
 If(OK=1)
    USE SET("UserSet") // Utilizar los registros elegidos por el usuario
    DELETE SELECTION([Personas]) // Borrar la selección de registros
 End if
 ALL RECORDS([Personas]) // Selección de todos los registros
```

#### Ejemplo 2 

Si se encuentra un registro bloqueado durante la ejecución de DELETE SELECTION, ese registro no se borra. Todos los registros bloqueados se colocan en un conjunto sistema llamado LockedSet. Después de la ejecución de DELETE SELECTION, puede probar LockedSet para verificar si los registros estaban bloqueados. El siguiente bucle se ejecutará hasta que todos los registros se borren:

```4d
 Repeat // Repetir para cada registro bloqueado
    DELETE SELECTION([EstaTabla])
    If(Records in set("LockedSet")#0) // Si hay registros bloqueados
       USE SET("LockedSet") // Seleccionar únicamente los registros bloqueados
    End if
 Until(Records in set("LockedSet")=0) // Hasta que no haya más registros bloqueados
```

#### Ver también 

*Conjuntos*  
[DISPLAY SELECTION](display-selection.md)  
[MODIFY SELECTION](modify-selection.md)  
*Record Locking*  
[TRUNCATE TABLE](truncate-table.md)  