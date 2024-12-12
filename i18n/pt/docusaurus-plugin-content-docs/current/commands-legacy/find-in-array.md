---
id: find-in-array
title: Find in array
slug: /commands/find-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in array.Syntax-->**Find in array** ( *array* ; *valor* {; *inicio*} ) : Integer<!-- END REF-->
<!--REF #_command_.Find in array.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array a buscar |
| valor | Expression | &#8594;  | Valor do mesmo tipo a ser buscado no array |
| inicio | Integer | &#8594;  | Elemento no qual se inicia a busca |
| Resultado | Integer | &#8592; | Número do primeiro elemento no array que corresponde ao valor |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Find in array.Summary-->O comando Find in array devolve o número do primeiro elemento do [Array](# "An array of values") que corresponde a valor.<!-- END REF-->

Find in array pode se utilizar com arrays de tipo Texto, Alfa, Numérico, Data, Apontador e Booleano. Os parâmetros [Array](# "An array of values") e valor devem ser do mesmo tipo.

valor deve ser exatamente igual ao elmento a encontrar (mesmas regras que as aplicadas ao operador de igualdade, ver *Operadores de Comparação*). Se nenhum resultado for encontrado, Find in array retorna –1.

**Nota**: Com arrays Objeto, pode usar apenas referências de objeto no parâmetro valor

Se especificar *principio*, o comando começa a busca no número de elemento especificado por *principio*. Se não se especifica *principio*, o comando começa a busca no elemento 1.

#### Exemplo 1 

O método de projeto a seguir deleta todos os elementos apagados do string ou array de texto cujo ponteiro é passado como parâmetro:

```4d
  // Método de projecto LIMPAR ARRAY
  // LIMPAR ARRAY ( Ponteiro )
  // LIMPAR ARRAY ( -> Array de Texto ou Alfa )
 
 var $1 : Pointer
 Repeat
    $vlElem:=Find in array($1->;"")
    If($vlElem>0)
       DELETE FROM ARRAY($1->;$vlElem)
    End if
 Until($vlElem<0)
```

Depois de implementar este método de projeto em uma base, pode escrever:

```4d
 ARRAY TEXT(atValores;...)
  // ...
  // Utilizar o array como quiser
  // ...
  // Eliminar os elementos de cadeias vazias
 LIMPAR ARRAY(->atValores)
```

#### Exemplo 2 

O método de projeto a seguir selecionar o primeiro elemento de um array cujo ponteiro passa como primeiro parâmetro que corresponde ao valor da variável ou campo cujo ponteiro é passado como parâmetro:

```4d
  // Método de projeto SELECIONAR ELEMENTO
  // SELECIONAR ELEMENTO( Ponteiro ; Ponteiro)
  //SELECIONAR ELEMENTO ( -> Array Texto ou Alfa ; -> Campo ou variável de tipo Texto ou Alfa )
 
 $1->:=Find in array($1->;$2->)
 If($1->=-1)
    $1->:=0 // Se um elemento não é encontrado, fixar o array em um elemento não selecionado
 End if
```

Depois de implementar este método em um banco, você pode escrever:

```4d
  // Método de objeto de menu suspenso asGenero
 Case of
    :(Form event code=On Load)
       SELECIONAR ELEMENTO(->asGenero;->[Pessoas]Genero)
 
 End case
```

```4d

//``

**Nota:** este exemplo utiliza o **elemento selecionado** do array. Leve em conta que o elemento selecionado não é significativo se o array contém mais de 32.767 elementos (ver *Arrays e objetos de formulário*). Neste caso, é necessário utilizar uma variável de tipo inteiro longo para armazenar o resultado de **Find in array**. 

#### Exemplo 3 

Para encontrar uma referência de objeto

```4d
 ARRAY OBJECT($objects;100)

$o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 var $p : Integer
 
 $p:=Find in array($objects;$o1) //$p = 20 
 $p:=Find in array($objects;$o2) //$p = -1 
 $p:=Find in array($objects;{a10;b"xyz"}) //$p = -1


```

#### Ver também 

[Count in array](count-in-array.md)  
[DELETE FROM ARRAY](delete-from-array.md)  
[Find in sorted array](find-in-sorted-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  