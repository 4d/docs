---
id: clickcount
title: Clickcount
slug: /commands/clickcount
displayed_sidebar: docs
---

<!--REF #_command_.Clickcount.Syntax-->**Clickcount**  : Integer<!-- END REF-->
<!--REF #_command_.Clickcount.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número de cliques consecutivos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Clickcount.Summary-->O comando **Clickcount** devolve, no contexto de um evento clique, o número de vezes que o usuário fez clique de maneira repetida com o mesmo botão do mouse.<!-- END REF--> Normalmente, este comando devolve 2 para um clique duplo. 

Este comando lhe permite detectar um duplo clique nos cabeçalhos ou rodapés de list box e igualmente gerenciar as sequências de triplos cliques ou mais.

Cada clique com um botão do mouse gera um evento clique separado. Por exemplo, se um usuário clica duas vezes, um evento é gerado para o primeiro clique no qual **Clickcount** devolve 1; logo outro evento é gerado pelo segundo clique, no qual **Clickcount** devolve 2.

Este comando só deve ser utilizado no contexto do evento formulário On Clicked, On Header Click ou On Footer Click. Portanto, é necessário verificar em modo Desenho que o evento correspondente foi selecionado corretamente nas propriedades do formulário e/ou para o objeto específico.

Quando ambos eventos formulário On Clicked e On Double Clicked estão ativados, a seguinte sequência será devolvida por **Clickcount**:

* 1 no evento On Clicked
* 2 no evento On Double Clicked
* 2+n no evento On Clicked

#### Exemplo 1 

A estrutura de código seguinte pode ser colocada em um cabeçalho de listbox para gerenciar cliques simples e duplos:

```4d
 Case of
    :(Form event code=On Header Click)
       Case of
          :(Clickcount=1)
             ... //single-click action
          :(Clickcount=2)
             ... //double-click action
       End case
 End case
```

#### Exemplo 2 

As etiquetas não são editáveis mas o são depois de um triplo-clique. Se deseja permitir aos usuários editar as etiquetas, pode escrever o método objeto seguinte:

```4d
 If(Form event code=On Clicked)
    Case of
       :(Clickcount=3)
          OBJECT SET ENTERABLE(*;"Label";True)
          EDIT ITEM(*;"Label")
    End case
 End if
```


#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1332 |
| Thread-seguro | &check; |
| Proibido no servidor ||


