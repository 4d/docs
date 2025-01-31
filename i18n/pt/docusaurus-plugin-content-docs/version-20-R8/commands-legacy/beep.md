---
id: beep
title: BEEP
slug: /commands/beep
displayed_sidebar: docs
---

<!--REF #_command_.BEEP.Syntax-->**BEEP**<!-- END REF-->
<!--REF #_command_.BEEP.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BEEP.Summary-->O comando BEEP faz com que o PC ou Macintosh gerem um beep.<!-- END REF--> Seu computador (em Windows ou Macintosh) pode emitir um som diferente a um beep, dependendo do som selecionado no painel de controle de som.  

**Advertência**: não chame BEEP desde um processo de conexão Web, porque o beep será produzido na máquina servidor Web 4D e não a máquina do navegador Web.

#### Exemplo 

No exemplo abaixo, se uma pesquisa não encontrar nenhum registro, um bip é emitido, e aparece uma mensagem de alerta:

```4d
 QUERY([Clientes];[Clientes]Nome=$vsNomeaBuscar)
 If(Records in selection([Clientes])=0)
    BEEP
    ALERT("Não há nenhum cliente com esse nome.")
 End if
```

#### Ver também 

[PLAY](play.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 151 |
| Thread-seguro | &check; |


