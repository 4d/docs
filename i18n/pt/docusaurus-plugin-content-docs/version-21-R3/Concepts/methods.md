---
id: methods
title: Página Métodos
---

Um método é basicamente um pedaço de código que executa uma ou várias acções. Na linguagem 4D, há duas categorias de métodos:

Uma linha de instrução realiza uma ação e pode ser simples ou complexa. Cada instrução geralmente consiste em uma linha no método (se necessário, no entanto, pode ser [dividida usando o caractere `\`](quick-tour.md#code-on-several-lines)).

O tamanho máximo de um método de projecto é limitado a 2 GB de texto ou 32.000 linhas de comando.

## Tipos de métodos

Na Linguagem 4D, existem várias categorias de métodos. A categoria depende da forma como podem ser chamados:

| Tipo                                              | Contexto de chamada                                                                                                                                                                                                                     | Aceita parâmetros                        | Descrição                                                                                                                                                                                                                                     |
| ------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos projeto**                               | Por demanda, quando chamar ao nome do método projeto (ver [Chamando a métodos projeto](#chamando-metodos-projeto))                                                                                                   | Sim                                      | Pode conter qualquer código para executar ações personalizadas Quando um método projeto for criado, se torna parte  parte da linguagem do banco de dados na qual foi criado.                                                  |
| **Método objeto (widget)**     | Automático, quando um evento envolve a forma a que o método está ligado                                                                                                                                                                 | Não                                      | Propriedade de um objecto de formulário (também chamado widget)                                                                                                                                                            |
| **Método formulário**                             | Automático, quando um evento envolve o objecto ao qual o método está ligado                                                                                                                                                             | Não                                      | Propriedade de um formulário. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins.             |
| **Trigger** (o *método tabla*) | Automático, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)                                                                                                                          | Não                                      | Propriedade de uma tabela. Os gatilhos/triggers são métodos que podem prevenir operações "ilegais" com os registos da sua base de dados.                                                                      |
| **Método base**                                   | Automático, quando ocorre um evento de sessão de trabalho                                                                                                                                                                               | Sim (pré-definido)    | Existem 16 métodos base em 4D.                                                                                                                                                                                                |
| **Class**                                         | Automatically called when an object of the class is instantiated or when a function of the class is executed on an object instance in any other methods or in a [database field](../Develop/field-properties.md#class). | yes (class functions) | A **Class** is used to declare and configure the class [constructor](./classes.md#class-constructor), [properties](./classes.md#property*), and [functions](./classes.md#function) of objects. Veja [**Classes**](classes.md) |


