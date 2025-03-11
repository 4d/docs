---
id: action
title: Ação
---


## Métodos

Reference of a method attached to the object. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. See [methods](../Concepts/methods.md).

You do not call an object method—4D calls it automatically when an event involves the object to which the object method is attached.

São suportados vários tipos de referências de métodos:

- a standard object method file path, i.e. that uses the following pattern:  
  `ObjectMethods/objectName.4dm`  
  ... where `objectName` is the actual [object name](properties_Object.md#object-name). This type of reference indicates that the method file is located at the default location ("sources/forms/*formName*/ObjectMethods/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.: `myMethod` In this case, 4D does not provide automatic support for object operations.

- a custom method file path including the .4dm extension, e.g.:  
  `../../CustomMethods/myMethod.4dm` You can also use a filesystem:  
  `/RESOURCES/Buttons/bOK.4dm` In this case, 4D does not provide automatic support for object operations.


#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                  |
| ------ | ------------- | ------------------------------------------------------------------ |
| method | text          | Object method standard or custom file path, or project method name |

