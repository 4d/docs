---
id: get-print-preview
title: Get print preview
slug: /commands/get-print-preview
displayed_sidebar: docs
---

<!--REF #_command_.Get print preview.Syntax-->**Get print preview**  : Boolean<!-- END REF-->
<!--REF #_command_.Get print preview.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True = Vista previa de impressão, <br/>False = Não vista previa de impressão |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Get print preview.Summary-->O comando **Get print preview** devolve True se o comando [SET PRINT PREVIEW](../commands/set-print-preview) foi chamado com o valor **True** no processo atual.<!-- END REF-->

Note que o usuário pode modificar esta opção antes de validar a caixa de diálogo. Para obter o modo final de impressão, deve utilizar o comando [Is in print preview](../commands/is-in-print-preview). 

## Ver também 

[Is in print preview](../commands/is-in-print-preview)  
[SET PRINT PREVIEW](../commands/set-print-preview)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1197 |
| Thread-seguro | no |


