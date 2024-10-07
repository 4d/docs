---
id: open-datastore
title: Open datastore
slug: /commands/open-datastore
displayed_sidebar: docs
---

<!--REF #_command_.Open datastore.Syntax-->**Open datastore** ( *infoConexao* ; *localID* ) -> Resultado<!-- END REF-->
<!--REF #_command_.Open datastore.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| infoConexao | Object | &srarr; | propriedades conexão usadas para alcançar datastore remota |
| localID | Text | &srarr; | ID a atribuir ao datastore aberto na aplicação local (obrigatório) |
| Resultado | Object | &larr; | Objeto Datastore |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Open datastore.Summary-->**Documentação mudou de lugar** 

A documentação dessa seção foi atualizada e movida para *developer.<!-- END REF-->4d.com*.

O comando **Open datastore** conecta a aplicação ao banco de dados 4D identificada pelo parâmetro *infoConexao* e devolve um objeto datastore correspondente associado ao alias local *localID*.

#### Ver também 

*Ambiente 4D*  
[ds](ds.md)  