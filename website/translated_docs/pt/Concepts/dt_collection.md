---
id: collection
title: Collection
---

Coleções são listas ordenadas de valores de tipos diferentes ou não (texto, número, objeto, booleano, coleção ou null).

Para gerenciar as variáveis de tipo Coleção se deve utilizar a notação de objetos (ver  [Syntax basics](Concepts/dt_object.md#syntax-basics)).

To access a collection element, you need to pass the element number inside square brackets:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in expression. Examples:

```4d
 myCollection[5]  //access to 6th element of the collection
 myCollection[$var]
```

**Warning:** Collection elements are numbered from 0.

Pode atribuir um valor a um elemento da coleção ou obter o valor de um elemento da coleção utilizando a notação de objetos:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

If you assign an element's index that surpasses the last existing element of the collection, the collection is automatically resized and all new intermediary elements are assigned a null value:

```4d
 C_COLLECTION(myCol)
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Initialization

Collections must have been initialized, for example using the `New collection` command, otherwise trying to read or modify their elements will generate a syntax error.

Example:
```4d
 C_COLLECTION($colVar) //criação de uma variável 4D de tipo coleção
 $colVar:=Nova coleção //inicialização da coleção e atribuição a variável 4D
```

### Regular or shared collection

You can create two types of collections:

- coleções padrão (não compartilhadas), utilizando o comando `New collection`. These collections can be edited without any specific access control but cannot be shared between processes.
- coleções compartidas, utilizando o comando `New shared collection`. These collections can be shared between processes, including preemptive threads. O acesso a estas coleções é controlada mediante estruturas `Use...End use`. For more information, refer to the [Shared objects and collections](Concepts/shared.md) section.

## Métodos de coleção

As referências a coleções 4D se beneficiam de métodos especiais (as vezes chamados *funções membro*). Graças à notação de objetos, esses métodos podem ser aplicados às referências da coleção usando a sintaxe abaixo:

> {$result:=}myCollection.memberFunction( {params} )

Note que mesmo não tiver parâmetros, uma função membro deve ser chamada com parênteses (), do contrário é gerado um erro de sintaxe..

For example:

```4d
$newCol:=$col.copy() //deep copy of $col to $newCol
$col.push(10;100) //add 10 and 100 to the collection
```

Alguns métodos retornam a coleção original depois de moficiação, para que possa rodar as chamadas em sequência:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### propertyPath parameter


Vários métodos aceitam uma _propertyPath_ como parâmetro. This parameter stands for:

- either an object property name, for example "lastName"
- or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName".

**Atenção:** quando utilizar métodos e parâmetros propertyPath, não pode utilizar ".", "[ ]", ou espaços nos nomes das propriedades já que impedirá que 4D analise corretamente a rota:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```
