---
id: set-query-destination
title: SET QUERY DESTINATION
slug: /commands/set-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY DESTINATION.Syntax-->**SET QUERY DESTINATION** ( *tipoDestino* {; *objetoDestino* {; *destPonteiro*}} )<!-- END REF-->
<!--REF #_command_.SET QUERY DESTINATION.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tipoDestino | Integer | &#8594;  | 0 - seleção atual 1 - conjunto 2 - seleção temporária 3 - variável |
| objetoDestino | Text, Variable | &#8594;  | Nome do conjunto, ou nome da seleção temporária, ou Variável |
| destPointer | Pointer | &#8594;  | Poneiro a variável local se destinação for Tipo=3 |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET QUERY DESTINATION.Summary-->O comando **SET QUERY DESTINATION** permite indicar a 4D onde colocar o resultado de todas as pesquisas posteriores para o processo atual.<!-- END REF-->  
  
 Especifique o tipo de destino no parâmetro *destinoTipo*. 4D oferece as seguintes constantes pré-definidas, que são encontradas no tema "*Destinos de pesquisa*":  
  
| Constante              | Tipo          | Valor |
| ---------------------- | ------------- | ----- |
| Into current selection | Inteiro longo | 0     |
| Into named selection   | Inteiro longo | 2     |
| Into set               | Inteiro longo | 1     |
| Into variable          | Inteiro longo | 3     |

Você especifica o destino da pesquisa no parâmetro opcional *destinoObjeto* de acordo com a tabela a seguir:

| **Parâmetro destinoTipo** | **Parâmetro destinoObjeto**                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| 0 (seleção atual)         | Omite o parâmetro                                                                               |
| 1 (conjunto)              | Passa o nome de um conjunto (existente ou a criar)                                              |
| 2 (seleção temporal)      | Passa o nome da seleção temporária (existente ou a criar)                                       |
| 3 (variável)              | Passa uma variável numérica (existente) ou uma string vazia "" para usar o parâmetro destinoPtr |
  
  
 \* Com:  

```4d
 SET QUERY DESTINATION(Into current selection)
```
  
  
 Os registros encontrados pela pesquisa se colocarão na seleção atual da tabela na qual se efetua a pesquisa.  
  
 \* Com:  
  
```4d
 SET QUERY DESTINATION(Into set;"meuConjunto")
```
  
  
 Os registros encontrados pela pesquisa se localizarão no conjunto "*meuConjunto*". A seleção atual e o registro atual da tabela na qual realiza a pesquisa permanecem iguais.  
  
 \* Com:  
  
```4d
 SET QUERY DESTINATION(Into named selection;"minhaSeleçãoTemporária")
```
  
  
 Os registros encontrados pela pesquisa se localizarão na seleção temporária "*minhaSeleçãoTemporária*". A seleção atual e o registro atual para a tabela na que se realiza a pesquisa permanecem iguais.

**Notas:**

* Se a seleção temporária não existe de antemão, se criará automaticamente ao final da pesquisa.
* Este comando administra as seleções temporárias como o comando [CUT NAMED SELECTION](cut-named-selection.md): só são conservadas as referências. Uma vez se utiliza a seleção temporal, já não existe.

 Com: 

```4d
 SET QUERY DESTINATION(Into variable;$vlResult)
```

**Nota**: com esta sintaxe, a variável $valorResultado deve ter sido definida, senão retorna um erro.

Ou:

```4d
 SET QUERY DESTINATION(Into variable;"";->$vlResult)
```

**Nota**: este segunda sintaxe facilita o uso conjunto do comando com [GET QUERY DESTINATION](get-query-destination.md).   
  
O número de registros encontrado pela pesquisa será localizado na variável *$vlResult*. A seleção atual e o registro atual para a tabela na que se realiza a pesquisa permanecem iguais.  
  
**Advertência**: **SET QUERY DESTINATION** afeta todas as pesquisas seguintes no processo atual. Lembre sempre de compensar uma chamada a **SET QUERY DESTINATION**(onde *destinoTipe#0*) com uma chamada a **SET QUERY DESTINATION**(0) para restaurar o modo de pesquisa padrão.  
  
**SET QUERY DESTINATION** muda apenas o comportamento dos comandos de pesquisa, ou seja:  
* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)
Por outro lado, **SET QUERY DESTINATION** não afeta outros comandos que modificam a seleção atual da tabela como [ALL RECORDS](all-records.md), [RELATE MANY](relate-many.md), etc.

#### Exemplo 1 

Se cria um formulário que mostra os registros da tabela \[*Agenda telefônica*\]. Se cria um objeto de tipo aba chamado *asRolodex* (com uma aba para cada letra do alfabeto) e um sub-formulário que mostra os registros da tabela \[*Agenda telefônica*\]. Ao escolher uma aba, mostra os registros que correspondem á letra.  
  
Em sua aplicação, a tabela \[*Agenda telefônica*\] contém um conjunto de dados estáticos, de modo a que não necessita realizar uma pesquisa cada vez que seleciona uma aba. Dessa maneira, pode economizar tempo precioso ao executar as pesquisas.  
  
Para fazer isso, pode redirecionar suas pesquisas nas seleções temporárias para reutilizá-las quando seja necessário. Escreva o método de objeto da aba *asRolodex* como se indica a continuação:

```4d
  // Método de objeto asRolodex
 Case of
    :(FORM Event=On Load)
  // Antes de que o formulário apareça na tela,
  // inicializar o rolodex e o array de booleanos que
  // nos indica se uma pesquisa para a letra correspondente
  // foi realizada ou não
       ARRAY STRING(1;asRolodex;26)
       ARRAY BOOLEAN(abQueryDone;26)
       For($vlElem;1;26)
          asRolodex{$vlElem}:=Char(64+$vlElem)
          abQueryDone{$vlElem}:=False
       End for
 
    :(FORM Event=On Clicked)
  // Quando um usuário faz clique na aba, verificar se a pesquisa correspondente
  // foi realizada ou não
       If(Not(abQueryDone{asRolodex}))
  // Se não, redirecionar a próxima pesquisa a uma seleção temporal
          SET QUERY DESTINATION(Into named selection;"temp")
  // Efetuar a pesquisa
          QUERY([Lista telefônica];[Lista telefônica]Last name=asRolodex{asRolodex}+"@")
  // Restaurar o modo de busca estandarte
          SET QUERY DESTINATION(Into current selection)
  // Utilizar os registros encontrados
          USE NAMED SELECTION("temp")
          COPY NAMED SELECTION([Phone book];"Rolodex+asRolodex{asRolodex})
  // A próxima vez que selecionemos esta letra, não realizaremos a pesquisa novamente
          abQueryDone{asRolodex}:=True
       Else
  // Utilize a seleção temporal existente para mostrar os registros correspondentes à letra selecionada
          USE NAMED SELECTION("Rolodex"+asRolodex{asRolodex}
       End if
 
    :(FORM Event=On Unload)
  // Logo o formulário desaparece da tela
  // Apagar as seleções temporais
       For($vlElem;1;26)
          If(abQueryDone{$vlElem})
             CLEAR NAMED SELECTION("Rolodex"+asRolodex{$vlElem})
          End if
       End for
  // Apagar os dois arrays que já não necessitamos
       CLEAR VARIABLE(asRolodex)
       CLEAR VARIABLE(abQueryDone)
 End case
```

#### Exemplo 2 

O método de projeto Valores Unicos neste exemplo lhe permite verificar se os valores são únicos para os campos em uma tabela. O registro atual pode ser um registro existente ou um registro novo.  

```4d
  // Método de projeto Valores Unicos
  // Valores Unicos ( Ponteiro ; Ponteiro { ; Ponteiro... } ) -> Booleano
  // Valores Unicos ( ->Tabela ; ->Campo { ; ->Campo2... } ) -> Yes ou No
 
 var $0 : Boolean
 var ${1} : Pointer
 var $vlCampo;$vlNbCampos;$vlEncontrado;$vlRegistroAtual : Integer
 $vlNbCampos:=Count parameters-1
 $vlRegistroAtual:=Record number($1->)
 If($vlNbCampos>0)
    If($vlRegistroAtual#-1)
       If($vlRegistroAtual<0)
  // O registro atual é um novo registro que não foi guardado (número de registro -3);
  // portanto podemos deter a pesquisa logo que se encontre pelo menos um registro
          SET QUERY LIMIT(1)
       Else
  // O registro atual é um registro existente;
  // portanto podemos deter a pesquisa logo que se encontrem pelo menos dois registros.
          SET QUERY LIMIT(2)
       End if
  // A pesquisa devolverá seu resultado em $vlFound
  // sem mudar o registro atual nem a seleção atual
       SET QUERY DESTINATION(Into variable;$vlFound)
  // Construir a pesquisa de acordo ao número de campos especificados
       Case of
          :($vlNbCampos=1)
             QUERY($1->;$2->=$2->)
          :($vlNbCampos=2)
             QUERY($1->;$2->=$2->;*)
             QUERY($1->;&;$3->=$3->)
          Else
             QUERY($1->;$2->=$2->;*)
             For($vlCampo;2;$vlNbCampos-1)
                QUERY($1->;&;${1+$vlCampo}->=${1+$vlCampo}->;*)
             End for
             QUERY($1->;&;${1+$vlNbCampos}->=${1+$vlNbCampos}->)
       End case
       SET QUERY DESTINATION(Into current selection) // Restaurar o modo de pesquisa padrão
       SET QUERY LIMIT(0) // Não há limites de pesquisas
  // Processar o resultado da pesquisa
       Case of
          :($vlEncontrado=0)
             $0:=True // Não há valores duplicados
          :($vlEncontrado=1)
             If($vlRegistroAtual<0)
                $0:=False // Um registro existente foi encontrado com os mesmos valores que o novo registro
             Else
                $0:=True // Não há valores duplicados, encontramos o mesmo registro
             End if
          :($vlEncontrado=2)
             $0:=False // Qualquer que seja o caso, os valores estão duplicados
       End case
    Else
       If(◊DebugOn) // Não tem sentido; assinale-o durante a versão de desenvolvimento
          TRACE // ATENÇÃO! Este método é chamado sem registro atual
       End if
       $0:=False // Não é possível garantir o resultado
    End if
 Else
    If(◊DebugOn) // Não faz sentido; assinale-o se a versão de desenvolvimento
       TRACE // ATENÇÃO! Este método é chamado sem condição de pesquisa
    End if
    $0:=False // Não posso garantir o resultado
 End if
```

Depois de implementar este método de projeto em sua aplicação, pode escrever:

```4d
  // ...
 If(ValoresUnicos(->[Contatos];->[Contatos]Empresa;->[Contatos]Sobrenome;->[Contatos]Nome))
  // Realize ações apropriadas para o registro que tenha valores únicos
 Else
    ALERT("Já existe um contato com este nome para esta empresa.")
 End if
  // ...
```

#### Ver também 

[GET QUERY DESTINATION](get-query-destination.md)  
[QUERY](query.md)  
[QUERY BY EXAMPLE](query-by-example.md)  
[QUERY BY FORMULA](query-by-formula.md)  
[QUERY BY SQL](query-by-sql.md)  
[QUERY SELECTION](query-selection.md)  
[QUERY SELECTION BY FORMULA](query-selection-by-formula.md)  
[QUERY WITH ARRAY](query-with-array.md)  
[SET QUERY LIMIT](set-query-limit.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 396 |
| Thread-seguro | &check; |


