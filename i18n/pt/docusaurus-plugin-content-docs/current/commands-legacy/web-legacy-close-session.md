---
id: web-legacy-close-session
title: WEB LEGACY CLOSE SESSION
slug: /commands/web-legacy-close-session
displayed_sidebar: docs
---

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Syntax-->**WEB LEGACY CLOSE SESSION** ( *sessao* )<!-- END REF-->
<!--REF #_command_.WEB LEGACY CLOSE SESSION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| sessao | Text | &#8594;  | Sessão UUID |

<!-- END REF-->

#### Nota de compatibilidade 

<!--REF #_command_.WEB LEGACY CLOSE SESSION.Summary-->Este comando só pode ser utilizado com **sessões web herdadas**, disponíveis em bancos convertidos a partir de versões anteriores a 4D v18 R6\.<!-- END REF--> Se ignora quando se habilita o modo **sessões web escalonáveis** (recomendado em 4D v18 R6 e superiores). Para saber mais, consulte *Web Sessions Management (Legacy)*.

#### Descrição 

O comando **WEB LEGACY CLOSE SESSION** invalida a sessão existente designado pelo parâmetro *sessao*. Se a sessão não existe, o comando não fará nada.  
  
Quando este comando é chamado desde um processo web ou desde qualquer outro processo:

* a data de vencimento da cookie está definida em 0,
* ou [Método banco de dados On Web Legacy Close Session database method](metodo-banco-de-dados-on-web-legacy-close-session-database-method.md) é chamada, permitindo guardar a informação da sessão,
* as seleções se apagam, os registros se desbloqueiam e as variáveis se reiniciam.

Depois da execução deste comando, se um cliente web envia um pedido com uma cookie invalida, se abrirá uma nova sessão com uma nova cookie e será enviada.

**Nota:** No contexto da sessão 4D Mobil, o comando **WEB LEGACY CLOSE SESSION** fecha a sessão 4D Mobile cujo ID é passado no parâmetro *sessaoID*. Já que uma sessão 4D Mobile pode gerenciar diversos processos, este comando requisita todos os processos Web relacionados à sessão para fechar esta execução.

#### Ver também 

[Método banco de dados On Web Legacy Close Session database method](metodo-banco-de-dados-on-web-legacy-close-session-database-method.md)  
*Web Sessions Management (Legacy)*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1208 |
| Thread-seguro | &check; |


