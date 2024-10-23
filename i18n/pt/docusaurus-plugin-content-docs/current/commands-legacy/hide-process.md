---
id: hide-process
title: HIDE PROCESS
slug: /commands/hide-process
displayed_sidebar: docs
---

<!--REF #_command_.HIDE PROCESS.Syntax-->**HIDE PROCESS** ( *processo* )<!-- END REF-->
<!--REF #_command_.HIDE PROCESS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594;  | Número de processo ou processo a ocultar |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.HIDE PROCESS.Summary-->HIDE PROCESS oculta todas as janelas que pertencem ao *processo*.<!-- END REF--> Todos os elementos de interface de *processo* se ocultam até o seguinte [SHOW PROCESS](show-process.md "SHOW PROCESS"). A barra de menus do processo também se oculta. Isso significa que a abertura de uma janela enquanto o processo está oculto não provocará nenhuma mudança na visualização em tela. Se o processo já estiver oculto, o comando não tem nenhum efeito.  

A única exceção a esta regra é a janela do depurador. Se a janela do depurador for mostrada quando *processo* é um processo oculto, *processo* é mostrado e passa ao primeiro plano do processo.  
  
Se não quer que um *processo* se mostre quando for criado, HIDE PROCESS deve ser o primeiro comando no método de processo. Os processos Usuário/Menus personalizados e os processos de gestão da cachê não podem ser ocultados utilizando este comando.  
  
Ainda que um processo esteja oculto, o processo está ainda em execução.

#### Exemplo 

O exemplo a seguir oculta todas as janelas que pertencem ao processo atual:

```4d
 HIDE PROCESS(Current process)
```

#### Ver também 

[Process state](process-state.md)  
[SHOW PROCESS](show-process.md)  