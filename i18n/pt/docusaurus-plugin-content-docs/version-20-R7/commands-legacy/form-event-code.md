---
id: form-event-code
title: Form event code
slug: /commands/form-event-code
displayed_sidebar: docs
---

<!--REF #_command_.Form event code.Syntax-->**Form event code**  : Integer<!-- END REF-->
<!--REF #_command_.Form event code.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Integer | &#8592; | Número do evento do formulário |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Compatibilidade 

<!--REF #_command_.Form event code.Summary-->**Form event code** era chamado **Form event** em versões anteriores de 4D.<!-- END REF--> Foi renomeado para maior claridade quando o comando [FORM Event](form-event.md), que retorna um objeto, foi adicionado.

#### Descrição 

**Form event code** retorna um valor númerico que identifica o tipo de evento de formulário que acaba de ocorrer. Geralmente, **Form event code** são utilizados em um método formulário ou em um método objeto.

4D oferece constantes predefinidas (localizadas no tema *Form event*) para comparar os valores retornados pelo comando **Form event code**.

Certos eventos são genéricos (gerados por todo tipo de objeto) e outros são específicos a um tipo de objeto particular.

| Constante                | Tipo          | Valor | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ------------------------ | ------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| On Load                  | Inteiro longo | 1     | O formulário está prestes a ser exibido ou impresso                                                                                                                                                                                                                                                                                                                                                                              |
| On Mouse Up              | Inteiro longo | 2     | (Apenas imagens) O usuário acabou de soltar o boto esquerdo do mouse em um objeto Imagem                                                                                                                                                                                                                                                                                                                                         |
| On Validate              | Inteiro longo | 3     | A entrada de dados foi validada                                                                                                                                                                                                                                                                                                                                                                                                  |
| On Clicked               | Inteiro longo | 4     | Ocorre um clique sobre um objeto                                                                                                                                                                                                                                                                                                                                                                                                 |
| On Header                | Inteiro longo | 5     | O cabeçalho do formulário está prestes a ser impresso ou exibido                                                                                                                                                                                                                                                                                                                                                                 |
| On Printing Break        | Inteiro longo | 6     | Uma das áreas de quebra do formulário está prestes a ser impressa                                                                                                                                                                                                                                                                                                                                                                |
| On Printing Footer       | Inteiro longo | 7     | A área do rodapé do formulário está prestes a ser impressa                                                                                                                                                                                                                                                                                                                                                                       |
| On Display Detail        | Inteiro longo | 8     | Um registro está prestes a ser mostrado na lista                                                                                                                                                                                                                                                                                                                                                                                 |
| On VP Ready              | Inteiro longo | 9     | (*apenas em áreas 4D View Pro*) O carregamento da área 4D View Pro está completo                                                                                                                                                                                                                                                                                                                                                 |
| On Outside Call          | Inteiro longo | 10    | O formulário recebe um chamado [POST OUTSIDE CALL](post-outside-call.md)                                                                                                                                                                                                                                                                                                                                                         |
| On Activate              | Inteiro longo | 11    | A janela de formulário vira a janela atual.                                                                                                                                                                                                                                                                                                                                                                                      |
| On Deactivate            | Inteiro longo | 12    | A janela do formulário deixa de ser a janela atual                                                                                                                                                                                                                                                                                                                                                                               |
| On Double Clicked        | Inteiro longo | 13    | Ocorreu clique duas vezes num objeto                                                                                                                                                                                                                                                                                                                                                                                             |
| On Losing Focus          | Inteiro longo | 14    | Um objeto do formulário está perdendo o foco                                                                                                                                                                                                                                                                                                                                                                                     |
| On Getting Focus         | Inteiro longo | 15    | Um objeto do formulário tem o foco                                                                                                                                                                                                                                                                                                                                                                                               |
| On Drop                  | Inteiro longo | 16    | Os dados foram liberados no objeto                                                                                                                                                                                                                                                                                                                                                                                               |
| On Before Keystroke      | Inteiro longo | 17    | Um caractere está prestes a entrar no objeto que tem o foco. [Get edited text](get-edited-text.md) retorna o texto de objeto sem o caractere.                                                                                                                                                                                                                                                                                    |
| On Menu Selected         | Inteiro longo | 18    | Um comando do menu foi selecionado                                                                                                                                                                                                                                                                                                                                                                                               |
| On Plug in Area          | Inteiro longo | 19    | Um objeto externo solicitou que fosse executado o seu método de objeto                                                                                                                                                                                                                                                                                                                                                           |
| On Data Change           | Inteiro longo | 20    | Os dados do objeto foram modificados                                                                                                                                                                                                                                                                                                                                                                                             |
| On Drag Over             | Inteiro longo | 21    | Os dados podem ser liberados num objeto<br/>                                                                                                                                                                                                                                                                                                                                                                             |
| On Close Box             | Inteiro longo | 22    | Um clique ocorreu na caixa de fechar a janela.                                                                                                                                                                                                                                                                                                                                                                                   |
| On Printing Detail       | Inteiro longo | 23    | A área de detalhe do formulário está prestes a ser impressa                                                                                                                                                                                                                                                                                                                                                                      |
| On Unload                | Inteiro longo | 24    | O formulário está prestes a ser fechado e liberado                                                                                                                                                                                                                                                                                                                                                                               |
| On Open Detail           | Inteiro longo | 25    | O formulário detalhado associado com o formulário de saída ou com o listbox está aponto de ser aberto                                                                                                                                                                                                                                                                                                                            |
| On Close Detail          | Inteiro longo | 26    | O formulário de entrada é fechado e regressa ao formulário de saída                                                                                                                                                                                                                                                                                                                                                              |
| On Timer                 | Inteiro longo | 27    | O número de tiques definido pelo comando [SET TIMER](set-timer.md) passou                                                                                                                                                                                                                                                                                                                                                        |
| On After Keystroke       | Inteiro longo | 28    | Um caractere que vai ser inserido no objeto que tem o foco. [Get edited text](get-edited-text.md) retorna o texto do objeto, incluindo esse caractere                                                                                                                                                                                                                                                                            |
| On Resize                | Inteiro longo | 29    | A janela do formulário é redimensionada ou o objeto subformulário é redimensionado (neste caso o evento é gerado no método formulário do subformulário)                                                                                                                                                                                                                                                                          |
| On After Sort            | Inteiro longo | 30    | (*List box only*) Uma ordenação padrão foi realizada em uma list box coluna                                                                                                                                                                                                                                                                                                                                                      |
| On Selection Change      | Inteiro longo | 31    | List box: é modificada a seleção atual de linhas ou colunasRegistros na lista: é modificado o registro atual ou a seleção atual de linhas num formulário listado ou num subformulárioLista hierarquica: a seleção na lista é modificada após fazer clique ou pressionar uma teclaVariável ou campo editável (somente v12.x): a seleção de texto ou a posição do ponteiro na área é modificada ao clicar ou pressionar uma tecla. |
| On Column Moved          | Inteiro longo | 32    | (*List box apenas*) O usuário move uma coluna de list box com arrastar e soltar.                                                                                                                                                                                                                                                                                                                                                 |
| On Column Resize         | Inteiro longo | 33    | (*List box apenas*) A largura de uma coluna de list box é modificado por um usuário com o mouse                                                                                                                                                                                                                                                                                                                                  |
| On Row Moved             | Inteiro longo | 34    | (Somente List Box) O usuário move uma fileira de uma list box usando arrastar e soltar                                                                                                                                                                                                                                                                                                                                           |
| On Mouse Enter           | Inteiro longo | 35    | O ponteiro do mouse ingressa à área gráfica de um objeto                                                                                                                                                                                                                                                                                                                                                                         |
| On Mouse Leave           | Inteiro longo | 36    | O ponteiro do mouse sai da área gráfica de um objeto                                                                                                                                                                                                                                                                                                                                                                             |
| On Mouse Move            | Inteiro longo | 37    | O ponteiro do mouse se move (pelo menos um pixel). Ou quando se pressiona uma tecla de modificação (Ctrl, Alt, Caps Lock). Se o evento está selecionado para um objeto unicamente, é gerado só quando o cursor se encontra dentro da área gráfica do objeto                                                                                                                                                                      |
| On Alternative Click     | Inteiro longo | 38    | (*3D buttons only*) A área “flecha” do botão 3D é clicado.*List boxes*: nuna coluna de um array objeto, um botão de reticências (atributo "alternateButton") recebe um clique**Note**: Botões de Elipse estão disponíveis apenas nas versões v15 ou superior.                                                                                                                                                                    |
| On Long Click            | Inteiro longo | 39    | (Somente botões 3D) Um botão 3D é clicado e o botão do mouse permanece pressionado por um instante                                                                                                                                                                                                                                                                                                                               |
| On Load Record           | Inteiro longo | 40    | No modo de entrada em lista, enquanto é modificado, um registro é carregado (o usuário clica numa linha do registro e um campo passa ao modo de edição)                                                                                                                                                                                                                                                                          |
| On Before Data Entry     | Inteiro longo | 41    | (*List box only*) Uma célula de list box está prestes a mudar para modo editar                                                                                                                                                                                                                                                                                                                                                   |
| On Header Click          | Inteiro longo | 42    | (Somente list box) Ocorre um clique num cabeçalho de coluna do list box                                                                                                                                                                                                                                                                                                                                                          |
| On Expand                | Inteiro longo | 43    | (Somente listas hierarquicas ) Um elemento da lista hierarquica foi expandido fazendo clique ou utilizando uma tecla                                                                                                                                                                                                                                                                                                             |
| On Collapse              | Inteiro longo | 44    | (Listas hierárquicas apenas) Um elemento da lista hierárquica foi contraído através de um clique ou uma tecla.                                                                                                                                                                                                                                                                                                                   |
| On After Edit            | Inteiro longo | 45    | Os conteúdos do objeto editável que tem o foco foram modificados.                                                                                                                                                                                                                                                                                                                                                                |
| On Begin Drag Over       | Inteiro longo | 46    | Um objeto está sendo arrastado                                                                                                                                                                                                                                                                                                                                                                                                   |
| On Begin URL Loading     | Inteiro longo | 47    | (*apenas Web areas*) Uma nova área URL é carrega na área WEb                                                                                                                                                                                                                                                                                                                                                                     |
| On URL Resource Loading  | Inteiro longo | 48    | (Somente áreas web) Um novo recurso é carregado na área web                                                                                                                                                                                                                                                                                                                                                                      |
| On End URL Loading       | Inteiro longo | 49    | (Somente áreas web) Todos os recursos da URL foram carregados                                                                                                                                                                                                                                                                                                                                                                    |
| On URL Loading Error     | Inteiro longo | 50    | (Somente áreas web) Ocorreu um erro quando a URL estava sendo carregada                                                                                                                                                                                                                                                                                                                                                          |
| On URL Filtering         | Inteiro longo | 51    | (Somente áreas web) Uma URL foi bloqueada pela área web                                                                                                                                                                                                                                                                                                                                                                          |
| On Open External Link    | Inteiro longo | 52    | (Somente áreas web) Foi aberta uma URL externa no navegador                                                                                                                                                                                                                                                                                                                                                                      |
| On Window Opening Denied | Inteiro longo | 53    | Uma janela pop-up foi bloqueada                                                                                                                                                                                                                                                                                                                                                                                                  |
| On bound variable change | Inteiro longo | 54    | A variável relacionada a um subformulário é modificada.                                                                                                                                                                                                                                                                                                                                                                          |
| On Page Change           | Inteiro longo | 56    | A página atual do formulário foi mudada                                                                                                                                                                                                                                                                                                                                                                                          |
| On Footer Click          | Inteiro longo | 57    | (Somente List box) um clique ocorreu no pé de uma list box ou coluna de list box                                                                                                                                                                                                                                                                                                                                                 |
| On Delete Action         | Inteiro longo | 58    | (Listas hierárquicas e List box somente) O usuário é solicitado a remover um item                                                                                                                                                                                                                                                                                                                                                |
| On Scroll                | Inteiro longo | 59    | O usuário desloca o conteúdo de um campo ou de uma variável imagem utilzando o mouse ou uma tecla.                                                                                                                                                                                                                                                                                                                               |
| On Row Resize            | Inteiro longo | 60    | *(Apenas em 4D View Pro)* A altura da linha é modificada por um usuário com o mouse                                                                                                                                                                                                                                                                                                                                              |
| On VP Range Changed      | Inteiro longo | 61    | O intervalo de células 4D View Pro mudou (por exemplo, o cálculo de uma fórmula, o valor eliminado de uma célula, etc.)                                                                                                                                                                                                                                                                                                          |

**Nota:** os eventos específicos de formulários de saída não podem utilizar-se em **formularios projeto**. Estes são: On Display Detail, On Open Detail, On Close Detail, On Load Record, On Header, On Printing Detail, On Printing Break, On Printing Footer.

#### Eventos e Métodos 

Quando ocorre um evento de formulário, 4D efetua as seguintes ações:  
  
 Primeiro, examina os objetos do formulário e chama o método de objeto para qualquer objeto (envolvido no evento) cuja propriedade de evento de objeto correspondente tenha sido selecionada.  
 Segundo, chama o método de formulário se a propriedade do evento de formulário correspondente foi selecionada.  
  
Não assuma que os métodos de objeto, se houver, serão chamados numa ordem particular. A regra é que os métodos de objeto sempre são chamados antes do que os métodos de formulário. Se um objeto é um subformulário, primeiro são chamados os métodos de objeto do formulário de saída do subformulário e depois o método de formulário do formulário de saída. 4D continua depois chamando aos métodos do formulário pai. Em outras palavras, quando um objeto está num subformulário, 4D utiliza a mesma regra para os métodos de objeto e formulário em subformulários.  
Com excepção dos eventos On Load e On Unload, se a propriedade de evento de formulário não estiver selecionada para um determinado evento, isto não impede que ocorram as chamadas aos métodos de objeto para os objetos cuja propriedade de evento estiver selecionada. Em outras palavras, a ativação ou desativação de um evento no nível do formulário não tem efeito nas propriedades do evento do objeto.  
  
O número de objetos envolvidos num evento, depende da natureza do evento:  
  
 Evento On Load - os métodos de objeto de todos os objetos do formulário (de todas as páginas) que tenham selecionada a propriedade de evento On Load serão chamados. Então, se a propriedade do evento On Load for selecionada, o método de formulário será chamado.  
 Eventos On Activate ou On Resize - nenhum método de objeto será chamado porque este evento aplica ao formulário como um todo e não como um objeto em particular. Portanto, se o evento de formulário On Activate estiver selecionado, somente será chamado o método do formulário.  
 Evento On Timer - este evento é gerado somente se o método de formulário contém uma chamada anterior para o comando [SET TIMER](set-timer.md). Se a propriedade de evento de formulário On Timer, somente o método de formulário receberá o evento, não se chamará ao método de formulário.  
 Evento On Drag Over, - somente será chamado o método do objeto soltável envolvido no evento (se a propriedade de evento "soltável" estiver selecionada para o objeto). Não se chamará o método do formulário.  
 Pelo contrário, para o evento On Begin Drag over,, se chamará o método do objeto ou o método do formulário do objeto arrastado (se a propriedade do evento "Arrastável" estiver selecionada para o objeto).  
  
  
AVISO: Ao contrário de outros eventos, durante um evento On Begin Drag over, o método chamado é executado no contexto do processo de arrastar e soltar do objeto fonte, não no contexto do processo de arrastar e soltar o objeto de destino. Para maior informação, consulte a seção *Arrastar e Soltar*  
  
 Se os eventosOn Mouse Enter, On Mouse Move e On Mouse Leave foram selecionados para o formulário, são gerados para cada objeto do formulário. Se estiverem selecionados para um objeto, são gerados somente para o objeto. No caso de superposição de objetos, o evento é gerado pelo primeiro objeto capaz de gerenciá-lo que se encontre do nível superior ao mais baixo. Os objetos que se fizeram invisíveis utilizando o comando [OBJECT SET VISIBLE](object-set-visible.md) não geram estes eventos. Durante a entrada de dados, outros objetos podem receber este tipo de eventos dependendo da posição do mouse.  
 Note que o evento On Mouse Move é gerado quando o cursor do mouse se mexe mas também quando o usuário pressiona uma tecla de modificação como Maiús, Caps Lock, Ctrl ou Opção (isto permite manipular as operações de arrastar e soltar de tipo copia o deslocamento).  
 Registros em lista: a sequência de chamadas a métodos e eventos de formulários nos formulários listados exibidos via[DISPLAY SELECTION](display-selection.md) / [MODIFY SELECTION](modify-selection.md) e os subformularios é a seguinte:  

| Para cada objeto da área de cabeçalho:            |
| ------------------------------------------------- |
| Método objeto com evento On Header                |
| Método formulário com evento On Header            |
| Para cada registro:                               |
| Para cada objeto na área de detalhe:              |
| Método de objeto com evento On Display Detail     |
| Método de formulário com evento On Display Detail |
  
  
 Não se permite chamar um comando 4D que amostre uma caixa de diálogo apartir dos eventos On Display Detail e On Header e gera um erro de sintaxe. Mais particularmente, os comandos relacionados são: [ALERT](alert.md), [DIALOG](dialog.md), [CONFIRM](confirm.md), [Request](request.md), [ADD RECORD](add-record.md), [MODIFY RECORD](modify-record.md), [DISPLAY SELECTION](display-selection.md) e [MODIFY SELECTION](modify-selection.md).  
  
On Page Change: este evento somente está disponível ao nível dos formulários (é chamado no método formulário). É gerado toda vez que a página atual do formulário (seguido de uma chamada ao comando [FORM GOTO PAGE](form-goto-page.md) ou de uma ação padrão de navegação). Note que o evento é gerado após a página carregar completamente, quer dizer, quando todos os objetos que contém tiverem sido inicializados (incluindo as áreas web). Este evento é útil para executar código que necessite que todos os objetos sejam inicializados de antemão. Também pode usar esse comando para otimizar a aplicação ao executar código (por exemplo, uma pesquisa) apenas depois da exibição de uma página específica do formulário e não imediatamente ao carregar a página.  
  
1\. Se o usuário não acessar a página, o código não será executado.  
  
A seguinte lista faz um resumo de como são chamados os métodos de formulário e objetos para cada tipo de evento:  
  
| Evento                   | Métodos de objeto                  | Método de formulario | Que objetos               |
| ------------------------ | ---------------------------------- | -------------------- | ------------------------- |
| On Load                  | Sim                                | Sim                  | Todos                     |
| On Unload                | Sim                                | Sim                  | Todos                     |
| On Validate              | Sim                                | Sim                  | Todos                     |
| On Clicked               | Sim (se clicável ou editável) (\*) | Sim                  | Apenas o objeto implicado |
| On Double Clicked        | Sim (se clicável ou editável) (\*) | Sim                  | Apenas o objeto implicado |
| On Before Keystroke      | Sim (se editável) (\*)             | Sim                  | Apenas o objeto implicado |
| On After Keystroke       | Sim (se editável) (\*)             | Sim                  | Apenas o objeto implicado |
| On After Edit            | Sim (se editável) (\*)             | Sim                  | Apenas o objeto implicado |
| On Getting Focus         | Sim (se tabulável) (\*)            | Sim                  | Apenas o objeto implicado |
| On Losing Focus          | Sim (se tabulável) (\*)            | Sim                  | Apenas o objeto implicado |
| On Activate              | Nunca                              | Sim                  | Nenhum                    |
| On Deactivate            | Nunca                              | Sim                  | Nenhum                    |
| On Outside Call          | Nunca                              | Sim                  | Nenhum                    |
| On Page Change           | Never                              | Yes                  | Nenhum                    |
| On Begin drag over       | Sim (se arrastável) (\*\*)         | Sim                  | Apenas o objeto implicado |
| On Drop                  | Sim (se soltável) (\*\*)           | Sim                  | Apenas o objeto implicado |
| On Drag Over             | Sim (se soltável) (\*\*)           | Nunca                | Apenas o objeto implicado |
| On Mouse Enter           | Sim                                | Sim                  | Todos                     |
| On Mouse Move            | Sim                                | Sim                  | Todos                     |
| On Mouse Leave           | Sim                                | Sim                  | Todos                     |
| On Mouse Up              | Yes                                | Never                | Involved object only      |
| On Menu Selected         | Nunca                              | Sim                  | Nenhum                    |
| On bound variable change | Nunca                              | Sim                  | Nenhum                    |
| On Data Change           | Sim (se modificável) (\*)          | Sim                  | Apenas o objeto implicado |
| On Plug in Area          | Sim                                | Sim                  | Apenas o objeto implicado |
| On Header                | Sim                                | Sim                  | Todos                     |
| On Printing Detail       | Sim                                | Sim                  | Todos                     |
| On Printing Break        | Sim                                | Sim                  | Todos                     |
| On Printing Footer       | Sim                                | Sim                  | Todos                     |
| On Close Box             | Nunca                              | Sim                  | Nenhum                    |
| On Display Detail        | Sim                                | Sim                  | Todos                     |
| On Open Detail           | Não, exceto para List boxes        | Sim                  | Nenhum exceto List box    |
| On Close Detail          | Não, exceto para List boxes        | Sim                  | Nenhum exceto List box    |
| On Resize                | Nunca                              | Sim                  | Nenhum                    |
| On Selection Change      | Sim (\*\*\*)                       | Sim                  | Só o objeto implicado     |
| On Load Record           | Nunca                              | Sim                  | Nenhum                    |
| On Timer                 | Nunca                              | Sim                  | Nenhum                    |
| On Scroll                | Sí                                 | Nunca                | Apenas o objeto implicado |
| On Picture Scroll        | Sim                                | Sim                  | Apenas o objeto implicado |
| On Before Data Entry     | Sim (List box)                     | Nunca                | Apenas o objeto implicado |
| On Column Moved          | Sim (List box)                     | Nunca                | Apenas o objeto implicado |
| On Row Moved             | Sim (List box)                     | Nunca                | Apenas o objeto implicado |
| On Column Resize         | Sim (List box)                     | Nunca                | Apenas o objeto implicado |
| On Header Click          | Sim (List box)                     | Nunca                | Apenas o objeto implicado |
| On Footer Click          | Yes (List box)                     | Never                | Apenas o objeto implicado |
| On After Sort            | Sim (List box)                     | Nunca                | Apenas o objeto implicado |
| On Long Click            | Sim (Botón 3D)                     | Sim                  | Apenas o objeto implicado |
| On Alternative Click     | Sim (Botón 3D y list box)          | Nunca                | Apenas o objeto implicado |
| On Expand                | Sim (Lista jerárq.)                | Nunca                | Apenas o objeto implicado |
| On Collapse              | Sim (Lista jerárq.)                | Nunca                | Apenas o objeto implicado |
| On Delete Action         | Yes (Hier. list and list box)      | Never                | Apenas o objeto implicado |
| On URL Resource Loading  | Yes (Web Area)                     | Never                | Apenas o objeto implicado |
| On Begin URL Loading     | Yes (Web Area)                     | Never                | Apenas o objeto implicado |
| On URL Loading Error     | Yes (Web Area)                     | Never                | Apenas o objeto implicado |
| On URL Filtering         | Yes (Web Area)                     | Never                | Apenas o objeto implicado |
| On End URL Loading       | Yes (Web Area)                     | Never                | Apenas o objeto implicado |
| On Open External Link    | Yes (Web Area)                     | Never                | Apenas o objeto implicado |
| On Window Opening Denied | Yes (Web Area)                     | Never                | Apenas o objeto implicado |
| On VP Ready              | Yes (4D View Pro Area)             | Never                | Apenas o objeto implicado |
| On Row Resize            | Yes (4D View Pro Area)             | Never                | Apenas o objeto implicado |
  
  
(\*) Para mais informação, ver "Eventos, objetos e propriedades" abaixo.  
  
(\*\*) Consulte "*Arrastar e Soltar*" para saber mais.  
(\*\*\*) Só os objetos de tipo list box, lista hierárquica e subformulario suportam este evento.  
  
IMPORTANTE: sempre lembre que, para qualquer evento, o método de um formulário ou de um objeto são chamadas se o evento correspondente é selecionado para o formulário ou objeto. O benefício de desativar eventos no ambiente Desenho (usando a LIsta de propriedades do editor de formulários) é que você pode reduzir de maneira importante o número de chamadas a métodos e portanto otimizar de maneira significativa a velocidade de executar seus formulários.  
  
Aviso: os eventos On Load e On Unload são gerados por objetos se estiverem ativados para o objeto e o formulário ao qual pertence o objeto. Se os eventos estiverem ativados para o objeto apenas, nao ocorrerao; estes dois eventos também devem ser ativados ao nível do formulario.

#### Eventos, Objetos e Propriedades 

Um método de objeto é chamado se o evento pode realmente ocorrer para o objeto, dependendo de sua natureza e propriedades. A seguinte seção detalha os eventos que você fará uso geralmente para lidar com os diferentes tipos de objetos.

Lembre que a Lista de propriedades do editor de formulários somente mostra os eventos compatíveis com o objeto selecionado ou o formulário.

##### Objetos clicáveis 

Os objetos clicáveis são gerenciáveis principalmente com o mouse. São os seguintes:  
  
* Variáveis ​​ou campos editáveis ​​booleanas
* Botões, botões padrão, botões de rádio, caixas de seleção, grades de botão
* Botões 3D, botões de opção 3D, caixas de seleção 3D
* Menus suspensos, menus hierárquicos drop down, menus de imagem
* Listas drop-down, menus
* Áreas de deslocamento, listas hierárquicas, list box
* Botões invisíveis, botões reversa, botões opção imagem
* Termômetros, réguas, mostradores (também conhecidos como objetos deslizante)
* Abas
* Separadores.
  
QuandoOn Clicked ou On Double Clicked é selecionado para um desses objetos, você pode detectar e lidar com os cliques sobre o objeto, usando o comando Form event code que retorna On Clicked ou On Double Clicked,dependendo do caso.  
Se ambos os eventos são selecionados para um objeto, os eventos On Clicked e On Double Clicked serão gerados quando o usuário clicar duas vezes no objeto.  
**Nota**: A partir da v14, campos e Variáveis ​​editáveis ​​que o contém texto (tipo texto, datas, hora ou número) também geram eventos On Clicked e On Double Clicked.  

Para todos esses objetos, o evento On Clicked ocorre uma vez o botão do mouse seja liberado. No entanto, existem várias exceções:  

* Botões invisíveis - O evento On Clicked ocorre assim que você clicar e não esperar que o botão do mouse seja liberado.
* objetos deslizáveis (termômetros, réguas, e mostradores) - Se o formato de saída indicar que o método de objeto deve ser chamado enquanto você desliza o controle, o evento On Clicked ocorre assim que você clicar.

No contexto do evento On Clicked, você pode testar o número de cliques feitos pelo usuário utilizando o comando [Clickcount](clickcount.md).  

**Nota**: Alguns destes objetos pode ser ativados com o teclado. Por exemplo, uma vez que uma caixa de seleção receber o foco, pode ser selecionada usando a barra de espaço. Neste caso, é gerado um evento On Clicked.  
**Aviso**: os combo boxes não são considerados objetos clicáveis. Um combo box deve ser tratado como uma área de texto editável cuja lista suspensa associada fornece valores padrão. Portanto, você pode lidar com a entrada de dados em um combo box com a ajuda de eventos On Before Keystroke, On After Keystroke e On Data Change.

##### Objetos editáveis por teclado 

Os objetos editáveis por teclado são objetos nos quais você introduz dados utilizando o teclado e para os quais pode filtrar os dados de entrada ao menor nível detectando os eventos On After Edit, On Before Keystroke, On After Keystroke e On Selection Change. 

Os objetos e tipos de dados editáveis são os seguintes:

* Todos os campos editáveis do tipo alfa, texto, data, hora, numérico ou (On After Edit somente) imagem
* Todas las variáveis editáveis do tipo alfa, texto, data, hora, numérico ou (On After Edit somente) imagem
* Combo boxes (com exceção de On Selection Change)
* Listboxes.

**Nota**: A partir de 4D v14, os campos e variáveis editáveis que contém texto (tipo texto, data, hora ou número) também geram os eventos On Clicked e On Double Clicked.

**Nota:** Mesmo sendo objetos “editáveis”, as listas hierárquicas não dirigem os eventos formulário On After Edit, On Before Keystroke e On After Keystroke (Veja também o parágrafo “Listas hierárquicas” a seguir). 

* On Before Keystroke e On After Keystroke

**Nota:**  o evento On After Keystroke pode geralmente ser substituído pelo evento On After Edit (veja a seguir).   
  
Assim que os eventos On Before Keystroke e On After Keystroke tenham sido selecionados para um objeto, pode detectar e gerenciar as pulsações de teclas no objeto, fazendo uso do comando **Form event code** que retornará On Before Keystroke e depois On After Keystroke (para maior informação, consulte a descrição do comando [Get edited text](get-edited-text.md)). Estes eventos também são ativados por comandos de linguagem que simulam a ação do usuário, tais como [POST KEY](post-key.md). 

Lembre que as modificações do usuário que não são realizadas fazendo uso do teclado (colar, arrastar-soltar, etc.) não são tidas em conta. A fim de processar estes eventos, deverá utilizar On After Edit.

**Nota:** Os eventos On Before Keystroke e On After Keystroke não são gerados durante a utilização de um método de entrada. Um método de entrada (ou IME, Input Method Editor) é um programa ou um componente sistema que pode ser utilizado para introduzir caracteres complexos ou símbolos (por exemplo, chineses ou japoneses) utilizando um teclado ocidental.

* On After Edit  
Quando utilizado, este evento é gerado depois de toda alteração feita ao conteúdo de um objeto editável, sem importar a ação que originou a alteração, Quer dizer:  
\- As ações de edição padrão que modificam o conteúdo tais como colar, cortar, apagar ou cancelar;  
\- Soltar um valor (ação similar a colar);  
\- Toda entrada de teclado realizada pelo usuário; neste caso, o evento On After Edit é gerado depois dos eventos On Before Keystroke e On After Keystroke, se utilizados.  
\- Toda modificação realizada utilizando um comando de linguagem que estimule una ação de usuário (por exemplo [POST KEY](post-key.md)).  
Atenção, as seguintes ações NÃO ativam este evento:  
\- As ações de edição que não modificam o conteúdo da área, como copiar ou selecionar tudo, ou arrastar um valor (ação semelhante a copiar); contudo, estas ações modificam a localização do cursor e desencadeiam o evento On Selection Change.  
\- As modificações aos conteúdos por programação, com exceção para os comandos que simulam uma ação do usuário.  
Este evento pode ser utilizado para controlar ações de usuário a fim de prevenir que colem um texto muito longo, bloquear alguns caracteres ou evitar que um campo de senha seja cortado.
* On Selection Change: Quando aplicado a um campo ou variável de texto dinâmico (editável ou não), este evento é ativado toda vez que a posição do cursor muda. Isto acontece por exemplo, assim que o usuário seleciona o texto utilizando o mouse ou as teclas de seta do teclado, ou quando o usuário introduz texto. Isto lhe permite chamar, por exemplo, comandos tais como [GET HIGHLIGHT](get-highlight.md).

##### Objetos Modificáveis 

Os objetos modificáveis tem uma fonte de dados cujos valores podem ser modificados utilizando o mouse ou o teclado; não são considerados verdadeiramente como controles de interface de usuário controlados através do evento On Clicked. Estes objetos são os seguintes:

* Todos os campos editáveis (com exceção dos BLOBs)
* Todas as variáveis editáveis (com exceção dos BLOBs, ponteiros e arrays)
* Combo boxes
* Objetos externos (para os quais a entrada de dados é validada pelo plug-in)
* Listas hierárquicas
* Listboxes e colunas de list box.

Estes objetos recebem eventos On Data Change. Quando o evento On Data Change estiver selecionado para um destes objetos, você pode detectar e gerenciar a mudança dos valores da fonte de dados, utilizando o comando Form event code que retornará On Data Change. O evento é gerado assim que a variável associada com o objeto seja atualizada internamente por 4D (geralmente, quando a área de entrada do objeto perde o foco). 

##### Objetos Tabuláveis 

Os objetos tabuláveis obtém o foco quando utiliza a tecla Tab para chegar a eles e/ou quando faz clique neles. O objeto que tem o foco recebe os caracteres (digitados no teclado) que não são modificadores de um comando de menu ou de um objeto como um botão.

Todos os objetos são tabuláveis, COM EXCEPÇÃO dos seguintes:

* Variáveis ou campos não editáveis
* Grades de botões
* Botões 3D, botões opção 3D, caixas de seleção 3D
* Menus drop-down, menus hierárquicos drop-down
* Menus/listas drop-down
* Menus imagem
* Áreas de deslocamento
* Botões invisíveis, botões inversos, botões opção imagem
* Gráficos
* Objetos externos (para os quais a entrada de dados é aceitada pelo plug-in 4D)
* Tabs
* Separadores.

Quando os eventos On Getting Focus e/ou On losing Focus são selecionados para um objeto tabulável, você pode detectar e gerenciar a mudança de foco, fazendo uso do comando Form event code que retornará On Getting Focus ou On losing Focus, dependendo do caso.

##### Botões 3D 

Os botões 3D permitem estabelecer interfaces gráficas avançadas (para uma descrição dos botões 3D, consulte o Manual de Desenho). Além dos eventos genéricos, dois eventos específicos podem ser utilizados para gerenciar estes botões:

* On Long Click: este evento é gerado quando um botão 3D recebe um clique e o botão do mouse é pressionado por um certo período de tempo. Na teoria, o período de tempo para o qual este evento é gerado é igual ao comprimento máximo de tempo que separa um duplo clique, conforme definido nas preferências do sistema.  
Este evento pode ser gerado por todos os estilos de botões 3D, botões de opção 3D y caixas de seleção 3D, com excepção dos botões 3D de “velha geração” (estilo offset de fundo) e as áreas de setas de botões 3D com menus suspensos (veja a seguir).

Este evento é utilizado geralmente para mostrar menus suspensos no caso de cliques longos nos botões. O evento On Clicked, se estiver selecionado, será gerado se o usuário liberar o botão do mouse antes do tempo limite do “clique longo”. 

* On Alternative Click alguns estilos de botões 3D podem estar associados a um menu suspenso e mostrar uma seta. Clicar nesta seta faz com que seja exibida uma caixa de seleção que oferece um conjunto de ações adicionais em relação com a ação principal do botão.
* 4D permite gerenciar este tipo de botão utilizando o evento On Alternative Click.Este evento é gerado quando o usuário clica na “seta” (assim que o botão do mouse seja pressionado):

 \- Se o menu suspenso for do tipo “separado,” o evento somente é gerado quando um clique ocorre na parte do botão com a seta.

 \- Se o menu suspenso for do tipo “ligado,” o evento é gerado quando ocorre um clique em qualquer parte do botão. Por favor tenha em conta que o evento On Long Click não pode ser gerado com este tipo de botão.

![](../assets/en/commands/pict2074286.en.png)

Os estilos de botões 3D, botões de opção 3D e caixas de seleção 3D que aceitam a propriedade “Com menu suspenso” são: Nenhum, Botão de barra, Bevel, Bevel arredondado e Office XP.

##### List box 

Vários eventos de formulário podem ser utilizados para gerenciar as diferentes características específicas dos list box: 

* On Before Data Entry: este evento é gerado pouco antes que uma célula de list box seja editada (antes de que o cursor de entrada apareça). Este evento permite ao desenvolvedor por exemplo, mostrar um texto diferente dependendo de que o usuário esteja em modo visualização ou em modo edição.
* On Selection Change: este evento é gerado sempre que a seleção atual de linhas ou colunas de list box são alteradas. Esse evento também é gerado para listas de registros e listas hierárquicas.
* On Column Moved: este evento é gerado quando uma coluna de list box é movida pelo usuário usando arrastar e soltar. O evento não é gerado se a coluna é arrastada e soltada para a sua localização inicial. O comando [LISTBOX MOVED COLUMN NUMBER](listbox-moved-column-number.md) retorna a posição nova coluna.
* On Row Moved: este evento é gerado quando uma linha de list box é movida pelo usuário usando arrastar e soltar. O evento não é gerado se a linha é arrastada e soltada para a sua localização inicial.
* On Column Resize: este evento é gerado quando quando o comprimento de uma coluna no list box for mudado por um usuário. A partir de 4D v16, o evento é ativado "ao vivo", ou seja, enviando continuamente durante o evento, por tanto tempo quanto a list box ou coluna em questao esteja sendo redimensionada. O redimensionamento é realizado manualmente pelo usuário, ou pode acontecer como resultado do list box e suas colunas sendo redimensionadas junto com a janela de formulário (se o formulário for redimensionado manualmente ou usando o comando [RESIZE FORM WINDOW](resize-form-window.md)).  
 Nota: O evento On Column Resize nao é ativado quando uma coluna "falsa" for redimensionada (para saber mais sobre colunas falsas, veja *Redimensionar tema Opcoes*).
* On Expand e On Collapse: esses eventos são gerados quando uma linha de listbox hierárquico se expande ou contrai.
* On Header Click: este evento é gerado quando ocorre um clique no cabeçalho de uma coluna no list box. Neste caso, o comando [Self](self.md) lhe permite conhecer o cabeçalho da coluna na que foi feito clique. O evento On Clicked é gerado quando um clique direito (Windows) ou Ctrl+clique (Mac OS) ocorre em uma coluna ou em um cabeçalho de coluna. Pode testar o número de cliques realizados pelo usuário utilizando o comando [Clickcount](clickcount.md).  
Se a propriedade **Ordenavel** foi selecionada para a list box, você pode decidir se permite ou não uma ordenação padrão da coluna passando o valor 0 ou -1 na variável $0:  
\- Se $0 for igual a 0, se realiza a ordenação padrão  
\- Se $0 for igual a -1, não se realiza a ordenação padrão e o cabeçalho não é mostrada a flecha de ordenação. O desenvolvedor pode também gerar uma ordenação das colunas baseada em critérios de ordenação personalizados usando os comandos de gestão de arrays de 4D.  
Se a propriedade **Ordenavel** não estiver selecionada para a list box, a variável $0 não é utilizada.
* On Footer Click: este evento está disponível para o objeto list box ou coluna de list box. É gerado quando ocorre um clique no rodapé de um list box ou de uma coluna de list box. Neste caso, o comando [OBJECT Get pointer](object-get-pointer.md) retorna um ponteiro à variável do rodapé onde se fez o clique. O evento é gerado para clique esquerdo e direito.  
Pode testar o número de cliques realizados pelo usuário utilizando o comando [Clickcount](clickcount.md).
* On After Sort: este evento é gerado logo depois de realisar uma ordenação padrão (entretanto, não é gerada se $0 devolver -1 no evento On Header Click). Este mecanismo é útil para conservar os sentidos das últimas ordenações efetuadas pelo usuário. Neste evento, o comando \[#cmd id="308"/\] retorna um ponteiro à variável da coluna que foi ordenada.
* On Delete Action: este evento é gerado cada vez que o usuario tenta apagar os elementos selecionados pressionando a tecla Deletar (**Del** ou **Backspace**) ou selecionando um elemento de menu cuja ação padrão associada seja Apagar (tal como o comando **Eliminar** do menu **Edicição**. Este evento só está disponível a nivel do objeto list box. Note que gerar o evento é a única ação realizada por 4D: o programa não apaga os elementos. O desenvolvedor deve manejar a eliminaçao e as mensagens de aviso prévio que sejam mostradas.
* On Scroll (novo na v15): Este evento é gerado assim que o usuário move as filas ou colunas da lista. O evento é gerado somente quando a mudança é o resultado de uma ação do usuário: usando barras e / ou setas de rolagem, roda do mouse ou teclado. Ele não é gerado quando a mudança é devida à execução do comando [OBJECT SET SCROLL POSITION ](object-set-scroll-position.md).  
Esse evento é acionado após qualquer outr evento de usuário relacionado ação de rolagem (On Clicked, On After Keystroke, etc.). O evento só é gerado no método objeto (não no método de formulário). Ver Exemplo 15.
* On Alternative Click(novo na v15): Este evento é gerado nas colunas de list box de tipo array de objetos quando o usuário clicar em um botão reticências de Widget (atributo "alternateButton"). Para obter mais informações, consulte *Use arrays de objetos em colunas*
Dois eventos genéricos também pode ser usados no contexto de um list box de tipo "seleção":  
* On Open Detail:: Este evento é gerado quando um registro está prestes a ser mostrado no formulário detalhado associado ao list box de tipo " seleção" (e antes que este formulário seja aberto).
* On Close Detail Este evento é gerado quando um registro exibido no formulário detalhado associado ao list box esteja prestes a ser fechado (independentemente de se o registro foi modificado ou não).

##### Listas Hierárquicas 

Além dos eventos genéricos, vários eventos específicos podem ser utilizados para administrar as ações que os usuários nas listas hierárquicas:

* On Selection Change: este evento se genera cada vez que la selección en la lista jerárquica se modifica después de un clic o de que se presione una tecla.  
Este evento también es generado en los objetos list box y listas de registros.
* On Expand: este evento se genera cada vez que un elemento de la lista jerárquica se despliega con un clic o al presionar una tecla.
* On Collapse: este evento se genera cada vez que un elemento de la lista jerárquica se contrae con un clic o al presionar una tecla.
* On Delete Action: este evento se genera cada vez que el usuario intenta borrar los elementos seleccionados presionando una tecla de supresión (**Supr** o **Retroceso**) o seleccionando el comando **Eliminar** del menú **Edición**. Note que la generación del evento es la única acción efectuada por 4D: el programa no borra ningún elemento. El desarrollador debe encargarse de la eliminación y de todos los mensajes de alerta que aparezcan (ver el ejemplo).

Estos eventos no son mutuamente exclusivos. Pueden generarse uno después del otro para una lista jerárquica:

\- En respuesta a presionar una tecla (en orden):

| **Evento**            | **Contexto**                                                             |
| --------------------- | ------------------------------------------------------------------------ |
| On Data Change        | Un elemento estaba en edición                                            |
| On Expand/On Collapse | Apertura/cierre de una sublista utilizando las teclas de flechas -> o <- |
| On Selection Change   | Selección de un nuevo elemento                                           |
| On Clicked            | Activación de la lista utilizando el teclado                             |
  
  
\- En respuesta a un clic (en orden):  
  
| **Evento**                             | **Contexto**                                                                      |
| -------------------------------------- | --------------------------------------------------------------------------------- |
| On Data Change                         | Un elemento estaba en edición                                                     |
| On Expand/On Collapse                  | Apertura/cierre de una sublista utilizando los iconos de despliegue/contracción o |
| Doble-clic en una sublista no editable |                                                                                   |
| On Selection Change                    | Selección de un nuevo elemento                                                    |
| On Clicked / On Double Clicked         | Activación de la lista por un clic o un doble clic                                |

##### Variáveis e campos imagem 

* O evento formulário On Picture Scroll é gerado assim que o usuário desloca uma imagem dentro da área (campo ou variável) que o contém. Pode deslocar o conteúdo de uma área imagem quando o tamanho da área é menor a seu conteúdo e o formato de visualização é "**Truncado (não centrado)**". Para maior informação, consulte *Formatos Imagem*.  
O evento é gerado quando o deslocamento é o resultado de uma ação do usuário: utilizando os cursores ou as barras de deslocamento, utilizando a roda do mouse ou as teclas de deslocamento do teclado (para maior informação sobre o deslocamento utilizando o teclado, consulte *Barra de rolagem*). Este evento não é gerado quando o objeto se desloca pela execução do comando [OBJECT SET SCROLL POSITION ](object-set-scroll-position.md). Este evento se dispara depois que um evento de usuário relacionado com a ação de eslocamentonão seja gerado (On Clicked, On After Keystroke, etc.). .É gerado no método objeto (e não no método formulário). Consulte o exemplo 14

* (Novo em v16) O evento On Mouse Up é gerado quando o usuário acabou de soltar o botão esquerdo do mouse enquanto arrastando em uma area de imagem (campo ou variável). Este evento é útil, por exemplo, quando quiser que o usuário possa mover, redimensionar ou desenhar objetos em uma área SVG.  
Quando o evento On Mouse Up for gerado, pode obter as coordenadas locais quando o botão do mouse for solto. Estas coordenadas são retornadas em **MouseX** e **MouseY** *Variáveis sistema*. As coordenadas são expressas em pixels em relação ao canto esquerdo superior da imagem (0,0).  
Quando usar este evento, deve chamar o comando [Is waiting mouse up](is-waiting-mouse-up.md) para manejar casos onde o estado gerente do formulário poderia estar dessincronizado. Este é o caso, por exemplo, quando uma caixa de diálogo de alerta for exibida acima do formulário enquanto o botão do mouse ainda não foi solto. Para saber mais e ver um exemplo de uso do evento On Mouse Up, veja a descrição do comando [Is waiting mouse up](is-waiting-mouse-up.md).  
    
**Nota:** se a opção "arrastável" não estiver marcada para o objeto de imagem, o evento On Mouse Up nunca é gerado.

##### Subformulários 

Um objeto de conteúdo do sub-formulário (objeto incluído no formulário pai contém uma instância do sub-formulário) suporta os seguintes eventos:

* On Load e On Unload: abertura e fechamento do sub-formulário respectivamente (esses eventos também devem ser ativados no pai do formulário para que eles sejam tidos em conta). Observe que esses eventos são gerados antes do formulário pai. Além disso, observe que de acordo com os princípios de funcionamento dos eventos de formulário, se o sub-formulário está localizado em uma página diferente de 0 ou 1, esses eventos só irão gerar quando a página é exibida/fechada (e não quando o formulário é exibido/fechado).
* On Validate: validação da entrada com o sub-formulário.
* On Data Change: O valor da variável do objeto de conteúdo do sub-formulário foi modificado.
* On Getting Focus e On Losing Focus: o conteúdo do sub-formulário acaba de receber ou perder o foco. Esses eventos são gerados no método do objeto sub-formulário quando eles são selecionados. Enviam para o formulário do método sub-formulário, que significa por exemplo que você pode gerenciar a visualização dos botões de navegação no sub-formulário em função do foco. Observe que os próprios objetos do sub-formulário podem ter o foco.
* On bound variable change: este evento específico é gerado no contexto do método de formulário do sub-formulário assim que um valor é atribuído à variável associado com o sub-formulário no formulário pai (mesmo se o mesmo valor é retribuído) e se o sub-formulário pertence à página do formulário atual ou a página 0\. Para obter maior informação sobre a gestão de sub-formulários, consulte o manual de *Desenho*.

**Nota:** É possível definir todos os tipos de eventos personalizados que podem ocorrer em um sub-formulário através do comando [CALL SUBFORM CONTAINER](call-subform-container.md). Este comando lhe permite chamar o método do objeto de recipiente e passar um código de evento.

Os eventos abaixo também são recebidos no método formulário do subformulário:

* Os eventos On Clicked e On Double Clicked gerados no sub-formulário são recebidos em primeiro lugar pelo método formulário do sub-formulário e logo pelo método formulário do formulário local.
* On Resize\- este evento é eviado ao método formulário do subformulário quando o tamanho de objeto subformulário de formulário pai tenha sido modificado.

##### Áreas Web 

  
Existem sete eventos para formulários especificamente disponíveis para as zonas de web:

* On Begin URL Loading: este evento ocorre ao início da carga de um nuevo URL na área Web. A variável "URL" associada com a área web permite conhecer o URL que está carregando.  
**Nota:** O URL que está carregando é diferente do URL atual (consulte a descrição do comando [WA Get current URL](wa-get-current-url.md "WA Get current URL")).
* On URL Resource Loading: este evento ocorre cada vez que carga um novo recurso (imagem, moldura, etc.) na página web atual. A variável "Progressão" associada a área lhe permite buscar o estado atual da carga.
* On End URL Loading: este evento ocorre quando todos os recursos da URL atual são carregados. Você pode chamar o comando WA Get current URL para conhecer a URL carregada.
* On URL Loading Error: este evento ocorre quando um erro é detectado ao carregar uma URL. Você pode chamar o comando WA GET LAST URL ERROR para obter informações sobre o erro.
* On URL Filtering: este evento ocorre quando a carga de um URL é bloqueada pela área web devido a um filtro definido utilizando o comando [WA SET URL FILTERS](wa-set-url-filters.md "WA SET URL FILTERS"). Pode conhecer o URL bloqueado utilizando o comando [WA Get last filtered URL](wa-get-last-filtered-url.md "WA Get last filtered URL").
* On Open External Link: este evento ocorre quando a carga de um URL é bloqueada pela área Web e o URL é aberto com o navegador do sistema atual, devido a um filtro definido utilizando o comando [WA SET EXTERNAL LINKS FILTERS](wa-set-external-links-filters.md "WA SET EXTERNAL LINKS FILTERS"). Pode conhecer o URL bloqueado utilizando o comando [WA Get last filtered URL](wa-get-last-filtered-url.md "WA Get last filtered URL").
* On Window Opening Denied: este evento ocorre quando ao abrir uma janela pop-up ela se bloqueia para a área Web. As áreas web 4D não permitem a abertura de janelas pop-up. Pode conhecer o URL bloqueado utilizando o comando [WA Get last filtered URL](wa-get-last-filtered-url.md "WA Get last filtered URL").

##### áreas 4D View Pro 

Os eventos abaixo estão disponíveis para áreas 4D View Pro.

* On After Edit: Este evento é gerado depois que uma edição foi feita na área 4D View Pro.
* On Clicked: Este evento é gerado quando acontecer um clique no viewport da área 4D View Pro (fora dos cabeçalhos, barras de rolagem ou barra de ferramentas)
* On Column Resize: Este evento é gerado quando a largura de uma coluna é modificada pelo usuário.
* On Double Clicked: Este evento é gerado quando acontecer um duplo clique na área 4D View Pro.
* On Header Click:Este evento é gerado quando um clique acontecer no cabeçalho de coluna ou linha.
* On Row Resize: Este evento é gerado quando a altura de uma linha for modificada por um usuário.
* On Selection Change: Este evento é gerado quando a seleção atual de linhas ou colunas for modificada.
* On VP ReadyEste evento é gerado quando o carregamento de área 4D View Pro estiver completo. Precisa usar este evento para escrever o código de inicialização para esta área.

Para saber mais sobre estes eventos, veja a seção *Evento formulário On VP Ready*.

#### Exemplo 1 

Este exemplo mostra o evento On Validate utilizado para atribuir automaticamente (a um campo) a fecha quando o registro é modificado:

```4d
  //Método de formulário
 Case of
  // ...
    :(Form event code=On Validate)
       [aTable]Last Modified On:=Current date
 End case
```

#### Exemplo 2 

Neste exemplo, a gestão completa de um menú drop-down, (inicialização, clics do usuário, e liberação de objeto) está encapsulado no método de objeto:

```4d
  //asBurgerSize Método objeto lista Drop-down
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asBurgerSize;3)
       asBurgerSize{1}:="Small"
       asBurgerSize{1}:="Medium"
       asBurgerSize{1}:="Large"
    :(Form event code=On Clicked)
       If(asBurgerSize#0)
          ALERT("Você escolheu um"+asBurgerSize{asBurgerSize}+" hamburguer.")
       End if
    :(Form event code=On Unload)
       CLEAR VARIABLE(asBurgerSize)
 End case
```

#### Exemplo 3 

Este exemplo mostra como aceitar e administrar uma operação de arrastar e soltar para um objeto de campo que aceita somente valores de imagens, em um método de objeto.

```4d
  //[aTable]aPicture Método de objeto campo imagem editável
 Case of
    :(Form event code=On Drag Over)
  //Uma operação arrastar e soltar foi inicada e o mouse está atualmente sobre o campo
  //Obtém a informação sobre o objeto fonte
       DRAG AND DROP PROPERTIES($vpSrcObject;$vlSrcElement;$lSrcProcess)
  //Note que não é preciso testar o número ID do processo fonte
  //para que o método objeto seja executado, já que é o mesmo processo
       $vlDataType:=Type($vpSrcObject->)
  //a fonte de dados é uma imagem? (campo, variável ou array)?
       If(($vlDataType=Is picture)|($vlDataType=Picture array))
  //se sim, aceitar o arrastar.
          $0:=0
       Else
  //Se não, recusar arrastar
          $0:=-1
       End if
    :(Form event code=On Drop)
  //A fonte de dados foi solta no objeto, portanto é preciso copiá-la
  //no objeto
  //Obtém a informação sobre o objeto fonte
       DRAG AND DROP PROPERTIES($vpSrcObject;$vlSrcElement;$lSrcProcess)
       $vlDataType:=Type($vpSrcObject->)
       Case of
  //O objeto fonte é um campo ou variável Imagem
          :($vlDataType=Is picture)
  //O objeto fonte é do mesmo processo? (E assim da mesma janela ou formulário?)
             If($lSrcProcess=Current process)
  //Se sim, apenas copie o valor fonte
                [aTable]aPicture:=$vpSrcObject->
             Else
  //Se não, o objeto fonte é uma variável?
                If(Is a variable($vpSrcObject))
  //Se sim, obtém o valor do processo fonte
                   GET PROCESS VARIABLE($lSrcProcess;$vpSrcObject->;$vgDraggedPict)
                   [aTable]aPicture:=$vgDraggedPict
                Else
  //Se não, use CALL PROCESS para obter o valor campo para processo fonte
                End if
             End if
  //O objeto fonte é um array de imagens
          :($vlDataType=Picture array)
  //O objeto fonte é do mesmo processo? (Portanto da mesma janela e formulário)?
             If($lSrcProcess=Current process)
  //Se sim, apenas copie o valor fonte
                [aTable]aPicture:=$vpSrcObject->{$vlSrcElement}
             Else
  //Se não, obtenha o valor do processo fonte
                GET PROCESS VARIABLE($lSrcProcess;$vpSrcObject->{$vlSrcElement};$vgDraggedPict)
                [aTable]aPicture:=$vgDraggedPict
             End if
       End case
 End case
```

**Nota:** Para outros exemplos mostrando como gerenciar eventos On Drag Over e On Drop, veja os exemplos do comando *\_o\_DRAG AND DROP PROPERTIES*.

#### Exemplo 4 

 Este exemplo é um modelo para um método do formulário. Mostra cada um dos eventos possíveis que podem ocorrer quando um relatório usa um formulário como formulário de saída:

```4d
  //Método de um formulário sendo usado como formulário output para um relatório resumo
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Header)
  //Uma área cabeçalho vai ser impressa
       Case of
          :(Before selection($vpFormTable->))
  //Código para a primeira quebra de cabeçalho vai aqui
          :(Level=1)
  //Código para uma quebra de cabeçalho nível 1 aqui
          :(Level=2)
  //Código para uma quebra de cabeçalho nível 2 aqui
  //...
       End case
    :(Form event code=On Printing Detail)
  //Um registro vai ser impresso
  //Código para cada quebra vai aqui
    :(Form event code=On Printing Break)
  //Uma quebra de área vai ser impressa
       Case of
          :(Level=0)
  //Código para uma quebra de nível 0 aqui
          :(Level=1)
  //Código para uma quebra de nível 1 aqui
  //...
       End case
    :(Form event code=On Printing Footer)
       If(End selection($vpFormTable->))
  //Código para o último rodapé aqui
       Else
  //Código para um cabeçalho aqui
       End if
 End case
```

#### Exemplo 5 

Este exemplo mostra o modelo de um método de formulário que administra os eventos que podem ocorrer em um formulário mostrado utilizando os comandos [DISPLAY SELECTION](display-selection.md) ou [MODIFY SELECTION](modify-selection.md). Por propósitos didáticos, mostra a natureza do evento na barra de título da janela do formulário.

```4d
  //Um método de formulário
 Case of
    :(Form event code=On Load)
       $vsTheEvent:="O formulário vai ser exibido"
    :(Form event code=On Unload)
       $vsTheEvent:="O formulário saida vai desaparecer da tela"
    :(Form event code=On Display Detail)
       $vsTheEvent:="Exibindo registro  #"+String(Selected record number([TheTable]))
    :(Form event code=On Menu Selected)
       $vsTheEvent:="Um item de menu foi selecionado"
    :(Form event code=On Header")
       $vsTheEvent:="A área cabeçalho vai ser desenhada"
    :(Form event code=On Clicked")
       $vsTheEvent:="Um registro foi clicado"
    :(Form event code=On Double Clicked")
       $vsTheEvent:="Um registro recebeu duplo clique"
    :(Form event code=On Open Detail)
       $vsTheEvent:="O registro #"+String(Selected record number([TheTable]))+" recebeu duplo clique"
    :(Form event code=On Close Detail)
       $vsTheEvent:="Voltar ao formulário form"
    :(Form event code=On Activate)
       $vsTheEvent:="A janela de formulário virou a janela mais à frente"
    :(Form event code=On Deactivate)
       $vsTheEvent:="A janela de formulário não é mais a janela mais à frente"
    :(Form event code=On Menu Selected)
       $vsTheEvent:="Um item menu foi escolhido"
    :(Form event code=On Outside Call)
       $vsTheEvent:="Uma chamada externa foi recebida"
    Else
       $vsTheEvent:="O que aconteceu? Event #"+String(Form event)
 End case
 SET WINDOW TITLE($vsTheEvent)
```

#### Exemplo 6 

 Para os exemplos sobre gestão dos eventos On Before Keystroke e On After Keystroke, ver os exemplos dos comandos [Get edited text](get-edited-text.md), [Keystroke](keystroke.md) y [FILTER KEYSTROKE](filter-keystroke.md).

#### Exemplo 7 

 Este exemplo mostra como tratar da mesma forma os clics e doble clic em uma área de deslocamento:

```4d
  //método de objeto área rolável asChoices
 Case of
    :(Form event code=On Load)
       ARRAY TEXT(asChoices;...)
  //...
       asChoices:=0
    :((Form event code=On Clicked)|(Form event code=On Double Clicked))
       If(asChoices#0)
  //Um item foi clicado, faça algo aqui
  //...
       End if
  //...
 End case
```

#### Exemplo 8 

 Este exemplo mostra como tratar os clics e doble clics utilizando uma resposta diferente. Note o uso do elemento zero para conservar o valor do elemento selecionado:

```4d
  // Método de objeto para a área de deslocamento asOpçoes
 Case of
    :(FORM Event=On Load)
       ARRAY STRING(...;asOpçoes;...)
  // ...
       asOpçoes:=0
       asOpçoes{0}:="0"
    :(FORM Event=On Clicked)
       If(asOpçoes#0)
          If(asOpçoes#Num(asOpçoes))
  // Foi realizado clic em um novo elemento, fazer algo aqui
  // ...
  // Guardar o novo elemento selecionado para a próxima vez
             asOpçoes{0}:=String(asOpçoes)
          End if
       Else
          asOpçoes:=Num(asOpçoes{0})
       End if
    :(FORM Event=On Double Clicked)
       If(asOpçoes#0)
  // Foi realizado doble clic sobre um elemento, fazer algo diferente aqui
       End if
  // ...
 End case
```

#### Exemplo 9 

 Este exemplo mostra como manter uma área de texto a partir de um método desde um método de formulário, utilizando os eventos On Getting Focus e On losing Focus:

```4d
  //[Contacts];Método de formulário"Data Entry"
 Case of
    :(Form event code=On Load)
       var vtStatusArea : Text
       vtStatusArea:=""
    :(Form event code=On Getting Focus)
       RESOLVE POINTER(Focus object;$vsVarName;$vlTableNum;$vlFieldNum)
       If(($vlTableNum#0)&($vlFieldNum#0))
          Case of
             :($vlFieldNum=1) //Campo Sobrenome
                vtStatusArea:="Entre o sobrenome do Contato; a primeira letra será convertida para maiúscula"
  //...
             :($vlFieldNum=10) //Campo CEP (ZIP)
                vtStatusArea:="Entre um código de CEP de 5-díditos; será validado automaticamente"
  //...
          End case
       End if
    :(Form event code=On Losing Focus)
       vtStatusArea:=""
  //...
 End case
```

#### Exemplo 10 

Este exemplo mostra como responder ao evento de fechamento de uma janela com um formulário utilizado para a entrada de dados:

```4d
  //Método para um formulário de entrada
 $vpFormTable:=Current form table
 Case of
  //...
    :(Form event code=On Close Box)
       If(Modified record($vpFormTable->))
          CONFIRM("Este registro foi modificado. Salvar as mudanças?")
          If(OK=1)
             ACCEPT
          Else
             CANCEL
          End if
       Else
          CANCEL
       End if
  //...
 End case
```

#### Exemplo 11 

 Este exemplo mostra como passar a maiúsculas um campo de tipo texto ou alfanumérico cada vez que o valor seja modificado:

```4d
  //[Contacts]First Name Object method
 Case of
  //...
    :(Form event code=On Data Change)
       [Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))
  //...
 End case
```

#### Exemplo 12 

 Este exemplo mostra como passar a maiúsculas um campo de tipo texto ou alfanumérico cada vez que o valor seja modificado:

```4d
  //[Contacts]First Name Object method
 Case of
  //...
    :(Form event code=On Data Change)
       [Contacts]First Name:=Uppercase(Substring([Contacts]First Name;1;1))+Lowercase(Substring([Contacts]First Name;2))
  //...
 End case
```

#### Exemplo 13 

O exemplo abaixo ilustra como manejar uma ação de eliminação nuna lista hierárquica:

```4d
 ... //método da lista hierárquica
:(([#current_title_incode=On Delete Action)
 ARRAY LONGINT($itemsArray;0)
 $Ref:=Selected list items(<>HL;$itemsArray;*)
 $n:=Size of array($itemsArray)
 
 Case of
    :($n=0)
       ALERT("Nenhum elemento selecionado")
       OK:=0
    :($n=1)
       CONFIRM("Quer eliminar este elemento?")
    :($n>1)
       CONFIRM("Quier eliminar estos elementos?")
 End case
 
 If(OK=1)
    For($i;1;$n)
       DELETE FROM LIST(<>HL;$itemsArray{$i};*)
    End for
 End if
```

#### Exemplo 14 

Neste exemplo, o evento formulário On Scroll permite sincronizar a visualização de duas imagens em um formulário. O seguinte código se agrega no método do objeto "satélite" (campo imagen ou variável imagem):

```4d
 Case of
    :(Form event code=On Scroll)
  // tomamos a posição da imagem da esquerda
       OBJECT GET SCROLL POSITION(*;"satellite";vPos;hPos)
  // e a aplicamos a imagem da direita
       OBJECT SET SCROLL POSITION(*;"plan";vPos;hPos;*)
 End case
```

Resultado:

#### Exemplo 15 

Se você deseja desenhar um retängulo vermelho ao redor de uma célula selecionada de um list box e deseja que o retângulo se mova junto com a list box se for movimentada verticalmente pelo usuário. No método objeto do list box, pode escrever:

```4d
 Case of

:(Form event code=On Clicked)
       LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)
       LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT SET VISIBLE(*;"RedRect";True)&NBSP; //inicializa um retângulo vermelho
       OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
 
    :(Form event code=On Scroll)
       LISTBOX GET CELL POSITION(*;"LB1";$col;$raw)
       LISTBOX GET CELL COORDINATES(*;"LB1";$col;$raw;$x1;$y1;$x2;$y2)
       OBJECT GET COORDINATES(*;"LB1";$xlb1;$ylb1;$xlb2;$ylb2)
       $toAdd:=LISTBOX Get headers height(*;"LB1") //preste atençãp na altura do cabeçalho para que não o ultrapasse
       f($ylb1+$toAdd<$y1)&($ylb2>$y2) //se estamos dentro da list box
  //para simplificar, só manejamos cabeçalhos
  //mas devemos manejar clipping horizontal
  //assim como as barras de deslocamento
       OBJECT SET VISIBLE(*;"RedRect";True)
       OBJECT SET COORDINATES(*;"RedRect";$x1;$y1;$x2;$y2)
    Else
       OBJECT SET VISIBLE(*;"RedRect";False)
    End if
 
End case


```

Como resultado, o retângulo vermelho segue o deslocamento da list box:

![](../assets/en/commands/pict1900395.en.png)

#### Ver também 

[CALL SUBFORM CONTAINER](call-subform-container.md)  
[Current form table](current-form-table.md)  
[FILTER KEYSTROKE](filter-keystroke.md)  
[FORM Event](form-event.md)  
[Get edited text](get-edited-text.md)  
[Keystroke](keystroke.md)  
[POST OUTSIDE CALL](post-outside-call.md)  
[SET TIMER](set-timer.md)  