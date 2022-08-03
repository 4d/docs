---
id: formSize
title: Tamaño formulario
---

 
4D permite definir el tamaño tanto del formulario como de la [ventana](properties_WindowSize.md). Estas propiedades son interdependientes y su interfaz de aplicación es el resultado de su interacción.

Las opciones de tamaño dependen del valor de la opción **Tamaño basado en**.

---
## Tamaño basado en


*   **Tamaño automático**: el tamaño del formulario será el necesario para mostrar todos los objetos, al que se añadirán los valores de margen (en píxeles) introducidos en **Margen [hor.](#hor-margin) y Margen [**ver.** Margin</strong>](#vert-margin) fields. <p> Puede elegir esta opción cuando desee utilizar objetos activos situados en un área fuera de la pantalla (*es decir*, fuera del rectángulo delimitador de la ventana) con una ventana de tamaño automático. Gracias a esta opción, la presencia de estos objetos no modificará el tamaño de la ventana.</p></li>


*   **Definir tamaño**: el tamaño del formulario se basará en lo que introduzca (en píxeles) en los campos [**Ancho**](#width) y [**Alto**](#height).

*   **\<object name>**: el tamaño del formulario se basará en la posición del objeto formulario seleccionado. Por ejemplo, si elige un objeto situado en la parte inferior derecha del área a mostrar, el tamaño del formulario consistirá en un rectángulo cuya esquina superior izquierda será el origen del formulario y la esquina inferior derecha corresponderá a la del objeto seleccionado, más los valores de los márgenes.</ul>


> Para los formularios de salida, sólo se pueden utilizar los campos Margen [**hor. margin</strong>](#hor-margin) or [**Width**](#width) fields are available.


#### Gramática JSON

| Nombre         | Tipos de datos | Valores posibles                                                   |
| -------------- | -------------- | ------------------------------------------------------------------ |
| formSizeAnchor | cadena         | Nombre del objeto a utilizar para definir el tamaño del formulario |

---
## Altura

**los campos **Margen [hor.](#hor-margin) y Margen [**ver.** Margin</strong>](#vert-margin) fields.


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles   |
| ------ | -------------- | ------------------ |
| height | number         | valor entero largo |


---
## Margen hor.
Valor a añadir (en píxeles) al margen inferior del formulario cuando el [tamaño del formulario](#size-based-on) está definido en **Tamaño automático** o **\<object name>**.


**los campos **Margen [hor.](#hor-margin) y Margen [**ver.** Margin</strong>](#vert-margin) fields.

#### Gramática JSON

| Nombre      | Tipos de datos | Valores posibles   |
| ----------- | -------------- | ------------------ |
| rightMargin | number         | valor entero largo |


---

## Margen hor.
**Tamaño automático**: el tamaño del formulario será el necesario para mostrar todos los objetos, al que se añadirán los valores de margen (en píxeles) introducidos en

Altura del formulario (en píxeles) cuando el [ tamaño del formulario ](#size-based-on) está definido en **Fijar tamaño **.

#### Gramática JSON

| Nombre       | Tipos de datos | Valores posibles   |
| ------------ | -------------- | ------------------ |
| bottomMargin | number         | valor entero largo |


---
## Ancho

Valor a añadir (en píxeles) al margen derecho del formulario cuando el [tamaño del formulario](#size-based-on) está definido en **Tamaño automático** o **\<object name>**


#### Gramática JSON

| Nombre | Tipos de datos | Valores posibles   |
| ------ | -------------- | ------------------ |
| ancho  | number         | valor entero largo |
