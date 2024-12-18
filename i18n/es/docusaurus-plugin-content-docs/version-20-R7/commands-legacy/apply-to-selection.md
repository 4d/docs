---
id: apply-to-selection
title: APPLY TO SELECTION
slug: /commands/apply-to-selection
displayed_sidebar: docs
---

<!--REF #_command_.APPLY TO SELECTION.Syntax-->**APPLY TO SELECTION** ( *tabla* ; *sentencia* )<!-- END REF-->
<!--REF #_command_.APPLY TO SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual aplicar la fórmula o Tabla por defecto, si se omite |
| sentencia | Expression | &#8594;  | Línea de código o método |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.APPLY TO SELECTION.Summary-->**APPLY TO SELECTION** aplica *sentencia* a cada registro de la selección actual de *tabla*.<!-- END REF--> La *sentencia* puede ser una línea de instrucciones o un método. Si *sentencia* modifica un registro de *tabla*, el registro modificado se guarda. Si *sentencia* no modifica un registro, el registro no se guarda. Si la selección actual está vacía, **APPLY TO SELECTION** no tiene efecto. Si la relación es automática, la *sentencia* puede contener un campo de una tabla relacionada.

**Atención**: los parámetros ($1...$n) no están soportados en la *sentencia*.

**APPLY TO SELECTION** puede ser utilizado para reunir información de la selección de registros (por ejemplo, cálculo de un total), o para modificar una selección (por ejemplo, pasando a mayúscula la primera letra de un campo). Si este comando se utiliza dentro de una transacción, todos los cambios pueden deshacerse si la transacción se cancela.

**4D Server:** el servidor no ejecuta ninguno de los comandos que se pasen en *sentencia*. Cada registro de la selección será enviado al equipo cliente para ser modificado.

Un termómetro de progresión se muestra mientras se ejecuta **APPLY TO SELECTION**. Para ocultarlo, utilice [MESSAGES OFF](messages-off.md) antes de llamar a **APPLY TO SELECTION**. Si el termómetro de progreso se muestra, el usuario puede cancelar la operación.

#### Ejemplo 1 

El siguiente ejemplo cambia a mayúsculas todos los nombres en la tabla \[Empleados\]:

```4d
 APPLY TO SELECTION([Empleados];[Empleados]Apellido:=Uppercase([Empleados]Apellido))
```

#### Ejemplo 2 

Si un registro está bloqueado durante la ejecución de APPLY TO SELECTION y ese registro se modifica, el registro no se guardará. Todos los registros bloqueados que se encuentren se colocan en un conjunto llamado LockedSet. Después de ejecutar APPLY TO SELECTION, es recomendable probar LockedSet para verificar si hay registros bloqueados. El siguiente bucle se ejecuta hasta que todos los registros hayan sido modificados:

```4d
 Repeat
    APPLY TO SELECTION([Empleados];[Empleados]Apellido:=Uppercase([Empleados]Apellido))
    USE SET("LockedSet") // Selección de registros bloqueados únicamente
 Until(Records in set("LockedSet")=0) // Hasta que no haya registros bloqueados
```

#### Ejemplo 3 

Este ejemplo utiliza un método:

```4d
 ALL RECORDS([Empleados])
 APPLY TO SELECTION([Empleados];M_Cap)
```

#### Variables y conjuntos del sistema 

Si el usuario hace clic en el botón Detener en el termómetro de progresión, la variable sistema OK toma el valor 0\. De lo contrario, toma el valor 1.

#### Ver también 

*Conjuntos*  
[EDIT FORMULA](edit-formula.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 70 |
| Hilo seguro | &check; |
| Modifica variables | OK |


