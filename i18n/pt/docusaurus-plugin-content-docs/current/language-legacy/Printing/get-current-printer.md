---
id: get-current-printer
title: Get current printer
slug: /commands/get-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.Get current printer.Syntax-->**Get current printer**  : Text<!-- END REF-->
<!--REF #_command_.Get current printer.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome da impressora atual |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|15 R5|Modificado|
|2003|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Get current printer.Summary-->O comando Get current printer devolve o nome da impressora atual definida na aplicação 4D.<!-- END REF--> Como padrão, ao iniciar 4D, a impressora atual é a impressora definida no sistema.

Se a impressora atual for administrada utilizando um servidor de impressora (spooler), é devolvida a rota de acesso completa (em Windows) ou o nome do spooler (em Mac OS).

Para obter a lista de impressoras disponíveis assim como informação adicional, utilize o comando [PRINTERS LIST](../commands/printers-list) . Para modificar la impressora atual, utilize o comando [SET CURRENT PRINTER](../commands/set-current-printer)

**Nota:** Quando a constante Generic PDF driver for usada com [SET CURRENT PRINTER](../commands/set-current-printer), [Get current printer](../commands/get-current-printer) retorna "\_4d\_pdf\_printer" ou o nome do PDF driver

## Gestão de erros 

Se não tiver uma impressora instalada, um erro é gerado

## Ver também 

[PRINTERS LIST](../commands/printers-list)  
[SET CURRENT PRINTER](../commands/set-current-printer)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 788 |
| Thread-seguro | no |


