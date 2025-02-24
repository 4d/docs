---
id: tags
slug: tags
title: Etiquetas de transformação
---

4D oferece um conjunto de etiquetas de transformação que lhe permite inserir referências a variáveis ou expressões 4D, ou realizar diferentes processamentos dentro de um texto source, referido como um "modelo". Essas etiquetas são interpretadas quando o texto de origem é executado e geram um texto de saída.

Esse princípio é usado em particular pelo servidor Web 4D para criar [páginas de modelo Web](WebServer/templates.md).

Estas etiquetas são geralmente inseridas como comentários HTML (`<! -#Tag Contents-->`) mas uma [sintaxe alternativa compatível com xml](#alternative-syntax-for-4dtext-4dhtml-4deval) está disponível para alguns deles.

É possível misturar vários tipos de etiquetas. Por exemplo, a seguinte estrutura HTML é inteiramente viável:

```html
<HTML>
<BODY>
<!--#4DSCRIPT/PRE_PROCESS-->   (Method call)
<!--#4DIF (myvar=1)-->   (If condition)
   <!--#4DINCLUDE banner1.html-->   (Subpage insertion)
<!--#4DENDIF-->   (End if)
<!--#4DIF (mtvar=2)-->
   <!--#4DINCLUDE banner2.html-->
<!--#4DENDIF-->

<!--#4DLOOP [TABLE]-->   (Loop on the current selection)
<!--#4DIF ([TABLE]ValNum>10)-->   (If [TABLE]ValNum>10)
   <!--#4DINCLUDE subpage.html-->   (Subpage insertion)
<!--#4DELSE-->   (Else)
   <B>Value: <!--#4DTEXT [TABLE]ValNum--></B><br/>   (Field display)
<!--#4DENDIF-->
<!--#4DENDLOOP-->   ](End for)
</BODY>
</HTML>
```

## Princípios de utilização das etiquetas

### Parsing

A análise do conteúdo de uma source de *modelo* é feita em dois contextos:

- Usando o comando `PROCESS 4D TAGS`; esse comando aceita um *modelo* como entrada, bem como parâmetros opcionais, e retorna um texto resultante do processamento.

- Usando o servidor HTTP integrado do 4D: [páginas de modelo](WebServer/templates.md) enviadas por meio dos comandos `WEB SEND FILE` (.htm, .html, .shtm, .shtml), `WEB SEND BLOB` (texto/html tipo BLOB), `WEB SEND TEXT` ou chamadas usando URLs. Nesse último caso, por motivos de otimização, as páginas sufixadas com ".htm" e ".html" NÃO são analisadas. Para analisar páginas HTML nesse caso, você deve adicionar o sufixo ".shtm" ou ".shtml" (por exemplo, <http://www.server.com/dir/page.shtm>).

### Processamento recursivo

As etiquetas 4D são interpretadas de forma recursiva: 4D sempre tenta reinterpretar o resultado de uma transformação e, se uma nova transformação tiver ocorrido, uma interpretação adicional é realizada, e assim por diante, até que o produto obtido não precise mais de nenhuma transformação adicional. Por exemplo, dada a seguinte instrução:

```html
<!--#4DHTML [Mail]Letter_type-->
```

Se o próprio campo de texto `[Mail]Letter_type` contiver uma tag, por exemplo, `<!--#4DSCRIPT/m_Gender-->`, essa tag será avaliada recursivamente após a interpretação da tag 4DHTML.

Esse princípio poderoso atende à maioria das necessidades relacionadas à transformação de texto. Observe, entretanto, que em alguns casos isso também pode permitir a inserção de código malicioso no contexto Web, [o que pode ser evitado](WebServer/templates.md#prevention-of-malicious-code-insertion).

### Identificadores com tokens

Para garantir a avaliação correta das expressões processadas por etiquetas, independentemente da linguagem ou da versão 4D, é recomendável usar a sintaxe tokenizada para elementos cujo nome possa variar conforme as versões (comandos, tabelas, campos, constantes). Por exemplo, para inserir o comando `Current time`, digite `Current time:C178`.

### Utilizar o "." como separador decimal

4D sempre utiliza o caractere de ponto (.) como um separador decimal ao avaliar uma expressão numérica usando uma etiqueta 4D `4DTEXT`, `4DHTML`, e `4DEVAL`. Os parâmetros regionais são ignorados. Esse recurso facilita a manutenção do código e a compatibilidade entre idiomas e versões 4D.

## 4DBASE

#### Sintaxe: `<!--#4DBASE folderPath-->`

A etiqueta `<!--#4DBASE -->` designa o diretório de trabalho a ser usado pelo marcador `<!--#4DINCLUDE-->`.

Quando ele é chamado em uma página Web, a etiqueta `<! -#4DBASE -->` modifica todas as subsequências `<! -#4DINCLUDE-->` chama essa página, até o próximo `<!--#4DBASE -->`, se houver. Se a pasta `<!--#4DBASE -->` for modificada em um arquivo incluído, ela recuperará seu valor original do arquivo pai.

O parâmetro *folderPath* deve conter um nome de caminho relativo à página atual e deve terminar com uma barra (`/`). A pasta designada deve estar localizada dentro da pasta Web.

Passe a palavra-chave "WEBFOLDER" para restaurar o caminho padrão (relativo à página).

O código seguinte, que deve especificar um caminho relativo para cada chamada:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage1.html-->
<!--#4DINCLUDE folder/subpage2.html-->
<!--#4DINCLUDE folder/subpage3.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

... é equivalente a:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE folder/-->
<!--#4DINCLUDE subpage1.html-->
<!--#4DINCLUDE subpage2.html-->
<!--#4DINCLUDE subpage3.html-->
<!--#4DBASE ../folder/-->
<!--#4DINCLUDE subpage.html-->
<!--#4DBASE WEBFOLDER-->
```

Por exemplo, para definir um directório para a página inicial:

```html
/* Index.html */
<!--#4DIF LangFR=True-->
    <!--#4DBASE FR/-->
<!--#4DELSE-->
    <!--#4DBASE US/-->
<!--#4DENDIF-->
<!--#4DINCLUDE head.html-->
<!--#4DINCLUDE body.html-->
<!--#4DINCLUDE footer.html-->
```

No arquivo "head.html", a pasta atual é modificada através de `<!--#4DBASE -->`, sem alterar seu valor em "Index.html":

```html
/* Head.htm */
/* o directório de trabalho aqui é relativo ao ficheiro incluído (FR/ ou US/) */
<!--#4DBASE Styles/-->
<!--#4DINCLUDE main.css-->
<!--#4DINCLUDE product.css-->
<!--#4DBASE Scripts/-->
<!--#4DINCLUDE main.js-->
<!--#4DINCLUDE product.js-->
```

## 4DCODE

#### Sintaxe: `<!--#4DCODE codeLines-->`

La balise `4DCODE` permet d'insérer un bloc de code 4D de plusieurs lignes dans un template.

Quando um `<-#4DCODE` sequencia detectada seguida de um espaço, um CR ou um caractere LF, 4D interpreta todas as linhas de código até a sequência `-->` próxima. O próprio bloco de código pode conter retornos, feeds de linha ou ambos; ele será interpretado sequencialmente por 4D.

Por exemplo, pode escrever num modelo:

```html
<!--#4DCODE
//PARAMETERS initialization C_OBJECT:C1216($graphParameters)
OB SET:C1220($graphParameters;"graphType";1)
$graphType:=1
//...your code here If(OB Is defined:C1231($graphParameters;"graphType"))
    $graphType:=OB GET:C1224($graphParameters;"graphType")
    If($graphType=7)
        $nbSeries:=1
        If($nbValues>8)
            DELETE FROM ARRAY:C228 ($yValuesArrPtr{1}->;9;100000)
            $nbValues:=8
        End if
    End if End if
-->
```

Eis as características da etiqueta 4DCODE:

- O comando `TRACE` é suportado e ativa o depurador 4D, permitindo que você depure seu código de modelo.
- Qualquer erro exibirá a caixa de diálogo de erro padrão que permite que o usuário interrompa a execução do código ou entre no modo de depuração.
- O texto entre `<!--#4DCODE` e `-->` está dividido em linhas que aceitem qualquer convenção de distribuição de linha (cr, lf ou crlf).
- O texto é tokenizado no contexto do banco de dados chamado `PROCESS 4D TAGS`. Isto é importante para o reconhecimento dos métodos de projeto, por exemplo. A propriedade do método [Disponível através de etiquetas e URLs 4D (4DACTION ...)](WebServer/allowProject.md) não é tida em conta.
- Mesmo que o texto sempre use o inglês americano, é recomendável usar a sintaxe de token (:Cxxx) para nomes de comandos e constantes para se proteger contra possíveis problemas por comandos ou constantes serem renomeados de uma versão do 4D para outra.

> Que as etiquetas 4DCODE podem chamar qualquer um dos comandos da linguagem 4D ou métodos do projeto pode ser visto como um problema de segurança, especialmente quando o banco de dados está disponível por HTTP. No entanto, como ele executa o código do servidor chamado a partir dos seus próprios arquivos de modelo, a etiqueta não representa um problema de segurança. Neste contexto, como em qualquer servidor Web, a segurança é manipulada principalmente ao nível de acessos remotos para arquivos de servidor.

## 4DEACH e 4DENDEACH

#### Sintaxe: `<!--#4DEACH variável na expressão-->` `<!--#4DENDEACH-->`

O comentário `<!--#4DEACH-->` é usado para iterar um elemento especificado sobre todos os valores da *expression*. O item está definido como uma *variável* cujo tipo depende do tipo de *expressão*.

O comentário `<!--#4DEACH-->` pode iterar através de três tipos de expressões:

- [collections](#--4deach-item-in-collection--): loop por cada elemento da coleção,
- [seleções de entidade](#--4deach-entity-in-entityselection--): loop através de cada entidade,
- [objetos](#--4deach-property-in-object--): loop em cada propriedade do objeto.

O número de iterações é avaliado na inicialização e não será alterado durante o processamento. Adicionar ou remover itens durante o loop não é recomendado porque resulta em iterações faltantes ou redundantes.

### `<!--#4DEACH item in collection-->`

Esta sintaxe itera em cada *item* da *coleção*. A porção de código entre `<!--#4DEACH -->` e `<!--#4DENDEACH-->` é repetida para cada elemento da coleção.

O parâmetro *item* é uma variável do mesmo tipo que os elementos da coleção.

A coleção deve conter apenas **elementos do mesmo tipo**, caso contrário, um erro será retornado assim que a variável *item* receber o primeiro tipo de valor incompatível.

O número de loops é baseado no número de elementos da coleção. A cada iteração, a variável *item* é automaticamente preenchida com o elemento correspondente da coleção. Os pontos abaixo devem ser considerados:

- Se a variável *item* for do tipo objeto ou do tipo coleção (ou seja, se *expressão* for uma coleção de objetos ou de coleções), a modificação dessa variável modificará automaticamente o elemento correspondente da coleção (porque objetos e coleções compartilham as mesmas referências). Se a variável for de tipo escalar, só se modificará a variável.
- A variável *item* recebe o mesmo tipo que o primeiro elemento da coleção. Se algum elemento da coleção não for do mesmo tipo que a variável, será gerado um erro e o loop será interrompido.
- Se a coleção contiver elementos com um valor Null, será gerado um erro se o tipo de variável *item* não for compatível com valores Null (como variáveis longint).

#### Exemplo com uma coleção de valores escalares

*getNames* devolve uma coleção de cadeias de caracteres. O método foi declarado como "[disponível através das etiquetas 4D e as URLs](WebServer/allowProject.md)".

```html
 <table class="table">    

        <tr><th>Name</th></tr>

          <!--#4DEACH $name in getNames-->
        <tr>
            <td><!--#4DTEXT $name--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Exemplo com uma coleção de objetos

*getSalesPersons* devolve uma coleção de objetos.

```html
    <table class="table">    
         <!--#4DCODE
            $salePersons:=getSalesPersons
          -->          
       <tr><th>ID</th><th>Firstname</th><th>Lastname</th></tr>

          <!--#4DEACH $salesPerson in $salePersons-->
        <tr>
            <td><!--#4DTEXT $salesPerson.ID--></td>
            <td><!--#4DTEXT $salesPerson.firstname--></td>
            <td><!--#4DTEXT $salesPerson.lastname--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

### `<!--#4DEACH entity in entitySelection-->`

Essa sintaxe irá iterar por cada *propriedade* do *objeto*. A porção de código entre `<!--#4DEACH -->` e `<!--#4DENDEACH-->` é repetida para cada propriedade do objeto.

O parâmetro *entity* é uma variável objeto da classe entity selection.

O número de loops é baseado no número de entidades na entity selection. Em cada iteração, a variável do objeto *entity* é automaticamente preenchida com a entidade correspondente da entity selection.

#### Exemplo com uma tabela html

```html
    <table class="table">     

        <tr><th>ID</th><th>Name</th><th>Total purchase</th></tr>

          <!--#4DEACH $customer in ds. Customers.all()-->
        <tr>
            <td><!--#4DTEXT $customer.ID--></td>
            <td><!--#4DTEXT $customer.name--></td>
            <td><center><!--#4DTEXT String($customer.totalPurchase;"$###,##0")--></center></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

#### Exemplo com `PROCESS 4D TAGS`

```4d
var customers : cs. CustomersSelection
var $input; $output : Text

customers:=ds. Customers.all()
$input:="<!--#4DEACH $cust in customers-->"
$input:=$input+"<!--#4DTEXT $cust.name -->"+Char(Carriage return)
$input:=$input+"<!--#4DENDEACH-->" PROCESS 4D TAGS($input; $output)
TEXT TO DOCUMENT("customers.txt"; $output)
```

### `<!--#4DEACH property in object-->`

Essa sintaxe itera em cada *entidade* da *seleção de entidades*. A porção do código entre `<!--#4DEACH -->` e `<! -#4DENDEACH-->` é repetido para cada entidade da seleção da entidade.

O parâmetro *propriedade* é uma variável de texto automaticamente preenchida com o nome da propriedade processada atualmente.

As propriedades do objeto são processadas de acordo com sua ordem de criação. Durante o loop, propriedades podem ser adicionadas ou eliminadas no objeto, sem modificar o número de loops que permanecerão no número original de propriedades do objeto.

#### Exemplo com as propriedades de um objeto

*getGamers* é um método projeto que retorna um objeto como ("Mary"; 10; "Ann"; 20; "John"; 40) para calcular as pontuações dos jogadores.

```html
    <table class="table">    
          <!--#4DCODE
           $gamers:=getGamers
          -->          

        <tr><th>Gamers</th><th>Scores</th></tr>

          <!--#4DEACH $key in $gamers-->
        <tr>
            <td ><!--#4DTEXT $key--></td>
            <td ><!--#4DTEXT $gamers[$key]--></td>
        </tr>
          <!--#4DENDEACH-->
    </table>
```

## 4DEVAL

#### Sintaxe: `<!--#4DEVAL expression-->`

#### Sintaxe alternativa: `$4DEVAL(expressão)`

A etiqueta `4DEVAL` permite que você avalie uma variável ou expressão 4D. Como o marcador [`4DHTML`](#4dhtml) , `4DEVAL` não escapa dos caracteres HTML ao retornar o texto. No entanto, diferente de `4DHTML` ou [`4DTEXT`](#4dtext), `4DEVAL` permite que você execute qualquer instrução 4D válida, incluindo atividades e expressões que não retornam qualquer valor.

Por exemplo, é possível executar:

```
 $input:="<!--#4DEVAL a:=42-->" //atribuição
 $input:=$input+"<!--#4DEVAL a+1-->" //cálculo
 PROCESS 4D TAGS($input;$output)
  //$output = "43"
```

Em caso de erro durante a interpretação, o texto inserido será no formulário: `<! -#4DEVAL expr-->: ## erro # código de erro`.

> Por motivos de segurança é recomendável usar a tag [`4DTEXT`](#4dtext) quando o processamento de dados introduzidos de fora do aplicativo, a fim de evitar a inserção [de código malicioso](#prevention-of-malicious-code-insertion).

## 4DHTML

#### Sintaxe: `<!--#4DHTML expression-->`

#### Sintaxe alternativa: `$4DHTML(expressão)`

Como a tag `4DTEXT` , esta tag permite avaliar uma variável 4D ou expressão que retorne um valor e inseri-la como uma expressão HTML. Diferente da tag `4DTEXT` , esta tag não escapa de caracteres especiais do HTML (por exemplo, ">").

Por exemplo, aqui estão os resultados do processamento da variável de texto 4D myvar com as tags disponíveis:

| Valor myvar          | Etiquetas                    | Resultados          |
| -------------------- | ---------------------------- | ------------------- |
| `myvar:="<B>"` | `<!--#4DTEXT myvar-->` | `&lt;B&gt;` |
| `myvar:="<B>"` | `<!--#4DHTML myvar-->` | `<B>`         |

Em caso de erro de interpretação, o texto inserido será `<!--#4DHTML myvar--> : ## erro # código de erro`.

> Por motivos de segurança é recomendável usar a tag [`4DTEXT`](#4dtext) quando o processamento de dados introduzidos de fora do aplicativo, a fim de evitar a inserção [de código malicioso](#prevention-of-malicious-code-insertion).

## 4DIF, 4DELSE, 4DELSEIF e 4DENDIF

#### Sintaxe: `<!--#4DIF expression-->` {`<!--#4DELSEIF expression2-->...<!--#4DELSEIF expressionN-->`} {`<!--#4DELSE-->`} `<!--#4DENDIF-->`

Usado com os comentários `<!--#4DELSEIF-->` (opcional), `<! -#4DELSE-->` (opcional) e `<! -#4DENDIF-->`, o comentário `<! -#4DIF expression-->` oferece a possibilidade de executar partes do código condicionalmente.

O parâmetro *expression* pode conter qualquer expressão 4D válida que retorne um valor booleano. Deve ser indicado entre parênteses e estar em conformidade com as regras da sintaxe 4D.


Os blocos `<!--#4DIF expression-->` ... `<!--#4DENDIF-->` podem ser aninhados em vários níveis. Como em 4D, cada `<!--#4DIF expression-->` deve corresponder com `<!--#4DENDIF-->`.

Em caso de erro de interpretação, o texto "`<! -#4DIF expression-->`: uma expressão booliana foi esperada" é inserida em vez do conteúdo localizado entre `<! -#4DIF -->` e `<!--#4DENDIF-->`. Da mesma forma, se não houver tantos `<!--#4DENDIF-->` como `<! -#4DIF -->`, o texto "`<! -#4DIF expression-->`: 4DENDIF esperado" é inserido ao invés do conteúdo localizado entre `<! -#4DIF -->` e `<!--#4DENDIF-->`.

Usando a etiqueta `<!--#4DELSEIF-->`, você pode testar um número ilimitado de condições. Somente o código que segue a primeira condição avaliada como `True` é executado. Se não houver condições verdadeiras, nenhuma declaração é executada (se não houver nenhuma declaração final `<!--#4DELSE-->`). Você pode usar uma etiqueta `<!--#4DELSE-->` após o último `<!--#4DELSEIF-->`. Se todas as condições forem falsas, as instruções seguintes `<!--#4DELSE-->` serão executadas.

Os dois códigos seguintes são equivalentes.

Code using 4DELSE only:

```html
<!--#4DIF Condition1-->
  /* A condição1 é verdadeira*/
<!--#4DELSE-->
    <!--#4DIF Condition2-->
        /* A condição2 é verdadeira*/
    <!--#4DELSE-->
        <!--#4DIF Condition3-->
            /* A condição3 é verdadeira */
        <!--#4DELSE-->
            /*Nenhuma das condições é verdadeira*/
        <!--#4DENDIF-->
    <!--#4DENDIF-->
<!--#4DENDIF-->
```

Código semelhante usando a tag `4DELSEIF`:

```
<!--#4DIF Condition1-->
     /* A condição1 é verdadeira*/
<!--#4DELSEIF Condition2-->
     /* A condição2 é verdadeira*/
<!--#4DELSEIF Condition3-->
    /* A condição3 é verdadeira */
<!--#4DELSE-->
    /* Nenhuma das condições é verdadeira*/
<!--#4DENDIF-->
```

Este exemplo de código inserido em uma página HTML estática exibe um rótulo diferente conforme o resultado de expressão `vname#""`:

```html
<BODY>
...
<!--#4DIF (vname#"")-->
Names starting with <!--#4DTEXT vname-->.
<!--#4DELSE-->
No name has been found.
<!--#4DENDIF-->
...
</BODY>
```

Este exemplo insere páginas diferentes dependendo de qual usuário está conectado:

```html
<!--#4DIF LoggedIn=False-->
    <!--#4DINCLUDE Login.htm -->
<!--#4DELSEIF User="Admin" -->
    <!--#4DINCLUDE AdminPanel.htm -->
<!--#4DELSEIF User="Manager" -->
    <!--#4DINCLUDE SalesDashboard.htm -->
<!--#4DELSE-->
    <!--#4DINCLUDE ItemList.htm -->
<!--#4DENDIF-->
```

## 4DINCLUDE

#### Sintaxe: `<!--#4DINCLUDE path-->`

Esta tag é projetada principalmente para incluir uma página HTML (indicado pelo parâmetro *caminho* ) em outra página HTML. Por padrão, apenas o corpo da página HTML especificada, ou seja, o conteúdo encontrado dentro das tags `<body>` e `</body>` , está incluído (as tags em si não estão incluídas). Isso permite evitar conflitos relacionados a meta etiquetas presentes nos cabeçalhos.

No entanto, se a página HTML especificada não contiver etiquetas `<body>` e `</body>` , a página inteira será incluída. Cabe-lhe a você verificar a coerência das meta etiquetas.

O comentário `<!--#4DINCLUDE -->` é muito útil para testes (`<! -#4DIF-->`) ou laços (`<!--#4DLOOP-->`). É muito conveniente incluir banners de acordo com critérios ou de forma aleatória. Ao incluir, independentemente da extensão de nome do arquivo, O 4D analisa a página chamada e, em seguida, insere o conteúdo (modificado ou não) na página originando a chamada `4DINCLUDE`.

Uma página incluída com `<! -#4DINCLUDE -- O comentário>` é carregado no cache do servidor Web da mesma forma que as páginas chamadas através de uma URL ou enviadas com o comando `WEB SEND ARQUIVO`.

Em *path*, coloque o caminho que leva ao documento a incluir. Aviso: No caso de um `4DINCLUDE` chamada, o caminho é relativo ao documento que está sendo analisado, ou seja, o documento "pai". Use o caractere com a barra (/) como um separador de pastas e os dois pontos (..) para subir um nível (sintaxe HTML). Quando você usa a tag `4DINCLUDE` com o comando `PROCESS 4D TAGS` , a pasta padrão é a pasta do projeto.

> É possível modificar a pasta padrão usada pela tag `4DINCLUDE` na página atual, usando o `<! -#4DBASE -->` tag (veja abaixo).

O número de `<!--#4DINCLUDE caminho-->` dentro de uma página é ilimitado. No entanto, o `<!--#4DINCLUDE caminho-->` chamadas só podem ser feitas em um nível. isso significa que, por exemplo, não se pode inserir `<!--#4DINCLUDE mydoc3.html-->` no *mydoc2.html* corpo da página, que é chamado por `<!--#4DINCLUDE mydoc2-->` inserted in *mydoc1.html*. Além disso, 4D verifica que as inclusões não são recursivas.

Em caso de erro, o texto inserido é "`<!--#4DINCLUDE path-->`: o documento não pode ser aberto".

Exemplos:

```html
<!--#4DINCLUDE subpage.html-->
<!--#4DINCLUDE folder/subpage.html-->
<!--#4DINCLUDE ../folder/subpage.html-->
```

## 4DLOOP e 4DENDLOOP

#### Sintaxe: `<!--#4DLOOP condition-->` `<!--#4DENDLOOP-->`

Este comentário permite a repetição de uma porção de código, desde que a condição seja satisfeita. A porção é delimitada por `<!--#4DLOOP-->` e `<!--#4DENDLOOP-->`.

O `<!--#4DLOOP Condicionado-->` ... `<!--#4DENDLOOP-->` blocos podem ser aninhados. Como em 4D, cada `<!--#4DLOOP condition-->` deve corresponder a um `<!--#4DENDLOOP-->`.

Existem cinco tipos de condições:

### `<!--#4DLOOP [table]-->`

Esta sintaxe faz um loop para cada registro da tabela selecionada atualmente no processo atual. A porção de código localizada entre os dois comentários é repetida para cada registro de seleção atual.

> Quando a tag `4DLOOP` for usada com uma tabela, os registros são carregados no modo "Somente leitura".

O seguinte código:

```html
<!--#4DLOOP [People]-->
<!--#4DTEXT [People]Name--> <!--#4DTEXT [People]Surname--><br/>
<!--#4DENDLOOP-->
```

... poderia ser expresso em linguagem 4D da seguinte forma:

```4d
 NEXT RECORD([People])
 End while
    FIRST RECORD([People])
 While(Not(End selection([People])))
    ...
    NEXT RECORD([People])
 End while
    FIRST RECORD([People])
 While(Not(End selection([People])))
    ...
```

### `<!--#4DLOOP array-->`

Esta sintaxe cria um ciclo para cada item do array. O item atual do array é aumentado quando cada parte do código é repetida.

> Esta sintaxe não pode ser utilizada com arrays de duas dimensões. Neste caso, é preferível combinar um método com loops aninhados.

O seguinte exemplo de código:

```html
<!--#4DLOOP arr_names-->
<!--#4DTEXT arr_names{arr_names}--><br/>
<!--#4DENDLOOP-->
```

... poderia ser expresso em linguagem 4D da seguinte forma:

```4d
 For($Elem;1;Size of array(arr_names))
    arr_names:=$Elem
    ...
 End for
```

### `<!--#4DLOOP method-->`

Esta sintaxe faz um loop contanto que o método retorne `True`. O método utiliza um tipo de parâmetro Long Integer. Primeiro é chamado com o valor 0 para permitir uma fase de inicialização (se necessário); então ele é chamado com os valores 1, depois 2, depois 3 e assim por diante, contanto que ele retorne `True`.

Por razões de segurança, dentro de um processo da Web, o método de banco de dados `On Web Authentication` pode ser chamado uma vez antes do estágio de inicialização (execução de método com 0 como parâmetro). Se a autenticação for correta, a fase de inicialização prossegue.

`C_BOOLEAN($0)` e `C_LONGINT($1)` DEVEM ser declarados no método para efeitos de compilação.

O seguinte exemplo de código:

```html
<!--#4DLOOP my_method-->
<!--#4DTEXT var--> <br/>
<!--#4DENDLOOP-->
```

... poderia ser expresso em linguagem 4D da seguinte forma:

```4d
 If(AuthenticationWebOK)
    If(my_method(0))
       $counter:=1
       While(my_method($counter))
          ...
          $counter:=$counter+1
       End while
    End if
 End if
```

O método `my_method` pode ser o seguinte:

```4d
 C_LONGINT($1)
 C_BOOLEAN($0)
 If($1=0) `Initialisation
    $0:=True
 Else
    If($1<50)
       ...
       var:=...
       $0:=True
    Else
       $0:=False `Para o ciclo
    End if
 End if
```

### `<!--#4DLOOP expression-->`

Com essa sintaxe, a tag `4DLOOP` faz um loop contanto que a expressão ** retorne `True`. A expressão pode ser qualquer expressão booleana válida e deve conter uma parte da variável para ser avaliada em cada laço para evitar laços infinitos.

Por exemplo, o seguinte código:

```html
<!--#4DEVAL $i:=0-->
<!--#4DLOOP ($i<4)-->
<!--#4DEVAL $i-->
<!--#4DEVAL $i:=$i+1-->
<!--#4DENDLOOP-->
```

...produz o seguinte resultado:

```

0
1
2
3
```

### `<!--#4DLOOP pointerArray-->`

Neste caso, o marcador `4DLOOP` funciona como ele com um array: ele faz um loop para cada elemento da matriz referenciado pelo ponteiro. O elemento do array atual é aumentado cada vez que a porção de código é repetida.

Esta sintaxe é útil quando você passa um ponteiro do array como um parâmetro para o comando `PROCESS 4D TAGS`.

Exemplo:

```4d
 ARRAY TEXT($array;2)
 $array{1}:="hello"
 $array{2}:="world"
 $input:="<!--#4DEVAL $1-->"
 $input:=$input+"<!--#4DLOOP $2-->"
 $input:=$input+"<!--#4DEVAL $2->{$2->}--> "
 $input:=$input+"<!--#4DENDLOOP-->"
 PROCESS 4D TAGS($input;$output;"elements = ";->$array)
  // $output = "elements = hello world "
```

Em caso de erro de interpretação, o texto "`<! -#4DLOOP expressão-->`: descrição" é inserida ao invés do conteúdo localizado entre `<! -#4DLOOP -->` e `<!--#4DENDLOOP-->`.

Podem ser mostradas as seguintes mensagens:

- Tipo de expressão inesperado (erro padrão);
- Nome incorreto da tabela (erro no nome da tabela);
- Um array era esperado (a variável não é um array ou é um array de duas dimensões);
- O método não existe;
- Erro de sintaxe (quando o método está em execução);
- Erro de acesso (você não tem os privilégios de acesso apropriados para acessar a tabela ou o método).
- 4DENDLOOP esperado (o número `<!--#4DENDLOOP-->` não coincide com o número `<!--#4DLOOP -->`).

## 4DSCRIPT/

#### Sintaxe: `<!--#4DSCRIPT/MethodName/MyParam-->`

A etiqueta `4DSCRIPT` permite que você execute métodos 4D ao processar o modelo. A presença da etiqueta `<!--#4DSCRIPT/MyMethod/MyParam-->` como um comentário HTML inicia a execução do método `MyMethod` com o parâmetro `Param` como uma string em `$1`.

> Se a etiqueta for chamada no contexto de um processo Web, quando a página for carregada, 4D chamará o método de banco de dados `On Web Authentication` (se existir). Se retornar True, 4D executa o método.

O método deve devolver o texto em `$0`. Se a string começa com o caractere de código 1, ele é considerado HTML (o mesmo princípio é verdadeiro para a etiqueta `4DHTML`).

Por exemplo, digamos que você insira o seguinte comentário `“Today is <!--#4DSCRIPT/MYMETH/MYPARAM-->”` em um modelo de página Web. Quando carrega a página, 4D chama o método do banco de dados `On Web Authentication`, então chama o método `MYMETH` e passa a string “/MYPARAM” como o parâmetro `$1`. The method returns text in $0 (for example "12/31/21"); the expression "`Today is<!--#4DSCRIPT/MYMETH/MYPARAM––>`" therefore becomes "Today is 12/31/21".

O método `MYMETH` é o seguinte:

```4d
  //MYMETH
 C_TEXT($0;$1) //Estes parâmetros devem ser sempre declarados
 $0:=String(Current date)
```

> Um método chamado por `4DSCRIPT` não deve chamar elementos da interface (`DIALOG`, `ALERT`, etc.).

Como 4D executa métodos em sua ordem de aparição, é absolutamente possível chamar um método que define o valor de muitas variáveis referenciadas mais adiante no documento, seja qual for o modo que estiver usando. Você pode inserir quantos `<!--#4DSCRIPT...-->` comentários como quiser em um modelo.

## 4DTEXT

#### Sintaxe: `<!--#4DTEXT expressão-->`

#### Sintaxe alternativa: `$4DTEXT(expressão)`

A etiqueta `< permite que você insira uma referência a uma variável 4D ou a uma expressão que retorna um valor. Por exemplo, se escrever (numa página HTML):

```html
<P>Welcome to <!--#4DTEXT vtSiteName-->!</P>
```

! `</pre>

O valor da variável 4D `vtSiteName` será inserido na página HTML quando ela for enviada. Esse valor é inserido como texto simples, e os caracteres HTML especiais, como ">" são automaticamente escapados.</p>

Também é possível inserir expressões 4D. Você pode, por exemplo, inserir diretamente o conteúdo de um campo (`<! -#4DTEXT [tableName]fieldName-->`), um elemento de array (`<! -#4DTEXT tabarr{1}-->`) ou um método retornando um valor (`<!--#4DTEXT mymethod-->`). A conversão de expressões segue as mesmas regras das variáveis. Além disso, a expressão deve respeitar as regras de sintaxe 4D.

> Por motivos de segurança, recomenda-se usar essa etiqueta ao processar dados introduzidos de fora do aplicativo, de modo a evitar a [inserção de código malicioso](#prevention-of-malicious-code-insertion).

Em caso de erro de avaliação, o texto inserido aparecerá como `<!--#4DTEXT myvar--> : ## erro # código de erro`.

- É necessário utilizar variáveis processo.
- É possível mostrar o conteúdo de um campo imagem. No entanto, não é possível exibir o conteúdo de um item matriz de imagens.
- É possível exibir o conteúdo de um campo objeto por uma fórmula 4D. Por exemplo, você pode escrever `<!--#4DTEXT OB Get:C1224([Rect]Desc;\"color\")-->`.
- Normalmente, trabalha-se com variáveis de tipo texto. No entanto, também é possível utilizar variáveis BLOB. Você só precisa gerar os BLOBs em modo `Texto sem comprimento`.

## Sintaxe alternativa para 4DTEXT, 4DHTML, 4DEVAL

Várias tags de transformação 4D existentes podem ser expressas usando uma sintaxe baseada em $:

#### $4dtag (expression)

pode ser utilizado em vez de

#### `<!--#4dtag expression-->`

Esta sintaxe alternativa está disponível apenas para as etiquetas usadas para retornar valores processados:

- [4DTEXT](#4dtext)
- [4DHTML](#4dhtml)
- [4DEVAL](#4deval)

(Outras etiquetas, como 4DIF ou 4DSCRIPT, devem ser escritas com a sintaxe normal).

Por exemplo, pode escrever:

```html
$4DEVAL(UserName)
```

em vez de:

```html
<!--#4DEVAL(UserName)-->
```

A principal vantagem dessa sintaxe é que ela permite que você escreva modelos em conformidade com XML. Alguns desenvolvedores de 4D precisam criar e validar modelos baseados em XML usando ferramentas padrão de análise de XML. Como o caractere "<" é inválido em um valor de atributo XML, não foi possível usar o "`<! - -->`" sintaxe de tags 4D sem quebrar a sintaxe do documento. Por outro lado, escapar o caractere "<" impedirá que 4D interprete as tags corretamente.

Por exemplo, o código a seguir causaria um erro de análise de XML por causa do primeiro caractere "<" no valor de atributo:

```xml
<line x1="<!--#4DEVAL $x-->" y1="<!--#4DEVAL $graphY1-->"/>
```

Utilizando a sintaxe $, o seguinte código é validado pelo analisador:

```xml
<line x1="$4DEVAL($x)" y1="$4DEVAL($graphY1)"/>
```

Observe que `$4dtag` and `<--#4dtag -->` não são estritamente equivalentes: diferente de `<--#4dtag -->`, `$4dtag` processamento não interpreta tags 4D [recursivamente](#recursive-processing). `$` tags são sempre avaliadas uma vez e o resultado é considerado como texto simples.

A razão para esta diferença é evitar a injeção de código malicioso. Como [explicado abaixo](#prevention-of-malicious-code-insertion), é altamente recomendável usar etiquetas `4DTEXT` em vez de `4DHTML` quando manipular texto do usuário para proteger contra reinterpretação indesejada de etiquetas: com `4DTEXT`, caracteres especiais como "<" são escapados, portanto quaisquer tags 4D usando o `<! -#4dtag expressão -->` a sintaxe perderá seu significado específico. No entanto, uma vez que `4DTEXT` não escapa do símbolo `$` , decidimos quebrar o suporte para recursão a fim de evitar injeções maliciosas usando a sintaxe `$4dtag (expressão)`.

Os seguintes exemplos mostram o resultado do processamento dependendo da sintaxe e da tag usada:

```4d
  // Exemplo 1
 myName:="<!--#4DHTML QUIT 4D-->" // inserto malicioso
 input:="My name is: <!--#4DHTML myName-->"
 PROCESS 4D TAGS(input;output)
  //4D vai fechar!
```

```4d
  // example 2
 myName:="<!--#4DHTML QUIT 4D-->" //inserção maliciosa
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //output é "My name is: <!--#4DHTML QUIT 4D-->"
```

```4d
  // exemplo 3
 myName:="$4DEVAL(QUIT 4D)" //injeção maliciosa
 input:="My name is: <!--#4DTEXT myName-->"
 PROCESS 4D TAGS(input;output)
  //a saída é "My name is: $4DEVAL(QUIT 4D)"
```

Observe que a sintaxe `$4dtag` suporta pares correspondentes de citações fechadas ou parênteses. Por exemplo, suponha que você precisa avaliar a seguinte string complexa (irrealista):

```
String(1) + "\"(hello)\""
```

Você pode escrever:

```4d
 input:="$4DEVAL( String(1)+\"\\\"(hello)\\\"\")"
 PROCESS 4D TAGS(input;output)
 -->output is 1"(hello)"
```
