---
id: is-window-reduced
title: Is window reduced
slug: /commands/is-window-reduced
displayed_sidebar: docs
---

<!--REF #_command_.Is window reduced.Syntax-->**Is window reduced** ( *janela* : Integer ) : Boolean<!-- END REF-->
<!--REF #_command_.Is window reduced.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594; | Número de referência da janela |
| Resultado | Boolean | &#8592; | true se a janela for reduzida no taskbar ou no dock. Se não, false |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|20 R5|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Is window reduced.Summary-->O comando **Is window reduced** devolve **True** se a janela cujo número de referência se passar na *Janela* estiver atualmente reduzida na barra de tarefas (Windows) ou no dock (macOS), e **False** no caso contrário.<!-- END REF-->

## Ver também 

[Is window maximized](../commands/is-window-maximized)  
[REDUCE RESTORE WINDOW](../commands/reduce-restore-window)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1831 |
| Thread-seguro | no |


