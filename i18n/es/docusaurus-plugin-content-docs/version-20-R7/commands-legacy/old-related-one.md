---
id: old-related-one
title: OLD RELATED ONE
slug: /commands/old-related-one
displayed_sidebar: docs
---

<!--REF #_command_.OLD RELATED ONE.Syntax-->**OLD RELATED ONE** ( *unCampo* )<!-- END REF-->
<!--REF #_command_.OLD RELATED ONE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| unField | Field | &#8594;  | Campo Muchos |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OLD RELATED ONE.Summary-->OLD RELATED ONE funciona de la misma forma que [RELATE ONE](relate-one.md "RELATE ONE"), con la diferencia de que OLD RELATED ONE utiliza el valor anterior de *campo* para establecer la relación.<!-- END REF--> 

**Nota:** OLD RELATED ONE utiliza el valor anterior del campo Muchos devuelto por la función [Old](old.md "Old"). Para mayor información, consulte la descripción del comando [Old](old.md "Old").

OLD RELATED ONE carga el registro anteriormente relacionado al registro actual. Entonces puede accederse a los campos de este registro. Si quiere modificar este registro relacionado anterior y guardarlo, debe llamar a [SAVE RELATED ONE](save-related-one.md "SAVE RELATED ONE"). Tenga en cuenta que un registro que acaba de ser creado, no tiene un registro relacionado anterior. 

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente y si los registros relacionados se han cargado, la variable sistema OK toma el valor 1\. Si el usuario hizo clic en **Cancelar** en la caja de diálogo de selección del registro (que aparece cuando el registro relacionado ha sido modificado), la variable *OK*toma el valor 0\. 

#### Ver también 

[Old](old.md)  
[OLD RELATED MANY](old-related-many.md)  
[RELATE ONE](relate-one.md)  
[SAVE RELATED ONE](save-related-one.md)  