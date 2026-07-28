---
id: qr-set-totals-spacing
title: QR SET TOTALS SPACING
slug: /commands/qr-set-totals-spacing
displayed_sidebar: docs
---

<!--REF #_command_.QR SET TOTALS SPACING.Syntax-->**QR SET TOTALS SPACING** ( *area* : Integer ; *subtotal* : Integer ; *valor* : Integer )<!-- END REF-->
<!--REF #_command_.QR SET TOTALS SPACING.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referência da área |
| subtotal | Integer | &#8594; | Nº de subtotal |
| valor | Integer | &#8594; | 0=sem espaço, 32000=insere um salta de página, >0=espaço adicionado ao topo da quebra de nível, <0=incremento proporcional |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|2003|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.QR SET TOTALS SPACING.Summary-->O comando QR SET TOTALS SPACING permite definir um espaço sobre a linha de subtotal.<!-- END REF--> Aplica unicamente ao modo lista.  
  
*area* é a referência da área do relatório rápido.  
*subtotal* é o nível do subtotal (ou de quebra) a ser modificado.  
  
*valor* define o valor do espaço:  
  
 \* Se *valor* é igual a 0, não se adiciona nenhum espaço.  

 \* Se *valor* é igual a 32000, se adiciona um salto de página.  
 \* Se *valor* é um valor positivo, expressa o espaço a adicionar em píxels.  
 \* Se *valor* é um valor negativo, expressa o espaço como uma porcentagem da linha de subtotal. Por exemplo, o valor -100 definirá um espaço debaixo da linha do subtotal correspondente a 100% da altura da linha.  
  
**Nota**: se o espaço debaixo da linha de subtotal “empurra” a linha a seguinte página, não será inserido espaço sobre a linha nessa página.  
  
Se passa um número de *area* inválido, se gera o erro -9850.  
Se o parâmetro *subtotal*, é incorreto, se gera o erro -9852.

## Ver também 

[QR GET TOTALS SPACING](../commands/qr-get-totals-spacing)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 761 |
| Thread-seguro | no |
| Modificar variáveis | error |


