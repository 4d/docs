---
id: open-printing-job
title: OPEN PRINTING JOB
slug: /commands/open-printing-job
displayed_sidebar: docs
---

<!--REF #_command_.OPEN PRINTING JOB.Syntax-->**OPEN PRINTING JOB**<!-- END REF-->
<!--REF #_command_.OPEN PRINTING JOB.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.OPEN PRINTING JOB.Summary-->O comando OPEN PRINTING JOB abre uma tarefa de impressão e empilha todas as ordens de impressão executadas até que se chame o comando [CLOSE PRINTING JOB](close-printing-job.md).<!-- END REF--> Este comando lhe permite controlar os trabalhos de impressão e, mais particularmente, ter certeza que nenhuma tarefa de impressão "parasita" possa ser inserida em uma sequência de impressão.

O comando OPEN PRINTING JOB pode ser utilizado com todos os comandos de impressão 4D, os comandos do editor de relatórios rápidos, e os comandos de impressão dos plug-ins 4D Write e 4D View.

Quando um trabalho de impressão for local ao processo, cada processo tem suas proprias configurações de impressão (opções de impressão, impressora atual, etc). Várias impressões podem ser abertas ao mesmo tempo em 4D..

Deve chamar ao comando [CLOSE PRINTING JOB](close-printing-job.md) para determinar o trabalho de impressão e enviar o documento de impressão a impressora. Se omitir este comando, o documento de impressão permanecerá na pilha

OPEN PRINTING JOB utiliza os parâmetros de impressão atuais (parâmetros padrão ou definidos através dos comandos *\_o\_PAGE SETUP* ou [SET PRINT OPTION](set-print-option.md)). Os comandos que modificam os parâmetros de impressão devem ser chamados antes de OPEN PRINTING JOB. Do contrário, um erro é gerado (excepción: Orientation option pode ser chamado pelo comando [SET PRINT OPTION](set-print-option.md) dentro de um trabalho de impressão).

**Nota de compatibilidade:** A partir de 4D v20 R4, trabalhos de impressão não bloqueiam nos novos projetos. Para saber mais veja [Non-blocking printing option](https://developer.4d.com/docs/settings/compatibility/) .

#### Variáveis e conjuntos do sistema 

A variável sistema OK se estabelece em 1 se o trabalho de impressão foi aberto com sucesso. Senão, leva o valor 0, por exemplo nos casos:

* se o trabalho tiver sido cancelado pelo usuário
* em Windows, o formato de vista prévia de impressão selecionado não está disponíve

#### Ver também 

[CLOSE PRINTING JOB](close-printing-job.md)  