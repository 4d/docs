---
id: collection
title: Collection
---

Coleções são listas ordenadas de valores de tipos diferentes ou não (texto, número, objeto, booleano, coleção ou null).

Collection type variables are managed using [object notation](dt_object.md#properties).

Para acessar a um elemento de coleção, é necessário passar o número do elemento dentro de parênteses rectos:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in _expression_. Exemplos:

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

Se atribuir um índice de elemento que ultrapasse o último elemento existente da coleção, a coleção se redimensiona automaticamente e a todos os novos elementos intermediários se lhes atribui um valor nulo:

```4d
 var myCol : Collection
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Instanciação

As coleções devem ter sido inicializadas, por exemplo utilizando o comando <code>New collection</code>, do contrário ao tentar ler ou modificar seus elementos se gerará um erro de sintaxe.

A instanciação da colecção pode ser feita de uma das seguintes formas:

- using the [`New collection`](../API/CollectionClass.md#new-collection) command,
- using the `[]` operator.

:::info

Several 4D commands and functions return collections, for example [`Get Monitored Activity`](https://doc.4d.com/4dv19R/help/command/en/page1713.html) or [`collection.copy`](../API/CollectionClass.md#copy). Neste caso, não é necessário instanciar explicitamente a coleção, a linguagem 4D fá-lo por si.

:::

### `New collection` command

The [`New collection`](../API/CollectionClass.md#new-collection) command creates a new empty or prefilled collection and returns its reference.

Exemplos:

```4d
 var $colVar : Collection //declaration of a collection type 4D variable
 $colVar:=New collection //instantiation of the collection and assignment to the 4D variable
 
 var $colFilled : Collection
 $colFilled:=New collection("a";"b";1;42;{}) //instantiation and assignment of a prefilled collection
```

### Operador `[]`

The `[]` operator allows you to create a **collection literal**. A collection literal is a list of zero or more expressions, each of which represents a collection element, enclosed in square brackets (`[]`). Quando cria uma coleção utilizando um literal de coleção, esta é instanciada com os valores especificados como seus elementos e o seu comprimento é definido para o número de argumentos especificados.

Since any element is considered an expression, you can create sub-collections using `[]` in elements.  You can also create and reference **object literals**.

Se um elemento for indefinido, aparecerá como Nulo na coleção.

Exemplos:

```4d
var $col1; $col2; $users : Collection
$col1:=[] //colecção vazia
$col2:=[1;2;3;4;5;6] //colecção de números
//colecção de objectos
$users:=[{name: "Alice"; \
	height: 183; \
	eyecolor: "hazel"; \
	id: $col2[5]\
	}; \
	{name: "Bob"; \
	height: 172; \
	eyecolor: "blue"\
	}]
```

:::note

If you create a collection literal containing a single element, make sure you do not use a name corresponding to an existing table name, otherwise the table syntax `[tableName]` will take priority.

:::

### Coleção regular ou partilhada

Pode criar dois tipos de coleções:

- regular (non-shared) collections, using the [`New collection`](API/CollectionClass.md#new-collection) command or collection literal syntax (`[]`). Essas coleções podem ser editadas sem qualquer controle de acesso específico mas não podem ser compartilhadas entre processos.
- shared collections, using the [`New shared collection`](API/CollectionClass.md#new-shared-collection) command. Essas coleções podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by [`Use...End use`](Concepts/shared.md#useend-use) structures.

For more information, refer to the [Shared objects and collections](shared.md) section.

## Funções de Collection

4D collection references benefit from special class functions (sometimes named _member functions_). Collection functions are listed in the [Class API Reference](../API/CollectionClass.md) section.

Por exemplo:

```4d
$newCol:=$col.copy() //cópia de $col a $newCol
$col.push(10;100) //adiciona 10 e 100 para a coleção
```

Alguns métodos retornam a coleção original depois de moficiação, para que possa rodar as chamadas em sequência:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```

### parâmetro caminoPropriedade

Several functions accept a _propertyPath_ as parameter. Este parâmetro significa:

- um nome de objeto propriedade por exemplo "Sobrenome"
- ou uma rota de propriedades de objeto, ou seja, uma sequência hierárquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".

**Warning:** When using functions and _propertyPath_ parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //undefined
 $vmin:=$col.min(["My.special.property"]) //error
```

## Indefinido

Reading the **length** property of an undefined collection produces 0:

```4d
     var $c : Collection //variable created but no collection is defined
     $size:=$c.length //$size = 0
```
