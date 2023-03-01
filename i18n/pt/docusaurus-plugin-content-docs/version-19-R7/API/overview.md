---
id: overview
title: Class API Overview
---

Esta seção descreve a API da classe 4D incorporada, bem como os comandos de construção associados. As funções e propriedades da classe 4D estão disponíveis através de objectos de instância de classe.

- functions must be called on instances with the () operator. Por exemplo, `collection.sort()`.

- as propriedades são acessadas sem parênteses, por exemplo `file.creationTime`. Pode também utilizar a sintaxe \[], por exemplo `file["creationTime"]`.

## Writing conventions

As seguintes convenções são utilizadas na sintaxe da função:

- os caracteres `{ }` (chaves) indicam parâmetros opcionais. Por exemplo, `.delete( { option : Integer } )` significa que o parâmetro *opção* pode ser omitido ao chamar a função.
- o `{ ; ...param }` notação indica um número ilimitado de parâmetros. Por exemplo, `.concat( valor : qualquer { ;...valorN } ) : A colecção` significa que um número ilimitado de valores de qualquer tipo pode ser passado para a função.
- a `any` é utilizada para parâmetros que podem ser de qualquer tipo e que podem ser armazenados dentro dos atributos (número, texto, booleano, data, hora, objecto, colecção...).

## Other resources

For an overall presentation of the 4D Language basics and concepts, please go to the [4D Language Concepts](Concepts/about.md) section.

For a description of the 4D "classic" language, please go to the *4D Language Reference* on [doc.4d.com](https://doc.4d.com). 



