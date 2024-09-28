---
id: buttonOverview
title: Botão
---

Um botão é um objeto ativo ao qual pode ser atribuída uma ação (_por exemplo_, uma tarefa de banco de dados ou uma função de interface) a executar quando um usuário clica nele.

![](../assets/en/FormObjects/button_regular.png)

Os botões podem desempenhar várias funções, dependendo de seu estilo e da ação atribuída a eles. Por exemplo, os botões podem levar o usuário a preencher um questionário ou formulário, ou a fazer escolhas. Dependendo de suas configurações, um botão pode ser projetado para ser clicado apenas uma vez e executar um comando, enquanto outros podem exigir que o usuário clique mais de uma vez para obter o resultado desejado.

## Manipulação de botões

As ações atribuídas aos botões podem se originar de [ações padrão](properties_Action.md#standard-action) predefinidas ou de métodos objeto personalizados. Exemplos de ações típicas incluem permitir que o usuário aceite, cancele ou exclua registros, copie ou cole dados, passe de uma página para outra em um formulário de várias páginas, abra, exclua ou adicione registros em um subformulário, manipule atributos de fonte em áreas de texto etc.

Os botões com ações padrão são escurecidos quando apropriado durante a execução do formulário. Por exemplo, se o primeiro registro de uma tabela for exibido, um botão com a ação padrão `firstRecord` aparecerá esmaecido.

Se você quiser que um botão execute uma ação que não esteja disponível como ação padrão, deixe o campo de ação padrão vazio e escreva um método objeto para especificar a ação do botão. Para obter mais informações sobre métodos objeto e como criá-los e associá-los, consulte [Usando métodos objeto](https://doc.4d.com/4Dv17R5/4D/17-R5/Using-object-methods.300-4163733.en.html).
Normalmente, você ativaria o evento `On Clicked` e o método seria executado somente quando o botão fosse clicado. Pode associar um método a qualquer botão.

La [variable](properties_Object.md#variable-or-expression) asociada a un botón se define automáticamente a **0** cuando el formulario se ejecuta por primera vez en modo Diseño o Aplicación. Cuando el usuario hace clic en un botón, su variable se define como **1**.

> A um botão pode ser atribuída uma ação padrão e um método. Nesse caso, se o botão não for desativado pela ação padrão, o método será executado antes da ação padrão.

## Estilos de botões

Os estilos dos botões controlam a aparência geral de um botão, bem como as suas propriedades disponíveis. É possível aplicar diferentes estilos pré-definidos a botões ou associar-lhes menus pop-up. Um grande número de variações podem ser obtidas combinando essas propriedades/comportamentos.

Com exceção das [propriedades disponíveis](#supported-properties), muitos objetos de botão são _estruturalmente_ idênticos. A diferença é no processamento das variáveis associadas.

4D fornece botões nos seguintes estilos pré-definidos:

### Clássico

O estilo de botão Clássico é um botão padrão do sistema (ou seja, um retângulo com um rótulo descritivo) que executa o código quando o usuário clica nele.

![](../assets/en/FormObjects/button_regular.png)

Por padrão, o estilo Regular tem um fundo cinza-claro com um rótulo no centro. Quando o cursor passa o mouse sobre o estilo de botão Clássico, a borda e a cor de fundo mudam para demonstrar que o foco está no botão. Além de iniciar a execução do código, o estilo de botão Clássico imita um botão mecânico, mudando rapidamente a cor do plano de fundo ao ser clicado.

#### Exemplo JSON:

```4d

	"myButton": {
		"type": "button", //defina o tipo de objeto
		"style": "regular", //defina o estilo do botão
		"defaultButton": "true" //defina o botão como a opção padrão
		"text": "OK", //texto a ser exibido no botão
		"action": "Cancel", //ação a ser executada 
		"left": 60, //posição esquerda no formulário  
		"top": 160, //posição superior no formulário 
	  	"width": 100, //largura do botão
		"height": 20 //altura do botão
}
```

Somente os estilos Clássico e Plano oferecem a propriedade [Botão padrão](properties_Appearance.md#default-button).

### Plano

O estilo de botão Plano é um botão padrão do sistema (ou seja, um retângulo com um rótulo descritivo) que executa o código quando o usuário clica nele.

![](../assets/en/FormObjects/button_flat.png)

Por padrão, o estilo Plano tem um fundo branco com um rótulo no centro, cantos arredondados e uma aparência minimalista. A natureza gráfica do estilo Plano é especialmente útil para os formulários que vão ser impressos.

#### Exemplo JSON:

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

Somente os estilos Clássico e Plano oferecem a propriedade [Botão padrão](properties_Appearance.md#default-button).

### Barra de ferramentas

The Toolbar button style is primarily intended for integration in a toolbar. It includes the option to add a pop-up menu (indicated by an inverted triangle) which is generally used to display additional choices for the user to select.

By default, the Toolbar style has a transparent background with a label in the center. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- _Windows_ - el botón se resalta cuando utiliza la propiedad "Con menú emergente", se muestra un triángulo a la derecha y en el centro del botón.

![](../assets/en/FormObjects/button_toolbar.png)

- _macOS_ - el resalte del botón nunca aparece. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

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

El estilo de botón Bisel combina la apariencia del estilo [Clásico](#regular) (_es decir_, un rectángulo con una etiqueta descriptiva) con la opción de propiedad del menú emergente del estilo [Barra de herramientas](#toolbar).

By default, the Bevel style has a light gray background with a label in the center. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- _Windows_ - el botón está resaltado. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](../assets/en/FormObjects/button_bevel.png)

- _macOS_ - el resalte del botón nunca aparece. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

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

- _Windows_ - el botón es idéntico al estilo Bevel. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](../assets/en/FormObjects/button_roundedbevel.png)

- _macOS_ - las esquinas del botón están redondeadas. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

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

- _Windows_ - el botón es idéntico al estilo Bevel. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and in the center of the button.

![](../assets/en/FormObjects/button_osxgradient.png)

- _macOS_ - el botón se muestra como un botón de dos tonos. When it uses the “With Pop-up Menu” property, a triangle is displayed to the right and at the bottom of the button.

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

- _Windows_ - un botón sistema estándar con un fondo gris claro con una etiqueta en el centro. Tem a particularidade de ser transparente no Vista.

![](../assets/en/FormObjects/button_osxtextured.png)

- _macOS_ - - un botón sistema estándar que muestra un cambio de color de gris claro a gris oscuro. Sua altura está predefinida: não é possível ampliar ou reduzir.

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

- _Windows_ - su fondo sólo aparece cuando el ratón pasa por encima.

![](../assets/en/FormObjects/button_officexp.png)

- _macOS_ - su fondo se muestra siempre.

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
