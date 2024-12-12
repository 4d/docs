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

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FILTER KEYSTROKE.Summary-->FILTER KEYSTROKE permite substituir ou caractere introduzido pelo usuário em um campo ou em uma área editável pelo primeiro caractere da string *carFiltro*.<!-- END REF-->

Se passar uma string vazia, a tecla é cancelada e ignorada.

Geralmente, FILTER KEYSTROKE é chamada em um método de formulário ou de objeto quando é gerenciado o evento de formulário On Before Keystroke. Para detectar os eventos de teclagem, utilize o comando [Form event](../commands/form-event.md "Form event"). Para obter o caractere teclado, utilize o comando [Keystroke](keystroke.md "Keystroke").

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
 #DECLARE ($srcArea : Pointer ; $curVal : Pointer ; $filter : Text) -> $old : Text
 var $vtNewValue : Text
   // Retorna o caractere original
 $old:=Keystroke
  // Obter a seleção de texto na área editável
 GET HIGHLIGHT($srcArea->;$vlStart;$vlEnd)
  //Começar a trabalhar com o valor atual
 $vtNewValue:=$curVal->
  // Dependendo da tecla pressionada ou do caractere introduzida,
  // Efetuar as ações apropriadas
 Case of
  // a tecla Retorno (eliminar) foi pressionada
   :(Character code($old)=Backspace)
  // Eliminar os caracteres selecionados ou o caractere a esquerda do cursor
       $vtNovoValor:=Eliminar texto($vtNovoValor;$vlInicio;$vlFim)
  // Uma tecla flecha foi pressionada
  // Não fazer nada, mas aceitar o caractere teclado
    :(Character code($old)=Left arrow key)
    :(Character code($old)=Right arrow key)
    :(Character code($old)=Up arrow key)
    :(Character code($old)=Down arrow key)
 
  // Um caractere válido foi introduzido
    :(Position($old;$filter)=0)
       $vtNovoValor:=Inserir texto($vtNovoValor;$vlInicio;$vlFim;$0)
    Else
  // O caractere não foi aceito
       FILTER KEYSTROKE("")
 End case
  // Devolver o valor para a próxima gestão de keystroke
 $curVal->:=$vtNewValue
```

Este método utiliza os seguintes dois sub-métodos:

```4d
  // Método de projeto Apagar texto
  // Apagar texto ( Alfa; Long ; Long ) -> Alfa
  // Apagar texto ( -> Texto ; SelInicio ; SelFim ) -> Novo texto
 #DECLARE ($src : Text ; $start : Integer ; $end : Integer) -> $new : Text 
 $new:=Substring($src;1;$start-1-Num($start=$end))+Substring($src;$end)
```
```4d 
  // Método de projeto Inserir texto
  // Inserir texto ( Alfa ; Long ; Long ; Alfa) -> Alfa
  // Inserir texto ( -> srcText ; SelInicio ; SelFin ; Texto a inserir ) -> Novo texto
 #DECLARE ($src : Text ; $start : Integer ; $end : Integer ; $toInsert : Text) -> $new : Text 
 $new:=$src
 If($start # $end)
    $new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$end)
 Else
    Case of
       :($start<=1)
          $new:=$toInsert+$new
       :($start>Length($new))
          $new:=$new+$toInsert
       Else
          $new:=Substring($new;1;$start-1)+$toInsert+Substring($new;$start)
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
 
 #DECLARE ($area : Pointer ; $shadow : Pointer)
 var $vlInicio;$vlFin : Integer
 
  // Obter a seleção de texto na área editável
 GET HIGHLIGHT($area->;$vlStart;$vlEnd)
  // Obter o texto selecionado ou a palavbra localizada a esquerda do cursor
 $vtHighlightedText:=Get highlighted text($shadow->;$vlStart;$vlEnd)
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
       $shadow->:=Insert text($shadow->;$vlStart;$vlEnd;[Dictionary]Entry)
  // Copiar o texto shadow na área editável
       $area->:=$shadow->
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
 #DECLARE ($text : Text ; $start : Integer ; $end : Integer) -> $highlight : Text
 If($start<$end)
    $highlight:=Substring($text;$start;$end-$start)
 Else
    $highlight:=""
    $start:=$start-1
    Repeat
       If($start>0)
          If(Position($text[[$start]];"  ,.!?:;()-_–—")=0)
             $highlight:=$text[[$start]]+$highlight
             $start:=$start-1
          Else
             $start:=0
          End if
       End if
    Until($start=0)
 End if
```

#### Ver também 

[Form event code](../commands/form-event-code.md)  
[Get edited text](get-edited-text.md)  
[Is editing text](is-editing-text.md)  
[Keystroke](keystroke.md)  
