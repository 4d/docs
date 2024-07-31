---
id: formSize
title: Tamanho formulário
---

4D permite definir el tamaño tanto del formulario como de la [ventana](properties_WindowSize.md). Estas propriedades são interdependentes e a interface da aplicação resulta da sua interação.

Las opciones de tamaño dependen del valor de la opción **Tamaño basado en**.

---

## Tamanho baseado em

- **Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the [**Hor Margin**](#hor-margin) and [**Vert Margin**](#vert-margin) fields.

  Puede elegir esta opción cuando desee utilizar objetos activos situados en un área fuera de la pantalla (*es decir*, fuera del rectángulo delimitador de la ventana) con una ventana de tamaño automático. Thanks to this option, the presence of these objects will not modify the size of the window.

- **Set Size**: The size of the form will be based on what you enter (in pixels) in the [**Width**](#width) and [**Height**](#height) fields.

- `<object name>`: el tamaño del formulario se basará en la posición del objeto formulario seleccionado. For example, if you choose an object that is placed in the bottom-right part of the area to be displayed, the form size will consist of a rectangle whose upper left corner will be the origin of the form and the lower right corner will correspond to that of the selected object, plus any margin values.

> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](#width) fields are available.

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

## Margem hor.

Valor a añadir (en píxeles) al margen inferior del formulario cuando el [tamaño del formulario](#size-based-on) está definido en **Tamaño automático** o `\<object name>`

This value also determines the right-hand margins of forms used in the Label editor.

#### Gramática JSON

| Nome        | Tipo de dados | Valores possíveis |
| ----------- | ------------- | ----------------- |
| rightMargin | number        | valor inteiro     |

---

## Margem hor.

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
