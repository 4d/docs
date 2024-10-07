---
id: sql-get-option
title: SQL GET OPTION
slug: /commands/sql-get-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET OPTION.Syntax-->**SQL GET OPTION** ( *opçao* ; *valor* )<!-- END REF-->
<!--REF #_command_.SQL GET OPTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opçao | Inteiro longo | &#x1F852; | Número de opção |
| valor | Inteiro longo, Texto | &#x1F858; | Valor de opção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SQL GET OPTION.Summary-->O comando SQL GET OPTION retorna o *valor* atual da opção passada no parâmetro *opçao*.<!-- END REF-->  
  
Para maior informação sobre as diferentes opções e seus valores associados, consulte a descrição do comando [SQL SET OPTION](sql-set-option.md).

#### Variáveis e conjuntos do sistema 

Se o comando for executado corretamente, a variável Sistema OK assume o valor 1\. Do contrário, assume o valor 0.

#### Ver também 

[SQL SET OPTION](sql-set-option.md)  