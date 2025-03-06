---
id: close-resource-file
title: CLOSE RESOURCE FILE
slug: /commands/close-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE RESOURCE FILE.Syntax-->**CLOSE RESOURCE FILE** ( *resArquivo* )<!-- END REF-->
<!--REF #_command_.CLOSE RESOURCE FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| resArquivo | Time | &#8594;  | Número de referencia de arquivo recurso |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CLOSE RESOURCE FILE.Summary-->O comando **CLOSE RESOURCE FILE** fecha o arquivo de recursos cujo número de referência se passa em *resArquivo*.<!-- END REF-->  
  
Inclusive se tiver aberto várias vezes o mesmo arquivo de recursos, deve chamar **CLOSE RESOURCE FILE** só uma vez para fechá-lo.  
  
Se aplica **CLOSE RESOURCE FILE** ao arquivo de recursos da aplicação 4D ou do banco, o comando o detecta e não faz nada.  
  
Se passa um número de referência de arquivo de recursos incorreto, o comando não faz nada.  
  
Lembre chamar finalmente **CLOSE RESOURCE FILE** para um arquivo de recursos que tenha aberto utilizando [Open resource file](open-resource-file.md). Note que quando saia da aplicação (ou abre outro banco de dados), 4D fecha automaticamente todos os arquivos de recursos abertos.

#### Ver também 

[Open resource file](open-resource-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 498 |
| Thread-seguro | &cross; |


