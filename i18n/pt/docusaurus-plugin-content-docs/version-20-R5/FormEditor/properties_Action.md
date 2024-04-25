---
id: action
title: Ação
---

## Métodos

Reference of a method attached to the object. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. See [Specialized methods](Concepts/methods.md#specialized-methods).

You do not call an object method—4D calls it automatically when an event involves the object to which the object method is attached.

São suportados vários tipos de referências de métodos:

- a standard project method file path, i.e. that uses the following pattern:\
  `method.4dm`\
  This type of reference indicates that the method file is located at the default location ("sources/{TableForms/_numTable_} | {Forms}/_formName_/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.:
  `myMethod`
  In this case, 4D does not provide automatic support for form operations.

- a custom method file path including the .4dm extension, e.g.:\
  `MyMethods/myFormMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Forms/FormMethod.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                  |
| ------ | ------------- | ------------------------------------------------------------------ |
| method | text          | Object method standard or custom file path, or project method name |
