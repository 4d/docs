---
id: formSize
title: Tamanho formulário
---

 
4D permite-lhe definir o tamanho do formulário e da [janela](properties_WindowSize.md). Estas propriedades são interdependentes e a interface da aplicação resulta da sua interação.

As opções de tamanho dependem do valor da opção **Tamanho baseado em**.

---
## Tamanho baseado em


*   **Tamanho automático**: o tamanho do formulário será necessário para exibir todos os objetos, ao qual serão adicionados os valores de margem (em pixels) inseridos nos campos [**Hor Margin**](#hor-margin) e [**Margem Vert**](#vert-margin).

    Você pode escolher essa opção quando quiser usar objetos ativos colocados em uma área fora da tela (*ou seja*, fora do retângulo delimitador da janela) com uma janela de tamanho automático. Graças a essa opção, a presença desses objetos não modificará o tamanho da janela.


*   **Definir Tamanho**: o tamanho do formulário será baseado nos campos [**Largura**](#width) e [**Altura**](#height).

*   `\&#060;object name&#062;`: The size of the form will be based on the position of the selected form object. Por exemplo, se você escolher um objeto que esteja posicionado na parte inferior direita da área a ser exibida, o tamanho do formulário consistirá em um retângulo cujo canto superior esquerdo será a origem do formulário e o canto inferior direito corresponderá ao do objeto selecionado, acrescido de quaisquer valores de margem.


> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](width) fields are available.


#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                                              |
| -------------- | ------------- | -------------------------------------------------------------- |
| formSizeAnchor | string        | Nome do objeto a utilizar para definir o tamanho do formulário |

---
## Alto

Altura do formulário (em pixéis) quando o [tamanho do formulário](#size-based-on) é **Definir tamanho**.


#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| height | number        | valor inteiro     |


---
## Margem der.

Valor a ser adicionado (em píxeis) para a margem direita do formulário quando o tamanho [do formulário](#size-based-on) é **Tamanho Automático** ou `\&#060;object name&#062;`


Esse valor também determina as margens do lado direito dos formulários usados no editor de etiquetas.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| rightMargin | number        | valor inteiro     |


---

## Margem der.

Valor a ser adicionado (em píxeis) para a margem inferior do formulário quando o tamanho [do formulário](#size-based-on) é **Tamanho Automático** ou `\&#060;object name&#062;`.

Este valor também determina as margens superiores dos formulários utilizados no editor de etiquetas.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis |
| ------------ | ------------- | ----------------- |
| bottomMargin | number        | valor inteiro     |


---
## Largura

Largura do formulário (em pixeis) quando o [tamanho do formulário](#size-based-on) é **Definir tamanho**.


#### Gramática JSON

| Nome  | Tipo de dados | Valores possíveis |
| ----- | ------------- | ----------------- |
| width | number        | valor inteiro     |
