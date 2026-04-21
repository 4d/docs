---
id: tool-bar-height
title: Tool bar height
slug: /commands/tool-bar-height
displayed_sidebar: docs
---

<!--REF #_command_.Tool bar height.Syntax-->**Tool bar height**  : Integer<!-- END REF-->
<!--REF #_command_.Tool bar height.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Altura (expresso em pixels) da barra de ferramentas ou 0 se a barra de ferramentas estiver escondida |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|14 R5|Modificado|
|11 SQL|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Tool bar height.Summary-->O comando Tool bar height devolve a altura da barra de ferramentas visível atualmente, expressada em píxels.<!-- END REF--> Dependendo do contexto, pode ser a barra de ferramentas de modo Desenho 4D, ou uma barra de ferramentas personalizada criada com [Open form window](../commands/open-form-window) (a barra de ferramentas de modo Desenho se oculta automaticamente quando é mostrada uma barra de ferramentas personalizada).

Se não se mostrar nenhuma barra de ferramentas, o comando devolve 0.

## Ver também 

[HIDE TOOL BAR](../commands/hide-tool-bar)  
[Menu bar height](../commands/menu-bar-height)  
[SHOW TOOL BAR](../commands/show-tool-bar)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1016 |
| Thread-seguro | no |



