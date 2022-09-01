---
id: collection
title: Collection
---

Collections are ordered lists of values of similar or mixed types (text, number, date, object, boolean, collection, or null).

Collection type variables are managed using object notation (see [Syntax basics](Concepts/dt_object.md#syntax-basics)).

Para acessar a um elemento da coleção, é preciso passar o número do elemento entre colchetes:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in *expression*. Exemplos:

```4d
 myCollection[5]  //aceso ao 6º elemento da coleção
 myCollection[$var]
```

**Atenção:** os elementos da coleção estão numerados desde 0.

You can assign a value to a collection element or get a collection element value:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

Se atribuir um índice de elemento que ultrapasse o último elemento existente da coleção, a coleção se redimensiona automaticamente e a todos os novos elementos intermediários se lhes atribui um valor nulo:

```4d
 var myCol : Collection
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Inicialização

As coleções devem ter sido inicializadas, por exemplo utilizando o comando `New collection`, do contrário ao tentar ler ou modificar seus elementos se gerará um erro de sintaxe.

Exemplo:

```4d
 var $colVar : Collection //criação de uma variável 4D de tipo coleção
 $colVar:=New collection //initialização da coleção e atribuição à variável 4D
```

### Coleção regular ou partilhada

Pode criar dois tipos de coleções:

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command. Essas coleções podem ser editadas sem qualquer controle de acesso específico mas não podem ser compartilhadas entre processos.
- shared collections, using the [`New shared collection`](API/CollectionClass.md#new-shared-collection) command. Essas coleções podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by [`Use... End use`](Concepts/shared.md#useend-use) structures.

Para saber mais, consulte a seção [Objetos e coleções compartidos](Concepts/shared.md).

## Collection functions

4D collection references benefit from special class functions (sometimes named *member functions*). Collection functions are listed in the [Class API Reference](API/CollectionClass.md) section.

Por exemplo:

```4d
$newCol:=$col.copy() //cópia de $col a $newCol
$col.push(10;100) //adiciona 10 e 100 para a coleção
```

Some functions return the original collection after modification, so that you can run the calls in a sequence:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### Parâmetro rotaPropriedade


Several functions accept a _propertyPath_ as parameter. Este parâmetro significa:

- um nome de objeto propriedade por exemplo "Sobrenome"
- ou uma rota de propriedades de objeto, ou seja, uma sequência hierárquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".

**Warning:** When using functions and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //erro
```