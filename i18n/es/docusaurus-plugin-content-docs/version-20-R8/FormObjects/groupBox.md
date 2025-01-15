---
id: groupBox
title: Área de grupo
---

Un área de grupo es un objeto estático que permite ensamblar visualmente varios objetos de formulario:

![](../assets/en/FormObjects/groupBox.png)

> El nombre de una caja de grupo es texto estático; puede utilizar una referencia "localizable" como con cualquier etiqueta 4D (ver [Utilización de referencias en texto estático](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html) y la sección _Arquitectura XLIFF_ en Referencia de Diseño 4D.

#### Ejemplo JSON:

```
	"myGroup": {
		"type": "groupBox",	
		"title": "Employee Info"
		"left": 60,
		"top": 160,
		"width": 100,
		"height": 20
		}
```

#### Propiedades soportadas

[Abajo](properties_CoordinatesAndSizing.md#bottom) - [Clase CSS](properties_Object.md#css-class) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Alineación horizontal](properties_Text.md#horizontal-alignment) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Nombre del objeto](properties_Object.md#object-name) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Título](properties_Object.md#title) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)
