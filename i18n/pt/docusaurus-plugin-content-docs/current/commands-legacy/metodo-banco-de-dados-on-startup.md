---
id: metodo-banco-de-dados-on-startup
title: Metodo banco de dados On Startup
slug: /commands/metodo-banco-de-dados-on-startup
displayed_sidebar: docs
---

<!--REF #_command_.Metodo banco de dados On Startup.Syntax-->**Método banco de dados On Startup**<!-- END REF-->
<!--REF #_command_.Metodo banco de dados On Startup.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.Metodo banco de dados On Startup.Summary-->O Método banco de dados On Startup é chamada uma vez que se abra um banco.<!-- END REF-->

Isso ocorre nos seguintes ambientes 4D:

* 4D em modo local
* 4D em modo remoto (do lado do cliente, uma vez a conexão tenha sido aceita pelo 4D Server)
* Aplicação 4D compilada e mesclada com 4D Volume Desktop

**Nota**: o Método banco de dados On Startup NÃO é invocado por 4D Server.

O Método banco de dados On Startup es invocado automaticamente por 4D; diferentemente dos métodos de projeto, você não pode chamar este método por programação. Entretanto, pode ser executado desde o editor de métodos. Também pode utilizar subrotinas.

O Método banco de dados On Startup é perfeito para:

* Inicializar variáveis interprocesso que utilizará durante toda a sessão de trabalho.
* Iniciar processos automaticamente quando abre um banco.
* Carregar preferências ou parâmetros guardados durante a sessão de trabalho anterior.
* Evitar a abertura do banco se não se cumprirem uma condição (por exemplo, se faltar um recurso do sistema) chamando explicitamente [QUIT 4D](quit-4d.md).
* Realizar outras ações que deseja executar automaticamente cada vez que abra um banco.
No entanto, lhe recomendamos NÃO lançar trabalhos de impressão desde o **Método banco de dados On Startup**. 

#### Exemplo 

Veja o exemplo na seção [Semaphore](semaphore.md).

#### Ver também 

[Método banco de dados On Exit](metodo-banco-de-dados-on-exit.md)  
*Métodos de banco de dados*  
[QUIT 4D](quit-4d.md)  