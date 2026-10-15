---
id: unregister-client
title: UNREGISTER CLIENT
slug: /commands/unregister-client
displayed_sidebar: docs
---

<!--REF #_command_.UNREGISTER CLIENT.Syntax-->**UNREGISTER CLIENT**<!-- END REF-->
<!--REF #_command_.UNREGISTER CLIENT.Params-->
<div class="no-index">

| Este comando não requer parâmetros |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6.5|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.UNREGISTER CLIENT.Summary-->O comando UNREGISTER CLIENT cancela o registro de uma máquina 4D Client.<!-- END REF--> O cliente deverá ter sido registrado pelo comando [REGISTER CLIENT](../commands/register-client).

**Nota:** O registro de um cliente 4D é cancelado automaticamente quando o usuário sai da aplicação. 

Se a máquina cliente não foi registrada anteriormente ou se o comando foi executado no 4D em modo local, o comando não faz nada.

## Exemplo 

Consulte o exemplo do comando [REGISTER CLIENT](../commands/register-client) .

## Variáveis e conjuntos do sistema 

Se o registro de um cliente é cancelado corretamente, a variável do sistema OK tem valor 1, do contrário tem valor 0.

## Ver também 

[EXECUTE ON CLIENT](../commands/execute-on-client)  
[GET REGISTERED CLIENTS](../commands/get-registered-clients)  
[REGISTER CLIENT](../commands/register-client)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 649 |
| Thread-seguro | no |
| Modificar variáveis | OK |


