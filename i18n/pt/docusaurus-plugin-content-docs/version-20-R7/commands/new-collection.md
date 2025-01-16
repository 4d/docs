---
id: new-collection
title: Nova coleção
displayed_sidebar: docs
---

<!-- REF #_command_.New collection.Syntax -->**New collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New collection.Params-->

| Parâmetro | Tipo                                                                    |   | Descrição                                  |
| --------- | ----------------------------------------------------------------------- | - | ------------------------------------------ |
| value     | Number, Text, Date, Time, Boolean, Object, Collection, Picture, Pointer | → | Valor(es) de collection |
| Resultado | Collection                                                              | ← | Nova coleção                               |

<!-- END REF-->

#### Descrição

The `New collection` command <!--REF #_command_.New collection.Summary-->creates a new empty or prefilled collection and returns its reference.<!-- END REF--> Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md).

Se não passar nenhum parâmetro, New collection cria uma coleção vazia e retorna sua referência.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Opcionalmente pode pré-preencher a nova coleção passando um ou mais parâmetros value.

Pode também adicionar ou modificar elementos subsequentemente através de assignação. Por exemplo:

```4d
 myCol[10]:="My new element"
```

Se o  índice do novo elemento estiver além do último elemento existente da coleção, a coleção será redimensionada automaticamente e todos os novos elementos intermediários receberão um valor **nulo**.

Pode passar qualquer número de valores de qualquer tipo compatível (número, texto, data, imagem, ponteiro, objeto, coleção....). Diferente de arrays, coleções podem misturar dados de tipos diferentes.

Pode prestar atenção aos problemas de conversão abaixo:

- Se você passar um ponteiro, ele será mantido "como está"; ele será avaliado usando o comando `JSON Stringify`
- Datas são armazenadas no formato "aaaa-mm-dd" ou strings com o formato "AAAA-MM-DDTHH:mm:ss.SSSZ", de acordo com a configuração atual "dates inside objects"/datas dentro de objetos. Quando converter datas 4D em texto antes de armazená-las em uma coleção, como padrão o programa considera a zona horária local. Pode modificar esse valor usando o seletor `Dates inside objects` do comando `SET DATABASE PARAMETER`.
- Se passar a hora, é armazenada como um número de milissegundos (Real).

#### Exemplo 1

Se quiser criar uma nova coleção vazia e atribuí-la à uma variável coleção 4D:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Exemplo 2

Se quiser criar uma coleção pré-prenchida:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november","->myPtr","2017-03-28T22:00:00.000Z"]
```

#### Exemplo 3

Pode criar uma nova coleção e adicionar um novo elemento:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //adicionar um 10º elemento com o valor "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

#### Veja também

[New shared collection](new-shared-collection.md)\
[Type](../commands-legacy/type.md)

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1472                            |
| Thread safe    | &amp;check; |
