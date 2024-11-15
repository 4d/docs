---
id: count-list-items
title: Count list items
slug: /commands/count-list-items
displayed_sidebar: docs
---

<!--REF #_command_.Count list items.Syntax-->**Count list items** ( {* ;} *lista* {; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Count list items.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificada, lista é um nome de objeto (cadeia) Se omitida, lista é um número de referência de lista |
| lista | Integer, Text | &#8594;  | Número de referência de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *) |
| * | Operador | &#8594;  | Se omitida (por padrão): Devolve os elementos visíveis (expandidos) da lista Se especificada: Devolve todos os elementos da lista |
| Resultado | Integer | &#8592; | Número de elementos visíveis da lista (expandidos) (se omitido o segundo *) ou número total de elementos da lista (se apresentado o segundo *) |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Count list items.Summary-->O comando Count list items retorna o número atual de elementos visíveis ou o número total de elementos na lista cujo número de referência ou nome de objeto se passa em *lista*.<!-- END REF-->

Se passa o primeiro parâmetro opcional *\**, indica que o parâmetro *lista* é um nome de objeto (cadeia) correspondente a uma representação de lista no formulário. Se não passar este parâmetro, você indica que o parâmetro *lista* é uma referência de lista hierárquica (*refLista*). Se utilizar apenas uma representação de lista, ou trabalha com todos os elementos (passa o segundo \*), pode utilizar qualquer das duas sintaxes. Pelo contrário, se utilizar várias representações da mesma lista e trabalha com os elementos visíveis (o segundo \* é omitido), a sintaxe baseada no nome do objeto é necessária já que cada representação pode ter sua própria configuração expandida/contraída. 

**Nota:** se utilizar o caractere @ no nome do objeto da lista e o formulário contém várias listas que coincidem com este nome, o comando Count list items será aplicado ao primeiro objeto cujo nome corresponda. 

Utilize o segundo parâmetro \* para determinar que tipo de informação será devolvida. Quando se passa este parâmetro, o comando retorna o número total de elementos presentes na lista, sem importar se a lista está exibida ou contraída. 

Quando é omitido este parâmetro, o comando retorna o número de elementos visíveis, dependendo do estado expandido/contraído da lista e suas sub-listas.

Aplique este comando a uma lista mostrada num formulário.

#### Exemplos 

Aqui temos uma lista chamada *hList* mostrada no ambiente Aplicação:

  
![](../assets/en/commands/pict22362.en.png)

```4d
 $vlNbItems:=Count list items(hList) // neste ponto $vlNbItems vale 8
 $vlNbTItems:=Count list items(hList;*) //$vlNbTItems também vale 8
```

![](../assets/en/commands/pict22363.en.png)

```4d
 $vlNbItems:=Count list items(hList) // neste ponto $vlNbItems vale 2
 $vlNbTItems:=Count list items(hList;*) //$vlNbTItems continua valendo 8
```

![](../assets/en/commands/pict22364.en.png)

```4d
 $vlNbItems:=Count list items(hList) // neste ponto $vlNbItems vale 5
 $vlNbTItems:=Count list items(hList;*) //$vlNbTItems continua valendo 8
```

#### Ver também 

[List item position](list-item-position.md)  
[Selected list items](selected-list-items.md)  