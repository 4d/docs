---
id: compiling
title: Compiling a project
---

Compilation is an indispensable step between the development and deployment phases. When project development has reached a point where it's ready to be deployed as an application, compilation is a must.

## Why compile a project?

There are five fundamental benefits of compiling a database project:

* **Faster execution**
    
    * Code Translation
        
        When a database project is compiled, the entire project code is translated into in machine language. Execution speed is therefore, faster since the need to spend time translating code statements has been removed.
        
        *Example*
        
        Take the case of a loop containing a sequence of statements that is repeated 50 times:
        
            For($i;1;50)
            //Sequence of statements
            End for
            
        
        Before compilation, each statement in the sequence is translated 50 times. Compiling the project eliminates the translation phase for each statement. For every statement in the sequence, we save 50 translations.
    
    * Access to Variables and Methods
        
        In interpreted (not compiled) database projects, variables are accessed through a name which 4D must access in order to obtain the variable’s value. When the code is compiled, the compiler attaches an address to each variable, writes it directly in the code, and goes directly to it whenever necessary.
        
        > * Operations requiring disk access may not be affected because their speed of execution is limited by the rate of transmission between the computer and its peripherals (drive or hard disk).
        > * Comments are not translated, don't appear in compiled code, and don't affect execution time. 

* **Code checking**
    
    The 4D compiler operates as a syntax checker for your database projects. It systematically checks your code and notes possible ambiguities. The entire database is scanned and each statement analyzed. Abnormalities (*i.e.*, logical and syntactical conflicts, if any) are detected and error messages or warnings are generated to alert you of the problem.

* **Code protection**
    
    Once a database project is compiled, the application builder should be used to erase the interpreted code. This eliminates access to the Design environment (except for records) and commands related to development are disabled. While functionally identical to the original, the structure and procedures cannot be viewed or modified (intentionally or accidentally), so the code is protected.

* **Stand-alone applications**
    
    Compiled database projects can be transformed into stand-alone applications (.EXE files) with their own icons.

* **Preemptive mode**
    
    Only compiled code can be executed in a preemptive process.

## Compilation Process

The process of compiling a database project is entirely automatic. You can launch compilation via:

* the **Start Compilation** command in the **Design** menu  
    ![](assets/en/Project/compilerdesignProj.png)
* the **Compiler** button menu associated with the of the tool bar: ![](assets/en/Project/compilertoolbarProj.png)

Compiling is carried out using the following dialog box:

![](assets/en/Project/compiledialogProj.png)

Compilation is carried out in keeping with the compilation options set on the **Database Settings > Compiler** page.

![](assets/en/Project/compilerProj.png)

### Compilation logs

If the *Compilation Options* to generate a symbol file or an error file is checked in the Compiler page of the Database Settings (see image above), they will be generated during compilation and placed in the the **Logs** folder with the naming convention: *\<database>_symbols.txt* and *\<database>_errors.xml*.

## Integrated compiler

The compiler in 4D compiles the database methods, project methods, triggers, form methods and object methods in your database. If you do not have any of these elements in an application, the compiler will have nothing to compile.

For more in-depth information about the compiler and how to use it, see [Compiler](https://livedoc.4d.com/What-s-new/4D-Language-Reference-18/Compiler.201-4504364.en.html).