---
id: php-set-option
title: PHP SET OPTION
slug: /commands/php-set-option
displayed_sidebar: docs
---

<!--REF #_command_.PHP SET OPTION.Syntax-->**PHP SET OPTION** ( *opçao* ; *valor* {; *} )<!-- END REF-->
<!--REF #_command_.PHP SET OPTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opçao | Integer | &#8594;  | Opção a ser estabelecida |
| valor | Boolean | &#8594;  | Novo valor da opção |
| * | Operador | &#8594;  | Se passado: modificação apenas se aplica à próxima chamada |

<!-- END REF-->

:::info Compatibilidade

**PHP está obsoleto em 4D**. Recomenda-se usar a classe [`4D.SystemWorker class`](../API/SystemWorkerClass.md).

:::


#### Descrição 

<!--REF #_command_.PHP SET OPTION.Summary-->O comando PHP SET OPTION se utiliza para definir opções específicas antes de chamar o comando [PHP Execute](php-execute.md).<!-- END REF--> O escopo deste comando é o processo atual.

Passe no parâmetro *opção* uma constante do tema "*PHP*" para designar a opção a modificar e no parâmetro *valor*, o novo valor da opção. Esta é uma descrição das opções: 

| Constante      | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                         |
| -------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PHP raw result | Inteiro longo | 2     | Definição do modo de processamento dos cabeçalhos HTTP devolvidos por PHP no resultado da execução quando este resultado for do tipo Texto (quando o resultado for do tipo BLOB, os cabeçalhos são mantidos sempre).<br/>Valores possíveis: Booleano: False (valor padrão = eliminar os cabeçalhos HTTP do resultado. True = conservar os cabeçalhos HTTP. |

Como padrão, PHP SET OPTION define a opção para todas as chamadas a [PHP Execute](php-execute.md) posteriores do processo. Se quiser definir para a próxima chamada unicamente passe o parâmetro estrela (*\**).

#### Ver também 

[PHP Execute](php-execute.md)  
[PHP GET OPTION](php-get-option.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1059 |
| Thread-seguro | &cross; |


