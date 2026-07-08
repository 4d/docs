---
id: overview
title: Funções e comandos de classe
---

As funções e propriedades da classe 4D estão disponíveis através de objectos de instância de classe. As funções e propriedades das classes 4D estão disponíveis através de objetos de instância de classe.

- devem ser chamadas em instâncias com o operador `()`. Por exemplo, `collection.sort()`.
- as propriedades são acessadas sem parênteses, por exemplo `file.creationTime`. Pode também utilizar a sintaxe \[], por exemplo `file["creationTime"]`.
- comandos podem ser chamados de forma independente, com ou sem parâmetros. Por exemplo, `Folder(fk database folder)`.

## Convenções de escrita

As seguintes convenções são utilizadas na sintaxe da função:

- os caracteres `{ }` (chaves) indicam parâmetros opcionais. Por exemplo, `.delete( { option : Integer } )` significa que o parâmetro *option* pode ser omisso ao chamar a função.
- a notação `{ ; ...param }` indica um número ilimitado de parâmetros. Por exemplo, `.concat( value : any { ;...valueN } ): Collection` significa que um número ilimitado de valores de qualquer tipo pode ser passado para a função.
- a palavra-chave `any` é usada para parâmetros que podem ser de qualquer tipo que possa ser armazenado em atributos (número, texto, booleano, data, hora, objeto, coleção...).

## Veja também

[Classes na linguagem 4D](../Concepts/classes.md).
