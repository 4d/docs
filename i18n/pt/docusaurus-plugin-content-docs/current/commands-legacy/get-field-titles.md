---
id: get-field-titles
title: GET FIELD TITLES
slug: /commands/get-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.GET FIELD TITLES.Syntax-->**GET FIELD TITLES** ( *tabela* ; *titulosCampos* ; *numCampos* )<!-- END REF-->
<!--REF #_command_.GET FIELD TITLES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para qual você deseja encontrar os nomes dos campos |
| titulosCampos | Text array | &#8592; | Nomes atuais dos campos |
| numCampos | Integer array | &#8592; | Números de Campos |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET FIELD TITLES.Summary-->O comando GET FIELD TITLES preenche os arrays *titulosCampos* e *numCampos* com os nomes e os números dos campos da *Tabela*.<!-- END REF--> Os conteúdos desses dois arrays estão sincronizados.  

Se o comando [SET FIELD TITLES](set-field-titles.md) for chamado durante a sessão, GET FIELD TITLES retorna apenas os nomes “modificados” e os números dos campos definidos utilizando este comando.  
  
Do contrário, GET FIELD TITLES retorna os nomes dos campos do banco definidos na janela de Estrutura.  
  
Em ambos casos, o comando não retorna campos invisíveis.

#### Ver também 

[GET TABLE TITLES](get-table-titles.md)  
[SET FIELD TITLES](set-field-titles.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 804 |
| Thread-seguro | &cross; |


