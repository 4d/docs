---
id: php-get-option
title: PHP GET OPTION
slug: /commands/php-get-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP GET OPTION.Syntax-->**PHP GET OPTION** ( *opção* ; *valor* )<!-- END REF-->
<!--REF #_command_.PHP GET OPTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opção | Integer | &#x1F852; | Opção a conseguir |
| valor | Boolean | &#x1F858; | Valor atual da opção |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PHP GET OPTION.Summary-->O comando PHP GET OPTION permite conhecer o valor atual de uma opção relativa à execução de scripts PHP.<!-- END REF--> 

Passe no parâmetro *opção* uma constante do tema "*PHP*" para designar a opção a ler. O comando devolve o valor atual da opção no parâmetro *valor*. P

| Constante      | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PHP raw result | Inteiro longo | 2     | Definição do modo de processamento dos cabeçalhos HTTP devolvidos por PHP no resultado da execução quando este resultado for do tipo Texto (quando o resultado for do tipo BLOB, os cabeçalhos são mantidos sempre).<br/>Valores possíveis: Booleano: False (valor padrão = eliminar os cabeçalhos HTTP do resultado. True = conservar os cabeçalhos HTTP. |

#### Ver também 

[PHP GET FULL RESPONSE](php-get-full-response.md)  
[PHP SET OPTION](php-set-option.md)  