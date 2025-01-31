---
id: object-set-shortcut
title: OBJECT SET SHORTCUT
slug: /commands/object-set-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET SHORTCUT.Syntax-->**OBJECT SET SHORTCUT** ( {* ;} *objeto* ; *tecla* {; *modifiers*} )<!-- END REF-->
<!--REF #_command_.OBJECT SET SHORTCUT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Se especificado, objeto é um nome de objeto (cadeia)Se omitido, objeto é uma variável ou um campo |
| objeto | any | &#8594;  | Nome de objeto (se especificado *) ou Variável ou campo (se omitido *) |
| tecla | Text | &#8594;  | Tecla à associar ao objeto |
| modifiers | Integer | &#8594;  | Modifier key mask or combination of masks |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET SHORTCUT.Summary-->O comando **OBJECT SET SHORTCUT** permite definir ou modificar dinamicamente o atalho de teclado associado ao objeto ou aos objetos designados pelos parâmetros *objeto* e *\** para o processo atual.<!-- END REF-->  
  
Passa-se o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (uma cadeia). Se não passa este parâmetro, isto indica que o parâmetro *objeto* é uma variável ou um campo. Neste caso, se passa uma referencia de variável em lugar de uma cadeia.  
  
No parâmetro *tecla*, passe uma cadeia indicando a tecla à associar ao objeto. Pode passar:

* um nome de tecla estandarte, por exemplo "B"
* ou uma constante do tema *Atalhos de teclado* (ou seu valor) :  

| Constante                     | Tipo   | Valor           |  
| ----------------------------- | ------ | --------------- |  
| Shortcut with Backspace       | Cadeia | \[backspace\]   |  
| Shortcut with Carriage Return | Cadeia | \[return\]      |  
| Shortcut with Delete          | Cadeia | \[del\]         |  
| Shortcut with Down arrow      | Cadeia | \[down arrow\]  |  
| Shortcut with End             | Cadeia | \[end\]         |  
| Shortcut with Enter           | Cadeia | \[enter\]       |  
| Shortcut with Escape          | Cadeia | \[esc\]         |  
| Shortcut with F1              | Cadeia | \[F1\]          |  
| Shortcut with F10             | Cadeia | \[F10\]         |  
| Shortcut with F11             | Cadeia | \[F11\]         |  
| Shortcut with F12             | Cadeia | \[F12\]         |  
| Shortcut with F13             | Cadeia | \[F13\]         |  
| Shortcut with F14             | Cadeia | \[F14\]         |  
| Shortcut with F15             | Cadeia | \[F15\]         |  
| Shortcut with F2              | Cadeia | \[F2\]          |  
| Shortcut with F3              | Cadeia | \[F3\]          |  
| Shortcut with F4              | Cadeia | \[F4\]          |  
| Shortcut with F5              | Cadeia | \[F5\]          |  
| Shortcut with F6              | Cadeia | \[F6\]          |  
| Shortcut with F7              | Cadeia | \[F7\]          |  
| Shortcut with F8              | Cadeia | \[F8\]          |  
| Shortcut with F9              | Cadeia | \[F9\]          |  
| Shortcut with Help            | Cadeia | \[help\]        |  
| Shortcut with Home            | Cadeia | \[home\]        |  
| Shortcut with Left arrow      | Cadeia | \[left arrow\]  |  
| Shortcut with Page down       | Cadeia | \[page down\]   |  
| Shortcut with Page up         | Cadeia | \[page up\]     |  
| Shortcut with Right arrow     | Cadeia | \[right arrow\] |  
| Shortcut with Tabulation      | Cadeia | \[tab\]         |  
| Shortcut with Up arrow        | Cadeia | \[up arrow\]    |

No parâmetro *modificadores*, passe uma ou mais teclas de modificação à associar ao atalho de teclado. Para definir o parâmetro *modificadores*, passe uma ou mais das seguintes constantes de tipo "Mask" do tema *Eventos (Modificadores)*:  
  
| Constante        | Tipo          | Valor | Comentário                                              |
| ---------------- | ------------- | ----- | ------------------------------------------------------- |
| Command key mask | Inteiro longo | 256   | Windows = tecla Ctrl, Mac OS = tecla Comando            |
| Control key mask | Inteiro longo | 4096  | Tecla Ctrl em OS X, ou clique direito em Windows e OS X |
| Option key mask  | Inteiro longo | 2048  | Windows = tecla Alt, Mac OS = tecla Opção               |
| Shift key mask   | Inteiro longo | 512   | Windows e Mac Os                                        |

  
**Nota**: se omitido o parâmetro *modificadores*, o objeto se ativa tão pronto como se pressiona a tecla definida. Por exemplo, se associada a tecla "H" a um botão, este botão se ativa cada vez que pressione a tecla H. Este funcionamento se reserva para interfaces específicas.

#### Exemplo 

Você quer associar um atalho de teclado diferente em função da linguagem atual da aplicação. No evento On Load form, pode escrever:

```4d
 Case of
       vLang="FR"
       OBJECT SET SHORTCUT(*;"SortButton";"T";Command key mask+Shift key mask) // Ctrl+Mayús+T em francês
       vLang="US"
       OBJECT SET SHORTCUT(*;"SortButton";"O";Command key mask+Shift key mask) // Ctrl+Mayús+O em inglês
 End case
```

#### Ver também 

[OBJECT GET SHORTCUT](object-get-shortcut.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1185 |
| Thread-seguro | &cross; |


