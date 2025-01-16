---
id: formSize
title: Tamaño formulario
---

4D permite definir el tamaño tanto del formulario como de la [ventana](properties_WindowSize.md). Estas propiedades son interdependientes y su interfaz de aplicación es el resultado de su interacción.

Las opciones de tamaño dependen del valor de la opción **Tamaño basado en**.

---

## Tamaño basado en

- **Tamaño automático**: el tamaño del formulario será el necesario para mostrar todos los objetos, al que se añadirán los valores de margen (en píxeles) introducidos en los campos [**Margen Hor**](#hor-margin) y [**Margen Vertical**](#vert-margin).

  Puede elegir esta opción cuando desee utilizar objetos activos situados en un área fuera de la pantalla (_es decir_, fuera del rectángulo delimitador de la ventana) con una ventana de tamaño automático. Gracias a esta opción, la presencia de estos objetos no modificará el tamaño de la ventana.

- **Definir tamaño**: el tamaño del formulario se basará en lo que introduzca (en píxeles) en los campos [**Ancho**](#width) y [**Alto**](#height).

- `<object name>`: el tamaño del formulario se basará en la posición del objeto formulario seleccionado. Por ejemplo, si elige un objeto situado en la parte inferior derecha del área a mostrar, el tamaño del formulario consistirá en un rectángulo cuya esquina superior izquierda será el origen del formulario y la esquina inferior derecha corresponderá a la del objeto seleccionado, más los valores de los márgenes.

> Para los formularios de salida, sólo están disponibles los campos [**Margen horizontal**](#hor-margin) o [**Ancho**](#width).

#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                   |
| -------------- | -------------- | ------------------------------------------------------------------ |
| formSizeAnchor | string         | Nombre del objeto a utilizar para definir el tamaño del formulario |

---&#x20;

## Altura

Altura del formulario (en píxeles) cuando el [tamaño del formulario](#size-based-on) es definido en **Definir tamaño**.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles   |
| ------ | -------------- | ------------------ |
| height | number         | valor entero largo |

---&#x20;

## Margen hor.

Valor a añadir (en píxeles) al margen inferior del formulario cuando el [tamaño del formulario](#size-based-on) está definido en **Tamaño automático** o `\<object name>`

Este valor también determina los márgenes derechos de los formularios utilizados en el editor de etiquetas.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles   |
| ----------- | -------------- | ------------------ |
| rightMargin | number         | valor entero largo |

---

## Margen hor.

Valor a añadir (en píxeles) al margen inferior del formulario cuando el [tamaño del formulario](#size-based-on) está definido en **Tamaño automático** o `\<object name>`.

Este valor también determina los márgenes superiores de los formularios utilizados en el editor de etiquetas.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles   |
| ------------ | -------------- | ------------------ |
| bottomMargin | number         | valor entero largo |

---&#x20;

## Ancho

Ancho del formulario (en píxeles) cuando el [tamaño del formulario](#size-based-on) está definido en **Definir tamaño**.

#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles   |
| ------ | -------------- | ------------------ |
| ancho  | number         | valor entero largo |
