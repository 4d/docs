---
id: set-timer
title: SET TIMER
slug: /commands/set-timer
displayed_sidebar: docs
---

<!--REF #_command_.SET TIMER.Syntax-->**SET TIMER** ( *ticCont* )<!-- END REF-->
<!--REF #_command_.SET TIMER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| ticCont | Integer | &#8594;  | Número de tics |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET TIMER.Summary-->O comando SET TIMER permite ativar o evento de formulário On Timer e fixar, para o processo e formulário atual, o número de tics (1 tic = 1/60 de segundo) entre cada evento de formulário On Timer.<!-- END REF--> 

**Nota:** para maior informação sobre este evento de formulário, consulte a descrição do comando [Form event](../commands/form-event.md "Form event").

Este comando não terá efeito se for chamado num contexto no qual não é mostrado um formulário.

**Nota:** quando o comando SET TIMER será executado no contexto de um sub-formulário (método de formulário do sub-formulário), é gerado o evento On Timer no sub-formulário e não ao nível do formulário pai. 

Se passa -1 no parâmetro *ticCont*, o comando ativará o evento de formulário On Timer "logo que seja possível", em outras palavras, assim que aplicação 4D tome o controle do administrador de eventos. Este principio permite assegurar que um formulário é mostrado completamente antes de iniciar um processo (fluidez da aplicação).

Para desativar por programação o disparador do evento de formulário On Timer, chame novamente a SET TIMER e passe 0 em *ticCont*.

#### Exemplo 

Imaginemos que você queira, quando um formulário aparece em tela, que o computador faça um bipe a cada três segundos. Pra fazer isso, escreva o seguinte método de formulário: 

```4d
 If(FORM Event=On Load)
    SET TIMER(60*3)
 End if
 
 If(Form event code=On Timer)
    BEEP
 End if
```

#### Ver também 

[Form event code](../commands/form-event-code.md)  
[REDRAW](redraw.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 645 |
| Thread-seguro | &cross; |


