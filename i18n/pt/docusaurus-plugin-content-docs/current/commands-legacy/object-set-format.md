---
id: object-set-format
title: OBJECT SET FORMAT
slug: /commands/object-set-format
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET FORMAT.Syntax-->**OBJECT SET FORMAT** ( {* ;} *objeto* ; *formato* )<!-- END REF-->
<!--REF #_command_.OBJECT SET FORMAT.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é um campo ou uma variável |
| objeto | any | &#8594;  | Nome de objeto (se* é especificado) ou Campo ou Variável (se * é omitido) |
| formato | Text | &#8594;  | Novo formato de exibição do objeto |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT SET FORMAT.Summary-->OBJECT SET FORMAT substitui o formato de saída para os objetos especificados por *objeto* pelo formato que passa em *formatSaída*.<!-- END REF--> O novo formato é utilizado unicamente para a visualização atual, não se guarda com o formulário.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, é passada uma referência de campo ou variável (campo ou variável objeto unicamente) ao invés de um string.Para mais informações sobre nomes de objetos, consulte a seção 

OBJECT SET FORMAT pode ser utilizado em formulários de entrada e de saída (visualizados ou impressos) e podem ser aplicados a campos ou variáveis (editáveis/não editáveis).

Naturalmente, deve utilizar um formato de saída compatível com o tipo de dados presente no objeto ou com o mesmo objeto.

##### Booleano 

Para dar formato a campos booleanos, há duas possibilidades:

* Pode passar um valor simples em *formatSaída*. Neste caso, o campo será mostrado como uma caixa de seleção e sua etiqueta será o valor especificado.
* (só bancos de dados binários)Pode passar dois valores, separados por um ponto e vírgula (*;*), em *formatSaída*. Neste caso, o campo se mostrará como dois botões opção.

##### Data 

Para dar formato aos campos ou variáveis Data or Hora, é possível usar:

* um **formato pré-definido** disponível através das constantes do tema *Formatos de saída de datas* ou *Formatos de saída de hora* (valor longint). Neste caso, passe [Char](char.md)(n) em *displayFormat*, onde *n* é a constante:  
    
Dates:  

| Constante                   | Valor | Comentário                                                                                                                          |  
| --------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null date          | 100   | Para ser adicionado à constante de formato. Indica que, no caso de valor null, 4D deve retornar uma string vazia ao invés de zeros. |  
| Date RFC 1123               | 10    |                                                                                                                                     |  
| Internal date abbreviated   | 6     |                                                                                                                                     |  
| Internal date long          | 5     |                                                                                                                                     |  
| Internal date short         | 7     |                                                                                                                                     |  
| Internal date short special | 4     |                                                                                                                                     |  
| ISO Date                    | 8     | 2006-12-29T00:00:00                                                                                                                 |  
| ISO Date GMT                | 9     | 2010-09-13T16:11:53Z                                                                                                                |  
| System date abbreviated     | 2     |                                                                                                                                     |  
| System date long            | 3     |                                                                                                                                     |  
| System date short           | 1     |                                                                                                                                     |  
    
Times:  

| Constante                    | Valor | Comentário                                                                                                                                                                                                             |  
| ---------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |  
| Blank if null time           | 100   |                                                                                                                                                                                                                        |  
| HH MM                        | 2     |                                                                                                                                                                                                                        |  
| HH MM AM PM                  | 5     |                                                                                                                                                                                                                        |  
| HH MM SS                     | 1     |                                                                                                                                                                                                                        |  
| Hour min                     | 4     |                                                                                                                                                                                                                        |  
| Hour min sec                 | 3     |                                                                                                                                                                                                                        |  
| ISO time                     | 8     | 0000-00-00T01:02:03\. Corresponde ao padrão ISO8601 e contém, em teoria, uma data e uma hora. Já que o formato não é compatível com datas/horas, a parte data é preenchida com 0s. Este formato expressa a hora local. |  
| Min sec                      | 7     |                                                                                                                                                                                                                        |  
| MM SS                        | 6     |                                                                                                                                                                                                                        |  
| System time long             | 11    |                                                                                                                                                                                                                        |  
| System time long abbreviated | 10    |                                                                                                                                                                                                                        |  
| System time short            | 9     |                                                                                                                                                                                                                        |
* ou um [formato personalizado construido sobre um padrão](https://developer.4d.com/docs/Project/date-time-formats.md) (valor de string). Por exemplo:  
    
```4d  
 OBJECT SET FORMAT(*;"myDate";"dd/MM/yyyy")  
```  
    
Veja exemplo 2.  
    
**Notas**:  
\- Para aplicar a opção "Blank if null" a um formato personalizado, adicione "blankIfNull" no final da string formato (sensível a maiúsculas). Exemplo:  
```4d  
 OBJECT SET FORMAT(*;"myDate";"dd/MM/yyyy blankIfNull")  
```  
    
\- Para evitar conflitos quando formatar datas ou horas, formatos single char devem ser pré-fixados com ":" Por exemplo:  
```4d  
 OBJECT SET FORMAT(*;"timeinput";":m")  
```

##### Imagem 

Para dar formato a campos ou variáveis de tipo Imagem, passe Char(n) em *formatSaída*, onde *n* é uma das seguintes constantes pré-definidas de 4D: 

| Constante                   | Tipo          | Valor |
| --------------------------- | ------------- | ----- |
| Truncated centered          | Inteiro longo | 1     |
| Scaled to fit               | Inteiro longo | 2     |
| On background               | Inteiro longo | 3     |
| Truncated non centered      | Inteiro longo | 4     |
| Scaled to fit proportional  | Inteiro longo | 5     |
| Scaled to fit prop centered | Inteiro longo | 6     |
| Replicated                  | Inteiro longo | 7     |

  
##### Alfa ou numérico 

Para dar formato a campos ou variáveis de tipo alfa ou numérico, passe diretamente a etiqueta do formato no parâmetro *formatSaída*. 

Para maior informação sobre formatos de saída, consulte as seções *Formatos de campos numéricos* e *Formatos de campos alfa* no manual de Desenho de 4D.

**Nota:** em *formatSaída*, para utilizar os formatos de saída personalizados que possa ter criado na caixa de diálogo Preferências, coloque um prefixo no nome do formato com uma barra vertical (|).

##### Botões de Imagem 

Para dar formato a botões imagem, passe no parâmetro *formatSaída* uma string de caracteres respeitando a seguinte sintaxe:  
*cols;linhas;imagem;flags{;ticks}*

* *cols* \= número de colunas na imagem.
* *linhas* \= número de linhas na imagem.
* *imagem*\= imagem utilizada, proveniente da biblioteca de imagens ou de uma variável imagem:  
\- Se a imagem provém da biblioteca de imagens, introduza seu número, precedido de um sinal de interrogação (ex.: "?250").  
\- Se a imagem provém de uma variável imagem, introduza o nome da variável.
* *modo* \= modo de visualização e de funcionamento do botão imagem. Este parâmetro pode tomar qualquer dos seguintes valores: 0, 1, 2, 16, 32, 64 e 128\. Cada um destes valores representa um modo de visualização ou de funcionamento. Estes valores são acumulativos, por exemplo, se quer ativar os modos 1 e 64, passe 65 no parâmetro *flags*. Estes são os detalhes para cada valor:  
\- *modo* \= 0 (nenhuma opção)  
Mostra a imagem seguinte na série quando o usuário clicar na imagem. Mostra a imagem anterior na série quando o usuário pressiona a tecla Shift e clica na imagem. Quando o usuário alcança a última imagem na série, a imagem não muda quando o usuário clica novamente. Ou seja que não vai para a primeira imagem da série.  
\- *modo* \= 1 (Modificar continuamente)  
Similar ao anterior, exceto que quando o usuário clicar na imagem e mantenha o botão do mouse pressionado a visualização de imagens é contínua (como uma animação). Quando o usuário alcança a última imagem, o objeto não regressa a primeira imagem.  
\- *modo* \= 2 (Voltar ao início)  
Similar ao anterior, a diferenca de que as imagens são mostradas em um loop continuo. Quando o usuário chega a última imagem e clica novamente, a primeira imagem aparece, e assim sucessivamente.  
\- *modo* \= 16 (Mudar ao passar o cursor acima)  
O conteúdo do botão imagem é modificaco quando o cursor do mouse passa sobre ele. A imagem inicial é restabelecida quando o cursor deixa a área do botão. Este modo é utiliza com frequência em aplicações multimídia ou em documentos HTML. A imagem que se mostra é a última imagem da tabela de miniaturas, a menos que a opção Última imagem desativado esteja selecionada (128). Se essa opção estiver selecionada, se mostra a miniatura anterior a última.  
\- *modo* \= 32 (Voltar ao soltar o clique)  
Este modo funciona com duas imagens. Mostra a primeira imagem todo o tempo exceto quando o usuário clicar no botão. Nesse caso, a segunda imagem é mostrada até que o botão do mouse é liberado. Este modo lhe permite criar um botão de ação que mostra seu status (normal ou pressionado). Pode utilizar este modo para criar um efeito 3D ou para mostrar toda imagem que simbolize a ação.  
\- *modo* \= 64 (Transparente)  
Utilizado para tornar transparente o fundo da imagem.  
\- *modo* \= 128 (Última imagem foi desativada)

Este modo lhe permite definir que a última miniatura deve ser mostrada quando o botão está inativo. Quando este modo é selecionado, 4D mostra a última miniatura quando o botão está desativado. Quando este modo é utilizado com os modos 0, 1 e 2, a última miniatura não é considerada na sequência dos outros modos. Aparecerá unicamente quando o botão estiver desativado.  
• *ticks* \= ativação do modo “Mudar a cada x ticks” e define intervalo de tempo entre a visualização de cada imagem. Quando se passa este parâmetro opcional, lhe permite fazer ciclos através do conteúdo do botão imagem a velocidade especificada. Por exemplo, se introduz "2;3;?16807;0;10", o botão imagem mostrará uma imagem diferente cada 10 tics. Quando este modo está ativo, só o modo Transparente pode ser utilizado (64).

##### Menus de pop up de Imagem 

Para dar formato aos menus imagem pop up, passe no parâmetro *formatSaída* uma string de caracteres respeitando a seguinte sintaxe:  
*cols;linhas;imagem;hMargem;vMargem;modo*  

* *cols* \= número de colunas da imagem.
* *linhas* \= número de linhas da imagem.
* *imagem* \= imagem utilizada, proveniente da biblioteca de imagens ou de uma variável imagem:  
\- se a imagem provém da biblioteca de imagens, introduza seu número, antecedido por um sinal de interrogação (ex. : "?250").  
\- Se a imagem provém de uma variável imagem, introduza o nome da variável.
* *hMargem* \= margem em píxels entre os limites horizontais do menu e a imagem.
* *vMargem* \= margem em píxels entre os limites verticais del menu e a imagem.
* *modo* \= modo de transparência de menu imagem pop up. Aceita os valores 0 e 64:  
\- *modo* \= 0: o menu imagem pop up não é transparente,  
\- *modo* \= 64: o menu imagem pop up é transparente.

##### Termômetros e réguas 

Para dar formato a objetos de tipo termômetro ou regúa, passe no parâmetro *formatSaída*, uma string de caracteres respeitando a seguinte sintaxe:  
*min;max;unidade;passo;modo{;format{;visualização}}*  

* *min* \= valor da graduação de origem do indicador.
* *max* \= valor da graduação final do indicador.
* *unid* \= intervalo entre as graduações do indicador.
* *interv* \= intervalo mínimo do movimento do cursor no indicador.
* *modo* \= modo de visualização e de funcionamento do indicador. Este parâmetro aceita os valores 0, 2, 3, 16, 32 e 128\. Estes valores podem ser acumulados com o propósito de definir várias opções (exceto para 128). Estes são os detalhes para cada valor:  
\- *modo* \= 0: não mostrar as unidades.  
\- *modo* \= 2: mostrar as unidades a direita ou debaixo do indicador.  
\- *modo* \= 3: mostrar as unidades a esquerda ou sobre o indicador.  
\- *modo* \= 16: mostrar as graduações ao lado das unidades.  
\- *modo* \= 32: On Data Change é executado enquanto o usuário está ajustando o indicador. Se este valor não for utilizado, On Data Change ocorre só depois que o usuário termina de ajustar o indicador.  
\- *modo* \= 128: ativar o modo "Barber shop (animação contínua). Este valor não pode ser combinado com outros. Neste modo, se ignoram os outros parâmetros (exceto para o parâmetro *display*, se for passado). Para maior informação sobre este modo, consulte o manual de Desenho.
* *format* \= formato de saída das graduações do indicador.
* *visualização* \= opções de visualização específicas. No caso dos termômetros, este parâmetro só é considerado quando o subparâmetro *modo* é igual a 128.  
   * *visualização* \= 0 (ou é omitido): mostrar uma régua padrão/termômetro em animação continua "barber shop".  
   * *visualização* \= 1 : ativa o modo "Stepper" para uma régua / ativa o modo "Progressão assincrônica" para um termômetro. Para maior informação sobre estas opções consulte o manual de *Desenho*.

##### Dial 

Para dar formato a objetos de tipo dial, no parâmetro *formatSaída*, passe uma string de caracteres respeitando a seguinte sintaxe:  
*min;max;unid;interv{;modo}*  

* *min* \= valor da primeira graduacção do indicador.
* *max* \= valor da última graduacção do indicador.
* *unid* \= intervalo entre as graduações do indicador.
* *interv* \= intervalo mínimo do cursor de movimento no indicador.
* *modo* \= modo de funcionamento do dial (opcional). Este parâmetro só aceita o valor 32: On Data Change é executado enquanto o usuário está ajustando o indicador. Se este valor não for utilizado, On Data Change ocorre só depois de que o usuário tenha terminado de ajustar o indicador.

##### Grades de botões 

Para dar formato a grades de botões, passe no parâmetro *formatSaída* uma string de caracteres respeitando a seguinte sintaxe:  
*cols;linhas*  

* *cols* \= número de colunas da grade.
* *lineas* \= número de linhas da grade.

**Nota:** para maior informação sobre formatos de saída dos objetos de formulário, consulte o Manual de Desenho.

##### Botões 3D 

Para dar formato a botões 3D, passe no parâmetro *formatSaída* uma string de caracteres respeitando a seguinte sintaxe:  
*titulo;imagem;fundo;tituloPos;tituloVisivel;iconeVisivel;estilo;horMargem;vertMargem;* *iconOffset;popupMenu, hyperlink;numStates*

* *titulo* \= título do botão. Este valor pode ser expresso como texto ou um número de recurso (ex.: “:16800,1”)
* *imagem* \= imagem associada ao botão, vindo da biblioteca de imagens, de uma variável imagem ou de um arquivo imagem:  
\- Se a imagem provém de uma biblioteca de imagens, introduza seu número, precedido por um sinal de interrogação (ex.: “?250”).  
\- Se a imagem provém de uma variável imagem, introduza o nome da variável.  
\- Se a imagem provém de um arquivo armazenado no arquivo Recursos da base, introduza um URL do tipo pasta/}nomimagem" ou "arquivo:{pasta/}nomimagem".
* *fundo*\= imagem de fundo associada a um botão (estilo personalizado), que vem de uma biblioteca de imagens, de uma variável imagem ou de um arquivo armazenado na pasta Recursos (ver acima).
* *tituloPos*\= posição do título do botão. São possíveis cinco valores:  
\- *tituloPos* \= 1: Esquerda  
\- *tituloPos* \= 2: Acima  
\- *tituloPos* \= 3: Direita  
\- *tituloPos* \= 4: Abaixo  
\- *tituloPos* \= 5: Meio
* *títuloVisível*\= Define se o título é visível ou não. Dois valores são possíveis:  
\- *títuloVisível*\= 0: o título está oculto  
\- *títuloVisível*\= 1: o título se mostra
* *íconeVisível* \= Define se o icono é visível ou não. Dois valores são possíveis:  
\- *íconeVisível* \= 0 : o ícone está oculto  
\- *íconeVisível* \= 1 : o ícone se mostra
* *estilo* \= Estilo de botão. O valor desta opção determina se outras opções são consideradas (por exemplo, fundo). Dez valores são possíveis:  
\- *estilo* \= 0: Nenhum  
\- *estilo* \= 1: Fundo deslocado  
\- *estilo* \= 2: Pulsador  
\- *estilo* \= 3: botão de barra  
\- *estilo* \= 4: Personalizado  
\- *estilo* \= 5: Círculo  
\- *estilo* \= 6: Quadro de sistema  
\- *estilo* \= 7: Office XP  
\- *estilo* \= 8: Bevel  
\- *estilo* \= 9: Bevel arredondado  
\- *estilo* \= 10: Colapsar/expandir  
\- *estilo* \= 11: Ajuda  
\- *estilo* \= 12: OS X Textura  
\- *estilo* \= 13: OS X Gradiente
* *horMargem* \= Margem horizontal. Número de píxels delimitando as margens internas a direita e a esquerda do botão (áreas que o ícone e o texto não devem invadir).
* *vertMargem* \= Margem vertical. Número de píxels delimitando as margens superior e inferior do botão (áreas que o ícone e o texto não devem invadir).
* *iconeOffset* \= Deslocamento do ícone para direita e para baixo. Este valor, expressao em píxels, indica a diferença do ícone do botão a direita e para baixo em caso de clique (o mesmo valor é utilizado para ambas direções).
* *popupMenu* \= Associação de um menú pop-up com o botão. Três valores são possíveis:  
\- *popupMenu* \= 0: Sem menu pop-up  
\- *popupMenu* \= 1: Com menu pop-up associado  
\- *popupMenu* \= 2: Com menu pop-up separado
* *hyperlink* \= Título é sublinhado quando passar o mouse por cima para parecer com um hyperlink (mecanismo obsoleto). Dois valores são possíveis:  
*hyperlink* \= 0: título não é sublinhado on mouseover  
*hyperlink* \= 1: título é sublinhado on mouseover  
*numStates* \= Número de estados presente na imagem usada como ícone para o botão 3D, e que será usada por 4D para representar os botões padrão de estado (de 0 a 4).  
imageHugsTitle = Estabelece se o ícone e titulo devem estar separados ou juntos, dois valores são possíveis:  
 imageHugsTitle = 0 : ícone e título estão longe um do outro  
 imageHugsTitle = 1 : ícone e título estão juntos

Certas opções não são levadas em conta para todos os estilos de botão 3D. Em alguns casos, pode querer mudar todas as opções. Para não passar uma opção, simplesmente omita o valor correspondente. Por exemplo se não quiser passar as opções titleVisible, vertMargin e hyperlink, pode escrever:

```4d
 OBJECT SET FORMAT(myVar;"NiceButton;?256;:562;1;;1;4;5;;5;0;;2")
```

Algumas opções não são consideradas para todos os estilos de botões 3D. Adicionalmente, em alguns casos, poderia querer que não se modifique todas as opções. Para não passar uma opção, simplesmente omita o valor correspondente. Por exemplo, se não quiser passar as opções *titleVisível* e *vertMargem*, pode escrever:

```4d
 OBJECT SET FORMAT(myVar;"NiceButton;?256;:562;1;;1;4;5;;5;0;;2")
```

##### Cabeçalhos de list box 

Para formatar o ícone em um cabeçalho de list box, passe uma string caractere no parâmetro *exibirFormato*, que segue a sintaxe abaixo:  
*picture;iconPos*

* *imagem* \= imagem de cabeçalho, vinda da biblioteca de imagens, uma variável de imagem ou um arquivo de imagem:  
   * se a imagem vem de uma biblioteca de imagem, entre seu número, antecedido de um pont de interrogação (por exemplo.: "?250").  
   * se a imagem vem de uma variável imagem, entre o nome da variável.  
   * se vem de uma imagem armazenada na pasta Resources do seu banco de dados, entre uma URL do tipo "#{folder/}picturename" ou "file:{folder/}picturename".
* *iconPos* \= posição do ícone no cabeçalho. Dois valores são suportados:  
   * *iconPos* \= 1: Esquerda  
   * *iconPos* \= 2: Direita

Esta propriedade é útil, por exemplo, quando quiser trabalhar com um ícone personalizado

#### Exemplo 1 

A linha de código a seguir dá formato ao campo *\[Empregados\]Data Contratado* ao quinto formato de data (Internal date long).

```4d
 OBJECT SET FORMAT([Empregados]Data Contratado;Char(Internal date long))
```

#### Exemplo 2 

Este exemplo formata uma variável data e uma variável hora utilizando [formatos personalizados](https://developer.4d.com/docs/Project/date-time-formats.md): 

```4d
 OBJECT SET FORMAT(*;"mydate";"(yyyy) MMM dd") // (2023) Dec 12
 OBJECT SET FORMAT(*;"mytime";"hh'h' mm'mn' ss'sec.'") // 15h 12mn 17sec.
```

#### Exemplo 3 

O exemplo a seguir modifica o formato de um campo *\[Empresa\]Código postal* de acordo com a longitude do valor no campo: 

```4d
 If(Length([Empresa]Código postal)=9)
    OBJECT SET FORMAT([Empresa]Código postal;"#####–####")
 Else
    OBJECT SET FORMAT([Empresa]Código postal;"#####")
 End if
```

#### Exemplo 4 

O exemplo abaixo dá formato ao valor de um campo numérico dependendo de se for positivo, negativo, ou nulo:

```4d
 OBJECT SET FORMAT([Stats]Results;"### ##0.00;(### ##0.00);")
```

#### Exemplo 5 

O exemplo a seguir define o formato de um campo Booleano para mostrar Casado e Solteiro, ao invés dos valores padrão Sim e Não: 

```4d
 OBJECT SET FORMAT([Empregado]Estado Civil;"Casado;Solteiro")
 
```

#### Exemplo 6 

Se você armazenou um arquivo de imagen chamado "envelope\_open.png" na pasta Resources do seu banco de ados, pode escrever:

```4d
 vIcon:="#envelope_open.png"
 vPos:="2" // Right
 OBJECT SET FORMAT(*;"Header1";vIcon+";"+vPos)
```

![](../assets/en/commands/pict2878245.en.png)

#### Exemplo 7 

O exemplo a seguir define o formato de um campo booleano para mostrar uma caixa de seleção chamada “Classificado”: 

```4d
 OBJECT SET FORMAT([Pasta]Classificado;"Classificado")
```

#### Exemplo 8 

Imagine que tenha uma tabela de miniaturas que contenha 1 linha e 4 colunas, destinada a mostrar um botão imagem (“ativa por padrão”, “ao clicar no botão”, “ao passar o cursor” e “inativo”). Você quer associar as opções Modificar ao passar o cursor acima, Voltar ao soltar o clique e Última imagem se desativado: 

```4d
 OBJECT SET FORMAT(*;"BotaoImagem";"4;1;?15000;176")
```

#### Exemplo 9 

Passe um termômetro ao modo "Barber shop" 

```4d
 OBJECT SET FORMAT($Meutermometro;";;;;128")
 $Meutermo :=1 //Iniciar a animação
```

#### Ver também 

  
[GET SYSTEM FORMAT](get-system-format.md)  
[OBJECT Get format](object-get-format.md)  
[OBJECT SET FILTER](object-set-filter.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 236 |
| Thread-seguro | &cross; |


