---
id: table
title: Table
slug: /commands/table
displayed_sidebar: docs
---

<!--REF #_command_.Table.Syntax-->**Table** ( numTabela|Ponteiro ) -> Resultado<!-- END REF-->
<!--REF #_command_.Table.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| numTabela&#124;Ponteiro | Inteiro longo, Ponteiro | &#x1F852; | Número de tabela, ou ponteiro de Tabela, ou ponteiro de Campo |
| Resultado | Inteiro longo, Ponteiro | &#x1F850; | Ponteiro tabela, se um número de tabela for passado.<br/>Número de tabela, se um ponteiro de tabela for passado.<br/>Número de tabela, se um ponteiro de Campo for passado. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Table.Summary-->O comando Table tem três sintaxes diferentes: 

* Se passa um número de tabela em *numTabela*, Table retorna um ponteiro para a tabela.<!-- END REF-->
* Se passa um ponteiro de tabela em *Ponteiro*, Table retorna o número da tabela.
* Se passa um ponteiro de campo em *Ponteiro*, Table retorna o número de tabela do campo.

#### Exemplo 1 

Esse exemplo, a variável *ponTabela* recebe um ponteiro da tabela 3 do banco: 

```4d
 ponTabela:=Table(3)
```

#### Exemplo 2 

Se passa *pontTabela* (um ponteiro a tabela 3) a Table retorna 3\. Na linha abaixo, a variável *numTabela* assume o valor 3: 

```4d
 numTabela:=Table(pontTabela)
```
  
  
#### Exemplo 3 

Neste exemplo, a variável *numTabela* é igual ao número da tabela *\[Tabela3\]*: 

```4d
 numTabela:=Table(->[Tabela3])
```

#### Exemplo 4 

Este exemplo, a variável *numTabela* é igual ao número da tabela a qual pertence o campo *\[Tabela3\]Campo1*: 

```4d
 numTabela:=Table(->[Tabela3]Campo1)
```

#### Ver também 

[Field](field.md)  
[Get last table number](get-last-table-number.md)  
[Table name](table-name.md)  