---
id: invoke-action
title: INVOKE ACTION
slug: /commands/invoke-action
displayed_sidebar: docs
---

<!--REF #_command_.INVOKE ACTION.Syntax-->**INVOKE ACTION** ( *accion* {; *objetivo*} )<!-- END REF-->
<!--REF #_command_.INVOKE ACTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| accion | Text | &#8594;  | Nombre o patrón de acción estándar incluyendo parámetro si es necesario |
| objetivo | Integer | &#8594;  | Define donde ejecutar la acción: formulario actual (por defecto) o formulario principal |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.INVOKE ACTION.Summary-->El comando **INVOKE ACTION** activa la acción estándar definida por el parámetro accion, opcionalmente en el contexto objetivo.<!-- END REF-->

En *accion*, pase el nombre de la acción estándar a ejecutar. Puede ser una cadena o una constante del tema *Acción estándar*. Algunas acciones aceptan un elemento de destino y parámetros. En este caso, debe utilizar el patrón solicitado, por ejemplo *"gotoPage?value=2"* or *paragraph/backgroundPositionV?value=top.*

Todas las acciones disponibles se listan en la sección *Acciones estándar* del manual de *Diseño 4D*.

**Nota:** también se ofrecen acciones específicas adicionales para los documentos 4D Write Pro. Se detallan en la sección *Utilizar las acciones estándar 4D Write Pro* del manual de referencia de 4D Write Pro.

##### 

En *objetivo*, puede pasar el contexto del formulario en el que se debe ejecutar la *accion*. Puede utilizar una de las siguientes constantes del tema *Acción estándar*:

| Constante       | Tipo         | Valor | Comentario                                                                                                                                                                          |
| --------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ak current form | Entero largo | 1     | El formulario actual es el formulario donde se llamó la acción. Podría ser el formulario principal o un formulario tipo paleta delante del formulario principal del proceso actual. |
| ak main form    | Entero largo | 2     | El formulario principal es el documento más adelante o el formulario diálogo del proceso, excluyendo cualquier ventana flotante o emergente.                                        |

**Nota:** si se omite *objetivo*, se utiliza por defecto el contexto ak current form. 

Dependiendo del *objetivo*, la ejecución del comando **INVOKE ACTION** es síncrona o asíncrona:

* Con ak current form como *objetivo*, el comando **INVOKE ACTION** es síncrono; La acción se ejecuta en el ciclo actual en el momento en que se llama al comando.
* Con ak main form como *objetivo*, el comando **INVOKE ACTION** es asíncrono; La acción se ejecuta en el siguiente ciclo después del final de la ejecución del método objeto de formulario.

**Nota:** las acciones de edición estándar (Cortar, Copiar, Pegar, Seleccionar todo, Borrar, Deshacer/Rehacer) ignoran el parámetro *objetivo*, si se pasa. Tales acciones se ejecutan siempre de forma sincrónica en el contexto del objeto editable que tiene el foco.

El comando **INVOKE ACTION** no genera un error, por ejemplo, si la acción solicitada no está disponible en el contexto actual. Debe validar la acción esperada utilizando el comando [Action info](action-info.md). 

#### Ejemplo 1 

Desea ejecutar la acción estándar **Copiar** en el formulario actual:

```4d
 INVOKE ACTION(ak copy;ak current form)
```

#### Ejemplo 2 

Usted desea ejecutar una acción estándar **Goto page** (página 3) en el formulario principal:

```4d
 INVOKE ACTION(ak goto page+"?value=3";ak main form)
```

#### Ver también 

[Action info](action-info.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1439 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


