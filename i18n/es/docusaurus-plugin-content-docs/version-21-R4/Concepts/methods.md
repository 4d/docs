---
id: methods
title: Métodos
---

Un método es básicamente un trozo de código que ejecuta una o varias acciones. Un método se compone de instrucciones.

Una línea de instrucción realiza una acción, y puede ser simple o compleja. Cada instrucción generalmente consiste en una línea en el método (si es necesario, puede ser [dividida utilizando el carácter `\`](quick-tour.md#codigo-en-varias-lineas)).

El tamaño máximo de un método está limitado a 2 GB de texto o 32.000 líneas de código.

## Tipos de métodos

En el lenguaje 4D, hay varias categorías de métodos. La categoría depende de cómo se les pueda llamar:

| Tipo                                              | Contexto de llamada                                                                                                                                                                                                                                               | Acepta los parámetros                      | Descripción                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos proyecto**                              | Bajo demanda, cuando el nombre del método del proyecto [es llamado](../Project/project-method-properties.md)                                                                                                                                                      | Sí                                         | Puede contener código para ejecutar acciones personalizadas. Una vez creado un método proyecto, pasa a formar parte del lenguaje del proyecto.                                                                                                                                 |
| **Método objeto (widget)**     | Automático, cuando un evento involucra al objeto al que se asocia el método                                                                                                                                                                                       | No                                         | Propiedad de un objeto formulario (también llamado widget)                                                                                                                                                                                                                                  |
| **Método formulario**                             | Automático, cuando un evento involucra al formulario al que se asocia el método                                                                                                                                                                                   | No                                         | Propiedad de un formulario. Puede utilizar un método formulario para gestionar datos y objetos, pero generalmente es más sencillo y eficiente utilizar un método objeto para estos fines.                                                                                      |
| **Trigger** (o *método tabla*) | Automático, cada vez que se manipulan los registros de una tabla (Añadir, Eliminar y Modificar)                                                                                                                                                | No                                         | Propiedad de una tabla. Los triggers son métodos que pueden evitar operaciones "ilegales" con los registros de su base.                                                                                                                                                        |
| **Método base**                                   | Automático, cuando se produce un evento de la sesión de trabajo                                                                                                                                                                                                   | Sí (predefinido)        | Hay 16 métodos base en 4D.                                                                                                                                                                                                                                                                     |
| **Class**                                         | Se llama automáticamente cuando un objeto de la clase es instanciado o cuando una función de la clase es ejecutada en una instancia de un objeto en cualquier otro método o en un [campo de base de datos](../Develop/field-properties.md#class). | sí (funciones de clase) | Una **Clase** se utiliza para declarar y configurar la clase [constructor](./classes.md#class-constructor), [propiedades](./classes.md#property) y [funciones](./classes.md#function) de objetos. Ver [**Clases**](classes.md) y [clase **Función**](../API/FunctionClass.md). |

## Language tokens

4D's language includes a unique tokenization system for constants, commands, tables, fields and keywords names that are used in the code. Tokenizing these names means that as you type in the code editor they are stored internally as absolute references (numbers) and then restored as text during execution or display depending on the context. This allows you to guarantee that the code will always be interpreted correctly, even if you rename your tables or fields, or when 4D language commands are renamed over the course of different application versions.

**Note:** This also ensures automatic translation of the code when you have enabled the ["Use regional system settings" preference](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) and open your databases with 4D versions in different languages.

Tokenisation is completely transparent for 4D developers when working in the [4D code editor](../code-editor/write-class-method.md), and you generally won't need to worry about it. However, there are two cases where you might need to take action regarding tokenization: if you want to disable it, and if you want to use tokenization in your formulas.

### Disabling tokenization

When your project is stored on a version control system (VCS) such as GitHub or GitLab, you may want to disable tokenization to make the code more readable on the external platform. To do this, you can deselect the [**Include tokens in project source files**](../Preferences/general.md#include-tokens-in-project-source-files) preference to prevent tokens from being stored in your **new projects**.

You can configure your **existing projects** to save code without tokens by inserting the following key in the `<applicationName>.4DProject` file using a text editor:

```json
"tokenizedText": false
```

Este parámetro sólo se tiene en cuenta cuando se guardan los métodos. Los métodos existentes en sus proyectos no se modifican, a menos que los vuelva a guardar.

### Using tokens in formulas

A text-based 4D [formula](../commands/theme/Formulas.md) is a text that is interpreted at runtime, and not as it is typed. In fact, this is the case as soon as 4D code is expressed as raw text, more specifically when code is exported and then imported using the [`METHOD GET CODE`](../commands/method-get-code) and [`METHOD SET CODE`](../commands/method-set-code) commands, copied/pasted or [interpreted from 4D HTML tags](../Tags/transformation-tags.md).
To benefit from tokenization mechanisms in these contexts, you just need to use an explicit syntax which consists in preceding object names in the language by their token.

### Token syntax

For tokenizable named elements contained in expressions, 4D offers a special syntax you can use to reference the tokens directly: you just need to add a specific suffix after the element name to indicate its type (command, field, etc.), followed by its reference. The token syntax is detailed in this table:

| Elemento    | Example (standard syntax)                        | Suffix                                  | Example (token syntax)                                                               | Comentarios                                                                                            |
| ----------- | ------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 4D Command  | String(a)                                        | :Cxx                    | String:C10(a)                                                        | xx is the command number                                                                               |
| 4D Constant | Pi                                                                  | :Kxx:yy | Pi:K30:1                                                                | xx is the ID of the constant group and yy is its index (position) within this group |
| Tabla       | [Employees]     | :xx                     | [Employees:1]                       | xx is the table number                                                                                 |
| Campo       | [Employees]Name | :xx                     | [Employees:1]Name:2 | xx is the field number                                                                                 |
| 4D Plugin   | PV PRINT(area)                                   | :Pxx:yy | PV PRINT:P13000:229(area)                            | xx is the plug-in ID and yy is the index of the command                                                |

**Note:** Uppercase letters (C, P) must be used in the suffixes; otherwise, they will not be interpreted correctly.

When you use this syntax, you guarantee that your formulas will be interpreted correctly even in the case of renaming or when the database is executed in a different language.

This syntax is accepted in all 4D formulas (or 4D expressions) regardless of the calling context:

- 4D formulas executed using the Formula editor or using commands such as [`EXECUTE FORMULA`](../commands/execute-formula), [`APPLY TO SELECTION`](../commands/apply-to-selection), [`QUERY BY FORMULA`](../commands/query-by-formula), [`LISTBOX INSERT COLUMN FORMULA`](../commands/listbox-insert-column-formula), etc.
- expressions inserted in [multi-style text areas](../FormObjects/properties_Text.md#supported-tags) (see ST INSERT EXPRESSION),
- expressions calculated in [transformation tags](../Tags/transformation-tags.md),
- expressions inserted in external areas such as [4D Write Pro areas](../WritePro/managing-formulas.md).

#### Where to find the element numbers?

The token syntax requires the addition of the reference numbers of various elements. The location of these references depends on the type of element.

- **4D commands:** Command numbers can be found in the documentation ("Properties" area) as well as on the Commands page of the Explorer.
- **Tables and fields**: Table and field numbers can be obtained using the [`Table`](../commands/table) and [`Field`](../commands/field) commands. They are also displayed in the Inspector palette of the Structure editor.