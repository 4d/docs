---
id: overview
title: Funções e comandos de classe
---

As funções e propriedades da classe 4D estão disponíveis através de objectos de instância de classe. Esta seção descreve a API da classe 4D incorporada, bem como os comandos de construção associados.

- functions must be called on instances with the `()` operator. For example, `collection.sort()`.
- properties are accessed without parentheses, for example `file.creationTime`. You can also use the \[] syntax, for example `file["creationTime"]`.
- comandos podem ser chamados de forma independente, com ou sem parâmetros. For example `Folder(fk database folder)`.

## Convenções de escrita

As seguintes convenções são utilizadas na sintaxe da função:

- the `{ }` characters (braces) indicate optional parameters. For example, `.delete( { option : Integer } )` means that the _option_ parameter may be omitted when calling the function.
- the `{ ; ...param }` notation indicates an unlimited number of parameters. For example, `.concat( value : any { ;...valueN } ) : Collection` means that an unlimited number of values of any type can be passed to the function.
- the `any` keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).
