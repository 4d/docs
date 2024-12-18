---
id: set-list-properties
title: SET LIST PROPERTIES
slug: /commands/set-list-properties
displayed_sidebar: docs
---

<!--REF #_command_.SET LIST PROPERTIES.Syntax-->**SET LIST PROPERTIES** ( *lista* ; *aparencia* {; *icone* {; *alturaLinha* {; *duploClique* {; *multiSeleçao* {; *editavel*}}}}} )<!-- END REF-->
<!--REF #_command_.SET LIST PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| lista | Integer | &#8594;  | Número de referência da lista |
| aparencia | Integer | &#8594;  | Estilo gráfico da lista 1 = Lista hierárquica à Macintosh 2 = Lista hierárquica à Windows 0 = Aparição auto dependendo da plataforma |
| icone | Integer | &#8594;  | ID de recurso Mac OS ‘cicn’ ou 0 = ícone por padrão da plataforma |
| alturaLinha | Integer | &#8594;  | Altura mínima da linha expressada em pixels |
| duploClique | Integer | &#8594;  | Expandir/Contrair sub-lista com duplo-clique 0 = Sim, 1= Não |
| multiSeleçao | Integer | &#8594;  | Seleções múltiplas: 0 = Não (por padrão), 1 = Sim |
| editavel | Integer | &#8594;  | 0=Lista não é editável pelo usuário, 1=Lista não é editável pelo usuário (padrão) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET LIST PROPERTIES.Summary-->O comando SET LIST PROPERTIES define a aparência da lista hierárquica cuja referência é passada no parâmetro *lista*.<!-- END REF-->  
  
Nota de compatibilidade: os parâmetros aparência e ícone são obsoletos, sempre devem ter o valor 0.  
  
Nota: se desejar personalizar o ícone de cada elemento na lista, utilize o comando [SET LIST ITEM PROPERTIES](set-list-item-properties.md).  
  
Se não passar o parâmetro altoLinea, a altura da linhaa de una lista hierárquica é determinada pela fonte e o tamanho de fonte utilizado pelo objeto. Também pode passar em parâmetro altoLinea a altura de línha mínima da lista hierárquica. Se o valor que passar for superior a altura das linhas definida pela fonte e o tamanho de fonte utilizado, a altura das linhas da lista hierárquicas será o valor passado.Passe 0 para definir a altura por padrão.  
**Nota:** SET LIST PROPERTIES  afeta a aparência dos nós na lista hierárquica. Se preferir personalizar o ícone de cada elemento na lista, utilize o comando .[SET LIST ITEM PROPERTIES](set-list-item-properties.md). 

O parâmetro opcional *duploClique* lhe permite definir duplo clique em um elemento da lista pai não provoque a expansão ou contração da sub-lista. Como padrão, um duplo clique em um item da lista pai provoca que sua lista filho se expanda ou se contraia. Entretanto, algumas interfaces de usuário poderiam necessitar desativar este mecanismo. Para fazer isto, passe 1 no parâmetro *duploClique*.

Só serão desativados duplo cliques. Os usuários ainda poderão expandir ou contrair as sub-listas clicando no nó da lista. 

Se omitir o parâmetro *duploClique* ou passa 0, é aplicado o funcionamento padrão. 

O parâmetro opcional *multiSeleçao* lhe permite indicar se a lista deve aceitar seleções múltiplas.  
  
Automaticamente, como em versões anteriores de 4D, você não pode selecionar vários elementos de uma lista hierárquica simultaneamente. Se deseja que esta função esteja disponível para a lista, passe o valor 1 no parâmetro *multiSeleçao*. Nesse caso, as seleções múltiplas podem ser realizadas:

\- manualmente, utilizando a combinação de teclas **Shift**+**clique** para una seleção continua ou **Ctrl**+**clique** (Windows) / **comando**+**clique** (Mac OS) para uma seleção descontinúa,  
\- por programação, utilizando os comandos [SELECT LIST ITEMS BY POSITION](select-list-items-by-position.md) e [SELECT LIST ITEMS BY REFERENCE](select-list-items-by-reference.md).  
Se passa 0 e omite o parâmetro *multiSeleçao*, se aplicará o comportamento padrão. 

O parâmetro opcional *editavel* lhe permite indicar se a lista deve ser editável pelo usuário quando é mostrada como uma lista de seleção associada a um campo ou a uma variável durante a entrada de dados. Quando a lista é editável, um botão **Modificar** é adicionado na janela da lista e o usuário pode adicionar, apagar e ordenar os valores através de um editor específico.   
Se passa 1 ou omite o parâmetro *editavel* , a lista será editável; se passa 0, não será editável.

#### Exemplo 

Se deseja recusar a sublista de expandir/contrair ao dar duplo clique, pode escrever no método de formulário:

```4d
 Case of
    :(FORM Event=On Load)
       hlCities:=Load list("Cities") //carregar a lista de opções Cities no objeto de formulário hlCities
       SET LIST PROPERTIES(hlCities;0;0;0;1) //não permitir duplo clique para expandir/contrair
 End case
```

#### Ver também 

[GET LIST ITEM PROPERTIES](get-list-item-properties.md)  
[GET LIST PROPERTIES](get-list-properties.md)  
[SET LIST ITEM PROPERTIES](set-list-item-properties.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 387 |
| Thread-seguro | &cross; |


