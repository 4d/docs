---
id: text
title: Text
---

A text object allows you to display static written content (*e.g.*, instructions, titles, labels, etc.) en un formulario. Estas áreas de texto estáticas pueden convertirse en dinámicas cuando incluyen referencias dinámicas. Para más información, consulte [Uso de referencias en textos estáticos](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-references-in-static-text.300-4163725.en.html).

#### Ejemplo JSON:

```4d
	"myText": {
                "type": "text",
                "text": "Hello World!",
                "textAlign": "center",
                "left": 60,			
                "top": 160,	
                "width": 100,
                "height": 20,
                "stroke": "#ff0000"		//color del texto
                "fontWeight": "bold"
                }
```

## Rotación

4D le permite rotar las áreas de texto en sus formularios utilizando la propiedad [Orientación](properties_Text.md#orientation).

![](../assets/en/FormObjects/staticText.png)

> La rotación del texto puede definirse para un proceso utilizando el comando de lenguaje `OBJECT SET TEXT ORIENTATION`.

Una vez que un texto está rotado, puede seguir cambiando su tamaño o posición, así como todas sus propiedades. Tenga en cuenta que las propiedades de alto y ancho del área de texto no dependen de su orientación:

![](../assets/en/FormObjects/staticText2.png)

- Si el objeto se redimensiona en la dirección A, se modifica su [ancho](properties_CoordinatesAndSizing.md#width);
- Si el objeto se redimensiona en la dirección C, se modifica su [alto](properties_CoordinatesAndSizing.md#height);
- Si el objeto se redimensiona en la dirección B, se modifican tanto su [ancho](properties_CoordinatesAndSizing.md#width) como su [alto](properties_CoordinatesAndSizing.md#height).

## Propiedades soportadas

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                           |
| ----------- | ---------------------------------------- |
| 19 R7       | Soporte de la propiedad Radio de esquina |

</details>

[Negrita](properties_Text.md#bold) - [Estilo de línea de borde](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Clase](properties_Object.md#css-class) - [Radio de la esquina](properties_CoordinatesAndSizing.md#corner-radius) - [Color de relleno](properties_BackgroundAndBorder.md#background-color--fill-color) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Alineación horizontal](properties_Text.md#horizontal-alignment) - [Dimensionamiento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Cursiva](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Nombre del objeto](properties_Object.md#object-name) - [Orientación](properties_Text.md#orientation) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Título](properties_Object.md#title) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Dimensionamiento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibility) - [Ancho](properties_CoordinatesAndSizing.md#width)
