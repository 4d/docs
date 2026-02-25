---
id: get-printed-height
title: Get printed height
slug: /commands/get-printed-height
displayed_sidebar: docs
---

<!--REF #_command_.Get printed height.Syntax-->**Get printed height**  : Integer<!-- END REF-->
<!--REF #_command_.Get printed height.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Posição do marcador |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|6.8.1|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.Get printed height.Summary-->O comando Get printed height devolve a altura global (em píxels) da seção impressa pelo comando [Print form](../commands/print-form).<!-- END REF-->

O valor devolvido estará entre 0 (a borda superior da página) e a altura total devolvida pelo comando [GET PRINTABLE AREA](../commands/get-printable-area) (o tamanho máximo da área de impressão). 

Se imprime uma nova seção utilizando o comando [Print form](../commands/print-form) , a altura da nova seção se adiciona a este valor. Se a área de impressão disponível for insuficiente para conter esta seção, é gerado uma nova página e o valor devolvido é 0.

As margens de impressão direita e esquerda não influem no valor devolvido, diferente das margens inferior e superior (as quais podem ser definidas utilizando o comando [SET PRINTABLE MARGIN](../commands/set-printable-margin) ).

**Nota:** para maior informação sobre gestão de impressão e terminologia em 4D, consulte a descrição do comando [GET PRINTABLE MARGIN](../commands/get-printable-margin).

## Ver também 

[GET PRINTABLE AREA](../commands/get-printable-area)  
[Print form](../commands/print-form)  
[SET PRINTABLE MARGIN](../commands/set-printable-margin)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 702 |
| Thread-seguro | no |



