---
id: print-settings-to-blob
title: Print settings to BLOB
slug: /commands/print-settings-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.Print settings to BLOB.Syntax-->**Print settings to BLOB** ( *confImpress* ) : Integer<!-- END REF-->
<!--REF #_command_.Print settings to BLOB.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| confImpress | Blob | &#8592; | Configuração de impressão atuais |
| Resultado | Integer | &#8592; | código de estado 1= operação bem sucedida, 0=sem impressora atual |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Print settings to BLOB.Summary-->O comando **Print settings to BLOB** salva os ajustes de impressão 4D atuais no BLOB *confImp*.<!-- END REF--> O parâmetro *confImp* armazena todos os valores utilizados para a impressão:

* Parâmetros de desenho tais quais papel, orientação, escala...
* Parâmetros de impressão tais quais o número de copias, fonte de papel...

Este comando deve ser usado em conjunto com o comando [BLOB to print settings](blob-to-print-settings.md). Estes comandos lhe permitem salvar a configuração de impressão atual de usuário e recarregá-la depois para que os usuários não tenham que especificar seus parâmetros cada vez que iniciem um trabalho de impressão. Além disso, permite manter a configuração da impressora "privada" (específica para o controlador da impressora) não disponível como parâmetros de impressão padrão. 

O BLOB gerado não deve ser modificado por programação; só pode ser utilizado pelo comando [BLOB to print settings](blob-to-print-settings.md).

O comando devolve 1 se o BLOB tiver sido gerado corretamente e 0 se não tiver selecionado nenhuma impressora atual.

##### Windows / OS X 

O BLOB *confImp*  pode ser salvado e lido em ambas plataformas. Entretanto, mesmo se alguns ajustes de impressão são idênticos, alguns outros são específicos para a plataforma e dependem dos controladores e as versões de sistema. Se o mesmo BLOB *confImp* for compartido entre ambas plataformas, é possível que perda partes de informação.  
Quando for utilizada em um ambiente heterogêneo, com o fim de restaurar a máxima configuração disponível para cada plataforma (e não só a parte comum), se recomenda que maneje dois BLOBs *confImp*, um para cada plataforma.

#### Exemplo 

Se quiser armazenar a configuração de impressão atual no disco:

```4d
 var curSettings : Blob
 PRINT SETTINGS //mostra o diálogo de configuração de impressão ao usuário
 If(OK=1)
    $err:=Print settings to BLOB(curSettings)
    If($err=1)
       BLOB TO DOCUMENT(Get 4D folder+"current4Dsettings.blob";curSettings)
    Else
       ALERT("Não há nenhuma impressora selecionada")
    End if
 End if
```

#### Ver também 

  
[BLOB to print settings](blob-to-print-settings.md)  