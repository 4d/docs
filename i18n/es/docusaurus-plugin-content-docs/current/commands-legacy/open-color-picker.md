---
id: open-color-picker
title: OPEN COLOR PICKER
slug: /commands/open-color-picker
displayed_sidebar: docs
---

<!--REF #_command_.OPEN COLOR PICKER.Syntax-->**OPEN COLOR PICKER** {( *textOFondo* )}<!-- END REF-->
<!--REF #_command_.OPEN COLOR PICKER.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| textOFondo | Integer | &#8594;  | 0 o si se omite = color del texto, 1 = color del fondo del texto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OPEN COLOR PICKER.Summary-->El comando **OPEN COLOR PICKER** muestra la caja de diálogo de selección de color del sistema.<!-- END REF-->  
  
**Nota**: esta caja de diálogo es modal en Windows pero no en OS X.  
  
Si el usuario selecciona un color y valida la caja de diálogo, este color se aplica a la selección actual de texto en el objeto con el foco, si la propiedad "Aceptar selector color/fuente" está seleccionada para este objeto (ver el manual de *Diseño*).  
  
Si pasa 0 en el parámetro *textOFondo* u omite este parámetro, el color seleccionado se aplica al texto. Si pasa 1 en *textOFondo*, este color se aplica al fondo del texto.  
  
Si el color se ha cambiado, el evento formulario On After Edit se genera para el objeto.

#### Ver también 

[OPEN FONT PICKER](open-font-picker.md)  