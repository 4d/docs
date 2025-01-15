---
id: formSize
title: Tamanho formulário
---

4D permite que você defina o tamanho tanto do formulário e da [janela](properties_WindowSize.md). Estas propriedades são interdependentes e a interface da aplicação resulta da sua interação.

As opções de tamanho dependem do valor da opção **Tamanho baseado em**.

---

## Tamanho baseado em

- **Tamanho automático**: o tamanho do formulário será o necessário para exibir todos os objetos, aos quais serão adicionados os valores de margem (em píxeis) inseridos nos campos [**Hor Margin**](#hor-margin) e [**Vert Margin**](#vert-margin).

  Você pode escolher essa opção quando quiser usar objetos ativos colocados em uma área fora da tela (ou seja, fora do retângulo delimitador da janela) com uma janela de tamanho automático. Thanks to this option, the presence of these objects will not modify the size of the window.

- **Definir tamanho**: o tamanho do formulário será baseado no que você inserir (em píxeis) nos campos [**Largura**](#width) e [**Altura**](#height).

- `<object name>`: o tamanho do formulário será baseado na posição do objeto de formulário selecionado. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values.

> Para formulários de saída, somente os campos [**Margem Hor**](#hor-margin) ou [**Largura**](#width) estão disponíveis.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                                              |
| -------------- | ------------- | -------------------------------------------------------------- |
| formSizeAnchor | string        | Nome do objeto a utilizar para definir o tamanho do formulário |

---&#x20;

## Height

Altura del formulario (en píxeles) cuando el [tamaño del formulario](#size-based-on) es definido en **Definir tamaño**.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| height | number        | valor inteiro     |

---&#x20;

## Margem Margem hor.

Valor a añadir (en píxeles) al margen inferior del formulario cuando el [tamaño del formulario](#size-based-on) está definido en **Tamaño automático** o `\<object name>`

This value also determines the right-hand margins of forms used in the Label editor.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| rightMargin | number        | valor inteiro     |

---

## Margem Margem hor.

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
