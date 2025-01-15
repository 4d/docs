---
id: is-editing-text
title: Is editing text
slug: /commands/is-editing-text
displayed_sidebar: docs
---

<!--REF #_command_.Is editing text.Syntax-->**Is editing text**  : Boolean<!-- END REF-->
<!--REF #_command_.Is editing text.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Boolean | &#8592; | True se texto estiver sendo digitado, senão False |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Is editing text.Summary-->O comando **Is editing text** devolve **True** se o usuário estiver ingressando valores em um objeto de formulário de entrada e **False** em todos os demais casos.<!-- END REF-->

Este comando se utiliza principalmente para distinguir, dentro do código ativado pelo evento de formulário On Before Keystroke, entre a entrada de dados de usuário real e o uso de teclas de acesso direto. Por exemplo, é possível que queira executar um código diferente se o usuário esteja pressionando uma tecla para ingressar texto em uma célula ou para deslocar-se pelo listbox.

O comando **Is editing text** só pode ser utilizado com os objetos de formulário abaixo:

* entrada
* listbox (editáble e não editável)
* combo box

Com outros objetos, o comando sempre devolve **False**. Em particular, não pode utilizar com as áreas 4D Write Pro e 4D View Pro.

#### Exemplo 

Se quiser permitir que o usuário selecione uma linha começando com a letra ou número digitado em uma listbox editável:

```4d
 Case of
    :(FORM Event.code=On Before Keystroke) //uma tecla é pressionada
       If(Is editing text) //texto é digitado
  // proíbe alguns caracteres
          If(Keystroke="+")|(Keystroke="-")|(Keystroke="/")|(Keystroke="*")
             FILTER KEYSTROKE("")
          End if
       Else
  //nada está sendo digitado, é a funcionalidade de deslocamento atalho
          $charCode:=Keystroke
          $char:=Uppercase($charCode) // remove acentos
          Case of
             :((($char>="A")&($char<="Z"))|(($char>="0")&($char<="9")))
                ... //Seleciona uma linha começando com a letra ou número digitado
             :($charCode>=Left arrow key)&($charCode<=Down arrow key) // flechas esquerda/direita/cima/embaixo
                FILTER KEYSTROKE("") // desativa ações das flechas
          End case
       End if
 End case
```

#### Ver também 

  
[FILTER KEYSTROKE](filter-keystroke.md)  
[Get edited text](get-edited-text.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1744 |
| Thread-seguro | &cross; |


