---
id: wa-create-url-history-menu
title: WA Create URL history menu
slug: /commands/wa-create-url-history-menu
displayed_sidebar: docs
---

<!--REF #_command_.WA Create URL history menu.Syntax-->**WA Create URL history menu** ( {* ;} *objeto* {; *endereço*} ) : Text<!-- END REF-->
<!--REF #_command_.WA Create URL history menu.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (string); se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| endereço | Integer | &#8594;  | 0 ou omitido = Lista de URLs anteriores; 1 = Lista de próximas URLs |
| Resultado | Text | &#8592; | Menu reference |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.WA Create URL history menu.Summary-->O comando WA Create URL history menu cria e preenche um menu que pode ser utilizado diretamente para a navegação entre as URLs visitadas durante a sessão na área web designada pelos parâmetros *\** e *objeto*.<!-- END REF--> Pode ser utilizado para criar uma interface de navegação personalizada.

A informação fornecida se refere à sessão; em outras palavras, a navegação é realizada na mesma área web sempre que o formulário não tenha sido fechado.  
  
Passe em *endereço* um valor que indique a lista a ser recuperada. Pode utilizar uma das seguintes constantes, localizadas no tema "*Web Area*":

| Constante        | Tipo          | Valor |
| ---------------- | ------------- | ----- |
| WA next URLs     | Inteiro longo | 1     |
| WA previous URLs | Inteiro longo | 0     |

Se omitir o parâmetro *endereço*, se utiliza o valor 0.

Quando tiver gerado o menu, pode mostrá-lo através do comando de 4D [Dynamic pop up menu](dynamic-pop-up-menu.md) e pode trabalhar com ele utilizando os comandos padrão de gestão de menus de 4D. A string retornada por esse comando contém o URL da página visitada (ver exemplo).  
  
Chame o comando [RELEASE MENU](release-menu.md) para apagar um menu de histórico da URL quando já não for útil.

Nota de compatibilidade: a partir de 4D v19 R5, esse comando preenche um menu com apenas a URL atual para areas web usando o motor de renderização de Windows 

#### Exemplo 

O código abaixo pode estar associado a um botão 3D com menu pop up chamado "Anterior":

```4d
 Case of
  //Clique simples
    :(Form event code=On Clicked)
       WA OPEN BACK URL(WA_area)
  //Clique na flecha -> mostrar pop up
    :(FORM Event=On Alternative Click)
  //Criar um menu de histórico anterior
       $Menu:=WA Create URL history menu(WA_area;WA previous URLs)
  //Mostrar este menu em um pop-up
       $URL:=Dynamic pop up menu($Menu)
  //Se um elemento estiver selecionado
       If($URL#"")
  //Abrir a página Web
          WA OPEN URL(WA_area;$URL)
       End if
  //Apagar o menu para liberar a memória
       RELEASE MENU($Menu)
 End case
```

#### Ver também 

[Dynamic pop up menu](dynamic-pop-up-menu.md)  
[RELEASE MENU](release-menu.md)  
[WA GET URL HISTORY](wa-get-url-history.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1049 |
| Thread-seguro | &cross; |


