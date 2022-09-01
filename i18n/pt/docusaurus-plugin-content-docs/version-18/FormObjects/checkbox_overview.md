---
id: checkboxOverview
title: Check Box
---

## Visão Geral

Uma caixa de seleção é um tipo de botão usado para introduzir ou exibir dados binários (verdadeiro-falso). Basicamente ou está marcado ou desmarcado, mas um terceiro estado também pode ser definido (ver abaixo).

![](../assets/en/FormObjects/checkbox.png)

As caixas de seleção são controladas pelos métodos. Como todos os botões, uma variável da caixa de seleção é estabelecida em 0 quando o formulário é aberto pela primeira vez. O método associado com ela é executado quando selecionar a caixa de seleção.

Uma caixa de seleção mostra o teto do lado de um pequeno quadrado. Este texto é estabelecido na propriedade [Title](properties_Object.md#title) da caixa de seleção. Pode entrar um título no formulário de uma referência XLIFF nessa área (ver [Anexo B: XLIFF arquitetura](https://doc.4d.com/4Dv17R5/4D/17-R5/Appendix-B-XLIFF-architecture.300-4163748.en.html)).

## Utilizar caixas de seleção

Uma caixa de seleção pode ser associada a uma [variável ou expressão](properties_Object.md#variable-or-expression) de tipo inteiro ou booleano.

- **inteiro:** se a caixa for selecionada, a variável tem o valor 1. Quando não for marcado, tem o valor 0. Se a caixa de seleção estiver no terceiro estado (ver abaixo), tem o valor 2.
- **booleano:** se a caixa for marcada, a variável tem o valor `True`. Quando não for marcado, tem o valor `False`.

Uma parte ou todas as caixas de seleção de um formulário podem estar marcadas ou desmarcadas. As caixas de seleção múltiplas permitem ao usuário selecionar várias opções.

### Caixas de seleção de três estados

Os objetos caixa de seleção de estilo [Clássico](checkbox_overview.md#regular) y [Plano](checkbox_overview.md#flat) aceitam um terceiro estado. Este terceiro estado é um estado intermediário, que geralmente se usa para fins de visualização. Por exemplo, permite indicar que uma propriedade é presentada em uma seleção de objetos,

![](../assets/en/FormObjects/checkbox_3states.png)

Para ativar este terceiro estado, deve selecionar a propriedade [Três estados](properties_Display.md#three-states).

Essa propriedade só está disponível para caixas de seleção regulares e planas associadas a [variáveis ou expressões](properties_Object.md#variable-or-expression) — as caixas de seleção de expressões booleanas não podem usar a propriedade [Três Estados](properties_Display.md#three-states)  (uma expressão Booleana não pode estar em um estado intermediário).

A variável associada à caixa de seleção devolve o valor 2 quando a caixa estiver no terceiro estado.
> In entry mode, the Three-States check boxes display each state sequentially, in the following order: unchecked / checked / intermediary / unchecked, etc. The intermediary state is generally not very useful in entry mode; in the code, simply force the value of the variable to 0 when it takes the value of 2 in order to pass directly from the checked state to the unchecked state. No modo de entrada, as caixas de seleção dos três estados mostram cada estado de forma sequencial na ordem abaixo: sem marcar/marcado/intermediário/sem marcar, etc. O estado intermediário não é geralmente muito útil no modo entrada; no código, simplesmente force o valor da variável para 0 quando tomar o valor de 2 para passar diretamente de um estado marcado para o estado desmarcado.

## Usar uma ação padrão

Pode atribuir uma [ação padrão](properties_Action.md#standard-action) a uma caixa de seleção para manejar os atributos das áreas de texto. Por exemplo, se atribuir a ação padrão `fontBold`, em execução a caixa de seleção gerenciará o atributo "negrito" do texxto selecionado na área atual.

Só as ações que podem representar um estado verdadeiro/falso (ações "marcáveis") são compatíveis com esse objeto:

| Ações compatíveis                   | Condições de uso (se houver) |
| ----------------------------------- | ---------------------------- |
| avoidPageBreakInsideEnabled         | 4D Write Pro areas only      |
| fontItalic                          |                              |
| fontBold                            |                              |
| fontLinethrough                     |                              |
| fontSubscript                       | 4D Write Pro areas only      |
| fontSuperscript                     | 4D Write Pro areas only      |
| fontUnderline                       |                              |
| font/showDialog                     | Só em Mac                    |
| htmlWYSIWIGEnabled                  | 4D Write Pro areas only      |
| section/differentFirstPage          | 4D Write Pro areas only      |
| section/differentLeftRightPages     | 4D Write Pro areas only      |
| spell/autoCorrectionEnabled         |                              |
| spell/autoDashSubstitutionsEnabled  | Só em Mac                    |
| spell/autoLanguageEnabled           | Só em Mac                    |
| spell/autoQuoteSubstitutionsEnabled | Só em Mac                    |
| spell/autoSubstitutionsEnabled      |                              |
| spell/enabled                       |                              |
| spell/grammarEnabled                | Só em Mac                    |
| spell/showDialog                    | Só em Mac                    |
| spell/visibleSubstitutions          |                              |
| visibleBackground                   | 4D Write Pro areas only      |
| visibleFooters                      | 4D Write Pro areas only      |
| visibleHeaders                      | 4D Write Pro areas only      |
| visibleHiddenChars                  | 4D Write Pro areas only      |
| visibleHorizontalRuler              | 4D Write Pro areas only      |
| visiblePageFrames                   | 4D Write Pro areas only      |
| visibleReferences                   |                              |
| widowAndOrphanControlEnabled        | 4D Write Pro areas only      |

Para informações detalhas dessas ações, veja a seção [Ações padrão](https://doc.4d.com/4Dv17R5/4D/17-R5/Standard-actions.300-4163633.en.html).

## Estilos de botão caixas de seleção

Os estilos de caixa de seleção controlam a aparência geral de uma caixa de seleção assim como suas propriedades disponíveis. É possível aplicar diferentes estilos pré-definidos para caixas de seleção. Um grande número de variações podem ser obtidas combinando essas propriedades/comportamentos.

Com exceção das[propriedades disponíveis](#supported-properties), muitos objetos caixa de seleção são *estruturalmente* idênticos. A diferença é no processamento das variáveis associadas.

4D oferece caixas de seleção nos estilos predefinidos abaixo:

### Clássico

O estilo Clássico de caixa de seleção corresponde a um sistema de caixa de seleção padrão (*ou seja, *, um retângulo com um título descritivo):

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

O estilo Barra de ferramentas tem um fundo transparente com um título. Está geralmente associado com uma [imagem de 4 estados](properties_TextAndPicture.md#number-of-states).

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

O estilo de caixa de seleção Bevel combina a aparência do estilo [Clássico ](#regular) (*ou seja*, um retângulo com um título descritivo) com o comportamento do estilo [Barra de ferramentas](#toolbar).

O estilo Bevel tem um fundo cinza claro com um título. Está geralmente associado com uma [imagem de 4 estados](properties_TextAndPicture.md#number-of-states).

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

O estilo de caixa de seleção Bevel arredondado é quase idêntico ao estilo [Bevel](#bevel), exceto que, dependendo do sistema operativo, as esquinas do botão podem ser arredondadas. Da mesma forma que com o estilo Bevel, o estilo Bevel arredondado combina a aparência do estilo [Clássico](#regular) com o comportamento do estilo [Barra de ferramentas](#toolbar).

O estilo Bevel arredondado tem um fundo cinza claro com um título. Está geralmente associado com uma [imagem de 4 estados](properties_TextAndPicture.md#number-of-states).

Exemplo em macOS:

  ![](../assets/en/FormObjects/checkbox_roundedbevel_mac.png)

> em Windows, o estilo Bevel arredondado é idêntico ao estilo [Bevel](#bevel).

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

O estilo de caixa de seleção OS X Gradient é quase idêntico ao estilo [Bevel](#bevel), exceto que, dependendo do sistema operativo, pode ter uma aparência de dois tons. Da mesma forma que o estilo Bevel, o estilo OS X Gradient combina a aparência del estilo [Clássico](#regular) com o comportamento do estilo [Barra de ferramentas](#toolbar).

O estilo Gradient OS X tem um fundo cinza claro com um título e se mostra como um botão de sistema de dois tons em macOS. Está geralmente associado com uma [imagem de 4 estados](properties_TextAndPicture.md#number-of-states).

  ![](../assets/en/FormObjects/checkbox_osxgradient_mac.png)

> Em Windows, este estilo é idêntico ao estilo [Bevel](#bevel).

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

O estilo de caixa de seleção OS X Textured é similar ao estilo [Bevel](#bevel), exceto que, dependendo do sistema operativo, pode ter uma aparência diferente. Da mesma forma que com o estilo Bevel, o estilo Bevel arredondado combina a aparência do estilo [Clássico](#regular) com o comportamento do estilo [Barra de ferramentas](#toolbar).

Como padrão, o estilo OS X Textured aparece como:

- *Windows* - um botão padrão com um fundo azul claro com um título no centro.

  ![](../assets/en/FormObjects/checkbox_osxtextured.png)

- *macOS* - - um botão sistema padrão que mostra uma mudança de cor cinza claro a cinza escuro. Sua altura está predefinida: não é possível ampliar ou reduzir.

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

O estilo de caixa de seleção Office XP combina a aparência do estilo [Clássico](#regular) com o comportamento do estilo [Barra de ferramentas](#toolbar).

As cores (ressaltado e fundo) de um botão com o estilo Office XP são baseadas nos sistemas de cores. A aparência do botão pode ser diferente quando o cursor passar por cima dele, dependendo do SO:

- *Windows* - seu fundo só aparece quando o mouse passa por cima. Exemplo com estados selecionado/ não selecionado/ ressaltado:

  ![](../assets/en/FormObjects/checkbox_officexp.png)

- *macOS* - seu fundo é sempre mostrado. Exemplos com estados desmarcado/ marcado:

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

Este estilo de caixa de seleção pode ser usado para adicionar um ícone padrão de contrair/expandir. Esses botões são usados nativamente em listas hierárquicas.

- *Windows* - o botão parece um [+] ou um [-]

  ![](../assets/en/FormObjects/checkbox_collapse.png)

- *macOS* - parece com um triângulo apontando para cima ou para baixo.

  ![](../assets/en/FormObjects/checkbox_collapse_mac.png)

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

Em macOS e Windows, uma caixa de seleção com o estilo "Disclosure" aparece como um botão de informação padrão, normalmente utilizado para mostrar/ocultar informação adicional. Quando usar um botão radio, o símbolo botão aponta para baixo com o valor 0 e para cima com o valor 1.

- *Windows*

 ![](../assets/en/FormObjects/checkbox_disclosure.png)

- *macOS*

 ![](../assets/en/FormObjects/checkbox_disclosure_mac.png)

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

O estilo de caixa de seleção personalizado aceita uma imagem de fundo personalizada e permite gerenciar propriedades específicas:

- [Rota de acesso ao Fundo](properties_TextAndPicture.md#backgroundPathname)
- [Offset do ícone](properties_TextAndPicture.md#icon-offset)
- [Margem Horizontal](properties_TextAndPicture.md#horizontalMargin) and [Margem Vertical](properties_TextAndPicture.md#verticalMargin)

Geralmente associado com uma [imagem de 4 estados](properties_TextAndPicture.md#number-of-states), que pode ser usada em conjunção com um  [quarto estado](properties_TextAndPicture.md#number-of-states) [background picture](properties_TextAndPicture.md#backgroundPathname).

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

[Negrita](properties_Text.md#bold) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Estilo do botão](properties_TextAndPicture.md#button-style) - \[Classe\](properties_Object. md#css-class) - [Focável](properties_Entry.md#focusable) - [Font](properties_Text.md#font) - \[Color de la fuente\](properties_Text. md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - \[Dicas de ajuda\](properties_Help. md#help-tip) - [Tamanho horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálica](properties_Text.md#italic) - \[Esquerda\](properties_CoordinatesAndSizing. md#left) - [Nome de objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - \[Corte\](properties_Entry. md#shortcut) - [Acción estándar](properties_Action.md#standard-action) - [Título](properties_Object.md#title) - \[Top\](properties_CoordinatesAndSizing. md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou Expressão](properties_Object.md#variable-or-expression) - \[Tamanho vertical\](properties_ResizingOptions. md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)

Propriedades específicas adicionais estão disponíveis, dependendo do [estilo botão](#button-styles):

- [Rota de acesso do fundo](properties_TextAndPicture.md#backgroundPathname) - [Margem horizontal](properties_TextAndPicture.md#horizontalMargin) - [Deslocamento ícone](properties_TextAndPicture.md#icon-offset) - [Margem vertical](properties_TextAndPicture.md#verticalMargin) (Personalizado)
- [Três Estados](properties_Display.md#three-states) (Flat, Clássico)
- [Número de estados](properties_TextAndPicture.md#number-of-states) - [Rota de imagem](properties_TextAndPicture.md#picture-pathname) - [Titulo/posição imagem](properties_TextAndPicture.md#title-picture-position) (botão Toolbar, Bevel, Bevel arredondado, OS X Gradient, OS X Textured, Office XP, Custom)
