---
id: action
title: Ação
---

## Métodos

Reference of a method attached to the object. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. Ver [Métodos especializados](Concepts/methods.md#specialized-methods).

Você não chama um método de formulário - o 4D o chama automaticamente quando um evento envolve o formulário ao qual o método está anexado.

São suportados vários tipos de referências de métodos:

- um caminho de arquivo de método de projeto padrão, ou seja, que usa o seguinte padrão:\
  `método. dm`\
  Este tipo de referência indica que o arquivo de método está localizado no local padrão ("sources/{TableForms/_numTable_} 「 {Forms}/_formName_/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- a project method name: name of an existing project method without file extension, i.e.: `myMethod` In this case, 4D does not provide automatic support for form operations.

- a custom method file path including the .4dm extension, e.g.:\
  `MyMethods/myFormMethod.4dm`
  You can also use a filesystem:\
  `/RESOURCES/Forms/FormMethod.4dm`
  In this case, 4D does not provide automatic support for object operations.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                  |
| ------ | ------------- | ------------------------------------------------------------------ |
| method | text          | Object method standard or custom file path, or project method name |
