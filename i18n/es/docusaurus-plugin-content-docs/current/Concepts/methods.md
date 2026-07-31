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

## Tokens de lenguaje

El lenguaje 4D incluye un sistema único de tokenización para las constantes, los comandos, las tablas, los campos y los nombres de las palabras clave que se utilizan en el código. La tokenización de estos nombres implica que, a medida que se escriben en el editor de código, se almacenan internamente como referencias absolutas (números) y, posteriormente, se restauran como texto durante la ejecución o la visualización, según el contexto. Esto le permite garantizar que el código siempre será interpretado correctamente, incluso si renombra sus tablas o campos, o cuando los comandos del lenguaje 4D se renombran en el curso de las diferentes versiones de la aplicación.

**Nota:** esto también garantiza la traducción automática del código cuando se ha activado la [preferencia "Utilizar la configuración regional del sistema"](../Preferences/methods.md#4d-programming-language-use-regional-system-settings) y se abren bases de datos con versiones de 4D en diferentes lenguajes.

La tokenización es totalmente transparente para los desarrolladores de 4D cuando trabajan en el [editor de código de 4D](../code-editor/write-class-method.md), y, por lo general, no tendrá que preocuparse por ello. Sin embargo, hay dos casos en los que podría ser necesario tomar medidas con respecto a la tokenización: si quiere desactivarla y si quiere utilizar la tokenización en sus fórmulas.

### Desactivación de la tokenización

Cuando su proyecto se almacena en un sistema de control de versiones (VCS) como GitHub o GitLab, puede deshabilitar la tokenización para hacer el código más legible en la plataforma externa. Para hacer esto, puede deseleccionar la opción [**Incluir los tokens en los archivos fuente del proyecto**](../Preferences/general.md#include-tokens-in-project-source-files) para evitar que los tokens se almacenen en sus **nuevos proyectos**.

Puede configurar sus **proyectos existentes** para guardar código sin tokens insertando la siguiente llave en el archivo `<applicationName>.4DProject`utilizando un editor de texto:

```json
"tokenizedText": false
```

Este parámetro sólo se tiene en cuenta cuando se guardan los métodos. Los métodos existentes en sus proyectos no se modifican, a menos que los vuelva a guardar.

### Uso de tokens en fórmulas

Una [fórmula 4D](../commands/theme/Formulas.md) de tipo texto es un texto que se interpreta en tiempo de ejecución, y no a medida que se escribe. De hecho, esto ocurre cuando el código 4D se expresa como texto sin formato, más concretamente cuando el código se exporta y luego se importa mediante los comandos [`METHOD GET CODE`](../commands/method-get-code) y [`METHOD SET CODE`](../commands/method-set-code), se copia y pega o se [interpreta a partir de etiquetas HTML 4D](../Tags/transformation-tags.md).
Para beneficiarse de los mecanismos de tokenización en estos contextos, sólo necesita usar una sintaxis explícita que consiste en preceder nombres de objetos en el lenguaje por su token.

### Sintaxis tokenizada

Para los elementos tokenizables contenidos en las expresiones, 4D ofrece una sintaxis especial que se puede utilizar para referenciar los tokens directamente: solo debe añadir un sufijo específico después del nombre del elemento para indicar su tipo (comando, campo, etc.), seguido de su referencia. La sintaxis tokenizada se detalla en esta tabla:

| Elemento     | Ejemplo (sintaxis estándar)                      | Sufijo                                  | Ejemplo (sintaxis tokenizada)                                                        | Comentarios                                                                                                            |
| ------------ | ------------------------------------------------------------------- | --------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Comando 4D   | String(a)                                        | :Cxx                    | String:C10(a)                                                        | xx es el número del comando                                                                                            |
| Constante 4D | Pi                                                                  | :Kxx:yy | Pi:K30:1                                                                | xx corresponde al identificador del grupo de constantes y yy es su índice (posición) en dicho grupo |
| Tabla        | [Employees]     | :xx                     | [Employees:1]                       | xx corresponde al número de tabla                                                                                      |
| Campo        | [Employees]Name | :xx                     | [Employees:1]Name:2 | xx corresponde al número del campo                                                                                     |
| 4D Plugin    | PV PRINT(area)                                   | :Pxx:yy | PV PRINT:P13000:229(area)                            | xx es el identificador del plug-in y yy es el índice del comando                                                       |

**Nota:** en los sufijos deben utilizarse letras mayúsculas (C, P); de lo contrario, no se interpretarán correctamente.

Cuando utiliza esta sintaxis, garantiza que sus fórmulas se interpretarán correctamente incluso en el caso de renombrar o cuando la base de datos se ejecuta en un lenguaje diferente.

Esta sintaxis es válida en todas las fórmulas 4D (o expresiones 4D), independientemente del contexto en el que se utilicen:

- fórmulas 4D ejecutadas usando el editor de fórmulas o utilizando comandos como [`EXECUTE FORMULA`](../commands/execute-formula), [`APPLY TO SELECTION`](../commands/apply-to-selection), [`QUERY BY FORMULA`](../commands/query-by-formula), [`LISTBOX INSERT COLUMN FORMULA`](../commands/listbox-insert-column-formula), etc.
- expresiones insertadas en [áreas de texto multiestilos](../FormObjects/properties_Text.md#supported-tags) (ver [`ST INSERT EXPRESSION`](../commands/st-insert-expression)),
- expresiones calculadas en [etiquetas de transformación](../Tags/transformation-tags.md),
- expresiones insertadas en áreas externas, como las [áreas 4D Write Pro](../WritePro/managing-formulas.md).

#### ¿Dónde se pueden encontrar los números de los elementos?

La sintaxis de token requiere la adición de los números de referencia de diferentes elementos. La ubicación de estas referencias depende del tipo de elemento.

- **Comandos 4D:** los números de comando se pueden encontrar en la documentación (sección "Propiedades") así como en la página de Comandos del Explorador.
- **Tablas y campos**: los números de tablas y de campos se pueden obtener utilizando los comandos [`Table`](../commands/table) y [`Field`](../commands/field). También se muestran en la paleta Inspector del editor Estructura.