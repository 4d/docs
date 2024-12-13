---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->

<!--REF #_command_.Compile project.Params-->

| Parâmetro   | Tipo                     |   | Descrição                                                |
| ----------- | ------------------------ | - | -------------------------------------------------------- |
| projectFile | 4D. File | → | Arquivo .4DProject para compilar         |
| options     | Object                   | → | Objeto que especifica as opções de compilação            |
| Resultado   | Object                   | ← | Objeto contendo informações sobre o estado de compilação |

<!-- END REF-->

*Esse comando não é thread-safe, não pode ser usado em código preventivo.*

<details><summary>História</summary>

| Release | Mudanças                                 |
| ------- | ---------------------------------------- |
| 20 R8   | Suporte do `type` "formObjectExpression" |

</details>

#### Descrição

**Compile project**<!--REF #_command_.Comile project.Summary--> permite que você compile o projeto host atual ou o projeto especificado no parâmetro *projectFile*.<!-- END REF--> Para obter mais informações sobre a compilação, verifique a [página de compilação](../Project/compiler.md).

Por padrão, o comando usa as opções do compilador definidas nas Configurações da estrutura. Você pode substituí-los passando um parâmetro *options*. As seguintes sintaxes são suportadas:

- **Compile project**(): compila o projeto aberto usando as opções definidas nas Configurações da Estrutura
- **Compile project**(*options*): compiles the opened project. The *options* defined override the Structure Settings
- **Compile project**(*projectFile*): compiles the *projectFile* 4DProject using the options defined in the Structure Settings
- **Compile project**(*projectFile*; *options*): compiles the *projectFile* 4DProject and the *options* defined override the Structure Settings

**Note:** Binary databases cannot be compiled using this command.

Unlike the Compiler window, this command requires that you explicitly designate the component(s) to compile. When compiling a project with **Compile project**, you need to declare its components using the *components* property of the *options* parameter. Keep in mind that the components must already be compiled (binary components are supported).

The resulting compiled code will be stored in the DerivedData or Libraries folder of the project, depending on the *targets* property of the *options* parameter. If you want to create .4dz files, you still need to manually zip the compiled project or use the [build application](../Desktop/building.md) feature.

If you pass an empty collection in *targets*, **Compile project** will execute a syntax check without compiling.

Compilation errors, if any, are returned as objects in the *errors* collection.

**Note:** You cannot call this command when another compilation is running (for example, a compilation launched from the Compilation window).

##### Parâmetro opções

The *options* parameter is an object. Here are the available compilation options:

| **Propriedade**                                                                    | **Tipo**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components                                                                         | Collection                       | Coleção de objetos 4D.File para componentes dependentes (deve já estar compilado)                                                                                                                                                                                                                                                                                                                                                                                      |
| defaultTypeForButtons                                                              | Integer                          | Possible value: Is real or Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| defaultTypeForNumerics                                                             | Integer                          | Possible value: Is real or Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| generateSymbols                                                                    | Parâmetros                       | True to generate symbol information in the .symbols returned object                                                                                                                                                                                                                                                                                                                                                                                                                       |
| generateSyntaxFile                                                                 | Parâmetros                       | True to generate a [syntax file for code completion](../settings/general.md).md#generate-syntax-file-for-code-completion-when-compiled) in the \\Resources\\en.lproj folder of the project                                                                                                                                                                                                                                                                              |
| generateTypingMethods                                                              | Text                             | "reset" or "append" to generate typing methods. If value is "append", existing variable declarations won't be modified (compiler window behavior). If value is "reset" existing variable declarations are removed beforehand.                                                                                                                                                                                                          |
| plugins                                                                            | Objeto 4D.Folder | Plug-ins folder to be used instead of the [Plugins folder of the current project](../Project/architecture.md#plugins). This property is only available with the *projectFile* syntax.                                                                                                                                                                                                                                                                                     |
| targets                                                                            | Coleção de strings               | Possible values: "x86_64_generic", "arm64_macOS_lib". Pass an empty collection to execute syntax check only                                                                                                                                                                                                                                                                           |
| typeInference                                                                      | Text                             | "all": The compiler deduces the types of all variables not explicitly declared, "locals": The compiler deduces the types of local variables not explicitly declared, "none": All variables must be explicitly declared in the code (legacy mode), "direct": All variables must be explicitly declared in the code ([direct typing](../Project/compiler.md#enabling-direct-typing)). |
| warnings                                                                           | Uma coleção de objetos           | Defines the warnings state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| \[\].major   | Number                           | Warning main number, before the dot                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| \[\].minor   | Number                           | Warning second number, after the dot                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| \[\].enabled | Parâmetros                       | Warning activation state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

**Note:** When the *warnings* attribute is not defined in the *options* object, the **Compile project** command uses the default warning generation statuses defined in the settings.

##### Resultado

The object returned by **Compile project** has up to three properties:

| **Propriedade**                                                                                                        | **Tipo**               | **Description**                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                                                                | Parâmetros             | True se a ação salvar tiver sucesso, senão False                                                                                         |
| errors                                                                                                                 | Uma coleção de objetos | **Available only in case of error or warning**. Collection of objects describing compilation errors or warnings          |
| \[\].isError                                     | Parâmetros             | Error if True, warning otherwise                                                                                                         |
| \[\].message                                     | Text                   | Mensagem de erro                                                                                                                         |
| \[\].code                                        | Object                 | [objeto código](#code-object)                                                                                                            |
| \[\].line                                        | Number                 | Line number of error in the code. For class methods, line number in the function                                         |
| \[\].lineInFile                                  | Number                 | Line number in the file (different from "line" for class methods, and takes into account the %attributes prefix line) |
| symbols                                                                                                                | Object                 | **Available only if generateSymbols option is set to True:**                                                             |
| symbols.interprocessVariables                                                                          | Object                 | List of all interprocess variables                                                                                                       |
| symbols.interprocessVariables.variables                                                | Collection             | Coleção de [objetos variáveis](#variable-objects)                                                                                        |
| symbols.interprocessVariables.size                                                     | Number                 |                                                                                                                                          |
| symbols.processVariables                                                                               | Object                 | List of all process variables                                                                                                            |
| symbols.processVariables.variables                                                     | Collection             | Coleção de [objetos variáveis](#variable-objects)                                                                                        |
| symbols.processVariables.size                                                          | Number                 |                                                                                                                                          |
| symbols.localVariables                                                                                 | Uma coleção de objetos | List of local variables per method                                                                                                       |
| symbols.localVariables[].code      | Object                 | [objeto código](#code-object)                                                                                                            |
| symbols.localVariables[].variables | Collection             | Coleção de [objetos variáveis](#variable-objects)                                                                                        |
| symbols.methods                                                                                        | Uma coleção de objetos | Lista de métodos                                                                                                                         |
| symbols.methods\[\].code         | Object                 | [objeto código](#code-object)                                                                                                            |
| symbols.methods\[\].callCount    | Number                 | Number of times this method has been called                                                                                              |
| symbols.methods\[\].params       | Collection             | Collection of parameter types (Value type numerical codes)                                                            |
| symbols.methods\[\]. threadSafe  | Parâmetros             | Indicates if this method is thread safe                                                                                                  |

Para obter mais informações, consulte [Ferramentas de compilação](../Project/compiler.md#compilation-tools).

###### variable objects

`interprocessVariables.variables` and `processVariables.variables` contain objects with the following structure:

| **Propriedade** | **Tipo** | **Description**                                                                                           |
| --------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| name            | Text     | Name of the variable                                                                                      |
| type            | number   | Type of the variable (like Value type command)                                         |
| arrayDimension  | number   | For arrays only: 1 for mono dimension arrays, 2 for two-dimension arrays                  |
| code            | Object   | For process and interprocess variables: descriptor of where the variable has been defined |

###### code object

The `code` property in `methods.code` and `errors.code` is an object with the following properties:

| **Propriedade**                                                                                                             | **Tipo**                 | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                                                                                                                        | Text                     | "projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the *Execute on Server attribute*), "executeFormula" (when executing a formula via [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) or evaluation of a formula in a 4D Write Pro document), "class", "classFunction", "formObjectExpression" (for errors occuring in expressions associated to form objects) |
| path                                                                                                                        | Text                     | Method path (same format as [METHOD OPEN PATH](../commands-legacy/method-open-path.md))                                                                                                                                                                                                                                                                                                                                                                                                                |
| file                                                                                                                        | 4D. File | Method file                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                                                                                                             |                          | **Returned depending on the value of the `type` property:**                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| methodName                                                                                                                  | Text                     | Métodos proyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| table                                                                                                                       | Number                   | Number of the table (returned for a trigger, a table form method or a table form object method)                                                                                                                                                                                                                                                                                                                                                                                                        |
| formName                                                                                                                    | Text                     | Form name (returned for a form method)                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| objectName                                                                                                                  | Text                     | Form object name (returned for an object method)                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Esta propriedade só está disponível quando não estiver selecionado <a href="#font-theme">tema de fonte</a>. | Text                     | Form object property name (returned for a form object expression)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| className                                                                                                                   | Text                     | Class name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| functionName                                                                                                                | Text                     | Nome da função de classe                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| databaseMethod                                                                                                              | Number                   | Database method index                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### Exemplos

To perform a syntax check only, pass an empty collection to the targets parameter:

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection //Empty collection for syntax checking
 $status:=Compile project($options)
```

Compile the current project using the compiler options of the Structure Settings only:

```4d
 var $status : Object
 $status:=Compile project
```

On a Silicon Mac, compile the current project to ARM only:

```4d
 var $status : Object
 var $options:={}
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
 var $status : Object
 var $component : 4D.File
 var $options:={}
 $component:=Folder(fk documents folder).file("Components/myComponent.4dz")
 $options.components:=New collection($component)
 $status:=Compile project($options)
```

Disable warnings 518.1 and 518.2 when compiling your project:

```4d
var $options:={}
$options.warnings:=[]$options.warnings.push({major: 518; minor: 1; enabled: False})
$options.warnings.push({major: 518; minor: 2; enabled: False})
var $result:=Compile project($options)
```

#### Veja também

[BUILD APPLICATION](../commands-legacy/build-application.md)
