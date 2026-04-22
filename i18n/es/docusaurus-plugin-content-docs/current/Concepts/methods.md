---
id: methods
title: Métodos
---

Un método es básicamente un trozo de código que ejecuta una o varias acciones. Un método se compone de instrucciones.

Una línea de instrucción realiza una acción, y puede ser simple o compleja. Cada instrucción generalmente consiste en una línea en el método (si es necesario, puede ser [dividida utilizando el carácter `\`](quick-tour.md#codigo-en-varias-lineas)).

El tamaño máximo de un método está limitado a 2 GB de texto o 32.000 líneas de código.

## Tipos de métodos

En el lenguaje 4D, hay varias categorías de métodos. La categoría depende de cómo se les pueda llamar:

| Tipo                                              | Contexto de llamada                                                                                                                                                                                                                     | Acepta los parámetros                      | Descripción                                                                                                                                                                                                                                 |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos proyecto**                              | Por demanda, cuando se llama al nombre del método proyecto (ver [Llamando a métodos proyecto](#calling-project-methods))                                                                                             | Sí                                         | Puede contener código para ejecutar acciones personalizadas. Una vez creado un método proyecto, pasa a formar parte del lenguaje del proyecto.                                                              |
| **Método objeto (widget)**     | Automático, cuando un evento involucra al objeto al que se asocia el método                                                                                                                                                             | No                                         | Propiedad de un objeto formulario (también llamado widget)                                                                                                                                                               |
| **Método formulario**                             | Automático, cuando un evento involucra al formulario al que se asocia el método                                                                                                                                                         | No                                         | Propiedad de un formulario. Puede utilizar un método formulario para gestionar datos y objetos, pero generalmente es más sencillo y eficiente utilizar un método objeto para estos fines.                   |
| **Trigger** (o *método tabla*) | Automático, cada vez que se manipulan los registros de una tabla (Añadir, Eliminar y Modificar)                                                                                                                      | No                                         | Propiedad de una tabla. Los triggers son métodos que pueden evitar operaciones "ilegales" con los registros de su base.                                                                                     |
| **Método base**                                   | Automático, cuando se produce un evento de la sesión de trabajo                                                                                                                                                                         | Sí (predefinido)        | Hay 16 métodos base en 4D.                                                                                                                                                                                                  |
| **Class**                                         | Automatically called when an object of the class is instantiated or when a function of the class is executed on an object instance in any other methods or in a [database field](../Develop/field-properties.md#class). | sí (funciones de clase) | Ver [**Clases**](classes.md) A **Class** is used to declare and configure the class [constructor](./classes.md#class-constructor), [properties](./classes.md#property*), and [functions](./classes.md#function) of objects. |


