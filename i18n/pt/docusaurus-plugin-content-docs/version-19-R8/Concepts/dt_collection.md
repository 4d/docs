---
id: collection
title: Collection
---

As colecções são listas ordenadas de valores de tipos semelhantes ou mistos (texto, número, data, objecto, booleano, colecção, ou nulo).

As variáveis de tipo de colecção são geridas utilizando notação de objectos (ver [Syntax basics](Concepts/dt_object.md#syntax-basics)).

Para acessar a um elemento de coleção, é necessário passar o número do elemento dentro de parênteses rectos:

```4d
collectionRef[expression]
```

Pode passar qualquer expressão 4D válida que devolva um número inteiro positivo na expressão **. Exemplos:

```4d
 myCollection[5]  //aceso ao 6º elemento da coleção
 myCollection[$var]
```

**Atenção:** os elementos da coleção estão numerados desde 0.

Pode atribuir um valor a um elemento de colecção ou obter um valor de um elemento de colecção:

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

- colecções regulares (não partilhadas), utilizando o comando [`Nova colecção`](API/CollectionClass.md#new-collection) . Essas coleções podem ser editadas sem qualquer controle de acesso específico mas não podem ser compartilhadas entre processos.
- colecções partilhadas, utilizando o comando [`Nova colecção partilhada`](API/CollectionClass.md#new-shared-collection) . Essas coleções podem ser partilhadas entre processos, incluindo threads preemptivos. Access to these collections is controlled by [`Use... End use`](Concepts/shared.md#useend-use) structures.

Para saber mais, consulte a seção [Objetos e coleções compartidos](Concepts/shared.md).

## Funções de Collection

As referências de colecção 4D beneficiam de funções de classe especiais (por vezes nomeadas *funções de membro*). As funções de recolhimento estão listadas na seção [Class API Reference](API/CollectionClass.md) .

Por exemplo:

```4d
$newCol:=$col.copy() //cópia de $col a $newCol
$col.push(10;100) //adiciona 10 e 100 para a coleção
```

Algumas funções devolvem a colecção original após modificação, para que se possa executar as chamadas numa sequência:

```4d
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```


### Parâmetro rotaPropriedade


Várias funções aceitam um _propertyPath_ como parâmetro. Este parâmetro significa:

- um nome de objeto propriedade por exemplo "Sobrenome"
- ou uma rota de propriedades de objeto, ou seja, uma sequência hierárquica de subpropriedades vinculadas com caracteres de ponto, por exemplo "empregado.filhos.nome".

**Advertência:** Ao usar funções e parâmetros de propriedadePath, não se pode usar ".", "[ ]", ou espaços nos nomes das propriedades, uma vez que isso impedirá que 4D analise correctamente o caminho:

```4d
 $vmin:=$col.min("My.special.property") //indefinido
 $vmin:=$col.min(["My.special.property"]) //erro
```