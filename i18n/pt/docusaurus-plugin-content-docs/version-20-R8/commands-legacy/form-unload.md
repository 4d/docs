---
id: form-unload
title: FORM UNLOAD
slug: /commands/form-unload
displayed_sidebar: docs
---

<!--REF #_command_.FORM UNLOAD.Syntax-->**FORM UNLOAD**<!-- END REF-->
<!--REF #_command_.FORM UNLOAD.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM UNLOAD.Summary-->O comando **FORM UNLOAD** libera da memória o formulário atual designado utilizando o comando [FORM LOAD](../commands/form-load.md).<!-- END REF-->

Chamar este comando é necessário quando se utiliza o comando [FORM LOAD](../commands/form-load.md) fora do contexto de impressão (no caso da impressão, o formulário atual é novamente fechado de forma automática quando o comando for chamado [CLOSE PRINTING JOB](close-printing-job.md)).

#### Ver também 

[FORM LOAD](../commands/form-load.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1299 |
| Thread-seguro | &cross; |


