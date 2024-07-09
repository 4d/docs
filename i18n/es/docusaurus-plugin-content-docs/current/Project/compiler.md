---
id: compiler
title: Compilación
---

Puede compilar sus proyectos, es decir, traducir todos sus métodos a lenguaje máquina. La compilación de un proyecto permite verificar la coherencia del código y acelerar su ejecución, además de posibilitar ocultar el código en su totalidad. La compilación es un paso indispensable entre el desarrollo de proyectos con 4D y su despliegue como aplicaciones independientes.

## Compilar

La compilación se realiza desde su aplicación 4D y es totalmente automática.

> En macOS, la compilación requiere que instale `Xcode`. Consulte [esta sección](#silicon-compiler) para obtener más información sobre este requisito.

1. Abra la ventana de compilación seleccionando el comando **Compilador...** en el menú **Diseño** o el botón **Compilador** de la barra de herramientas.

   ![](../assets/en/Project/compilerWin1.png)

   ![](../assets/en/Project/comp1.png)

> También puede lanzar directamente la compilación seleccionando el elemento de menú **Iniciar compilación** en el menú **Diseño**.

2. Haga clic en el botón **Compilar** para lanzar la compilación utilizando los [parámetros ded compilación](#compiler-settings) actuales.

Si no se detecta ningún error, se inicia la compilación y se muestra el mensaje "Compilación exitosa" en la parte inferior de la ventana cuando se completa la compilación:

![](../assets/en/Project/success.png)

Puede inmediatamente [ejecutar su aplicación en modo compilado](#run-compiled) y ver lo rápido que es.

Si se detectan errores, se detiene el proceso y se muestra el mensaje "Compilación fallida". El área de información de la ventana muestra los nombres de los métodos y los números de línea correspondientes en una lista jerárquica:

![](../assets/en/Project/compilerWin2.png)

Haga doble clic en cada error detectado para abrir el método o la clase en cuestión directamente en el Editor de código 4D. La línea que contiene el error se resalta y el tipo de error se muestra en el área de sintaxis de la ventana.

Utilice los comandos **Error anterior** / **Error siguiente** del menú **Método** para navegar de un error a otro.

El número de errores encontrados durante las primeras compilaciones puede ser desalentador, pero no deje que esto lo desanime. Pronto descubrirá que a menudo proceden de la misma fuente, es decir, el incumplimiento de ciertas convenciones del proyecto. El compilador siempre ofrece un [diagnóstico preciso](#error-file) de los errores para ayudarle a corregirlos.

> La compilación requiere una licencia apropiada. Sin esta licencia, no es posible llevar a cabo una compilación (los botones están desactivados). Sin embargo, aún es posible comprobar la sintaxis y generar métodos de digitación.

## Ejecutar la compilación

Una vez compilado un proyecto, es posible pasar del [modo interpretado al modo compilado](Concepts/interpreted.md), y viceversa, en cualquier momento y sin tener que salir de la aplicación 4D (excepto cuando se ha eliminado el código interpretado). Para ello, utilice los comandos **Reiniciar en interpretado** y **Reiniciar en compilado** del menú **Ejecución**. La [caja de diálogo de apertura del proyecto](GettingStarted/creating.md#options) también ofrece elegir entre el modo interpretado o compilado para iniciar la base de datos.

Cuando pasa de un modo al otro, 4D cierra el modo actual y abre el nuevo. Esto equivale a salir y volver a abrir la aplicación. Cada vez que se cambia de un modo a otro, 4D ejecuta los dos métodos base siguientes (si se especifican) en este orden: `On Exit` -> `On Startup`.

Si modifica su proyecto en modo interpretado, debe recompilarlo para que sus modificaciones sean tenidas en cuenta en modo compilado.

## Características de la ventana del compilador

In addition to the [**Compile** button](#compile), the Compiler window provides additional features that are useful during the project development phase.

### Verificar la sintaxis

El botón **Verificar la sintaxis** lanza la ejecución de la fase de verificación de la sintaxis. Al final del proceso de verificación, los errores detectados se listan en el área de información. Puede hacer doble clic en una línea de error para mostrar el método correspondiente.

El control sintáctico también puede lanzarse directamente con el comando **Verificar sintaxis** asociado al botón de la barra de herramientas **Compilador**. Esta opción es la única disponible si no dispone de una licencia adecuada para permitir la compilación de aplicaciones.

### Declarar tipos

El botón **Declarar Tipos** crea o actualiza los métodos del compilador. Compiler methods are project methods that group together all the variable and array typing declarations (process and interprocess), as well as the [method parameters declared outside prototypes](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). Estos métodos, cuando existen, son utilizados directamente por el compilador durante la compilación del código, lo que da lugar a tiempos de compilación más rápidos.

El nombre de estos métodos debe comenzar por `Compiler_`. Puede definir el nombre por defecto de cada uno de los 5 métodos del compilador en [la ventana de los parámetros del compilador](#compiler-methods-for). Los métodos de compilación que son generados y mantenidos por 4D tienen automáticamente el atributo `Invisible`:

![](../assets/en/Project/compilerWin3.png)

Sólo se generan los métodos de compilación necesarios (es decir, aquellos para los que ya existen elementos en el proyecto).

El área de información indica todo error encontrado durante la creación o actualización del método. Hacer doble clic en una línea de error provoca que el método y la línea en cuestión se muestren en el editor de código.

### Eliminar el código de compilación

El botón **Borrar el código compilado** borra el código compilado del proyecto. Al hacer clic en él, se borra todo el [código generado durante la compilación](#classic-compiler), se desactiva el comando **Reiniciar compilado** del menú **Ejecutar** y la opción "Proyecto compilado" no está disponible al inicio.

### Mostrar/Ocultar advertencias

You can toggle the [warnings](#warnings) display in the Compiler window by clicking the **Show/Hide Warnings** button:

![](../assets/en/Project/compilerWin4.png)

Cuando esta opción está marcada, las advertencias (si las hay) se muestran en la ventana, después de los otros tipos de error. Aparecen en itálica:

![](../assets/en/Project/compilerWin5.png)

Al hacer doble clic en un aviso se abre el método correspondiente.

## Parámetros del compilador

The "Compiler" tab of the Settings dialog box lets you set parameters related to project compilation. Puede abrir directamente esta página desde la [ventana del compilador](#compiler-window) haciendo clic en el botón **Parámetros del compilador**:

![](../assets/en/Project/compilerWin6.png)

### Opciones de compilación

Esta área agrupa las opciones genéricas utilizadas durante el proceso de compilación.

#### Generar el archivo de símbolos

Used to generate the error file (see [error file](#symbol-file)) at the time of syntax checking. Used to generate the symbol file (see [symbol file](#symbol-file)).

#### Generar archivo de errores

Se utiliza para generar el archivo de errores (ver [archivo de errores](#error-file)) en el momento del control sintáctico. El archivo de error se crea en la [carpeta Logs](Project/architecture.md#logs) del proyecto con el nombre `ProjectName_errors.xml`.

#### Ruta de compilación

Permite definir el número de pases (análisis de código) que realiza el compilador y, por tanto, la duración de la compilación.

- **Declare las variables**: marque esta opción si quiere que el compilador infiera el tipo de variables y parámetros en su código. Esta opción requiere que el compilador realice todas las etapas que hacen posible la compilación, lo que aumenta la duración de la compilación.
- **Las variables proceso e interproceso se declaran**: el paso para declarar variables proceso e interproceso así como parámetros de método declarados fuera de prototipos no se realiza. Esta opción se puede utilizar cuando ya ha definido el tipo de todas sus variables proceso e interproceso por sí mismo o utilizando la función de generación automática de los métodos compilador.
- **Todas las variables están declaradas**: no se realiza el paso para declarar variables locales, proceso e interproceso, así como parámetros de método declarados fuera de prototipos. Utilice esta opción cuando esté seguro de que todas las variables locales, proceso e interproceso, así como los parámetros de los métodos, han sido claramente declarados.

:::tip

Puede utilizar el botón [Generar declaración](#generate-typing) y luego compilar con una de las dos últimas opciones.

:::

#### Objetivo de compilación

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19          | Añadidos       |

</details>

Este parámetro le permite seleccionar la familia de procesadores para la cual su proyecto 4D debe estar compilado de forma nativa. El compilador 4D puede generar código nativo para dos familias de procesadores:

- Los procesadores **Intel/AMD** (todas las máquinas),
- los procesadores **Apple Silicon**.

Se proponen dos opciones de objetivo. El resultado depende del procesador de la máquina en la que se ejecuta 4D.

| _Opción_                                                                  | _en Windows Intel/AMD_                                                             | _macOS Intel_                                                                                    | _macOS Silicon_                                                                                  |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Todos los procesadores (Intel/AMD y Apple Silicon)** | Código para Intel/AMD<br/>_No es posible producir código Apple Silicon en Windows_ | Código para Apple Silicon + Código para Intel/AMD<br/>_Habrá dos códigos compilados disponibles_ | Código para Apple Silicon + Código para Intel/AMD<br/>_Habrá dos códigos compilados disponibles_ |
| **Mi procesador (procesador)**                         | Código para Intel/AMD                                                              | Código para Intel/AMD                                                                            | Código para Apple Silicon                                                                        |

> El objetivo de compilación Apple Silicon requiere que la aplicación **Clang** esté instalada en su máquina. Clang viene con la última versión de Xcode. Ver los [requisitos del compilador Silicon](#requirements) para más información.

### Declaración de tipos por defecto

Utilice este área para definir el tipo por defecto para los objetos de base de datos ambiguos.

- **Numérico**: se utiliza para forzar un tipo numérico de manera no ambigua, bien sea real o entero largo. Esto no anulará las directivas que haya establecido en su proyecto. Puede optimizar el funcionamiento de su base de datos eligiendo el tipo Longint.
- **Botón**: se utiliza para forzar el tecleo de un botón de manera no ambigua, ya sea Real o Entero largo. Esto no anulará las directivas que haya establecido en su proyecto. Este tipo se aplica a los botones y a las casillas de selección, a los botones imagen, a las rejillas de botones, a los botones radio, a los menús pop-up imagen y a las listas desplegables.

### Métodos Compilador para...

Esta área le permite renombrar los métodos del compilador que son generados automáticamente por el compilador cuando hace clic en [Declarar tipos](#generate-typing).

Se pueden generar hasta 5 métodos de compilación; un método de compilación sólo se genera si el proyecto contiene los siguientes elementos:

- **Variables**: agrupa las declaraciones de variables proceso;
- **Variables interproceso**: agrupa las declaraciones de variables interproceso;
- **Arrays**: agrupa las declaraciones de arrays de proceso;
- **Arrays interproceso**: agrupa las declaraciones de arrays interproceso;
- **Métodos**: agrupa las declaraciones de parámetros de métodos (por ejemplo `C_LONGINT(mymethod;$1;$2)`) para [parámetros de métodos declarados fuera de prototipos](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). For more information, see [`Compiler_Methods` method](../Concepts/parameters.md#compiler_methods-method).

Puede renombrar cada uno de estos métodos en las áreas correspondientes, pero siempre irán precedidos de la etiqueta `Compilador_` (no modificable). El nombre de cada método (prefijo incluido) no debe tener más de 31 caracteres. También debe ser único y cumplir con [las reglas de 4D para nombrar métodos](Concepts/identifiers.md#project-methods).

## Warnings

Las advertencias son mensajes específicos generados por el compilador cuando verifica la sintaxis. Estos mensajes están destinados a llamar su atención sobre las declaraciones que podrían llevar a errores de ejecución. No impiden la compilación.

Depending on circumstances and the programming style used, warnings may be more or less relevant. You can enable or disable warnings, in the compiler dialog, and in the code editors (4D code editor and VS Code), globally through the [warnings tab](#warnings-tab) or locally using [`//%W`](#disabling-and-enabling-warnings-locally).

### Warnings tab

![](../assets/en/Project/warnings-tab.png)

This tab allows you to define which warnings should be displayed globally. From the list of all possible warnings with their types, their code and their localized label, ordered by warning code.

To reduce the list, you can search words by warning labels and codes using the **Search in codes and labels** textbox or the magnifying glass icon on the left.

By default, all warning types are checked and enabled.

When you modify a warning display status, the information is stored in the "warnings.json" file, placed in the project Settings folder.

The **Reset to factory settings** button sets all the warning display status checkboxes to default values and deletes the "warnings.json" file.

### Disabling and enabling warnings locally

You can control warnings in specific parts of your code by using special comments to disable or enable them.

To disable warnings, insert the following comments before and after the code section where you want to disable warnings:

```4d
// Before the selected code part use
  //%W-<warning number>

// After the selected code part use
  //%W+<warning number>
```

To re-enable warnings in a code section, use the following comments:

```4d
// Before the selected code part use
  //%W+<warning number>

// After the selected code part use
  //%W-<warning number>
```

Only warnings with numbers can be disabled or enabled. Warning numbers are specified at the end of each message in the list of compilation errors or in the list found in the warning tab.
Por ejemplo, para desactivar la siguiente advertencia:

_1: Redefinición de la variable $a (550.10)_

... sólo necesita escribir los siguientes comentarios en su método 4D:

```4d
  var $a : Text
  $a:="hello world"
  
  //%W-550.10
  var $a : Text
  //%W+550.10
  
```

:::note

The special warnings comments have priority over the warnings display settings set in the warning tab.

:::

## Herramientas de compilación

### Archivo Symbol

If you check the [**Generate the symbol file**](#generate-the-symbol-file) option in the compiler settings, a symbol file called `ProjectName_symbols.txt` is created in the [Logs folder](Project/architecture.md#logs) of the project during compilation. Está dividido en varias partes:

#### Lista de las variables proceso e interproceso

Estas dos listas contienen cuatro columnas:

- Nombres de las variables y arrays proceso e interproceso utilizados en su proyecto. Estas variables están listadas en orden alfabético.
- Tipo de la variable. Los tipos se definen por medio de comandos de directivas de compilación o son determinados por el compilador en función del uso de la variable. Si no se puede determinar el tipo de una variable, la columna está vacía.
- Número de dimensiones si la variable es un array.
- Referencia al contexto en el que el compilador estableció el tipo de la variable. Si la variable se utiliza en varios contextos, el contexto mencionado es el que utiliza el compilador para determinar su tipo.
  - Si la variable se encuentra en un método base, se indica el nombre del método base, precedido por (M)\*.
  - Si la variable se encuentra en un método proyecto, el método se identifica como se ha definido en 4D, precedido de (M).
  - Si la variable se encuentra en un trigger, se indica el nombre de la tabla, precedido por (TM).
  - Si la variable se encontró en un método formulario, se da el nombre del formulario, precedido por el nombre de la tabla y (FM).
  - Si la variable se encontró en un método objeto, se da el nombre del método objeto, precedido por el nombre del formulario, el nombre de la tabla y por (OM).
  - Si la variable es un objeto de un formulario y no aparece en ningún método proyecto, formulario, objeto o trigger, se indica el nombre del formulario en el que aparece, precedido de (F).
    Al final de cada lista, puede encontrar los tamaños de las variables proceso e interproceso en bytes.

> Al compilar, el compilador no puede determinar en qué proceso se utiliza una determinada variable proceso. Una variable proceso puede tener un valor diferente en cada proceso. En consecuencia, todas las variables proceso se duplican sistemáticamente cuando se lanza cada nuevo proceso: por lo tanto, es aconsejable vigilar la cantidad de memoria que ocuparán. También hay que tener en cuenta que el espacio para las variables proceso no está relacionado con el tamaño de la pila del proceso.

#### Lista de las variables locales

La lista de variables locales está ordenada por método base, método proyecto, trigger, método formulario y método objeto, en el mismo orden que en 4D.

Esta lista está dividida en tres columnas:

- la lista de las variables locales utilizadas en el método;
- tipo de la variable;
- número de dimensiones si la variable es un array.

#### Lista completa de los métodos

Al final del archivo se ofrece una lista completa de sus métodos base y proyecto con:

- su tipo (procedimiento o función que devuelve un valor)
- los tipos de datos de sus parámetros y del resultado devuelto
- el número de llamadas
- la propiedad Thread Safe o Thread Unsafe.

Esta información aparece así:

```
Procedimiento o función <Method name>(tipos de datos de los parámetros):
tipo resultado, número de llamadas, Thread Safe o Thread Unsafe
```

### Archivo de errores

You can choose whether or not to generate an error file during compilation using the [**Generate error file**](#generate-error-file) option in the compiler settings. El archivo de errores se llama automáticamente `projectName_errors.xml` y se coloca en la carpeta [Logs](Project/architecture.md#logs) del proyecto.

Aunque se puede acceder a los errores directamente a través de la [ventana de compilación](#compile), puede ser útil disponer de un archivo de errores que se pueda transmitir de una máquina a otra. El archivo de errores se genera en formato XML para facilitar el análisis automático de su contenido. También permite la creación de interfaces personalizadas de visualización de errores.

La longitud del archivo de errores depende del número de errores y advertencias emitidos por el compilador.

La estructura del archivo de errores es la siguiente:

- En la parte superior del archivo se encuentra la lista de errores y advertencias, ordenados por método y en su orden de creación en 4D.
- En la sección _**Errores generales**_ se agrupan todas las imposibilidades de digitación y las ambigüedades de identidad. Estos errores y advertencias se listan utilizando el siguiente formato:
  - el número de línea en el método (0 indica errores generales)
  - el atributo warning indica si la anomalía detectada es una advertencia (warning="true") o un error (warning="false")
  - diagnóstico que describe el error

Si su proyecto no tiene errores generales, el archivo no tendrá una sección _Errores generales_.

Un archivo de error puede contener tres tipos de mensajes:

- **Errores asociados a una línea específica**: estos errores se muestran en contexto -la línea en la que se encontraron y con una explicación. El compilador informa de este tipo de error cuando encuentra una expresión en la que ve una incoherencia relacionada con el tipo de datos o la sintaxis. En la ventana del compilador, haga doble clic en cada error detectado para abrir el método en cuestión directamente en el editor de código 4D, con la línea que contiene el error resaltada.

- **Errores generales**: son errores que imposibilitan la compilación del proyecto. Hay dos casos en los que el compilador informa de un error general:
  - No se ha podido determinar el tipo de datos de una variable proceso.
  - Dos tipos diferentes de objetos tienen el mismo nombre.

Los errores generales se denominan así porque no pueden vincularse a ningún método específico. En el primer caso, el compilador no pudo realizar una tipificación específica en ninguna parte del proyecto. En el segundo, no pudo decidir si asociar un nombre determinado con un objeto y no con otro.

- **Avisos**: los avisos no son errores. No impiden la compilación del proyecto, sino que simplemente señalan posibles errores de código. En la ventana del compilador, las advertencias aparecen en itálica. Haga doble clic en cada advertencia para abrir el método en cuestión directamente en el editor de código 4D, con la línea que contiene la advertencia resaltada.

### Control de ejecución

El código generado por el compilador de 4D comprueba automáticamente que cada acceso a un elemento del array o a una referencia de caracter se efectúe dentro del rango real de los elementos del array o de los caracteres de la cadena. Los accesos fuera de rango provocarán errores durante la ejecución.

En algunos casos, puede preferir que el control de rangos no se aplique a ciertas partes del código que se consideran fiables. En particular, en el caso de los bucles que se repiten un gran número de veces, y cuando se ejecuta la base compilada en máquinas antiguas, el control de rangos puede ralentizar considerablemente el procesamiento. Si está absolutamente seguro de que el código en cuestión es fiable y no puede causar errores en el sistema, puede desactivar la comprobación del rango localmente.

Para ello, debe rodear el código a excluir del control de rangos con los comentarios especiales `//%R-` y `//%R+`. El comentario `//%R-` desactiva el control de rangos y `//%R+` lo reactiva:

```4d
  // %R-   to disable range checking
 
 ... //Place the code to be excluded from range checking here
 
  // %R+   to enable range checking again for the rest
```

## Acerca de los compiladores

4D incluye dos compiladores:

- un compilador "clásico", utilizado para compilar código nativo para los procesadores Intel/AMD;
- un compilador Silicon, utilizado para compilar código nativo para los procesadores Apple Silicon.

El compilador clásico puede utilizarse en cualquier plataforma, mientras que el compilador Silicon sólo puede utilizarse en una máquina Mac:

|             |    Compilar para Windows    |  Compilación para Intel Mac | Compilación para Mac Silicon |
| ----------- | :-------------------------: | :-------------------------: | :--------------------------: |
| En Windows  | &#10003 | &#10003 |  &#10007 |
| Intel Mac   | &#10003 | &#10003 |  &#10003 |
| Silicon Mac | &#10003 | &#10003 |  &#10003 |

Ambos compiladores están integrados en 4D. El compilador adecuado se selecciona automáticamente en función de la opción [objetivo de compilación](#compilation-target).

### Compilador clásico

El compilador clásico genera código compilado nativo para procesadores Intel/AMD en cualquier máquina. No requiere ninguna configuración específica.

El código compilado resultante se almacena en la carpeta [DerivedData](architecture.md#deriveddata) del proyecto.

### Compilador Silicon

El compilador Silicon genera código compilado nativo para los procesadores Apple Silicon, como _Apple M1_.

El código compilado resultante se almacena en la carpeta [Libraries](architecture.md#libraries) del proyecto.

#### Requisitos

- **Ordenador Apple**: el compilador Silicon sólo puede ejecutarse desde una máquina Apple.
- **Arquitectura proyecto de 4D**: el compilador Silicon sólo está disponible para los desarrollos 4D que utilizan la [arquitectura proyecto](architecture.md).
- **Herramientas Xcode o Developer**: el compilador Silicon llama al compilador de código abierto de macOS **Clang** para compilar el proyecto a partir de código C++ en el [segundo paso](#compilador-incremental) de la compilación. _clang_ requiere librerías Apple nativas, que son proporcionadas por el paquete **Xcode** o **Developer Tools**.
  - **Si ya tiene** Xcode o Developer Tools instalados en su ordenador, sólo tiene que asegurarse de que su versión cumple con los requisitos de 4D.
  - **Si no tiene** ninguna de estas herramientas instaladas en su ordenador, tendrá que descargar una de ellas desde el sitio web Apple Developer.

> Recomendamos instalar **Xcode**, que es bastante sencillo de instalar. Puede decidir instalar **Developer Tools** que es más compacto, sin embargo su instalación es un poco más compleja.

En todos los casos, el compilador Silicon de 4D le advertirá si su configuración no cumple con sus requisitos.

#### Compilación incremental

El compilador Silicon es incremental, lo que significa que:

- Durante la primera compilación, se compilan **todos los métodos 4D**. Este paso podría tomar un cierto tiempo. Sin embargo, sólo ocurre una vez.
- Durante todas las compilaciones posteriores, sólo se procesan los métodos **nuevos o modificados**, lo que reduce drásticamente el tiempo de compilación.
