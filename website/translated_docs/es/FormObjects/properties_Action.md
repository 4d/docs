---
id: propertiesAction
title: Acción
---


---
## Arrastrable

Control whether and how the user can drag the object. By default, no drag operation is allowed.

Two drag modes are available:

- **Custom**: In this mode, any drag operation performed on the object triggers the `On Begin Drag` form event in the context of the object. You then manage the drag action using a method.   
  In custom mode, basically the whole drag-and-drop operation is handled by the programmer. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automatic**: In this mode, 4D **copies** text or pictures directly from the form object. It can then be used in the same 4D area, between two 4D areas, or between 4D and another application. For example, automatic drag (and drop) lets you copy a value between two fields without using programming:  
  ![](assets/en/FormObjects/property_automaticDragDrop.png)  
  ![](assets/en/FormObjects/property_automaticDragDrop2.png) In this mode, the `On Begin Drag` form event is NOT generated. Si quiere "forzar" el uso del arrastre personalizado mientras está activado el arrastre automático, mantenga presionada la tecla **Alt** (Windows) o **Opción** (macOS) durante la acción. Esta opción no está disponible para las imágenes.

Para más información, consulte [Arrastrar y soltar](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) en el manual *Lenguaje 4D*.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                  |
| -------- | -------------- | ----------------------------------------------------------------- |
| dragging | texto          | "none" (por defecto), "custom", "automatic" (excluyendo list box) |


#### Objetos soportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Entrada](input_overview.md) - [Lista jerárquica](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Área de Plug-in](pluginArea_overview.md#overview)




#### Ver también
[Soltable](#droppable)


---
## Soltable

Controla si el objeto puede ser el destino de una operación de arrastrar y soltar y cómo hacerlo.

Hay dos modos de soltar disponibles:

- **Personalizado**: en este modo, cualquier operación de soltar realizada en el objeto activa los eventos formulario `On Drag Over` y `On Drop` en el contexto del objeto. A continuación, se gestiona la acción de soltar mediante un método.    
  En modo personalizado, básicamente toda la operación de arrastrar y soltar es manejada por el programador. This mode lets you implement any interface based upon drag-on-drop, including interfaces that do not necessarily transport data, but can perform any action like opening files or triggering a calculation. This mode is based upon a combination of specific properties, events, and commands from the `Pasteboard` theme.
- **Automático**: en este modo, 4D gestiona automáticamente, si es posible, la inserción de los datos arrastrados de tipo texto o imagen que se sueltan sobre el objeto (los datos se pegan en el objeto). Los eventos `On Drag Over` y `On Drop` NO se generan. Por otra parte, se generan los eventos `On After Edit` (durante el soltar) y `On Data Change` (cuando el objeto pierde el foco).

Para más información, consulte [Arrastrar y soltar](https://doc.4d.com/4Dv18/4D/18/Drag-and-Drop.300-4505037.en.html) en el manual *Lenguaje 4D*.


#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles                                                  |
| -------- | -------------- | ----------------------------------------------------------------- |
| dropping | texto          | "none" (por defecto), "custom", "automatic" (excluyendo list box) |

#### Objetos soportados

[Áreas 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview.md) - [Entrada](input_overview.md) - [Lista jerárquica](list_overview.md#overview) - [List Box](listbox_overview.md#overview) - [Área de Plug-in](pluginArea_overview.md#overview)


#### Ver también
[Arrastrable](#draggable)


---
## Ejecutar método objeto
Cuando esta opción está activada, el método objeto se ejecuta con el evento `On Data Change` *en el mismo momento* en que el usuario cambia el valor del indicador. Cuando la opción está desactivada, el método se ejecuta *tras* la modificación.

#### Gramática JSON

| Nombre              | Tipos de datos | Valores posibles |
| ------------------- | -------------- | ---------------- |
| continuousExecution | booleano       | true, false      |

#### Objetos soportados

[Indicador de progreso](progressIndicator.md) - [Regla](ruler.md) - [Stepper](stepper.md)






---
## Método

Referencia de un método adjunto al objeto. Los métodos de objeto generalmente "gestionan" el objeto mientras el formulario se muestra o se imprime. No llame a un método objeto, 4D lo llama automáticamente cuando un evento implica el objeto al que el método objeto está asociado.

Se soportan varios tipos de referencias de métodos:

- una ruta de archivo de método objeto estándar, es decir, que utilice el siguiente patrón:  
  `ObjectMethods/objectName.4dm`  
  ... donde `objectName` es el [nombre del objeto](propiedades_Objeto.md#nombredelobjeto). Este tipo de referencia indica que el archivo del método se encuentra en la ubicación por defecto ("sources/forms/*formName*/ObjectMethods/"). En este caso, 4D maneja automáticamente el método objeto cuando se ejecutan operaciones en el objeto formulario (renombrar, duplicar, copiar/pegar...)

- un nombre de método proyecto: nombre de un método proyecto existente sin extensión de archivo, es decir: `myMethod` En este caso, 4D no soporta automáticamente las operaciones objeto.

- una ruta de acceso al archivo del método personalizado que incluya la extensión .4dm, por ejemplo:  
  `../../CustomMethods/myMethod.4dm` También puede utilizar un sistema de archivos:  
  `/RESOURCES/Buttons/bOK.4dm` En este caso, 4D no ofrece soporte automático para las operaciones con objetos.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                        |
| ------ | -------------- | --------------------------------------------------------------------------------------- |
| method | texto          | Ruta de archivo estándar o personalizada del método objeto o nombre del método proyecto |


#### Objetos soportados

[Área 4D View Pro](viewProArea_overview.md) - [Área 4D Write Pro](writeProArea_overview.md) - [Botón](button_overview. md) - [Rejilla de botones](buttonGrid_overview.md) - [Casilla de selección](checkbox_overview.md) - [Combo Box](comboBox_overview. md) - [Lista desplegable](dropdownList_Overview.md) - [Formularios](forms.md) - [Lista jerárquica](list_overview. md#overview) - [Entrada](input_overview.md) - [List Box](listbox_overview.md#overview) - [Columna List Box](listbox_overview. md#list-box-columns) - [Botón imagen](pictureButton_overview.md) - [Menú emergente de imagen](picturePopupMenu_overview. md) - [Área de plugins](pluginArea_overview.md#overview) - [Indicadores de progreso](progressIndicator.md) - [Botón radio](radio_overview. md) - [Regla](ruler.md) - [Spinner](spinner.md) - [Splitter](splitters.md) - [Stepper](stepper. md) - [Subformulario](subform_overview.md) - [Control de pestañas](tabControl.md) - [Área web](webArea_overview.md#overview)




---
## Líneas desplazables
`List box de tipo array`

Autoriza el desplazamiento de líneas durante la ejecución. Esta opción está seleccionada por defecto. No está disponible para los [list box de tipo selección](listbox_overview.md#selection-list-boxes) ni para los [list box en modo jerárquico](properties_Hierarchy.md#hierarchical-list-box).

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles |
| ----------- | -------------- | ---------------- |
| movableRows | booleano       | true, false      |

#### Objetos soportados

[List Box](listbox_overview.md#overview)





---
## Multi-seleccionable

Allows the selection of multiple records/options in a [hierarchical list](list_overview.md).

#### Gramática JSON

| Nombre        | Tipos de datos | Valores posibles             |
| ------------- | -------------- | ---------------------------- |
| selectionMode | texto          | "multiple", "single", "none" |

#### Objetos soportados

[Lista jerárquica](list_overview.md)




---
## Ordenable

Permite ordenar los datos de las columnas haciendo clic en un encabezado [listbox](listbox_overview.md). Esta opción está seleccionada por defecto. Los arrays de tipo imagen (columnas) no pueden ordenarse utilizando esta función.

En los list box basados en una selección de registros, sólo está disponible la función de ordenación estándar:
*   Cuando la fuente de datos es *Selección actual*,
*   Con columnas asociadas a campos (de tipo Alfa, Número, Fecha, Hora o Booleano).

En otros casos (list box basados en selecciones temporales, columnas asociadas a expresiones), la función de ordenación estándar no está disponible. Una ordenación estándar del list box cambia el orden de la selección actual en la base de datos. Sin embargo, los registros resaltados y el registro actual no se modifican. Una ordenación estándar sincroniza todas las columnas del list box, incluidas las columnas calculadas.

#### Gramática JSON

| Nombre   | Tipos de datos | Valores posibles |
| -------- | -------------- | ---------------- |
| sortable | booleano       | true, false      |

#### Objetos soportados
[List Box](listbox_overview.md)






---
## Acción estándar
Actividades típicas que deben realizar por los objetos activos (*por ejemplo*, permitir que el usuario acepte, cancele o elimine registros, se desplace entre registros o de una página a otra en un formulario de varias páginas, etc.) han sido predefinidas por 4D como acciones estándar. They are described in detail in the [Standard actions](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html) section of the *Design Reference*.

You can assign both a standard action and a project method to an object. In this case, the standard action is usually executed after the method and 4D uses this action to enable/disable the object according to the current context. When an object is deactivated, the associated project method cannot be executed.

You can also set this property using the `OBJECT SET ACTION` command.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles                                                                                                 |
| ------ | -------------- | ---------------------------------------------------------------------------------------------------------------- |
| action | cadena         | The name of a [valid standard action](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html). |

#### Objetos soportados

[Button](button_overview.md) - [Button Grid](buttonGrid_overview.md) - [Check Box](checkbox_overview.md) - [Drop-down List](dropdownList_Overview.md) - [List Box](listbox_overview.md) - [Picture Button](pictureButton_overview.md) - [Picture Pop-up Menu](picturePopupMenu_overview.md) - [Tab control](tabControl.md)
