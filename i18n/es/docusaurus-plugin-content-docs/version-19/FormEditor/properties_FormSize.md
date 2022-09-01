---
id: formSize
title: Tamaño formulario
---

 
4D permite definir el tamaño tanto del formulario como de la [ventana](properties_WindowSize.md). Estas propiedades son interdependientes y su interfaz de aplicación es el resultado de su interacción.

Las opciones de tamaño dependen del valor de la opción **Tamaño basado en**.

---

## Tamaño basado en

* **Automatic Size**: The size of the form will be that necessary to display all the objects, to which will be added the margin values (in pixels) entered in the [**Hor Margin**](#hor-margin) and [**Vert Margin**](#vert-margin) fields. Puede elegir esta opción cuando desee utilizar objetos activos situados en un área fuera de la pantalla (*es decir*, fuera del rectángulo delimitador de la ventana) con una ventana de tamaño automático. Gracias a esta opción, la presencia de estos objetos no modificará el tamaño de la ventana.

* **Definir tamaño**: el tamaño del formulario se basará en lo que introduzca (en píxeles) en los campos [**Ancho**](#width) y [**Alto**](#height).

* `\&#060;object name&#062;`: The size of the form will be based on the position of the selected form object. Por ejemplo, si elige un objeto situado en la parte inferior derecha del área a mostrar, el tamaño del formulario consistirá en un rectángulo cuya esquina superior izquierda será el origen del formulario y la esquina inferior derecha corresponderá a la del objeto seleccionado, más los valores de los márgenes.

> For output forms, only the [**Hor margin**](#hor-margin) or [**Width**](width) fields are available.

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                   |
| -------------- | -------------- | ------------------------------------------------------------------ |
| formSizeAnchor | string         | Nombre del objeto a utilizar para definir el tamaño del formulario |

---

## Altura

Height of the form (in pixels) when the [form size](#size-based-on) is **Set size**.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles   |
| ------ | -------------- | ------------------ |
| height | number         | valor entero largo |

---

## Margen hor.

Value to add (in pixels) to the right margin of the form when the [form size](#size-based-on) is **Automatic size** or `\&#060;object name&#062;`

This value also determines the right-hand margins of forms used in the Label editor.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles   |
| ----------- | -------------- | ------------------ |
| rightMargin | number         | valor entero largo |

---

## Margen hor.

Value to add (in pixels) to the bottom margin of the form when the [form size](#size-based-on) is **Automatic size** or `\&#060;object name&#062;`.

This value also determines the top margins of forms used in the Label editor.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles   |
| ------------ | -------------- | ------------------ |
| bottomMargin | number         | valor entero largo |

---

## Ancho

Width of the form (in pixels) when the [form size](#size-based-on) is **Set size**.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles   |
| ------ | -------------- | ------------------ |
| ancho  | number         | valor entero largo |
