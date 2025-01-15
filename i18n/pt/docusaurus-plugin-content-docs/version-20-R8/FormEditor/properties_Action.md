---
id: action
title: Ação
---

## Métodos

Reference of a method attached to the object. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. Ver [Métodos especializados](Concepts/methods.md#specialized-methods).

You do not call an object method—4D calls it automatically when an event involves the object to which the object method is attached.

São suportados vários tipos de referências de métodos:

- um caminho de arquivo de método de projeto padrão, ou seja, que usa o seguinte padrão:\
  `método. dm`\
  Este tipo de referência indica que o arquivo de método está localizado no local padrão ("sources/{TableForms/_numTable_} 「 {Forms}/_formName_/"). In this case, 4D automatically handles the object method when operations are executed on the form object (renaming, duplication, copy/paste...)

- um nome de método de projeto: nome de um método de projeto existente sem extensão de arquivo, ou seja:
  `myMethod`
  Nesse caso, o 4D não oferece suporte automático para operações de formulário.

- um caminho de arquivo de método personalizado, incluindo a extensão .4dm, por exemplo:\
  `MyMethods/myFormMethod. dm`
  Você também pode usar um sistema de arquivos:\
  `/RESOURCES/Forms/FormMethod.4dm`
  Neste caso, 4D não fornece suporte automático para operações de objeto.

#### Gramática JSON

| Nome   | Tipo de dados | Valores possíveis                                                  |
| ------ | ------------- | ------------------------------------------------------------------ |
| method | text          | Object method standard or custom file path, or project method name |
