---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->

<!--REF #_command_.Compile project.Params-->

| Parámetros  | Tipo                    |                             | Descripción                                             |
| ----------- | ----------------------- | --------------------------- | ------------------------------------------------------- |
| projectFile | 4D.File | &#8594; | .4DProject file to compile              |
| options     | Object                  | &#8594; | Object that specifies compilation options               |
| Resultado   | Object                  | &#8592; | Object containing information on the compilation status |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                           |
| ----------- | ---------------------------------------- |
| 20 R8       | Support of `type` "formObjectExpression" |

</details>

## Descripción

**Compile project**<!--REF #_command_.Compile project.Summary--> permite compilar el proyecto local actual o el proyecto especificado en el parámetro *projectFile*.<!-- END REF--> Para más información sobre compilación, consultr la [página de compilación](../Project/compiler.md).

By default, the command uses the compiler options defined in the Structure Settings. Puede sobreescribirlas pasando un parámetro *options*. Se soportan las siguientes sintaxis:

- **Compile project**(): compiles the opened project using the options defined in the Structure Settings
- **Compile project**(*options*): compila el proyecto abierto. Las *options* definidas reemplazan los parámetros de la estructura
- **Compile project**(*projectFile*): compiles the *projectFile* 4DProject using the options defined in the Structure Settings
- **Compile project**(*projectFile*; *options*): compiles the *projectFile* 4DProject and the *options* defined override the Structure Settings

**Nota:** las bases de datos binarias no pueden compilarse con este comando.

Unlike the Compiler window, this command requires that you explicitly designate the component(s) to compile. When compiling a project with **Compile project**, you need to declare its components using the *components* property of the *options* parameter. Keep in mind that the components must already be compiled (binary components are supported).

The resulting compiled code will be stored in the DerivedData or Libraries folder of the project, depending on the *targets* property of the *options* parameter. If you want to create .4dz files, you still need to manually zip the compiled project or use the [build application](../Desktop/building.md) feature.

If you pass an empty collection in *targets*, **Compile project** will execute a syntax check without compiling.

Compilation errors, if any, are returned as objects in the *errors* collection.

**Note:** You cannot call this command when another compilation is running (for example, a compilation launched from the Compilation window).

### Parámetro options

El parámetro *options* es un objeto. Here are the available compilation options:

| **Propiedad**                                                                      | **Tipo**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components                                                                         | Collection                       | Collection of 4D.File objects to dependent components (must be already compiled)                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| defaultTypeForButtons                                                              | Integer                          | Possible value: Is real or Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| defaultTypeForNumerics                                                             | Integer                          | Possible value: Is real or Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| generateSymbols                                                                    | Boolean                          | True to generate symbol information in the .symbols returned object                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| generateSyntaxFile                                                                 | Boolean                          | True para generar un [archivo de sintaxis para la finalización del código](../settings/general.md).md#generate-syntax-file-for-code-completion-when en-compiled) en la carpeta \\Resources\\en.lproj del proyecto                                                                                                                                                                                                                                                                                                            |
| generateTypingMethods                                                              | Text                             | "reset" or "append" to generate typing methods. If value is "append", existing variable declarations won't be modified (compiler window behavior). If value is "reset" existing variable declarations are removed beforehand.                                                                                                                                                                                                                                                               |
| plugins                                                                            | Objeto 4D.Folder | Carpeta de Plug-ins a usar en lugar de [Carpeta de Plug-ins del proyecto actual](../Project/architecture.md#plugins). Esta propiedad solo está disponible con la sintaxis *projectFile*.                                                                                                                                                                                                                                                                                                                                       |
| targets                                                                            | Colección de cadenas             | Possible values: "x86_64_generic", "arm64_macOS_lib". Pass an empty collection to execute syntax check only                                                                                                                                                                                                                                                                                                                                |
| typeInference                                                                      | Text                             | "all": el compilador deduce los tipos de todas las variables no declaradas explícitamente, "locals": el compilador deduce los tipos de variables locales no declaradas explícitamente, "none": todas las variables deben ser explícitamente declaradas en el código (modo antiguo), "direct": todas las variables deben ser explícitamente declaradas en el código ([escritura directa](../Project/compiler.md#enabling-direct-typing)). |
| warnings                                                                           | Colección de objetos             | Define el estado de las advertencias                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| \[\].major   | Number                           | Warning main number, before the dot                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| \[\].minor   | Number                           | Warning second number, after the dot                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| \[\].enabled | Boolean                          | Warning activation state                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

**Note:** When the *warnings* attribute is not defined in the *options* object, the **Compile project** command uses the default warning generation statuses defined in the settings.

### Resultado

El objeto devuelto por **Compile project** tiene hasta tres propiedades:

| **Propiedad**                                                                                                          | **Tipo**             | **Description**                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                                                                | Boolean              | True si la acción guardar tiene éxito, false en caso contrario.                                                          |
| errors                                                                                                                 | Colección de objetos | **Disponible sólo en caso de error o de warning**. Collection of objects describing compilation errors or warnings       |
| \[\].isError                                     | Boolean              | Error if True, warning otherwise                                                                                                         |
| \[\].message                                     | Text                 | Mensaje de error                                                                                                                         |
| \[\].code                                        | Object               | [objeto código](#code-object)                                                                                                            |
| \[\].line                                        | Number               | Número de línea del error en el código. For class methods, line number in the function                                   |
| \[\].lineInFile                                  | Number               | Line number in the file (different from "line" for class methods, and takes into account the %attributes prefix line) |
| symbols                                                                                                                | Object               | **Available only if generateSymbols option is set to True:**                                                             |
| symbols.interprocessVariables                                                                          | Object               | List of all interprocess variables                                                                                                       |
| symbols.interprocessVariables.variables                                                | Collection           | Colección de [objetos variables](#variable-objects)                                                                                      |
| symbols.interprocessVariables.size                                                     | Number               |                                                                                                                                          |
| symbols.processVariables                                                                               | Object               | List of all process variables                                                                                                            |
| symbols.processVariables.variables                                                     | Collection           | Colección de [objetos variables](#variable-objects)                                                                                      |
| symbols.processVariables.size                                                          | Number               |                                                                                                                                          |
| symbols.localVariables                                                                                 | Colección de objetos | List of local variables per method                                                                                                       |
| symbols.localVariables[].code      | Object               | [objeto código](#code-object)                                                                                                            |
| symbols.localVariables[].variables | Collection           | Colección de [objetos variables](#variable-objects)                                                                                      |
| symbols.methods                                                                                        | Colección de objetos | Lista de métodos                                                                                                                         |
| symbols.methods\[\].code         | Object               | [objeto código](#code-object)                                                                                                            |
| symbols.methods\[\].callCount    | Number               | Número de veces que se ha llamado a este método                                                                                          |
| symbols.methods\[\].params       | Collection           | Colección de tipos de parámetros (Códigos numéricos de tipos de valores)                                              |
| symbols.methods\[\]. threadSafe  | Boolean              | Indica si este método es hilo seguro                                                                                                     |

Para obtener más información, consulte [Herramientas de compilación](../Project/compiler.md#compilation-tools).

## Objetos variables

`interprocessVariables.variables` and `processVariables.variables` contain objects with the following structure:

| **Propiedad**  | **Tipo** | **Description**                                                                                           |
| -------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| name           | Text     | Nombre de la variable                                                                                     |
| type           | number   | Tipo de la variable (como el comando Value type)                                       |
| arrayDimension | number   | For arrays only: 1 for mono dimension arrays, 2 for two-dimension arrays                  |
| code           | Object   | For process and interprocess variables: descriptor of where the variable has been defined |

## Objeto code

The `code` property in `methods.code` and `errors.code` is an object with the following properties:

| **Propiedad**  | **Tipo**                | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | Text                    | "projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (when calling a project method with the *Execute on Server attribute*), "executeFormula" (when executing a formula via [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) or evaluation of a formula in a 4D Write Pro document), "class", "classFunction", "formObjectExpression" (for errors occuring in expressions associated to form objects) |
| path           | Text                    | Ruta del método (mismo formato que [METHOD OPEN PATH](../commands-legacy/method-open-path.md))                                                                                                                                                                                                                                                                                                                                                                                                         |
| file           | 4D.File | Archivo de método                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|                |                         | **Returned depending on the value of the `type` property:**                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| methodName     | Text                    | Métodos proyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| tabla          | Number                  | Number of the table (returned for a trigger, a table form method or a table form object method)                                                                                                                                                                                                                                                                                                                                                                                                        |
| formName       | Text                    | Nombre del formulario (devuelto para un método de formulario)                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| objectName     | Text                    | Nombre del objeto del formulario (devuelto para un método objeto)                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| propertyName   | Text                    | Nombre de la propiedad objeto de formulario (devuelto para una expresión de objeto del formulario)                                                                                                                                                                                                                                                                                                                                                                                                     |
| className      | Text                    | Nombre de la clase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| functionName   | Text                    | Nombre de la función de clase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| databaseMethod | Number                  | Database method index                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

## Ejemplos

To perform a syntax check only, pass an empty collection to the targets parameter:

```4d
 var $status : Objeto
 var $options:={}
 $options.targets:=New collection //Colección vacía para verificación de sintaxis
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
$options.warnings:=[]
$options.warnings.push({major: 518; minor: 1; enabled: False})
$options.warnings.push({major: 518; minor: 2; enabled: False})
var $result:=Compile project($options)
```

## Ver también

[BUILD APPLICATION](../commands-legacy/build-application.md)

## Propiedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1760                        |
| Hilo seguro       | &cross; |


