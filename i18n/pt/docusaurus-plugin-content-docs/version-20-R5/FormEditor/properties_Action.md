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
  Este tipo de referência indica que o arquivo de método está localizado no local padrão ("sources/{TableForms/_numTable_} 「 {Forms}/_formName_/"). Nesse caso, 4D trata automaticamente o método do formulário quando as operações são executadas no formulário (renomeação, duplicação, copiar/colar...)

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
