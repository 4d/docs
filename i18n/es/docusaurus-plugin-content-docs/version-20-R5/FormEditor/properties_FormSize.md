---
id: formSize
title: Tamaño formulario
---

4D lets you set the size of both the form and the [window](properties_WindowSize.md). Estas propiedades son interdependientes y su interfaz de aplicación es el resultado de su interacción.

Size options depend on the value of the **Size based on** option.

---

## Tamaño basado en

- **Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the [**Hor Margin**](#hor-margin) and [**Vert Margin**](#vert-margin) fields.

  You can choose this option when you want to use active objects placed in an offscreen area (_i.e._, outside the bounding rectangle of the window) with an automatic size window. Gracias a esta opción, la presencia de estos objetos no modificará el tamaño de la ventana.

- **Set Size**: The size of the form will be based on what you enter (in pixels) in the [**Width**](#width) and [**Height**](#height) fields.

- `<object name>`: The size of the form will be based on the position of the selected form object. Por ejemplo, si elige un objeto situado en la parte inferior derecha del área a mostrar, el tamaño del formulario consistirá en un rectángulo cuya esquina superior izquierda será el origen del formulario y la esquina inferior derecha corresponderá a la del objeto seleccionado, más los valores de los márgenes.

> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](#width) fields are available.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                   |
| -------------- | -------------- | ------------------------------------------------------------------ |
| formSizeAnchor | string         | Nombre del objeto a utilizar para definir el tamaño del formulario |

---&#x20;

## Altura

Height of the form (in pixels) when the [form size](#size-based-on) is **Set size**.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles   |
| ------ | -------------- | ------------------ |
| height | number         | valor entero largo |

---&#x20;

## Margen hor.

Value to add (in pixels) to the right margin of the form when the [form size](#size-based-on) is **Automatic size** or `\<object name>`

Este valor también determina los márgenes derechos de los formularios utilizados en el editor de etiquetas.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles   |
| ----------- | -------------- | ------------------ |
| rightMargin | number         | valor entero largo |

---

## Margen hor.

Value to add (in pixels) to the bottom margin of the form when the [form size](#size-based-on) is **Automatic size** or `\<object name>`.

Este valor también determina los márgenes superiores de los formularios utilizados en el editor de etiquetas.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles   |
| ------------ | -------------- | ------------------ |
| bottomMargin | number         | valor entero largo |

---&#x20;

## Ancho

Width of the form (in pixels) when the [form size](#size-based-on) is **Set size**.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles   |
| ------ | -------------- | ------------------ |
| ancho  | number         | valor entero largo |
