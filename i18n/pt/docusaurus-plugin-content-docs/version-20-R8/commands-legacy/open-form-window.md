---
id: open-form-window
title: Open form window
slug: /commands/open-form-window
displayed_sidebar: docs
---

<!--REF #_command_.Open form window.Syntax-->**Open form window** ( {*tabela* ;} *nomeForm* {; *tipo* {; *hPos* {; *vPos* {; *}}}} ) : Integer<!-- END REF-->
<!--REF #_command_.Open form window.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela do formulário ou tabela padrão, se omitido |
| nomeForm | Text, Object | &#8594;  | Nome do formulário |
| tipo | Integer | &#8594;  | tipo de janela |
| hPos | Integer | &#8594;  | Posição horizontal da janela |
| vPos | Integer | &#8594;  | Posição vertical da janela |
| * | Operador | &#8594;  | Salvar posição atual e tamanho da janela |
| Resultado | Integer | &#8592; | Número de referência de janela |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Open form window.Summary-->O comando Open form window abre uma nova janela utilizando as propriedades de tamanho e de redimensionamentos do formulário *nomForm*.<!-- END REF-->

**Nota:** Para saber mais sobre as propriedades de um formulário, use o comando [FORM GET PROPERTIES](form-get-properties.md).

O parâmetro formulário é o formulário que será exibido. Passe:  
  
 o nome de um formulário (formulário projeto ou formulário tabela) que vai usar;  
 a rota (em sintaxe POSIX) para um arquivo json válido contendo uma descrição doe formulário a usar. Veja *Form file path*;  
 um objeto que contenha a descrição do formulário.

Se o formulário *nomForm* for redimensionar, a janela aberta terá uma caixa de zoom como também uma caixa de redimensionamento.

  
O parâmetro opcional *tipo* permite especificar um tipo de janela. Este parâmetro deve conter uma das seguintes constantes predefinidas do tema *Abrir janela formulário*):

| Constante                        | Tipo          | Valor  |
| -------------------------------- | ------------- | ------ |
| Controller form window           | Inteiro longo | 133056 |
| Form has full screen mode Mac    | Inteiro longo | 65536  |
| Form has no menu bar             | Inteiro longo | 2048   |
| Modal form dialog box            | Inteiro longo | 1      |
| Movable form dialog box          | Inteiro longo | 5      |
| Movable form dialog box no title | Inteiro longo | 524293 |
| Palette form window              | Inteiro longo | 1984   |
| Plain form window                | Inteiro longo | 8      |
| Plain form window no title       | Inteiro longo | 524296 |
| Pop up form window               | Inteiro longo | 32     |
| Sheet form window                | Inteiro longo | 33     |
| Toolbar form window              | Inteiro longo | 35     |

Para saber mais sobre tipos de Window, veja *Tipos de janelas*.

**Nota:** As constantes Form has full screen mode Mac e Form has no menu bar devem ser adicionadas a um dos outros tipos de constantes.

Como padrão, se o parâmetro *tipo* não for passado, uma janela do tipo Plain form window é aberta.

**Close box**  
Janelas de tipos Movable form dialog box, Plain form window, e Palette form window tem uma close box. Nenhum método é associado com a close box da janela. Clicar na close box cancela e fecha a janela, exceto se o evento de formulário On Close Box tenha sido ativado para o formulário. Nesse caso, o código associado a este evento será executado.

**Controle de Tamanho**  
Se as propriedades "Window Size" de *formNome* não estão estabelecidas para "fixo", a janela aberta pode ser redimensionada pelo usuário. Uma caixa de zoom pode estar disponível dependendo do tipo de janela. Se as propriedades **Fixed Width** ou **Fixed Height** estiverem marcadas nas propriedades de formulário, a jenal não será redimensionada.

**Nota:** Alguns atributos (grow box, close box...) da janela criada dependem de especificações de interface do sistema operacional para o *tipo* escolhido. É portanto possível obter resultados diferentes dependendo da plataforma utilizada.

O parâmetro opcional *hPos* permite que se defina a posição horizontal da janela. Pode passar uma posição definida a este parâmetro (distância em pixels do canto esquero da janela da aplicação ao canto esquerdo interno da janela) ou uma das constantes predefinidas abaixo no tema *Abrir janela formulário*

| Constante             | Tipo          | Valor  |
| --------------------- | ------------- | ------ |
| Horizontally centered | Inteiro longo | 65536  |
| On the left           | Inteiro longo | 131072 |
| On the right          | Inteiro longo | 196608 |

O parâmetro opcional *vPos* permite que defina a posição vertical da janela. Pode passar uma posição definida a este parâmetro (distância em pixels do topo da janela da aplicação para o topo interno da janela) ou uma das constantes predefinidas abaixo no tema *Abrir janela formulário* :

| Constante           | Tipo          | Valor  |
| ------------------- | ------------- | ------ |
| At the bottom       | Inteiro longo | 393216 |
| At the top          | Inteiro longo | 327680 |
| Vertically centered | Inteiro longo | 262144 |

Estes parâmetros levam em consideração a presença da barra de ferramentes assim como o tamanho atual da janela de aplicação (em Windows).

Se pasasr o parâmetro opcional *\**, a posição atual e tamanho da janela são memorizadas quando fechadas. Quando a janela é reaberta novamente, sua posição prévia e tamanho são respeitados. Neste caso, os parâmetros *vPos* e *hPos* são usados apenas na primeira vez que a janela é aberta.

#### Exemplo 1 

A seguinte instrução abre uma janela padrão ou uma caixa fechar e se ajusta automaticamente ao tamanho do formulário de "Entrada". Como o formulário foi definido como redimensionáveis, a janela tem uma caixa de redimensionamento e uma caixa de zoom  
  
```4d
 $winRef :=Open form window([Table1];"Enter")
```

#### Exemplo 2 

A instrução abre una palheta flutuante na parte superior esquerda da tela baseada em um formulário de projeto chamado "Ferramentas". Esta palheta utiliza a última posição em cada nova abertura: 

```4d
 $winRef :=Open form window("Ferramentas";Palette form window;On the left;At the top;*)
```

#### Exemplo 3 

Este código deve ser chamado em MacOS enquanto uma janela de documento é exibida, por exemplo de um botão formulário, para exibir uma janela planilha:

```4d
 $myWin:=Open form window("sheet form";Sheet form window)
  // Pelo momento, a janela é criada mas permanece escondida
 DIALOG([aTable];"dialForm")
  //O evento On Load é gerado quando a janela planilha é exibida, ela desce
  //do fundo da barra título
```

#### Exemplo 4 

O exemplo abaixo usa a rota a um formulário json para exibir os registros em uma lista de empregados: 

```4d
 Open form window("/RESOURCES/OutputPersonnel.json";Plain form window)
 ALL RECORDS([Personnel])
 DIALOG("/RESOURCES/OutputPersonnel.json";*)
```

o que retorna:

![](../assets/en/commands/pict3687439.en.png)

#### Ver também 

[FORM GET PROPERTIES](form-get-properties.md)  
[Open window](open-window.md)  
*Tipos de janelas*  
*Tipos de Janelas*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 675 |
| Thread-seguro | &cross; |


