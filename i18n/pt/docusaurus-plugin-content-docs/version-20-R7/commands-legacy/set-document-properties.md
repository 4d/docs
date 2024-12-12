---
id: set-document-properties
title: SET DOCUMENT PROPERTIES
slug: /commands/set-document-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT PROPERTIES.Syntax-->**SET DOCUMENT PROPERTIES** ( *documento* ; *bloqueado* ; *invisivel* ; *criadoEm* ; *criadoAs* ; *modificadoEm* ; *modificadoAs* )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| documento | Text | &#8594;  | Nome do documento ou rota de acesso completa |
| bloqueado | Boolean | &#8594;  | Bloqueado (True) ou Desbloqueado (False) |
| invisivel | Boolean | &#8594;  | Invisível (True) ou Visível (False) |
| criadoEm | Date | &#8594;  | Data de criação |
| criadoAs | Time | &#8594;  | HOra de criação |
| modificadoEm | Date | &#8594;  | última modificação de data |
| modificadoAs | Time | &#8594;  | última hora modificada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET DOCUMENT PROPERTIES.Summary-->O comando SET DOCUMENT PROPERTIES modifica a informação do documento cujo nome ou rota de acesso se passar em *documento*.<!-- END REF-->  
  
Antes de chamar:

* Passe True em *bloqueado* para bloquear o documento. Um documento bloqueado não pode ser modificado. Passe False em *bloqueado*
* Passe True em *invisivel* para ocultar o documento. Passe False em *invisivel* para tornar visível o documento nas janelas do escritório.
* Passe a data e hora de criação do documento em *criadoEm* e *criadoAs*.
* Passe a data e hora da última modificação do documento em *modificadoEm* e *modificadoAs*.

As datas e horas de criação e última modificação são administradas pelo administrador de arquivos de seu sistema cada vez que cria ou acessa a um documento. Utilizando este comando, pode modificar estas propriedades em casos particulares. Ver o exemplo do comando [GET DOCUMENT PROPERTIES](get-document-properties.md).

#### Ver também 

[GET DOCUMENT PROPERTIES](get-document-properties.md)  