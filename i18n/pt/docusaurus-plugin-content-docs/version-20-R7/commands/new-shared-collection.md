---
id: new-shared-collection
title: New shared collection
displayed_sidebar: docs
---

<!-- REF #_command_.New shared collection.Syntax -->**New shared collection** {( *...value* : any )} : Collection<!-- END REF -->

<!--REF #_command_.New shared collection.Params-->

| Parâmetro | Tipo                                                  |   | Descrição                        |
| --------- | ----------------------------------------------------- | - | -------------------------------- |
| value     | Number, Text, Date, Time, Boolean, Object, Collection | → | Valores da collection compartida |
| Resultado | Collection                                            | ← | New shared collection            |

<!-- END REF-->

#### Descrição

O comando `New shared collection` <!-- REF #_command_.New shared collection.Summary --> cria uma nova coleção compartilhada vazia ou pré-preenchida<!-- END REF --> e retorna sua referência. Collections can be handled using properties and functions of the [Collection class API](../API/CollectionClass.md).

Adding an element to this collection using the assignment operator must be surrounded by the [`Use...End use`](../Concepts/shared.md#useend-use) structure, otherwise an error is generated (this is not necessary when adding elements using functions such as [`push()`](../API/CollectionClass.md#push) or [`map()`](../API/CollectionClass.md#map) because they automatically trigger an internal *Use...End use*). A leitura de um elemento sem um *Use... End use* estrutura é, no entanto, possível.

:::info

For more information on shared collections, please refer to the [Shared objects and collections](../Concepts/shared.md) page.

:::

Se não quiser passar parâmetros, `New shared collection` cria uma coleção vazia partilhada e retorna sua referência.

Precisa atribuir a referência devolvida à uma variável 4D de tipo Collection.

> Keep in mind that `var : Collection` statement declares a variable of the `Collection` type but does not create any collection.

Opcionalmente pode preencher automaticamente a nova coleção partilhada passando um ou vários *value* como parâmetros. Também pode adicionar ou modificar elementos através de atribuição de notação de objetos (ver exemplo).

Se o novo índice elemento for além do último elemento existente da coleção partilhada, a coleção é automaticamente redimensionada e todos os novos elementos intermediários são atribuídos um valor **null**.

Pode passar qualquer número de valores dos tipos compatíveis abaixo:

- número (real, longint....). Valores numéricos são sempre armazenados como reais.
- text
- boolean
- date
- hora (armazenada como número de milissegundos - real)
- null
- objeto compartido
- coleção compartilhada

:::note

Diferente de coleções padrão (não partilhadas), coleções partilhadas não são compatíveis com imagens, ponteiros e objetos ou coleção que não forem partilhadas.

:::

#### Exemplo

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### Veja também

[New collection](new-collection.md)\
[New shared object](../commands-legacy/new-shared-object.md)\
*Shared objects and shared collections*

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1527                            |
| Thread safe    | &amp;check; |
