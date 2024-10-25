---
id: form-get-objects
title: FORM GET OBJECTS
slug: /commands/form-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET OBJECTS.Syntax-->**FORM GET OBJECTS** ( *arrObjetos* {; *arrVariaveis*  {; *arrPags*}} {; *opcaoPag*} )<!-- END REF-->
<!--REF #_command_.FORM GET OBJECTS.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| arrObjetos | Text array | &#8592; | Nome dos objetos do formulário |
| arrVariaveis | Pointer array | &#8592; | Ponteiros a variáveis ou campos associados aos objetos |
| arrPags | Array integer | &#8592; | Número de página de cada objeto |
| opcaoPag | Integer, * | &#8594;  | 1=Página atual do formulário, 2=Todas as páginas, 4=Páginas herdadas<br/>Se passar * (obsoleto) = página atual com objetos herdados |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.FORM GET OBJECTS.Summary-->O comando FORM GET OBJECTS retorna em forma de array(s) a lista de todos os objetos presentes no formulário atual da tabela atual.<!-- END REF--> Esta lista pode estar restrita à página atual do formulário. O comando pode ser utilizado com os formulários de entrada e de saída.

**Nota**: O comando não inclui partes list box. Para passar um formulário para objetos list box, deve usar [LISTBOX GET OBJECTS](listbox-get-objects.md) ou [LISTBOX GET ARRAYS](listbox-get-arrays.md) (ver exemplo abaixo para uma combinação de [FORM GET OBJECTS](form-get-objects.md), [OBJECT Get type](object-get-type.md) e [LISTBOX GET OBJECTS](listbox-get-objects.md)).

Se um array passado como parâmetro não for declarado previamente, o comando o cria e dimensiona automaticamente. Entretanto, pensando na compilação da aplicação, lhe recomendamos declarar explicitamente cada array. 

Passe em *arrObjetos* o nome do array alfa que conterá os nomes dos objetos (cada nome de objeto é único em um formulário). A ordem na qual os objetos aparecem no array não é significativo.

Os outros arrays preenchidos opcionalmente pelo comando são sincronizados com o primeiro array. 

Passe o nome do array ponteiro que já contém os ponteiros às variáveis ou campos associados aos objetos no parâmetro opcional variablesArray. Se um objeto não tiver uma variável associada, o ponteiro [Is nil pointer](is-nil-pointer.md) é retornado. Se houver um objeto de tipo “subformulário”, é retornado um ponteiro à tabela do subformulário.

O terceiro array (opcional), *arrPags*, é preenchido com os números de páginas do formulário. Cada linha deste array contém o número de página do objeto correspondente. 

O parâmetro opcional *\** lhe permite reduzir a lista de objetos retornados na página atual do formulário. Quando se passa este parâmetro, só os objetos da página atual, da página 0 e das páginas herdadas são retornados pelo comando. Em outras palavras, todos os objetos presentes na página atual do formulário (visíveis ou não) são processados pelo comando.

O parâmetro opcional *opcaoPag* permite designar a(s) parte(s) do formulário desde onde deseja obter os objetos. Por padrão, se o parâmetro *opcaoPag* se omite (assim como o parâmetro *\**), se devolvem os objetos de todas as páginas, incluindo os objetos herdados. Para reduzir o alcance do comando, pode passar um valor em *opcaoPag*. Pode passar uma (ou uma combinação) das seguintes constantes, que se encontram no tema "*Objetos de formulário (Acesso)*":   
  
| Constante         | Tipo          | Valor | Comentário                                                                                        |
| ----------------- | ------------- | ----- | ------------------------------------------------------------------------------------------------- |
| Form all pages    | Inteiro longo | 2     | Devolve todos os objetos de todas as páginas, excluindo os objetos herdados                       |
| Form current page | Inteiro longo | 1     | Devolve todos os objetos da página atual, incluindo a página 0, mas excluindo os objetos herdados |
| Form inherited    | Inteiro longo | 4     | Devolve só os objetos herdados                                                                    |
  
  
**Nota de compatibilidade**: passar o parâmetro *\** é equivalente a passar Form current page+Form inherited. A sintaxe com o parâmetro *\** agora é obsoleta e não deve ser mais utilizada.

#### Exemplo 1 

Você quer receber informação sobre todas as páginas, incluindo objetos do formulário herdado (se existir):

```4d
  //Formulário aberto
 FORM GET OBJECTS(arrayObjetos;arrayVariaveis;arrayPaginas)
```

O:

```4d
  //Formulário carregado
 FORM LOAD([Tabela1];"MeuForm")
 FORM GET OBJECTS(arrayObjetos;arrayVariaveis;arrayPaginas;Form all pages+Form inherited)
```

#### Exemplo 2 

Você deseja obter os objetos da página atual do formulário carregado, incluindo a página 0 do formulário e os objetos dos formulários herdados (se existir):

```4d
 FORM LOAD("MiForm")
 FORM GOTO PAGE(2)
 FORM GET OBJECTS(arrayObjetos;arrayVariaveis;arrayPag;Formulario página atual+Formulário herdado)
```

#### Exemplo 3 

Quer obter informação sobre todos os objetos no formulário herdado (se os houver). Se não há formulários herdados, os arrays se devolverão vazios.

```4d
 FORM LOAD("MiForm")
 FORM GET OBJECTS(arrayObjetos;arrayVariaveis;arrayPag;Formulário herdado)
```

#### Exemplo 4 

Você quer obter os objetos da página 4, incluindo os da página 0, mas sem os objetos de formulários herdados (se existir):

```4d
 FORM LOAD([Tabela1];"MeuForm")
 FORM GOTO PAGE(4)
 FORM GET OBJECTS(arrayObjetos;arrayVariables;arrayPag;Formulario página actual)
```

#### Exemplo 5 

Você quer obter informação dos objetos de todas as páginas, mas sem objetos de formulário herdado (se existissem):

```4d
 FORM LOAD([Tabela1];"MeuForm")
 FORM GET OBJECTS(arrayObjetos;arrayVariaveis;arrayPaginas;Form todas as páginas)
```

#### Exemplo 6 

Você quer carregar um formulário e obter a lista de todos os objetos dos list boxes que contém.

```4d
 FORM LOAD("MyForm")
 ARRAY TEXT(arrObjects;0)
 FORM GET OBJECTS(arrObjects)
 ARRAY LONGINT(ar_type;Size of array(arrObjects))
 For($i;1;Size of array(arrObjects))
    ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})
    If(ar_type{$i}=Object type listbox)
       ARRAY TEXT(arrLBObjects;0)
       LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)
    End if
 End for
 FORM UNLOAD
```

#### Ver também 

[FORM GET PROPERTIES](form-get-properties.md)  
*Objetos (Formulários)*  
*Objetos de formulário (Acesso)*  