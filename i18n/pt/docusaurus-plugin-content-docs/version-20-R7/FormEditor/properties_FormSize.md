---
id: formSize
title: Tamanho formulário
---

4D permite que você defina o tamanho tanto do formulário e da [janela](properties_WindowSize.md). Estas propriedades são interdependentes e a interface da aplicação resulta da sua interação.

As opções de tamanho dependem do valor da opção **Tamanho baseado em**.

---

## Tamanho baseado em

- **Tamanho automático**: o tamanho do formulário será o necessário para exibir todos os objetos, aos quais serão adicionados os valores de margem (em píxeis) inseridos nos campos [**Hor Margin**](#hor-margin) e [**Vert Margin**](#vert-margin).

  Você pode escolher essa opção quando quiser usar objetos ativos colocados em uma área fora da tela (ou seja, fora do retângulo delimitador da janela) com uma janela de tamanho automático. Graças a essa opção, a presença desses objetos não modificará o tamanho da janela.

- **Definir tamanho**: o tamanho do formulário será baseado no que você inserir (em píxeis) nos campos [**Largura**](#width) e [**Altura**](#height).

- `<object name>`: o tamanho do formulário será baseado na posição do objeto de formulário selecionado. Por exemplo, se você escolher um objeto que esteja posicionado na parte inferior direita da área a ser exibida, o tamanho do formulário consistirá em um retângulo cujo canto superior esquerdo será a origem do formulário e o canto inferior direito corresponderá ao do objeto selecionado, acrescido de quaisquer valores de margem.

> Para formulários de saída, somente os campos [**Margem Hor**](#hor-margin) ou [**Largura**](#width) estão disponíveis.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                                              |
| -------------- | ------------- | -------------------------------------------------------------- |
| formSizeAnchor | string        | Nome do objeto a utilizar para definir o tamanho do formulário |

---&#x20;

## Alto

Altura del formulario (en píxeles) cuando el [tamaño del formulario](#size-based-on) es definido en **Definir tamaño**.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| height | number        | valor inteiro     |

---&#x20;

## Margem der.

Valor a añadir (en píxeles) al margen inferior del formulario cuando el [tamaño del formulario](#size-based-on) está definido en **Tamaño automático** o `\<object name>`

Esse valor também determina as margens do lado direito dos formulários usados no editor de etiquetas.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| rightMargin | number        | valor inteiro     |

---

## Margem der.

Valor a añadir (en píxeles) al margen inferior del formulario cuando el [tamaño del formulario](#size-based-on) está definido en **Tamaño automático** o `\<object name>`.

Este valor também determina as margens superiores dos formulários utilizados no editor de etiquetas.

#### Gramática JSON

| Nome         | Tipo de dados | Valores possíveis |
| ------------ | ------------- | ----------------- |
| bottomMargin | number        | valor inteiro     |

---&#x20;

## Largura

Ancho del formulario (en píxeles) cuando el [tamaño del formulario](#size-based-on) está definido en **Definir tamaño**.

#### Gramática JSON

| Nome  | Tipo de dados | Valores possíveis |
| ----- | ------------- | ----------------- |
| width | number        | valor inteiro     |
