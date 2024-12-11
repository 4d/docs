---
id: qr-report
title: QR REPORT
slug: /commands/qr-report
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT.Syntax-->**QR REPORT** ( {*tabela* ;} *documento* {; *nomeMetodo*}{; *} )<!-- END REF-->
<!--REF #_command_.QR REPORT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela a utilizar para o relatório ou tabela por padrão se for omitido |
| documento | Text | &#8594;  | Documento de Relatório Rápido a carregar |
| nomeMetodo | Text | &#8594;  | Nome do mètodo a chamar |
| * | Operador | &#8594;  | Eliminação das caixas de diálogo de impressão |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.QR REPORT.Summary-->QR REPORT imprime um relatório para *tabela*, criado com o editor de relatórios rápidos .<!-- END REF--> O editor de relatórios rápidos permite aos usuários criar seus próprios relatórios. Para maior informação sobre a criação de relatórios rápidos com a ajuda do editor de relatórios rápidos, consulte *Relatórios rápidos* ou *Relatórios rápidos* no Manual de Desenho de 4D.  
  
**Notas:**

* O editor não aparece se a *tabela* tiver sido declarada “Invisível.”
* Quando o editor se chama utilizando o comando QR REPORT, a opção **Todas as relações automáticas**, que permite modificar o estado automático/manual das relações é ocultada. Isso permite ao desenvolvedor administrar ele mesmo esse estado utilizando os comandos [SET AUTOMATIC RELATIONS](set-automatic-relations.md) e [SET FIELD RELATION](set-field-relation.md). Entretanto, lembre que as funcionalidades automáticas são desativadas quando as tabelas relacionadas são visualizadas em um formulário listado mostrado utilizando [DISPLAY SELECTION](display-selection.md), [MODIFY SELECTION](modify-selection.md) ou um subformulário. Ver *Relações manuais e automáticas*
* O editor é chamado em uma janela externa e não é possível utilizar o comando [QR ON COMMAND](qr-on-command.md) neste contexto. No entanto, pode utilizar o parâmetro *nomMetodo* para executar código personalizado quando um comando de interface se ativa (ver abaixo).

O parâmetro *documento* é um documento de relatório que foi criado com o editor de relatórios rápidos e guardado em disco. O documento guarda as especificações do relatório, não os registros a imprimir. Se uma cadeia vazia ("") se passa em *documento*, QR REPORT mostra uma caixa de diálogo de abertura de arquivos, na qual o usuário pode selecionar o relatório a imprimir.

Se uma string vazia ("") for especificada para documento **QR REPORT** exibe uma caixa de diálogo Abrir Arquivo e o usuário pode selecionar o relatório a imprimir

Se o parâmetro *documento* especifica um documento que não existe (por exemplo, se passa [Char](char.md)**(1)** em *documento*), se mostra o editor de relatórios rápidos.

O parâmetro *methodName* atribui um método 4D project que será executado cada vez que o comando de gerenciamento de documento do editor Quick Report for chamado por um usuário clicando no botão. Usar este parâmetro é equivalente a usar [QR ON COMMAND](qr-on-command.md) no contexto da janela editor de Quick Report ([QR ON COMMAND](qr-on-command.md) só que funciona dentro do contexto de uma área incluída). Por exemplo pode usar este parâmetro para mudar o conjunto de caracteres usado pelo relatório rápido. O método methodName r4ecebe dois parâmetros:  

| Parameter | Type    | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $1        | Integer | Referência área                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| $2        | Integer | Número do comando selecionado. Para comparar com as constantes abaixo do tema *QR Comandos* (apenas eventos listados são compatíveis): <table> <thead> <tr> <td>Constante</td> <td>Valor</td> <td>Comentário</td> </tr> </thead> <tbody> <tr> <td>qr cmd generate</td> <td>2008</td> <td>uso do comando [QR RUN](qr-run.md) recomendado</td> </tr><tr> <td>qr cmd open</td> <td>2001</td> <td></td> </tr><tr> <td>qr cmd page setup</td> <td>2006</td> <td></td> </tr><tr> <td>qr cmd print preview</td> <td>2007</td> <td></td> </tr><tr> <td>qr cmd save</td> <td>2002</td> <td></td> </tr><tr> <td>qr cmd save as</td> <td>2003</td> <td></td> </tr> </tbody> </table> |
  
  
Nota: Se quiser compilar seu banco de dados, deve declarar os parâmetros $1 e $2 explicitamente como inteiros longos, mesmo se não os usar.  
  
Se quiser executar o comando inicial escolhido pelo usuário, utilise a declaração abaixo no método *nomeMetodo*:  
  
```4d
 QR EXECUTE COMMAND($1;$2)
```
  
  
Se o parâmetro nomeMetodo for uma string vazia ("") ou se for omitido, nenhum método é chamado e a operação normal de QR REPORT é aplicada.  
  
Depois de um relatório ter sido selecionado, as caixas de diálogo para impressão são exibidas, a não ser que o parâmetro \* for especificado. Se o parâmetro for especificado, estas caixas de diálogo não são exibidas. O relatório é então impresso.  
  
Se o editor de Relatório Rápido não estiver envolvido, a variável OK é estabelecida para 1 se um relatório for impresso, senão é estabelecido para 0 (zerl) (ou seja, se o usuário clicou Cancelar nas caixas de diálogo de impressão).  
  
4D Server: este comando pdoe ser executado em 4D Server sem o framework de um procedimento armazenado. Neste contexto:  
  
 TEnha certeza que nenhuma caixa de diálogo apareça na máquina servidor (exceto por um pedido específico). Para fazer isso, é necessário chamar o comando com o parâmetro \*.  
 A sintaxe que faz com que o editor de Relatório Rápido apareça não funciona com 4D Server; neste caso, a variável sistema OK é estabelecida como 0.  
 No caso de um problema relativo à impressão (falta de papel, impressora desconectada, etc) nenhuma mensagem de erro é gerada.  
  
#### Exemplo 1 

O exemplo a seguir permite ao usuário realizar uma pesquisa na tabela \[Pessoas\], e depois imprime automaticamente o relatório “Lista detalhada”: 

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];"Detailed Listing";*)
 End if
```

#### Exemplo 2 

O exemplo a seguir permite ao usuário realizar uma pesquisa na tabela \[Pessoas\], e depos selecionar o relatório a imprimir: 

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];"")
 End if
```

#### Exemplo 3 

O exemplo a seguir permite ao usuário realizar uma pesquisa na tabela \[Pessoas\], e depois mostra o editor de relatórios rápidos de maneira que o usuário possa desenhar, salvar, carregar e imprimir relatórios com ou sem o assistente: 

```4d
 QUERY([People])
 If(OK=1)
    QR REPORT([People];Char(1))
 End if
```

#### Exemplo 4 

Consulte o exemplo do comando [SET FIELD RELATION](set-field-relation.md "SET FIELD RELATION").

#### Exemplo 5 

Você deseja converter o conjunto de caracteres utilizado em um relatório rápido chamado utilizando **QR REPORT** em Mac Roman:

```4d
 QR REPORT([MyTable];Char(1);"myCallbackMeth")
```

O método myCallbackMeth converte o relatório quando é gerado:

```4d
 var $1;$2 : Integer
 If($2=qr cmd generate) //Se geramos um relatório
    var $myblob : Blob
    var $path;$text : Text
    var $type : Integer
    QR EXECUTE COMMAND($1;$2) //execução do comando
    QR GET DESTINATION($1;$type;$path) //recuperação do destino
    If(($type=qr HTML file)|($type=qr text file))
       DOCUMENT TO BLOB($path;$myblob)&NBSP; //conversão do texto utilizando UTF-8
       $text:=Convert to text($myblob;"UTF-8")
  //uso do conjunto MacRoman
       CONVERT FROM TEXT($text;"MacRoman";$myblob)
  //Reenvio do relatório convertido
       BLOB TO DOCUMENT($path;$myblob)
    End if
 Else //caso contrário, execução do comando
    QR EXECUTE COMMAND($1;$2)
 End if
```

#### Ver também 

[PRINT LABEL](print-label.md)  
[PRINT SELECTION](print-selection.md)  
[SET ALLOWED METHODS](../commands/set-allowed-methods.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 197 |
| Thread-seguro | &check; |
| Modificar variáveis | OK |


