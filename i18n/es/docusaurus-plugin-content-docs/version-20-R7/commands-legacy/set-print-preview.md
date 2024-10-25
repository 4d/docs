---
id: set-print-preview
title: SET PRINT PREVIEW
slug: /commands/set-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT PREVIEW.Syntax-->**SET PRINT PREVIEW** ( vista previa )<!-- END REF-->
<!--REF #_command_.SET PRINT PREVIEW.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| vista previa | Booleano | &#8594;  | Previsualización en pantalla (TRUE), o Sin previsualización (FALSE) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SET PRINT PREVIEW.Summary-->**SET PRINT PREVIEW** le permite seleccionar o deseleccionar por programación la opción de previsualización en pantalla de la caja de diálogo de impresión.<!-- END REF--> Si pasa TRUE en *vista previa*, se selecciona Previsualización en pantalla, si pasa FALSE, se deseleccionará. Este parámetro es local para un proceso y no afecta la impresión de otros procesos o usuarios.

**Nota:** en Windows, puede definir el formato de la vista previa de impresión utilizando el comando [SET PRINT OPTION](set-print-option.md).

#### Ejemplo 

El siguiente ejemplo selecciona la opción Previsualización en pantalla para mostrar los resultados de una búsqueda en pantalla, y luego la deselecciona.

```4d
 QUERY([Clientes])
 If(OK=1)
    SET PRINT PREVIEW(True)
    PRINT SELECTION([Clientes];*)
    SET PRINT PREVIEW(False)
 End if
```

#### Ver también 

[Get print preview](get-print-preview.md)  
[Is in print preview](is-in-print-preview.md)  