---
id: on-host-database-event-database-method
title: On Host Database Event database method
slug: /commands/on-host-database-event-database-method
displayed_sidebar: docs
---

<!--REF #_command_.On Host Database Event database method.Syntax-->$1 -> On Host Database Event database method<!-- END REF-->
<!--REF #_command_.On Host Database Event database method.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| $1 | Integer | &#8592; | Código do evento |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.On Host Database Event database method.Summary-->O **On Host Database Event database method** permite aos recipientes 4D executar código quando se abre e fecha a base local.<!-- END REF-->  
  
**Nota**: Por razões de segurança, a execução deste método base deve ser autorizado explicitamente na base local. Para obter mais informação sobre este ponto, consulte o manual de *Desenho*.  
  
O **On Host Database Event database method** se executa automaticamente somente em bases utilizadas como recipientes de bases locais (quando se autoriza nas propriedades da base local). Se chama quando se produzem eventos relacionados com a abertura e feche da base local.  
  
Para processar um evento, deve provar o valor do parâmetro $1 no método, e comparar ele com uma das seguintes constantes, disponíveis no tema "*Eventos da base de dados*":  
  
| Constante                       | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                       |
| ------------------------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| On after host database exit     | Inteiro longo | 4     | O [Semaphore](semaphore.md) da base local acaba de terminar sua execução                                                                                                                                                                                                                         |
| On after host database startup  | Inteiro longo | 2     | O da base local acaba de terminar sua execução                                                                                                                                                                                                                                                   |
| On before host database exit    | Inteiro longo | 3     | A base local está fechando. O [Semaphore](semaphore.md) da base local ainda não foi chamado. <br/>O [Semaphore](semaphore.md) da base local não é chamado enquanto o [On Host Database Event database method](on-host-database-event-database-method.md) do recipiente esteja executando |
| On before host database startup | Inteiro longo | 1     | A base local foi iniciada. O da base local ainda não foi chamado. <br/>O método base On Startup da base local não é chamado enquanto o [On Host Database Event database method](on-host-database-event-database-method.md) do recipiente esteja executando                               |

Isto permite aos recipientes 4D carregar e guardar preferências ou estados de usuário relacionados com o funcionamento da base local.

#### Exemplo 

Exemplo de estrutura tipo de um método base On Host Database Event:

```4d
  // Método base On Host Database Event
 var $1 : Integer
 Case of
    :($1=On before host database startup)
  // colocar aqui o código a executar antes do método base "On Startup"
  // da base local
    :($1=On after host database startup)
  // colocar aqui o código a executar antes do método base "On Startup"
  // da base local
    :($1=On before host database exit)
  // colocar aqui o código a executar antes do método base "On Exit"
  // da base local
    :($1=On after host database exit)
  // colocar aqui o código a executar antes do método base "On Exit"
  // da base local
 End case
```
