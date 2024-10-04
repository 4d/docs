---
id: c-collection
title: C_COLLECTION
slug: /commands/c-collection
displayed_sidebar: docs
---

<!--REF #_command_.C_COLLECTION.Syntax-->**C_COLLECTION** ( {*método* ;} *variável* {; *variável2* ; ... ; *variávelN*} )<!-- END REF-->
<!--REF #_command_.C_COLLECTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| método | Método | &#x1F852; | Nome do método |
| variável | Variável | &#x1F852; | Nomes das variáveis ou parâmetros ${...} a declarar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.C_COLLECTION.Summary-->O comando **C\_COLLECTION** atribui o tipo Coleção a todas as variáveis que são especificadas.<!-- END REF-->

O tipo Coleção é suportado pela linguagem 4D a partir da v16 R4\. As variáveis deste tipo contém valores de atributo objeto de todo tipo, armazenados em um array. As coleções são gerenciadas utilizando os comandos do tema *Objetos (Linguagem)*.

Se utilizar a primeira sintaxe do comando (quando não passar o parâmetro método) para declarar e digitar uma variável de tipo local, processo ou interprocesso. Esta sintax pode ser utilizada em bancos de dados interpretados.

Se utilizar a segunda sintaxe do comando (quando for passado o parâmetro *método*) para declarar de antemão o resultado do método ou os parâmetros ($0, $1, $2, etc.) para o compilador. Deve utilizar esta sintaxe se desejar omitir a fase de escritura de variáveis para poupar tempo quando for compilado o banco de dados.

**ATENÇÂO**: não pode executar a segunda sintaxe em modo interpretado. Por esta razão, quando for utilizar esta sintaxe, tem que armazenar em um método (cujo nome deve começar por "COMPILER") que não for executado em modo interpretado.

##### Uso avançado 

A sintaxe **C\_COLLECTION**(${...}) permite declarar um número variável de parâmetros do mesmo tipo, sob a condição que esses são os últimos parâmetros par ao método. Por exemplo, a declaração **C\_COLLECTION**(${5}) diz a 4D e ao compilador que inicie com o quinto parâmetro, o método pode receber um número variável desse tipo. Para saber mais, veja a seção *Indireções sobre os parâmetros*.

#### Exemplo 

Se quiser declarar uma variável processo coleção e preencher a variável com uma nova coleção:

```4d
 C_COLLECTION(myCol)
  //aqui o  valor de myCol é nulo
 myCol:=New collection("Green";100;"Orange";200;"Red";300)
  //myCol= ["Green",100,"Orange",200,"Red",300]
```

#### Ver também 

*Coleções*  
[New collection](new-collection.md)  