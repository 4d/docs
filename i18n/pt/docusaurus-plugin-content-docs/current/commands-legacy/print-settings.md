---
id: print-settings
title: PRINT SETTINGS
slug: /commands/print-settings
displayed_sidebar: docs
---

<!--REF #_command_.PRINT SETTINGS.Syntax-->**PRINT SETTINGS** {( *dialType* )}<!-- END REF-->
<!--REF #_command_.PRINT SETTINGS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| dialType | Integer | &#8594;  | Caixas de diálogo a mostrar |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.PRINT SETTINGS.Summary-->O comando PRINT SETTINGS mostra una o dos caixas de diálogo de parâmetros de impressão.<!-- END REF--> Este comando deve ser chamado antes de uma série de comandos [Print form](../commands/print-form.md) ou o comando [OPEN PRINTING JOB](open-printing-job.md).

O parâmetro opcional *dialType* pode ser utilizado para configurar a visualização das caixas de diálogo de impressão. Pode usar uma das constantes abaixo do tema *Opções de Impressão*. A caixa de diálogo exibida vai depender realmente de sua versão 4D como mostrada na tabela abaixo:

| Constante         | Valor | Comentário                                                                         |
| ----------------- | ----- | ---------------------------------------------------------------------------------- |
| Page setup dialog | 1     | Visualização de diálogo de configuração de página                                  |
| Print dialog      | 2     | Visualização da caixa de diálogo de Impressão (padrão se for omitido)<br/> |

**Nota**: A caixa de diálogo de impressão contém a opção **Preview on Screen** permitindo ao usuário visualizar sua impressão na tela. Pode pré-selecionar ou de - selecionar esta opção chamando [OPEN PRINTING JOB](open-printing-job.md) antes de chamar PRINT SETTINGS.

#### Exemplo 

Ver exemplo para o comando [Print form](../commands/print-form.md)..

#### Variáveis e conjuntos do sistema 

Se o usuário clicar em OK em ambas caixas de diálogo, a variável sistema OK toma o valor 1\. Do contrário, a variável sistema OK toma o valor 0\. 

#### Ver também 

[OPEN PRINTING JOB](open-printing-job.md)  
[PAGE BREAK](page-break.md)  
[Print form](../commands/print-form.md)  
[SET PRINT PREVIEW](set-print-preview.md)  