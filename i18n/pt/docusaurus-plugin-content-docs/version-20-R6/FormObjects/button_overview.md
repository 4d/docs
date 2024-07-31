---
id: buttonOverview
title: Botão
---

Un botón es un objeto activo al que se le puede asignar una acción (*por ejemplo*, una tarea de base de datos o una función de interfaz) para que la realice cuando un usuario haga clic en él.

![](../assets/en/FormObjects/button_regular.png)

Buttons can fulfill a variety of roles, depending on their style and the action assigned to it. For example, buttons could lead a user through a questionnaire or form to complete, or to make choices. Depending on its settings, a button may be designed to be clicked only once and execute a command, while others may require the user to click more than once to receive the desired result.

## Manipulação de botões

Las acciones asignadas a los botones pueden provenir de [acciones estándar](properties_Action.md#standard-action) o de métodos de objetos personalizados. Examples of typical actions include letting the user accept, cancel, or delete records, copy or paste data, move from page to page in a multi-page form, open, delete, or add records in a subform, handle font attributes in text areas, etc.

Buttons with standard actions are dimmed when appropriate during form execution. Por ejemplo, si se muestra el primer registro de una tabla, un botón con la acción estándar `firstRecord` aparecería atenuado.

If you want a button to perform an action that's not available as a standard action, leave the standard action field empty and write an object method to specify the button’s action. Para más información sobre los métodos de objetos y cómo crearlos y asociarlos, ver [Uso de los métodos objeto](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-methods.300-4163733.en.html).
Normalmente, se activaría el evento `On Clicked` y el método se ejecutaría sólo cuando se presiona el botón. Pode associar um método a qualquer botão.

La [variable](properties_Object.md#variable-or-expression) asociada a un botón se define automáticamente a **0** cuando el formulario se ejecuta por primera vez en modo Diseño o Aplicación. Cuando el usuario hace clic en un botón, su variable se define como **1**.

> A um botão pode ser atribuída uma ação padrão e um método. In this case, if the button is not disabled by the standard action, the method is executed before the standard action.

## Estilos de botões

Os estilos dos botões controlam a aparência geral de um botão, bem como as suas propriedades disponíveis. É possível aplicar diferentes estilos pré-definidos a botões ou associar-lhes menus pop-up. Um grande número de variações podem ser obtidas combinando essas propriedades/comportamentos.

Con la excepción de las [propiedades-disponibles](#supported-properties), muchos objetos botón son *estructuralmente* idénticos. A diferença é no processamento das variáveis associadas.

4D fornece botões nos seguintes estilos pré-definidos:

### Clássico

El estilo de botón Clásico es un botón sistema estándar (*es decir,*, un rectángulo con una etiqueta descriptiva) que ejecuta el código cuando el usuario hace clic en él.

![](../assets/en/FormObjects/button_regular.png)

By default, the Regular style has a light gray background with a label in the center. When the cursor hovers over the Regular button style, the border and background color change to demonstrate that it has the focus. In addition to initiating code execution, the Regular button style mimics a mechanical button by quickly changing background color when being clicked.

#### JSON Exemplo

```4d

	"myButton": {
		"type": "button",	//define the type of object
		"style":"regular",	//define the style of the button
		"defaultButton":"true"	//define button as the default choice
		"text": "OK",	//text to appear on the button
		"action": "Cancel", //action to be be performed 
		"left": 60,	 //left position on the form  
		"top": 160, //top position on the form 
	  	"width": 100,  //width of the button
		"height": 20 //height of the button
		}
```

Sólo los estilos Clásico y Plano ofrecen la propiedad [Botón por defecto](properties_Appearance.md#default-button).

### Plano

El estilo de botón Plano es un botón sistema estándar (\*es decir, \*, un rectángulo con una etiqueta descriptiva) que ejecuta código cuando un usuario hace clic en él.

![](../assets/en/FormObjects/button_flat.png)

By default, the Flat style has a white background with a label in the center, rounded corners, and a minimalist appearance. The Flat button style's graphic nature is particularly useful for forms that will be printed.

#### JSON Exemplo

```4d

	"myButton": {
                "type": "button",	
                "style":"flat",	
                "defaultButton":"true"	
                "text": "OK",	
                "action": "Cancel", 
                "left": 60,			
                "top": 160,			
                "width": 100,	
                "height": 20	
                }
```

Sólo los estilos Clásico y Plano ofrecen la propiedad [Botón por defecto](properties_Appearance.md#default-button).

### Barra de ferramentas

The Toolbar button style is primarily intended for integration in a toolbar. It includes the option to add a pop-up menu (indicated by an inverted triangle) which is generally used to display additional choices for the user to select.

By default, the Toolbar style has a transparent background with a label in the center. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- *Windows* - el botón se resalta cuando utiliza la propiedad "Con menú emergente", se muestra un triángulo a la derecha y en el centro del botón.

![](../assets/en/FormObjects/button_toolbar.png)

- *macOS* - el resalte del botón nunca aparece. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### JSON Exemplo

```4d
	"myButton": {
                "type": "button",	
                "style":"toolbar",	
                "text": "OK",		
                "popupPlacement":"separated"	
                "action": "Cancel", 	
                "left": 60,				
                "top": 160,				
                "width": 100,			
                "height": 20		
                }
```

### Bevel

El estilo de botón Bisel combina la apariencia del estilo [Clásico](#regular) (*es decir*, un rectángulo con una etiqueta descriptiva) con la opción de propiedad del menú emergente del estilo [Barra de herramientas](#toolbar).

By default, the Bevel style has a light gray background with a label in the center. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- *Windows* - el botón está resaltado. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](../assets/en/FormObjects/button_bevel.png)

- *macOS* - el resalte del botón nunca aparece. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### JSON Exemplo

```4d
	"myButton": {
                "type": "button",
                "style":"bevel",	
                "text": "OK",		
                "popupPlacement":"linked"	
                "action": "Cancel", 
                "left": 60,		
                "top": 160,		
                "width": 100,	
                "height": 20	
                }
```

### Bevel arredondado

El estilo de botón Bevel redondeado es casi idéntico al estilo [Bevel](#bevel), excepto que, dependiendo del sistema operativo, las esquinas del botón pueden ser redondeadas. Al igual que el estilo Bevel, el estilo Bevel Redondeado combina la apariencia del estilo [Clásico](#regular) con la opción de propiedad del menú emergente del estilo [Barra de herramientas](#toolbar).

By default, the Rounded Bevel style has a light gray background with a label in the center. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- *Windows* - el botón es idéntico al estilo Bevel. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](../assets/en/FormObjects/button_roundedbevel.png)

- *macOS* - las esquinas del botón están redondeadas. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### JSON Exemplo

```4d
	"myButton": {
                "type": "button",
                "style":"roundedBevel",	
                "text": "OK",	
                "popupPlacement":"none"	/
                "action": "Cancel", 
                "left": 60,			
                "top": 160,	
                "width": 100,	
                "height": 20	
                }
```

### OS X Gradient

El estilo del botón OS X Gradient es casi idéntico al estilo [Bevel](#bevel). Al igual que el estilo Bevel, el estilo OS X Gradient combina la apariencia del estilo [Clásico](#regular) y del estilo [Barra de herramientas](#toolbar).

By default, the OS X Gradient style has a light gray background with a label in the center. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- *Windows* - el botón es idéntico al estilo Bevel. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](../assets/en/FormObjects/button_osxgradient.png)

- *macOS* - el botón se muestra como un botón de dos tonos. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

#### JSON Exemplo

```4d
	"myButton": {
                "type": "button",	
                "style":"gradientBevel",
                "text": "OK",	
                "popupPlacement":"linked"
                "action": "Cancel", 	
                "left": 60,		
                "top": 160,	
                "width": 100,	
                "height": 20	
                }
```

### OS X Texturizado

El estilo de botón OS X Textured es casi idéntico al estilo [Bevel](#bevel) pero con un tamaño menor (el tamaño máximo es el de un botón de sistema estándar de macOS). Al igual que el estilo Bevel, el estilo OS X Textured combina la apariencia del estilo [Clásico](#regular) y del estilo [Barra de herramientas](#toolbar).

Como padrão, o estilo OS X Textured aparece como:

- *Windows* - un botón sistema estándar con un fondo gris claro con una etiqueta en el centro. Tem a particularidade de ser transparente no Vista.

![](../assets/en/FormObjects/button_osxtextured.png)

- *macOS* - - un botón sistema estándar que muestra un cambio de color de gris claro a gris oscuro. Sua altura está predefinida: não é possível ampliar ou reduzir.

#### JSON Exemplo

```4d
	"myButton": {
                "type": "button",	
                "style":"texturedBevel",	
                "text": "OK",	
                "popupPlacement":"separated"	
                "action": "Cancel", 
                "left": 60,			
                "top": 160,		
                "width": 100,	
                "height": 20	
                }
```

### Office XP

El estilo de botón Office XP combina la apariencia del estilo [Clásico](#regular) y del estilo [Barra de herramientas](#toolbar).

As cores (ressaltado e fundo) de um botão com o estilo Office XP são baseadas nos sistemas de cores. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- *Windows* - su fondo sólo aparece cuando el ratón pasa por encima.

![](../assets/en/FormObjects/button_officexp.png)

- *macOS* - su fondo se muestra siempre.

#### JSON Exemplo

```4d
	"myButton": {
                "type": "button",	
                "style":"office",
                "text": "OK",
                "popupPlacement":"none"	
                "action": "Cancel", 
                "left": 60,		
                "top": 160,	
                "width": 100,
                "height": 20	
                }
```

### Ajuda

The Help button style can be used to display a standard system help button. By default, the Help style is displayed as a question mark within a circle.

![](../assets/en/FormObjects/button_help.png)

#### JSON Exemplo

```4d
	"myButton": {
                "type": "button",
                "style":"help",		
                "text": "OK",	
                "dropping": "custom", 
                "left": 60,	
                "top": 160,		
                "width": 100,	
                "height": 20	
                }
```

> The Help style does not support [Number of States](properties_TextAndPicture.md#number-of-states), [Picture pathname](properties_TextAndPicture.md#picture-pathname), and [Title/Picture Position](properties_TextAndPicture.md#title-picture-position) basic properties.

### Círculo

O estilo de botão Círculo aparece como um botão sistema redondo. Este estilo de botão foi concebido para macOS.

![](../assets/en/FormObjects/button_circleM.png)

On Windows, it is identical to the “None” style (the circle in the background is not taken into account).

#### JSON Exemplo

```
	"myButton": {
                "type": "button",	
                "style":"circular",	
                "text": "OK",	
                "dropping": "custom", 
                "left": 60,	
                "top": 160,		
                "width": 100,
                "height": 20	
                }
```

### Personalizado

The Custom button style accepts a personalized background picture and allows managing additional parameters such as icon and margin offset.

![](../assets/en/FormObjects/button_custom.png)

#### JSON Exemplo

```code
	"myButton": {
                "type": "button",	
                "style":"custom",	
                "text": "",	
                "customBackgroundPicture": "/RESOURCES/bkgnd.png",
                "icon": "/RESOURCES/custom.png",  
                "textPlacement": "center",
                "left": 60,	
                "top": 160,		
                "width": 100,	
                "height": 20
                }
```

## Propriedades compatíveis

Todos os botões partilham o mesmo conjunto de propriedades básicas:

[Bold](properties_Text.md#bold) - [Border Line Style](properties_BackgroundAndBorder.md#border-line-style) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Droppable](properties_Action.md#droppable) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Italic](properties_Text.md#italic) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(1) - [Left](properties_CoordinatesAndSizing.md#left) - [Not rendered](properties_Display.md#not-rendered) - [Number of States](properties_TextAndPicture.md#number-of-states)(1) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(1) - [Right](properties_CoordinatesAndSizing.md#right) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position)(1) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width) - [With pop-up menu](properties_TextAndPicture.md#with-pop-up-menu)(2)

> (1) Not supported by the [Help](#help) style.<br/>
> (2) Not supported by the [Help](#help), [Flat](#flat) and [Regular](#regular) styles.

Existen propiedades específicas adicionales, dependiendo del [estilo-de-botón](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin)
- Plano, Regular: [Botón por defecto](properties_Appearance.md#default-button)
