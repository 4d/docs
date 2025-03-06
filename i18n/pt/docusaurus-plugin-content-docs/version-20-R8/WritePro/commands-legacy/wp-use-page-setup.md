---
id: wp-use-page-setup
title: WP USE PAGE SETUP
slug: /WritePro/commands/wp-use-page-setup
displayed_sidebar: docs
---

<!--REF #_command_.WP USE PAGE SETUP.Syntax-->**WP USE PAGE SETUP** ( *docWP* )<!-- END REF-->
<!--REF #_command_.WP USE PAGE SETUP.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Nome do documento 4D Write Pro |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP USE PAGE SETUP.Summary-->O comando **WP USE PAGE SETUP** modifica as opções de impressão da página atual, baseado nos atributos de documento 4D Write Pro para o tamanho de página e a orientação.<!-- END REF--> Este comando deve ser chamado justo antes de [WP PRINT](wp-print.md) com o objetivo de sincronizar os parâmetros atuais de impressão da página com as opções de página de documento 4D Write Pro. 

Outras opções são definidas pelo comando 4D [PRINT SETTINGS](../../commands-legacy/print-settings.md). As opções de impressão atuais se estabelecem para toda a sessão 4D.

#### Exemplo 

Antes de imprimir um documento, que deseja restabelecer seu tamanho e orientação aos valores armazenados no documento:

```4d
 WP USE PAGE SETUP(writeProDoc)
```

#### Ver também 

[WP PRINT](wp-print.md)  