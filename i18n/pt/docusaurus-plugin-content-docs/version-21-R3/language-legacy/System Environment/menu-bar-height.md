---
id: menu-bar-height
title: Menu bar height
slug: /commands/menu-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Menu bar height.Syntax-->**Menu bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Menu bar height.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Altura (expressada em pixeles) da barra de menus (devolve zero se a barra de menus está oculta) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Menu bar height.Summary-->Menu bar height retorna a altura da barra menu, expressa em pixels.<!-- END REF-->

O comando retorna 0:

* se a barra menu estiver escondida
* em modo SDI em Windows, se for chamada de um processo sem uma janela formulário. Para saber mais sobre esse modo, veja a seção *Modo SDI em Windows*.

**Nota:** Quando a aplicação estiver rodando em modo SDI em Windows, **Menu bar height** retorna a altura de uma única linha de menu barra mesmo se a janela estiver estreitada ou reduzida e a barra menu tiver sido envolvida em duas ou mais linhas

## Ver também 

[HIDE MENU BAR](../commands/hide-menu-bar)  
[Menu bar screen](../commands/menu-bar-screen)  
[SHOW MENU BAR](../commands/show-menu-bar)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 440 |
| Thread-seguro | no |


