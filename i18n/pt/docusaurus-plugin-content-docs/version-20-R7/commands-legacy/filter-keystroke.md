---
id: filter-keystroke
title: FILTER KEYSTROKE
slug: /commands/filter-keystroke
displayed_sidebar: docs
---

<!--REF #_command_.FILTER KEYSTROKE.Syntax-->**FILTER KEYSTROKE** ( *carFiltro* )<!-- END REF-->
<!--REF #_command_.FILTER KEYSTROKE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| carFiltro | Text | &#8594;  | Caracter de filtrado de tecle ou Cadeia vazia para cancelar o filtrado |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FILTER KEYSTROKE.Summary-->FILTER KEYSTROKE permite substituir ou caractere introduzido pelo usuário em um campo ou em uma área editável pelo primeiro caractere da string *carFiltro*.<!-- END REF-->

Se passar uma string vazia, a tecla é cancelada e ignorada.

Geralmente, FILTER KEYSTROKE é chamada em um método de formulário ou de objeto quando é gerenciado o evento de formulário On Before Keystroke. Para detectar os eventos de teclagem, utilize o comando [Form event](form-event.md "Form event"). Para obter o caractere teclado, utilize o comando [Keystroke](keystroke.md "Keystroke").

**IMPORTANTE:** o comando FILTER KEYSTROKE lhe permite cancelar ou substituir o caractere introduzido pelo usuário com outro caractere. Por outra parte, se deseja inserir mais de um caractere para um keystroke especifico, lembre que o texto que vê na tela ainda NAO é o valor da variável ou campo fonte de dados para a área que está sendo editada. O valor do campo ou da variável fonte de dados é atribuída depois de que se confirma a entrada de dados para a área. Portanto depende de você colocar os dados introduzidos em uma variável e depois trabalhar com o valor da variável e reatribuir a área de entrada (ver o exemplo nesta seção).

Utilize o comando FILTER KEYSTROKE para:

* efetuar um filtro personalizado de caracteres
* criar um filtro de entrada não disponível em padrão, por exemplo nos filtros de entrada
* implementar áreas dinâmicas de pesquisa ou áreas de autocompletar

**Advertência:** se chamar ao comando [Keystroke](keystroke.md "Keystroke") depois de chamar a FILTER KEYSTROKE, é devolvido o caractere que você passa a este comando em lugar do caractere introduzido realmente.

#### Exemplo 1 

Utilizando o seguinte código: 

```4d
  // Método de objeto da área editável meuObjeto
 Case of
    :(FORM Event=On Load)
       meuObjeto:=""
    :(FORM Event=On Before Keystroke)
       If(Position(Keystroke;"0123456789")>0)
          FILTER KEYSTROKE("*")
       End if
 End case
```

Todos os dígitos introduzidos na área *meuObjeto* se transformam em asteriscos.

#### Exemplo 2 

Este código define o comportamento de uma área de entrada de senha, na qual os caracteres introduzidos são substituídos (na tela) por caracteres aleatórios: 

```4d
  // Método de objeto da área editável vsSenha
 Case of
    :(FORM Event=On Load)
       vsSenha:=""
       vsSenhaReal:=""
    :(FORM Event=On Before Keystroke)
       Manejo keystroke(->vsSenha;->vsSenhaReal)
       If(Position(Keystroke;Char(Backspace)+Char(Left arrow key)+
          Char(Right arrow key)+Char(Up arrow key)+Char(Down arrow key))=0)
          FILTER KEYSTROKE(Char(65+(Random%26)))
       End if
 End case
```

Logo que tiver confirmado a entrada de dados, você recupera a senha introduzida em realidade pelo usuário *vsSenhaReal*. Nota: O método Manejo Handle keystroke está listado no exemplo do comando [Keystroke](keystroke.md "Keystroke"). 

#### Exemplo 3 

Em sua aplicação, tem algumas áreas de texto nas quais pode introduzir algumas frases. Sua aplicação também inclui uma tabela de dicionário dos termos utilizados com mais frequência em seu banco. Durante a edição de suas áreas de texto, é útil poder recuperar e inserir rapidamente entradas do dicionário baseado nos caracteres selecionados na área de texto. Há duas formas de fazer isto:   
 \- Oferecer alguns botões com teclas associadas ou   
 \- Interceptar caracteres especiais durante a edição da área de texto 

Este exemplo implementa a segunda solução, baseado na tecla Ajuda.

Como se explicou anteriormente, durante a edição da área de texto, o valor introduzido será atribuído à fonte de dados para esta área depois que a entrada de dados seja confirmada. Para poder recuperar e inserir entradas do dicionário na área de texto, enquanto esta área é editada, deve criar uma segunda área para colocar os valores introduzidos. Se passam como primeiros parâmetros os ponteiros até a área de entrada e até a variável, depois como terceiro parâmetro a string de caracteres “proibidos”. Sem importar como se trate a teclagem, o método retorna a teclagem original. Os caracteres “proibidos” são aqueles que você não deseja inserir na área editável e deseja tratar como caracteres especiais. 

```4d
  // Método de projeto Teclado sombra
  // Teclado sombra ( Ponteiro ; Ponteiro ; Alfa) -> Alfa
  // Teclado sombra ( -> srcArea ; -> curValor ; Filtro ) -> Antigo valor teclado
 C_STRING(1;$0)
 var $1;$2 : Pointer
 var $vtNovoValor : Text
 C_STRING(255;$3)
  // Retorna o caractere original
 $0:=Keystroke
  // Obter a seleção de texto na área editável
 GET HIGHLIGHT($1->;$vlInicio;$vlFim)
  //Começar a trabalhar com o valor atual
 $vtNuevoValor:=$2->
  // Dependendo da tecla pressionada ou do caractere introduzida,
  // Efetuar as ações apropriadas
 Case of
  // a tecla Retorno (eliminar) foi pressionada
    :(Character code($0)=Backspace)
  // Eliminar os caracteres selecionados ou o caractere a esquerda do cursor
       $vtNovoValor:=Eliminar texto($vtNovoValor;$vlInicio;$vlFim)
  // Uma tecla flecha foi pressionada
  // Não fazer nada, mas aceitar o caractere teclado
    :(Character code($0)=Left arrow key)
    :(Character code($0)=Right arrow key)
    :(Character code($0)=Up arrow key)
    :(Character code($0)=Down arrow key)
 
  // Um caractere válido foi introduzido
    :(Position($0;$3)=0)
       $vtNovoValor:=Inserir texto($vtNovoValor;$vlInicio;$vlFim;$0)
    Else
  // O caractere não foi aceito
       FILTER KEYSTROKE("")
 End case
  // Devolver o valor para a próxima gestão de keystroke
 $2->:=$vtNovoValor
```

Este método utiliza os seguintes dois sub-métodos:

```4d
  // Método de projeto Apagar texto
  // Apagar texto ( Alfa; Long ; Long ) -> Alfa
  // Apagar texto ( -> Texto ; SelInicio ; SelFim ) -> Novo texto
 var $0;$1 : Text
 var $2;$3 : Integer
 $0:=Substring($1;1;$2-1-Num($2=$3))+Substring($1;$3)
```

```4d
  // Método de projeto Inserir texto
  // Inserir texto ( Alfa ; Long ; Long ; Alfa) -> Alfa
  // Inserir texto ( -> srcText ; SelInicio ; SelFin ; Texto a inserir ) -> Novo texto
 var $0;$1;$4 : Text
 var $2;$3 : Integer
 $0:=$1
 If($2#$3)
    $0:=Substring($0;1;$2-1)+$4+Substring($0;$3)
 Else
    Case of
       :($2<=1)
          $0:=$4+$0
       :($2>Length($0))
          $0:=$0+$4
       Else
          $0:=Substring($0;1;$2-1)+$4+Substring($0;$2)
    End case
 End if
```

Quando tiver adicionado estes métodos de projeto a seu banco, podem ser utilizados desta maneira: 

```4d
  // Método de objeto da área editável vsDescrição
 Case of
    :(FORM Event=On Load)
       vsDescrição:=""
       vsShadowDescrição:=""
  // Estabelecer a lista de caracteres “proibidos” a tratar como teclas especiais
  // ( aqui, neste exemplo, só a tecla Help é filtrada)
       vsSpecialKeys:=Char(HelpKey)
    :(FORM Event=On Before Keystroke)
       $vsKey:=Teclado sombra(->vsDescrição;->vsShadowDescripcion;vsSpecialKeys)
       Case of
          :(Character code($vsKey)=Help key)
  // Fazer algo quando a tecla Ajuda seja pressionada
  // Aqui, neste exemplo, uma entrada de dicionário deve ser buscada e inserida
             CONSULTAR DICIONARIO(->vsDescripcion;->vsShadowDescripcion)
       End case
 End case
```

O método de projeto LOOKUP DICTIONARY é listado a seguir. Seu propósito é utilizar a variável shadow para retribuir a área editável a modificar:

```4d
  // Método de projeto CONSULTAR DICIONARIO
  // CONSULTAR DICIONARIO ( Ponteiro ; Ponteiro )
  // CONSULTAR DICIONARIO ( -> Area editavel ; ->ShadowVariable )
 
 var $1;$2 : Pointer
 var $vlInicio;$vlFin : Integer
 
  // Obter a seleção de texto na área editável
 GET HIGHLIGHT($1->;$vlInicio;$vlFin)
  // Obter o texto selecionado ou a palavbra localizada a esquerda do cursor
 $vtHighlightedText:=ObterTextoSelecionado($2->;$vlInicio;$vlFin)
  //Há algo que buscar?
 If($vtHighlightedText#"")
  // Se a seleção de texto era o cursor
  // a seleção começa com a palavra situada depois do cursor
    If($vlInicio=$vlFin)
       $vlInicio:=$vlInicio-Length($vtHighlightedText)
    End if
  // Buscar a primeira entrada disponivel do dicionário
    QUERY([Dicionario];[Dicionario]Entry=$vtHighlightedText+"@")
  // Há alguma?
    If(Records in selection([Dicionario])>0)
  // Se houver alguma entrada disponível, inserí-la no texto shadow
       $2->:=Insert text($2->;$vlInicio;$vlFin;[Dicionario]Entry)
  // Copiar o texto shadow na área editável
       $1->:=$2->
  // Fixar a seleção logo após inserir a entrada do dicionario
       $vlFin:=$vlInicio+Length([Dicionario]Entry)
       HIGHLIGHT TEXT(vsComments;$vlFin;$vlFin)
    Else
  // Não há uma entrada correspondente no dicionário
       BEEP
    End if
 Else
  // Não há um texto selecionado
    BEEP
 End if
```

O método ObterTextoSelecionado é o seguinte:

```4d
  // Método de objeto ObterTextoSelecionado
  // ObterTextoSelecionado( Alfa ; Long ; Long ) -> Alfa
  // ObterTextoSelecionado ( Text ; SelInicio ; SelEnd ) -> texto selecionado
 var $0;$1 : Text
 var $2;$3 : Integer
 If($2<$3)
    $0:=Substring($1;$2;$3-$2)
 Else
    $0:=""
    $2:=$2-1
    Repeat
       If($2>0)
          If(Position($1[[$2]];"  ,.!?:;()-_–—")=0)
             $0:=$1[[$2]]+$0
             $2:=$2-1
          Else
             $2:=0
          End if
       End if
    Until($2=0)
 End if
```

#### Ver também 

[Form event code](../commands/form-event-code.md)  
[Get edited text](get-edited-text.md)  
[Is editing text](is-editing-text.md)  
[Keystroke](keystroke.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 389 |
| Thread-seguro | &cross; |


