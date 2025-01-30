---
id: stepper
title: Stepper
---

Um stepper permite que o usuário percorra valores numéricos, durações (horas) ou datas por etapas predefinidas, clicando nos botões de seta.

![](../assets/en/FormObjects/indicator_numericStepper.png)

## Usando os steppers

Você pode atribuir a variável associada ao objeto a uma área de entrada (campo ou variável) para armazenar ou modificar o valor atual do objeto.

Um stepper pode ser associado diretamente a uma variável número, hora ou data.

* Para valores do tipo tempo, as propriedades Mínimo, Máximo e Etapa representam segundos. Por exemplo, para definir um passo de 8:00 a 18:00 com passos de 10 minutos:
    * [mínimo](properties_Scale.md#minimum) = 28 800 (8\*60\*60)
    * [máximo](properties_Scale.md#maximum) = 64 800 (18\*60\*60)
    * [passo](properties_Scale.md#step) = 600 (10*60)
* Para valores do tipo data, o valor introduzido na propriedade [passo](properties_Scale.md#step) representa dias. As propriedades Mínimo e Máximo são ignoradas.
> > > > > > > > > For the stepper to work with a time or date variable, it is imperative to set its type in the form AND to declare it explicitly via the [C_TIME](https://doc.4d.com/4Dv17R5/4D/17-R5/C-TIME.301-4128557.en.html) or [C_DATE](https://doc.4d.com/4Dv17R5/4D/17-R5/C-DATE.301-4128570.en.html) command.

Para mais informações, consultar [Utilizar indicadores](progressIndicator.md#using-indicators) na página "Indicadores de progresso".

## Propriedades compatíveis
[Estilo da linha de borda](properties_BackgroundAndBorder.md#border-line-style) - [Inferior](properties_CoordinatesAndSizing.md#bottom) - [Classe](properties_Object.md#css-class) - [Digitável](properties_Entry.md#enterable) - [Executar método de objeto](properties_Action.md#execute-object-method) - [Tipo de expressão](properties_Object.md#expression-type) (somente "inteiro", "número", "data" ou "hora") - [Altura](properties_CoordinatesAndSizing.md#height) - [Dica de ajuda](properties_Help.md#help-tip) - [Dimensionamento horizontal](properties_ResizingOptions.md#horizontal-sizing) - [Esquerda](properties_CoordinatesAndSizing.md#left) - [Máximo](properties_Scale.md#maximum) - [Mínimo](properties_Scale.md#minimum) - [Nome do objeto](properties_Object.md#object-name) - [Direita](properties_CoordinatesAndSizing.md#right) - [Etapa](properties_Scale.md#step) - [Superior](properties_CoordinatesAndSizing.md#top) - [Tipo](properties_Object.md#type) - [Variável ou expressão](properties_Object.md#variable-or-expression) - [Dimensionamento vertical](properties_ResizingOptions.md#vertical-sizing) - [Visibilidade](properties_Display.md#visibility) - [Largura](properties_CoordinatesAndSizing.md#width)


## Veja também
- [indicadores de progresso](progressIndicator.md)
- [regras](ruler.md)






