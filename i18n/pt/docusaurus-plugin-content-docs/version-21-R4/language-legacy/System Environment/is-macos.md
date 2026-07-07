---
id: is-macos
title: Is macOS
slug: /commands/is-macos
displayed_sidebar: docs
---

<!--REF #_command_.Is macOS.Syntax-->**Is macOS** : Boolean<!-- END REF-->
<!--REF #_command_.Is macOS.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True se o sistema operacional = macOS, senão False |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|17|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Is macOS.Summary-->O comando **Is macOS** devolve True se o sistema operativo atual for macOS.<!-- END REF-->

## Exemplo 

Se quiser determinar se o sistema operativo atual for macOS:

```4d
 If(Is macOS)
    ALERT("It's macOS")
 Else
    ALERT("It's not macOS")
 End if
```

## Ver também 

[System info](../commands/system-info)  
[Is Windows](../commands/is-windows)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1572 |
| Thread-seguro | yes |


