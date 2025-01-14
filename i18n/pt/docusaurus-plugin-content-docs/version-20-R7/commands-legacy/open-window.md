---
id: open-window
title: Open window
slug: /commands/open-window
displayed_sidebar: docs
---

<!--REF #_command_.Open window.Syntax-->**Open window** ( *esquerda* ; *superior* ; *direita* ; *inferior* {; *tipo* {; *titulo* {; *caixaFechar*}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open window.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| esquerda | Integer | &#8594;  | Coordenada global da área de conteúdo da janela |
| superior | Integer | &#8594;  | Coordenada superior da área de conteúdos da janela |
| direita | Integer | &#8594;  | Coordenada direita da área de conteúdos da janela, ou -1 para usar tamanho padrão do formulário |
| inferior | Integer | &#8594;  | Coordenada inferior da área de conteúdos da janela, ou -1 para usar tamanho padrão do formulário |
| tipo | Integer | &#8594;  | tipo da janela |
| titulo | Text | &#8594;  | Título da janela ou "" para usar título do formulário padrão |
| caixaFechar | Text | &#8594;  | Método a chamar quando a caixa control-menu recebe um clique duplo, ou quanod a caixa Fechar é clicada |
| Resultado | Integer | &#8592; | Número de referência de janela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Open window.Summary-->Open window abre uma nova janela cujas dimensões são definidas pelos quatro primeiros parâmetros:  

* *esquerda* é a distância em pixels desde o lado esquerdo da janela da aplicação e o lado interior esquerdo da janela.<!-- END REF-->
* *superior* é a distância em píxels entre a altura da janela da aplicação e a borda superior do interior da janela.
* *direita* é a distância em píxels entre o lado esquerdo da janela da aplicação e o lado interior direito da janela.
* *inferior* é a distância em píxels desde a parte superior da janela da aplicação e borda interior inferior da janela.
**Nota de compatibilidad**e: Open window integra diferentes opções que evolucionaram através das versões, e agora só se conserva por razões de compatibilidade. Quando escrever código novo para a gestão de janelas, geralmente é mais prático utilizar o comando [Open form window](open-form-window.md), que se adapta melhor às interfaces atuais.  
  
Se passar -1 em *direita* e *inferior*, lhe indica a 4D que redimensione automaticamente a janela sob as seguintes condições:  
* Você criou um formulário e definido susa opções de redimensionamento na janela de propriedadees do formulário no ambiente Desenho
* Antes de chamar Open window, você selecionou o formulário utilizando o comando [FORM SET INPUT](form-set-input.md), ao qual passou o parâmetro opcional \*.
**Importante**: este dimensionamento automático da janela ocorrerá apenas se realizar uma chamada anterior a [FORM SET INPUT](form-set-input.md) para o formulário a mostrar em a janela e se le passa o parâmetro opcional \* a [FORM SET INPUT](form-set-input.md).  
* O parâmetro *tipo* é opcional e define o tipo de janela que deseja mostrar, e corresponde às diferentes janelas apresentadas na seção *Tipos de Janelas*. Se o tipo passado for negativo, a janela será flutuante. Se o tipo não for especificado, o tipo 1 será utilizado como padrão.
* O parâmetro *titulo* indica o título opcional da janela
Se passar uma string vazia ("") em *titulo*, lhe indica a 4D que utilize os valores de introducidos na área Nome da janela da janela de Propriedadees do formulário no entorno Desenho para o título do formulário a mostrar em a janela.  
  
**Importante**: o título como padrão do formulário se aplicará à janela apenas se chama previamente ao comando [FORM SET INPUT](form-set-input.md) para o formulário a mostrar e lhe passa o parâmetro opcional \* a [FORM SET INPUT](form-set-input.md).  
* O parâmetro *caixaFechar* é opcional e designa o método para fechar a janela. Se for especificado este parâmetro, a caixa do menu Control (Windows) ou a caixa Fechar (Macintosh) se adiciona à janela. Quando o usuário der um clique duplo na caixa de menu Control (Windows) ou clique na Caixa fechar (Macintosh), se chama ao método passado em *caixaFechar*.

**Nota**: também pode administrar o fechamento da janela desde o método do formulário mostrado na janela quando ocorrer um evento On Close Box. Para maior informação, consulte o comando [Form event code](../commands/form-event-code.md)"  
  
 Se for aberta mais de uma janela para um processo, a última janela aberta é a janela ativa (do primeiro plano) para ese processo. Apenas pode ser modificada a informação dentro da janela ativa. Todas as demais janelas podem ser visualizadas. Quando o usuário digitar, a janela ativa sempre passará ao primeiro plano, se já não estiver lá.

Os formulários são mostrados ao interior de uma janela aberta. O texto passado ao comando [MESSAGE](message.md) também aparece na janela.

  
Open window devolve uma referência de janela de tipo WinRef, utilizável pelos comandos de gestão de janelas (ver seção "*WinRef*"). 

#### Exemplo 1 

O método de projeto abaixo abre uma janela centrada na janela principal (Windows) ou na tela principal (Macintosh). Note que pode aceitar dois, três, ou quatro parâmetros: 

```4d
  // Método de projeto OPEN CENTERED WINDOW
  // $1 – Largura da janela
  // $2 – Altura da janela
  // $3 – Tipo da janela (opcional)
  // $4 – Título da janela (opcional)
 $SW:=Screen width\2
 $SH:=(Screen height\2)
 $WW:=$1\2
 $WH:=$2\2
 Case of
    :(Count parameters=2)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH)
    :(Count parameters=3)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3)
    :(Count parameters=4)
       Open window($SW-$WW;$SH-$WH;$SW+$WW;$SH+$WH;$3;$4)
 End case
```

Quando tiver escrito o método de projeto, pode utilizá-lo desta forma:

```4d
 OPEN CENTERED WINDOW(400;250;Movable dialog box;"Atualizar arquivos")
 DIALOG([Tabela de ferramentas];"UPDATE OPTIONS")
 CLOSE WINDOW
 If(OK=1)
  // ...
 End if
```

#### Exemplo 2 

O exemplo abaixo abre uma janela flutuante que tenha uma caixa de menu Control (Windows) ou uma caixa de fechar (Macintosh). A janela é aberta na esquina superior direita da janela da aplicação. 

```4d
 Open window(Screen width-149;33;Screen width-4;178;-Palette window;"";"caixaFechar")
 DIALOG([Dialogos];"Palheta de cores")
```

O método CloseColorPalette chama ao comando [CANCEL](cancel.md):

```4d
 CANCEL
```

#### Exemplo 3 

O exemplo abaixo abre uma janela cujo tamanho e título provém das propriedades do formulário mostrado na janela:   
  
  
```4d
 FORM SET INPUT([Customers];"Add Records";*)
 $myWindow:=Open window(10;80;-1;-1;Plain window;"")
 Repeat
    ADD RECORD([Customers])
 Until(OK=0)
```
  
  
**Lembre**: para que a função Open window utilize automaticamente as propriedades do formulário, deve chamar a [FORM SET INPUT](form-set-input.md) com o parâmetro opcional *\** e as propriedades do formulário devem ter sido definidas em função desta utilização no ambiente Desenho

```4d

//``

#### Exemplo 4 

Este exemplo ilustra o mecanismo de “atraso” de mostrar janelas em Mac OS X: 

```4d
 $minhaJanela:=Open window(10;10;400;400;Sheet window)
  //Por enquanto, a janela é criada mas permanece oculta
 DIALOG([Tabela];"formDial")
  //O evento On Load é gerado e depois a janela é exibida; "descende" de debaixo da barra de título
```

#### Ver também 

[CLOSE WINDOW](close-window.md)  
*Criar janela*  
[Open form window](open-form-window.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 153 |
| Thread-seguro | &cross; |


