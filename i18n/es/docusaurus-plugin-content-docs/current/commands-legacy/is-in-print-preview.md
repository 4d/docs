---
id: is-in-print-preview
title: Is in print preview
slug: /commands/is-in-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Is in print preview.Syntax-->**Is in print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Is in print preview.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| resultado | Boolean | &#8592; | True = Vista previa,False = No vista previa |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Is in print preview.Summary-->El comando **Is in print preview** devuelve True si la opción **Vista previa de impresión** está seleccionada en la caja de diálogo de impresión y False de lo contrario.<!-- END REF--> Esta configuración es local al proceso. 

A diferencia del comando [Get print preview](get-print-preview.md), **Is in print preview** devuelve el valor final de la opción, después de la validación de la caja de diálogo por parte del usuario. Este comando permite determinar con certeza si la impresión toma lugar en modo "vista previa". 

#### Ejemplo 

Este ejemplo permite tener en cuenta todos los tipos de impresiones:

```4d
 SET PRINT PREVIEW(True) //Vista previa de impresión por defecto
 PRINT SETTINGS
 If(OK=1)
  //El usuario puede haber cambiado el destino de impresión
    If(Is in print preview) // True si vista previa
       FORM SET OUTPUT([Facturas] ;"toScreen")
    Else
       FORM SET OUTPUT([Facturas] ;"toPrinter"
    End if
    OPEN PRINTING JOB
    ALL RECORDS([Facturas])
    PRINT SELECTION([Facturas];>)
    CLOSE PRINTING JOB
 End if
```

#### Ver también 

[Get print preview](get-print-preview.md)  
[SET PRINT PREVIEW](set-print-preview.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1198 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


