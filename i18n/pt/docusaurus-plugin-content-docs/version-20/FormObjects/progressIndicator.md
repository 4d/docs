---
id: progressIndicator
title: Indicador de progresso
---


Um indicador de progresso (também chamado "termômetro") foi projetado para exibir ou definir graficamente valores numéricos, ou de data/hora.

![](../assets/en/FormObjects/progress1.png)

## Utilizar os indicadores

Os indicadores podem ser utilizados para visualizar ou definir valores. Por exemplo, se um indicador de progresso recebe um valor por um método, ele exibe o valor. Se o usuário arrastar o ponto indicador, o valor muda. O valor pode ser usado em outro objeto, como um campo ou um objeto digitável, ou não digitável.

A variável associada ao indicador controla a visualização. O usuário coloca valores no código ou utiliza valores do código através de métodos. Por exemplo, um método para um campo ou objeto digitável poderia ser usado para controlar um indicador de progresso:

```4d
 $vTherm:=[Employees]Salary
```

Este método atribui o valor do campo Salary à variável $vTherm. Este método seria anexado ao campo Salário.

Por outro lado, é possível utilizar o indicador para controlar o valor num campo. O usuário arrasta o indicador para definir o valor. Neste caso, o método torna-se:

```4d
 [Employees]Salary:=$vTherm
```

O método atribui o valor do código ao campo Salary. À medida que o usuário arrasta o indicador, o valor no campo Salário muda.


## Termómetro predefinido

![](../assets/en/FormObjects/indicator_progressBar.png)

O termómetro é o indicador básico de progresso.

É possível apresentar barras de termômetros horizontais ou verticais. Isto é determinado pela forma do objeto que desenha.

Estão disponíveis várias opções gráficas: valores mínimos/máximos, graduações, passos.

### Propriedades compatíveis
[Barbearia](properties_Scale.md#barber-shop) - [Negrito](properties_Text.md#bold) - [Estilo de linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Graduação de exibição](properties_Scale.md#display-graduation) - [Digitável](properties_Entry.md#enterable) - [Executar método de objeto](properties_Action.md#execute-object-method) - [Tipo de expressão](properties_Object.md#expression-type) (somente "inteiro", "número", "data" ou "hora") - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Itálico](properties_Text.md#italic) - [Degrau de graduação](properties_Scale.md#graduation-step) -[Dica](properties_Help.md#help-tip) de ajuda - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Localização do rótulo](properties_Scale.md#label-location) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Máximo](properties_Scale.md#maximum) - [Mínimo](properties_Scale.md#minimum) - [Formato de número](properties_Display.md#number-format) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Degrau](properties_Scale.md#step) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)


## Barber shop

![](../assets/en/FormObjects/indicator.gif)

**Barber shop** é uma variante do termômetro predefinido. Para ativar essa variante, você precisa definir a propriedade [Barber shop](properties_Scale.md#barber-shop).
> No código JSON, basta remover a propriedade "max" de um objeto termômetro padrão para ativar a variante Barber shop.

La Barber shop muestra una animación continua, como la [spinner](spinner.md). Esses termômetros são geralmente usados para indicar ao usuário que o programa está em processo de execução de uma operação longa. Quando essa variante de termômetro é selecionada, [as propriedades gráficas da escala](properties_Scale.md) não estão disponíveis.

Quando o formulário é executado, o objeto não é animado. Você gerencia a animação passando um valor para sua [variável ou expressão associada](properties_Object.md#variable-or-expression):

* 1 = Iniciar a animação,
* 0 = Parar a animação.


### Propriedades compatíveis
[Barber shop](properties_Scale.md#barber-shop) - [Negrito](properties_Text.md#bold) - [Estilo de linha de borda](properties_BackgroundAndBorder.md#border-line-style) [-Inferior](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Digitável](properties_Entry.md#enterable) - [Executar método de objeto](properties_Action.md#execute-object-method) - [Tipo de expressão](properties_Object.md#expression-type) (somente "inteiro", "número", "data" ou "hora") - [Fonte](properties_Text.md#font) - [Cor da fonte](properties_Text.md#font-color) - [Tamanho da fonte](properties_Text.md#font-size) - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Itálico](properties_Text.md#italic) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Sublinhado](properties_Text.md#underline) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)


## Veja também
- [regras](ruler.md)
- [steppers](stepper.md)