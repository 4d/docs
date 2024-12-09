---
id: formSize
title: Tamanho formulário
---

 
4D permite-lhe definir o tamanho do formulário e da [janela](properties_WindowSize.md). Estas propriedades são interdependentes e a interface da aplicação resulta da sua interação.

As opções de tamanho dependem do valor da opção **Tamanho baseado em**.

---

## Tamanho baseado em

* **Tamanho automático**: o tamanho do formulário será necessário para exibir todos os objetos, ao qual serão adicionados os valores de margem (em pixels) inseridos nos campos [**Hor Margin**](#hor-margin) e [**Margem Vert**](#vert-margin). You can choose this option when you want to use active objects placed in an offscreen area (*i.e.*, outside the bounding rectangle of the window) with an automatic size window. Thanks to this option, the presence of these objects will not modify the size of the window.

* **Set Size**: The size of the form will be based on what you enter (in pixels) in the [**Width**](#width) and [**Height**](#height) fields.

* `\&#060;nome do objeto&#062;`: O tamanho do formulário será baseado na posição do objeto de formulário selecionado. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values.

> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](width) fields are available.

#### Gramática JSON

| Nome           | Tipo de dados | Valores possíveis                                              |
| -------------- | ------------- | -------------------------------------------------------------- |
| formSizeAnchor | string        | Nome do objeto a utilizar para definir o tamanho do formulário |

---

## Height

Altura do formulário (em pixéis) quando o [tamanho do formulário](#size-based-on) é **Definir tamanho**.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis |
| ------ | ------------- | ----------------- |
| height | number        | valor inteiro     |

---

## Margem hor.

Value to add (in pixels) to the right margin of the form when the [form size](#size-based-on) is **Automatic size** or `\&#060;object name&#062;`

This value also determines the right-hand margins of forms used in the Label editor.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| rightMargin | number        | valor inteiro     |

---

## Margem hor.

Value to add (in pixels) to the bottom margin of the form when the [form size](#size-based-on) is **Automatic size** or `\&#060;object name&#062;`.

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
