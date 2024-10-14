---
id: get-call-chain
title: Get call chain
slug: /commands/get-call-chain
displayed_sidebar: docs
---

<!--REF #_command_.Get call chain.Syntax-->**Get call chain** -> Resultado<!-- END REF-->
<!--REF #_command_.Get call chain.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| Resultado | Collection | &larr; | Colección de objetos que describen la cadena de llamadas a métodos dentro de un proceso |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Get call chain.Summary-->El comando **Get call chain** devuelve una colección de objetos que describen cada paso de la cadena de llamadas al método dentro del proceso actual.<!-- END REF--> Ofrece la misma información que la ventana del Depurador. Tiene la ventaja adicional de poder ejecutarse desde cualquier entorno 4D, incluido el modo compilado.

El comando facilita la depuración al permitir la identificación del método llamado, el componente que lo llamó y el número de línea donde se realizó la llamada. Cada objeto en la colección devuelta contiene las siguientes propiedades:

| **Propiedad** | **Tipo**     | **Descripción**                                                                                                                                                                                                                                                                                                                                                                                                   | **Ejemplo**              |
| ------------- | ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| database      | texto        | Nombre de la base que llama al método (para distinguir métodos locales y métodos componentes)                                                                                                                                                                                                                                                                                                                     | "database":"contactInfo" |
| line          | entero largo | Número de línea de la llamada al método                                                                                                                                                                                                                                                                                                                                                                           | "line":6                 |
| name          | texto        | Nombre del método llamado                                                                                                                                                                                                                                                                                                                                                                                         | "name":"On Load"         |
| type          | texto        | Tipo de método: <br/>"projectMethod", "formObjectMethod", <li<"formmethod",< li=""> "databaseMethod", "triggerMethod", "executeOnServer" (cuando se llama a un método proyecto con *Atributo Ejecutar en servidor*.), "executeFormula" (cuando se ejecuta una fórmula a través de [PROCESS 4D TAGS](process-4d-tags.md) o la evaluación de una fórmula en un documento 4D Write Pro.)</li<"formmethod",<> | "type":"formMethod"      |

**Nota:** para que este comando pueda operar en modo compilado, la verificación de Rango no debe estar deshabilitada. Ver *Control de ejecución*.

#### Ejemplo 

El siguiente código devuelve una colección de objetos que contienen información sobre la cadena de llamadas al método:

```4d
 var $currentCallChain : Collection
 $currentCallChain:=Get call chain
```

Si se ejecuta un método proyecto, la cadena de llamadas podría contener (por ejemplo):

```RAW
[   {    "type":"projectMethod",    "name":"detailForm",    "line":1,    "database":"myDatabase"   }]
```

Si se ejecuta un método de objeto de formulario, la cadena de llamadas podría contener (por ejemplo):

```RAW
[   {    "type":"formObjectMethod",    "name":"detailForm.Button",    "line":1,    "database":"myDatabase"   },   {    "type":"formMethod",    "name”:"detailForm",    "line":2,    "database":"myDatabase"   },   {    "type":"projectMethod",    "name”:"showDetailForm",    "line":2,    "database":"myDatabase”   }]
```
