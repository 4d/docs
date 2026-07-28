---
id: count-menus
title: Count menus
slug: /commands/count-menus
displayed_sidebar: docs
---

<!--REF #_command_.Count menus.Syntax-->**Count menus** ( *processo* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.Count menus.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#8594; | Número de referência de processo |
| Resultado | Integer | &#8592; | Número de menus da barra de menus atual |
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

<!--REF #_command_.Count menus.Summary-->O comando Count menus devolve o número de menus presentes na barra de menus.<!-- END REF-->

Se omitir o parâmetro *processo*, Count menus é aplicada a barra de menus do processo atual. Do contrário, Count menus é aplicada a barra de menus do processo cujo número de referência se passa em *processo*. 

## Ver também 

[Count menu items](../commands/count-menu-items)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 404 |
| Thread-seguro | no |
| Proibido no servidor ||


