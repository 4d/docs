---
id: get-missing-table-names
title: GET MISSING TABLE NAMES
slug: /commands/get-missing-table-names
displayed_sidebar: docs
---

<!--REF #_command_.GET MISSING TABLE NAMES.Syntax-->**GET MISSING TABLE NAMES** ( *tabelasNaoEncontradas* )<!-- END REF-->
<!--REF #_command_.GET MISSING TABLE NAMES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabelasNaoEncontradas | Text array | &#8592; | Nomes de tabelas não encontradas no banco de dados |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.GET MISSING TABLE NAMES.Summary-->O comando GET MISSING TABLE NAMES retorna os nomes de todas as tabelas faltantes do banco no array *tabelaNaoEncontrada*.<!-- END REF-->

As tabelas não encontradas são tabelas cujos dados estão presentes no archivo de dados mas que não existem a nível da estrutura atual. Isso pode acontecer quando um archivo de dados é aberto com versões diferentes da estrutura. 

Geralmente, o cenário é o seguinte:  
  
* o desenvolvedor oferece uma estrutura com as tabelas A, B e C,
* o usuário adiciona tabelas personalizadas D e E, utilizando, por exemplo, os comandos  integrados de 4D, e salva os dados nessas tabelas,
* O desenvolvedor oferece uma nova versão da estrutura, que não contenha as tabelas D e E.  
Nesse caso, a versão usuário do banco ainda contém os dados das tabelas D e E, mas não são acessíveis. O comando GET MISSING TABLE NAMES devolverá os nomes "D" e "E".
Quando tiver identificado as tabelas faltantes do banco, pode reativá-las através do comando [REGENERATE MISSING TABLE](regenerate-missing-table.md).  
  
**Nota**: os dados das tabelas não encontradas são apagadas quando o arquivo de dados for encontrado (se as tabelas não forem regeneradas).

#### Ver também 

[REGENERATE MISSING TABLE](regenerate-missing-table.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1125 |
| Thread-seguro | &check; |


