---
id: on-startup-database-method
title: On Startup database method
slug: /commands/on-startup-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Startup database method.Syntax-->**Método banco de dados On Startup**<!-- END REF-->
<!--REF #_command_.On Startup database method.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

## 

<!--REF #_command_.On Startup database method.Summary-->O Método banco de dados On Startup é chamada uma vez que se abra um banco.<!-- END REF-->

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
* Evitar a abertura do banco se não se cumprirem uma condição (por exemplo, se faltar um recurso do sistema) chamando explicitamente [QUIT 4D](../commands/quit-4d).
* Realizar outras ações que deseja executar automaticamente cada vez que abra um banco.
No entanto, lhe recomendamos NÃO lançar trabalhos de impressão desde o **Método banco de dados On Startup**. 

## Exemplo 

Veja o exemplo na seção [Semaphore](../commands/semaphore).

## Ver também 

[Método banco de dados On Exit](../commands/metodo-banco-de-dados-on-exit)  
*Métodos de banco de dados*  
[QUIT 4D](../commands/quit-4d)  
