---
id: get-field-titles
title: GET FIELD TITLES
slug: /commands/get-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD TITLES.Syntax-->**GET FIELD TITLES** ( *tabela* : Table ; *titulosCampos* : Text array ; *numCampos* : Integer array )<!-- END REF-->
<!--REF #_command_.GET FIELD TITLES.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594; | Tabela para qual você deseja encontrar os nomes dos campos |
| titulosCampos | Text array | &#8592; | Nomes atuais dos campos |
| numCampos | Integer array | &#8592; | Números de Campos |
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

<!--REF #_command_.GET FIELD TITLES.Summary-->O comando GET FIELD TITLES preenche os arrays *titulosCampos* e *numCampos* com os nomes e os números dos campos da *Tabela*.<!-- END REF--> Os conteúdos desses dois arrays estão sincronizados.  

Se o comando [SET FIELD TITLES](../commands/set-field-titles) for chamado durante a sessão, GET FIELD TITLES retorna apenas os nomes “modificados” e os números dos campos definidos utilizando este comando.  
  
Do contrário, GET FIELD TITLES retorna os nomes dos campos do banco definidos na janela de Estrutura.  
  
Em ambos casos, o comando não retorna campos invisíveis.

## Ver também 

[GET TABLE TITLES](../commands/get-table-titles)  
[SET FIELD TITLES](../commands/set-field-titles)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 804 |
| Thread-seguro | no |


