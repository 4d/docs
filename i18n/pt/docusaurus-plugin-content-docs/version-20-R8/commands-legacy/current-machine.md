---
id: current-machine
title: Current machine
slug: /commands/current-machine
displayed_sidebar: docs
---

<!--REF #_command_.Current machine.Syntax-->**Current machine**  : Text<!-- END REF-->
<!--REF #_command_.Current machine.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Text | &#8592; | Nome do equipo na rede |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Current machine.Summary-->O comando Current machine devolve o nome de seu equipo, como está definido no painel de controle da rede.<!-- END REF-->

#### Exemplo 

Inclusive se não está correndo a versão cliente/servidor de 4D, sua aplicação pode incluir serviços de rede que necessitem que seu equipo esteja configurado corretamente. No Método de base On Startup de sua aplicação, pode escrever:

```4d
 If((Current machine="")|(Current system user=""))
  //Mostrar uma caixa de diálogo pedindo ao usuário configurar seus parâmetros de rede
 End if
```

#### Ver também 

[Current system user](current-system-user.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 483 |
| Thread-seguro | &check; |


