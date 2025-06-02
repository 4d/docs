---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project** {( {*projectFile*}{;}{*options*} )} : Object<!-- END REF-->

<!--REF #_command_.Compile project.Params-->

| Parámetros  | Tipo                    |                             | Descripción                                                       |
| ----------- | ----------------------- | --------------------------- | ----------------------------------------------------------------- |
| projectFile | 4D.File | &#8594; | Archivo .4DProject a compilar                     |
| options     | Object                  | &#8594; | Objeto que especifica las opciones de compilación                 |
| Resultado   | Object                  | &#8592; | Objeto que contiene información sobre el estado de la compilación |

<!-- END REF-->

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones                            |
| ----------- | ----------------------------------------- |
| 20 R8       | Soporte del "type" "formObjectExpression" |

</details>

## Descripción

**Compilar proyecto**<!--REF #_command_.Compile project.Summary--> le permite compilar el proyecto host actual o el proyecto especificado en el parámetro *projectFile*.<!-- END REF--> Para más información sobre compilación, consulte la [página de compilación](../Project/compiler.md).

De forma predeterminada, el comando utiliza las opciones del compilador definidas en los parámetros de estructura. Puede sobreescribirlas pasando un parámetro *options*. Se soportan las siguientes sintaxis:

- **Compile project**(): compila el proyecto abierto utilizando las opciones definidas en los parámetros de estructura
- **Compile project**(*options*): compila el proyecto abierto. Las *options* definidas reemplazan los parámetros de la estructura
- **Compile project**(*projectFile*): compila el proyecto 4D *projectFile* usando las opciones definidas en los parámetros de estructura
- **Compile project**(*projectFile*; *options*): compila el proyecto 4D *projectFile* y las *opciones* definidas reemplazan los parámetros de estructura

**Nota:** las bases de datos binarias no pueden compilarse con este comando.

A diferencia de la ventana del compilador, este comando requiere que usted designe explícitamente el(los) componente(s) a compilar. Al compilar un proyecto con **Compile project**, necesita declarar sus componentes usando la propiedad *components* del parámetro *options*. Tenga en cuenta que los componentes ya deben ser compilados (los componentes binarios están soportados).

El código compilado resultante se almacenará en la carpeta DerivedData o Libraries del proyecto, dependiendo de la propiedad *targets* del parámetro *options*. Si quiere crear archivos .4dz, todavía necesita comprimir manualmente el proyecto compilado o usar la funcionalidad [build application](../Desktop/building.md).

Si pasa una colección vacía en *targets*, **Compile project** ejecutará una comprobación de sintaxis sin compilar.

Los errores de compilación, si los hay, se devuelven como objetos en la colección *errors*.

**Nota:** no se puede llamar a este comando cuando se está ejecutando otra compilación (por ejemplo, una compilación lanzada desde la ventana de compilación).

### Parámetro options

El parámetro *options* es un objeto. Aquí están las opciones de compilación disponibles:

| **Propiedad**                                                                      | **Tipo**                         | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| components                                                                         | Collection                       | Colección de objetos 4D.File a componentes dependientes (debe estar ya compilado)                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| defaultTypeForButtons                                                              | Integer                          | Valor posible: Is real o Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| defaultTypeForNumerics                                                             | Integer                          | Valor posible: Is real o Is longint                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| generateSymbols                                                                    | Boolean                          | True para generar información de símbolos en el objeto devuelto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| generateSyntaxFile                                                                 | Boolean                          | True para generar un [archivo de sintaxis para la finalización del código](../settings/general.md) en la carpeta \\Resources\\en.lproj del proyecto                                                                                                                                                                                                                                                                                                                                                                                          |
| generateTypingMethods                                                              | Text                             | "reset" o "append" para generar métodos de tipado. Si el valor es "append", las declaraciones de variables existentes no serán modificadas (comportamiento de la ventana del compilador). Si el valor es "reset" las declaraciones de variables existentes se eliminan de antemano.                                                                                                                                                                                                         |
| plugins                                                                            | Objeto 4D.Folder | Carpeta de Plug-ins a usar en lugar de [Carpeta de Plug-ins del proyecto actual](../Project/architecture.md#plugins). Esta propiedad solo está disponible con la sintaxis *projectFile*.                                                                                                                                                                                                                                                                                                                                       |
| targets                                                                            | Colección de cadenas             | Valores posibles: "x86_64_generic", "arm64_macOS_lib". Pase una colección vacía para ejecutar sólo la verificación de sintaxis                                                                                                                                                                                                                                                                                                             |
| typeInference                                                                      | Text                             | "all": el compilador deduce los tipos de todas las variables no declaradas explícitamente, "locals": el compilador deduce los tipos de variables locales no declaradas explícitamente, "none": todas las variables deben ser explícitamente declaradas en el código (modo antiguo), "direct": todas las variables deben ser explícitamente declaradas en el código ([escritura directa](../Project/compiler.md#enabling-direct-typing)). |
| warnings                                                                           | Colección de objetos             | Define el estado de las advertencias                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| \[\].major   | Number                           | Número principal del warning, antes del punto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| \[\].minor   | Number                           | Número secundario de warning, después del punto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| \[\].enabled | Boolean                          | Estado de activación del warning                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

**Nota:** cuando el atributo *warnings* no está definido en el objeto *options*, el comando **Compile project** utiliza los estados de generación de warnings por defecto definidos en los parámetros.

### Resultado

El objeto devuelto por **Compile project** tiene hasta tres propiedades:

| **Propiedad**                                                                                                          | **Tipo**             | **Description**                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                                                                | Boolean              | True si la acción guardar tiene éxito, false en caso contrario.                                                                     |
| errors                                                                                                                 | Colección de objetos | **Disponible solo en caso de error o de warning**. Colección de objetos que describen errores de compilación o warnings             |
| \[\].isError                                     | Boolean              | Error si es True, sino warning                                                                                                                      |
| \[\].message                                     | Text                 | Mensaje de error                                                                                                                                    |
| \[\].code                                        | Object               | [objeto código](#code-object)                                                                                                                       |
| \[\].line                                        | Number               | Número de línea del error en el código. Para métodos de clase, el número de línea en la función                                     |
| \[\].lineInFile                                  | Number               | Número de línea en el archivo (diferente de "line" para los métodos de clase, y tiene en cuenta la línea de prefijo %attributes) |
| symbols                                                                                                                | Object               | **Disponible sólo si la opción generateSymbols es True:**                                                                           |
| symbols.interprocessVariables                                                                          | Object               | Lista de todas las variables interproceso                                                                                                           |
| symbols.interprocessVariables.variables                                                | Collection           | Colección de [objetos variables](#variable-objects)                                                                                                 |
| symbols.interprocessVariables.size                                                     | Number               |                                                                                                                                                     |
| symbols.processVariables                                                                               | Object               | Lista de todas las variables proceso                                                                                                                |
| symbols.processVariables.variables                                                     | Collection           | Colección de [objetos variables](#variable-objects)                                                                                                 |
| symbols.processVariables.size                                                          | Number               |                                                                                                                                                     |
| symbols.localVariables                                                                                 | Colección de objetos | Lista de variables locales por método                                                                                                               |
| symbols.localVariables[].code      | Object               | [objeto código](#code-object)                                                                                                                       |
| symbols.localVariables[].variables | Collection           | Colección de [objetos variables](#variable-objects)                                                                                                 |
| symbols.methods                                                                                        | Colección de objetos | Lista de métodos                                                                                                                                    |
| symbols.methods\[\].code         | Object               | [objeto código](#code-object)                                                                                                                       |
| symbols.methods\[\].callCount    | Number               | Número de veces que se ha llamado a este método                                                                                                     |
| symbols.methods\[\].params       | Collection           | Colección de tipos de parámetros (Códigos numéricos de tipos de valores)                                                         |
| symbols.methods\[\]. threadSafe  | Boolean              | Indica si este método es hilo seguro                                                                                                                |

Para obtener más información, consulte [Herramientas de compilación](../Project/compiler.md#compilation-tools).

## Objetos variables

`interprocessVariables.variables` y `processVariables.variables` contienen objetos con la siguiente estructura:

| **Propiedad**  | **Tipo** | **Description**                                                                                            |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| name           | Text     | Nombre de la variable                                                                                      |
| type           | number   | Tipo de la variable (como el comando Value type)                                        |
| arrayDimension | number   | Solo para arrays: 1 para los arrays mono dimensionales, 2 para los arrays bidimensionales  |
| code           | Object   | Para las variables proceso e interproceso: descripción de donde se ha definido la variable |

## Objeto code

La propiedad `code` en `methods.code` y `errors.code` es un objeto con las siguientes propiedades:

| **Propiedad**  | **Tipo**                | **Description**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| -------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type           | Text                    | "projectMethod", "formObjectMethod", "formMethod", "databaseMethod", "triggerMethod", "executeOnServer" (al llamar a un método proyecto con el atributo *Execute on Server*), "executeFormula" (al ejecutar una fórmula a través de [PROCESS 4D TAGS](../commands-legacy/process-4d-tags.md) o de la evaluación de una fórmula en un documento 4D Write Pro), "class", "classFunction", "formObjectExpression" (para errores ocurridos en expresiones asociadas a objetos formulario) |
| path           | Text                    | Ruta del método (mismo formato que [METHOD OPEN PATH](../commands-legacy/method-open-path.md))                                                                                                                                                                                                                                                                                                                                                                                                                              |
| file           | 4D.File | Archivo de método                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|                |                         | **Devuelto dependiendo del valor de la propiedad `type`:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| methodName     | Text                    | Métodos proyecto                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| tabla          | Number                  | Número de la tabla (retornado para un trigger, un método formulario tabla o un método objeto de formulario tabla)                                                                                                                                                                                                                                                                                                                                                                                                           |
| formName       | Text                    | Nombre del formulario (devuelto para un método de formulario)                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| objectName     | Text                    | Nombre del objeto del formulario (devuelto para un método objeto)                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| propertyName   | Text                    | Nombre de la propiedad objeto de formulario (devuelto para una expresión de objeto del formulario)                                                                                                                                                                                                                                                                                                                                                                                                                          |
| className      | Text                    | Nombre de la clase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| functionName   | Text                    | Nombre de la función de clase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| databaseMethod | Number                  | Índice de método base                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

## Ejemplos

Para realizar una comprobación de sintaxis solamente, pase una colección vacía al parámetro targets:

```4d
 var $status : Objeto
 var $options:={}
 $options.targets:=New collection //Colección vacía para verificación de sintaxis
 $status:=Compile project($options)
```

Compila el proyecto actual utilizando las opciones de compilación de la configuración de la estructura solamente:

```4d
 var $status : Object
 $status:=Compile project
```

En un Silicon Mac, compile el proyecto actual sólo para ARM:

```4d
 var $status : Object
 var $options:={}
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

Compilar un proyecto distinto al proyecto actual:

```4d
 var $status : Object
 var $projectFile: 4D.File
 $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")
 $status:=Compile project($projectFile)
```

Compilar un proyecto y declarar su componente:

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


