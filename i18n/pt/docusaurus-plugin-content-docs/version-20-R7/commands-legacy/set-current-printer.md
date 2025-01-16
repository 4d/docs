---
id: set-current-printer
title: SET CURRENT PRINTER
slug: /commands/set-current-printer
displayed_sidebar: docs
---

<!--REF #_command_.SET CURRENT PRINTER.Syntax-->**SET CURRENT PRINTER** ( *nomImpr* )<!-- END REF-->
<!--REF #_command_.SET CURRENT PRINTER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| nomImpr | Text | &#8594;  | Nome da impressora a ser usada |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET CURRENT PRINTER.Summary-->O comando **SET CURRENT PRINTER** utiliza para designar a impressora a utilizar par imprimir com a aplicação 4D atual.<!-- END REF-->  
  
Passe o nome da impressora a selecionar no parâmetro *nomImpr*. Para obter una lista de impressoras disponíveis, utilize de antemão o novo comando [PRINTERS LIST](printers-list.md)   
Se passa uma string vazia em *nomImpr*, se utilizará a impressora atual definida no sistema.

**También puede designar la impresora PDF genérica automáticamente, independientemente de la plataforma, pasando la siguiente constante que se encuentra en el tema *Opções de Impressão*:**

| Constante          | Valor              | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Generic PDF driver | \_4d\_pdf\_printer | **Nota:** esta funcionalidade não está disponível nas versões 32 bits de 4D.<br/>Em OS X, declara o driver pré-determinado como impressora atual. Este driver não é visível e não está na lista devolvida pelo comando [PRINTERS LIST](printers-list.md). a rota de acesso ao documento PDF deve ser definida utilizando o comando [SET PRINT OPTION](set-print-option.md), se não, se devolve o erro 3107.Em Windows, declara o driver PDF de Windows (chamado "Microsoft Print to PDF") como impressora atual. Esta constante está disponível em Windows 10 unicamente, quando está instalada a opção PDF. Com outras versões de Windows, ou quando não houver nenhum driver PDF disponível, o comando não faz nada e a variável *OK* toma o valor 0. |

O comando **SET CURRENT PRINTER** deve ser chamado antes de [SET PRINT OPTION](set-print-option.md), de maneira que as opções disponíveis correspondam à impressora selecionada. Por outra parte, **SET CURRENT PRINTER** deve ser chamada depois de*\_o\_PAGE SETUP*, do contrário os parâmetros da impressora são perdidos.

Este comando pode ser utilizado com os comandos[PRINT SELECTION](print-selection.md), [PRINT RECORD](print-record.md), [Print form](print-form.md), e [QR REPORT](qr-report.md) e se aplica a todas as impressões de 4D, incluso no ambiente Desenho.  
  
Os comandos de impressão devem ser chamadas obrigatoriamente com o parâmetro > (onde seja relevante) de modo a que os parâmetros especificados não sejam perdidos.

#### Variáveis e conjuntos do sistema 

Se a seleção de impressora é realizada corretamente, a variável sistema OK toma o valor 1\. Se ocorre o contrário (por exemplo se não se encontra a impressora atribuída), a variável sistema OK toma o valor 0 e a impressora atual permanece sem mudanças. 

#### Exemplo 

Criação de um documento PDF em Windows:

```4d
 var $pdfpath : Text
 $pdfpath:=System folder(Desktop)+"test.pdf"
 SET CURRENT PRINTER(Generic PDF driver)
 SET PRINT OPTION(Destination option;3;$pdfpath)
 ALL RECORDS([Table_1])
 PRINT SELECTION([Table_1];*)
 SET CURRENT PRINTER("")
```

#### Ver também 

[Get current printer](get-current-printer.md)  
[PRINTERS LIST](printers-list.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 787 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


