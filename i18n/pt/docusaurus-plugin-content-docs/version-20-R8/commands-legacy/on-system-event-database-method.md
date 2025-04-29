---
id: on-system-event-database-method
title: On System Event database method
slug: /commands/on-system-event-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On System Event database method.Syntax-->$event -> Método base de dados On System Event<!-- END REF-->
<!--REF #_command_.On System Event database method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| $event | Integer | &#8592; | Código do evento |

<!-- END REF-->

## Descrição 

<!--REF #_command_.On System Event database method.Summary-->O método **Método base de dados On System Event** é chamado toda vez que ocorre um evento sistema.<!-- END REF--> Isto é para todos os ambientes 4D: 4D (todos os modos) e 4D Server, assim como as aplicações 4D compiladas e fusionadas com 4D Volume Desktop.

Para processar um evento, deve provar o valor do parâmetro $event no interior do método e compará-lo com una das seguintes constantes do tema *Eventos da base de dados*:

| Constante                      | Tipo          | Valor | Comentário                             |
| ------------------------------ | ------------- | ----- | -------------------------------------- |
| On application background move | Inteiro longo | 1     | A aplicação 4D passa em segundo plano  |
| On application foreground move | Inteiro longo | 2     | A aplicação 4D passa ao primeiro plano |

Estes eventos são gerados quando a aplicação 4D muda de nível, sem importar a ação do usuário que gera esta mudança. Por exemplo: 

* clique na janela da aplicação ou de outra aplicação,
* seleção utilizando o atalho de teclado **Alt+Tab** (Windows) ou **Comando+Tab** (macOS),
* seleção do comando **Ocultar** no dock (macOS),
* clique no ícone da aplicação no dock ou na barra de tarefas,
* clique no botão minimizar da janela principal (Windows).

É completamente necessário declarar o parâmetro $event (inteiro longo) no método base. A estrutura do código do método base vai ser então:

```4d
  // Método base On System Event
 
 #DECLARE($event : Integer)
 Case of
    :($event=On application background move)
  //Fazer alguma coisa
    :($event=On application foreground move)
  //Fazer outra coisa
 End case
```
