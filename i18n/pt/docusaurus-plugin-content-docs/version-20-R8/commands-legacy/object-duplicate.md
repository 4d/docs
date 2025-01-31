---
id: object-duplicate
title: OBJECT DUPLICATE
slug: /commands/object-duplicate
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT DUPLICATE.Syntax-->**OBJECT DUPLICATE** ( {* ;} *objeto* {; *novoNome* {; *novaVar* {; *relacionadoA* {; *moverH* {; *moverV* {; *redimH* {; *redimV*}}}}}}} {; *} )<!-- END REF-->
<!--REF #_command_.OBJECT DUPLICATE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | se especificado, objeto é um nome de objeto (string), se omitido, objeto é uma variável ou campo |
| objeto | any | &#8594;  | Nome de objeto (se * é especificado) ou Variável ou Campo (se * for omitido) |
| novoNome | Text | &#8594;  | Nome do novo objeto |
| novaVar | Pointer | &#8594;  | Ponteiro para a variável do novo objeto |
| relacionadoA | Text | &#8594;  | Nome do objeto editável anterior (ou do botão de opção) |
| moverH | Integer | &#8594;  | Deslocamento horizontal do novo objeto (>0 = a direita, <0 para a esquerda) |
| moverV | Integer | &#8594;  | Deslocamento vertical do novo objeto (>0 = para baixo, <0 = para cima) |
| redimH | Integer | &#8594;  | Valor do redimensionamento horizontal do objeto |
| redimV | Integer | &#8594;  | Valor do redimensionamento vrtical do objeto |
| * | Operador | &#8594;  | se especificado = coordenadas absolutadas, se omitida = coordenadas relativas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.OBJECT DUPLICATE.Summary-->O comando OBJECT DUPLICATE permite criar uma cópia do objeto designado pelo parâmetro *objeto* no contexto do formulário que está sendo executado (modo Aplicação).<!-- END REF--> O formulário de origem, gerado em modo Desenho, não se modifica. 

Automaticamente, todas as opções definidas na lista de propriedades para o objeto fonte se aplicam a cópia (tamanho, opções de redimensionamento, cor, etc.), incluindo o método de objeto associado. Entretanto, se devem considerar as seguintes exceções:

* Botão padrão: só pode haver um botão automático em um formulário. Ao duplicar um botão com a propriedade "Botão por padrão", esta propriedade é atribuida a cópia e se apgaa do objeto de origem.
* Equivalentes de teclado: o atalho de teclado associado a um objeto fonte não é duplicada. Esta propriedade é deixada em branco na cópia.
* Nomes de objetos: não pode haber vários objetos com o mesmo nome em um formulário. Se não passa o parâmetro *novoNom*, o nome do objeto fonte automaticamente é incrementado no novo objeto (ver a continuação).

Se passa o parâmetro opcional *\**, indica que o parâmetro *objeto* é um nome de objeto (string). Se não passa este parâmetro, indica que o parâmetro *objeto* é um campo ou uma variável. Neste caso, passe uma referência do campo ou variável (campos ou variáveis objeto unicamente) ao invés de uma string.  
Se passa uma referência de campo ou variável e se o formulário contiver vários objetos que utilizam a mesma referência, a primeira ocorrência encontrada será utilizada. Neste caso, para evitar qualquer ambigüidade, se recomenda trabalhar com nomes de objetos únicos.

Passe no parâmetro *novoNom* o nome atribuido a cópia do objeto. Este nome deve ser de acordo com a regras de nome de objetos e ser único no formulário. Se não é válido ou já está sendo utilizado por outro objeto, o comando não faz nada e a variável *OK* devolve 0\.   
Se omite este parâmetro ou passa uma string vazia, o novo nome é gerado automaticamente ao incrementar o nome do objeto fonte (se este nome não é utilizado). Por exemplo:  

| **Nome de origem** | **Nome da cópia**            |
| ------------------ | ---------------------------- |
| Botão              | Botão1                       |
| Botão20            | Botão21                      |
| Botão21            | Botão23 se Botão22 já existe |

Passe em *novaVar* um ponteiro a variável a associar ao novo objeto. Em principio, deve estar dirigido a uma variável do mesmo tipo que o do objeto fonte mas em alguns casos é possível mudar o tipo. O comando oferece funções automáticas para facilitar a escritura de código genérico:

* Geralmente, se pode cambiar o tipo a todas as variáveis "editables"; por exemplo, um objeto que mostra uma Data ou um Inteiro longo pode ser duplicado e utilizado com uma variável de tipo Texto. As propriedades compatíveis são conservadas. O comando permite igualmente modificar o tipo entre objetos Texto e objetos Imagem. Note que um objeto texto duplicado e associado a uma variável ou campo Booleano aparecerá automaticamente como caixa de seleção.
* Geralmente é possível transformar dinâmicamente uma variável em campo e vice-versa.  
Por outro lado, os objetos gráficos (botões, caixas de seleção, etc.) não podem ser transformados em outros tipos de controles.

Se o tipo da variável não é compatível com o objeto, o comando não faz nada e a variável *OK* toma o valor 0\. Se omite este parâmetro, a variável é criada dinâmicamente por 4D (ver o parágrafo “variáveis dinâmicas” na seção ). Se duplicar um objeto estático (linhas, retângulo, imagem estática, etc.), este parâmetro é ignorado. Passe um ponteiro Nil (->\[\]) se quiser poder utilizar os outros parâmetros. 

Utilize o parâmetro *relacionadoA* em dois casos:

* atualizar a ordem de entrada: neste caso, em *relacionadoA*, passe o nome do objeto editável localizado logo antes do objeto duplicado. Se quer que o novo objeto se converta no primeiro objeto na ordem de entrada da página, passe a constante Object First in entry order (ver o comando [OBJECT Get pointer](object-get-pointer.md)).
* associação com um grupo de botões opção: os botões opção funcionam de maneira coordenada quando estão agrupados. Se o objeto duplicado for um botão de opção, em *relacionadoA* passe o nome de um botão opção do grupo ao qual associar o novo objeto.

Se omite este parâmetro ou passa uma string vazia, o novo objeto é convertido no último objeto editável da página do formulário. No caso de um botão de opção, o objeto se associa ao grupo do botão fonte. 

O novo objeto pode ser movido e redimensionado através dos parâmetros *moveH*, *moveV*, *redimH* e *redimV*. Como para o comando [OBJECT MOVE](object-move.md), o sentido de deslocamento ou redimensionamento é definido pelo signo dos valores passados nos parâmetros *moveH* e *moveV*:
* Se o valor é positivo, o deslocamento ou redimensionamento é efetuado respectivamente para a direita ou para baixo.
* Se o valor é negativo, el movimento ou redimensionamento é efetuado respectivamente para a esquerda ou para cima.

Por definição, os valores de *moveH*, *moveV*, *redimH* e *redimV* modificam as coordenadas do objeto em relação com sua posição anterior. Se quer que estes parâmetros especifiquem coordenadas absolutas, passe o parâmetro opcional *\**.  
Se omite estes parâmetros, o novo objeto se superpõe ao objeto de origem. 

Este comando deve ser utilizado no contexto da visualização de um formulário. Geralmente se chama o evento On Load do formulário ou depois uma ação usuário (evento On Clicked). 

**Nota:** se o evento On Load está associado ao objeto de origem, é gerado para o objeto duplicado ao executar o comando. Isto permite, por exemplo, inicializar o valor do objeto. 

Por razões técnicas e lógicas, OBJECT DUPLICATE não pode ser chamada dentro de certos eventos de formulário, em particular:

* Evento On Load gerado em um método de objeto
* Evento On Unload.

Quando o comando se chama em um contexto não compatível, o objeto não é duplicado e a variável *OK* toma o valor 0\. Se chama em um contexto de impressão, o erro -10601 é gerado também.  
  
Se o comando foi executado corretamente, a variável *OK* toma o valor 1\. Do contrário toma o valor 0.

#### Exemplo 1 

Criação de um novo botão chamado "BotãoCancelar" sobre o objeto existente "BotãoOk" e associação com a variável *vCancelar*:

```4d
 OBJECT DUPLICATE(*;"BotaoOK";"BotaoCancelar";vCancelar)
```

#### Exemplo 2 

Criação de um novo botão opção "bRadio6" baseado no botão opção existente "bRadio5". Este botão será associado à variável <>r6, integrada com o grupo do botão "bRadio5" e localizado 20 píxels acima:

```4d
 OBJECT DUPLICATE(*;"bRadio5";"bRadio6";<>r6;"bRadio5";0;20)
```

#### Ver também 

[OBJECT Get pointer](object-get-pointer.md)  
[OBJECT MOVE](object-move.md)  
*Objetos de formulário (Acesso)*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1111 |
| Thread-seguro | &cross; |
| Modificar variáveis | OK |


