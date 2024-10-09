---
id: new-shared-collection
title: New shared collection
slug: /commands/new-shared-collection
displayed_sidebar: docs
---

<!--REF #_command_.New shared collection.Syntax-->**New shared collection** {( *value* {; *value2* ; ... ; *valueN*} )} -> Resultado<!-- END REF-->
<!--REF #_command_.New shared collection.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| value | &srarr; | Shared collection's value(s) |
| Resultado | Collection | &larr; | New shared collection |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.New shared collection.Summary-->O comando **New shared collection** cria uma nova coleção compartida vazia ou preenchida e devolve sua referência.<!-- END REF--> Agregar um elemento a esta coleção deve estar rodeado pela estrutura *Use...End use*, do contrário, se devolve um erro. Entretanto, é possível ler umelemento fora de uma estrutura *Use...End use*. 

**Nota:** para saber mais sobre *coleções compartidas*, consulte a página *Objetos compartidos e Coleções compartidas*.

Se não passar nenhum parâmetro, **New shared collection** cria uma coleção compartida vazia e devolve sua refêrencia.

Deve assignar a referência deolvida a uma varável 4D declarada com o comando [C\_COLLECTION](c-collection.md).

**Nota:** lembre que [C\_COLLECTION](c-collection.md) declara uma variável de tipo [Collection](# "Array of object property values"), mas não cria uma coleção.

Opcionalmente, pode preencher previamente a nova coleção compartida passando um ou vários *valores* como parâmetro(s). Do contrário, pode agregar ou modificar elementos posteriormente através da assignação de notação de objeto (ver exemplo).

Se o índice de novo elemento for além do último elemento existente da coleção compartida, a coleção se redimensionará automaticamente e todos os novos elementos intermediarios obterão o valor **null**.

* Pode número (real, intero longo...). Os valores numéricos sempre são armazenados como reais.
* texto
* booleano
* data
* hora (armacenado como número de milissegundos - real)
* nulo
* objeto compartido(\*)
* coleção compartida(\*)

**Nota**: diferente das coleções padrão (não compartidas), as coleções compartidas não admitem imagens, ponteiros e objetos o u coleções que não são comparti9das.

 (\*)Quando um objeto compartido ou coleção se agrega a uma coleção compartida, compartem o mesmo identificador de *bloqueio*. Para saber mais sobre este ponto, consulte a seção *Identificador de bloqueio (Locking identifier)*.

#### Exemplo 

```4d
 $mySharedCol:=New shared collection("alpha";"omega")
 Use($mySharedCol)
    $mySharedCol[1]:="beta"
 End use
```

#### Ver também 

[New collection](new-collection.md)  
[New shared object](new-shared-object.md)  
*Objetos compartidos e Coleções compartidas*  