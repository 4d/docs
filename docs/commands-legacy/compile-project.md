---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} -> Function result<!-- END REF-->
<!--REF #_command_.Compile project.Params-->
| Parameter | Type |  | Description |
| --- | --- | --- | --- |
| projectFile | 4D.File | &srarr; | .4DProject file to compile |
| options | Object | &srarr; | Object that specifies compilation options |
| Function result | Object | &larr; | Object containing information on the compilation status |

<!-- END REF-->

#### Description 

<!--REF #_command_.Compile project.Summary-->**Compile project** allows you to compile the current host project or the project specified in the *projectFile* parameter.<!-- END REF--> For more information on compilation, see the *Compilation page on developer.4d.com*.

By default, the command uses the compiler options defined in the Structure Settings. You can override them by passing an *options* parameter. The following syntaxes are supported:

* **Compile project**(): compiles the opened project using the options defined in the Structure Settings
* **Compile project**(*options*): compiles the opened project. The *options* defined override the Structure Settings
* **Compile project**(*projectFile*): compiles the *projectFile* 4DProject using the options defined in the Structure Settings
* **Compile project**(*projectFile*; *options*): compiles the *projectFile* 4DProject and the *options* defined override the Structure Settings

**Note:** Binary databases cannot be compiled using this command.

Unlike the Compiler window, this command requires that you explicitly designate the component(s) to compile. When compiling a project with **Compile project**, you need to declare its components using the *components* property of the *options* parameter. Keep in mind that the components must already be compiled (binary components are supported).

The resulting compiled code will be stored in the DerivedData or Libraries folder of the project, depending on the *targets* property of the *options* parameter. If you want to create .4dz files, you still need to manually zip the compiled project or use the *build application* feature.

If you pass an empty collection in *targets*, **Compile project** will execute a syntax check without compiling.

Compilation errors, if any, are returned as objects in the *errors* collection.

**Note:** You cannot call this command when another compilation is running (for example, a compilation launched from the Compilation window).

##### options Parameter 

The *options* parameter is an object. Here are the available compilation options:

| **Property**           | **Type**              | **Descriptio**n                                                                                                                                                                                                               |
| ---------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components             | Collection            | Collection of 4D.File objects to dependent components (must be already compiled)                                                                                                                                              |
| defaultTypeForButtons  | Integer               | Possible value: Is real or Is longint                                                                                                                                                                                         |
| defaultTypeForNumerics | Integer               | Possible value: Is real or Is longint                                                                                                                                                                                         |
| generateSymbols        | Boolean               | True to generate symbol information in the .symbols returned object                                                                                                                                                           |
| generateSyntaxFile     | Boolean               | True to generate a *syntax file for code completion* in the \\Resources\\en.lproj folder of the project                                                                                                                       |
| generateTypingMethods  | String                | "reset" or "append" to generate typing methods. If value is "append", existing variable declarations won't be modified (compiler window behavior). If value is "reset" existing variable declarations are removed beforehand. |
| plugins                | 4D.Folder object      | Plug-ins folder to be used instead of the [Plugins folder of the current project](https://developer.4d.com/docs/Project/architecture#plugins). This property is only available with the *projectFile* syntax.                 |
| targets                | Collection of strings | possible values: "x86\_64\_generic", "arm64\_macOS\_lib". Pass an empty collection to execute syntax check only                                                                                                               |
| typeInference          | String                | "all": Type all variables, "locals": Process and interprocess are typed, "none": All variables are typed                                                                                                                      |
| warnings               | Collection of objects | Defines the warnings state                                                                                                                                                                                                    |
| \[\].major             | Number                | Warning main number, before the dot                                                                                                                                                                                           |
| \[\].minor             | Number                | Warning second number, after the dot                                                                                                                                                                                          |
| \[\].enabled           | Boolean               | Warning activation state                                                                                                                                                                                                      |

**Note:** When the *warnings* attribute is not defined in the *options* object, the **Compile project** command uses the default warning generation statuses defined in the settings.

##### Function result 

The object returned by **Compile project** has up to three properties:

| **Property**                                                 | **Type**              | **Description**                                                                                                       |
| ------------------------------------------------------------ | --------------------- | --------------------------------------------------------------------------------------------------------------------- |
| success                                                      | Boolean               | True if the save action is successful, False otherwise.                                                               |
| **Available only in case of error or warning:**              |                       |                                                                                                                       |
| errors                                                       | Collection of objects | collection of objects describing compilation errors or warnings                                                       |
| isError                                                      | Boolean               | Error if True, warning otherwise                                                                                      |
| message                                                      | String                | Error message                                                                                                         |
| code                                                         | Object                | *code object*                                                                                                         |
| line                                                         | Number                | Line number of error in the code. For class methods, line number in the function                                      |
| lineInFile                                                   | Number                | Line number in the file (different from "line" for class methods, and takes into account the %attributes prefix line) |
| **Available only if generateSymbols option is set to True:** |                       |                                                                                                                       |
| symbols                                                      | Object                |                                                                                                                       |
| interprocessVariables                                        | Object                | List of all interprocess variables                                                                                    |
| variables                                                    | Collection            | Collection of *variable objects*                                                                                      |
| size                                                         | Number                |                                                                                                                       |
| processVariables                                             | Object                | List of all process variables                                                                                         |
| variables                                                    | Collection            | Collection of *variable objects*                                                                                      |
| size                                                         | Number                |                                                                                                                       |
| localVariables                                               | Collection of objects | List of local variables per method                                                                                    |
| code                                                         | Object                | *code object*                                                                                                         |
| variables                                                    | Collection            | Collection of *variable objects*                                                                                      |
| methods                                                      | Collection of objects | List of methods                                                                                                       |
| code                                                         | Object                | *code object*                                                                                                         |
| callCount                                                    | Number                | Number of times this method has been called                                                                           |
| params                                                       | Collection            | Collection of parameter types (Value type numerical codes)                                                            |
| threadSafe                                                   | Boolean               | Indicates if this method is thread safe                                                                               |

For more information, see *Compilation tools*.

###### variable objects 

interprocessVariables.variables and processVariables.variables contain objects with the following structure:

| **Property**   | **Type** | **Description**                                                                           |
| -------------- | -------- | ----------------------------------------------------------------------------------------- |
| name           | String   | Name of the variable                                                                      |
| type           | number   | Type of the variable (like Value type command)                                            |
| arrayDimension | number   | For arrays only: 1 for mono dimension arrays, 2 for two-dimension arrays                  |
| code           | Object   | For process and interprocess variables: descriptor of where the variable has been defined |

###### code object 

The *code* property in **methods\[ \].code** and **errors\[ \].code** is an object with the following properties:

| **Property**                                              | **Type** | **Description**                                                                                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                                                      | String   | "projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the *Execute on Server attribute*.), "executeFormula" (when executing a formula via [PROCESS 4D TAGS](process-4d-tags.md) or the evaluation of a formula in a 4D Write Pro document.)"class""classFunction"</li<"formmethod",<> |
| path                                                      | String   | Method path (same format as [METHOD OPEN PATH](method-open-path.md))                                                                                                                                                                                                                                                                                                                    |
| file                                                      | 4D.File  | Method file                                                                                                                                                                                                                                                                                                                                                                             |
| **Returned depending on the value of the type property:** |          |                                                                                                                                                                                                                                                                                                                                                                                         |
| methodName                                                | String   | Project method                                                                                                                                                                                                                                                                                                                                                                          |
| table                                                     | Number   | Number of the table (returned for a trigger, a table form method or a table form object method)                                                                                                                                                                                                                                                                                         |
| formName                                                  | String   | Form name (returned for a form method)                                                                                                                                                                                                                                                                                                                                                  |
| objectName                                                | String   | Form object name (returned for an object method)                                                                                                                                                                                                                                                                                                                                        |
| className                                                 | String   | Class name                                                                                                                                                                                                                                                                                                                                                                              |
| functionName                                              | String   | Class function name                                                                                                                                                                                                                                                                                                                                                                     |
| databaseMethod                                            | Number   | Database method index                                                                                                                                                                                                                                                                                                                                                                   |

#### Warning 

To perform a syntax check only, pass an empty collection to the targets parameter:  
  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection //Empty collection for syntax checking
 $status:=Compile project($options)
```

Compile the current project using the compiler options of the Structure Settings only:  
  
```4d
 var $status : Object
 $status:=Compile project
```

On a Silicon Mac, compile the current project to ARM only:  
  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

Compile a project other than the current project:  
  
```4d
 var $status : Object
 var $projectFile: 4D.File
 $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")
 $status:=Compile project($projectFile)
```

Compile a project and declare its component:  
  
```4d
 var $options;$status : Object
 var $component : 4D.File
 $options:=New object
 $component:=Folder(fk documents folder).file("Components/myComponent.4dz")
 $options.components:=New collection($component)
 $status:=Compile project($options)
```

Disable warnings 518.1 and 518.2 when compiling your project:  
  
```RAW
var $options:={}$options.warnings:=[]$options.warnings.push({major: 518; minor: 1; enabled: False})$options.warnings.push({major: 518; minor: 2; enabled: False})var $result:=Compile project($options)
```

#### See also 

[BUILD APPLICATION](build-application.md)  