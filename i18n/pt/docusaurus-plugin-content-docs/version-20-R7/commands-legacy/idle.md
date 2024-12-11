---
id: idle
title: IDLE
slug: /commands/idle
displayed_sidebar: docs
---

<!--REF #_command_.IDLE.Syntax-->**IDLE**<!-- END REF-->
<!--REF #_command_.IDLE.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.IDLE.Summary-->O comando IDLE está desenhado para ser utilizado unicamente com o compilador.<!-- END REF--> Este comando é utilizado apenas em bancos compilados nas quais os métodos definidos pelo usuário são escritos de maneira que não são chamados ao motor de 4D. Por exemplo, se um método tem um loop For na qual não se executam comandos 4D, o loop não pode ser interrompido por um processo instalado por [ON EVENT CALL](on-event-call.md), e o usuário também não pode mudar a outra aplicação. Neste caso, deve inserir IDLE para permitir que 4D intercepte os eventos. Se não deseja interrupções, omita IDLE.

#### Exemplo 

No seguinte Exemplo, o loop não terminaria nunca em um banco compilado sem chamar a IDLE:

```4d
  // Método de projeto Fazer alguma coisa
 ON EVENT CALL("METODO EVENTO")
 ◊vbParar:=False
 MESSAGE("Processando..."+Char(13)+"Pressione qualquer tecla para interromper...")
 Repeat
  // Fazer algum processo que não envolva um comando 4D
    IDLE
 Until(◊vbParar)
 ON EVENT CALL("")
```

com:

```4d
  // Método de projeto METODO EVENTO
 If(Undefined(KeyCode))
    KeyCode:=0
 End if
 If(KeyCode#0)
    CONFIRM("Está seguro de querer deter esta operação?")
    If(OK=1)
       ◊vbParar:=True
    End if
 End if
```

#### Ver também 

*Comandos de Compilação*  
[ON EVENT CALL](on-event-call.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 311 |
| Thread-seguro | &check; |
| Proibido no servidor ||


