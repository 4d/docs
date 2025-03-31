---
id: action-info
title: Action info
slug: /commands/action-info
displayed_sidebar: docs
---

<!--REF #_command_.Action info.Syntax-->**Action info** ( *action* {; *objetivo*} ) : Object<!-- END REF-->
<!--REF #_command_.Action info.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| action | Text | &#8594;  | Nombre o patrón de acción estándar incluyendo el parámetro si es necesario |
| objetivo | Integer | &#8594;  | Define el objetivo de la acción para obtener información: forma principal o forma actual |
| Resultado | Object | &#8592; | Objeto que contiene el estado de la acción como propiedades booleanas: isEnabled, isVisible, isChecked, isMixed, isUnknownState |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Action info.Summary-->El comando **Action info** devuelve diferente información, incluida la disponibilidad y el estado, sobre la *accion* definida en el *objetivo*, de acuerdo con el contexto de la aplicación actual.<!-- END REF-->

En *accion*, pase el nombre de la acción estándar a verificar. Puede ser una cadena o una constante del tema *Acción estándar*. Puede ser una cadena o una constante del tema *Acción estándar*. Algunas acciones aceptan un elemento objetivo y parámetros. En este caso, debe utilizar el patrón solicitado, por ejemplo *"gotoPage?value=2"* or *paragraph/backgroundPositionV?value=top.* 

La lista detallada de acciones se ofrece en la sección *Acciones estándar* del manual de *Diseño 4D*. 

**Nota:** También se ofrecen acciones específicas adicionales para los documentos 4D Write Pro. Se detallan en la sección *Utilizar las acciones estándar 4D Write Pro* del manual de referencia de 4D Write Pro.

Puede pasar en *objetivo* el contexto del formulario en el que se debe ejecutar la *accion*, si está disponible. Puede utilizar una de las siguientes constantes del tema *Acción estándar*:

| Constante       | Tipo         | Valor | Comentario                                                                                                                                                                          |
| --------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ak current form | Entero largo | 1     | El formulario actual es el formulario donde se llamó la acción. Podría ser el formulario principal o un formulario tipo paleta delante del formulario principal del proceso actual. |
| ak main form    | Entero largo | 2     | El formulario principal es el documento más adelante o el formulario diálogo del proceso, excluyendo cualquier ventana flotante o emergente.                                        |

**Nota:** si se omite el *objetivo*, se utiliza por defecto el contexto ak current form.

El comando **Action info** devuelve información en forma de un objeto que contiene las siguientes propiedades:

| **Propiedad** | **Tipo** | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| activado      | Booleano | true si se puede invocar la acción, false en caso contrario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| estado        | Cadena   | El valor puede ser una de las siguientes cadenas:<table><tbody><tr><td>"seleccionada"</td><td>la acción está seleccionada, lo que significa que la propiedad está definida. Ejemplo: el texto seleccionado está en negrita, la propiedad "estado" de la acción estándar ak font bold contiene "seleccionado"</td></tr><tr><td>"no seleccionado"</td><td> la acción estándar no está seleccionada, lo que significa que la propiedad no está definida. Ejemplo: el texto seleccionado no está en negrita, la propiedad "estado" de la acción estándar ak font bold contiene "no seleccionado". </td></tr><tr><td>"combinada"</td><td>la acción es combinada, lo que significa que la propiedad está parcialmente definida. Ejemplo: arte del texto seleccionado está en "negrita", la propiedad "estado" de la acción estándar ak font bold contiene "combinada".</td></tr></tbody></table> |
| título        | Text     | Nombre actual localizado de la etiqueta de acción. Ejemplo: "Deshacer, "Pegar", etc. para la versión en inglés.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| visible       | Booleano | true si la acción es visible en el formulario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| valor         | Cadena   | Valor actual de la cadena de parámetros de acción (si existe). Por ejemplo, si la acción estándar es "fontSize?value=10pt", la propiedad *valor* contiene "10pt"                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

Si no se puede determinar el estado de la acción (por ejemplo, si no se afecta a ningún objeto o comando de menú), el comando devuelve un objeto nulo (indefinido).

#### Ejemplo 

Desea saber si la acción copiar está disponible (es decir, si se han seleccionado algunos datos):

```4d
 var $actionInfo : Object
 var $isEnabled : Boolean
 $actionInfo:=Action info(ak copy)
 If(Not(Undefined($actionInfo.enabled))) //la acción es definida en el proceso
    If(OB Get($actionInfo;"enabled"))
       ... //la acción copiar está disponible
    End if
 End if
```

#### Ver también 

[INVOKE ACTION](invoke-action.md)  
[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1442 |
| Hilo seguro | &cross; |


