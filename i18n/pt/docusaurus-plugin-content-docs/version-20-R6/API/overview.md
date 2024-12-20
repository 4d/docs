---
id: overview
title: Funções e comandos de classe
---

As funções e propriedades da classe 4D estão disponíveis através de objectos de instância de classe. Esta seção descreve a API da classe 4D incorporada, bem como os comandos de construção associados.

- devem ser chamadas em instâncias com o operador `()`. Por exemplo, `collection.sort()`.
- as propriedades são acessadas sem parênteses, por exemplo `file.creationTime`. Pode também utilizar a sintaxe \[], por exemplo `file["creationTime"]`.
- comandos podem ser chamados de forma independente, com ou sem parâmetros. Por exemplo, `Folder(fk database folder)`.

## Convenções de escrita

As seguintes convenções são utilizadas na sintaxe da função:

- os caracteres `{ }` (chaves) indicam parâmetros opcionais. For example, `.delete( { option : Integer } )` means that the *option* parameter may be omitted when calling the function.
- a notação `{ ; ...param }` indica um número ilimitado de parâmetros. For example, `.concat( value : any { ;...valueN } ) : Collection` means that an unlimited number of values of any type can be passed to the function.
- the `any` keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).

## Veja também

[Classes na linguagem 4D](../Concepts/classes.md).
