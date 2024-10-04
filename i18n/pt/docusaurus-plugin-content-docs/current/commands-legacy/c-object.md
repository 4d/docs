---
id: c-object
title: C_OBJECT
slug: /commands/c-object
displayed_sidebar: docs
---

<!--REF #_command_.C_OBJECT.Syntax-->**C_OBJECT** ( {*metodo* ;} *variavel* {; *variavel2* ; ... ; *variavelN*} )<!-- END REF-->
<!--REF #_command_.C_OBJECT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| metodo | Método | &#x1F852; | Nome do método |
| variavel | Variável | &#x1F852; | Nome(s) da(s) variável(s) ou parâmetro(s) ${...} a declarar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.C_OBJECT.Summary-->O comando **C\_OBJECT** atribui o tipo [Objeto](# "Estruturas de dados como objetos 4D nativos") a todas as varáveis especificadas.<!-- END REF--> 

O tipo [Objeto](# "Estruturas de dados como objetos 4D nativos") é suportado pela linguagem 4D a partir da v14\. Os objetos deste tipo são administrados pelos comandos do tema *Objetos (Linguagem)*. ou através da notação de objetos (ver *Usar notação padrão objeto*).  
  
A primeira sintaxe do comando (se o parâmetro *metodo* não passar) se utiliza para declarar e digitar uma variável processo, interprocesso ou local. Esta sintaxe pode ser utilizada em bases interpretadas.  
  
A segunda sintaxe do comando (se o parâmetro *metodo* passar) se utiliza para declarar de antemão o resultado e/ou os parâmetros ($0, $1, $2, etc.) de um método para o compilador. Deve utilizar esta sintaxe se deseja evitar a fase de escrever variáveis com a finalidade de economizar tempo ao compilar a base de dados.  
  
**ATENÇÃO**:Não pode executar a segunda sintaxe em modo interpretado. Por esta razão, quando se utiliza esta sintaxe, deve ser salva em um método (cujo nome deve começar por "COMPILER") que não se execute em modo interpretado.

**Importante:** o comandoC\_OBJECT não cria um objeto chamado *variable*. Se desejar acessar as propriedades do objeto usando a notação de objetos, primeiro deve inicializá-lo usando o comando [New object](new-object.md), do contrário se devolve um erro de sintaxe

##### Uso avançado 

A sintaxe **C\_OBJECT**(${...}) permite declarar um número variável de parâmetros do mesmo tipo, sob a condição que esses são os últimos parâmetros par ao método. Por exemplo, a declaração **C\_OBJECT**(${5}) diz a 4D e ao compilador que inicie com o quinto parâmetro, o método pode receber um número variável desse tipo. Para saber mais, veja a seção *Indireções sobre os parâmetros*.

#### Exemplo 

```4d
 C_OBJET($obj) //A variável $obj se declara mas o objeto $obj não existe
 $obj:=New object //O objeto $obj se inicializa
 $obj.prop:=42 //...e suas propriedades podem ser acessadas
```

#### Ver também 

[ARRAY OBJECT](array-object.md)  
*Objetos (Linguagem)*  