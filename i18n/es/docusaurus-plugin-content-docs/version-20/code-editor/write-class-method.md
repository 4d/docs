---
id: write-class-method
title: Editor de código
---

4D tiene un poderoso editor de código integrado que ofrece un amplio conjunto de funcionalidades para la edición de código altamente productivo, como la finalización inteligente de código, la navegación de código, la depuración, la búsqueda y más.

![](../assets/en/code-editor/code-editor-overview.png)

El editor de código funciona como un editor de texto. Escribir un método o una clase suele ser una combinación de escribir texto, seleccionar componentes y arrastrar elementos desde el Explorador u otras ventanas. También se pueden utilizar varias funciones de tecleo predictivo para crear métodos más rápidamente.

Puede desplazarse por el contenido de métodos, clases y funciones, que pueden incluir hasta 32.000 líneas de código o 2 GB de texto.

El Editor de Código 4D ofrece una comprobación básica de errores de sintaxis. Cuando se ejecuta el código se realiza una comprobación adicional de errores. Para más información sobre cómo gestionar los errores, consulte [Depuración](../Debugging/basics.md).

## Interface

### Toolbar (Barra de herramientas)

Cada ventana del Editor de Código tiene una barra de herramientas que ofrece acceso instantáneo a las funciones básicas relacionadas con la ejecución y edición de código.

| Elemento                             | Icono                                                                             | Descripción                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Ejecución del método**             | ![execute-method](../assets/en/code-editor/execute-method.png)                    | Cuando se trabaja con métodos, cada ventana del Editor de Código tiene un botón que puede utilizarse para ejecutar el método actual. Mediante el menú asociado a este botón, se puede elegir el tipo de ejecución:<ul><li> **Ejecutar nuevo proceso**: crea un proceso y ejecuta el método en modo estándar en este proceso.</li><li>**Ejecutar y depurar nuevo proceso**: crea un nuevo proceso y muestra el método en la ventana Depurador para la ejecución paso a paso en este proceso.</li><li>**Ejecutar en el proceso de Aplicación**: ejecuta el método en modo estándar en el contexto del proceso de Aplicación (en otras palabras, la ventana de visualización de registros).</li><li>**Ejecutar y depurar en el proceso Aplicación**: muestra el método en la ventana Depurador para su ejecución paso a paso en el contexto del proceso Aplicación (es decir, en la ventana de visualización de registros).</li></ul>Para obtener más información sobre la ejecución de métodos, consulte [Llamar Métodos Proyecto](../Concepts/methods.md#calling-project-methods). |
| **Buscar en el método**              | ![search-icon](../assets/en/code-editor/search.png)                               | Muestra el [*área de búsqueda*](#find-and-replace).                                                                                                                                                                                                                                                                                                                                        |
| **Macros**                           | ![macros-button](../assets/en/code-editor/macros.png)                             | Inserta una macro en la selección. Haga clic en la flecha desplegable para mostrar una lista de macros disponibles. Para obtener más información sobre como crear e instanciar macros, consulte [Macros](creating-using-macros.md).                                                                                                                                                        |
| **Expandir todo/Contraer todo**      | ![expand-collapse-button](../assets/en/code-editor/expand-collapse-all.png)       | Estos botones permiten expandir o contraer todas las estructuras de flujo de control del código.                                                                                                                                                                                                                                                                                           |
| **Información del método**           | ![method-information-icon](../assets/en/code-editor/method-information.png)       | Displays the [Method Properties](./overview.md#project-method-properties) dialog box (project methods only).                                                                                                                                                                                                                                                                               |
| **Últimos valores del portapapeles** | ![last-clipboard-values-icon](../assets/en/code-editor/last-clipboard-values.png) | Muestra los últimos valores almacenados en el portapapeles.                                                                                                                                                                                                                                                                                                                                |
| **Portapapeles**                     | ![iconos del portapapeles](../assets/en/code-editor/clipboards.png)               | Nueve portapapeles disponibles en el editor de código. You can [use these clipboards](#clipboards) by clicking on them directly or by using keyboard shortcuts. Puede utilizar la opción [Preferencias](Preferences/methods.md#options-1) para ocultarlas.                                                                                                                                 |
| **Despliegue de navegación**         | ![code-navigation-icons](../assets/en/code-editor/tags.png)                       | Le permite navegar dentro de métodos y clases con contenido etiquetado automáticamente o marcadores declarados manualmente. Ver abajo                                                                                                                                                                                                                                                      |


### Área de edición

Aquí es donde se escribe y edita el código. El editor aplica automáticamente sangrías al texto del código y colorea los distintos elementos sintácticos para que la estructura del código sea clara.

Puede personalizar la visualización del área de edición. Toda personalización se transmite automáticamente a todas las ventanas del editor de código:

| Option                                          | Descripción                                                                                                                                                                                                 | Definido en...                                                                                                                                                   |
| ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **fuente** y **tamaño de la fuente**            | Define la fuente y el tamaño de los caracteres que se utilizarán en el área de edición                                                                                                                      | **Preferencias** > [**Métodos**](../Preferences/methods.md) o **Método > Vista** > **Fuente más grande** o **Fuente más pequeña**                                |
| **estilo y color de los elementos de sintaxis** | Asignar un color y/o estilo específico a cada tipo de elemento del lenguaje 4D.  También puede cambiar los distintos colores utilizados en la interfaz del área de edición (resaltado, fondo, etc.).        | Haga clic derecho en un elemento lingüístico (variable, palabra clave, etc.) > Submenú **Estilo**. O **Preferencias** > [**Métodos**](../Preferences/methods.md) |
| **espacios**                                    | Puede mostrar los espacios entre palabras utilizando puntos (.) en lugar de espacios en blanco. Esta opción se aplica a todos los elementos del código (nombres de comandos, variables, comentarios, etc.). | **Método > Ver > Espacios en blanco**                                                                                                                            |
| **temas**                                       | Puedes seleccionar el tema Dark o Light, o definir uno personalizado                                                                                                                                        | **Preferencias** > [**Métodos**](../Preferences/methods.md)                                                                                                      |
| **ancho de indentaciones de código**            | Define el ancho de las sangrías de código                                                                                                                                                                   | **Preferencias** > [**Métodos**](../Preferences/methods.md)                                                                                                      |

#### Barras de cambio

Las barras de colores muestran al instante dónde se han modificado las líneas de código desde que se abrió el método:

![](../assets/en/code-editor/change-bars.png)

Las barras de modificación cambian de color para indicar si las modificaciones se han guardado o no:

- amarillo: se ha modificado la línea y aún no se ha guardado el método.
- verde: se ha modificado la línea y se ha guardado el método.



### Área listas

El área listas permite visualizar una o varias listas de elementos necesarios para escribir métodos y clases (comandos, constantes, formularios, etc.). Puede elegir el número y el contenido de las listas que aparecen en la ventana.

Por defecto, el editor de código muestra cuatro listas. Puede ocultar o mostrar todas las listas haciendo clic en el icono situado en la parte inferior derecha de la ventana. ![](../assets/en/code-editor/show-hide-list.png)

Puede ampliar o reducir el ancho relativo de cada área lista arrastrando una de sus particiones. También es posible ajustar el tamaño del área lista en relación con el del área de edición arrastrando la línea divisoria entre ambas.

- Al hacer doble clic en un elemento de una lista, éste se inserta en el área de edición, en la posición del cursor.
- Para **modificar el contenido** de una lista, haga clic en el área del título de la lista en cuestión: aparecerá un menú emergente que le permitirá elegir el tipo de elemento que desea visualizar.

![](../assets/en/code-editor/list-area.png)

- Para añadir o eliminar una lista, haga clic en el área del título de una de las listas y elija el comando correspondiente en el menú emergente. El comando **Eliminar esta lista** se desactiva al hacer clic en la última lista. Si desea ocultar todas las listas, debe hacer clic en el botón **mostrar u ocultar listas** situado en la parte inferior derecha de la ventana u ocultarlas por defecto en las **Preferencias**.

- Puede ocultar las listas en todas las ventanas de las siguientes maneras:
  - Seleccione la opción **Ver > Listas** en el menú **Método** (una marca de verificación indica si se muestran las listas)
  - For practical reasons, you can disable the automatic display of the list of suggestions for **constants**, **(local or interprocess) variables and object attributes** and/or **tables**. These options are found in **Preferences** > **Methods** > **Options**

#### Listas de elementos disponibles

Puede mostrar las siguientes listas de elementos en el área de listas de la ventana del Editor de código:

- **Todas las tablas y campos**: nombres de tablas y campos de la base de datos en forma de lista jerárquica. Cuando inserta un nombre de campo en el método haciendo doble clic sobre su nombre, 4D lo inserta respetando la sintaxis y añade el nombre de la tabla o subtabla según el caso.
- **Tabla** (submenú): nombres de los campos de la tabla seleccionada utilizando el submenú.
- **Tabla actual**: nombres de campo de la tabla actual (disponibles en triggers, métodos de formulario y métodos de objeto).
- **Formularios proyecto**: nombres de formularios proyectos de bases de datos. Cuando hace doble clic en el nombre de un formulario de proyecto, 4D lo inserta respetando la sintaxis: el nombre del formulario se inserta entre comillas.
- **Formularios tabla**: nombres de tablas y formularios de la base de datos en forma de lista jerárquica. Cuando inserta un nombre de formulario en un método haciendo doble clic en su nombre, 4D lo inserta respetando la sintaxis: el nombre del formulario se inserta entre comillas y va precedido del nombre de la tabla y de un punto y coma. Por ejemplo: [Table];"Form".
- **Métodos**: nombres de los métodos proyecto de la base de datos.
- **Todas las carpetas**: nombres de carpetas y subcarpetas de objetos definidos en la base de datos mostrados en forma de lista jerárquica. Las carpetas pueden utilizarse para organizar los objetos de forma personalizada. Se gestionan desde la página de inicio del Explorador.
- **Carpetas** (submenú): contenido de la carpeta seleccionada utilizando el submenú.
- **Macros**: Macro names defined for the database (see [Creating and using macros](./creating-using-macros.md)).
- **Comandos**: vomandos del lenguaje 4D por orden alfabético.
- **Comandos por temas**: comandos del lenguaje 4D clasificados por temas en forma de lista jerárquica.
- **Barras de menú**: nombres y números de las barras de menú [creadas con el editor de barras de menú 4D](../Menus/creating.md).
- **Constantes**: constantes 4D y de los posibles plug-ins, clasificadas por temas en forma de lista jerárquica.
- **Listas**: nombres de listas.
- **Todos los comandos de los plug-ins**: comandos para todos los plug-ins instalados en la base de datos (si los hay), clasificados por temas en forma de lista jerárquica.
- **Palabras clave SQL**: conjunto de palabras clave reconocidas por el analizador sintáctico de 4D SQL. Esta lista incluye comandos (por ejemplo, SELECT), cláusulas (por ejemplo, WHERE) y funciones (ABS).
- **Funciones SQL**: Funciones SQL 4D.

**Nota:** excepto para el elemento Macros, todas las listas están en orden alfabético.

#### Guardar como plantilla

Puede guardar las listas definidas en la ventana del Editor de código en forma de plantilla. Una vez guardada la plantilla, los parámetros establecidos en ella se utilizarán para cada nueva ventana del Editor de código que se abra.

Los siguientes parámetros se almacenan en la plantilla:

- Tamaño relativo de las áreas de edición y de la lista
- Número de listas
- Ubicación y contenido de cada lista
- Ancho relativo de cada lista

Para guardar una ventana del Editor de código como plantilla, seleccione **Método** > **Guardar como plantilla**. La plantilla se guarda inmediatamente (no aparece ningún diálogo). Se guarda en la página **Preferencias** de la aplicación 4D. Si ya existe una plantilla anterior, se sustituye.

### Área de puntos de ruptura

Esta áreaa, situada a la izquierda del área de edición, le permite visualizar los números de línea e insertar puntos de interrupción directamente junto a instrucciones específicas. Los puntos de interrupción son útiles durante la fase de depuración de su programación. Detienen la ejecución de su código en lugares específicos y muestran el depurador.

Para obtener más información sobre los puntos de interrupción, consulte la sección [Depurador](../Debugging/breakpoints.md#breakpoints).

Puede mostrar u ocultar los números de línea en el área de puntos de interrupción para cada ventana del Editor de código.

- Para activar o desactivar la visualización de los números de línea por defecto, seleccione **Preferencias** > **Métodos** > **Mostrar números de línea**.
- Para modificar esta visualización por separado para cada ventana del Editor de Código, elija **Método** > **Ver** > **Números de línea**.

La visualización de los números de línea facilita la orientación en la ventana. **Método ** > **Ir al número de línea...** también le permite aprovechar esta visualización.

Este tipo de búsqueda es útil cuando se utiliza junto con el [compilador](../Project/compiler.md), que señala los errores de ejecución por el número de línea en el que se producen.

### Barra de estado

La barra de estado situada en la parte inferior derecha de la ventana del editor muestra la posición del cursor en todo momento:

![](../assets/en/code-editor/status-bar.png)

- **Ln**: número de línea
- **Col**: número de columna, es decir, el nivel en la jerarquía de las estructuras de programación. El primer nivel es 0. El número de columna es útil para la depuración, ya que esta información puede ser proporcionada por el intérprete en caso de error en el código.
- **Ch**: ubicación del caracter en la línea.
- ![](../assets/en/code-editor/show-hide-list.png): Ocultar/mostrar listas.

Al situar el cursor en un comando, función o parámetro(s), la barra de estado muestra la sintaxis del comando. Si escribe o selecciona un parámetro, el área muestra el parámetro actual en **negrita**: ![](../assets/en/code-editor/status-bar-bold.png)

### Despliegue de navegación

La lista desplegable de navegación le ayuda a organizar su código y a navegar más fácilmente dentro de sus clases y métodos:

![dropdown-list](../assets/en/code-editor/dropdown-list.png)

Algunas etiquetas se añaden automáticamente y puede complementar la lista desplegable utilizando los [marcadores ](#manual-tagging).

#### Navegación en el código

Haga clic en un elemento de la lista desplegable para acceder a su primera línea en el código. También puede navegar con las teclas de flecha y presionar **Intro**.

#### Etiquetado automático

Los constructores, las declaraciones de métodos, las funciones y los atributos calculados se etiquetan automáticamente y se añaden a la lista desplegable.

Cuando no hay ninguna etiqueta en la clase/método, la herramienta muestra "Sin etiqueta".

Los siguientes elementos se añaden automáticamente:

| Icono                                                                       | Elemento                                       |
| --------------------------------------------------------------------------- | ---------------------------------------------- |
| ![no-tag-icon](../assets/en/code-editor/no-tag.png)                         | Sin etiqueta                                   |
| ![constructor-icon](../assets/en/code-editor/constructor.png)               | Class constructor o declaración de método      |
| ![computed-attribute-icon](../assets/en/code-editor/computed-attribute.png) | Atributo calculado (get, set, orderBy y query) |
| ![function-icon](../assets/en/code-editor/function.png)                     | Nombre de la función de clase                  |

#### Etiquetado manual

Añadiendo marcadores en su código, puede añadir las siguientes etiquetas a la lista desplegable:

| Icono                                                   | Elemento       |
| ------------------------------------------------------- | -------------- |
| ![mark-tag-icon](../assets/en/code-editor/mark-tag.png) | MARK: etiqueta |
| ![todo-tag-icon](../assets/en/code-editor/todo-tag.png) | TODO: etiqueta |
| ![fixme-icon](../assets/en/code-editor/fixme-tag.png)   | FIXME: tag     |

Se declaran añadiendo comentarios como:

```4d
// FIXME: Corrige los siguientes elementos
```

Las declaraciones no distinguen entre mayúsculas y minúsculas; escribir `fixme:` tiene el mismo efecto.

Añadir un guión después de la etiqueta `MARK:` dibuja una línea de separación en el editor de código y en el menú desplegable. Así que escribiendo esto:

![mark-hyphen-image](../assets/en/code-editor/mark-hyphen-editor.png)

Esto es lo que resulta:

![mark-hyphen-image](../assets/en/code-editor/dropdown-organize.png)

Todos los marcadores situados dentro de las funciones tienen sangría en la lista desplegable, excepto las etiquetas `MARK:` situadas al final de las funciones y no seguidas de instrucciones. Estos aparecerán en el primer nivel.

#### Orden de visualización

Las etiquetas se muestran en su orden de aparición dentro del método/clase.

Para mostrar las etiquetas de un método o de una clase en orden alfabético, realice una de las siguientes acciones:

- **haga clic derecho** en la herramienta desplegable
- mantenga **Cmd** en macOS o **Alt** en Windows, y haga clic en la herramienta de lista desplegable

> Las etiquetas dentro de las funciones se mueven con sus elementos padres.



### Atajos

Múltiples funcionalidades del editor de código de 4D están disponibles a través de atajos de teclado por defecto.

:::info macOS

En macOS, utilice la tecla **Command** en lugar de la tecla **Ctrl** mencionada (Windows).

:::

| **Atajo**                                                 | **Acción**                                                                                                                                           |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Selección y navegación**                                |                                                                                                                                                      |
| Doble clic                                                | Seleccionar un nombre de elemento del lenguaje                                                                                                       |
| [Alt]+doble clic                                          | Seleccionar un nombre de elemento del lenguaje que contenga espacios (constante, método, etc.)                                                       |
| [Shift]+[flecha derecha]                                  | Crear y ampliar la selección, caracter por caracter, hacia la derecha, o Reducir la selección, caracter por caracter, desde la izquierda             |
| [Shift]+[flecha izquierda]                                | Reducir la selección, caracter por caracter, desde la derecha o Crear y ampliar la selección, caracter por caracter, hacia la izquierda              |
| [Shift]+[flecha abajo]                                    | Crear y ampliar una selección, línea por línea, de arriba abajo                                                                                      |
| [Shift]+[flecha arriba]                                   | Crear y ampliar una selección, línea por línea, desde abajo hacia arriba                                                                             |
| [Ctrl]+[Shift]+[flecha derecha]                           | Crear y ampliar la selección, palabra por palabra, desde la derecha                                                                                  |
| [Ctrl]+[Shift]+[flecha izquierda]                         | Reducir la selección, palabra por palabra, desde la derecha, o crear y ampliar la selección, palabra por palabra, desde la izquierda                 |
| [Ctrl]+[flecha derecha]                                   | Mover el punto de inserción, palabra por palabra, de izquierda a derecha                                                                             |
| [Ctrl]+[flecha izquierda]                                 | Mover el punto de inserción, palabra por palabra, de derecha a izquierda                                                                             |
| [Alt]+[flecha abajo]                                      | Mover la(s) línea(s) donde está el cursor hacia abajo                                                                                                |
| [Alt]+[flecha arriba]                                     | Mover la(s) línea(s) donde está el cursor a la parte superior                                                                                        |
| [Home]                                                    | Colocar el punto de inserción al comienzo de la línea                                                                                                |
| [End]                                                     | Coloca el punto de inserción al final de la línea                                                                                                    |
| [Ctrl]+[Home]                                             | Colocar el punto de inserción al comienzo del método                                                                                                 |
| [Ctrl]+[End]                                              | Coloca el punto de inserción al final del método                                                                                                     |
| [Shift]+[Home]                                            | Seleccionar todos los caracteres de la línea situados a la izquierda del cursor                                                                      |
| [Shift]+[End]                                             | Selecciona todos los caracteres de la línea que están a la derecha del cursor                                                                        |
| [PgUp]                                                    | Desplazar el contenido del método, página a página, de abajo a arriba (no modifica el punto de inserción)                                            |
| [PgDn]                                                    | Desplazar el contenido del método, página a página, de arriba abajo (no modifica el punto de inserción)                                              |
| [**Introspección**](#goto-definition)                     |                                                                                                                                                      |
| [Ctrl]+K o [Alt]+doble clic                               | Igual que el comando [**Goto definition**](#goto-definition)                                                                                         |
| \[Ctrl\] (Windows) o \[Alt\] (macOS)+pasar sobre un token | Subraye el token (elemento lingüístico identificado). Haga clic en el token subrayado = igual que el comando [**Goto definition**](#goto-definition) |
| [**Buscar y reemplazar**](#find-and-replace)              |                                                                                                                                                      |
| [Ctrl]+F                                                  | Buscar                                                                                                                                               |
| [Ctrl]+G                                                  | Buscar siguiente                                                                                                                                     |
| [Ctrl]+[Shift]+G                                          | Buscar anterior                                                                                                                                      |
| [Ctrl]+E                                                  | Buscar el siguiente                                                                                                                                  |
| [Ctrl]+[Shift]+E                                          | Buscar el mismo anterior                                                                                                                             |
| [Ctrl]+[Alt]+F                                            | Reemplazar                                                                                                                                           |
| [Ctrl]+[Alt]+G                                            | Reemplazar siguiente                                                                                                                                 |
| [Ctrl]+[Alt]+[Shift]+G                                    | Reemplazar anterior                                                                                                                                  |
| [**Portapapeles**](#clipboards)                           |                                                                                                                                                      |
| [Shift]+clic o [Alt]+clic en el icono del portapapeles    | Copiar el texto seleccionado en el portapapeles                                                                                                      |
| [Ctrl]+[Shift]+tecla numérica                             | Copiar el texto seleccionado en el portapapeles numérico                                                                                             |
| [Ctrl]+clic en el icono del portapapeles                  | Pegar el contenido de un portapapeles en la posición del cursor                                                                                      |
| [Ctrl]+tecla numérica                                     | Pegar el contenido del portapapeles numérico en la posición del cursor                                                                               |

:::tip

La mayoría de estos atajos pueden personalizarse en la caja de diálogo [Preferencias 4D](../Preferences/shortcuts.md).

:::



## Edición de código

4D utiliza técnicas estándar de edición de texto para digitar y editar en el Editor de código.

El editor de código utiliza convenciones de visualización (estilo, color) para los elementos de sintaxis. You can [customize these conventions](#editing-area). A medida que digita, cuando valida su entrada, 4D evalúa el texto de la línea y aplica el formato de visualización adecuado. 4D también indenta cada línea a su nivel adecuado en relación con la línea precedente cuando utiliza estructuras de programación (If, End if...).

Puede utilizar las teclas de flecha para moverse rápidamente de línea a línea. Utilizar las teclas de flecha para desplazarse por varias líneas es más rápido que hacer clic porque el editor tarda en evaluar la línea en busca de errores.

En Windows, el editor de código incluye un editor de código de entrada (IME) para facilitar la edición de código en sistemas japoneses o chinos.

El Editor de código incluye numerosos [atajos de navegación](#shortcuts).

#### Uso de la barra invertida

El carácter barra invertida (`\`) tiene un soporte específico en el lenguaje 4D:

- insertado al final de las líneas, permite escribir una única instrucción en [varias líneas](../Concepts/quick-tour.md#code-on-several-lines).
- permite definir [secuencias de escape](../Concepts/quick-tour.md#escape-sequences).


:::caution

El caracter de barra invertida (`\`) se utiliza como separador en [los nombres de ruta en Windows](../Concepts/paths.md#windows). En general, 4D interpretará correctamente los nombres de ruta de Windows introducidos en el Editor de código sustituyendo la barra invertida simple `\` por una barra invertida doble ``\\`. Por ejemplo,``C:\MisDocumentos`se convertirá en`C:\MisDocumentos`. Sin embargo, si escribe`"C:\MisDocumentos\New"`, 4D mostrará`"C:\MisDocumentos\New"`. En este caso, la segunda barra invertida se interpreta incorrectamente como`\N`(una [secuencia de escape] existente (../Concepts/quick-tour.md#escape-sequences)). Por lo tanto, debe introducir una barra invertida doble`\\` cuando quiera insertar una barra invertida antes de un caracter que se utiliza en una de las secuencias de escape reconocidas por 4D.

:::



### Arrastrar y soltar

Desde el Explorador, puede arrastrar y soltar tablas, campos, formularios, métodos proyecto, constantes o comandos 4D. Cuando arrastra y suelta un elemento, 4D siempre utiliza la sintaxis correcta. Por ejemplo, si arrastra el nombre del campo First Name `[People]`, aparecerá en el Editor de código como `[People]First Name`. Del mismo modo, si arrastra el nombre del formulario Entrada desde la tabla People, aparecerá en el Editor de Código como `[People];"Input"`.

Cuando inserta un comando arrastrándolo desde la página **Comandos** del Explorador, aparece con su sintaxis (que consiste en todos sus parámetros) en el Editor de Código. Esta funcionalidad simplemente le recuerda los parámetros que espera el comando. A continuación, puede utilizar una sintaxis que se adapte mejor a su uso.


También puede arrastrar y soltar dentro de un método, clase, función o entre dos diferentes. En el Editor de código, el mecanismo de arrastrar y soltar se activa en cuanto se selecciona una parte del texto. Por defecto, el mecanismo de arrastrar y soltar **mueve** el texto seleccionado. Para **copiarlo**, mantenga presionada la tecla **Ctrl** (Windows) o la tecla **Opción** (macOS) durante la operación.



### Alternancia entre mayúsculas y minúsculas

Puede modificar automáticamente las mayúsculas y minúsculas de los caracteres seleccionados utilizando los comandos en **Métodos** > **Mayúsculas y minúsculas** o el menú contextual del editor:

- **Mayúsculas** / **Minúsculas**: cambia los caracteres seleccionados a mayúsculas o minúsculas.
- **cameyúsculas** / **cameyúsculas**: cambia los caracteres seleccionados a "cameyúsculas". Consiste en cambiar cada primera letra de un grupo de palabras adjuntas a mayúsculas. Este tipo de notación se utiliza a menudo para las nomenclaturas variables. hireDate y PurchaseDate son ejemplos de dos variantes de la notación cameyúsculas.

Cuando aplica uno de estos comandos a una selección de texto, se eliminan los espacios y los caracteres "_" y la primera letra de cada palabra pasa a ser mayúscula.

### Intercambiar expresión

La función **cameyúsculas** puede utilizarse para invertir los argumentos de una expresión que asigna un valor. Por ejemplo,

`variable1:=variable2`

se convierte en

`variable2:=variable1`

Esta función es extremadamente útil para invertir un conjunto de asignaciones utilizadas para obtener o definir propiedades, o para corregir errores de entrada. Within the selection, only the lines assigning a value will be modified. To use this function, select the line(s) to be modified, then choose **Method** > **Swap Expression** or use the context menu of the area.

### Portapapeles

Además de la operación estándar de copiar y pegar, 4D ofrece dos funciones adicionales que le permiten trabajar con el contenido de diferentes portapapeles:

- El programa almacena en memoria las 10 últimas acciones de "copiar" o "cortar" realizadas en el Editor de código durante la sesión actual. Cada uno de los diferentes contenidos guardados de esta manera puede ser reutilizado en cualquier momento. Para ello, utilice el comando **Historial del Portapapeles** del menú contextual del Editor de Código o el botón "Últimos valores del Portapapeles" de la barra de herramientas:

    ![](../assets/en/code-editor/last-clipboard-values-2.png)

    Se muestran las primeras palabras de los elementos copiados o cortados. Seleccione un elemento para insertarlo en la ubicación actual del cursor.

- Dispone de nueve portapapeles numerados adicionales que pueden emplearse directamente mediante los botones de la barra de herramientas del Editor de código o [utilizando atajos de teclado](#shortcuts):

![](../assets/en/code-editor/clipboards-2.png)


### Líneas móviles

Puede mover la línea donde está el cursor directamente sin seleccionarla primero utilizando los comandos **Mover líneas hacia arriba** y **Mover líneas hacia abajo** del menú **Método**. También puede hacerlo utilizando el atajo de teclado **Alt/Opción** + **Flecha arriba** o **Flecha abajo** [](#shortcuts).





### Funciones de autocompletar

El editor de código ofrece funciones de autocompletado. 4D muestra automáticamente sugerencias basadas en los primeros caracteres tecleados.

En el ejemplo siguiente, al teclear la cadena "poli" aparece un triángulo azul que indica que hay varias sugerencias disponibles:

![](../assets/en/code-editor/autocomplete-1.png)

When the characters you enter correspond to a single possibility, this suggested value appears greyed out (and is inserted if you hit the **Tab** key): ![](../assets/en/code-editor/autocomplete-2.png) ---> ![](../assets/en/code-editor/autocomplete-3.png)

> If you checked the **Insert () and closing } ) ] "** option in the **Methods** page of the **Preferences**, 4D will also automatically add **()** after a 4D command, keyword or project method that requires one or more mandatory arguments (after accepting a suggestion or completion): ![](../assets/en/code-editor/insert-and-closing-1.png) -> ![](../assets/en/code-editor/insert-and-closing-2.png)

Autocompletion also works with code structures (e.g. If..End if, For each... End for each): when you enter the first part of the structure, the Code Editor will automatically suggest the closing part:![](../assets/en/code-editor/autocomplete-code-structures.png)

Si hay varias sugerencias disponibles, 4D las muestra en una lista emergente al presionar la tecla **Tab**:

![](../assets/en/code-editor/autocomplete-popup.png)

La lista está en orden alfabético. Elija el valor haciendo doble clic en él o desplácese por la lista utilizando las teclas de flecha del teclado y, a continuación, presione **Intro**, **Retorno de carro** o **Tab** para insertar el valor seleccionado.

Por defecto, también puede insertar un valor sugerido presionando uno de los siguientes delimitadores `( ; : = < [ {` teclas después de seleccionar un valor: el valor insertado va seguido del delimitador, listo para la entrada de datos.

![](../assets/en/code-editor/autocomplete-delimiter.png)  +  **(** key --> ![](../assets/en/code-editor/autocomplete-delimiter-2.png)

> Puede desactivar el uso de delimitadores para insertar valores sugeridos en **Preferencias** > **Métodos** > **Opciones**.

Puede presionar la tecla **Esc** para cerrar la lista emergente o puede seguir escribiendo mientras está abierta. Los valores sugeridos en la lista emergente se actualizan a medida que se introducen los caracteres adicionales.

Si los caracteres tecleados corresponden a distintos tipos de objetos, la lista los muestra en su estilo actual. Se pueden mostrar los siguientes tipos de objetos:

- Comandos 4D
- Comandos SQL
- Métodos Usuario
- Nombres de las tablas
- Nombres de los campos
- Constantes
- Variable local, proceso o interproceso, declarada en el método
- Nombres de propiedad objeto
- Comandos del Plug-in
- Palabras claves 4D
- Palabras clave SQL
- Macros (mostradas entre < >)

> Por razones prácticas, puede desactivar la visualización automática de la lista de sugerencias para las **constantes**, las **variables (locales o interprocesos) y los atributos de objeto** y/o las **tablas**. Estas opciones se encuentran en **Preferencias** > **Métodos** > **Opciones**

#### Nombres de propiedad objeto

4D muestra automáticamente sugerencias que distinguen mayúsculas y minúsculas de todos los nombres de propiedades de objetos válidos en el código 4D cuando:

- escribe un punto "." después de un objeto o
- utilizar la tecla Tab después de un puntero objeto desreferenciado "->".

![](../assets/en/code-editor/autocomplete-object-attributes.png)

> La propiedad `length` se incluye siempre para su uso con colecciones.

Una vez creados, los nombres de las propiedades se almacenan en una lista global interna y están disponibles cada vez que un método/clase/función se abre, se cierra o cambia de foco.

![](../assets/en/code-editor/autocomplete-object-attributes-2.png)

La lista de sugerencias se actualiza dinámicamente mientras se edita el código. Al cambiar de una ventana a otra, los nombres de las propiedades nuevas/editadas se añaden siempre a la lista global. La lista también se actualiza cuando se previsualiza un método, clase o función en el Explorador.

Cuando se reinicia la base de datos, la lista se reinicia.

> Puede desactivar la visualización automática de las propiedades de los objetos en **Preferencias** > **Métodos** > **sugerencias**.


## Buscar y reemplazar


El editor de código dispone de poderosas funcionalidades de **buscar y reemplazar** que se aplican a la ventana actual.

En la barra de herramientas de toda ventana de método se puede mostrar un área de buscar y reemplazar:

![search-area](../assets/en/code-editor/search-area.png)

Para mostrar esta área, haga clic en el icono **Buscar en el método** de la [barra de herramientas](#toolbar) o seleccione una función de buscar o reemplazar a través de un [**acceso directo**](#shortcuts) o un comando del submenú **Editar > Buscar**. Puede cerrar esta áreaa en cualquier momento presionando el botón **x** situado en el extremo derecho de la barra de herramientas.

:::tip

La función **Buscar en diseño** de la barra de herramientas de 4D o del menú **Editar** no es específico del editor de código, pero puede utilizarse para buscar un valor entre todos los métodos y clases.

:::


### Buscar

Seleccione **Buscar > Buscar...** en el menú **Editar** o escriba **Ctrl+F** (Windows)/**Cmd+F** (macOS) para mostrar/activar el área *Buscar*.

La búsqueda definida en esta área se realizará en el código situado en la ventana.

El área de entrada **buscar** permite introducir la cadena a buscar. Esta área es un combo box que almacena las últimas 10 cadenas que se han buscado o reemplazado durante la sesión. Si resalta el texto antes de elegir el comando **Buscar...**, aparecerá en esta área. Entonces puede utilizar este texto o reemplazarlo por otro.

Una vez introducida o seleccionada una cadena, se resaltan todas las ocurrencias encontradas en la ventana abierta y en la parte derecha del área se muestra el número total de aciertos encontrados. También indica la posición actual del cursor entre todos los aciertos.

Presione la tecla **Intror** para seleccionar la ocurrencia más cercana al cursor. También puede hacer clic en los botones **Siguiente / Anterior** ![find-next-previous](../assets/en/code-editor/find-next.png) para seleccionar todas las ocurrencias secuencialmente hacia el principio o el final del método actual, a partir de la posición inicial del cursor, o utilizar los comandos **Buscar siguiente** y **Buscar anterior** del menú [**Editar**](#shortcuts).


#### Opciones

- **Sensible a mayúsculas y minúsculas** ![case-sensitive](../assets/en/code-editor/case-sensitive.png): tiene en cuenta las mayúsculas y minúsculas de los caracteres tal y como se han introducido en el área de búsqueda. Esta opción también tiene en cuenta los caracteres diacríticos. Por ejemplo, una búsqueda de "MyVar" no encontrará "myVar"; una búsqueda de "dej" no encontrará "déjà".
- **Palabra completa** ![full-word](../assets/en/code-editor/full-word.png): limita la búsqueda a las apariciones exactas de la palabra buscada. Cuando esta opción está marcada, por ejemplo, una búsqueda de "cliente" no encontrará ni "clientes" ni "micliente" Por defecto, esta opción no está marcada; por lo tanto, una búsqueda de "var" encontrará "Myvar", "variation", etc.



### Reemplazar

Haga clic en el botón de alternancia **v** situado a la izquierda del área *Buscar* para mostrar/ocultar el área *Reemplazar*. También puede seleccionar **Buscar > Reemplazar...** en el menú **Editar** o escribir **Ctrl+Alt+F** (Windows)/**Cmd+Alt+F** (macOS).

El área de entrada *Reemplazar* se utiliza para definir la cadena de caracteres que sustituirá a la definida anteriormente.

Haga clic en el botón **Reemplazar** para iniciar la búsqueda con todas las opciones definidas y reemplazar la primera ocurrencia encontrada. 4D inicia la búsqueda a partir del punto de inserción del texto actual y continúa hasta el final del método. A continuación, es posible seguir buscando/reemplazando utilizando los comandos **Reemplazar siguiente** y **Reemplazar anterior** del menú [**Editar**](#shortcuts).

Haga clic en el botón **Reemplazar todo** para reemplazar todas las ocurrencias correspondientes a los criterios de búsqueda directamente en el método abierto.



### Buscar lo mismo

El comando **Buscar el mismo** se utiliza para buscar cadenas de caracteres idénticas a la seleccionada. Este comando sólo está activo si ha seleccionado al menos un caracter en el Editor de código.

La búsqueda realizada es del tipo "Buscar siguiente" en la ventana actual del editor de código.

Los comandos **Find Same Next** y **Find Same Previous** se utilizan para encontrar cadenas de caracteres *estrictamente* idénticas a las seleccionadas. Por ejemplo, las mayúsculas y minúsculas deben coincidir.


### Marcar todo

El comando **Editar > Marcar todo** se activa cuando ya se ha especificado una búsqueda en la caja de diálogo buscar o reemplazar. Cuando selecciona este comando, 4D pone un marcador en cada línea que contiene un elemento correspondiente al criterio de búsqueda "actual". Esto facilita la localización de todos los resultados de la búsqueda. Para más información sobre marcadores, consulte [Marcadores](#bookmarks).




## Errores de sintaxis

4D comprueba automáticamente la sintaxis del método para ver si es correcta. Si introduce texto o selecciona un componente que no es sintácticamente correcto, 4D muestra un símbolo para indicar la expresión incorrecta ![](../assets/en/code-editor/incorrect-expression-icon.png). Al pasar el ratón por encima del símbolo, un mensaje de ayuda muestra la causa del error:

![](../assets/en/code-editor/incorrect-expression-message.png)

Al introducir un código, puede comprobar inmediatamente la sintaxis de la línea actual (sin avanzar a la línea siguiente) presionando la tecla **Intro** del teclado numérico. 4D evalúa la línea, le da formato, marca cualquier error y coloca el punto de inserción al final de la línea. Cuando una línea de un método, clase o función esté marcada como de sintaxis incorrecta, compruebe y corrija la entrada. Si la línea es correcta, 4D elimina el símbolo de error. Al guardar o cerrar la ventana, se valida todo el método. También puede forzar la validación presionando la tecla **Intro**.

Cuando se valida el método, clase o función, 4D verifica:

- errores de sintaxis básicos
- la estructura de las instrucciones (`If`, `End if` y así sucesivamente)
- que coincidan con los caracteres que encierran el código, como paréntesis o comillas. Cuando escribe un caracter de encierro, 4D indica la coincidencia enmarcando los caracteres de inicio/fin con rectángulos grises:

![](../assets/en/code-editor/matching-enclosing-characters.png)

> Si hace clic en un caracter delimitador del código, 4D indica por defecto su coincidencia con rectángulos grises. Puede modificar la forma en que 4D indica los caracteres de cierre coincidentes o desactivar esta función en **Preferencias** > **Métodos** > **Opciones** > **Paréntesis coincidentes**.

El editor de código sólo puede comprobar errores de sintaxis evidentes (faltas de ortografía y similares). No verifica errores que sólo ocurren durante la ejecución. Los errores de ejecución son detectados por 4D cuando se ejecuta el código.

4D tiene un depurador integrado (ver [Depuración](../Debugging/debugger.md)) para manejar y corregir estos errores. El compilador también ofrece una ayuda indispensable para detectar errores. Para más información sobre el compilador, consulte el capítulo [Compilación](../Project/compiler.md).

## Mensajes de ayuda

El Editor de código ofrece diversa información contextual utilizando consejos de ayuda. Aparecen al pasar el ratón sobre un objeto.

:::tip

La [barra de estado](#status-bar) también ofrece información contextual.

:::

- **Errores**: al pasar el ratón sobre el símbolo que indica un error a la izquierda del área de edición, aparece un consejo de ayuda que muestra la causa del error (ver [Errores de sintaxis](#syntax-errors)).

- **Documentación de comandos 4D**: al pasar el ratón sobre un comando o función 4D, un mensaje de ayuda ofrece su sintaxis junto con una breve descripción de su funcionamiento. ![](../assets/en/code-editor/status-bar-description.png)

- **Tipo de variable y descripción**: al pasar el ratón sobre una variable, un mensaje de ayuda muestra su tipo (si se ha definido explícitamente en el método) y el comentario asociado, si existe. ![](../assets/en/code-editor/variable-type.png)

- **Métodos o funciones proyecto**: al pasar el ratón sobre un método proyecto o función clase, aparece un mensaje de ayuda:

  - o los comentarios especificados en el Explorador.
  - o las primeras líneas del método o función de clase si incluye comentarios (líneas que empiezan por // o /*...*/ bloque de comentarios). Es práctica habitual insertar la documentación del método, así como sus parámetros, en forma de comentarios al principio del método. Puede obtener esta información directamente en el mensaje de ayuda, sólo asegúrese de eliminar primero todo comentario que se encuentre en el Explorador. Comments at the beginning of a method: ![](../assets/en/code-editor/comments-method.png) Help tip in another method: ![](../assets/en/code-editor/help-tip.png)

- También puede crear un **archivo de documentación dedicado** llamado `<MethodName>.md` en la carpeta `<package>/documentation`. Ver [Visualización de la documentación en el editor de código](../Project/documentation.md#viewing-documentation-in-the-code-editor)


## Comentar / Descomentar

El lenguaje 4D soporta los [comentarios](../Concepts/quick-tour.md#comments), que son líneas de código inactivas. El editor de código no aplica ningún estilo particular dentro de los comentarios. La longitud de los comentarios está limitada al tamaño máximo de 32.000 caracteres por línea.

Existen dos tipos de comentarios: `//comment` (comentario de una línea) y `/*comment*/`(comentarios en línea o bloques de comentarios multilínea).

Se pueden crear comentarios digitando los caracteres `/`. O, el comando **Comentar/Descomentar**, que se encuentra en el menú **Método** así como en el menú contextual del Editor de Código se utiliza para marcar un grupo de líneas de código seleccionadas como comentarios de una sola línea o, por el contrario, para eliminar los caracteres de comentario de una sola línea de una selección. Para utilizar este comando, seleccione el código que desea marcar como comentado y, a continuación, seleccione el comando **Comentar/Descomentar**:

![](../assets/en/code-editor/comment-uncomment-1.png) --> ![](../assets/en/code-editor/comment-uncomment-2.png)

Cuando la selección sólo contiene código activo, se aplica el comando **Comentario**. Cuando la selección incluye tanto código activo como líneas comentadas, se añade a estas últimas un par adicional de caracteres de comentario ( // ); de este modo, conservarán su estado inicial de comentadas si la línea se "descomenta" posteriormente Cuando la selección contiene sólo líneas comentadas, se aplica el comando **Descomentar**.

> El comando **Comentar/Descomentar** sólo funciona con líneas completas --- no puede utilizarse para comentar sólo parte de una línea.


## Expandir / Contraer

El código 4D situado dentro de bucles y condiciones puede ahora contraerse o expandirse, para facilitar la lectura de los métodos:

- Expanded code: ![](../assets/en/code-editor/expanded-code.png)

- Collapsed code: ![](../assets/en/code-editor/collapsed-code.png)

Si sitúa el ratón sobre el botón de expansión [...], aparece un mensaje de ayuda que muestra las primeras líneas del código oculto.

Se puede seleccionar, copiar, pegar o eliminar una porción de código contraída. Todas las líneas incluidas en él se copiarán, pegarán o borrarán respectivamente. Cuando se pega una parte del código, se expande automáticamente.

Hay varias formas de expandir y contraer código:

- Haga clic en los iconos de expandir/contraer ([+] y [-] en Windows) o en el botón de abrir [...]
- Utilice los comandos del submenú **Método > Contraer/Expandir**:

  - **Contraer selección** / **Expandir selección**: contrae o expande todas las estructuras de código que se encuentran en la selección de texto.
  - **Contraer nivel actual** / **Expandir nivel actual**: contrae o expande la estructura del código en el nivel en el que se encuentra el cursor. Estos comandos también están disponibles en el **menú contextual** del editor.
  - **Contraer todo** / **Expandir todo**: contrae o expande todos los bucles y condiciones de un método. Estos comandos también están disponibles en la barra de herramientas del editor.


## Bloques

Los bloques pueden definirse por:

- Comillas
- Paréntesis
- Una estructura lógica (If/Else/End if, While/End while, Repeat/Until Case of/End case)
- Paréntesis

### Seleccionar bloque envolvente

La función **Seleccionar bloque envolvente** se utiliza para seleccionar el "bloque envolvente" del código que contiene el punto de inserción.

Si ya se ha seleccionado un bloque de texto, la función selecciona el bloque adyacente del nivel inmediatamente superior, y así sucesivamente, hasta seleccionar todo el método.

Si presiona **Ctrl+Mayús+B** (Windows) o **Comando+Mayús+B** (macOS), podrá invertir esta operación y anular la selección del último bloque delimitador seleccionado.

**Nota:** si el punto de inserción se sitúa en una estructura de tipo `If` o `Else`, el bloque que lo encierra será el que contenga, respectivamente, la sentencia `If` o `Else`.


### Inicio del bloque o fin del bloque

Dos comandos facilitan el desplazamiento dentro de estructuras de código (por ejemplo, `If...Else...End if`):

- **Inicio de bloque**: sitúa el cursor al final de la estructura actual, justo después de la palabra clave inicial.
- **Fin de bloque**: sitúa el cursor al final de la estructura actual, justo después de la palabra clave final.

Estos comandos se encuentran en el menú **Método**, así como en el menú contextual del editor. También puede utilizar los siguientes atajos:

- Windows: **Ctrl + flecha arriba** o **Ctrl** + **flecha abajo**'
- macOS: **Comando** + **flecha arriba** o **Comando** +**flecha abajo**.

## Marcadores

4D le permite asociar marcadores con ciertas líneas en sus métodos. A continuación, puede navegar rápidamente por el código pasando de un marcador a otro utilizando comandos específicos.

![](../assets/en/code-editor/bookm.png)

Un marcador se desplaza junto con su línea original si se insertan líneas adicionales en el método. Los marcadores se guardan con los métodos.

Los marcadores se gestionan utilizando el submenú **Marcadores** del menú **Método**:

- **Alternar**: asocia un marcador a la línea actual (donde se encuentra el cursor) si no tiene ya uno o elimina el marcador existente si lo tiene. Esta función también está disponible utilizando el comando **Alternar marcador** del menú contextual del editor o utilizando el atajo de teclado **Ctrl+F3** (Windows) o **Comando+F3** (macOS).
- **Eliminar todo**: elimina todos los marcadores de la ventana en primer plano.
- **Ir al siguiente** / **Ir al anterior**: permite navegar entre los marcadores de la ventana. Al seleccionar uno de estos comandos, el cursor se sitúa en el primer caracter de la línea asociada al marcador en cuestión. También puede utilizar los atajos de teclado **F3** (ir a la siguiente) o **Mayús+F3** (ir a la anterior).

:::info

Puede utilizar marcadores como señalizadores de líneas que contengan un elemento [encontrado mediante una búsqueda](#find). En este caso, 4D añade automáticamente los marcadores. Para más información, consulte [Marcar todos](#bookmark-all).

:::

## Revelar en el Explorador

El comando **Revelar en el Explorador...** abre una ventana del Explorador con el elemento de destino seleccionado. Para ello, coloque el cursor dentro del nombre del elemento o selecciónelo y, a continuación, elija **Método** > **Revelar en el Explorador...**.


## Buscar los llamantes

El comando **Buscar los llamantes** del menú **Método** solo está habilitado para métodos proyecto. Busca todos los objetos (otros métodos o menús) que hacen referencia al método proyecto.

**Nota:** el comando **buscar llamantes...** también está disponible en **Explorador** > **Métodos**

Este comando muestra sus resultados en una nueva ventana.


## Ir a definición

El comando **Ir a definición** abre la definición de un elemento referenciado en el Editor de Código. Para ello, coloque el cursor dentro del nombre del objeto o selecciónelo, y elija **Método** > **Ir a Definición...** o utilice el menú contextual del editor.

:::tip

Esta funcionalidad también está disponible a través del atajo de teclado **Ctrl+K** (Windows) / **Command+K** (macOS) o  **Alt+doble clic**.

:::

El efecto del comando **Ir a definición...** varía en función del elemento de destino:

- con un método proyecto, muestra el contenido del método en una nueva ventana del Editor de código
- con un nombre clase o una función clase, abre la clase en el Editor de código
- con un comando o función 4D integrado, tiene el mismo efecto que el comando [**Mostrar documentación**](#show-documentation).

## Mostrar la documentación

El comando **Mostrar documentación...** abre la documentación del elemento de destino. Para ello, coloque el cursor dentro del nombre del elemento o selecciónelo y, a continuación, elija **Método** > **Mostrar documentación...** o utilice el menú contextual. El efecto varía en función del elemento objetivo. Por ejemplo:

- Selecting a project method or a user class and choosing **Show documentation...** selects the method in the Explorer and switches to the documentation tab
- Al seleccionar un comando, función o nombre de clase 4D y elegir **Mostrar documentación...** se muestra la documentación en línea.
- Si no se selecciona ningún elemento, el comando abre la documentación del método actualmente abierto en el Editor de Código, [si existe](../Project/documentation.md).

:::tip

Para mostrar la documentación de un comando del lenguaje "clásico" 4D, seleccione el nombre del comando o simplemente sitúe el cursor en el nombre y presione **F1**. La documentación del comando se muestra en una nueva ventana de su navegador predeterminado. 4D busca la documentación en función de los ajustes realizados en las Preferencias (ver [Ubicación de la documentación](../Preferences/general.md#documentation-location)).

:::


## Buscar referencias

El comando **Buscar Referencias...** que se encuentra en el menú **Método** o en el menú contextual del Editor de Código encuentra todos los objetos (métodos y formularios) del proyecto en los que el elemento actual del método está referenciado (utilizado).

El elemento actual es el seleccionado o aquel en el que se encuentra el cursor. Puede ser un nombre de campo, un nombre de variable, un comando, una cadena, etc. For example, the following action looks for all the occurrences of the *vlNbCmd* variable in the database:

![find-dialog](../assets/en/code-editor/search-references.png)

Este comando muestra sus resultados en una nueva ventana.

