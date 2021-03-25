---
id: compiler
title: Compilation
---

You can compile your project, i.e., translate all of your methods into machine language. Compiling a project lets you check the consistency of the code and accelerate its execution, as well as making it possible to obfuscate the code in its entirety. Compilation is an indispensable step between the development of projects using 4D and their deployment as stand-alone applications. 

The compilation process is entirely automatic; however, compilation requires greater rigor when writing 4D code. The compiler will indicate any programming errors and situate them in their context. 

## Overview

4D contains two compilers:

- a "classic" compiler, used to compile native code for Intel/AMD processors;
- a Silicon compiler, used to compile native code for Apple Silicon processors.

The "classic" compiler can be used on any platform, while the Silicon compiler can only be used on a Mac machine:

![](assets/en/Project/compileModes.png)

Both compilers are integrated into 4D. The appropriate compiler is automatically selected depending on the [compilation target](#compilation-target) option. Other [**compilation options**](#compilation-options) are also available on the Compiler page of the Settings.  

Whatever the selected compiler, project compilation is carried out using the following window:

![](assets/en/Project/comp1.png)

It is also possible to launch compilation directly using the current settings via the **Start Compilation** command found in the **Design** menu or the **Compiler** tool bar button.

Once the project is compiled, it is still possible to [switch from interpreted mode to compiled mode](Concepts/interpreted.md), and vice versa, at any time using the **Restart Interpreted** and **Restart Compiled** commands of the **Run** menu, without having to quit the 4D application — except when the interpreted code has been removed. The [Open project dialog box](creating.md#options) also allows the choice of interpreted or compiled mode on startup of the database. 

When you switch from one mode to the other, 4D closes the current mode and opens the new one. This amounts to exiting then reopening the application. Consequently, each time you change from one mode to another, 4D executes the two following database methods (if specified) in this order: `On Exit` -> `On Startup`.

If you modify your project in interpreted mode, you must recompile it in order to have your edits taken into account in compiled mode. 


## Compiler Window

To display the compiler window, select the **Compiler...** command in the **Design** menu. You can also use the **Compiler** toolbar button:

![](assets/en/Project/compilerWin1.png)

> These commands are disabled if the project does not contain at least one method.

This window is used for launching the compilation of the project or checking the syntax of the methods and classes. In addition, buttons can be used for generating/regenerating Typing methods, clearing the compiled code, displaying/hiding warnings, and accessing the [compiler settings window](#compiler-settings).


> Compilation requires an appropriate license. Without this license, it is not possible to carry out a compilation (buttons are disabled). Nevertheless, it is still possible to check the syntax and generate Typing methods.

### Compiler

The **Compiler** button causes the immediate launching of the compilation process. It is the exact equivalent of the **Start Compilation** command in the **Design** menu. If the project has already been compiled, the new code compiled will replace the former. Initially, different passes are carried out for checking, typing and initialization, in accordance with the configuration set on the [compiler settings window](#compiler-settings).

If no errors are detected, the actual compilation begins. If errors are detected, the process is stopped and the information area of the window displays the method names and line numbers concerned in a hierarchical list:

![](assets/en/Project/compilerWin2.png)

Double-click on each error detected in order to open the method or class concerned directly in the 4D method editor; the line containing the error is highlighted and the type of error is displayed in the syntax area of the window. The **Previous Error** / **Next Error** commands of the **Method** menu allow you to navigate among the lines containing errors.

> The number of errors found during your first compilations may be daunting, but do not let this put you off. You will soon discover that they often spring from the same source, i.e., non-compliance with certain project conventions. The compiler always provides a precise diagnosis of the errors in order to help you correct them.

### Check Syntax

The **Check Syntax** button starts the execution of the syntax-checking phase. At the end of checking, any errors detected are listed in the information area. You can double–click on an error line in order to display the corresponding method.

Syntax checking can also be launched directly using the **Check Syntax** command associated with the **Compiler** toolbar button. This option is the only one available if you do not have a suitable license to allow the compilation of applications.

### Generate Typing

The **Generate Typing** button creates or updates typing compiler methods. Compiler methods are project methods that group together all the variable and array typing declarations (process and interprocess), as well as the method parameters. These methods, when they exist, are used directly by the compiler during code compilation, which accelerates compilation. If these methods already exist, their contents are updated.

The name of these methods must mandatorily begin with `Compiler_`. You can set the default name for each of the 5 compiler methods in the [compiler settings window](#compiler-settings) (see Compiler Methods for...). The compiler methods that are generated and maintained by 4D automatically have the Invisible attribute:

![](assets/en/Project/compilerWin3.png)

Only the necessary compiler methods (i.e., those for which items already exist in the project) are generated. 

The information area indicates any errors found during method creation or updating. Double-clicking on an error line causes the method and line concerned to be displayed in the Method editor. 


### Clear compiled code

The **Clear compiled code** button deletes the compiled code of the project. When you click on it, all of the code generated during compilation is deleted. 

The **Restart Compiled** command of the **Run** menu is then disabled and the "Compiled Project" option is not available at startup.  


### Show warnings

Warnings are specific messages generated by the compiler when it checks the syntax. These messages are intended to draw your attention to statements that might lead to execution errors. They do not prevent compilation. 

Depending on circumstances and the programming style used, these warnings may be more or less relevant. You have an option for displaying or hiding the warnings in the information area of the compiler window.

![](assets/en/Project/compilerWin4.png)

When this option is checked, the warnings (if any) are displayed in the window, after the other error types. They appear in italics:

![](assets/en/Project/compilerWin5.png)

Double-clicking a warning opens the corresponding method.

#### Disabling warnings during compilation

You can selectively disable certain warnings during compilation by inserting the following into the code of a 4D method:

```4d
  //%W-<warning number>
```

Only warnings with numbers can be disabled. Warning numbers are specified at the end of each message in the list of compilation errors. For example, to disable the following warning: 

*1: Pointer in an array declaration (518.5)*

... you just need to write the following comment in a 4D method, preferably a `COMPILER_xxx` method (method compiled first):

```4d
  //%W-518.5
```



## Compiler Settings

The "Compiler" page of the Settings lets you set parameters relating to project compilation. You can directly open this page from the [compiler window](#compiler-window) by clicking on the Compiler Preferences button:

![](assets/en/Project/compilerWin6.png)


### Compilation options

This area groups the generic options used during the compilation process.

#### Generate the symbol file

Used to generate an ASCII type file containing the list of variables along with their type and the method from which their type has been inferred. The symbol file also contains the list of your methods and functions along with the type of their parameters and the type of result, if any. The file is placed in the project folder and is named *ProjectName_symbols.txt*. For more information about the symbol file, refer to Symbol file.

#### Generate error file

Used to generate the error file at the time of syntax checking. It lists general errors as well as errors linked to a specific line, and warnings. Any errors detected by the compiler are automatically accessible in the **Method** menu of 4D. However, having an error file that can be transmitted from one machine to another can be useful. The error file is generated in XML format in order to facilitate automatic parsing of its contents. It also allows the creation of customized error display interfaces. The error file is automatically named ProjectName_errors.xml and is created in the project folder. For more information about the error file, refer to Error file.


#### Compilation Path

Used to set the number of passes performed by the compiler and thus the duration of compilation.

- **Type the variables**: Passes by all the stages that make compilation possible.
- **Process and interprocess are typed**: The pass for typing process and interprocess variables is not carried out. This option can be used when you have already carried out the typing of all your process and interprocess variables either yourself or using the function for the automatic generation of compiler methods.
- **All variables are typed**: The pass for typing local, process and interprocess variables is not carried out. Use this option when you are certain that all the process, interprocess and local variables have been clearly typed.

#### Compilation Target

<details><summary>History</summary>
|Version|Changes|
|---|---|
|v19|Added|
</details>

This setting allows you to select the processor family for which your 4D project must be natively compiled. The 4D compiler can build native code for two processor families:

- **Intel/AMD** processors (all machines),
- **Apple Silicon** processors.

Two target options are proposed. The result depends on the processor of the machine on which 4D is running.

|*Option*|*on Windows Intel/AMD*|*on macOS Intel/AMD*|*on macOS Silicon*|  
|---|---|---|---|
|**All processors (Intel/AMD and Apple Silicon)**|Code for Intel/AMD<br>*It is not possible to produce Apple Silicon code on Windows*|Code for Apple Silicon + Code for Intel/AMD<br>*Two compiled codes will be available*|Code for Apple Silicon + Code for Intel/AMD<br>*Two compiled codes will be available*|
|**My processor (processor)**|Code for Intel/AMD|Code for Intel/AMD|Code for Apple Silicon|

> Apple Silicon compiler target requires that the **Clang** application be installed on your machine. Clang comes with the latest version of XCode. If it is missing, 4D will provide instructions about how to get it. 

## Classic Compiler

The classic compiler generates native compiled code for Intel/AMD processors on any machines. It does not require any specific configuration. 

Resulting compiled code is stored in the [DerivedData](architecture.md#deriveddata-folder) folder of the project.  

## Silicon Compiler

The Silicon compiler generates native compiled code for Apple Silicon processors, such as *Apple M1*. This compiler has specific requirements and features.

### Requirements

- **Apple machine**: The Silicon compiler can only be run from an Apple machine. 
- **4D Project architecture**: The Silicon compiler is only available for 4D developments using [project architecture](architecture.md).
- **Xcode or Developer Tools**: The Silicon compiler calls the **clang** open-source macOS compiler to compile the project from C++ code at the [second step](#two-step-incremental-compiler) of compilation. *clang* requires Apple native libraries, which are provided by either the **Xcode** or **Developer Tools** package.
	- **If you already have** Xcode or Developer Tools installed on your computer, you only need to make sure that its version is compliant with 4D requirements. 
	- **If you do not have** any of these tools installed on your computer, you will need to download one of them from the Apple Developer web site.
	
> We recommend to install **Xcode**, which is more simple to install. However, it is a large library with a lot of unnecessary components. You can decide to install **Developer Tools** which is more compact, however its installation is a little more complex. 

In any cases, the 4D Silicon compiler will warn you if your configuration does not comply with its requirements. 


### Two-step compiler

The Silicon compiler is a two-step compiler:

1. At a first step, it translates the 4D code into C++ source files. 
2. Then, it compiles the C++ result into Silicon code using **clang**. 

The resulting code is stored in the [Libraries folder](architecture.md#libraries-folder), within the project folder.

The files generated during the compilation are stored per project and per user in the [user preferences folder](architecture.md#userpreferencesusername-folder). Two sets of files are generated:

- `.cpp` (text) files, containing C++ code,
- `.o` files are binary objects, generated by clang.


### Incremental compiler

The Silicon compiler is incremental, which means that during the [first compilation step](#two-step-compiler), only **new or modified methods** are translated into C++, thus reducing drastically the compilation time. 

> In the initial compilation, **all** 4D methods are translated into C++; on large applications, it could take a certain time. However this step only occurs once. 




