---
id: is-waiting-mouse-up
title: Is waiting mouse up
slug: /commands/is-waiting-mouse-up
displayed_sidebar: docs
---

<!--REF #_command_.Is waiting mouse up.Syntax-->**Is waiting mouse up**  : Boolean<!-- END REF-->
<!--REF #_command_.Is waiting mouse up.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | TRUE se o objeto estiver esperando por um evento mouse up. De outro modo, false. |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is waiting mouse up.Summary-->**Tema:** Eventos formulário

O comando **Is waiting mouse up** devolve **True** depois de que o objeto atual tenha sido clicado e o botão do mouse não tenha sido liberado, e quando o diálogo ainda tem o foco.<!-- END REF--> Deve ser chamado desde o método de objeto do objeto atual. 

O comando devolve **False** nos seguintes casos:

* não se chama a partir de um método de objeto
* ou não foi disparado o evento On Clicked no objeto
* ou a caixa de diálogo perdeu o foco.

Este comando deve ser utilizado junto com . Lhe permite sincronizar o estado interno do objeto de formulário com a aplicação global. Basicamente, permite a seu código manejar o caso onde o usuario clicou e começou a mover algo dentro de uma imagem objeto de formulário, e esta ação é interrompida por um evento externo, como um quadro de diálogo de alerta. Neste caso, o estado interno do objeto pode ser suspenso de forma indefinida devido a que se espera um evento mouse up que não ocorrerá. Para abordar este problema, deve proteger o código de movimento do mouse com um comando **Is waiting mouse up** o que assegura que seja executado em um contexto válido.

#### Exemplo 

O código abaixo pode ser usado para gerenciar uma propriedade de tracking de mouse em um objeto imagem:

```4d
  //Método objeto do objeto imagem
 var vLtracking : Integer //marque para modo tracking
 Case of
    :(Form event code=On Clicked)
       If(Is waiting mouse up) //o botão mouse ainda não foi liberado
          vLtracking:=1 //estamos em modo tracking
  //... Escrever aqui o código de inicialização para a propriedade tracking
       End if
    :(Form event code=On Mouse Move)
       If(vLtracking=1) //estamos em modo tracking
          If(Not(Is waiting mouse up)) //nunca terá o mouse up
             vLtracking:=0 //pare o modo tracking
  //... Escrever aqui o código para manejar ou cancelar a ação de tracking do usuário
          Else //o objeto ainda espera por um mouse up
  //... Escrever aqui o código para tracking
          End if
       End if
    :(Form event code=On Mouse Up) //o botão mouse foi liberado
  //... Escrever aqui o código para completar a ação tracking
       vLtracking:=0 //fim do modo tracking
 End case
```

#### Ver também 

[Form event code](form-event-code.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1422 |
| Thread-seguro | &check; |
| Proibido no servidor ||


