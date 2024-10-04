---
id: new-collection
title: New collection
slug: /commands/new-collection
displayed_sidebar: docs
---

<!--REF #_command_.New collection.Syntax-->**New collection** {( *valor* {; *valor2* ; ... ; *valorN*} )} -> Resultado<!-- END REF-->
<!--REF #_command_.New collection.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| valor | Número, Texto, Data, Objeto, Collection, Ponteiro | &#x1F852; | Valores da Coleção |
| Resultado | Collection | &#x1F850; | Nova coleção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.New collection.Summary-->O comando **New collection**cria uma nova coleção vazia ou pré-preenchida e retorna sua referência.<!-- END REF--> 

Se não passar nenhum parâmetro, **New collection** cria uma coleção vazia e devolve sua referência.

Deve atribuir a referência retornada a uma variável 4D declarada com [C\_COLLECTION](c-collection.md).

**Nota:** lembre que [C\_COLLECTION](c-collection.md) declara uma variável de tipo Coleção mas não cria nenhuma coleção.

Opcionalmente, pode pré-preencher esta nova coleção passando um ou vários parâmetros *value*. 

Também é possível adiconar ou modificar elementos subsequentemente através da atribuição de notação de objeto. Por exemplo:

```4d
 myCol[10]:="My new element"
```

Se o novo índice de elemento for além do último elemento existente da coleção, a coleção é automaticamente redimensionada e todos os novos elementos intermediários obtém o valor **null**. 

**Nota:** Para mais informação sobre a notação de objeto, veja a seção *Usar notação padrão objeto*. 

 Pode passar qualquer número de valores de todo tipo admitido (número, texto, data, ponteiro, objeto, coleção ...). Diferente dos arrays, as coleções podem combinar dados de diferentes tipos.

Deve prestar atenção aos problemas de conversão abaixo:

* Se passar um ponteiro, ele se mantém como é; É avaliado mediante o comando [JSON Stringify](json-stringify.md)
* As datas são armazenadas no formato "AAAA-MM-DDTHH:mm:ss.SSSZ".Ao converter datas 4D em texto antes de armazená-las na coleção, de forma pré-determinada o programa leva em consideração a zona horária local. Pode modificar este comportamento utilizando o seletor JSON use local time do comando [SET DATABASE PARAMETER](set-database-parameter.md).
* Se passar um tempo, ele é armazenado como um número de milissegundos (Real).

#### Exemplo 1 

Se quiser criar uma nova coleção vazia e a atribuir a uma variável coleção 4D:

```4d
 var $myCol : Collection
 $myCol:=New collection
  //$myCol=[]
```

#### Exemplo 2 

Se quiser criar uma coleção pré-preenchida:

```4d
 var $filledColl : Collection
 $filledColl:=New collection(33;"mike";"november";->myPtr;Current date)
  //$filledColl=[33,"mike","november",->myPtr,2017-03-28T22:00:00.000Z]
```

#### Exemplo 3 

Pode criar uma nova coleção e então adicionar um novo elemento:

```4d
 var $coll : Collection
 $coll:=New collection("a";"b";"c")
  //$coll=["a","b","c"]
 $coll[9]:="z" //adiciona um 10o  elemento com valor "z"
 $vcolSize:=$coll.length //10
  //$coll=["a","b","c",null,null,null,null,null,null,"z"]
```

**Nota:** Este exemplo exige que a notação de objeto esteja ativada no banco de dados (ver *Notação de objeto*).

#### Ver também 

[C\_COLLECTION](c-collection.md)  
[New shared collection](new-shared-collection.md)  
[Type](type.md)  