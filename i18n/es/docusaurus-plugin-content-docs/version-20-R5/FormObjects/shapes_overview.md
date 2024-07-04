---
id: shapesOverview
title: Formas
---

Las formas son [objetos estáticos](formObjects_overview.md#active-and-static-objects) que pueden añadirse a los formularios 4D.

Se ofrecen las siguientes formas básicas:

- rectángulos
- líneas
- óvalos

## Rectángulo

Un rectángulo estático es un objeto decorativo para los formularios. Los rectángulos se limitan a formas cuadradas.

El diseño de los rectángulos se controla a través de muchas propiedades (color, grosor de línea, patrón, etc.). En concreto, se puede definir la [redondez](properties_CoordinatesAndSizing.md#corner-radius) de sus esquinas.

![](../assets/en/FormObjects/shapes_rectangle2.png)

#### Ejemplo JSON:

```4d
	"myRectangle": {
		"type": "rectangle",	//define the type of object
		"left": 60,				//left position on the form  
		"top": 160,				//top position on the form 
		"width": 100,			//width of the object
		"height": 20,			//height of the object
		"borderRadius": 20		//define the roundness of the corners
                }
```

#### Propiedades soportadas

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Corner radius](properties_CoordinatesAndSizing.md#corner-radius) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Línea

Una línea estática es un objeto decorativo para los formularios, trazado entre dos tramas. Las líneas pueden ser horizontales, verticales o de cualquier forma de ángulo.

El diseño de las líneas se controla a través de muchas propiedades (color, grosor de línea, etc.).

### propiedad startPoint

La propiedad JSON `startPoint` define a partir de qué coordenada dibujar la línea (ver ejemplo).

> la propiedad `startPoint` no está expuesta en la lista de propiedades, donde la dirección de dibujo de la línea es visible.

#### Ejemplos JSON:

```
	"myLine": {
		"type": "line",	               
		"left": 20,
		"top": 40,
		"width": 100,
		"height": 80,
		"startPoint": "topLeft", //first direction
		"strokeDashArray": "6 2" //dashed
		}
```

Resultado:
![](../assets/en/FormObjects/shape_line1.png)

```
	"myLine": {
		"type": "line",	               
		"left": 20,
		"top": 40,
		"width": 100,
		"height": 80,
		"startPoint": "bottomLeft", //2nd direction
		"strokeDashArray": "6 2" //dashed
		}
```

Resultado:
![](../assets/en/FormObjects/shape_line2.png)

#### Propiedades soportadas

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [startPoint](#startpoint-property) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

## Óvalo

Un óvalo estático es un objeto decorativo para los formularios. Los objetos ovalados pueden utilizarse para dibujar formas circulares (cuando las propiedades [ancho](properties_CoordinatesAndSizing.md#width) y [alto](properties_CoordinatesAndSizing.md#height) son iguales).

![](../assets/en/FormObjects/shape_oval.png)

#### Ejemplo JSON:

```4d
	"myOval": {
		"type": "oval",		//define the type of object
		"left": 60,			//left position on the form  
		"top": 160,			//top position on the form 
		"width": 100,		//width of the object
		"height": 20,		//height of the object
		"fill": "blue"		//define the background color
                }
```

#### Propiedades soportadas

[Bottom](properties_CoordinatesAndSizing.md#bottom) - [Class](properties_Object.md#css-class) - [Dotted Line Type](properties_BackgroundAndBorder.md#dotted-line-type) - [Fill Color](properties_BackgroundAndBorder.md#background-color-fill-color) - [Height](properties_CoordinatesAndSizing.md#height) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Left](properties_CoordinatesAndSizing.md#left) - [Line Color](properties_BackgroundAndBorder.md#line-color) - [Line Width](properties_BackgroundAndBorder.md#line-width) - [Object Name](properties_Object.md#object-name) - [Right](properties_CoordinatesAndSizing.md#right) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)
