---
id: spell-checking
title: SPELL CHECKING
slug: /commands/spell-checking
displayed_sidebar: docs
---

<!--REF #_command_.SPELL CHECKING.Syntax-->**SPELL CHECKING**<!-- END REF-->
<!--REF #_command_.SPELL CHECKING.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.SPELL CHECKING.Summary-->El comando **SPELL CHECKING** activa la revisión ortográfica del campo o variable que tiene el foco en el formulario en pantalla.<!-- END REF--> El objeto verificado debe ser de tipo Alfa o Texto.

**Nota:** si desea activar el corrector ortográfico haciendo clic en un botón en el formulario, asegúrese de que este botón no tenga la propiedad "enfocable".

La verificación ortográfica comienza con la primera palabra del campo o variable. Si se detecta una palabra desconocida, aparece la caja de diálogo de corrección (para mayor información, consulte el Manual de Diseño de 4D). 4D utiliza el diccionario actual (correspondiente al lenguaje de la aplicación) a menos que haya utilizado el comando [SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md).

**Atención:** el comando **SPELL CHECKING** afecta el texto que se está introduciendo en el formulario, y no la fuente de datos asociada (campo o variable). Esto significa que si llama a este comando desde los eventos de formulario On Data Change u On Losing Focus (no recomendado), esto no afectará el texto almacenado ya que 4D ya ha asignado el texto introducido a la fuente de datos en este punto. En este caso, es necesario asignar el resultado editado a la fuente de datos, usando el comando [Get edited text](get-edited-text.md). Por ejemplo:  

```4d
 If(Form event code=On Data Change)
    SPELL CHECKING
    theVariable:=Get edited text
 End if
```

#### Ver también 

[SPELL CHECK TEXT](spell-check-text.md)  
[SPELL SET CURRENT DICTIONARY](spell-set-current-dictionary.md)  