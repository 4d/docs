---
id: set-window-title
title: SET WINDOW TITLE
slug: /commands/set-window-title
displayed_sidebar: docs
---

<!--REF #_command_.SET WINDOW TITLE.Syntax-->**SET WINDOW TITLE** ( *titulo* {; *janela*} )<!-- END REF-->
<!--REF #_command_.SET WINDOW TITLE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| titulo | Text | &#8594;  | título da janela |
| janela | Integer | &#8594;  | Número de referência da Janela, ou a janela ativa do processo atual, se omitido |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.SET WINDOW TITLE.Summary-->O comando SET WINDOW TITLE muda o título da janela cujo número de referência é passado em *janela* para o texto passado em *titulo* (longitude máxima 80 caracteres).<!-- END REF-->  

Se a janela não existir, SET WINDOW TITLE não faz nada.  
  
Se omitir o parâmetro janela, SET WINDOW TITLE substitui o título da janela do primeiro plano do processo atual.  
  
**Nota**: no ambiente Desenho, 4D define automaticamente os títulos das janelas, por exemplo, “Entrada para tabela 1” quando realiza uma entrada de dados. Se muda um título de janela, é provável que 4D o reescreva. Por outro lado, no ambiente Aplicação, 4D não muda os títulos das janelas.

#### Exemplo 

Enquanto realiza uma entrada de dados em um formulário, você clica em um botão que executa uma operação longa (por exemplo, uma modificação por programação dos registros relacionados mostrados em um subformulário). Pode manter-se informado sobre o progresso da operação utilizando o título da janela atual: 

```4d
  // Método de objeto do botão bAnalise
 Case of
    :(FORM Event=On Clicked)
  // Guardar o título atual da janela em uma variável
       $vsTituloAtual:=Get window title
  // Iniciar a operação longa
       FIRST RECORD([Linhas fatura])
       For($vlRegistro;1;Records in selection([Linhas fatura]))
          HACER ALGO
  // Mostrar o progresso
          SET WINDOW TITLE("Processando a linha #"+String($vlRegistro))
       End for
  // Restaurar o título original da janela
       SET WINDOW TITLE($vsTituloAtual)
 End case
```

#### Ver também 

[Get window title](get-window-title.md)  