---
id: contextual-click
title: Contextual click
slug: /commands/contextual-click
displayed_sidebar: docs
---

<!--REF #_command_.Contextual click.Syntax-->**Contextual click**  : Boolean<!-- END REF-->
<!--REF #_command_.Contextual click.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | Verdadeiro se detectado um clique contextual, caso contrario Falso |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Contextual click.Summary-->O comando Contextual click retorna Verdadeiro se foi realizado um clique contextual:

* Em Windows e Mac OS, os cliques contextuais são realizados com o botão direito do mouse.<!-- END REF-->
* Em Mac OS, os cliques contextuais também podem ser gerados utilizando a combinação **Controle+clique**.

Este comando deve ser utilizado só no contexto do evento de formulário On clicked. Portanto é necessário verificar em modo Desenho que o evento tenha sido selecionado corretamente nas propriedades do formulário ou do objeto específico. 

#### Exemplo 

Este método, combinado com uma área de rolagem, lhe permite modificar o valor de um elemento array utilizando um menu contextual: 

```4d
 If(Contextual click)
    If(Pop up menu("True;False")=1)
       meuArray{meuArray}:="True"
    Else
       meuArray{meuArray}:="False"
    End if
 End if
```

#### Ver também 

[Form event code](form-event-code.md)  
[Right click](right-click.md)  