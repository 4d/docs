---
id: overview
title: Funções e comandos de classe
---

As funções e propriedades da classe 4D estão disponíveis através de objectos de instância de classe. Esta seção descreve a API da classe 4D incorporada, bem como os comandos de construção associados.

- devem ser chamadas em instâncias com o operador `()`. Por exemplo, `collection.sort()`.
- as propriedades são acessadas sem parênteses, por exemplo `file.creationTime`. Pode também utilizar a sintaxe \[], por exemplo `file["creationTime"]`.
- comandos podem ser chamados de forma independente, com ou sem parâmetros. Por exemplo `Folder(fk database folder)`.

## Convenções de escrita

As seguintes convenções são utilizadas na sintaxe da função:

- os caracteres `{ }` (chaves) indicam parâmetros opcionais. Por exemplo, `.delete( { option : Integer } )` significa que o parâmetro *opção* pode ser omitido ao chamar a função.
- o `{ ; ...param }` notação indica um número ilimitado de parâmetros. Por exemplo, `.concat( valor : qualquer { ;...valorN } ) : A colecção` significa que um número ilimitado de valores de qualquer tipo pode ser passado para a função.
- a `any` é utilizada para parâmetros que podem ser de qualquer tipo e que podem ser armazenados dentro dos atributos (número, texto, booleano, data, hora, objecto, colecção...).

## Veja também

[Classes in the 4D Language](../Concepts/classes.md).
