---
id: standard-actions
title: Acciones estándar
slug: /Desktop/standard-actions
displayed_sidebar: docs
---

## Descripción

### Asignar o ejecutar acciones estándar

Las acciones estándar se pueden utilizar de varias maneras:

- Como acciones para [botones](../FormObjects/button_overview.md) y varios objetos de formulario tales como [casillas de selección](../FormObjects/checkbox_overview.md) o [listas emergentes/desplegables](../FormObjects/dropdownList_Overview.md). Las acciones se pueden asignar a objetos de formulario en la lista de Propiedades del editor de Formularios, o utilizando el comando [OBJECT SET ACTION](../commands/object-set-action).
- Como acciones para comandos de menú. Pueden ser asignados a comandos de menú en el editor de menús (ver [Definir la acción de un menú](../Menus/properties.md)), o utilizando el comando [SET MENU ITEM PROPERTY](../commands/set-menu-item-property).
- Como acciones para elementos de lista (utilizados cuando la lista está asociada a una lista emergente/desplegable o un menú emergente jerárquico). Pueden asignarse a los elementos de la lista en el editor de listas (ver [Crear y modificar listas](https://doc.4d.com/4Dv21/4D/21/Creating-and-modifying-lists.300-7676826.en.html)), o utilizando el comando [SET LIST ITEM PARAMETER](../commands/set-list-item-parameter).
- Como parámetros para los comandos [INVOKE ACTION](../commands/invoke-action) y [Action info](../commands/ction-info).

Los objetos de formulario o comandos de menú se pueden asignar tanto a una acción estándar como a un método. En este caso, la acción estándar se ejecuta siempre después del método (excepto para la acción `deleteRecord`, ver abajo).

### Parámetros

Algunas acciones estándar aceptan un parámetro que definirá su ejecución. La sintaxis a utilizar es similar a la sintaxis URL:

```4d 
standardActionName{?nameParameter=valueParameter}
```
donde:

- `standardActionName` es el nombre de la acción estándar (cadena).
- `nameParameter` (opcional) es el nombre del parámetro a pasar (cadena)
- `valueParameter` (opcional) es el valor a definir (cadena, entero largo...)

Por ejemplo, para definir una acción `gotoPage(5)`, puede escribir:

```4d 
gotoPage?value=5
```
Esta sintaxis está disponible donde quiera que se pueda definir una acción estándar, es decir, en la lista de propiedades, el editor de menús o los comandos del lenguaje. Por ejemplo, en la lista de propiedades:

![](../assets/en/Desktop-legacy/action-menu.png)




## Notas sobre los objetos y acciones

- Las acciones de edición como `cut`, `paste`... se pueden utilizar con:
    * áreas editables estándar,
    * áreas de texto [multi-estilo](../FormObjects/properties_Text.md#multi-style)
    * [áreas 4D Write Pro](../FormObjects/writeProArea_overview.md).
- Las acciones de fuentes, expresiones y corrector ortográfico como `backgroundColor`, `computeExpressions`, `spell/autoCorrectionEnabled`... se pueden utilizar con: 
    * áreas de texto [multi-estilo](../FormObjects/properties_Text.md#multi-style)
    * [áreas 4D Write Pro](../FormObjects/writeProArea_overview.md).
- Las acciones de corrección ortográfica están disponibles solo si la [opción Corrección ortográfica automática](../FormObjects/properties_Entry.md#auto-spellcheck) está seleccionada para el área. 
- Cuando se modifica un atributo de estilo como `fontSize` o `color` mediante una acción estándar, 4D genera el evento de formulario `On After Edit`.
- *Botones* designa todos los botones e incluye también las casillas de selección que pueden representar acciones con estado verdadero/falso, por ejemplo `fontBold`.
- Los objetos [Listas emergentes/desplegables](../FormObjects/dropdownList_Overview.md) y [Lista de selección jerárquica](../FormObjects/dropdownList_Overview.md#using-a-hierarchical-choice-list) solo pueden asociarse directamente con las acciones estándar que generan un submenú (lista), como `backgroundColor` o `fontSize`. En este caso, muestran una lista automática de valores, a menos que se hayan configurado acciones estándar personalizadas en los elementos de lista (ver más abajo).
- *Elementos de lista*: Si no desea utilizar valores automáticos, puede asociar acciones estándar personalizadas con elementos de una lista (mediante el editor de listas o el comando [SET LIST ITEM PARAMETER](../commands/set-list-item-parameter)) y definir la lista como "Lista de opciones" para los objetos Pop-up/Lista desplegable y menú emergente jerárquico. Los valores automáticos se reemplazan por acciones personalizadas en tiempo de ejecución. En este contexto, solo se pueden utilizar acciones estándar con parámetros de valor en relación con una acción principal de submenú (lista). Por ejemplo, puede definir una lista de elementos asociados con valores de acción backgroundColor (`backgroundColor?value="red"`, `backgroundColor?value="blue"`...) y definirla como lista de opciones para un menú emergente jerárquico.


## Acciones disponibles

### Acciones 4D Write Pro

Consulte la página [Acciones estándar 4D Write Pro](../WritePro/user-legacy/standard-actions.md) para obtener la descripción de las acciones dedicadas adicionales, disponibles para **áreas 4D Write Pro únicamente**. 


### "" (cadena vacía)

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak none` | N/A | Botones, comandos de menú |

No realiza una acción estándar. Utilice este valor cuando necesite escribir un método para manejar el control. Por ejemplo, un botón que muestre una caja de diálogo de búsqueda personalizada en una aplicación personalizada no tendría una acción estándar porque es necesario definir un método para abrir la caja de diálogo de búsqueda personalizada.

### accept

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak accept` | Ninguna (puede ser gestionada por el comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botones, comandos de menú |

Guarda un registro nuevo o modificado, entonces dispara `On Saving New Record Event` u `On Saving Existing Record Event`. También acepta un formulario mostrado con el comando [DIALOG](../commands/dialog). En todos los casos, dispara el evento de formulario `On Validate`.

:::note

Cuando se utiliza el comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), un elemento asociado a esta acción no se ocultará automáticamente dependiendo del contexto.

:::

### addSubrecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak add subrecord` | • *List box:* hay al menos un list box de tipo "selección" en el formulario y tiene el foco<br>• *Subformulario:* tiene el foco<br>• *Formulario lista:* ninguna | Botones, comandos de menú |

• *List box:* aparece un nuevo registro en blanco en el formulario de detalle definido para el list box. El usuario puede ingresar valores, luego validar el registro y automáticamente aparece un nuevo registro en blanco. Esto continúa hasta que el usuario hace clic en un botón de cancelar.<br>• *Subformulario:* 4D crea un nuevo registro en la tabla o tabla relacionada, ya sea directamente en la lista o en el formulario de detalle asociado (dependiendo de las propiedades del subformulario).<br>• *Formulario lista:* se crea un nuevo registro en blanco. Con listas mostradas usando los comandos [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection), el registro se agrega en la lista o en la página de detalle dependiendo del valor del parámetro `enterList`. En la ventana de visualización de registros, el registro se agrega a la lista.

### automaticSplitter

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak automatic splitter` | Ninguna (puede ser gestionada por el comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botones invisibles |

Esta acción estándar permite crear separadores personalizados en sus formularios. Solo puede asignarse a un botón invisible (ver [Botones](../FormObjects/button_overview.md)). Cuando se le asigna esta acción a un botón invisible, este se comporta como un separador. Pegando una imagen en el botón invisible, puede crear todo tipo de interfaz personalizada para sus separadores. Para mayor información sobre separadores, consulte [Separadores](../FormObjects/splitters.md).

### backgroundColor

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak background color` | Ninguna | Comandos de menú, listas emergentes/desplegables, menús emergentes jerárquicos |

Muestra el submenú de color de fondo estándar.

### backgroundColor/showDialog

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak background color dialog` | Ninguna | Botones, comandos de menú |

Abre el diálogo de color de fondo de fuente.

### backgroundColor?value=\<color\>

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak background color` | Ninguna | Botones, comandos de menú, elementos de lista |

Define el color de fondo como `<color>`. Pasa un nombre o valor de color CSS. Ej: `backgroundColor?value=#FF0000`, `backgroundColor?value=red`, `backgroundColor?value=transparent`

### cancel

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak cancel` | Ninguna (puede ser gestionada por el comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botones, comandos de menú |

Sale del registro actual sin guardar cambios. También puede cerrar un formulario mostrado con el comando [DIALOG](../commands/dialog), o salir de un formulario mostrando una selección de registros utilizando [DISPLAY SELECTION](../commands/display-selection) o [MODIFY SELECTION](../commands/modify-selection).

:::note

Cuando se utiliza el comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), un elemento asociado a esta acción no se ocultará automáticamente dependiendo del contexto.

:::


### clear

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak clear` | El área editable tiene el foco. El objeto con el foco tiene un área editable | Botones, comandos de menú |

Elimina la selección. Si no se selecciona nada, borra todo el área que contiene el cursor (solo áreas editables).

### color

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font color` | Ninguna | Comandos de menú, listas emergentes/desplegables, menús emergentes jerárquicos |

Muestra el submenú de color de fuente estándar.

### color/showDialog

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font color dialog` | Ninguna | Botones, comandos de menú |

Muestra el diálogo de color de fuente del sistema.

### color?value=\<color\>

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font color` | Ninguna | Botones, comandos de menú, elementos de lista |

Define el color de fuente como `<color>`. Pasa un nombre o valor de color CSS. Ej.: `color?value=#FF0000`, `color?value=red`

### computeExpressions

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak compute expressions` | Ninguna | Botones, comandos de menú |

Actualiza todas las expresiones dinámicas en el área.

### copy

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak copy` | El área editable tiene el foco. Contenido seleccionado | Botones, comandos de menú |

Coloca una copia de la selección en el Portapapeles.

### cut

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak cut` | El área editable tiene el foco. Contenido seleccionado | Botones, comandos de menú |

Elimina la selección y la coloca en el Portapapeles.

### databaseSettings

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak database settings` | Ninguna (puede ser gestionada por el comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botones, comandos de menú |

Muestra la caja de diálogo estándar de Configuración de la base de datos.

:::note

En macOS, el comando de menú asociado con la acción `databaseSettings` se coloca automáticamente en el menú del sistema de la aplicación, cuando la base de datos se ejecuta en este entorno.

:::

:::note

Cuando se utiliza el comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), un elemento asociado a esta acción no se ocultará automáticamente dependiendo del contexto.

:::


### deleteRecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak delete record` | Se selecciona un registro y no se añade un registro nuevo | Botones, comandos de menú |

Muestra una alerta pidiéndole al usuario confirmar la eliminación. Al hacer clic en Sí en la alerta se elimina el registro actual. Después de que el usuario haga clic en Eliminar Registro, 4D automáticamente vuelve a la vista de salida. Caso particular: si también se asigna un método al botón/menú, primero se llama a la acción estándar y el método se ejecuta solo si el usuario hizo clic en Sí en el cuadro de diálogo de alerta.

### deleteSubrecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak delete subrecord` | • *List box:* al menos una fila de un list box de tipo "selección" está seleccionada<br>• *Subformulario:* tiene el foco y hay un registro seleccionado.<br>• *Formulario lista:* hay un registro seleccionado en la lista. | Botones, comandos de menú |

• *List box:* aparece un cuadro de diálogo de confirmación para que el usuario pueda confirmar o cancelar la eliminación.<br>• *Subformulario:* aparece un cuadro de diálogo para confirmar o cancelar la eliminación del/los subregistro(s) seleccionado(s).<br>• *Formulario lista:* aparece un cuadro de diálogo para confirmar o cancelar la eliminación del/los registro(s) seleccionado(s).

### designMode

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak return to design mode` | Modo de la aplicación (puede gestionarse con el comando [OBJECT SET ENABLED](../commands/object-set-enabled))| Botones, comandos de menú |

Trae las ventanas y las barras de menú del entorno Diseño 4D al primer plano. Cuando la base de datos se ejecuta en modo interpretado, muestra la ventana actual del entorno Diseño. Cuando la base de datos se ejecuta en modo compilado, muestra la ventana de registros de la tabla actual (en modo compilado, solo es posible el acceso a registros).

:::note

Cuando se utiliza el comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), un elemento asociado a esta acción no se ocultará automáticamente dependiendo del contexto.

:::

### displaySubrecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak display subrecord` | • *List box:* al menos una fila de un list box de tipo "selección" está seleccionada<br>• *Subformulario:* tiene el foco y hay un registro seleccionado.<br>• *Formulario lista:* hay un registro seleccionado en la lista. | Botones, comandos de menú |

• *List box:* el registro correspondiente a la fila del list box aparece en el formulario de detalle definido para el list box, en modo de solo lectura. El usuario solo puede cancelar el formulario para regresar al list box.<br>• *Subformulario:* el subregistro seleccionado se muestra en el formulario de detalle asociado en modo de solo lectura (si está definido en las propiedades del subformulario).<br>• *Formulario lista:* con listas mostradas mediante los comandos [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection), el registro seleccionado se muestra en modo de solo lectura en la página de detalle dependiendo del valor del parámetro `enterList`. En la ventana de visualización de registros, el registro seleccionado se muestra en modo de solo lectura en la página de detalle.

### editSubrecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak edit subrecord` | • *List box:* al menos una fila de un list box de tipo "selección" está seleccionada<br>• *Subformulario:* tiene el foco y hay un registro seleccionado.<br>• *Formulario lista:* hay un registro seleccionado en la lista. | Botones, comandos de menú |

• *List box:* el registro correspondiente a la fila del list box aparece en el formulario de detalle definido para el list box. El usuario puede modificar los valores, luego validar o cancelar el formulario para regresar al list box.<br>• *Subformulario:* el subregistro seleccionado pasa al modo de edición, ya sea directamente en la lista o en el formulario de detalle asociado (dependiendo de las propiedades del subformulario).<br>• *Formulario lista:* el registro seleccionado pasa al modo de edición. Con listas mostradas mediante los comandos [MODIFY SELECTION](../commands/modify-selection) / [DISPLAY SELECTION](../commands/display-selection), la modificación se realiza en la lista o en la página de detalle dependiendo del valor del parámetro `enterList`. En la ventana de visualización de registros, la modificación se realiza en la página de detalle (la acción es equivalente a un doble clic).

### firstPage

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak next page` | Formulario multipáginas y no está en la primera página | Botones, comandos de menú |

Muestra la primera página.

### firstRecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak first record` | Se selecciona un registro y no es el primero de la selección | Botones, comandos de menú |

Acepta el registro actual y luego vuelve el primer registro el registro actual.

### font/showDialog

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font show dialog` | Ninguna | Botones, comandos de menú |

Muestra el diálogo de selección de fuente del sistema.

### fontBold

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font bold` | Ninguna | Botones, comandos de menú |

Activa/desactiva el atributo de fuente negrita.

### fontItalic

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font italic` | Ninguna | Botones, comandos de menú |

Activa/desactiva el atributo de fuente itálica.

### fontLineThrough

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font linethrough` | Ninguna | Botones, comandos de menú |

Activa/desactiva el atributo de fuente tachado.

### fontSize

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font size` | Ninguna | Comandos de menú, listas emergentes/desplegables, menús emergentes jerárquicos |

Muestra el submenú de tamaño de fuente estándar.

### fontSize?value=\<size\>

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font size` | Ninguna | Botones, comandos de menú, elementos de lista |

Define el tamaño de fuente en `<size>`. Pasa un valor de longitud CSS en pt. Ej: `fontSize?value=12pt`

### fontStyle

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font style` | Ninguna | Comandos de menú, listas emergentes/desplegables, menús emergentes jerárquicos |

Muestra el submenú de estilo de fuente estándar.

### fontUnderline

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak font underline` | Ninguna | Botones, comandos de menú |

Activa/desactiva el atributo de fuente subrayado.

### freezeExpressions

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak freeze expressions` | Ninguna | Botones, comandos de menú |

Congela todas las expresiones dinámicas en el área.

### gotoPage

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak goto page` | Formulario multipáginas | Controles de pestañas, List Boxes, Rejilla de botones y menús desplegables |

Muestra la página del formulario (si existe) correspondiente al número del elemento seleccionado (control de pestañas, fila de list box, botón en la cuadrícula, elemento de menú emergente). Ver también [Acción Ir a la página](../FormObjects/tabControl.md#goto-page-action).

### gotoPage?value=\<page\>

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak goto page` | Formulario multipáginas | Botones, comandos de menú |

Muestra la página del formulario que corresponde al número `<page>`.

### lastPage

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak last page` | Formulario multipáginas y no está en la última página | Botones, comandos de menú |

Muestra la última página.

### lastRecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak last record` | Se selecciona un registro y no es el último de la selección | Botones, comandos de menú |

Acepta el registro actual y luego vuelve el último registro el registro actual.

### msc

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak msc` | Ninguna (puede ser gestionada por el comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botones, comandos de menú |

Muestra la ventana del [Centro de seguridad y mantenimiento](../MSC/overview.md).

:::note

Cuando se utiliza el comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), un elemento asociado a esta acción no se ocultará automáticamente dependiendo del contexto.

:::

### nextPage

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak next page` | Formulario multipáginas y no está en la última página | Botones, comandos de menú |

Muestra la siguiente página.

### nextRecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak next record` | Se selecciona un registro y no es el último de la selección | Botones, comandos de menú |

Acepta el registro actual y luego hace el siguiente registro el registro actual.

### openBackURL

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak open back url` | [Solo áreas web](../FormObjects/webArea_overview.md). Se ha cargado una URL anterior | Botones, comandos de menú |

Abre la URL anterior en la secuencia de navegación realizada por el usuario en el área web. Desactivado si no hay URL anterior; en otras palabras, si el usuario solo ha mostrado una sola página en el área Web.

### openForwardURL

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak open forward url` | [Solo áreas web](../FormObjects/webArea_overview.md). `openBackURL` ejecutado anteriormente | Botones, comandos de menú |

Abre la siguiente URL en la secuencia de navegación realizada por el usuario en el área Web. Desactivado si no hay una URL siguiente; en otras palabras, si el usuario nunca ha retrocedido una página en la secuencia.

### paste

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak paste` | El área editable tiene el foco. El portapapeles no está vacío | Botones, comandos de menú |

Inserta el contenido del Portapapeles en la ubicación del punto de inserción.

### previousPage

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak previous page` | Formulario multipáginas y no está en la primera página | Botones, comandos de menú |

Muestra la página anterior.

### previousRecord

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak previous record` | Se selecciona un registro y no es el primero de la selección | Botones, comandos de menú |

Acepta el registro actual y luego hace el registro anterior el registro actual.

### quit

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak quit` | Ninguna (puede ser gestionada por el comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botones, comandos de menú |

Muestra un diálogo de confirmación "¿Está seguro?", luego, sale de la aplicación 4D si se produce la validación. De lo contrario, se cancelará la operación. Cuando esta acción se asigna a un botón con el que también está asociado un método de objeto, se ejecuta la siguiente secuencia: primero, aparece el diálogo de confirmación. Si se valida, 4D ejecuta el método de objeto. Después de su ejecución, la aplicación se cierra.

:::note

En macOS, el comando de menú asociado con la acción `quit` se coloca automáticamente en el menú del sistema de la aplicación, cuando la base de datos se ejecuta en este entorno. Este mecanismo simplifica la gestión del comando Salir en macOS.

:::

:::note

Cuando se utiliza el comando [Dynamic pop up menu](../commands/dynamic-pop-up-menu), un elemento asociado a esta acción no se ocultará automáticamente dependiendo del contexto.

:::

### redo

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak redo` | El área editable tiene el foco. Se ha realizado una acción de deshacer | Botones, comandos de menú |

Repite la última acción cancelada (= Rehacer comando del menú Edición).

### refreshCurrentURL

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak refresh current url` | [Solo áreas web](../FormObjects/webArea_overview.md). `openBackURL` ejecutado anteriormente (puede gestionarse por el comando [OBJECT SET ENABLED](../commands/object-set-enabled)) | Botones, comandos de menú |

Recarga el contenido actual del área Web.

### selectAll

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak select all` | El área editable tiene el foco. El objeto con el foco tiene un área editable | Botones, comandos de menú |

Selecciona todos los elementos seleccionables en el contexto.

### showClipboard

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak show clipboard` | Siempre disponible | Botones, comandos de menú |

Abre una nueva ventana que muestra el contenido actual del Portapapeles.

### spell

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Ninguna | Comandos de menú |

Muestra el menú de corrección ortográfica completo.

### spell/autoCorrectionEnabled

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menús |

Activa/desactiva el modo de corrección automática.

### spell/autoDashSubstitutionsEnabled

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menús |

Activa/desactiva el reemplazo de guiones dobles (`--`) por (`—`) durante la entrada (macOS únicamente).

### spell/autoLanguageEnabled

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menú |

Identifica el idioma del diccionario que se utilizará en función del contenido del texto (macOS únicamente).

### spell/autoQuoteSubstitutionsEnabled

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menú |

Reemplaza las comillas rectas y las remplaza por comillas tipográficas (macOS únicamente).

### spell/autoSubstitutionsEnabled

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menús |

Activa/desactiva la sustitución de texto.

### spell/enabled

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Ninguno | Botones, comandos de menús |

Activa/desactiva la corrección ortográfica en el área (la opción Corrección ortográfica debe estar seleccionada para el área).

### spell/forgetIgnore

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menú |

Borra la lista de palabras ignoradas.

### spell/grammarEnabled

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menús |

Activa/desactiva la corrección gramatical del texto (macOS únicamente).

### spell/ignore

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada/Se selecciona una palabra desconocida o tiene el cursor | Botones, comandos de menú |

La palabra desconocida se deja intacta y no se subraya más.

### spell/learn

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada/Se selecciona una palabra desconocida o tiene el cursor | Botones, comandos de menú |

Se agrega una palabra desconocida al diccionario.

### spell/removeSubstitution

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada/Se selecciona una palabra desconocida o tiene el cursor | Botones, comandos de menú |

Elimina la sustitución seleccionada.

### spell/showDialog

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menú |

Muestra un diálogo de corrección ortográfica.

### spell/suggestion?index=\<1-number\<=10\>

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada/palabra incorrecta seleccionada | Botones, comandos de menú |

número es la nésima sugerencia para la primera palabra mal escrita en la selección. Ejemplo: `spell/suggestion?index=1` reemplazará la palabra incorrecta actual en la vista enfocada actual con la primera sugerencia.

### spell/unLearn

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada/Una palabra aprendida está seleccionada o tiene el cursor | Botones, comandos de menú |

Elimina la palabra aprendida seleccionada de la lista de palabras aprendidas.

### spell/visibleSubstitutions

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| - | Corrección ortográfica activada | Botones, comandos de menús |

Activa/desactiva el subrayado en azul de las posibles sustituciones en el texto.

### stopLoadingURL

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak stop loading url` | [Solo áreas web](../FormObjects/webArea_overview.md). URL being loaded | Botones, comandos de menú |

Detiene la carga de la página y/u de los objetos de la URL actual en el área Web.

### undo

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak undo` | El área editable tiene el foco. Se ha realizado una acción de edición | Botones, comandos de menú |

Cancela la última acción realizada (=Deshacer del menú Edición). Deshacer no debe confundirse con Cancelar (= cancela las modificaciones realizadas a un registro durante su visualización y devuelve el formulario de Salida).

### visibleReferences

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
| `ak show reference` | Ninguna | Botones, comandos de menú |

Muestra todas las expresiones dinámicas como referencias.

### writingTools 

| Constante (si la hay) | Condiciones de activación | Disponible con |
|---|---|---|
|-| *solo macOS* | Botones, comandos de menú |

Para [documentos 4D Write Pro](../category/4d-write-pro) y [objetos de formulario de entrada](../FormObjects/input_overview.md). Muestra las [Herramientas de escritura](../FormObjects/properties_Entry.md#writing-tools) para el área, utilizando el contenedor donde se encuentra el cursor y la selección actual como contexto. El texto seleccionado (o todo el contenedor si no hay selección) se reemplaza por la modificación devuelta. La acción se desactiva si el área no es editable o no está habilitada, en Windows, o cuando Apple Intelligence está desactivado. 


## Ver también

- [Acciones estándar 4D Write Pro](../WritePro/user-legacy/standard-actions.md)
- [Descargar la base HDI](http://download.4d.com//Demos/4D_v16_R3/HDI_NewStandardActions.zip)