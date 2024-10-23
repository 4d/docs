---
id: hide-tool-bar
title: HIDE TOOL BAR
slug: /commands/hide-tool-bar
displayed_sidebar: docs
---

<!--REF #_command_.HIDE TOOL BAR.Syntax-->**HIDE TOOL BAR**<!-- END REF-->
<!--REF #_command_.HIDE TOOL BAR.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.HIDE TOOL BAR.Summary-->O comando HIDE TOOL BAR  gerencia a visualização das barras de ferramentas personalizadas criadas pelo comando [Open form window](open-form-window.md) para o processo atual.<!-- END REF-->

Se uma janela barra de ferramentas foi criada pelo comando [Open form window](open-form-window.md) com a opção Toolbar form window, o comando oculta esta janela. Se a janela barra de ferramentas já estava oculta ou se nenhuma janela deste tipo foi criada, o comando não faz nada.

#### Exemplo 

Em OS X, foi definido uma barra de ferramentas personalizada e uma janela estandarte que tem a opção Has full screen mode Mac. Quando uma janela estandarte é maximizada por um usuário enquanto é mostrada a janela da barra de ferramentas, você não deseja que a barra de ferramentas sobrepõe a janela maximizada.

Para evitar isto, no evento formulário On Resize da janela estandarte, é necessário detectar quando a janela passa a modo tela completa e logo chamar **HIDE TOOL BAR**:

```4d
 Case of
    :(FORM Event=On Resize)
       GET WINDOW RECT($left;$top;$right;$bottom)
       If(Screen height=($bottom-$top))
          HIDE TOOL BAR
       Else
          SHOW TOOL BAR
       End if
 End case
```

#### Ver também 

[SHOW TOOL BAR](show-tool-bar.md)  