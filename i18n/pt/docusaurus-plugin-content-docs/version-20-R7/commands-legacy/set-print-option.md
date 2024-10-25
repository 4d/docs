---
id: set-print-option
title: SET PRINT OPTION
slug: /commands/set-print-option
displayed_sidebar: docs
---

<!--REF #_command_.SET PRINT OPTION.Syntax-->**SET PRINT OPTION** ( *opção* ; *valor1* {; *valor2*} )<!-- END REF-->
<!--REF #_command_.SET PRINT OPTION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| opção | Integer | &#8594;  | Número da opção |
| valor1 | Integer, Text | &#8594;  | Valor 1 da opção |
| valor2 | Integer, Text | &#8594;  | Valor 2 da opção |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET PRINT OPTION.Summary-->O comando SET PRINT OPTION se utiliza para modificar por programação o valor de una opção de impressão.<!-- END REF-->. Cada opção definida utilizando este comando se aplica [ configurações de impressão 4D](https://developer.4d.com/docs/settings/compatibility/) sempre que não se chame outro comando que modifique os parâmetros de impressão ([PRINT SETTINGS](print-settings.md), [PRINT SELECTION](print-selection.md) sem o parâmetro > parâmetro, etc.). Se tiver aberto um trabalho de impressão, (por exemplo com [OPEN PRINTING JOB](open-printing-job.md)), a opção está configurada para o trabalho e não pode ser modificada enquanto o trabalho não tiver terminado (exceto para Orientation option, ver abaixo).

##### Usar um número de opção (constante) 

O parâmetro option permite indicar a opção para ser modificada. Pode passar uma das constantes pré-definidas do tema “*Opções de Impressão*”, ou um código de opção PDF (utilizável com o driver PDFCreator em Windos).  
  
Passe os novos valores da opção especificada nos parâmetros value1 e (opcionalmente) value2\. O número e natureza dos valores a serem passados depende do tipo de opção que for especificada. 

| Constante                    | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Paper option                 | 1     | Se usar apenas *valor1*, contém o nome do papel. SE usar ambos parâmetros, *value1* contém a largura do papel e *valor2* contém a altura do papel. A largura e altura são expressas em píxels. Use o comando [PRINT OPTION VALUES](print-option-values.md) para obter o nome, altura e largura de todos os formatos de papel oferecidos pela impressora.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Orientation option           | 2     | *valor1* apenas: 1=Retrato, 2=Paisagem. Se uma opção de orientação diferente for usada, [GET PRINT OPTION](get-print-option.md) retorna 0 em *valor1*.<br/>**Versões 64-bit**: Esta opção pode ser chamada dentro de um trabalho de impressão, que significa que pode trocar de retrato a paisagem, ou vice versa, durante o mesmo trabalho de impressão.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Scale option                 | 3     | *valor1* apenas: valor escalar em porcentagem. Tome cuidado, algumas impressoras não permitem que essa escala seja modificada. Se passar um valor inválido, a propriedade é resetada para 100% ao começar a impressão.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Number of copies option      | 4     | *valor1* apenas: número de cópias a imprimir.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Paper source option          | 5     | (Windows apenas) *valor1* unicamente: número correspondente ao índice, no array de bandejas devolvido pelo comando [PRINT OPTION VALUES](print-option-values.md), da bandeja de papel a utilizar. Esta opção só se pode utilizar em Windows.<br/><br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Destination option           | 9     | *valo1*: código especificando o tipo de destino de impressão: 1=Printer, 2=(PC)/PS File (Mac), 3=PDF file, 5=Screen (opção OS X driver).<br/>Se *valor1* for diferente de 1 ou 5, *valor2* contém rota de caminho para o documento resultante. Esta rota será usada até que outra rota seja especificada. Se um arquivo com o mesmo nome já existir no local destino, será substituído. Com [GET PRINT OPTION](get-print-option.md), se o valor atual não estiver na lista pré-definida, *valor1* contém -1 e a variável de sistema OK é marcada como 1\. Se um erro ocorrer, *valor1* eda variável sistema OK é estabelecida como 0\. **<br/>Nota** **(Windows)**: Para imprimir PDF no Windows, você tem que chamar [SET CURRENT PRINTER](set-current-printer.md)(Generic PDF driver) e definir o destino de impressão para 2 (Arquivo) ou 3 (Arquivo PDF). A configuração 3 permite que você escreva código multiplataforma. |
| Double sided option          | 11    | *value1*: 0=Single-sided or standard, 1=Double-sided. Se *value1*\=1, *value2* contém a binding: 0=Left binding (padrão), 1=Top binding.<br/>**Nota:** Esta opção pode somente ser usada em Windows.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Spooler document name option | 12    | *valor1* unicamente: nome do documento de impressão atual, que aparece na lista de documentos da fila de impressão. O nome definido para esta instrução será utilizada para todos os documentos de impressão da sessão até que um novo nome ou uma string vazia não seja passada. Para utilizar ou reestabelecer o funcionamento normal (usando o nome de método no caso de um método, o nome da tabela para um registro, etc.), passe uma string vazia em *valor1*.                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Page range option            | 15    | *valor1*\=primeira página a imprimir (valor padrão é 1) e (opcional) *valor2*\=número da última página a imprimir (valor padrão -1 = fim do documento).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Legacy printing layer option | 16    | (4D versões 64-bit em Windows apenas) *value1* apenas: 1=seleciona a capa de impressão legado baseada em GDI para os trabalhos de impressão subsequente. 0=seleciona a capa de impressão D2D (padrão). <br/>**Versões 64-bit** Este seletor é suportado apenas em aplicações 4D 64-bit monousuário em Windows; é ignorada em outras plataformas. Sua intenção é permitir a plugins legado que imprimam dentro de trabalhos 4D em aplicações4D 64-bit                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Print preview option         | 18    | (sólo Windows) *valor1*: formato a utilizar para as vistas previas de impressão em Windows. Valores disponíveis: kp preview automatic (por padrão): utiliza a impressora e o visor XPS se estiverem disponíveis, em caso contrário utiliza a impressora e o visor PDF se disponíveis, caso contrário gera um erro. kp preview XPS: utiliza a impressora e o visor XPS se disponíveis, caso contrário gera um erro. kp preview PDF: utiliza a impressora e o visor PDF se disponíveis, do contrário se gera um erro *valor2* (só pode ser utilizado com [GET PRINT OPTION](get-print-option.md)): formato de vista prévia de impressão utilizado realmente em Windows (pode diferir do *valor1* dependendo da configuração). Valores disponíveis: kp preview none: nenhum formato disponível. kp preview XPS: impressora e visor XPS utilizados. kp preview PDF: impressora e visor PDF utilizados.                                              |

Quando tiver fixado utilizando este comando, uma opção de impressão será conservada durante toda a sessão para toda a aplicação 4D. Será utilizada pelos comandos [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md), [Print form](print-form.md) e [QR REPORT](qr-report.md) e [WP PRINT](../WritePro/commands-legacy/wp-print.md), como também pela impressão de 4D, incluindo em modo Desenho.

**Notas:**

* É indispensável utilizar o parâmetro opcional *\>* com os comandos [PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md) e [PAGE BREAK](page-break.md) para evitar reinicializar as opções de impressão que foram definidas utilizando o comando SET PRINT OPTION.
* O comando **SET PRINT OPTION** só opera com impressoras PostScript. Pode utilizar este comando com outros tipos de impressoras, tais como PCL ou tinta, mas neste caso, é possível que algumas opções não estejam disponíveis.

#### Exemplo 

Nas versões 64-bits, o valor Opção de Orientação pode ser modificado dentro do mesmo trabalho de impressão (caso especial). Note que a opção deve ter sido estabelecida antes do comando [PAGE BREAK](page-break.md):

```4d
 ALL RECORDS([People])
 PRINT SETTINGS
 If(OK=1)
    OPEN PRINTING JOB
    SET PRINT OPTION(Orientation option;1) //retrato
    Print form([People];"Vertical_Form")
 
    SET PRINT OPTION(Orientation option;2) //paisagem
    PAGE BREAK //deve ser chamado imperativamente DEPOIS da opção
    Print form([People];"Horiz_Form")
    CLOSE PRINTING JOB
 End if
```

#### Variáveis e conjuntos do sistema 

A variável sistema OK toma o valor 1 se o comando for executado corretamente; do contrário, toma o valor 0

#### Gestão de erros 

Se o valor passado por uma *opção* é incorreto ou se não estiver disponível na impressora, o comando devolve um erro (que pode interceptar utilizando um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL")) e o valor atual da opção permanece sem mudanças. 

#### Ver também 

[GET PRINT OPTION](get-print-option.md)  
*Opções de Impressão*  
[Print form](print-form.md)  
[PRINT OPTION VALUES](print-option-values.md)  
[SET CURRENT PRINTER](set-current-printer.md)  