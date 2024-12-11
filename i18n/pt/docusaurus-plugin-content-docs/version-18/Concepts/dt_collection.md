---
id: collection
title: Collection
---

Coleções são listas ordenadas de valores de tipos diferentes ou não (texto, número, objeto, booleano, coleção ou null).

Para gerenciar variáveis do tipo Coleção, você deve usar notação objeto (veja [Noções básicas de Sintaxe](Concepts/dt_object.md#syntax-basics)).

Para acessar a um elemento de coleção, é necessário passar o número do elemento dentro de parênteses rectos:

```4d
collectionRef[expression]
```

You can pass any valid 4D expression which returns a positive integer in expression. Exemplos:

```4d
 myCollection[5]  //aceso ao 6º elemento da coleção
 myCollection[$var]
```

**Atenção:** os elementos da coleção estão numerados desde 0.

You can assign a value to a collection element or get a collection element value using object notation:

```4d
 myCol[10]:="My new element"
 $myVar:=myCol[0]
```

Se atribuir um índice de elemento que ultrapasse o último elemento existente da coleção, a coleção se redimensiona automaticamente e a todos os novos elementos intermediários se lhes atribui um valor nulo:

```4d
 C_COLLECTION(myCol)
 myCol:=New collection("A";"B")
 myCol[5]:="Z"
  //myCol[2]=null
  //myCol[3]=null
  //myCol[4]=null
```

## Inicialização

Collections must have been initialized, for example using the `New collection` command, otherwise trying to read or modify their elements will generate a syntax error.

Exemplo:
```4d
 C_COLLECTION($colVar) //criação de uma variável 4D do tipo coleção
 $colVar:=New collection //inicialização da coleção e atribuição à variável 4D
```

### Coleção regular ou partilhada

Pode criar dois tipos de coleções:

- coleções regulares (não compartilhadas) usando o comando `New collection`. Essas coleções podem ser editadas sem qualquer controle de acesso específico mas não podem ser compartilhadas entre processos.
- coleções compartilhadas, usando o comando `New shared collection`. Essas coleções podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by `Use...End use` structures. For more information, refer to the [Shared objects and collections](Concepts/shared.md) section.

## Métodos de coleção

As referências a coleções 4D se beneficiam de métodos especiais (às vezes chamados *funções membro*). Thanks to object notation, these methods can be applied to collection references using the following syntax:

> {$result:=}myCollection.memberFunction( {params} )

Observe que, mesmo que ele não tenha parâmetros, uma função membro deve ser chamada com parênteses (), caso contrário, um erro de sintaxe é gerado.

Por exemplo:

```4d
$newCol:=$col.copy() //cópia de $col a $newCol
$col.push(10;100) //adiciona 10 e 100 para a coleção
```

Some methods return the original collection after modification, so that you can run the calls in a sequence:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### parâmetro caminoPropriedade


Vários métodos aceitam um _propertyPath_ como parâmetro. Este parâmetro significa:

- um nome de objeto propriedade por exemplo "Sobrenome"
- ou uma rota de propriedades de objeto, ou seja, uma sequência hierárquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".

**Warning:** When using methods and propertyPath parameters, you cannot use ".", "[ ]", or spaces in property names since it will prevent 4D from correctly parsing the path:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //erro
```
