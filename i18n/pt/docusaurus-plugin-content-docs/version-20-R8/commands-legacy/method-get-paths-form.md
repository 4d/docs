---
id: method-get-paths-form
title: METHOD GET PATHS FORM
slug: /commands/method-get-paths-form
displayed_sidebar: docs
---

<!--REF #_command_.METHOD GET PATHS FORM.Syntax-->**METHOD GET PATHS FORM** ( {*aTabela* ;} *arrRotas* {; *filtro*}{; *marcador*}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD GET PATHS FORM.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| aTable | Table | &#8594;  | Referência de tabela |
| arrRotas | Text array | &#8592; | Arrays de rotas e nomes dos métodos |
| filtro | Text | &#8594;  | Filtros de nomes |
| marcador | Real | &#8594;  | Valor mínimo de marcador |
| &#8592; | Novo valor atual |
| * | Operador | &#8594;  | Se passado = o comando se aplica à base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.METHOD GET PATHS FORM.Summary-->O comando **METHOD GET PATHS FORM** enche o array *arrRotas* com as rotas de acesso internas e os nomes dos métodos de todos os objetos dos formulários assim como também dos métodos formulário.<!-- END REF--> Os métodos formulário se etiquetam {formMethod}.

Apenas os objetos que contem código são listados. Por exemplo, os botões que estão associados somente com uma ação padrão não são retornados. 

Se você passar o parâmetro *aTabela*, o comando retorna os objetos dos formulários de tabela associados a esta tabela. Se você omitir esse parâmetro, o comando retorna os objetos de formulários do projeto base. 

Você pode limitar esta lista de formulários passando uma cadeia de comparação no parâmetro *filtro*, neste caso, somente os formulários cujos nomes correspondam ao filtro serão retornados. Você pode usar o caractere @ para definir filtros de tipo "começa por", "termina em" ou "contém". Se você passar uma cadeia vazia de caracteres, o parâmetro *filtro* é ignorado.

 O parâmetro de *marcador* permite recuperar métodos de modificação de rotas de um ponto específico. Como parte de um sistema de controle de versão, isso significa que você pode atualizar apenas os métodos alterados desde o último backup.   
A operação é a seguinte: 4D mantém um contador de métodos de modificação. Cada vez que um método é criado ou torna-se a manter, esse contador é incrementado e seu valor atual é armazenado no marcador interno do método.   
Se você passar o parâmetro *marcador*, o comando retornará apenas os métodos cuja pontuação for maior ou igual ao valor passado neste parâmetro. Além disso, o comando retorna em *marcador* o novo valor atual do contador de modificação, ou seja, o valor mais alto. Se você salvar esse valor, pode você pode passá-lo na próxima vez que este comando for chamado assim que você recupera apenas métodos novos ou modificados.   
  
Se você executar esse comando em um componente, retorna por defeito as rotas dos métodos de componente. Se o parâmetro *\** passa, a matriz conterá as rotas dos métodos da base local.   
  
**Nota**: o comando não lista os objetos de formulários herdados ou dos sub-formulários.  
  
Se o comando detecta um nome de método duplicado, é gerado o erro -9802 ("Object path not unique"). Neste caso, é aconselhável utilizar o CSM com o propósito de verificar a estrutura da base de dados.

#### Exemplo 1 

Lista de todos os objetos do formulário "input" da tabela \[Empregados\]. Note que os métodos formulário tabela (e os métodos formulário projeto) se processam como objetos que pertencem ao formulário:

```4d
 METHOD GET PATHS FORM([Employees];arrPaths;"input")
  // Conteúdo de arrPaths (por exemplo)
  // [tableForm]/input/{formMethod} -> Método formulário
  // [tableForm]/input/bOK -> Método objeto
  // [tableForm]/input/bCancel -> Método objeto
```

#### Exemplo 2 

Lista dos objetos do formulário projeto "dial":

```4d
 METHOD GET PATHS FORM(arrPaths;"dial")
```

#### Exemplo 3 

Lista de todos os objetos dos formulários "input" da tabela \[Empregados\] a partir de um componente:

```4d
 METHOD GET PATHS FORM(([Empregados];arrPaths;"input@";*)
```

#### Ver também 

[FORM GET NAMES](form-get-names.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1168 |
| Thread-seguro | &cross; |


