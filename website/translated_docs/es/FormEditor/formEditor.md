---
id: formEditor
title: Editor de formularios
---

4D provides a full-featured Form editor that allows you to modify your form until you achieve the effect that you want. With the Form editor, you can create and delete form objects, manipulate them directly, and set form and object properties.


## Interface

The Form editor interface displays each JSON form in its own window, which has both an object and tool bar. You can have several forms open at the same time.

### Display options

You can show or hide several interface elements on the current page of the form:

- **Inherited Form**: Inherited form objects (if there is an [inherited form](forms.md#inherited-forms)).
- **Page 0**: Objects from [page 0](forms.md#form-pages). This option allows you to distinguish between the objects on the form’s current page and those on page 0.
- **Paper**: Borders of the printing page, which are shown as gray lines. This element can only be displayed by default in ["for printing" type](properties_FormProperties.md#form-type) forms.
- **Rulers**: Rulers of the Form editor’s window.
- **Markers**: Output control lines and associated markers that show the limits of the form’s different areas. This element can only be displayed by default in [list forms](properties_FormProperties.md#form-type).
- **Marker Labels**: Marker labels, available only when the output control lines are displayed. This element can only be displayed by default in [list forms](properties_FormProperties.md#form-type).
- **Limits**: Form’s limits. When this option is selected, the form is displayed in the Form editor as it appears in Application mode. This way you can adjust your form without having to switch to the Application mode in order to see the result.
> The [**Size Based on**](properties_FormSize.md#size-based-on), [**Hor. margin**](properties_FormSize.md#hor-margin) and [**Vert. margin**](properties_FormSize.md#vert-margin) settings of the form properties affect the form’s limits. When using these settings, the limits are based on the objects in the form. When you modify the size of an object that is located next to the form’s border, it is modified to reflect that change.

#### Default display

When a form is opened in the editor, interface elements are displayed or hidden by default, depending on:

- the **New form default display** options set in the Preferences - unchecked options cannot be displayed by default.
- the current [form type](properties_FormProperties.md#form-type):
    - Markers and marker labels are always displayed by default on list forms
    - Paper is displayed by default on "for printing" forms.

#### Display/Hide elements

You can display or hide elements at any moment in the Form editor’s current window by selecting **Display** from the **Form** menu or the Form editor's context menu:

![](assets/en/FormEditor/showHideElements.png)


### Rulers

The rulers on the side and bottom help you position objects in the form. They can be [displayed or hidden](#display-options).

Select **Ruler definition...** from the **Form** menu to change measurement units so that the form displays inches, centimeters, or pixels.

### Toolbar

The toolbar of the Form editor offers a set of tools to manipulate and modify the form. Each window has its own toolbar.

![](assets/en/FormEditor/toolbar.png)

The toolbar contains the following elements:

| Icon                                          | Name                                                        | Descripción                                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/execute.png)         | Ejecutar el formulario                                      | Se utiliza para probar la ejecución del formulario. Al presionar este botón, 4D abre una nueva ventana y muestra el formulario en su contexto (lista de registros para un formulario lista y página de registro actual para un formulario detallado). El formulario se ejecuta en el proceso principal.                                                                   |
| ![](assets/en/FormEditor/selection.png)       | [Herramienta de selección](#selecting-objects)              | Permite seleccionar, mover y redimensionar los objetos del formulario.<p>**Nota**: cuando se selecciona un objeto de tipo Texto o Área de Grupo, al presionar la tecla **Intro** se pasa al modo de edición.                                                                                                                                        |
| ![](assets/en/FormEditor/zOrder.png)          | [Orden de entrada](#data-entry-order)                       | Pasa al modo "Orden de entrada", donde es posible ver y cambiar el orden de entrada actual del formulario. Tenga en cuenta que los escudos permiten ver el orden de entrada actual, sin dejar de trabajar en el formulario.                                                                                                                                               |
| ![](assets/en/FormEditor/moving.png)          | [Desplazamiento](#moving-objects)                           | Pasa al modo " Desplazamiento ", en el que es posible llegar rápidamente a cualquier parte del formulario utilizando la función de arrastrar y soltar en la ventana. El cursor toma la forma de una mano. Este modo de navegación es especialmente útil cuando se hace zoom en el formulario.                                                                             |
| ![](assets/en/FormEditor/zoom.png)            | [Zoom](#zoom)                                               | Permite modificar la escala de visualización del formulario (100% por defecto). Puede pasar al modo "Zoom" haciendo clic en la lupa o pulsando directamente en la barra correspondiente a la escala deseada. Esta función se detalla en la sección anterior.                                                                                                              |
| ![](assets/en/FormEditor/alignment.png)       | [Alignement](#aligning-objects)                             | Este botón está asociado a un menú que permite alinear los objetos en el formulario. Se activa (o no) en función de los objetos seleccionados.<p>Disponible sólo con CSS Preview None                                                                                                                                                               |
| ![](assets/en/FormEditor/distribution.png)    | [Distribución](#distributing-objects)                       | Este botón está asociado a un menú que permite repartir los objetos en el formulario. Se activa (o no) en función de los objetos seleccionados.<p>Disponible sólo con CSS Preview None                                                                                                                                                              |
| ![](assets/en/FormEditor/level.png)           | [Nivel](#layering-objects)                                  | Este botón está asociado a un menú que permite cambiar el nivel de los objetos en el formulario. Se activa (o no) en función de los objetos seleccionados.                                                                                                                                                                                                                |
| ![](assets/en/FormEditor/group.png)           | [Agrupar/desagrupar](#grouping-objects)                     | Este botón está asociado a un menú que permite agrupar y desagrupar la selección de objetos del formulario. Se activa (o no) en función de los objetos seleccionados.                                                                                                                                                                                                     |
| ![](assets/en/FormEditor/displyAndPage.png)   | [Visualización y gestión de páginas](forms.html#form-pages) | Esta área permite pasar de una página de formulario a otra y añadir páginas. Para navegar entre las páginas del formulario, haga clic en los botones de flecha o en el área central y elija la página que desea visualizar en el menú que aparece. Si pulsa el botón flecha derecha mientras se muestra la última página del formulario, 4D le permite añadir una página. |
| ![](assets/en/FormEditor/cssPreviewicon.png)  | [CSS Preview](#css-preview)                                 | Este botón se utiliza para seleccionar el modo CSS a utilizar.                                                                                                                                                                                                                                                                                                            |
| ![](assets/en/FormEditor/views.png)           | [Gestión de vistas](#views)                                 | Este botón muestra u oculta la paleta de vistas. Esta función se detalla en la sección Utilizar las vistas de objeto.                                                                                                                                                                                                                                                     |
| ![](assets/en/FormEditor/shields2.png)        | [Visualización de escudos](#shields)                        | Cada clic en este botón provoca la visualización sucesiva de todos los tipos de escudos de formulario. El botón también está vinculado a un menú que permite seleccionar directamente el tipo de escudo a mostrar.                                                                                                                                                        |
| ![](assets/en/FormEditor/library.png)         | [Librería de objetos preconfigurada](objectLibrary.html)    | Este botón muestra la librería de objetos preconfigurada que ofrece numerosos objetos con ciertas propiedades que han sido predefinidas.                                                                                                                                                                                                                                  |
| ![](assets/en/FormEditor/listBoxBuilder1.png) | [Creación de list box](#list-box-builder)                   | Este botón crea nuevos list box de tipo selección de entidades.                                                                                                                                                                                                                                                                                                           |

### Object bar

The object bar contains all the active and inactive objects that can be used in 4D forms. Some objects are grouped together by themes. Each theme includes several alternatives that you can choose between. When the object bar has the focus, you can select the buttons using the keys of the keyboard. The following table describes the object groups available and their associated shortcut key.

| Botón                                   | Group                                                                                                                                                                                                                                                     | Key |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |:---:|
| ![](assets/en/FormEditor/text.png)      | [Text](FormObjects/text.md) / [Group Box](FormObjects/groupBox.md)                                                                                                                                                                                        |  T  |
| ![](assets/en/FormEditor/input.png)     | [Entrada](FormObjects/input_overview.md)                                                                                                                                                                                                                  |  F  |
| ![](assets/en/FormEditor/listbox.png)   | [Hierarchical List](FormObjects/list_overview.md) / [List Box](FormObjects/listbox_overview.md)                                                                                                                                                           |  L  |
| ![](assets/en/FormEditor/combo.png)     | [Combo Box](FormObjects/comboBox_overview.md) / [Drop-down List](FormObjects/dropdownList_Overview.md) / [Picture Pop-up Menu](FormObjects/picturePopupMenu_overview.md)                                                                                  |  P  |
| ![](assets/en/FormEditor/button.png)    | [Button](FormObjects/button_overview.md) / [Picture Button](FormObjects/pictureButton_overview.md) / [Button Grid](FormObjects/buttonGrid_overview.md)                                                                                                    |  B  |
| ![](assets/en/FormEditor/radio.png)     | [Botón radio](FormObjects/radio_overview.md)                                                                                                                                                                                                              |  R  |
| ![](assets/en/FormEditor/checkbox.png)  | [Check Box](FormObjects/checkbox_overview.md)                                                                                                                                                                                                             |  C  |
| ![](assets/en/FormEditor/indicator.png) | [Progress Indicator](FormObjects/progressIndicator.md) / [Ruler](FormObjects/ruler.md) / [Stepper](FormObjects/stepper.md) / [Spinner](FormObjects/spinner.md)                                                                                            |  I  |
| ![](assets/en/FormEditor/rectangle.png) | [Rectangle](FormObjects/shapes_overview.md#rectangle) / [Line](FormObjects/shapes_overview.md#line) / [Oval](FormObjects/shapes_overview.md#oval)                                                                                                         |  S  |
| ![](assets/en/FormEditor/splitter.png)  | [Splitter](FormObjects/splitters.md) / [Tab Control](FormObjects/tabControl.md)                                                                                                                                                                           |  D  |
| ![](assets/en/FormEditor/plugin.png)    | [Plug-in Area](FormObjects/pluginArea_overview.md) / [Subform](FormObjects/subform_overview.md) / [Web Area](FormObjects/webArea_overview.md) / [4D Write Pro](FormObjects/writeProArea_overview.md) / [4D View Pro](FormObjects/viewProArea_overview.md) |  X  |

To draw an object type, select the corresponding button and then trace the object in the form. After creating an object, you can modify its type using the Property List. Hold down the **Shift** key as you draw to constrain the object to a regular shape. Lines are constrained to horizontal, 45°, or vertical, rectangles are constrained to squares, and ovals are constrained to circles.

The current variant of the theme is the object that will be inserted in the form. When you click the right side of a button, you access the variant menu:

![](assets/en/FormEditor/objectBar.png)

You can click twice on the button so that it remains selected even after you have traced an object in the form (continual selection). This function makes creating several successive objects of the same type easier. To cancel a continual selection, click on another object or tool.

### Property List

Both forms and form objects have properties that control access to the form, the appearance of the form, and the behavior of the form when it is used. Form properties include, for example, the form’s name, its menu bar, and its size. Object Properties include, for example, an object’s name, its dimensions, its background color, and its font.

You can display and modify form and object properties using the Property List. It displays either form or objects properties depending on what you select in the editor window.

To display/hide the Property List, choose **Property List** from the **Form** menu or from the context menu of the Form editor. You can also display it by double-clicking in an empty area of the form.

#### Navigation shortcuts

You can navigate in the Property List using the following shortcuts:

*   **Arrow key**s ↑ ↓: Used to go from one cell to another.
*   **Arrow keys** ← →: Used to expand/collapse themes or enter edit mode.
*   **PgUp** and **PgDn**: Used to scroll the Property List contents.
*   **Home** and **End**: Used to scroll the Property List so that the first or last cell is displayed.
*   **Ctrl+clic** (Windows) o **Comando+clic** (Mac OS) en un evento: selecciona/deselecciona todos los eventos de la lista, en función del estado inicial del evento sobre el que se ha hecho clic.
*   **Ctrl+clic** (Windows) o **Comando+clic** (Mac OS) en la etiqueta de tema: contrae/despliega todos los temas de la lista.



## Manipulating Form Objects

### Añadir objetos

Puede añadir objetos en los formularios de varias maneras:

*   Dibujando el objeto directamente en el formulario después de seleccionar su tipo en la barra de objetos (ver [Utilizando la barra de objetos](#using-the-object-bar))
*   Arrastrando y soltando el objeto desde la barra de objetos
*   Mediante operaciones de arrastrar y soltar o copiar y pegar sobre un objeto seleccionado de la [librería de objetos](objectLibrary.md) preconfigurada,
*   Arrastrando y soltando un objeto desde otro formulario,
*   Arrastrando y soltando un objeto desde el Explorador (campos) o desde otros editores del modo Diseño (listas, imágenes, etc.)

Una vez insertado el objeto en el formulario, puede modificar sus características utilizando el editor de formularios.

Puede trabajar con dos tipos de objetos en sus formularios:

*   **Objetos estáticos** (líneas, marcos, imágenes de fondo, etc.): estos objetos se utilizan generalmente para definir la apariencia del formulario y sus etiquetas, así como para la interfaz gráfica. Están disponibles en la barra de objetos del editor de formularios. También puede definir sus atributos gráficos (tamaño, color, fuente, etc.) y sus propiedades de redimensionamiento utilizando la lista de propiedades. Static objects do not have associated variables like active objects. However, you can insert dynamic objects into static objects.

*   **Objetos activos**: estos objetos realizan tareas o funciones en la interfaz y pueden adoptar muchas formas: campos, botones, listas desplazables, etc. Cada objeto activo está asociado a un campo o a una variable.

### Seleccionar los objetos

Antes de poder realizar cualquier operación en un objeto (como cambiar el ancho de la línea o la fuente), debe seleccionar el objeto que desea modificar.

Para seleccionar un objeto utilizando la barra de herramientas:

1.  Haga clic en la herramienta Flecha de la barra de herramientas.<p>![](assets/en/FormEditor/selection.png)<p> Cuando se mueve el puntero en el área del formulario, se convierte en un puntero estándar con forma de flecha.
2.  Haga clic en el objeto que desea seleccionar. Las manillas de redimensionamiento identifican el objeto seleccionado.<p>![](assets/en/FormEditor/selectResize.png)

Para seleccionar un objeto utilizando la Lista de propiedades:

1.  Seleccione el nombre del objeto en la lista desplegable de objetos situada en la parte superior de la lista de propiedades.<p>Con estos dos métodos, puede seleccionar un objeto que esté oculto por otros objetos o que se encuentre fuera del área visible de la ventana actual. Para deseleccionar un objeto, haga clic fuera del límite del objeto o **Mayúsculas+clic** en el objeto.
> También es posible seleccionar objetos haciendo doble clic en la ventana de resultados de la operación "Buscar en diseño".

### Selección de múltiples objetos

Es posible que desee realizar la misma operación en más de un objeto de un formulario, por ejemplo, para mover los objetos, alinearlos o cambiar su apariencia. 4D le permite seleccionar varios objetos al mismo tiempo. Hay varias formas de seleccionar varios objetos:

*   Seleccione **Seleccionar todo** en el menú Edición para seleccionar todos los objetos.
*   Haga clic con el botón derecho en el objeto y elija el comando **Seleccionar objetos del mismo tipo** en el menú contextual.
*   Mantenga presionada la tecla **Mayús** y haga clic en los objetos que desee seleccionar.
*   Comience en una ubicación fuera del grupo de objetos que desea seleccionar y arrastre un marco (a veces llamado rectángulo de selección) alrededor de los objetos. Al soltar el botón del ratón, si alguna parte de un objeto se encuentra dentro o toca los límites del rectángulo de selección, ese objeto queda seleccionado.
*   Mantenga presionada la tecla **Alt** (Windows) o la tecla **Opción** (macOS) y dibuje un rectángulo de selección. Se selecciona todo objeto que esté completamente encerrado por el marco.

La imagen siguiente muestra el dibujo de un rectángulo para seleccionar dos objetos:

![](assets/en/FormEditor/selectMultiple.png)

Para deseleccionar un objeto que forma parte de un grupo de objetos seleccionados, mantenga presionada la tecla **Mayús** y haga clic en el objeto. Los demás objetos permanecen seleccionados. Para deseleccionar todos los objetos seleccionados, haga clic fuera de los límites de todos los objetos.


### Duplicar los objetos

Puede duplicar todo objeto de formulario, incluidos los objetos activos. Las copias de los objetos activos conservan todas las propiedades del objeto original, incluidos el nombre, el tipo, la acción estándar, el formato de visualización y el método objeto.

Puede duplicar un objeto directamente con la herramienta Duplicar de la paleta Herramientas o utilizar la caja de diálogo Duplicar varios para duplicar un objeto más de una vez. Además, a través de esta caja de diálogo, se puede definir la distancia entre dos copias.

Para duplicar uno o más objetos:

1. Select the object or objects that you want to duplicate.
2. Choose **Duplicate** from the **Edit** menu. 4D creates a copy of each selected object and places the copy in front and slightly to the side of the original.
3.  Move the copy (or copies) to the desired location. If you choose the Duplicate menu item again, 4D creates another copy of each object and moves it the exact same distance and direction from the first copy. If you need to distribute copies of the object along a line, you should use the following procedure. Duplicate the original object, move the copy to another location in the form, and then duplicate the copy. The second copy is automatically placed in the same relation to the first copy as the first copy was in relation to the original object. Subsequent copies are also placed in the same relation to their originals. The figure below shows how this relative placement of copies works:

![](assets/en/FormEditor/duplicateObjects.png)


#### Duplicate Many

The "Duplicate Many" dialog box appears when you select one or more object(s) and choose the **Duplicate Many...** command from the **Object** menu.

![](assets/en/FormEditor/duplcateMany.png)

*   In the upper area, enter the number of columns and lines (rows) of objects you want to get.<p>For example, if you want three columns and two lines of objects, enter 3 in the Column(s) area and 2 in the Line(s) area. If you want three horizontal new copies of an object, enter 4 in the Column(s) area and leave the default value, 1, in the Line(s) area.

*   For lines and columns, define the offset that you wish to leave between each copy.<p>The value must be expressed in points. It will be applied to each copy, or copies, in relation to the original object.<p>For example, if you want to leave a vertical offset of 20 points between each object and the height of the source object is 50 points, enter 70 in the column’s “Offset” area.

*   If you wish to create a matrix of variables, select the **Number Variables** option and select the direction in which the variables are to be numbered, either by line(s) or by column(s). This option is active only when the selected object is a variable. For more information on this option, refer to **Duplicating on a matrix** in the *Design Reference*.


### Moving objects

You can move any graphic or active object in the form including fields and objects created with a template. When moving an object, you have the following options:

*   Move the object by dragging it,
*   Move the object one pixel at a time using the arrow keys,
*   Move the object by steps using the arrow keys (20-pixel steps by default),

As you begin dragging the selected object, its handles disappear. 4D displays markers that show the location of the object’s boundaries in the rulers so that you can place the object exactly where you want it. Be careful not to drag a handle. Dragging a handle resizes the object. You can press the **Shift** key to carry out the move with a constraint.

When the [Magnetic Grid](#using-the-magnetic-grid) is on, objects are moved in stages indicating noticeable locations.

To move an object one pixel at a time:

*   Select the object or objects and use the arrow keys on the keyboard to move the object. Each time you press an arrow key, the object moves one pixel in the direction of the arrow.

To move an object by steps:

*   Select the object or objects you want to move  and hold down the **Shift** key and use the arrow keys to move the object by steps. By default, steps are 20 pixels at a time. You can change this value on the Forms Page of the Preferences.


### Grouping objects

4D lets you group objects so that you can select, move, and modify the group as a single object. Objects that are grouped retain their position in relation to each other. You would typically group a field and its label, an invisible button and its icon, and so forth.

When you resize a group, all the objects in the group are resized proportionally (except text areas, which are resized in steps according to their font sizes.

You can ungroup a group of objects to treat them as individual objects again.

An active object that has been grouped must be ungrouped before you can access its properties or method. However, it is possible to select an object belonging to a group without degrouping the set: to do this, **Ctrl+click** (Windows) or **Command+click** (macOS) on the object (the group must be selected beforehand).

La agrupación sólo afecta a los objetos en el editor de formularios. Cuando se ejecuta el formulario, todos los objetos agrupados actúan como si estuvieran desagrupados.
> No es posible agrupar objetos que pertenezcan a diferentes vistas y sólo se pueden agrupar aquellos objetos que pertenezcan a la vista actual (ver [Utilizar las vistas de objeto](#views) ).

Para agrupar los objetos:

1.  Seleccione los objetos que desea agrupar.
2.  Elija **Agrupar** en el menú Objetos.<p>O<p> Haga clic en el botón Agrupar de la barra de herramientas del editor de formularios:<p>![](assets/en/FormEditor/group.png)<p> 4D marca el límite de los objetos recién agrupados con marcas. No hay marcas que delimiten ninguno de los objetos individuales del grupo. Ahora, al modificar el objeto agrupado, se modifican todos los objetos que componen el grupo.

Para desagrupar un grupo de objetos:

1.  Seleccione el grupo de objetos que desea desagrupar.
2.  Elija **Desagrupar** en el menú **Objetos**.<p>O<p>Haga clic en el botón **Desagrupar** (menú del botón **Agrupar**) de la barra de herramientas del editor de formularios.<p>Si **Desagrupar** está atenuado, significa que el objeto seleccionado ya está separado en su forma más simple.<p>4D marca los bordes de los objetos individuales con marcas.


### Alinear objetos

Puede alinear los objetos entre sí o mediante una rejilla invisible en el formulario.

*   Cuando se alinea un objeto con otro, se puede alinear con la parte superior, inferior, lateral o con el centro horizontal o vertical del otro objeto. Puede alinear directamente una selección de objetos utilizando las herramientas de alineación o aplicar ajustes de alineación más avanzados utilizando el Asistente de Alineación. Esta última opción permite, por ejemplo, definir el objeto que se utilizará como referencia de posición y previsualizar la alineación en el formulario antes de aplicarla.
*   Cuando se utiliza la rejilla invisible, cada objeto puede alinearse manualmente con otros basándose en posiciones "perceptibles" que se representan con líneas de puntos que aparecen cuando el objeto que se mueve se acerca a otros objetos.

#### Utilizar las herramientas de alineación directa

Las herramientas de alineación de la barra de herramientas y del submenú Alinear del menú Objeto permiten alinear rápidamente los objetos seleccionados.

![](assets/en/FormEditor/alignmentMenu.png)

Cuando 4D alinea los objetos, deja un objeto seleccionado en su lugar y alinea el resto de los objetos a ese. This object is the “anchor.” It uses the object that is the furthest in the alignment’s direction as the anchor and aligns the other objects to that object. Por ejemplo, si quiere realizar una alineación a la derecha en un conjunto de objetos, el objeto más a la derecha se utilizará como ancla. La figura siguiente muestra objetos sin alineación, "alineados a la izquierda", "alineados horizontalmente por centros" y "alineados a la derecha":

![](assets/en/FormEditor/alignmentTools.png)

#### Utilizar el asistente de alineación

El Asistente de Alineación permite realizar cualquier tipo de alineación y/o distribución de objetos.

![](assets/en/FormEditor/alignmentAssistant.png)


Para mostrar esta caja de diálogo, seleccione los objetos que desee alinear y, a continuación, elija el comando **Alineación** del submenú **Alinear** del menú **Objeto** o del menú contextual del editor.

*   En las áreas "Alineación izquierda/derecha" y/o "Alineación superior/inferior", haga clic en el icono que corresponde a la alineación que desea realizar.<p>El área de ejemplo muestra los resultados de su selección.

*   Para realizar una alineación que utilice el esquema de anclaje estándar, haga clic en **Ver** o **Aplicar**.<p>En este caso, 4D utiliza el objeto que está más lejos en la dirección de la alineación como ancla y alinea los otros objetos a ese objeto. Por ejemplo, si quiere realizar una alineación a la derecha en un conjunto de objetos, el objeto más a la derecha se utilizará como ancla.<p>O:<p>Para alinear los objetos a un objeto específico, seleccione la opción **Alinear en** y seleccione el objeto al que desea que se alineen los demás objetos de la lista de objetos. En este caso, la posición del objeto de referencia no se alterará.

Puede previsualizar los resultados de la alineación haciendo clic en el botón **Previsualización**. The objects are then aligned in the Form editor but since the dialog box does not go away, you can still cancel or apply the alignment.
> This dialog box allows you to align and distribute objects in one operation. For more information on how to distribute objects, refer to [Distributing objects](#distributing-objects).

#### Using the Magnetic Grid

The Form editor provides a virtual magnetic grid that can help you place and align objects in a form. Magnetic alignment of objects is based on their position in relation to each other. The magnetic grid can only be used when at least two objects are present in the form.

This works as follows: When you move an object in the form, 4D indicates possible locations for this object based on noticeable alignments with other form objects. A noticeable alignment is established each time that:

*   Horizontally, the edges or centers of two objects coincide,
*   Vertically, the edges of two objects coincide.

When this happens, 4D places the object at the location and displays a red line indicating the noticeable alignment taken into account:

![](assets/en/FormEditor/magneticGrid1.png)

Concerning the distribution of objects, 4D proposes a distance based on interface standards. Like with magnetic alignment, red lines indicate the noticeable differences once they are reached.

![](assets/en/FormEditor/magneticGrid2.png)

This operation applies to all types of form objects. The Magnetic Grid can be enabled or disabled at any time using the **Magnetic Grid** command in the **Form** menu or in the editor context menu. It is also possible to set the activation of this feature by default on the **Preferences** > **Forms** page (**Activate auto alignment by default** option). You can manually activate or deactivate the magnetic grid when an object is selected by pressing the **Ctrl** (Windows) or **Control** (macOS) key .
> The Magnetic Grid also influences the manual resizing of objects.

### Distributing objects

You can distribute objects so that they are set out with an equal amount of space between them. To do this, you can distribute objects using either the Distribute tools in the Tools palette or the Alignment Assistant. The latter allows you to align and distribute objects in one operation.
> When the [Magnetic Grid](#using-the-magnetic-grid) is on, a visual guide is also provided for distribution when an object is moved manually.

To distribute objects with equal spacing:

1.  Select three or more objects and click the desired Distribute tool.

2.  In the toolbar, click on the distribution tool that corresponds to the distribution you want to apply.<p>![](assets/en/FormEditor/distributionTool.png)<p>O<p>Select a distribution menu command from the **Align** submenu in the **Object** menu or from the context menu of the editor.<p>4D distributes the objects accordingly. Objects are distributed using the distance to their centers and the largest distance between two consecutive objects is used as a reference.

To distribute objects using the Align and Distribute dialog box:

1.  Select the objects you want to distribute.

2.  Choose the **Alignment** command from the **Align** submenu in the **Object** menu or from the context menu of the editor.<p>The following dialog box appears:![](assets/en/FormEditor/alignmentAssistant.png)

3.  In the Left/Right Alignment and/or Top/Bottom Alignment areas, click the standard distribution icon: ![](assets/en/FormEditor/horizontalDistribution.png)<p>(Standard horizontal distribution icon)<p>El área de ejemplo muestra los resultados de su selección.

4.  To perform a distribution that uses the standard scheme, click **Preview** or *Apply*.<p>In this case 4D will perform a standard distribution, so that the objects are set out with an equal amount of space between them.<p>O:<p>To execute a specific distribution, select the **Distribute** option (for example if you want to distribute the objects based on the distance to their right side). This option acts like a switch. If the Distribute check box is selected, the icons located below it perform a different function:

    *   Horizontally, the icons correspond to the following distributions: evenly with respect to left sides, centers (hor.) and right sides of the selected objects.
    *   Vertically, the icons correspond to the following distributions: evenly with respect to top edges, centers (vert.) and bottom edges of the selected objects.

    You can preview the actual result of your settings by clicking on the **Preview** button: the operation is carried out in the Form editor but the dialog box stays in the foreground. You can then **Cancel** or **Apply** the modifications.
> This dialog box lets you combine object alignment and distribution. For more information about alignment, refer to [Aligning objects](#aligning-objects).


### Layering objects

You will sometimes have to rearrange objects that are obstructing your view of other objects in the form. For example, you may have a graphic that you want to appear behind the fields in a form. 4D provides four menu items, **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** that let you “layer” objects on the form. These layers also determine the default entry order (see Modifying data entry order). The figure below shows objects in front of and behind other objects:

![](assets/en/FormEditor/layering.png)

To move an object to another level, select it and choose:

*   One of the **Move to Back**, **Move to Front**, **Up One Level** and **Down One Level** commands of the Object menu,
*   One of the commands in the **Level>** submenu in the context menu of the editor,
*   One of the commands associated with the level management button of the toolbar.

![](assets/en/FormEditor/level2.png)
> When several objects are superimposed, the **Ctrl+Shift+click** / **Command+Shift+click** shortcut can be used to select each object successively by going down a layer with each click.

When ordering different levels, 4D always goes from the background to the foreground. As a result, the previous level moves the selection of objects one level towards the background. The next level moves the selection one level towards the foreground of the form.

### Data entry order

The data entry order is the order in which fields, subforms, and other active objects are selected as you hit the **Tab** or the **Carriage return** key in an input form. It is possible to move through the form in the opposite direction (reverse data entry order) by pressing the **Shift+Tab** or **Shift+Carriage** return keys.

> You can change the entry order at runtime using the `FORM SET ENTRY ORDER` and `FORM GET ENTRY ORDER` commands.

Every object that supports the focusable property is included in the data entry order by default.

Setting the entry order for a JSON form is done with the [`entryOrder`](properties_JSONref.md) property.

If you don’t specify a custom entry order, by default 4D uses the layering of the objects to determine the entry order in the direction “background towards foreground.” The standard entry order thus corresponds to the order in which the objects were created in the form.

In some forms, a custom data entry order is needed. Below, for example, additional fields related to the address have been added after the creation of the form. The resulting standard entry order thus becomes illogical and forces the user to enter the information in an awkward manner:

![](assets/en/FormEditor/entryOrder1.png)

In cases such as this, a custom data entry order allows you to enter the information in a more logical order:

![](assets/en/FormEditor/entryOrder2.png)

#### Viewing and changing the data entry order

You can view the current entry order either using the “Entry order” shields, or by using the “Entry order” mode. However, you can only modify the entry order using the “Entry order” mode.

This paragraph describes viewing and modifying the entry order using the “Entry order” mode. For more information about viewing the entry order using shields, refer to [Using shields](#using-shields).

To view or change the entry order:

1.  Choose **Entry Order** from the **Form** menu or click on the Entry Order button in the toolbar of the window:<p>![](assets/en/FormEditor/zOrder.png)<p>The pointer turns into an entry order pointer and 4D draws a line in the form showing the order in which it selects objects during data entry.<p>Viewing and changing the data entry order are the only actions you can perform until you click any tool in the Tools palette.

2.  To change the data entry order, position the pointer on an object in the form and, while holding down the mouse button, drag the pointer to the object you want next in the data entry order.<p>![](assets/en/FormEditor/entryOrder3.png)<p>4D will adjust the entry order accordingly.

3.  Repeat step 2 as many times as necessary to set the data entry order you want.

4.  When you are satisfied with the data entry order, click any unselected tool in the toolbar or choose **Entry Order** from the **Form** menu.<p>4D returns to normal operation of the Form editor.

> Only the entry order of the current page of the form is displayed. If the form contains enterable objects on page 0 or coming from an inherited form, the default entry order is as follows: Objects from page 0 of the inherited form > Objects from page 1 of the inherited form > Objects from page 0 of the open form > Objects from the current page of the open form.


#### Using a data entry group

While you are changing the data entry order, you can select a group of objects in a form so that the standard data entry order applies to the objects within the group. This allows you to easily set the data entry order on forms in which fields are separated into groups or columns.

To create a data entry group:

1.  Choose **Entry Order** from the *Form* menu or click the  button in the toolbar.
2.  Draw a marquee around the objects you want to group for data entry.

When you release the mouse button, the objects enclosed or touched by the rectangle follow the standard data entry order. The data entry order for the remaining objects adjusts as necessary.

#### Excluding an object from the entry order

By default, all objects that support the focusable property are included in the entry order. To exclude an object from the entry order:

1. Select the Entry order mode, then

2.  **shift-click** on the object

3.  **right-click** on the object and select **Remove from entry order** option from the context menu



## CSS Preview

The Form editor allows you to view your forms with or without applied CSS values.

When [style sheets](createStylesheet.md) have been defined, forms (including inherited forms and subforms) are opened in the CSS Preview mode for your operating system by default.


### Selecting CSS Preview Mode

The Form editor toolbar provides a CSS button for viewing styled objects:

![](assets/en/FormEditor/cssToolbar.png)

Select one of the following preview modes from the menu:

| Toolbar Icon                         | CSS Preview Mode | Descripción                                                                                                   |
| ------------------------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------- |
| ![](assets/en/FormEditor/cssNo.png)  | Ninguno          | No CSS values are applied in the form and no CSS values or icons displayed in the Property List.              |
| ![](assets/en/FormEditor/cssWin.png) | Windows          | CSS values for Windows platform are applied in the form. CSS values and icons displayed in the Property List. |
| ![](assets/en/FormEditor/cssMac.png) | macOS            | CSS values for macOS platform are applied in the form. CSS values and icons displayed in the Property List.   |
> If a font size too large for an object is defined in a style sheet or JSON, the object will automatically be rendered to accommodate the font, however the size of the object will not be changed.

The CSS preview mode reflects the priority order applied to style sheets vs JSON attributes as defined in the [JSON vs Style Sheet](stylesheets.html#json-vs-style-sheet) section.

Once a CSS preview mode is selected, objects are automatically displayed with the styles defined in a style sheet (if any).
> When copying or duplicating objects, only the CSS references (if any) and the JSON values are copied.


### CSS support in the Property List

In CSS Preview mode, if the value of an attribute has been defined in a style sheet, the attribute's name will appear with a CSS icon displayed next to it in the Property List. For example, the attribute values defined in this style sheet:

```4d
.myButton {
font-family: comic sans;
font-size: 14;
stroke: #800080;
}
```

are displayed with a CSS icon in the Property List:

![](assets/en/FormEditor/cssPpropList.png)

An attribute value defined in a style sheet can be overridden in the JSON form description (except if the CSS includes the `!important` declaration, see below). In this case, the Property List displays the JSON form value in **bold**. You can reset the value to its style sheet definition with the **Ctrl + click** (Windows) or **Command + click** (macOs) shortcuts.
> If an attribute has been defined with the `!important` declaration for a group, an object within a group, or any object within a selection of multiple objects, that attribute value is locked and cannot be changed in the Property List.

#### Property List CSS Icons

| Icon                                       | Descripción                                                                                                                                                        |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ![](assets/en/FormEditor/cssIcon.png)      | Indicates that an attribute value has been defined in a style sheet                                                                                                |
| ![](assets/en/FormEditor/cssImportant.png) | Indicates that an attribute value has been defined in a style sheet with the `!important` declaration                                                              |
| ![](assets/en/FormEditor/cssIconMixed.png) | Displayed when an attribute value defined in a style sheet for at least one item in a group or a selection of multiple objects is different from the other objects |



## Creación de list box

You can create new entity selection list boxes quickly with the **List box builder**. The new list box can be used immediately or it can be edited via the Form Editor.

The List box builder lets you create and fill entity selection list boxes in a few simple operations.



### Using the List Box Builder


1.  In the Form Editor toolbar, click on the List box builder icon:

    ![](assets/en/FormEditor/listboxBuilderIcon.png)

    The List box builder is displayed:

    ![](assets/en/FormEditor/listboxBuilder.png)

2.  Select a table from the **Table** dropdown list:

    ![](assets/en/FormEditor/listboxBuilderTable.png)

3.  Select the fields for the list box in the **Fields** area:

    ![](assets/en/FormEditor/listboxBuilderFields.png)

    By default, all fields are selected. You can select or deselect fields individually or use **Ctrl+click** (Windows) or **Cmd+click** (macOS) to select or deselect them all at once.

    You can change the order of the fields by dragging them and dropping them.

4.  The expression to fill the list box's rows from the entity selection is prefilled:

    ![](assets/en/FormEditor/listboxBuilderExpression.png)

    This expression can be changed if necessary.

5.  Clicking on the **Copy** button will copy the expression for loading all records into memory:

    ![](assets/en/FormEditor/listboxBuilderCode.png)

6.  Click the the **Build widget** button to create the list box.

    ![](assets/en/FormEditor/listboxBuilderBuild.png)

The final list box:

![](assets/en/FormEditor/listboxBuilderListbox.png)









## Shields

The 4D Form Editor uses shields to make viewing object properties easier. You can find them on the form toolbar:

![](assets/en/FormEditor/shields.png)




This function works as follows: Each shield is associated with a property (for example, **Views**, which means the object “is in the current view”). When you activate a shield, 4D displays a small icon (shield) in the upper left of each object of the form where the property is applied.

![](assets/en/FormEditor/shield.png)

### Using shields

To activate a shield, click the *Shield* icon from the toolbar until the desired shield is selected. You can also click on the right side of the button and select the type of shield to display directly in the associated menu:


If you don't want to display shields, select **No Shields** in the selection menu.
> You can set which shields to display by default on the Forms Page of the application Preferences.

### Shield descriptions

Here is a description of each type of shield:

| Icon                                         | Name                               | Is displayed ...                                                                                                                     |
| -------------------------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| ![](assets/en/FormEditor/objectMethod.png)   | Object Method                      | For objects with an associated object method                                                                                         |
| ![](assets/en/FormEditor/standardAction.png) | Standard Action                    | For objects with an associated standard action                                                                                       |
| ![](assets/en/FormEditor/resizing.png)       | Redimensionamiento                 | For objects with at least one resizing property, indicates the combination of current properties                                     |
| ![](assets/en/FormEditor/entryOrder.png)     | Entry Order                        | For enterable objects, indicates the number of entry order                                                                           |
| ![](assets/en/FormEditor/viewNumber.png)     | Current View                       | For all objects in the current view                                                                                                  |
| ![](assets/en/FormEditor/cssShield.png)      | [Hoja de estilo](stylesheets.html) | For objects with one or more attribute values overridden by a style sheet.                                                           |
| ![](assets/en/FormEditor/filter.png)         | Filter                             | For enterable objects with an associated entry filter                                                                                |
| ![](assets/en/FormEditor/helpTip.png)        | Help Tip                           | For objects with an associated tip                                                                                                   |
| ![](assets/en/FormEditor/localized.png)      | Localized                          | For objects whose label comes from a reference (label beginning with “:”). The reference can be of the resource (STR#) or XLIFF type |
| ![](assets/en/FormEditor/noShields.png)      | No Shields                         | No shields appear                                                                                                                    |

## Views

The 4D Form Editor enables you to build complex forms by distributing form objects among separate views that can then be hidden or shown as needed.

For example, you can distribute objects according to type (fields, variables, static objects, etc.). Any type of form object, including subforms and plug-in areas, can be included in views.

There is no limit on the number of views per form. You can create as many different views as you need. Additionally, each view can be displayed, hidden, and/or locked.


View management is handled via the View palette.

![](assets/en/FormEditor/viewEditor.png)


### Accessing the View palette

There are three ways to access the View palette:

*   **Toolbar**: Click on the Views icon in the Form Editor toolbar. (This icon appears gray when at least one object belongs to a view other than the default view.)

    |                  Default view only                   |               With additional views                |
    |:----------------------------------------------------:|:--------------------------------------------------:|
    | ![](assets/en/FormEditor/icon.png "No views in use") | ![](assets/en/FormEditor/icon2.png "Views in use") |

*   **Context menu** (form or object): Right-click anywhere in the Form Editor or an object, and select **Current View**

    ![](assets/en/FormEditor/contextMenu.png)

The current view is indicated with a check mark (*e.g.*, "Work Address" in the image above)


*   **Form menu**: Click on the **Form** menu and select **View List**

![](assets/en/FormEditor/formMenu.png)


### Before you begin

Here are a few important things to know before you start working with views:

*   **Context of use**: Views are a purely graphic tool which can only be used in the Form Editor; you cannot access views programmatically or in the Application environment.

*   **Views and pages**: Objects of the same view can belong to different form pages; only objects of the current page (and of page 0 if it is visible) can be displayed, regardless of the view configuration.

*   **Views and levels**: Views are independent of object levels; there is no display hierarchy among different views.

*   **Views and groups**: Only objects belonging to the current view can be grouped.

*   **Current and Default** views: The Default view is the first view of a form and cannot be deleted; the Current view is the view that is being edited and the name is displayed in bold text.



### Gestión de vistas

#### Creating views

Any object created in a form is placed in the first view ("View 1") of the form. The first view is **always** the default view, indicated by (Default) after the name. The view's name can be changed (see [Renaming views](#renaming-views)), however it remains the default view.


![](assets/en/FormEditor/createView.png)

There are two ways to add additional views:

*   Click on the **Add a new view** button at the bottom of the View palette:

![](assets/en/FormEditor/addView.png)

*   Right-click on an existing view and select **Insert view**:

![](assets/en/FormEditor/addView2.png)

There is no limitation on the number of views.

#### Renaming views

By default views are named as "View" + the view number, however you can change these names to improve readability and better suit your needs.

To rename a view, you can use either:

*   Double-click directly on the view name (the selected view in this case). The name then becomes editable:

    ![](assets/en/FormEditor/rename.png)

*   Right-click on the view name. The name then becomes editable:

    ![](assets/en/FormEditor/rename2.png)

#### Reordering views

You can change the display order of views by dragging/dropping them within the View palette.

Note that the Default view does not change:

![](assets/en/FormEditor/reorderView.png)


#### Deleting views

To rename a view, you can use either:

*   Click on the **Delete the selected view** button at the bottom of the View palette:

    ![](assets/en/FormEditor/deleteView.png)


*   Right-click on the view name, and select **Delete View**:

    ![](assets/en/FormEditor/deleteView2.png)
> If a view is deleted, any objects in it are automatically moved to the Default view.




### Using views

Once views are created, you can use the View palette to:

*   Add object to views,
*   Move objects from one view to another,
*   Select all objects of the same view in a single click,
*   Display or hide objects for each view,
*   Lock the objects of a view.

#### Adding objects to views

An object can only belong to a single view.

To create an object in another view, simply select the view in the View palette (prior to creating the object) by clicking its name (an Edit icon is displayed for the [Current view](#before-you-begin) and the name appears in bold text):

![](assets/en/FormEditor/addObject.png)

#### Moving objects between views

It's also possible to move one or more objects from one view to another. In the form, select the object(s) whose view you wish to change. The view list indicates, using a symbol, the view to which the selection belongs:

![](assets/en/FormEditor/symbol.png)
> The selection can contain several objects belonging to different views.

Simply select the destination view, right-click, and select **Move to**:

![](assets/en/FormEditor/moveObject.png)

O

Select the destination view of the selection and click **Move to** button at the bottom of the View palette:

![](assets/en/FormEditor/moveObject3.png)

The selection is then placed in the new view:

![](assets/en/FormEditor/objNewView.png)

You can also move an object to another view via the object's context menu. Right-click on the object, select **Move to view**, and select a view from the list of available views:

![](assets/en/FormEditor/moveObject2.png)
> The [Current view](#before-you-begin) is shown in bold text.



#### Select all objects of a view

You can select all objects belong to the same view in the current page of the form. This function is useful for applying global changes to a set of objects.

To do this, right-click on the view in which you wish to select all the objects, click on **Select All**:

![](assets/en/FormEditor/selectAll.png)

You can also use the button at the bottom of the View palette:


![](assets/en/FormEditor/selectAll2.png)


#### Show or hide objects of a view

You can show or hide objects belonging to a view at any time in the form's current page. This way you can focus on certain objects when editing the form, for example.

By default, all views are shown, as indicated by the *Show/Hide* icon:

![](assets/en/FormEditor/showHide.png)

To hide a view, click the *Show/Hide* icon. It is then dimmed and objects of the corresponding view are no longer shown in the form:

![](assets/en/FormEditor/hidden.png)
> The [Current view](#before-you-begin) cannot be hidden.

To show a view that is hidden, simply select it or click on the *Show/Hide* icon for that view.



#### Locking objects of a view

You can lock the objects of a view. This prevents them from being selected, changed, or deleted from the form. Once locked, an object cannot be selected by a click, a rectangle, or the **Select Similar Objects** command of the context menu. This function is useful for preventing handling errors.

By default, all views are unlocked, as indicated by the *Lock/Unlock* icon next to each view:

![](assets/en/FormEditor/lockUnlock.png)

To lock the objects of a view, click the *Lock/Unlock* icon. The padlock is shut, which means that the view is now locked:

![](assets/en/FormEditor/locked.png)
> The [Current view](#before-you-begin) cannot be locked.

To unlock a view that is locked, simply select it or click on the *Lock/Unlock* icon for that view.

## Zoom

You can zoom in the current form. Switch to “Zoom” mode by clicking on the magnifying glass icon or clicking directly on the desired percentage bar (50%, 100%, 200%, 400% and 800%):

![](assets/en/FormEditor/zoom.png)

*   When you click on the magnifying glass, the cursor changes into one. You can then click in the form to increase the display or hold down Shift and click to reduce the display percentage.
*   When you click on a percentage bar, the display is immediately modified.

In Zoom mode, all Form editor functions remain available(*).

(*) For technical reasons, it is not possible to select list box elements (headers, columns, footers) when the Form editor is in Zoom mode.





