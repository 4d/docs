---
id: qr-set-info-row
title: QR SET INFO ROW
slug: /commands/qr-set-info-row
displayed_sidebar: docs
---

<!--REF #_command_.QR SET INFO ROW.Syntax-->**QR SET INFO ROW** ( *area* : Integer ; *linha* : Integer ; *ocultar* : Integer )<!-- END REF-->
<!--REF #_command_.QR SET INFO ROW.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| area | Integer | &#8594; | Referência da área criada |
| linha | Integer | &#8594; | Designa a Linha |
| ocultar | Integer | &#8594; | 0=exibir, 1=ocultar |
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

<!--REF #_command_.QR SET INFO ROW.Summary-->O comando QR SET INFO ROW mostra/oculta a fila cuja referência se passa em *linha*.<!-- END REF-->  

*linha* designa a linha a modificar:

* se *linha* for igual a -1, o título do relatório se afeta,
* se *linha* for igual a -2, o detalhe do relatório se afeta,
* se *linha* for igual a -3, o total general do relatório se afeta,
* se *linha* for um inteiro positivo, designa a linha do subtotal correspondente.

Pode utilizar as constantes do tema *QR Filas para propriedades* para designar o elemento de linha (*qr title*\= -1, *qr detail*\=-2, *qr grand total*\=-3).  
  
*oculta* especifica se a linha está visível ou oculta:

* se *oculta* for igual a 1, a linha está oculta;
* se *oculta* for igual a 0, a linha é visível.

Se passa um número de área inválido, se gera o erro -9850.  
Se o parâmetro linha for incorreto, se gera o erro -9852.

## Exemplo 

A instrução a seguir oculta o conteúdo da linha detalhe: 

```4d
 QR SET INFO ROW(area;qr detail;1)
```

## Ver também 

[QR GET INFO COLUMN](../commands/qr-get-info-column)  
[QR Get info row](../commands/qr-get-info-row)  
[QR SET INFO COLUMN](../commands/qr-set-info-column)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 763 |
| Thread-seguro | no |
| Modificar variáveis | error |


