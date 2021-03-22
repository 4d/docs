---
id: compiler
title: Compiler
---

You can compile your project, i.e., translate all of your methods into machine language. Compiling a project lets you check the consistency of the code and accelerate its execution, as well as making it possible to obfuscate the code in its entirety. Compilation is an indispensable step between the development of projects using 4D and their deployment as stand-alone applications.

The compilation process is entirely automatic; however, compilation requires greater rigor when writing 4D code. The compiler will indicate any programming errors and situate them in their context.

## Overview

The 4D compiler is integrated into 4D. Project compilation is carried out using the following dialog box:

![](assets/en/Project/comp1.png)

It is also possible to launch compilation directly using the current settings via the **Start Compilation** command found in the **Design** menu or the “Compiler” tool bar button.

Compilation is carried out in keeping with **compilation options**, set on the Compiler page of the Settings.

Once the database is compiled, it is still possible to [switch from interpreted mode to compiled mode](Concepts/interpreted.md), and vice versa, at any time using the **Restart Interpreted** and **Restart Compiled** commands of the **Run** menu, without having to quit the 4D application — except when the interpreted code has been removed. The [Open project dialog box](creating.md#options) also allows the choice of interpreted or compiled mode on startup of the database.

When you switch from one mode to the other, 4D closes the current mode and opens the new one. This amounts to exiting then reopening the application. Consequently, each time you change from one mode to another, 4D executes the two following database methods (if specified) in this order: `On Exit` -> `On Startup`.

If you modify your project in interpreted mode, you must recompile it in order to have your edits taken into account in compiled mode.


## Compiler Window



## Compiler Settings

The "Compiler" page of the Settings lets you set parameters relating to project compilation.

### Compilation options

This area groups the generic options used during the compilation process.

#### Generate the symbol file

Used to generate an ASCII type file containing the list of variables along with their type and the method from which their type has been inferred. The symbol file also contains the list of your methods and functions along with the type of their parameters and the type of result, if any. The file is placed in the project folder and is named *ProjectName_symbols.txt*. For more information about the symbol file, refer to Symbol file.

#### Generate error file

Used to generate the error file at the time of syntax checking. It lists general errors as well as errors linked to a specific line, and warnings. Any errors detected by the compiler are automatically accessible in the **Method** menu of 4D. However, having an error file that can be transmitted from one machine to another can be useful. The error file is generated in XML format in order to facilitate automatic parsing of its contents. It also allows the creation of customized error display interfaces. The error file is automatically named ProjectName_errors.xml and is created in the project folder. For more information about the error file, refer to Error file.

#### Initialize local variables

Used to set the local variable initialization mode at the beginning of methods:
- **to "zero"**: Variables are reset to zero by default (empty string for character strings, 0 for numbers, etc.)
- **to a random value**: The compiler assigns a random value, always the same, (1919382119 for longints, “rgrg” for character strings, True for Booleans...) to variables. This option enables you to pinpoint local variables that you have forgotten to initialize.
- **no**: The compiler does not initialize the variables. In this way, you gain time during application execution, provided that your initialization was correct.


#### Compilation Path

Used to set the number of passes performed by the compiler and thus the duration of compilation.

- **Type the variables**: Passes by all the stages that make compilation possible.
- **Process and interprocess are typed**: The pass for typing process and interprocess variables is not carried out. This option can be used when you have already carried out the typing of all your process and interprocess variables either yourself or using the function for the automatic generation of compiler methods.
- **All variables are typed**: The pass for typing local, process and interprocess variables is not carried out. Use this option when you are certain that all the process, interprocess and local variables have been clearly typed.

#### Compilation Target

<details><summary>History</summary>
| Version | Changes |
| ------- | ------- |
| v19     | Added   |
</details>

This setting allows you to select the processor family for which your 4D project must be natively compiled. The 4D compiler can build native code for two processor families:

- **Intel/AMD** processors (all machines),
- **Apple Silicon** processors.

Two target options are proposed. The result depends on the processor of the machine on which 4D is running.

| *Option*                                         | *Selected on Intel/AMD machine*                                                                                    | *Selected on Silicon machine*                                                                                 |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **All processors (Intel/AMD and Apple Silicon)** | Code for Intel/AMD processor<br>*It is not possible to produce Apple Silicon code from an Intel/AMD machine* | Code for Apple Silicon processor + Code for Intel/AMD processor<br>*Two applications will be available* |
| **My processor (Intel/AMD)**                     | Code for Intel/AMD processor                                                                                       | n/a                                                                                                           |
| **My processor (Apple Silicon)**                 | n/a                                                                                                                | Code for Apple Silicon processor                                                                              |


> Apple Silicon compiler target requires that the **clang** application be installed on your machine. If it is missing, 4D will provide instructions about how to get it. 