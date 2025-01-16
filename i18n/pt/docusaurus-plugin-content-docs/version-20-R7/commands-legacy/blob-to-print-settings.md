---
id: blob-to-print-settings
title: BLOB to print settings
slug: /commands/blob-to-print-settings
displayed_sidebar: docs
---

<!--REF #_command_.BLOB to print settings.Syntax-->**BLOB to print settings** ( *confImpr* {; *params*} ) : Integer<!-- END REF-->
<!--REF #_command_.BLOB to print settings.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| confImpr | Blob | &#8594;  | BLOB que contém as configurações de Impressão |
| params | Integer | &#8594;  | 0 = restaura valores salvos para número de cópias e faixa de páginas 1 = reseta para os valores padrão |
| Resultado | Integer | &#8592; | código de estatus 1= operação bem sucedida, 0 = não há impressora atual, -1=parâmetros incorretos, 2=impressora mudada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.BLOB to print settings.Summary-->O comando **BLOB to print settings** substitui a configuração de impressão 4D atual pelos parâmetros armazenados no BLOB *confImpr*.<!-- END REF--> Este BLOB deve ter sido gerado pelo comando [Print settings to BLOB](print-settings-to-blob.md) ou pelo comando 4D Pack  4D Pack (ver abaixo).

O parâmetro *params* lhe permite definir como manejar o "número de cópias" e os ajustes básicos de "intervalo de páginas":

* Se passa 0 ou omite este parâmetro, os valores armazenados no BLOB são restaurados,
* Se passa 1, os valores se restabelecem aos valores predeterminados: o número de cópias se estabelecem em 1 e o intervalo de páginas se estabelece em "todas as páginas".

Os ajustes de impressão são aplicadas [ às configurações de impressão 4D](https://developer.4d.com/docs/settings/compatibility/), sempre e cuando nenhum comando como *\_o\_PAGE SETUP*, [SET PRINT OPTION](set-print-option.md) ou [PRINT SELECTION](print-selection.md) sem o parâmetro > os modifique. O conjunto de parâmetros se utiliza particularmente para os comandos [PRINT SELECTION](print-selection.md), [PRINT LABEL](print-label.md), [PRINT RECORD](print-record.md), [Print form](print-form.md) e [QR REPORT](qr-report.md), assim como para os comandos de menu de 4D, incluindo as do ambiente Desenho.

Os comandos [PRINT SELECTION](print-selection.md), [PRINT LABEL](print-label.md) e [PRINT RECORD](print-record.md) devem ser chamados com o parâmetro *\>* (se aplicado) para que os parâmetros definidos por **BLOB to print settings** se mantenham.

O comando devolve um dos seguintes códigos de estado:

* \-1: o BLOB é incorreto,
* 0: não está selecionada nenhuma impressora atual (neste caso, o comando não faz nada),
* 1: o BLOB foi carregado corretamente,
* 2: o BLOB foi carregado corretamente, mas o nome da impressora atual mudou(\*)  
**Nota:** Code (2) sempre se devolve se o BLOB foi criado pelo comando 4D Pack , mesmo se o nome da impressora não mudou de verdade, já que esta informação não foi incluida nos BLOBs 4D Pack.

(\*) As configurações dependem da impressora selecionada no momento em que o BLOB foi guardado. A aplicação destes valores em outra impressora é compatível se ambas as impressoras forem do mesmo modelo. Se as impressoras forem diferentes, só os parâmetros comuns serão restaurados

##### Windows / OS X 

O BLOB *confImp*  pode ser salvado e lido em ambas plataformas. Entretanto, mesmo se alguns ajustes de impressão são idênticos, alguns outros são específicos para a plataforma e dependem dos controladores e as versões de sistema. Se o mesmo BLOB *confImp* for compartido entre ambas plataformas, é possível que perda partes de informação.  
Quando for utilizada em um ambiente heterogêneo, com o fim de restaurar a máxima configuração disponível para cada plataforma (e não só a parte comum), se recomenda que maneje dois BLOBs *confImp*, um para cada plataforma.

##### Compatibilidade com comandos 4D Pack 

Os ajustes de impressão BLOB gerados pelo comando  legacy 4D podem ser carregados e utilizados pelo comando **BLOB to print settings**. Lembre que se são salvos por [Print settings to BLOB](print-settings-to-blob.md), são convertidos e não serão abertos mais por . O comando**BLOB to print settings** armazena mais informação sobre a impressão que . 

#### Exemplo 

Se quiser aplicar a configuração de impressão salva no disco para o contexto de impressão 4D atual: 

```4d
 var curSettings : Blob
 DOCUMENT TO BLOB(Get 4D folder(Active 4D Folder)+"current4Dsettings.blob";curSettings)
  //current4Dsettings foi criado por Print settings to BLOB
 $err:=BLOB to print settings(curSettings;0)
 Case of
    :($err=1)
  //tudo está OK
    :($err=2)
       CONFIRM("¡A impressora foi mudada!\n\nRevisar os parâmetros de impressão?")
       If(OK=1)
          PRINT SETTINGS
       End if
    :($err=0)
       ALERT("Não há impressora atual.")
    :($err=-1)
       ALERT("Arquivo de configuração não é valido.")
 End case
```

#### Ver também 

[Print settings to BLOB](print-settings-to-blob.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1434 |
| Thread-seguro | &cross; |


