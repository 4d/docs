---
id: load-set
title: LOAD SET
slug: /commands/load-set
displayed_sidebar: docs
---

<!--REF #_command_.LOAD SET.Syntax-->**LOAD SET** ( {*tabela* ;} *conjunto* ; *documento* )<!-- END REF-->
<!--REF #_command_.LOAD SET.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela à qual o conjunto pertence, ou tabela padrão, se omitido |
| conjunto | Text | &#8594;  | Nome do conjunto a ser criado em memória |
| documento | Text | &#8594;  | Documento que contém o conjunto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.LOAD SET.Summary-->LOAD SET carrega um conjunto desde o arquivo *documento*, criado com o comando [SAVE SET](save-set.md).<!-- END REF-->  
  
O conjunto guardado em *documento* deve aplicar a *tabela*. O conjunto criado em memória é reescrito se já existir.

O parâmetro *documento* é o nome do documento disco que contém o conjunto. O documento não necessita ter o mesmo nome do conjunto. Se passa uma cadeia vazia em *documento*, se mostra uma caixa de diálogo padrão de Abertura de arquivos, permitindo ao usuário escolher o conjunto a carregar.  
  
Lembre que um conjunto é uma reapresentação de uma seleção de registros no momento em que o conjunto é criado. Se os registros representados pelo conjunto mudam, o conjunto poderia ficar inválido. Portanto, um conjunto carregado desde um disco deve representar a um grupo de registros que não muda frequentemente. Várias coisas podem tornar um conjunto inválido: modificação ou eliminação de um registro do conjunto, ou modificação dos critérios que determinam a criação do conjunto.

#### Exemplo 

O exemplo abaixo utiliza LOAD SET para carregar um conjunto de sedes da empresa Acme em Nova Iorque: 

```4d
 LOAD SET([Empresas];"NY Acme";"NYAcmeSt") // Carregar o conjunto em memória
 USE SET("NY Acme") // Mudar a seleção atual a NY Acme
 CLEAR SET("NY Acme") // Apagar o conjunto da memória
```

#### Variáveis e conjuntos do sistema 

Se o usuário clicar em Cancelar na caixa de diálogo de abrir arquivos, ou se for produzido um erro durante o carregamento, a variável sistema OK assume o valor 0\. Do contrário, assume o valor 1.  

#### Ver também 

[SAVE SET](save-set.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 185 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


