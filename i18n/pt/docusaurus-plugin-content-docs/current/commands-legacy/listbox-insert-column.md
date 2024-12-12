---
id: listbox-insert-column
title: LISTBOX INSERT COLUMN
slug: /commands/listbox-insert-column
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX INSERT COLUMN.Syntax-->**LISTBOX INSERT COLUMN** ( {* ;} *objeto* ; *posiçaoCol* ; *nomeColuna* ; *variavelCol* ; *nomeCabe* ; *varTitulo* {; *nomRodapé* ; *nomeVar*} )<!-- END REF-->
<!--REF #_command_.LISTBOX INSERT COLUMN.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string). Se omitido, objeto é uma variável |
| objeto | any | &#8594;  | Nome objeto (se * for especificado) ou Variável (se * é omitido) |
| posiçaoCol | Integer | &#8594;  | Localização da coluna a inserir |
| nomeColuna | Text | &#8594;  | Nome do objeto coluna |
| variavelCol | Array, Field, Variable, Pointer | &#8594;  | Nome de coluna do array ou campo ou variável |
| nomeCabe | Text | &#8594;  | Nome do objeto título da coluna |
| varTitulo | Integer, Pointer | &#8594;  | Variável título da coluna |
| nomRodapé | Text | &#8594;  | Nome do rodapé da coluna |
| nomeVar | Variable, Pointer | &#8594;  | Variável do rodapé da coluna |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.LISTBOX INSERT COLUMN.Summary-->O comando LISTBOX INSERT COLUMN insere uma coluna no list box designado pelos parâmetros *objeto* e *\**.<!-- END REF--> 

**Nota**: este comando não faz nada se aplica à primeira coluna de um lisbox mostrado em modo hierárquico.

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se omitir este parâmetro, indica que o parâmetro *objeto* é uma variável. Nesse caso, não passa uma string, mas uma referência de variável. Para maior informação sobre nomes de objetos, consulte a seção *Propriedades dos objetos*.

A nova coluna se insere justo em frente da coluna definida pelo parâmetro *posiçãoCol*. Se o parâmetro *posiçãoCol* é superior ao número total de colunas, a coluna é adicionada depois da última coluna. 

Passe o nome do objeto e da variável da coluna inserida nos parâmetros *nomCol* e *variávelCol*. 

* Com um array tipo list box, o nome da variável deve coincidir com o nome do array cujo conteúdo se mostrará na coluna.  
Pode passar um ponteiro **Nil (->\[\])** se utiliza o comando em um contexto dinâmico quando o formulário se executa (ver abaixo).
* Com uma seleção tipo list box, deve passar um campo ou variável no parâmetro *variávelCol*. O conteúdo da coluna será então o valor do campo ou da variável, avaliado para cada registro da seleção associada ao list box. Este tipo de conteúdos só pode ser utilizado quando a propriedade "Fonte de dados" do list box é Seleção atual ou Seleção temporária (ver a seção *Gestão de objetos List Box*). Pode utilizar os campos ou as variáveis de tipo string, numérico, Data, Hora, Imagem e Booleano.
No contexto de list boxes baseadas em seleções ou registros, LISTBOX INSERT COLUMN pode ser utilizado para inserir elementos simples (campos ou variáveis). Se quiser manipular expressões mais complexas (tais como fórmulas ou métodos), deve utilizar o comando [LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md).  

 List boxes de tipo Coleção ou Seleção de Entidades são compatíveis, no entanto, o parâmetro colName será ignorado e deve-se então usar o comando [LISTBOX SET COLUMN FORMULA](listbox-set-column-formula.md) para atribuir a fonte de dados, veja .

Nota: não é possível combinar em um mesmo list box colunas de tipo array (fonte de dados array) e colunas de tipo campo ou variável (fonte de dados seleção). 

Passe o nome do objeto e da variável do título da coluna inserida nos parâmetros *nomTitulo* e *varTitulo* Parâmetros.

Pode passar nos parâmetros *nomRodapé* e *nomVar*, o nome do objeto e a variável do rodapé da coluna inserida. 

**Nota:** os nomes dos objetos devem ser únicos em um formulário. Deve ter certeza de que os nomes passados nos parâmetros *nomCol,* *nomTitulo* e *nomRodapé* não tenham sido utilizados. Do contrário, a coluna não é criada e é gerado um erro. 

##### Dynamic insertion 

Pode utilizar este comando para inserir columnas nos list box de forma dinâmica durante a execução do formulário. 4D irá gerenciar automaticamente a definição das variáveis necessárias (rodapé de página e cabeçalho).  
  
Para isso, **LISTBOX INSERT COLUMN** aceita um ponteiro **Nil (->\[\])** como valor valor para os parâmetros *variavelCol* (list box de tipo array unicamente) *varCabe* e *varRodape*. Neste caso, quando se executa o comando, 4D cria as variáveis requeridas dinamicamente (para mais informação, consulte a seção ).  
  
Note que as variáveis de cabeçalho e de rodapé de página sempre são criados com um tipo específico (texto e inteiro longo, respectivamente). Pelo contrário, as variáveis de coluna não podem ser escritas durante a criação porque os list boxes aceitam diferentes tipos de arrays para estas variáveis (array texto, array inteiro, etc.). Isto significa que você tem que definir o tipo de array manualmente (ver o exemplo 3). É importante realizar esta escrevendo antes de chamar a comandos como \[# cmd id = "913" /\] para inserir novos elementos no array. Ou bem, pode utilizar [APPEND TO ARRAY](append-to-array.md) tanto para definir o tipo do array como para a inserção de elementos.

#### Exemplo 1 

Imagine que queira adicionar uma coluna ao final do list box:   

```4d
 var NomVarTitulo;$Ultimo;RecNum : Integer
 ALL RECORDS([Tabela 1])
 $RecNum:=Records in table([Tabela 1])
 ARRAY PICTURE(Imagem;$RecNum)
 
 $Ultimo:=Get number of listbox columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$Ultimo;"ColumnImagem";Imagem;"imagemTitulo";NomVarTitulo)
```

#### Exemplo 2 

Imagine que gostaria de adicionar uma coluna à direita do list box e associar-lhe os valores do campo \[Transporte\]Tarifas:  

```4d
 $Ultimo:=Get number of listbox columns(*;"ListBox1")+1
 LISTBOX INSERT COLUMN(*;"ListBox1";$Ultimo;"CampoCol";[Transporte]Tarifas;"nomTitulo";varTitulo)
```

#### Exemplo 3 

Você deseja inserir uma coluna de forma dinâmica em um array de tipo list box e definir seu cabeçalho:

```4d
 var $NilPtr : Pointer
 LISTBOX INSERT COLUMN(*;"MyListBox";1;"MyNewColumn";$NilPtr;"MyNewHeader";$NilPtr)
 ColPtr:=OBJECT Get pointer(Object named;"MyNewColumn")
 ARRAY TEXT(ColPtr->;10)
  //Definition of header
 headprt:=OBJECT Get pointer(Object named;"MyNewHeader")
 OBJECT SET TITLE(headprt->;"Inserted header")
```

#### Ver também 

[LISTBOX DELETE COLUMN](listbox-delete-column.md)  
[LISTBOX INSERT COLUMN FORMULA](listbox-insert-column-formula.md)  