---
id: form-get-names
title: FORM GET NAMES
slug: /commands/form-get-names
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET NAMES.Syntax-->**FORM GET NAMES** ( {*tabela* ;} *arrayNome* {; *filtro* {; *marcador*}}{; *} )<!-- END REF-->
<!--REF #_command_.FORM GET NAMES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Referencia de tabela |
| arrayNome | Text array | &#8592; | Arrays de nomes de formulário |
| filtro | Text | &#8594;  | Filtro de nomes |
| marcador | Real | &#8594;  | Marcador para versão mínima a devolver |
| &#8592; | Novo valor |
| * | Operador | &#8594;  | Se passa = o comando é aplicado a base local quando é executado desde um componente(parâmetro ignorado fora deste contexto) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.FORM GET NAMES.Summary-->O comando **FORM GET NAMES** enche o array *arrayNoms* com os nomes dos formulários da aplicação.<!-- END REF--> 

Se o parâmetro *tabela* passa, o comando devolve os nomes dos formulários tabela associados a esta tabela. Caso este parâmetro se omite, o comando devolve os nomes dos formulários projeto da base. 

Pode limitar esta lista de formulários passando uma cadeia de comparação no parâmetro *filtro*: neste caso, somente se devolvem os formulários cujos nomes correspondem ao filtro. Pode utilizar o caractere @ para definir os filtros de tipo "começa por", "termina em" ou "contém". Se passa uma cadeia vazia, se ignora o parâmetro *filtro*.

Também pode limitar a lista de formulários utilizando o parâmetro opcional   *marcador*, que permite limitar os formulários devolvidos em   *arrayNome* aos que foram modificados depois de um tempo determinado. Como parte de um sistema de controle de versões, este parâmetro lhe permite atualizar só os formulários que foram modificados desde a última cópia de segurança.  
  
Este princípio funciona desta forma: 4D mantém um contador interno das modificações dos recursos da base. Como os formulários são recursos, cada vez que um formulário é criado ou salvo, o contador é incrementado.   
Se passar o parâmetro marcador, o comando devolve, em *arrayNome*, só os formulários que correspondem aos valores dos marcadores superiores ou iguais ao *marcador*. Além disso, se passar uma variável no marcador, o comando devolve o novo valor do contador de modificação, ou seja, o mais alto, nesta variável. Pode guardar este valor e utilizar ele na próxima chamada ao comando **FORM GET NAMES** para recuperar só os formulários novos ou modificados.  

Se o comando se executa desde um componente, devolve por padrão os nomes dos formulários projeto do componente. Se o parâmetro passa *\**, o array conterá os formulários da base local. 

**Nota:** Os formulários localizados no lixo não são listados. 

#### Exemplo 

Exemplos de usos típicos:

```4d
  // Lista de todos os formulários projeto da base
 FORM GET NAMES(arr_Names)
 
  // Lista de formulários da tabela [Empregados]
 FORM GET NAMES([Empregados] ;arr_Names)
 
  // Lista de formulários "input" da tabela [Empregados]
 FORM GET NAMES([Empregados] ;arr_Names;"input_@")
 
  // Lista de formulários projeto específicos da base
 FORM GET NAMES(arr_Names;"dialogue_@")
 
  // Lista todos os formulários projeto que foram modificados desde a última sincronização
  // vMarker contém um valor numérico
 FORM GET NAMES(arr_Names;"";vMarker)
 
  // Lista de formulários tabela desde um componente
  // Um ponteiro é necessário porque o nome da tabela é desconhecido
 FORM GET NAMES(tablePtr->;arr_Names;*)
```

#### Ver também 

*Formulários*  
[METHOD GET PATHS FORM](method-get-paths-form.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 1167 |
| Thread-seguro | &check; |
| Proibido no servidor ||


