---
id: compile-project
title: Compile project
slug: /commands/compile-project
displayed_sidebar: docs
---

<!--REF #_command_.Compile project.Syntax-->**Compile project**  {( {*archivoProyecto*}{;}{*opciones*} )} : Object<!-- END REF-->
<!--REF #_command_.Compile project.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| archivoProyecto | 4D.File | &#8594;  | Archivo .4DProject a compilar |
| opciones | Object | &#8594;  | Objeto que especifica las opciones de compilación |
| Resultado | Object | &#8592; | Objeto que contiene información sobre el estado de la compilación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Compile project.Summary-->**Compile project** permite compilar el proyecto local actual o el proyecto especificado en el parámetro *archivoProyecto*.<!-- END REF--> Para más información sobre la compilación, consulte la *página de compilación en developer.4d.com*.

Por defecto, el comando utiliza las opciones del compilador definidas en los Parámetros de estructura. Puede anularlas pasando un parámetro *opciones*. Se admiten las siguientes sintaxis:

* **Compile project** (): compila el proyecto abierto utilizando las opciones definidas en los parámetros de estructura
* **Compile project** (*opciones*): compila el proyecto abierto. Las *opciones* definidas reemplazan los parámetros de estructura
* **Compile project** (*archivoProyecto*): compila el 4DProject *archivoProyecto* utilizando las opciones definidas en los parámetros de estructura
* **Compile project** (*archivoProyecto*; *opciones*): compila el 4DProject *archivoProyecto* y las *opciones* definidas anulan los parámetros de estructura

**Nota:** las bases de datos binarias no pueden compilarse con este comando.

A diferencia de la ventana del Compilador, este comando requiere que se designe explícitamente el componente o componentes a compilar. Cuando se compila un proyecto con **Compile project** , es necesario declarar sus componentes utilizando la propiedad *components* del parámetro *opciones*. Tenga en cuenta que los componentes deben estar ya compilados (se admiten componentes binarios).

El código compilado resultante se almacenará en la carpeta DerivedData o Librerias del proyecto, dependiendo de la propiedad *targets* del parámetro *opciones*. Si desea crear archivos .4dz, deberá comprimir manualmente el proyecto compilado o utilizar la funcionalidad *Generar la aplicación*.

Si pasa una colección vacía en *targets*, **Compile project** ejecutará una comprobación de sintaxis sin compilar.

Los errores de compilación, si los hay, se devuelven como objetos en la colección *errores*.

**Nota:** no puede llamar a este comando cuando se está ejecutando otra compilación (por ejemplo, una compilación lanzada desde la ventana Compilación).

##### Parámetro opciones 

El parámetro *opciones* es un objeto. Estas son las opciones de compilación disponibles:

| **Propiedad**          | **Tipo**             | **Descripción**                                                                                                                                                                                                                                                                      |
| ---------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| components             | Colección            | Colección de objetos 4D.File para componentes dependientes (deben estar compilados)                                                                                                                                                                                                  |
| targets                | colección de cadenas | valores posibles: "x86\_64\_generic", "arm64\_macOS\_lib". Pase una colección vacía para ejecutar sólo una verificación de sintaxis                                                                                                                                                  |
| typeInference          | Cadena               | "all": digite todas las variables, "locals": se digitan las proceso e interproceso, "none": se digitan todas las variables                                                                                                                                                           |
| defaultTypeForButtons  | Entero               | Valor posible: Is real o Is longint                                                                                                                                                                                                                                                  |
| defaultTypeForNumerics | Entero               | Valor posible: Is real o Is longint                                                                                                                                                                                                                                                  |
| defaultTypeForButtons  | Entero               | Valor posible: Is real o Is longint                                                                                                                                                                                                                                                  |
| generateSymbols        | Booleano             | True para generar información de símbolos en el objeto devuelto .symbols                                                                                                                                                                                                             |
| generateSyntaxFile     | Booleano             | True para generar un *archivo de sintaxis para completar código* en la carpeta \\Resources\\en.lproj del proyecto                                                                                                                                                                    |
| generateTypingMethods  | Cadena               | "reset" o "append" para generar métodos de digitación. Si el valor es "append", las declaraciones de variables existentes no se modificarán (comportamiento de la ventana del compilador). Si el valor es "reset" las declaraciones de variables existentes se eliminan de antemano. |
| plugins                | objeto 4D.Folder     | Carpeta plug-ins a utilizar en lugar de la [carpeta Plugins del proyecto actual](https://developer.4d.com/docs/Project/architecture#plugins). Esta propiedad sólo está disponible con la sintaxis *projectFile*.                                                                     |
| targets                | Colección de cadenas | Valores posibles: "x86\_64\_generic", "arm64\_macOS\_lib". Pase una colección vacía para ejecutar sólo la comprobación de sintaxis                                                                                                                                                   |
| typeInference          | Cadena               | "all": digita todas las variables, "locals": se digitan las variables de proceso e interproceso, "none": se digitan todas las variables                                                                                                                                              |
| warnings               | Colección de objetos | Define el estado de las warnings                                                                                                                                                                                                                                                     |
| \[\].major             | Número               | Número principal del warning, antes del punto                                                                                                                                                                                                                                        |
| \[\].minor             | Número               | Segundo número del warning, después del punto                                                                                                                                                                                                                                        |
| \[\].enabled           | Booleano             | Estado de activación del aviso                                                                                                                                                                                                                                                       |

##### Resultado de la función 

El objeto devuelto por **Compile project**  tiene hasta tres propiedades:

| **Propiedad**                                                           | **Tipo**             | **Descripción**                                                                                                                    |
| ----------------------------------------------------------------------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| success                                                                 | Booleano             | True si la acción de guardar tiene éxito, False en caso contrario.                                                                 |
| ***Disponible sólo en caso de error o advertencia:***                   |                      |                                                                                                                                    |
| errors                                                                  | Colección de objetos | colección de objetos que describen los errores o advertencias de compilación                                                       |
| isError                                                                 | Booleano             | Error si es True, advertencia en caso contrario                                                                                    |
| message                                                                 | Cadena               | Mensaje de error                                                                                                                   |
| code                                                                    | Objeto               | *Objeto code*                                                                                                                      |
| line                                                                    | Número               | Número de línea del error en el código. Para los métodos de clase, el número de línea en la función                                |
| lineInFile                                                              | Número               | Número de línea en el archivo (diferente de "línea" para los métodos de clase, y tiene en cuenta la línea del prefijo %attributes) |
| **Disponible sólo si la opción generateSymbols está definida en True:** |                      |                                                                                                                                    |
| symbols                                                                 | Objeto               |                                                                                                                                    |
| interprocessVariables                                                   | Objeto               | Lista de todas las variables interproceso                                                                                          |
| variables                                                               | Colección            | Colección de *Objetos variable*                                                                                                    |
| size                                                                    | Número               |                                                                                                                                    |
| processVariables                                                        | Object               | Lista de todas las variables proceso                                                                                               |
| variables                                                               | Colección            | Colección de *Objetos variable*                                                                                                    |
| size                                                                    | Número               |                                                                                                                                    |
| localVariables                                                          | Colección de objetos | Lista de variables locales por método                                                                                              |
| code                                                                    | Objeto               | *Objeto code*                                                                                                                      |
| variables                                                               | Colección            | Colección de *Objetos variable*                                                                                                    |
| methods                                                                 | Colección de objetos | Lista de métodos                                                                                                                   |
| code                                                                    | Objeto               | *Objeto code*                                                                                                                      |
| callCount                                                               | Número               | Número de veces que se ha llamado a este método                                                                                    |
| params                                                                  | Colección            | Colección de tipos de parámetros (códigos numéricos de tipo de valor)                                                              |
| threadSafe                                                              | Booleano             | Indica si este método es hilo seguro                                                                                               |

Para más información, consulte *Herramientas de compilación*.

###### Objetos variable 

interprocessVariables.variables y processVariables.variables contienen objetos con la siguiente estructura:

| **Propiedad**  | **Tipo** | **Descripción**                                                                                    |
| -------------- | -------- | -------------------------------------------------------------------------------------------------- |
| name           | Cadena   | Nombre de la variable                                                                              |
| type           | número   | Tipo de la variable (como el comando Value type)                                                   |
| arrayDimension | número   | Sólo para arrays: 1 para arrays de una dimensión, 2 para arrays de dos dimensiones                 |
| code           | Objeto   | Para las variables proceso e interproceso: descriptor de la ubicación de definición de la variable |

###### Objeto code 

La propiedad *code* en **methods\[ \].code** y **errors\[ \].code** es un objeto con las siguientes propiedades:

| **Propiedad**                                               | **Tipo** | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                      |
| ----------------------------------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| type                                                        | Cadena   | "projectMethod", "formObjectMethod", "formmethod","databaseMethod", "triggerMethod", "executeOnServer" (cuando se llama a un método del proyecto con el *Atributo Ejecutar en servidor*.), "executeFormula" (cuando se ejecuta una fórmula a través de [PROCESS 4D TAGS](process-4d-tags.md) o la evaluación de una fórmula en un documento de 4D Write Pro.), "class", "classFunction"|
| path                                                        | Cadena   | Ruta del método (mismo formato que [METHOD OPEN PATH](method-open-path.md))                                                                                                                                                                                                                                                                                                                                          |
| file                                                        | 4D.File  | Archivo método                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Se devuelve en función del valor de propiedad del tipo:** |          |                                                                                                                                                                                                                                                                                                                                                                                                                      |
| methodName                                                  | Cadena   | Método proyecto                                                                                                                                                                                                                                                                                                                                                                                                      |
| table                                                       | Número   | Número de tabla (devuelto para un trigger, un método formulario de tabla o un método objeto formulario)                                                                                                                                                                                                                                                                                                              |
| formName                                                    | Cadena   | Nombre de formulario (devuelto para un método formulario)                                                                                                                                                                                                                                                                                                                                                            |
| objectName                                                  | Cadena   | Nombre del objeto formulario (devuelto para un método objeto)                                                                                                                                                                                                                                                                                                                                                        |
| className                                                   | Cadena   | Nombre de clase                                                                                                                                                                                                                                                                                                                                                                                                      |
| functionName                                                | Cadena   | Nombre de función de clase                                                                                                                                                                                                                                                                                                                                                                                           |
| databaseMethod                                              | Número   | Índice del método base                                                                                                                                                                                                                                                                                                                                                                                               |

#### Advertencia 

Para realizar una comprobación de sintaxis solamente, pase una colección vacía al parámetro targets:  
  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection //Colección vacía para la verificación de sintaxis
 $status:=Compile project($options)
```

Compila el proyecto actual utilizando únicamente las opciones del compilador de los Parámetros de estructura:  
  
```4d
 var $status : Object
 $status:=Compile project
```

En un Silicon Mac, compila el proyecto actual sólo en ARM:   
  
```4d
 var $options;$status : Object
 $options:=New object
 $options.targets:=New collection("arm64_macOS_lib")
 $status:=Compile project($options)
```

Compila un proyecto distinto al actual:

  
```4d
 var $status : Object
 var $projectFile: 4D.File
 $projectFile:=Folder(fk documents folder).file("Databases/myApp/Project/myApp.4DProject")
 $status:=Compile project($projectFile)
```

Compila un proyecto y declara su componente:  
  
```4d
 var $options;$status : Object
 var $component : 4D.File
 $options:=New object
 $component:=Folder(fk documents folder).file("Components/myComponent.4dz")
 $options.components:=New collection($component)
 $status:=Compile project($options)
```

Desactiva las advertencias 518.1 y 518.2 al compilar su proyecto:  
  
```4d
var $options:={}
$options.warnings:=[]
$options.warnings.push({major: 518; minor: 1; enabled: False})
$options.warnings.push({major: 518; minor: 2; enabled: False})
var $result:=Compile project($options)
```

#### Ver también 

[BUILD APPLICATION](build-application.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 1760 |
| Hilo seguro | &check; |
| Prohibido en el servidor ||


