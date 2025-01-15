---
id: create-data-file
title: CREATE DATA FILE
slug: /commands/create-data-file
displayed_sidebar: docs
---

<!--REF #_command_.CREATE DATA FILE.Syntax-->**CREATE DATA FILE** ( *endAcesso* )<!-- END REF-->
<!--REF #_command_.CREATE DATA FILE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| endAcesso | Text | &#8594;  | Nome ou endereço completo de acesso ao arquivo de dados a ser criado |

<!-- END REF-->

#### Description 

<!--REF #_command_.CREATE DATA FILE.Summary-->O comando **CREATE DATA FILE** permite criar um novo arquivo de dados em disco e substituir o arquivo de dados aberto pela aplicação 4D.<!-- END REF-->

O funcionamento geral deste comando é idêntico ao do comando [OPEN DATA FILE](open-data-file.md); a única diferença é que o novo arquivo de dados designado pelo parâmetro *endAcesso* é criado justo depois de que se abre novamente a estrutura.

Antes de iniciar a operação, o comando verifica que o endereço de acesso não corresponde a um arquivo existente.

**4D Server:** Começando com 4D v13, este comando pode ser executado com o 4D Server. Neste contexto, o comando faz uma chamada interna ao comando [QUIT 4D](quit-4d.md) no servidor (o qual faz que apareça uma caixa de diálogo em cada computador remoto indicando que o servidor está no processo de saída) antes de abrir o arquivo designado.

#### Ver também 

[OPEN DATA FILE](open-data-file.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 313 |
| Thread-seguro | &check; |


