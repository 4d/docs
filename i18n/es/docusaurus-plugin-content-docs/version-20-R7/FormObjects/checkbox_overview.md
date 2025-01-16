---
id: checkboxOverview
title: Casilla a seleccionar
---

Una casilla de selección es un tipo de botón utilizado para introducir o mostrar datos binarios (verdadero-falso). Fundamentalmente, está marcado o desmarcado, pero se puede definir un [tercer estado](#three-states-check-box).

![](../assets/en/FormObjects/checkbox.png)

Las casillas de selección se controlan por métodos o [acciones estándar](#using-a-standard-action). El método asociado a ella se ejecuta cuando se selecciona la casilla de selección. Como todos los botones, la variable de la casilla de selección se pone en 0 cuando se abre el formulario por primera vez.

Una casilla de selección muestra el texto junto a un pequeño cuadrado. Este texto se define en el área [Título](properties_Object.md#title) del tema "Objetos" de la Lista de propiedades. Para introducir en esta área un título en forma de referencia XLIFF (ver [Anexo B: arquitectura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

## Utilizar casillas de selección

Una casilla de selección puede asociarse a una [variable o expresión](properties_Object.md#variable-or-expression) de tipo entero o booleano.

- **entero:** si la casilla está marcada, la variable tiene el valor 1. Cuando no se marca, tiene el valor 0. Si la casilla de selección está en tercer estado (ver más abajo), tiene el valor 2.
- **booleano:** si la casilla está marcada, la variable tiene el valor `True`. Cuando no se marca, toma el valor `False`.

Una parte o todas las casillas de selección de un formulario pueden estar marcadas o desmarcadas. Las casillas de selección múltiples permiten al usuario seleccionar varias opciones.

### Casilla de selección de tres estados

Los objetos casilla de selección con el [estilo de botón](checkbox_overview.md#regular) [Normal](checkbox_overview.md#flat) y [Plano](properties_TextAndPicture.md#button-style) aceptan un tercer estado. Este tercer estado es un estado intermedio, que generalmente se utiliza para fines de visualización. Por ejemplo, permite indicar que una propiedad está presente en una selección de objetos, pero no en cada objeto de la selección.

![](../assets/en/FormObjects/checkbox_3states.png)

Para activar este tercer estado, debe seleccionar la propiedad [Tres estados](properties_Display.md#three-states).

Esta propiedad solo está disponible para casillas de selección regulares y planas asociadas a [variables o expresiones](properties_Object.md#variable-o-expresion) numéricas — las casillas de selección para expresiones booleanas no pueden utilizar la propiedad [Tres Estados](properties_Display.md#tres-estados) (una expresión booleana no puede estar en un estado intermedio).

La variable asociada a la casilla de selección devuelve el valor 2 cuando la casilla está en el tercer estado.

> En el modo de entrada, las casillas de selección de los tres estados muestran cada estado de forma secuencial, en el siguiente orden: sin marcar / marcado / intermedio / sin marcar, etc. El estado intermedio no suele ser muy útil en el modo de entrada; en el código, basta con forzar el valor de la variable a 0 cuando toma el valor de 2 para pasar directamente del estado comprobado al estado no comprobado.

## Utilizar una acción estándar

Puede asignar una [acción estándar](properties_Action.md#standard-action) a una casilla de selección para manejar los atributos de las áreas de texto. Por ejemplo, si asigna la acción estándar `fontBold`, en ejecución la casilla de selección gestionará el atributo "negrita" del texto seleccionado en el área actual.

Sólo las acciones que pueden representar un estado verdadero/falso (acciones "marcables") son soportadas por este objeto:

| Acciones soportadas                 | Condiciones de uso (si las hay) |
| ----------------------------------- | -------------------------------------------------- |
| avoidPageBreakInsideEnabled         | Área 4D Write Pro únicamente                       |
| fontItalic                          |                                                    |
| fontBold                            |                                                    |
| fontLinethrough                     |                                                    |
| fontSubscript                       | Área 4D Write Pro únicamente                       |
| fontSuperscript                     | Área 4D Write Pro únicamente                       |
| fontUnderline                       |                                                    |
| font/showDialog                     | Mac únicamente                                     |
| htmlWYSIWIGEnabled                  | Área 4D Write Pro únicamente                       |
| section/differentFirstPage          | Área 4D Write Pro únicamente                       |
| section/differentLeftRightPages     | Área 4D Write Pro únicamente                       |
| spell/autoCorrectionEnabled         |                                                    |
| spell/autoDashSubstitutionsEnabled  | Mac únicamente                                     |
| spell/autoLanguageEnabled           | Mac únicamente                                     |
| spell/autoQuoteSubstitutionsEnabled | Mac únicamente                                     |
| spell/autoSubstitutionsEnabled      |                                                    |
| spell/enabled                       |                                                    |
| spell/grammarEnabled                | Mac únicamente                                     |
| spell/showDialog                    | Mac únicamente                                     |
| spell/visibleSubstitutions          |                                                    |
| visibleBackground                   | Área 4D Write Pro únicamente                       |
| visibleFooters                      | Área 4D Write Pro únicamente                       |
| visibleHeaders                      | Área 4D Write Pro únicamente                       |
| visibleHiddenChars                  | Área 4D Write Pro únicamente                       |
| visibleHorizontalRuler              | Área 4D Write Pro únicamente                       |
| visiblePageFrames                   | Área 4D Write Pro únicamente                       |
| visibleReferences                   |                                                    |
| widowAndOrphanControlEnabled        | Área 4D Write Pro únicamente                       |

Para información detallada sobre estas acciones, consulte la sección [Acciones estándar](properties_Action.md#standard-action).

## Estilos de botones casillas de selección

Las casillas de selección utilizan [los estilos de botón](properties_TextAndPicture.md#button-style) para controlar la apariencia general de una casilla de selección, así como sus posibles propiedades. Es posible aplicar diferentes estilos predefinidos a las casillas de selección. Se puede obtener un gran número de variaciones combinando estas propiedades/comportamientos.

Con la excepción de las [propiedades-disponibles](#supported-properties), muchos objetos casilla de selección son *estructuralmente* idénticos. La diferencia está en el tratamiento de sus variables asociadas.

4D ofrece casillas de selección en los siguientes estilos de botón predefinidos:

### Clásico

El estilo Clásico de botón casilla de selección corresponde a un sistema de casilla de selección estándar (\*es decir, \*, un rectángulo con un título descriptivo):

![](../assets/en/FormObjects/checkbox_regular.png)

#### Ejemplo JSON:

```
	"myCheckBox": {
		"type": "checkbox",	
		"style":"regular",
		"text": "Cancel",	
		"action": "Cancel", 	
		"left": 60,			
		"top": 160,		
		"width": 100,			
		"height": 20		
		"dataSourceTypeHint":"boolean"
		}
```

### Plano

El estilo plano del botón casilla de selección tiene una apariencia minimalista. La naturaleza gráfica del estilo Flat es especialmente útil para los formularios que se van a imprimir.

![](../assets/en/FormObjects/checkbox_flat.png)

#### Ejemplo JSON:

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"flat",
			"text": "Cancel",	
			"action": "cancel", 
			"left": 60,		
 			"top": 160,	
 			"width": 100,			
			"height": 20			
			}
```

### Botón barra de herramientas

El estilo del botón barra de herramientas está destinado principalmente a la integración en una barra de herramientas.

El estilo del botón Barra de herramientas tiene un fondo transparente con un título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Ejemplo con estados seleccionado / no seleccionado / subrayado:

![](../assets/en/FormObjects/checkbox_toolbar.png)

#### Ejemplo JSON:

```
	"myCheckBox": {
                "type": "checkbox",
                "style":"toolbar",	
                "text": "Checkbox",
				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
                "left": 60,	
                "top": 160,	
                "width": 100,					
                "height": 20					
                }
```

### Bevel

El estilo del botón casilla de selección Bevel combina la apariencia del estilo de botón [Clásico ](#regular) (*es decir*, un rectángulo con un título descriptivo) con el comportamiento del estilo del botón [Barra de herramientas](#toolbar-button).

El estilo de botón Bevel redondeado tiene un fondo gris claro con un título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Ejemplo con estados seleccionado / no seleccionado / subrayado:

![](../assets/en/FormObjects/checkbox_bevel.png)

#### Ejemplo JSON:

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"bevel",
                "text": "Checkbox",	 
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
              	"left": 60,	
                "top": 160,	
                "width": 100,				
                "height": 20				
                }
```

### Bevel redondeado

El estilo del botón de la casilla de selección Bevel redondeado es casi idéntico al estilo del botón [Bevel](#bevel), excepto que, dependiendo del sistema operativo, las esquinas del botón pueden ser redondeadas. Al igual que el estilo de botón Bevel, el estilo del botón Bevel redondeado combina la apariencia del estilo del botón [Clásico](#regular) con el comportamiento del estilo del botón [Barra de herramientas](#toolbar-button).

El botón Bevel tiene un fondo gris claro con un título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Ejemplo en macOS:

![](../assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> En Windows, el estilo de botón Bevel redondeado es idéntico al estilo de botón [Bevel](#bevel).

#### Ejemplo JSON:

```4d
	"myCheckBox": {
                "type": "checkbox",	
                "style":"roundedBevel",	 
                "text": "Checkbox",	
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 
                "left": 60,	
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
```

### OS X Gradient

El estilo del botón casilla de selección OS X Gradient es casi idéntico al estilo del botón [Bevel](#bevel). Al igual que el estilo de botón Bevel, el estilo del botón OS X Gradient combina la apariencia del estilo del botón [Clásico](#regular) con el comportamiento del estilo del botón [Barra de herramientas](#toolbar-button).

El estilo del botón Gradient OS X tiene un fondo gris claro con un título y se puede mostrar como un botón de sistema de dos tonos en macOS. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

![](../assets/en/FormObjects/checkbox_osxgradient_mac.png)

> En Windows, este estilo de botón casilla de selección es idéntico al estilo de botón [Bevel](#bevel).

#### Ejemplo JSON:

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"gradientBevel", 
			"text": "Checkbox",	
			"icon": "/RESOURCES/File.png",
			"iconFrames": 4
			"left": 60,		
			"top": 160,		
			"width": 100,				
			"height": 20				
           }
```

### OS X Texturizado

El estilo de botón OS X Textured es similar al estilo del botón [Bevel](#bevel) pero con un tamaño menor (el tamaño máximo es el de un botón de sistema estándar de macOS). Al igual que el estilo de botón Bevel, el estilo del botón OS X Textured combina la apariencia del estilo del botón [Clásico](#regular) con el comportamiento del estilo del botón [Barra de herramientas](#toolbar-button).

Por defecto, el estilo del botón OS X Textured aparece como:

- *Windows* - un botón sistema estándar con un fondo azul claro con un título en el centro.

![](../assets/en/FormObjects/checkbox_osxtextured.png)

- *macOS* - un botón de sistema estándar. Su altura está predefinida: no es posible ampliarla o reducirla.

![](../assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### Ejemplo JSON:

```
	"myCheckBox": {
			"type": "checkbox",	
			"style":"texturedBevel", 
			"text": "Checkbox",	
			"left": 60,	
			"top": 160,	
			"width": 100,					
			"height": 20					
			}
```

### Office XP

El estilo de botón Office XP combina la apariencia del estilo del botón [Clásico](#regular) con el comportamiento del estilo del [Botón barra de herramientas](#toolbar-button).

Los colores (resaltado y fondo) de una casilla de selección con el estilo de botón Office XP se basan en los colores del sistema. La apariencia de la casilla de selección puede ser diferente cuando el cursor pasa por encima, dependiendo del sistema operativo:

- *Windows* - su fondo sólo aparece cuando el ratón pasa por encima. Ejemplo con estados seleccionado / no seleccionado / subrayado:

![](../assets/en/FormObjects/checkbox_officexp.png)

- *macOS* - su fondo se muestra siempre. Ejemplo con estados seleccionado / no seleccionado:

![](../assets/en/FormObjects/checkbox_officexp_mac.png)

#### Ejemplo JSON:

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"office",
                "text": "Checkbox",	 
                "action": "fontBold",
 				"icon": "/RESOURCES/File.png", 
				"iconFrames": 4 	
               "left": 60,	
                "top": 160,		
                "width": 100,			
                "height": 20			
                }
```

### Contraer/Desplegar

Este estilo de botón de casilla de selección se puede utilizar para añadir un icono estándar de contraer/expandir. Estos iconos se utilizan de forma nativa en las listas jerárquicas.

- *Windows* - el icono se ve como un [+] o un [-]

![](../assets/en/FormObjects/checkbox_collapse.png)

- *macOS* - se ve como un triángulo que apunta hacia la derecha o hacia abajo.

![](../assets/en/FormObjects/checkbox_collapse_mac.png)

:::info

El estilo Contraer/Desplegar se denomina "disclosure" en la [gramática JSON del estilo de botón](properties_TextAndPicture.md#button-style).

:::

#### Ejemplo JSON:

```
	"myCheckBox": {
                "type": "checkbox",	
                "style":"disclosure",
				"method": "m_collapse",
				"left": 60,	
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
```

### Divulgación

En macOS y Windows, una casilla de selección con el estilo de botón "Divulgación" aparece como un botón de información estándar, normalmente utilizado para mostrar/ocultar información adicional. Cuando se utiliza como botón radio, el símbolo del botón apunta hacia abajo con el valor 0 y hacia arriba con el valor 1.

- *Windows*

  ![](../assets/en/FormObjects/checkbox_disclosure.png)

- *macOS*

  ![](../assets/en/FormObjects/checkbox_disclosure_mac.png)

:::info

El estilo Disclosure se denomina "roundedDisclosure" en la [gramática JSON del estilo de botón](properties_TextAndPicture.md#button-style).

:::

#### Ejemplo JSON:

```
	"myCheckBox": {
                "type": "checkbox",		
                "style":"roundedDisclosure",	
				"method": "m_disclose",
                "left": 60,		
                "top": 160,	
                "width": 100,			
                "height": 20			
                }
```

### Personalizado

El estilo del botón Personalizado acepta una imagen de fondo personalizada y permite gestionar propiedades específicas:

- [Ruta de acceso al fondo de pantalla](properties_TextAndPicture.md#background-pathname)
- [Desplazamiento del icono](properties_TextAndPicture.md#icon-offset)
- [Margen horizontal](properties_TextAndPicture.md#horizontal-margin) y [Margen vertical](properties_TextAndPicture.md#vertical-margin)

Generalmente está asociado con una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states), que puede ser usada en conjunto con una [imagen de fondo](properties_TextAndPicture.md#background-pathname) [4 estados](properties_TextAndPicture.md#number-of-states).

#### Ejemplo JSON:

```
	"myCheckbox": {
		"type": "checkbox",
		"style":"custom",
		"text": "OK", 
		"icon": "/RESOURCES/smiley.jpg", 
		"iconFrame": 4, 
		"customBackgroundPicture": "/RESOURCES/paper.jpg", 
		"iconOffset": 5, //desplazamiento del icono personalizado al hacer clic
		"left": 60,	
		"top": 160,	
		"width": 100,		
		"height": 20,
		"customBorderX": 20,
		"customBorderY": 5
		}
```

## Propiedades soportadas

Todas las casillas de selección comparten un mismo conjunto de propiedades básicas:

[Negrita](properties_Text.md#bold) - [Abajo](properties_CoordinatesAndSizing.md#bottom) - [Estilo de botón](properties_TextAndPicture.md#button-style) - [Clase](properties_Object.md#css-class) - [Editable](properties_Entry.md#enterable) - [Tipo de expresión](properties_Object.md#expression-type) - [Enfocable](properties_Entry.md#focusable) - [Fuente](properties_Text.md#font) - [Color de fuente](properties_Text.md#font-color) - [Tamaño de fuente](properties_Text.md#font-size) - [Alto](properties_CoordinatesAndSizing.md#height) - [Mensaje de ayuda](properties_Help.md#help-tip) - [Alineación horizontal](properties_Text.md#horizontal-alignment)(1) - [Tamaño horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Título de la imagen](properties_TextAndPicture.md#image-hugs-title)(2) - [Itálica](properties_Text.md#italic) - [Izquierda](properties_CoordinatesAndSizing.md#left) - [Número de estados](properties_TextAndPicture.md#number-of-states)(2) - [Nombre del objeto](properties_Object.md#nombre_objeto) - [Ruta de la imagen](properties_TextAndPicture.md#nombre_de_imagen)(2) - [Derecha](properties_CoordinatesAndSizing.md#right) - [Guardar valor](properties_Object.md#save-value) - [Acceso directo](properties_Entry.md#shortcut) - [Acción estándar](properties_Action.md#standard-action) - [Título](properties_Object.md#title) - [Posición del título/imagen](properties_TextAndPicture.md#titlepicture-position)(2) - [Arriba](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Subrayado](properties_Text.md#underline) - [Variable o expresión](properties_Object.md#variable-o-expresión) - [Tamaño vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidad](properties_Display.md#visibilidad) - [Ancho](properties_CoordinatesAndSizing.md#ancho)

> (1) No soportado por los estilos [Regular](#regular) y [Flat](#flat).<br/>
> (2) No soportado por los estilos [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) y [Collapse/Expand](#collapseexpanded).

Existen propiedades específicas adicionales, dependiendo del [estilo-de-botón](#button-styles):

- Personalizado: [Ruta de fondo](properties_TextAndPicture.md#background-pathname) - [Margen horizontal](properties_TextAndPicture.md#horizontalmargin) - [Desplazamiento del ícono](properties_TextAndPicture.md#icon-offset) - [Margen vertical](properties_TextAndPicture.md#verticalmargin)
- Plana, Regular: [Tres Estados](properties_Display.md#three-states)
