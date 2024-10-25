---
id: wp-print
title: WP PRINT
slug: /WritePro/commands/wp-print
displayed_sidebar: docs
---

<!--REF #_command_.WP PRINT.Syntax-->**WP PRINT** ( *wpDoc* {; *modoImpr*} )<!-- END REF-->
<!--REF #_command_.WP PRINT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| wpDoc | Object | &#8594;  | Nome do documento 4D Write Pro |
| modoImpr | Integer | &#8594;  | Modo de impressão para o documento 4D Write Pro: 0 (normal) = modo 4D Write Pro, 1 = HTML WYSWYG |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.WP PRINT.Summary-->O comando **WP PRINT** lança uma tarefa de impressão para o documento 4D Write Pro especificado em *wpDoc* (ou agrega o documento ao trabalho de impressão atual se for chamado entre [OPEN PRINTING JOB](../../commands-legacy/open-printing-job.md) e [CLOSE PRINTING JOB](../../commands-legacy/close-printing-job.md)).<!-- END REF--> **WP PRINT** utiliza a configuração de impressão definida pelos comandos 4D [PRINT SETTINGS](../../commands-legacy/print-settings.md) ou [SET PRINT OPTION](../../commands-legacy/set-print-option.md), exceto para as margens das páginas que sempre se baseiam na configuração da página do documento 4D Write Pro. **WP PRINT** utiliza as opções atuais de configuração de página (como o tamanho e orientação de página), ou os do documento se [WP USE PAGE SETUP](wp-use-page-setup.md) for chamado anteriormente.

O parâmetro opcional *modoImp* pode ser utilizado para estabelecer a vista WYSIWYG HTML para as saídas de impressão. Pode passar uma das seguintes constantes do tema "4D Write Pro":

| Constante                       | Tipo          | Valor | Comentário                                                                                                            |
| ------------------------------- | ------------- | ----- | --------------------------------------------------------------------------------------------------------------------- |
| wk 4D Write Pro layout          | Inteiro longo | 0     | Layout 4D Write Pro padrão, que pode incluir atributos de estilo específicos                                          |
| wk do not recompute expressions | Inteiro longo | 2     | Especifica que todas as expressões em um documento ou variável não voltem a ser calculadas para imprimir ou exportar. |
| wk html wysiwyg                 | Inteiro longo | 1     | Neste formato, os atributos avançados 4D Write Pro que não são compatíveis com todos os navegadores são eliminados    |
| wk recompute expressions        | Inteiro longo | 0     | Especifica que todas as expressões no documento voltem a ser calculadas antes de imprimir ou congelar. (valor padrão) |

Se for omitido *modoImp*, o formato normal 4D Write Pro (0) é utilizado de forma pré-determinada.

**Nota:** Quando imprimir com **WP PRINT**, os documentos 4D Write Pro são sempre impressos em modo de vista Página, qualquer que seja a propriedade de Vista estabelecida para a área (ver *Configurar propriedades de Vista*).

Nota de compatibilidade: a capa de impressão herdada baseada em GDI (que pode ser definida utilizando o comando [SET PRINT OPTION](../../commands-legacy/set-print-option.md)) é obsoleta e não deve ser utilizada com WP PRINT, já que pode provocar artefatos de renderização. É recomendado utilizar unicamente a capa de impressão padrão com este comando.

#### Exemplo 

Se quiser imprimir uma área 4D Write Pro em formato padrão ou wysiwyg HTML em função do valor de uma variável:

```4d
  // impressão em modo wysiwyg HTML ou 4D Write Pro padrão
 If(rb_htmlwysiwyg=1)
    WP PRINT(writeProDoc;wk html wysiwyg)
 Else
    WP PRINT(writeProDoc;wk 4D Write Pro layout)
 End if
```

#### Ver também 

[WP Get position](wp-get-position.md)  
[WP USE PAGE SETUP](wp-use-page-setup.md)  