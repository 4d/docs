---
id: tabControl
title: Pestañas
---

Un control de pestañas crea un objeto que permite al usuario elegir entre un conjunto de pantallas virtuales que están encerradas por el objeto de control de pestañas. Se accede a cada pantalla haciendo clic en su pestaña.

El siguiente formulario multipágina utiliza un objeto de control de pestañas:

![](../assets/en/FormObjects/tabControl1.png)

Para navegar de una pantalla a otra, el usuario sólo tiene que hacer clic en la pestaña deseada.

Las pantallas pueden representar páginas en un formulario de varias páginas o un objeto que cambia cuando el usuario hace clic en una pestaña. Si el control de pestañas se utiliza como una herramienta de navegación de la página, entonces se utilizaría el comando [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) o la acción estándar `gotoPage` cuando un usuario hace clic en una pestaña.

Otro uso del control de pestañas es para controlar los datos que se muestran en un subformulario. Por ejemplo, se podría implementar un Rolodex utilizando un control de pestañas. Las pestañas mostrarían las letras del alfabeto y la acción del control de pestañas sería cargar los datos correspondientes a la letra que el usuario pulsara.

Cada pestaña puede mostrar etiquetas o rótulos y un pequeño icono. Si incluye iconos, éstos aparecen a la izquierda de cada etiqueta. Este es un ejemplo de un control de pestañas que utiliza iconos:

![](../assets/en/FormObjects/tabControl2.png)

Cuando se crea un control de pestañas, 4D gestiona el espaciado y la colocación de las mismas. Sólo tiene que suministrar las etiquetas en forma de array, o los iconos y etiquetas en forma de lista jerárquica.

Si el control de pestañas es lo suficientemente amplio como para mostrar todas las pestañas con las etiquetas y los iconos, muestra ambos. Si el control de pestañas no es lo suficientemente ancho para mostrar tanto las etiquetas como los iconos, 4D muestra sólo los iconos. Si no caben todos los iconos, coloca flechas de desplazamiento a la derecha de la última pestaña visible. Las flechas de desplazamiento permiten al usuario desplazar los iconos hacia la izquierda o la derecha.

En macOS, además de la posición estándar (arriba), los controles de las pestañas también pueden alinearse en la parte inferior.

### Ejemplo JSON:

```4d
	"myTab": {
		"type": "tab",
 		"left": 60,	
		"top": 160,	 
		"width": 100,	
		"height": 20,	
		"labelsPlacement": "bottom"/define la dirección
}
```

## Añadir etiquetas a un control de pestañas

Para suministrar las etiquetas de un control de pestañas, puede utilizar:

- un objeto
- una lista de selección
- un array

### Utilizar un objeto

Puede asignar un [objeto](Concepts/dt_object.md) que encapsule una [colección](../Concepts/dt_collection.md) como [fuente de datos](properties_Object.md#variable-or-expression) del control de pestañas. El objeto debe contener las siguientes propiedades:

| Propiedad      | Tipo       | Descripción                                                                                                                                                                                  |
| -------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `valores`      | Collection | Obligatorio - Colección de valores escalares. Sólo se admiten valores de tipo cadena. Si es inválido, vacío o no definido, el control de pestañas está vacío |
| `index`        | number     | Índice de la página de la etiqueta actual (valor entre 0 y `collection.length-1`)                                                                                         |
| `currentValue` | Text       | Valor actual seleccionado                                                                                                                                                                    |

El código de inicialización debe ejecutarse antes de que el formulario se presente al usuario.

En el siguiente ejemplo, `Form.tabControl` se ha definido como [expresión](properties_Object.md#variable-or-expression) del control de pestañas. Puede asociar la [acción estándar `gotoPage`](#goto-page-action) al objeto del formulario:

```4d
Form.tabControl:=New object
Form.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")
Form.tabControl.index:=2 //inicio en la página 3
```

### Utilizar una lista de selección

Puede asignar una [lista de opciones](properties_DataSource.md#choice-list-static-list) al control de pestañas, ya sea a través de una colección (lista estática) o un puntero JSON a una lista json ("$ref"). Los iconos asociados a los elementos de la lista en el editor de listas se mostrarán en el control de pestañas.

### Utilizar un array Text

Puede crear un array Texto que contenga los nombres de cada página del formulario. Este código debe ejecutarse antes de que el formulario se presente al usuario. Por ejemplo, podría colocar el código en el método del objeto del control de la pestaña y ejecutarlo cuando se produzca el evento `On Load`.

```4d
 ARRAY TEXT(arrPages;3)
 arrPages{1}:="Name"
 arrPages{2}:="Address"
 arrPages{3}:="Notes"  
```

> También puede almacenar los nombres de las páginas en una lista jerárquica y utilizar el comando [LIST TO ARRAY](https://doc.4d.com/4dv19/help/command/en/page288.html) para cargar los valores en el array.

## Funcionalidades de Goto page

### Comando FORM GOTO PAGE

Puede utilizar el comando [`FORM GOTO PAGE`](https://doc.4d.com/4dv19/help/command/en/page247.html) en el método del control de tabulación:

```4d
FORM GOTO PAGE(arrPages)
```

El comando se ejecuta cuando se produce el evento [`On Clicked`](Events/onClicked.md). A continuación, debe borrar el array cuando se produzca el evento [`On Unload`](Events/onUnload.md).

He aquí un ejemplo de método objeto:

```4d
 Case of
    :(Form event=On Load)
       LIST TO ARRAY("Tab Labels";arrPages)
    :(Form event=On Clicked)
       FORM GOTO PAGE(arrPages)
    :(Form event=On Unload)
       CLEAR VARIABLE(arrPages)
 End case
```

### Acción Goto Page

Cuando se asigna la acción [acción estándar](properties_Action.md#standard-action) `gotoPage` a un control de pestañas, 4D mostrará automáticamente la página del formulario que corresponde al número de la pestaña que está seleccionada.

Por ejemplo, si el usuario selecciona la tercera pestaña, 4D mostrará la página 3 del formulario actual (si existe).

## Propiedades soportadas

[Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Lista de opciones](properties_DataSource.md#choice-list-static-list) - [Clase](properties_Object.md#css-class) - [Tipo de expresión](properties_Object.md#expression-type) - [Fuente](properties_Text.md#font) - [Tamaño de fuente](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Cursiva](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Nombre del objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Guardar valor](properties_Object.md#save-value) - [Acción estándar](properties_Action.md#standard-action) - [Dirección del control de pestañas](properties_Appearance.md#tab-control-direction) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)
