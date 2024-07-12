---
id: checkboxOverview
title: Caixa de selecção
---

Uma caixa de seleção é um tipo de botão usado para introduzir ou exibir dados binários (verdadeiro-falso). Fundamentalmente, está marcado o desmarcado, pero se puede definir un [tercer estado](#three-states-check-box).

![](../assets/en/FormObjects/checkbox.png)

Las casillas de selección se controlan por métodos o [acciones estándar](#using-a-standard-action). O método associado com ela é executado quando selecionar a caixa de seleção. Como todos os botões, uma variável da caixa de seleção é estabelecida em 0 quando o formulário é aberto pela primeira vez.

Uma caixa de seleção mostra o teto do lado de um pequeno quadrado. Este texto se define en el área [Título](properties_Object.md#title) del tema "Objetos" de la Lista de propiedades. Para introducir en esta área un título en forma de referencia XLIFF (ver [Anexo B: arquitectura XLIFF](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

## Utilizar caixas de seleção

Una casilla de selección puede asociarse a una [variable o expresión](properties_Object.md#variable-or-expression) de tipo entero o booleano.

- **entero:** si la casilla está marcada, la variable tiene el valor 1. Quando não for marcado, tem o valor 0. Se a caixa de seleção estiver no terceiro estado (ver abaixo), tem o valor 2.
- **booleano:** si la casilla está marcada, la variable tiene el valor `True`. Cuando no se marca, toma el valor `False`.

Uma parte ou todas as caixas de seleção de um formulário podem estar marcadas ou desmarcadas. As caixas de seleção múltiplas permitem ao usuário selecionar várias opções.

### Caixas de seleção de três estados

Los objetos casilla de selección con el [estilo de botón](checkbox_overview.md#regular) [Normal](checkbox_overview.md#flat) y [Plano](properties_TextAndPicture.md#button-style) aceptan un tercer estado. Este terceiro estado é um estado intermediário, que geralmente se usa para fins de visualização. Por exemplo, permite indicar que uma propriedade é presentada em uma seleção de objetos,

![](../assets/en/FormObjects/checkbox_3states.png)

Para activar este tercer estado, debe seleccionar la propiedad [Tres estados](properties_Display.md#three-states).

This property is only available for regular and flat check boxes associated with numeric [variables or expressions](properties_Object.md#variable-or-expression) — check boxes for Boolean expressions cannot use the [Three-States](properties_Display.md#three-states) property (a Boolean expression cannot be in an intermediary state).

A variável associada à caixa de seleção devolve o valor 2 quando a caixa estiver no terceiro estado.

> In entry mode, the Three-States check boxes display each state sequentially, in the following order: unchecked / checked / intermediary / unchecked, etc. The intermediary state is generally not very useful in entry mode; in the code, simply force the value of the variable to 0 when it takes the value of 2 in order to pass directly from the checked state to the unchecked state. No modo de entrada, as caixas de seleção dos três estados mostram cada estado de forma sequencial na ordem abaixo: sem marcar/marcado/intermediário/sem marcar, etc. O estado intermediário não é geralmente muito útil no modo entrada; no código, simplesmente force o valor da variável para 0 quando tomar o valor de 2 para passar diretamente de um estado marcado para o estado desmarcado.

## Usar uma ação padrão

Puede asignar una [acción estándar](properties_Action.md#standard-action) a una casilla de selección para manejar los atributos de las áreas de texto. Por ejemplo, si asigna la acción estándar `fontBold`, en ejecución la casilla de selección gestionará el atributo "negrita" del texto seleccionado en el área actual.

Só as ações que podem representar um estado verdadeiro/falso (ações "marcáveis") são compatíveis com esse objeto:

| Ações suportadas                    | Condições de uso (se houver) |
| ----------------------------------- | ----------------------------------------------- |
| avoidPageBreakInsideEnabled         | Apenas áreas 4D Write Pro                       |
| fontItalic                          |                                                 |
| fontBold                            |                                                 |
| fontLinethrough                     |                                                 |
| fontSubscript                       | Apenas áreas 4D Write Pro                       |
| fontSuperscript                     | Apenas áreas 4D Write Pro                       |
| fontUnderline                       |                                                 |
| font/showDialog                     | Só em Mac                                       |
| htmlWYSIWIGEnabled                  | Apenas áreas 4D Write Pro                       |
| section/differentFirstPage          | Apenas áreas 4D Write Pro                       |
| section/differentLeftRightPages     | Apenas áreas 4D Write Pro                       |
| spell/autoCorrectionEnabled         |                                                 |
| spell/autoDashSubstitutionsEnabled  | Só em Mac                                       |
| spell/autoLanguageEnabled           | Só em Mac                                       |
| spell/autoQuoteSubstitutionsEnabled | Só em Mac                                       |
| spell/autoSubstitutionsEnabled      |                                                 |
| spell/enabled                       |                                                 |
| spell/grammarEnabled                | Só em Mac                                       |
| spell/showDialog                    | Só em Mac                                       |
| spell/visibleSubstitutions          |                                                 |
| visibleBackground                   | Apenas áreas 4D Write Pro                       |
| visibleFooters                      | Apenas áreas 4D Write Pro                       |
| visibleHeaders                      | Apenas áreas 4D Write Pro                       |
| visibleHiddenChars                  | Apenas áreas 4D Write Pro                       |
| visibleHorizontalRuler              | Apenas áreas 4D Write Pro                       |
| visiblePageFrames                   | Apenas áreas 4D Write Pro                       |
| visibleReferences                   |                                                 |
| widowAndOrphanControlEnabled        | Apenas áreas 4D Write Pro                       |

Para información detallada sobre estas acciones, consulte la sección [Acciones estándar](properties_Action.md#standard-action).

## Estilos de botão caixas de seleção

Las casillas de selección utilizan [los estilos de botón](properties_TextAndPicture.md#button-style) para controlar la apariencia general de una casilla de selección, así como sus posibles propiedades. É possível aplicar diferentes estilos pré-definidos para caixas de seleção. Um grande número de variações podem ser obtidas combinando essas propriedades/comportamentos.

Con la excepción de las [propiedades-disponibles](#supported-properties), muchos objetos casilla de selección son *estructuralmente* idénticos. A diferença é no processamento das variáveis associadas.

4D oferece caixas de seleção nos estilos predefinidos abaixo:

### Clássico

El estilo Clásico de botón casilla de selección corresponde a un sistema de casilla de selección estándar (\*es decir, \*, un rectángulo con un título descriptivo):

![](../assets/en/FormObjects/checkbox_regular.png)

#### JSON Exemplo

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

O estilo de caixa de seleção Plano tem uma aparência minimalista. A natureza gráfica do estilo Flat é especialmente útil para os formulários que vão ser impressos.

![](../assets/en/FormObjects/checkbox_flat.png)

#### JSON Exemplo

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

### Botão barra de ferramentas

O estilo de botão barra de ferramentas está pensado principalmente para sua integração em uma barra de ferramentas.

O estilo Barra de ferramentas tem um fundo transparente com um título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Exemplo com estados selecionado/ não selecionado/ ressaltado:

![](../assets/en/FormObjects/checkbox_toolbar.png)

#### JSON Exemplo

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

O estilo Bevel tem um fundo cinza claro com um título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Exemplo com estados selecionado/ não selecionado/ ressaltado:

![](../assets/en/FormObjects/checkbox_bevel.png)

#### JSON Exemplo

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

### Bevel arredondado

El estilo del botón de la casilla de selección Bevel redondeado es casi idéntico al estilo del botón [Bevel](#bevel), excepto que, dependiendo del sistema operativo, las esquinas del botón pueden ser redondeadas. Al igual que el estilo de botón Bevel, el estilo del botón Bevel redondeado combina la apariencia del estilo del botón [Clásico](#regular) con el comportamiento del estilo del botón [Barra de herramientas](#toolbar-button).

O estilo Bevel arredondado tem um fundo cinza claro com um título. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

Exemplo em macOS:

![](../assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> En Windows, el estilo de botón Bevel redondeado es idéntico al estilo de botón [Bevel](#bevel).

#### JSON Exemplo

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

O estilo Gradient OS X tem um fundo cinza claro com um título e se mostra como um botão de sistema de dois tons em macOS. Suele estar asociado a una [imagen de 4 estados](properties_TextAndPicture.md#number-of-states).

![](../assets/en/FormObjects/checkbox_osxgradient_mac.png)

> En Windows, este estilo de botón casilla de selección es idéntico al estilo de botón [Bevel](#bevel).

#### JSON Exemplo

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

Como padrão, o estilo OS X Textured aparece como:

- *Windows* - un botón sistema estándar con un fondo azul claro con un título en el centro.

![](../assets/en/FormObjects/checkbox_osxtextured.png)

- *macOS* - un botón de sistema estándar. Sua altura está predefinida: não é possível ampliar ou reduzir.

![](../assets/en/FormObjects/checkbox_osxtextured_mac.png)

#### JSON Exemplo

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

As cores (ressaltado e fundo) de um botão com o estilo Office XP são baseadas nos sistemas de cores. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- *Windows* - su fondo sólo aparece cuando el ratón pasa por encima. Exemplo com estados selecionado/ não selecionado/ ressaltado:

![](../assets/en/FormObjects/checkbox_officexp.png)

- *macOS* - su fondo se muestra siempre. Exemplos com estados desmarcado/ marcado:

![](../assets/en/FormObjects/checkbox_officexp_mac.png)

#### JSON Exemplo

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

### Contrair/expandir

Este estilo de caixa de seleção pode ser usado para adicionar um ícone padrão de contrair/expandir. Estes ícones são utilizados nativamente em listas hierárquicas.

- *Windows* - el icono se ve como un [+] o un [-]

![](../assets/en/FormObjects/checkbox_collapse.png)

- *macOS* - se ve como un triángulo que apunta hacia la derecha o hacia abajo.

![](../assets/en/FormObjects/checkbox_collapse_mac.png)

:::info

El estilo Contraer/Desplegar se denomina "disclosure" en la [gramática JSON del estilo de botón](properties_TextAndPicture.md#button-style).

:::

#### JSON Exemplo

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

### Botão disclosure

Em macOS e Windows, uma caixa de seleção com o estilo de botão "Divulgação" aparece como um botão de informação padrão, normalmente utilizado para mostrar/ocultar informação adicional. Quando usar um botão radio, o símbolo botão aponta para baixo com o valor 0 e para cima com o valor 1.

- *Windows*

  ![](../assets/en/FormObjects/checkbox_disclosure.png)

- *macOS*

  ![](../assets/en/FormObjects/checkbox_disclosure_mac.png)

:::info

El estilo Disclosure se denomina "roundedDisclosure" en la [gramática JSON del estilo de botón](properties_TextAndPicture.md#button-style).

:::

#### JSON Exemplo

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

O estilo de botão Personalizado aceita uma imagem de fundo personalizada e permite gerir propriedades específicas:

- [Background pathname](properties_TextAndPicture.md#backgroundPathname)
- [Icon Offset](properties_TextAndPicture.md#icon-offset)
- [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) and [Margen vertical](properties_TextAndPicture.md#verticalMargin)

It is usually associated with a [4-state picture](properties_TextAndPicture.md#number-of-states), that can be used in conjunction with a [4-state](properties_TextAndPicture.md#number-of-states) [background picture](properties_TextAndPicture.md#backgroundPathname).

#### JSON Exemplo

```
	"myCheckbox": {
		"type": "checkbox",
		"style":"custom",
		"text": "OK", 
		"icon": "/RESOURCES/smiley.jpg", 
		"iconFrame": 4, 
		"customBackgroundPicture": "/RESOURCES/paper.jpg", 
		"iconOffset": 5, //custom icon offset when clicked
		"left": 60,	
		"top": 160,	
		"width": 100,		
		"height": 20,
		"customBorderX": 20,
		"customBorderY": 5
		}
```

## Propriedades compatíveis

Todas as caixas de seleção partilhar o mesmo conjunto de propriedades básicas:

[Bold](properties_Text.md#bold) - [Bottom](properties_CoordinatesAndSizing.md#bottom) - [Button Style](properties_TextAndPicture.md#button-style) - [Class](properties_Object.md#css-class) - [Enterable](properties_Entry.md#enterable) - [Expression Type](properties_Object.md#expression-type) - [Focusable](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - [Font Color](properties_Text.md#font-color) - [Font Size](properties_Text.md#font-size) - [Height](properties_CoordinatesAndSizing.md#height) - [Help Tip](properties_Help.md#help-tip) - [Horizontal Alignment](properties_Text.md#horizontal-alignment)(1) - [Horizontal Sizing](properties_ResizingOptions.md#horizontal-sizing) - [Image hugs title](properties_TextAndPicture.md#image-hugs-title)(2) - [Italic](properties_Text.md#italic) - [Left](properties_CoordinatesAndSizing.md#left) - [Number of States](properties_TextAndPicture.md#number-of-states)(2) - [Object Name](properties_Object.md#object-name) - [Picture pathname](properties_TextAndPicture.md#picture-pathname)(2) - [Right](properties_CoordinatesAndSizing.md#right) - [Save value](properties_Object.md#save-value) - [Shortcut](properties_Entry.md#shortcut) - [Standard action](properties_Action.md#standard-action) - [Title](properties_Object.md#title) - [Title/Picture Position](properties_TextAndPicture.md#title-picture-position)(2) - [Top](properties_CoordinatesAndSizing.md#top) - [Type](properties_Object.md#type) - [Underline](properties_Text.md#underline) - [Variable or Expression](properties_Object.md#variable-or-expression) - [Vertical Sizing](properties_ResizingOptions.md#vertical-sizing) - [Visibility](properties_Display.md#visibility) - [Width](properties_CoordinatesAndSizing.md#width)

> (1) Not supported by the [Regular](#regular) and [Flat](#flat) styles.<br/>
> (2) Not supported by the [Regular](#regular), [Flat](#flat), [Disclosure](#disclosure) and [Collapse/Expand](#collapseexpand) styles.

Existen propiedades específicas adicionales, dependiendo del [estilo-de-botón](#button-styles):

- Custom: [Background pathname](properties_TextAndPicture.md#backgroundPathname) - [Horizontal Margin](properties_TextAndPicture.md#horizontalMargin) - [Icon Offset](properties_TextAndPicture.md#icon-offset) - [Vertical Margin](properties_TextAndPicture.md#verticalMargin)
- Plana, Regular: [Tres Estados](properties_Display.md#three-states)
