---
id: compiler
title: Compilação
---

You can compile your projects, i.e., translate all of your methods into machine language. Compiling a project lets you check the consistency of the code and accelerate its execution, as well as making it possible to obfuscate the code in its entirety. Compilation is an indispensable step between the development of projects using 4D and their deployment as stand-alone applications.

## Compilar

The compilation is handled from your 4D application and is entirely automatic.

> En macOS, la compilación requiere que instale `Xcode`. Consulte [esta sección](#silicon-compiler) para obtener más información sobre este requisito.

1. Abra la ventana de compilación seleccionando el comando **Compilador...** en el menú **Diseño** o el botón **Compilador** de la barra de herramientas.

   ![](../assets/en/Project/compilerWin1.png)

   ![](../assets/en/Project/comp1.png)

> También puede lanzar directamente la compilación seleccionando el elemento de menú **Iniciar compilación** en el menú **Diseño**.

2. Haga clic en el botón **Compilar** para lanzar la compilación utilizando los [parámetros ded compilación](#compiler-settings) actuales.

If no errors are detected, the actual compilation begins and the "Compilation successful" message is displayed at the bottom of the window when the compilation is completed:

![](../assets/en/Project/success.png)

Puede inmediatamente [ejecutar su aplicación en modo compilado](#run-compiled) y ver lo rápido que es.

If errors are detected, the process is stopped and the "Compilation failed" message is displayed. The information area of the window displays the method names and line numbers concerned in a hierarchical list:

![](../assets/en/Project/compilerWin2.png)

Double-click on each error detected to open the method or class concerned directly in the 4D method editor. The line containing the error is highlighted and the type of error is displayed in the syntax area of the window.

Utilice los comandos **Error anterior** / **Error siguiente** del menú **Método** para navegar de un error a otro.

The number of errors found during your first compilations may be daunting, but do not let this put you off. You will soon discover that they often spring from the same source, i.e., non-compliance with certain project conventions. El compilador siempre ofrece un [diagnóstico preciso](#error-file) de los errores para ayudarle a corregirlos.

> A compilação requer uma licença adequada. Without this license, it is not possible to carry out a compilation (buttons are disabled). Nevertheless, it is still possible to check the syntax and generate Typing methods.

## Executar a compilação

Una vez compilado un proyecto, es posible pasar del [modo interpretado al modo compilado](Concepts/interpreted.md), y viceversa, en cualquier momento y sin tener que salir de la aplicación 4D (excepto cuando se ha eliminado el código interpretado). Para ello, utilice los comandos **Reiniciar en interpretado** y **Reiniciar en compilado** del menú **Ejecución**. La [caja de diálogo de apertura del proyecto](GettingStarted/creating.md#options) también ofrece elegir entre el modo interpretado o compilado para iniciar la base de datos.

When you switch from one mode to the other, 4D closes the current mode and opens the new one. Isto é equivalente a sair e reabrir a aplicação. Cada vez que se cambia de un modo a otro, 4D ejecuta los dos métodos base siguientes (si se especifican) en este orden: `On Exit` -> `On Startup`.

If you modify your project in interpreted mode, you must recompile it in order to have your edits taken into account in compiled mode.

## Características da janela do compilador

In addition to the [**Compile** button](#compile), the Compiler window provides additional features that are useful during the project development phase.

### Verificar sintaxe

El botón **Verificar la sintaxis** lanza la ejecución de la fase de verificación de la sintaxis. At the end of the checking process, any errors detected are listed in the information area. You can double–click on an error line in order to display the corresponding method.

El control sintáctico también puede lanzarse directamente con el comando **Verificar sintaxis** asociado al botón de la barra de herramientas **Compilador**. This option is the only one available if you do not have a suitable license to allow the compilation of applications.

### Gerar digitação

El botón **Declarar Tipos** crea o actualiza los métodos del compilador. Compiler methods are project methods that group together all the variable and array typing declarations (process and interprocess), as well as the [method parameters declared outside prototypes](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). These methods, when they exist, are used directly by the compiler during code compilation, resulting in faster compilation times.

El nombre de estos métodos debe comenzar por `Compiler_`. Puede definir el nombre por defecto de cada uno de los 5 métodos del compilador en [la ventana de los parámetros del compilador](#compiler-methods-for). Los métodos de compilación que son generados y mantenidos por 4D tienen automáticamente el atributo `Invisible`:

![](../assets/en/Project/compilerWin3.png)

Only the necessary compiler methods (i.e., those for which items already exist in the project) are generated.

The information area indicates any errors found during method creation or updating. Double-clicking on an error line causes the method and line concerned to be displayed in the Method editor.

### Limpar código compilado

El botón **Borrar el código compilado** borra el código compilado del proyecto. Al hacer clic en él, se borra todo el [código generado durante la compilación](#classic-compiler), se desactiva el comando **Reiniciar compilado** del menú **Ejecutar** y la opción "Proyecto compilado" no está disponible al inicio.

### Mostrar/ocultar avisos

You can toggle the [warnings](#warnings) display in the Compiler window by clicking the **Show/Hide Warnings** button:

![](../assets/en/Project/compilerWin4.png)

When this option is checked, the warnings (if any) are displayed in the window, after the other error types. Estas aparecem em itálico:

![](../assets/en/Project/compilerWin5.png)

Um duplo clique num aviso abre o método correspondente.

## Parâmetros do compilador

The "Compiler" tab of the Settings dialog box lets you set parameters related to project compilation. Puede abrir directamente esta página desde la [ventana del compilador](#compiler-window) haciendo clic en el botón **Parámetros del compilador**:

![](../assets/en/Project/compilerWin6.png)

### Opções de compilação

This area groups the generic options used during the compilation process.

#### Generate symbol file

Used to generate the error file (see [error file](#symbol-file)) at the time of syntax checking. Used to generate the symbol file (see [symbol file](#symbol-file)).

#### Gerar ficheiro de erros

Se utiliza para generar el archivo de errores (ver [archivo de errores](#error-file)) en el momento del control sintáctico. El archivo de error se crea en la [carpeta Logs](Project/architecture.md#logs) del proyecto con el nombre `ProjectName_errors.xml`.

#### Caminho de compilação

Used to set the number of passes (code parsing) performed by the compiler and thus the duration of compilation.

- **Declare las variables**: marque esta opción si quiere que el compilador infiera el tipo de variables y parámetros en su código. This option requires the compiler to perform all the stages that make compilation possible, which increases the duration of compilation.
- **Las variables proceso e interproceso se declaran**: el paso para declarar variables proceso e interproceso así como parámetros de método declarados fuera de prototipos no se realiza. This option can be used when you have already carried out the typing of all your process and interprocess variables either yourself or using the function for automatic generation of compiler methods.
- **Todas las variables están declaradas**: no se realiza el paso para declarar variables locales, proceso e interproceso, así como parámetros de método declarados fuera de prototipos. Use this option when you are certain that all the local, process, and interprocess variables as well as method parameters have been clearly typed.

:::tip

Puede utilizar el botón [Generar declaración](#generate-typing) y luego compilar con una de las dos últimas opciones.

:::

#### Objectivo de compilação

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

This setting allows you to select the processor family for which your 4D project must be natively compiled. O compilador 4D pode criar código nativo para duas famílias de processadores:

- Los procesadores **Intel/AMD** (todas las máquinas),
- los procesadores **Apple Silicon**.

Duas opções de alvo estão disponíveis. O resultado depende do processador da máquina em que 4D está em execução.

| _Opção_                                                                   | _no Windows Intel/AMD_                                                             | _macOS Intel_                                                                                    | _no macOS Silicon_                                                                               |
| ------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Todos os processadores (Intel/AMD e Apple Silicon)** | Código para Intel/AMD<br/>_No es posible producir código Apple Silicon en Windows_ | Código para Apple Silicon + Código para Intel/AMD<br/>_Habrá dos códigos compilados disponibles_ | Código para Apple Silicon + Código para Intel/AMD<br/>_Habrá dos códigos compilados disponibles_ |
| **O meu processador (processador)**                    | Código para Intel/AMD                                                              | Código para Intel/AMD                                                                            | Código para Apple Silicon                                                                        |

> El objetivo de compilación Apple Silicon requiere que la aplicación **Clang** esté instalada en su máquina. Clang vem com a versão mais recente do Xcode. Ver los [requisitos del compilador Silicon](#requirements) para más información.

### Digitação por defeito

Use esta área para definir o tipo padrão para objetos de banco de dados ambíguos.

- **Numérico**: se utiliza para forzar un tipo numérico de manera no ambigua, bien sea real o entero largo. This will not override the directives you may have set in your project. Você pode otimizar a execução do seu banco de dados escolhendo o tipo Longint.
- **Botón**: se utiliza para forzar el tecleo de un botón de manera no ambigua, ya sea Real o Entero largo. This will not override the directives you may have set in your project. This type applies to buttons as well as check boxes, picture buttons, button grids, radio buttons, picture pop-up menus and drop-down lists.

### Compiler Methods for

Esta área le permite renombrar los métodos del compilador que son generados automáticamente por el compilador cuando hace clic en [Declarar tipos](#generate-typing).

Up to 5 compiler methods may be generated; a compiler method is only generated if the project contains the following items:

- **Variables**: agrupa las declaraciones de variables proceso;
- **Variables interproceso**: agrupa las declaraciones de variables interproceso;
- **Arrays**: agrupa las declaraciones de arrays de proceso;
- **Arrays interproceso**: agrupa las declaraciones de arrays interproceso;
- **Métodos**: agrupa las declaraciones de parámetros de métodos (por ejemplo `C_LONGINT(mymethod;$1;$2)`) para [parámetros de métodos declarados fuera de prototipos](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). For more information, see [`Compiler_Methods` method](../Concepts/parameters.md#compiler_methods-method).

Puede renombrar cada uno de estos métodos en las áreas correspondientes, pero siempre irán precedidos de la etiqueta `Compilador_` (no modificable). The name of each method (prefix included) must be no longer than 31 characters. También debe ser único y cumplir con [las reglas de 4D para nombrar métodos](Concepts/identifiers.md#project-methods).

## Warnings

Warnings are specific messages generated by the compiler when it checks the syntax. These messages are intended to draw your attention to statements that might lead to execution errors. Não impedem a compilação.

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
Por exemplo, para desativar o seguinte aviso:

_1: Redefinição da variável $a (550.10)_

... you just need to write the following comments in your 4D method:

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

## Ferramentas de compilação

### Ficheiro Symbol

If you check the [**Generate the symbol file**](#generate-the-symbol-file) option in the compiler settings, a symbol file called `ProjectName_symbols.txt` is created in the [Logs folder](Project/architecture.md#logs) of the project during compilation. Está dividido en varias partes:

#### Lista das variáveis processo e interprocesso

Estas duas listas contêm quatro colunas:

- Names of process and interprocess variables and arrays used in your project. Estas variáveis são enumeradas por ordem alfabética.
- Tipo da variável. Types are set by compiler directive commands or are determined by the compiler based on the use of the variable. Se o tipo de uma variável não puder ser determinado, a coluna estará vazia.
- Número de dimensões se a variável for um array.
- Reference to the context in which the compiler established the type of the variable. If the variable is used in several contexts, the context mentioned is the one used by the compiler to determine its type.
  - If the variable was found in a database method, the database method name is given, preceded by (M)\*.
  - If the variable was found in a project method, the method is identified as it has been defined in 4D, preceded by (M).
  - If the variable was found in a trigger, the table name is given, preceded by (TM).
  - If the variable was found in a form method, the form name is given, preceded by the table name and (FM).
  - If the variable was found in an object method, the object method’s name is given, preceded by the form name, table name, and by (OM).
  - If the variable is an object in a form and does not appear in any project, form, object method, or trigger, the name of the form in which it appears is given, preceded by (F).
    At the end of each list, you can find the sizes of the process and interprocess variables in bytes.

> When compiling, the compiler cannot determine in which process a given process variable is used. Uma variável processo pode ter um valor diferente em cada processo. Consequently, all process variables are systematically duplicated as each new process is launched: it is thus advisable to watch out for the amount of memory that they will take up. Also, keep in mind that the space for process variables is not related to the stack size for the process.

#### Lista de variáveis locais

The list of local variables is sorted by database method, project method, trigger, form method, and object method, in the same order as in 4D.

Esta lista está dividida em três colunas:

- lista das variáveis locais utilizadas no método;
- tipo da variável;
- número de dimensões se a variável for um array.

#### Lista completa de métodos

Uma lista completa de seus métodos banco de dados e projeto é apresentada no final do ficheiro com:

- o seu tipo (procedimento ou função que devolve um valor)
- os tipos de dados de seus parâmetros e o resultado retornado
- o número de chamadas
- a propriedade Thread Safe ou Thread Unsafe.

Esta informação aparece da seguinte forma:

```
Procedimiento o función <Method name>(tipos de datos de los parámetros):
tipo resultado, número de llamadas, Thread Safe o Thread Unsafe
```

### Arquivo de erros

You can choose whether or not to generate an error file during compilation using the [**Generate error file**](#generate-error-file) option in the compiler settings. El archivo de errores se llama automáticamente `projectName_errors.xml` y se coloca en la carpeta [Logs](Project/architecture.md#logs) del proyecto.

Aunque se puede acceder a los errores directamente a través de la [ventana de compilación](#compile), puede ser útil disponer de un archivo de errores que se pueda transmitir de una máquina a otra. The error file is generated in XML format in order to facilitate automatic parsing of its contents. Também permite a criação de interfaces customizadas de exibição de erros.

The length of the error file depends on the number of errors and warnings issued by the compiler.

A estrutura do ficheiro de erros é a seguinte:

- At the top of the file is the list of errors and warnings, sorted by method and in their order of creation in 4D.
- En la sección _**Errores generales**_ se agrupan todas las imposibilidades de digitación y las ambigüedades de identidad. There are two cases in which the compiler reports a general error:
  - número da linha no método (0 indica erros gerais)
  - warning attribute indicating whether the detected anomaly is a warning (warning="true") or an error (warning="false")
  - diagnóstico que descreve o erro

Si su proyecto no tiene errores generales, el archivo no tendrá una sección _Errores generales_.

Um ficheiro de erros pode conter três tipos de mensagens:

- **Errores asociados a una línea específica**: estos errores se muestran en contexto -la línea en la que se encontraron y con una explicación. The compiler reports this type of error when it encounters an expression in which it sees an inconsistency related to data type or syntax. In the compiler window, double–click on each error detected in order to open the method concerned directly in the 4D Method editor, with the line containing the error highlighted.

- **Errores generales**: son errores que imposibilitan la compilación del proyecto. Há dois casos em que o compilador informa um erro geral:
  - Não foi possível determinar o tipo de dados de uma variável processo.
  - Dois tipos diferentes de objetos têm o mesmo nome.

General errors are so named because they cannot be linked to any specific method. In the first case, the compiler could not perform a specified typing anywhere in the project. In the second, it was unable to decide whether to associate a given name with one object rather than with another.

- **Avisos**: los avisos no son errores. They do not prevent the project from being compiled, but simply point out potential code errors. Na janela do compilador, os avisos aparecem em itálico. Double-click on each warning to open the method concerned directly in the 4D Method editor, with the line containing the warning highlighted.

### Controlo de execução

The code generated by the 4D compiler automatically checks that every access to an array element or a character reference is done within the actual range of array elements or string characters. Os acessos fora do intervalo provocarão erros de execução em tempo de execução.

Em alguns casos, pode preferir que a verificação de intervalos não se aplique a certas partes do código consideradas fiáveis. More particularly, in the case of loops that are repeated a great number of times, and when running the compiled database on older machines, range checking can significantly slow down processing. If you are absolutely certain that the code concerned is reliable and cannot cause system errors, you can disable range checking locally.

Para ello, debe rodear el código a excluir del control de rangos con los comentarios especiales `//%R-` y `//%R+`. El comentario `//%R-` desactiva el control de rangos y `//%R+` lo reactiva:

```4d
  // %R-   to disable range checking
 
 ... //Place the code to be excluded from range checking here
 
  // %R+   to enable range checking again for the rest
```

## Sobre os compiladores

4D contém dois compiladores:

- um compilador "clássico", usado para compilar código nativo para processadores Intel/AMD;
- um compilador Silicon, para compilar código nativo para processadores Apple Silicon.

The classic compiler can be used on any platform, while the Silicon compiler can only be used on a Mac machine:

|             |    Compilar para Windows    |   Compilar para Intel Mac   |  Compilar para Silicon Mac  |
| ----------- | :-------------------------: | :-------------------------: | :-------------------------: |
| Em Windows  | &#10003 | &#10003 | &#10007 |
| Intel Mac   | &#10003 | &#10003 | &#10003 |
| Silicon Mac | &#10003 | &#10003 | &#10003 |

Ambos os compiladores estão integrados em 4D. El compilador adecuado se selecciona automáticamente en función de la opción [objetivo de compilación](#compilation-target).

### Compilador clássico

The classic compiler generates native compiled code for Intel/AMD processors on any machines. Não necessita de qualquer configuração específica.

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

In any cases, the 4D Silicon compiler will warn you if your configuration does not comply with its requirements.

#### Compilador incremental

O compilador Silicon é incremental, o que significa que:

- Durante la primera compilación, se compilan **todos los métodos 4D**. Esta etapa pode demorar algum tempo. No entanto, só ocorre uma vez.
- Durante todas las compilaciones posteriores, sólo se procesan los métodos **nuevos o modificados**, lo que reduce drásticamente el tiempo de compilación.
