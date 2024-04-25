---
id: splitters
title: Separador
---

Un separador divide un formulario en dos áreas, permitiendo al usuario ampliar y reducir las áreas moviendo el separador hacia un lado u otro. Un separador puede ser horizontal o vertical. El separador tiene en cuenta las propiedades de redimensionamiento de cada objeto, lo que significa que puede personalizar completamente la interfaz de su aplicación. Un separador puede ser o no un "empujador."

Los separadores se utilizan, por ejemplo, en los formularios de salida para poder cambiar el tamaño de las columnas:

![](../assets/en/FormObjects/split1.png)

Algunas de las características generales del separador:

- Puede colocar tantos separadores como desee en todo tipo de formulario y utilizar una mezcla de separadores horizontales y verticales en el mismo formulario.
- Un separador puede cruzar (superponer) un objeto. Este objeto cambiará de tamaño cuando se mueva el separador.
- Los topes de los separadores se calculan para que los objetos desplazados permanezcan totalmente visibles en el formulario o no pasen por debajo/al lado de otro separador. When the [Pusher](properties_ResizingOptions.md#pusher) property is associated with a splitter, its movement to the right or downward does not encounter any stops.
- Si se redimensiona un formulario mediante un separador, las nuevas dimensiones del formulario se guardan sólo mientras se muestra el formulario. Una vez que se cierra un formulario, se restablecen las dimensiones iniciales.

Una vez insertado, el separador aparece como una línea. You can modify its [border style](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) to obtain a thinner line or [change its color](properties_BackgroundAndBorder.md##font-color-line-color).

#### Ejemplo JSON:

```4d
"mySplitter": {
	"type": "splitter",
	"left": 60,  
	"top": 160,   
	"width": 100,  
	"height": 20,  
	"splitterMode": "move"  //pusher
	}
```

### Propiedades soportadas

[Border Line Style](properties_BackgroundAndBorder.md##border-line-style-dotted-line-type) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md##font-color-line-color) - [Object Name](properties_Object.md#object-name) - [Pusher](properties_ResizingOptions.md#pusher) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Variable or Expression](properties_Object.md#variable-or-expression) -  [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Interacción con las propiedades de los objetos vecinos

En un formulario, los separadores interactúan con los objetos que están a su alrededor según las opciones de cambio de tamaño de estos objetos:

| Opciones de redimensionamiento de los objetos | Objeto(s) por encima de un separador horizontal o a la izquierda de un separador vertical (1)                             | Object(s) below an horizontal _non-Pusher_ splitter or to the right of a vertical _non-Pusher_ splitter                                                                                                                                         | Object(s) below an horizontal _Pusher_ splitter or to the right of a vertical _Pusher_ splitter                                                                                              |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ninguno                                       | Permanece como está                                                                                                                                             | Se desplazan con el separador (la posición respecto al separador no se modifica) hasta la siguiente parada. El tope cuando se mueve hacia abajo o hacia la derecha es el borde de la ventana, u otro separador. | Se desplazan con el separador (la posición respecto al separador no se modifica) indefinidamente. No se aplica ninguna parada ( ver el siguiente párrafo) |
| Redimensionamiento                            | Conservan la(s) posición(es) original(es), pero se redimensionan según la nueva posición del separador |                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                 |
| Mover                                         | Se mueven con el separador                                                                                                                                      |                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                 |

_(1) You cannot drag the splitter past the right (horizontal) or bottom (vertical) side of an object located in this position._

> Un objeto completamente contenido en el rectángulo que define el separador se mueve al mismo tiempo que el separador.

## Gestión programada de los separadores

You can associate an object method with a splitter and it will be called with the `On Clicked` event throughout the entire movement.

A [variable](properties_Object.md#variable-or-expression) of the _Longint_ type is associated with each splitter. Esta variable se puede utilizar en su objeto y/o métodos de formulario. Su valor indica la posición actual del separador, en píxeles, en relación con su posición inicial.

- Si el valor es negativo: el separador se ha movido hacia arriba o hacia la izquierda,
- Si el valor es positivo: el separador se ha movido hacia el fondo o hacia la derecha,
- Si el valor es 0: el separador se ha movido a su posición original.

También puede mover el separador por programación: sólo tiene que definir el valor de la variable asociada. For example, if a vertical splitter is associated with a variable named `split1`, and if you execute the following statement: `split1:=-10`, the splitter will be moved 10 pixels to the left — as if the user did it manually. El movimiento se realiza realmente al final de la ejecución del método del formulario u objeto que contiene la instrucción.
