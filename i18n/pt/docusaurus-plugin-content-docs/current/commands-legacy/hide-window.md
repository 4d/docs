---
id: hide-window
title: HIDE WINDOW
slug: /commands/hide-window
displayed_sidebar: docs
---

<!--REF #_command_.HIDE WINDOW.Syntax-->**HIDE WINDOW** {( *janela* )}<!-- END REF-->
<!--REF #_command_.HIDE WINDOW.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| janela | Integer | &#8594;  | Número de referência da janela ou processo atual da janela de primeiro plano, se omitido |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.HIDE WINDOW.Summary-->O comando HIDE WINDOW permite ocultar a janela cujo número de referência se passa em *janela* ou, se for omitido este parâmetro, a janela do primeiro plano do processo atual.<!-- END REF--> Este comando permite, por exemplo, em um processo com várias janelas, mostrar apenas a janela ativa.  

A janela desaparece da tela mas permanece aberta. Mesmo assim é possível aplicar por programação mudanças compatíveis com as janelas 4D.  
  
Para mostrar uma janela oculta pelo comando HIDE WINDOW:

* Utilize o comando [SHOW WINDOW](show-window.md) e passe o número de referência da janela.
* Utilize a página **Processo** do Explorador de execução. Selecione o processo no qual se manipula a janela, depois clique no botão **Mostrar**.

Para ocultar todas as janelas de um processo, utilize o comando [HIDE PROCESS](hide-process.md).

#### Exemplo 

Este exemplo corresponde a um método de um botão localizado em um formulário de entrada. Este botão abre uma caixa de diálogo em uma nova janela do mesmo processo. Neste exemplo, o usuário deseja ocultar as outras janelas do processo (um formulário de entrada e uma paleta de ferramentas) enquanto mostra a caixa de diálogo. Quando tiver confirmado a caixa de diálogo, outras janelas de processo são mostradas novamente.  
  
```4d
  // Método de objeto do botão "Informação"
 
 HIDE WINDOW(Entrada) // Ocultar a janela de entrada
 HIDE WINDOW(Paleta) // Ocultar a paleta
 $Infos:=Open window(20;100;500;400;8) // Criar a janela de informação
 ... // Colocar aqui as instruções necessárias para a administração do diálogo
 CLOSE WINDOW($Infos) // Fechar o diálogo
 SHOW WINDOW(Entrada)
 SHOW WINDOW(Paleta) // Mostrar as outras janelas do processo
```

#### Ver também 

[SHOW WINDOW](show-window.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 436 |
| Thread-seguro | &check; |
| Proibido no servidor ||


