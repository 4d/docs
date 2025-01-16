---
id: set-field-titles
title: SET FIELD TITLES
slug: /commands/set-field-titles
displayed_sidebar: docs
---

<!--REF #_command_.SET FIELD TITLES.Syntax-->**SET FIELD TITLES** ( *tabela* ; *titulosCampos* ; *numCampos* {; *} )<!-- END REF-->
<!--REF #_command_.SET FIELD TITLES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594;  | Tabela para a qual vai estabelecer os títulos dos campos |
| titulosCampos | Text array | &#8594;  | Nomes dos campos do jeito que eles vão aparecer nas caixas de diálogo |
| numCampos | Integer array | &#8594;  | Números de campos atuais |
| * | Operator |  &#8594;  | Use os nomes personalizados no editor de fórmulas |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.SET FIELD TITLES.Summary-->SET FIELD TITLES permite ocultar, renomear e reorganizar os campos de uma tabela ou de uma subtabela passada em *tabela* ou *subtabela* quando aparecem nos editores padrão de 4D, tal como o editor de pesquisas, em modo Aplicação (mais especificamente, quando os editores são chamados através dos comandos do linguagem de 4D).<!-- END REF-->

Este comando permite igualmente renomear rapidamente as etiquetas dos campos em seus formulários, se tiver utilizado nomes dinâmicos. Para mais informação sobre a inserção de etiquetas de tabelas e campos dinâmicos nos formulários, consulte o Manual de Desenho 4D.  
  
Os arrays *titulosCampos* e *numCampos* devem estar sincronizados. No array *titulosCampos*, passe o nome dos campos do jeito queira que eles apareçam. Se não desejar mostrar um campo em particular, não inclua seu nome ou novo título no array. Os campos aparecerão na ordem que especifique neste array. Em cada elemento do array *numCampos*, passe o número da tabela que corresponde ao nome, novo ou antigo, do campo passado no mesmo número de elemento que no array *titulosCampos*.  
  
Por exemplo, você tem uma tabela ou subtabela composta pelos campos F, G, e H, criada nessa ordem. Você deseja que esses campos apareçam como M, N, e O. Além disso você não deseja mostrar o campo N. Por último, deseja mostrar O e M nessa ordem. Para fazer isso, passe O e M, no array de dois-elementos *titulosCampos* e passe 3 e 1, em um array de dois elementos, *numCampos*.  
  
**Nota**: se sua aplicação dá acesso ao editor de fórmulas (por exemplo pelo editor de relatórios rápidos), é necessário passar o parâmetro \* para manter consistência na aplicação.  
  
O parâmetro opcional \* lhe permite indicar se os nomes personalizados (estruturas "virtuais") definidos utilizando este comando podem ser utilizados ou não em fórmulas 4D: Por padrão, quando este parâmetro for omitido, as fórmulas executadas em 4D não podem usar nomes personalizados; é necessário utilizar os nomes de tabela reais. Deve passar este parâmetro se quiser controlar a informação que é proporcionada aos usuários e garantir a coerência da interface sempre que sejam usadas fórmulas ou expressões, ou seja:

* Se sua aplicação der acesso ao editor de fórmulas (por exemplo através do editor de relatórios rápidos).
* se sua aplicação mostrar referências de expressão como nos documentos 4D Write Pro

**Nota**: quando for passado o parâmetro \*, os nomes definidos por este comando podem ser usados nas fórmulas executadas por 4D. **Tenha cuidado neste caso**, os nomes personalizados não devem conter caracteres que sejam considerados como “proibidos” pelo interprete de linguagem 4D, tal como "Rate\_in\_%" que não pode ser utilizado em uma fórmula (para saber mais, consulte a seção *Convenções*).

SET FIELD TITLES NÃO modifica a estrutura atual do seu banco de dados. É concebida para afectar os usos posteriores das caixas de diálogo padrão de 4D e dos formulários que utilizam nomes dinâmicos quando eles são chamados através de um comando de linguagem. O alcance do comando SET FIELD TITLES é a sessão de trabalho. Um benefício em cliente/Servidor é que várias estações 4D cliente podem “ver” simultaneamente sua tabela de maneiras diferentes. Pode chamar SET FIELD TITLES tantas vezes quantas quiser.

Utilize o comando SET FIELD TITLES para:  
  
* Traduzir dinamicamente seu banco.
* Mostrar os campos na ordem que você queira, independentemente da definição atual de sua tabela.
* Mostrar os campos de um jeito que dependam da identidade ou dos privilégios personalizados de um usuário.

**AVISO:**

* SET FIELD TITLES NÃO anula o efeito da propriedade invisível de um campo. Quando um campo for definido para que seja invisível ao nivel da estrutura, não aparecerá em modo Aplicação, mesmo que seja incluido em uma chamada a SET FIELD TITLES.
* Os plug-ins sempre acessam a estrutura "virtual" como está especificado por este comando.
* Se o comando [SET TABLE TITLES](set-table-titles.md) for chamado sem nenhum parâmetro, o ambiente de linguagem é resetado e a estrutura "virtual" (incluindo nomes de tabela e campos personalizados) é completamente removida

#### Exemplo 

Ver o exemplo do comando [SET TABLE TITLES](set-table-titles.md).

#### Ver também 

[Field name](field-name.md)  
[GET FIELD TITLES](get-field-titles.md)  
[Last field number](last-field-number.md)  
[Parse formula](parse-formula.md)  
[SET TABLE TITLES](set-table-titles.md)  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 602 |
| Thread-seguro | &cross; |


