---
id: compiler
title: Compilação
---

You can compile your projects, i.e., translate all of your methods into machine language. Compiling a project lets you check the consistency of the code and accelerate its execution, as well as making it possible to obfuscate the code in its entirety. Compilation is an indispensable step between the development of projects using 4D and their deployment as stand-alone applications.

## Compilar

The compilation is handled from your 4D application and is entirely automatic.

> On macOS, the compilation requires that you install `Xcode`. See [this section](#silicon-compiler) for more information about this requirement.

1. Open the compiler window by selecting the **Compiler...** command in the **Design** menu or the **Compiler** toolbar button.

   ![](../assets/en/Project/compilerWin1.png)

   ![](../assets/en/Project/comp1.png)

> You can also launch directly the compilation by selecting the **Start Compilation** menu item from the **Design** menu.

2. Click the **Compile** button to launch the compilation using the current [compilation settings](#compiler-settings).

If no errors are detected, the actual compilation begins and the "Compilation successful" message is displayed at the bottom of the window when the compilation is completed:

![](../assets/en/Project/success.png)

You can immediately [run your application in compiled mode](#run-compiled) and see how faster it is.

If errors are detected, the process is stopped and the "Compilation failed" message is displayed. The information area of the window displays the method names and line numbers concerned in a hierarchical list:

![](../assets/en/Project/compilerWin2.png)

Double-click on each error detected to open the method or class concerned directly in the 4D method editor. The line containing the error is highlighted and the type of error is displayed in the syntax area of the window.

Use the **Previous Error** / **Next Error** commands of the **Method** menu to navigate from one error to the next.

The number of errors found during your first compilations may be daunting, but do not let this put you off. You will soon discover that they often spring from the same source, i.e., non-compliance with certain project conventions. The compiler always provides a [precise diagnosis](#error-file) of the errors in order to help you correct them.

> A compilação requer uma licença adequada. Without this license, it is not possible to carry out a compilation (buttons are disabled). Nevertheless, it is still possible to check the syntax and generate Typing methods.

## Executar a compilação

Once a project is compiled, it is possible to switch from [interpreted mode to compiled mode](Concepts/interpreted.md), and vice versa, at any time and without having to quit the 4D application (except when the interpreted code has been removed). To do this, use the **Restart Interpreted** and **Restart Compiled** commands of the **Run** menu. The [Open project dialog box](GettingStarted/creating.md#options) also offers a choice between interpreted or compiled mode for database startup.

When you switch from one mode to the other, 4D closes the current mode and opens the new one. Isto é equivalente a sair e reabrir a aplicação. Each time you change from one mode to another, 4D executes the two following database methods (if specified) in this order: `On Exit` -> `On Startup`.

If you modify your project in interpreted mode, you must recompile it in order to have your edits taken into account in compiled mode.

## Características da janela do compilador

In addition to the [**Compile** button](#compile), the Compiler window provides additional features that are useful during the project development phase.

### Verificar sintaxe

The **Check Syntax** button starts the execution of the syntax-checking phase. At the end of the checking process, any errors detected are listed in the information area. You can double–click on an error line in order to display the corresponding method.

Syntax checking can also be launched directly using the **Check Syntax** command associated with the **Compiler** toolbar button. This option is the only one available if you do not have a suitable license to allow the compilation of applications.

### Gerar digitação

The **Generate Typing** button creates or updates typing compiler methods. Compiler methods are project methods that group together all the variable and array typing declarations (process and interprocess), as well as the [method parameters declared outside prototypes](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). These methods, when they exist, are used directly by the compiler during code compilation, resulting in faster compilation times.

The name of these methods must begin with `Compiler_`. You can set the default name for each of the 5 compiler methods in the [compiler settings window](#compiler-methods-for). The compiler methods that are generated and maintained by 4D automatically have the `Invisible` attribute:

![](../assets/en/Project/compilerWin3.png)

Only the necessary compiler methods (i.e., those for which items already exist in the project) are generated.

The information area indicates any errors found during method creation or updating. Double-clicking on an error line causes the method and line concerned to be displayed in the Method editor.

### Limpar código compilado

The **Clear compiled code** button deletes the compiled code of the project. When you click on it, all of the [code generated during compilation](#classic-compiler) is deleted, the **Restart Compiled** command of the **Run** menu is disabled and the "Compiled Project" option is not available at startup.

### Mostrar/ocultar avisos

Warnings are specific messages generated by the compiler when it checks the syntax. These messages are intended to draw your attention to statements that might lead to execution errors. Não impedem a compilação.

Depending on circumstances and the programming style used, these warnings may be more or less relevant. You can toggle the warnings on or off by clicking the **Show/Hide Warnings** button:

![](../assets/en/Project/compilerWin4.png)

When this option is checked, the warnings (if any) are displayed in the window, after the other error types. Estas aparecem em itálico:

![](../assets/en/Project/compilerWin5.png)

Um duplo clique num aviso abre o método correspondente.

#### Desativar os avisos durante a compilação

You can selectively disable certain warnings during compilation by inserting the following into the code of a 4D method:

```4d
  //%W-<warning number>
```

Apenas os avisos com números podem ser desactivados. Warning numbers are specified at the end of each message in the list of compilation errors. Por exemplo, para desativar o seguinte aviso:

_1: Ponteiro numa declaração de array (518.5)_

... you just need to write the following comment in a 4D method, preferably a `COMPILER_xxx` method (method compiled first):

```4d
  //%W-518.5
```

## Parâmetros do compilador

The "Compiler" page of the Settings dialog box lets you set parameters related to project compilation. You can directly open this page from the [compiler window](#compiler-window) by clicking on the **Compiler Settings** button:

![](../assets/en/Project/compilerWin6.png)

### Opções de compilação

This area groups the generic options used during the compilation process.

#### Generate symbol file

Used to generate the symbol file (see [symbol file](#symbol-file)). The symbol file is created in the in the [Logs folder](Project/architecture.md#logs) of the project with the name `ProjectName_symbols.txt`.

#### Gerar ficheiro de erros

Used to generate the error file (see [error file](#error-file)) at the time of syntax checking. The error file is created in the [Logs folder](Project/architecture.md#logs) of the project with the name `ProjectName_errors.xml`.

#### Caminho de compilação

Used to set the number of passes (code parsing) performed by the compiler and thus the duration of compilation.

- **Type the variables**: Check this option if you want the compiler to infer the type of variables and parameters in your code. This option requires the compiler to perform all the stages that make compilation possible, which increases the duration of compilation.
- **Process and interprocess variables are typed**: The pass for typing process and interprocess variables as well as method parameters declared outside prototypes is not carried out. This option can be used when you have already carried out the typing of all your process and interprocess variables either yourself or using the function for automatic generation of compiler methods.
- **All variables are typed**: The pass for typing local, process and interprocess variables as well as method parameters declared outside prototypes is not carried out. Use this option when you are certain that all the local, process, and interprocess variables as well as method parameters have been clearly typed.

:::tip

You can use the [Generate Typing](#generate-typing) button then compile with one of the two last options.

:::

#### Objectivo de compilação

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 19      | Adicionado |

</details>

This setting allows you to select the processor family for which your 4D project must be natively compiled. O compilador 4D pode criar código nativo para duas famílias de processadores:

- **Intel/AMD** processors (all machines),
- **Apple Silicon** processors.

Duas opções de alvo estão disponíveis. O resultado depende do processador da máquina em que 4D está em execução.

| _Opção_                                                                   | _no Windows Intel/AMD_                                                               | _macOS Intel_                                                                          | _no macOS Silicon_                                                                     |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Todos os processadores (Intel/AMD e Apple Silicon)** | Code for Intel/AMD<br/>_It is not possible to produce Apple Silicon code on Windows_ | Code for Apple Silicon + Code for Intel/AMD<br/>_Two compiled codes will be available_ | Code for Apple Silicon + Code for Intel/AMD<br/>_Two compiled codes will be available_ |
| **O meu processador (processador)**                    | Código para Intel/AMD                                                                | Código para Intel/AMD                                                                  | Código para Apple Silicon                                                              |

> Apple Silicon compiler target requires that the **Clang** application be installed on your machine. Clang vem com a versão mais recente do Xcode. See the [Silicon compiler requirements](#requirements) for more information.

### Digitação por defeito

Use esta área para definir o tipo padrão para objetos de banco de dados ambíguos.

- **Numeric**: Used to force numeric typing in an unambiguous manner, either in real or longint. This will not override the directives you may have set in your project. Você pode otimizar a execução do seu banco de dados escolhendo o tipo Longint.
- **Button**: Used to force button typing in an unambiguous manner, either in real or longint. This will not override the directives you may have set in your project. This type applies to buttons as well as check boxes, picture buttons, button grids, radio buttons, picture pop-up menus and drop-down lists.

### Compiler Methods for

This area lets you rename the Compiler methods that are generated automatically by the compiler when you click [Generate Typing](#generate-typing).

Up to 5 compiler methods may be generated; a compiler method is only generated if the project contains the following items:

- **Variables**: Groups together process variable declarations;
- **Interprocess Variables**: Groups together interprocess variable declarations;
- **Arrays**: Groups together process array declarations;
- **Interprocess Arrays**: Groups together interprocess array declarations;
- **Methods**: Groups together method parameter declarations (e.g `C_LONGINT(mymethod;$1;$2)`) for [method parameters declared outside prototypes](../Concepts/parameters.md#method-parameters-declared-outside-prototypes). For more information, see [`Compiler_Methods` method](../Concepts/parameters.md#compiler_methods-method).

You can rename each of these methods in the corresponding areas, but they will always be preceded by the label `Compiler_` (non-modifiable). The name of each method (prefix included) must be no longer than 31 characters. It must also be unique and comply with [4D rules for naming methods](Concepts/identifiers.md#project-methods).

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
Procedure or Function <Method name>(parameter data types):
result data type, number of calls, Thread Safe or Thread Unsafe
```

### Arquivo de erros

You can choose whether or not to generate an error file during compilation using the [**Generate error file**](#generate-error-file) option in the compiler settings. The error file is automatically named `projectName_errors.xml` and is placed in the [Logs folder](Project/architecture.md#logs) of the project.

Although the errors can be accessed directly via the [compiler window](#compile), it can be useful to have an error file that can be transmitted from one machine to another. The error file is generated in XML format in order to facilitate automatic parsing of its contents. Também permite a criação de interfaces customizadas de exibição de erros.

The length of the error file depends on the number of errors and warnings issued by the compiler.

A estrutura do ficheiro de erros é a seguinte:

- At the top of the file is the list of errors and warnings, sorted by method and in their order of creation in 4D.
- In the _**General errors**_ section, all the typing impossibilities and identity ambiguities are grouped together. There are two cases in which the compiler reports a general error:
  - número da linha no método (0 indica erros gerais)
  - warning attribute indicating whether the detected anomaly is a warning (warning="true") or an error (warning="false")
  - diagnóstico que descreve o erro

If your project does not have any general errors, the file will not have a _General errors_ section.

Um ficheiro de erros pode conter três tipos de mensagens:

- **Errors linked to a specific line**: these errors are displayed in context — the line in which they were found — with an explanation. The compiler reports this type of error when it encounters an expression in which it sees an inconsistency related to data type or syntax. In the compiler window, double–click on each error detected in order to open the method concerned directly in the 4D Method editor, with the line containing the error highlighted.

- **General errors**: These are errors that make it impossible to compile the project. Há dois casos em que o compilador informa um erro geral:
  - Não foi possível determinar o tipo de dados de uma variável processo.
  - Dois tipos diferentes de objetos têm o mesmo nome.

General errors are so named because they cannot be linked to any specific method. In the first case, the compiler could not perform a specified typing anywhere in the project. In the second, it was unable to decide whether to associate a given name with one object rather than with another.

- **Warnings**: Warnings are not errors. They do not prevent the project from being compiled, but simply point out potential code errors. Na janela do compilador, os avisos aparecem em itálico. Double-click on each warning to open the method concerned directly in the 4D Method editor, with the line containing the warning highlighted.

### Controlo de execução

The code generated by the 4D compiler automatically checks that every access to an array element or a character reference is done within the actual range of array elements or string characters. Os acessos fora do intervalo provocarão erros de execução em tempo de execução.

Em alguns casos, pode preferir que a verificação de intervalos não se aplique a certas partes do código consideradas fiáveis. More particularly, in the case of loops that are repeated a great number of times, and when running the compiled database on older machines, range checking can significantly slow down processing. If you are absolutely certain that the code concerned is reliable and cannot cause system errors, you can disable range checking locally.

To do this, you must surround the code to be excluded from range checking with the special comments `//%R-` and `//%R+`. The `//%R-` comment disables range checking and `//%R+` enables it again:

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

Ambos os compiladores estão integrados em 4D. The appropriate compiler is automatically selected depending on the [compilation target](#compilation-target) option.

### Compilador clássico

The classic compiler generates native compiled code for Intel/AMD processors on any machines. Não necessita de qualquer configuração específica.

Resulting compiled code is stored in the [DerivedData](architecture.md#deriveddata) folder of the project.

### Compilador Silicon

The Silicon compiler generates native compiled code for Apple Silicon processors, such as _Apple M1_.

Resulting compiled code is stored in the [Libraries](architecture.md#libraries) folder of the project.

#### Requisitos

- **Apple machine**: The Silicon compiler can only be run from an Apple machine.
- **4D Project architecture**: The Silicon compiler is only available for 4D developments using [project architecture](architecture.md).
- **Xcode or Developer Tools**: The Silicon compiler calls the **Clang** open-source macOS compiler to compile the project from C++ code at the [second step](#incremental-compiler) of compilation. _clang_ requires Apple native libraries, which are provided by either the **Xcode** or **Developer Tools** package.
  - **If you already have** Xcode or Developer Tools installed on your computer, you only need to make sure that its version is compliant with 4D requirements.
  - **If you do not have** any of these tools installed on your computer, you will need to download one of them from the Apple Developer web site.

> We recommend to install **Xcode**, which is quite simple to install. You can decide to install **Developer Tools** which is more compact, however its installation is a little more complex.

In any cases, the 4D Silicon compiler will warn you if your configuration does not comply with its requirements.

#### Compilador incremental

O compilador Silicon é incremental, o que significa que:

- During the very first compilation, **all 4D methods** are compiled. Esta etapa pode demorar algum tempo. No entanto, só ocorre uma vez.
- During all subsequent compilations, only **new or modified methods** are processed, thus reducing drastically the compilation time.
