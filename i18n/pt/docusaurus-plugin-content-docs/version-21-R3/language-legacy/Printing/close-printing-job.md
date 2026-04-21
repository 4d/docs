---
id: close-printing-job
title: CLOSE PRINTING JOB
slug: /commands/close-printing-job
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE PRINTING JOB.Syntax-->**CLOSE PRINTING JOB**<!-- END REF-->
<!--REF #_command_.CLOSE PRINTING JOB.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|11 SQL|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.CLOSE PRINTING JOB.Summary-->O comando CLOSE PRINTING JOB permite fechar o trabalho de impressão previamente aberto pelo comando [OPEN PRINTING JOB](../commands/open-printing-job) e enviar à impressora atual o documento de impressão eventualmente construído.<!-- END REF-->

Quando tiver executado este comando, a impressora novamente está disponível para outros trabalhos de impressão.

**Nota de compatibilidade:** A partir de 4D v20 R4, trabalhos de impressão não bloqueiam novos projetos. Para saber mais veja [Non-blocking printing option](../../settings/compatibility.md) nas configurações.

## Ver também 

[OPEN PRINTING JOB](../commands/open-printing-job)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 996 |
| Thread-seguro | no |


