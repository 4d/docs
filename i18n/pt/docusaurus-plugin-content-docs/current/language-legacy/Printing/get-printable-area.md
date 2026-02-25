---
id: get-printable-area
title: GET PRINTABLE AREA
slug: /commands/get-printable-area
displayed_sidebar: docs
---

<!--REF #_command_.GET PRINTABLE AREA.Syntax-->**GET PRINTABLE AREA** ( *altura* : Integer {; *largura* : Integer} )<!-- END REF-->
<!--REF #_command_.GET PRINTABLE AREA.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| altura | Integer | &#8592; | Altura da área de impressão |
| largura | Integer | &#8592; | Largura da área de impressão |
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

<!--REF #_command_.GET PRINTABLE AREA.Summary-->O comando GET PRINTABLE AREA devolve o tamanho em píxels da área de impressão nos parâmetros *altura* e *largura* ou tamanho.<!-- END REF--> Este tamanho depende dos parâmetros de impressão atuais, a orientação do papel, etc. 

O tamanho devolvido não varia de uma página a outra (depois de um salto de página, por exemplo). 

Associado ao comando [Get printed height](../commands/get-printed-height), este comando é útil para conhecer o número de píxels disponíveis para a impressão ou para centrar um objeto na página. 

**Nota:** para maior informação sobre gestão de impressão e terminologia em 4D, consulte a descrição do comando [GET PRINTABLE MARGIN](../commands/get-printable-margin). 

Para saber o tamanho total da página, pode:

* adicionar as margens oferecidas pelo comando [GET PRINTABLE MARGIN](../commands/get-printable-margin) aos valores devolvidos por este comando.
* ou utilizar a seguinte sintaxe:

```4d
 SET PRINTABLE MARGIN(0;0;0;0) // Definir a margem do papel
 GET PRINTABLE AREA(hPapel;wPapel) //Tamanho do papel
```

## Ver também 

[GET PRINTABLE MARGIN](../commands/get-printable-margin)  
[Print form](../commands/print-form)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 703 |
| Thread-seguro | no |



