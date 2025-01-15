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
- Los topes de los separadores se calculan para que los objetos desplazados permanezcan totalmente visibles en el formulario o no pasen por debajo/al lado de otro separador. Cuando la propiedad [Empujador](properties_ResizingOptions.md#pusher) está asociada a un separador, su movimiento hacia la derecha o hacia abajo no encuentra ningún tope.
- Si se redimensiona un formulario mediante un separador, las nuevas dimensiones del formulario se guardan sólo mientras se muestra el formulario. Una vez que se cierra un formulario, se restablecen las dimensiones iniciales.

Una vez insertado, el separador aparece como una línea. Puede modificar su [estilo de borde](properties_BackgroundAndBorder.md#border-line-style-dotted-line-type) para obtener una línea más fina o [cambiar su color](properties_BackgroundAndBorder.md#line-color).

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

[Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Fondo](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Altura](properties_CoordinatesAndSizing.md#height) - [Ayuda](properties_Help.md#help-tip) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Color de línea](properties_BackgroundAndBorder.md#line-color) - [Nombre del objeto](properties_Object.md#nombre_objeto) - [Empujador](properties_ResizingOptions.md#empujador) - [Derecha](properties_CoordinatesAndSizing.md#derecha) - [Arriba](properties_CoordinatesAndSizing.md#arriba) - [Tipo](properties_Object.md#type) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Variable o expresión](properties_Object.md#variable-or-expression) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)

## Interacción con las propiedades de los objetos vecinos

En un formulario, los separadores interactúan con los objetos que están a su alrededor según las opciones de cambio de tamaño de estos objetos:

| Opciones de redimensionamiento de los objetos | Objeto(s) por encima de un separador horizontal o a la izquierda de un separador vertical (1)                             | Objeto(s) debajo de un separador horizontal _no empujador_ o a la derecha de un separador vertical _no empujador_                                                                                                                               | Objeto(s) debajo de un separador horizontal _Empujador_ o a la derecha de un separador vertical _Empujador_                                                                                  |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Ninguno                                       | Permanece como está                                                                                                                                             | Se desplazan con el separador (la posición respecto al separador no se modifica) hasta la siguiente parada. El tope cuando se mueve hacia abajo o hacia la derecha es el borde de la ventana, u otro separador. | Se desplazan con el separador (la posición respecto al separador no se modifica) indefinidamente. No se aplica ninguna parada ( ver el siguiente párrafo) |
| Redimensionamiento                            | Conservan la(s) posición(es) original(es), pero se redimensionan según la nueva posición del separador |                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                 |
| Mover                                         | Se mueven con el separador                                                                                                                                      |                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                 |

_(1) No puede arrastrar el separador más allá del lado derecho (horizontal) o inferior (vertical) de un objeto situado en esta posición._

> Un objeto completamente contenido en el rectángulo que define el separador se mueve al mismo tiempo que el separador.

## Gestión programada de los separadores

Puede asociar un método objeto a un separador y será llamado con el evento `On Clicked` durante todo el movimiento.

A cada separador se le asocia una [variable](properties_Object.md#variable-or-expression) de tipo _Longint_. Esta variable se puede utilizar en su objeto y/o métodos de formulario. Su valor indica la posición actual del separador, en píxeles, en relación con su posición inicial.

- Si el valor es negativo: el separador se ha movido hacia arriba o hacia la izquierda,
- Si el valor es positivo: el separador se ha movido hacia el fondo o hacia la derecha,
- Si el valor es 0: el separador se ha movido a su posición original.

También puede mover el separador por programación: sólo tiene que definir el valor de la variable asociada. Por ejemplo, si un separador vertical está asociado a una variable llamada `split1`, y si se ejecuta la siguiente sentencia:`split1:=-10`, el separador se moverá 10 píxeles a la izquierda - como si el usuario lo hiciera manualmente. El movimiento se realiza realmente al final de la ejecución del método del formulario u objeto que contiene la instrucción.
