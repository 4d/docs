---
id: creating-using-macros
title: Criar e utilizar macros
---

Pode utilizar macro-comandos nos seus métodos. A utilização de macro-comandos poupa muito tempo durante a introdução de código.

## O que é uma macro?

Um macro-comando é uma secção de código 4D que está permanentemente acessível e que pode ser inserida em qualquer lugar nos seus métodos, qualquer que seja o tipo de base de dados aberta. As macros podem conter todos os tipos de texto, comandos e constantes 4D, bem como etiquetas especiais que são substituídas no momento da inserção da macro por valores derivados do contexto do método. Por exemplo, uma macro pode conter a etiqueta `<method_name/>;` no momento da inserção da macro, esta etiqueta será substituída pelo nome do método projeto atual.

As macros são armazenadas num ou mais ficheiros de formato XML (texto). Podem ser colocados numa lista do editor de código; também podem ser chamados através do menu de contexto do editor ou através da função de preenchimento automático.

As macros 4D são escritas em formato XML. Pode usar o ficheiro macro padrão 4D como está ou modificá-lo.

## Localização das macros

4D carrega as macros a partir de uma pasta chamada **Macros v2**. As macros devem estar na forma de um ou mais ficheiros XML que são colocados nesta pasta.

A pasta "Macros v2" pode ser localizada:

- Na pasta 4D ativa da máquina. As macros são então partilhadas para todas as bases de dados. **Nota:** a localização da pasta 4D ativa varia conforme a sistema operacional utilizado. Para mais informações, consulte a descrição do comando [Get 4D folder](https://doc.4d.com/4Dv19R4/4D/19-R4/Get-4D-folder.301-5739515.en.html) no manual 4D *Linguagem*.
- Junto ao ficheiro de estrutura da base de dados. As macros só são carregadas para esta estrutura.
- Para componentes: na pasta **Components** da base de dados. As macros só são carregadas se o componente estiver instalado.

Estas três localizações podem ser utilizadas simultaneamente: é possível instalar uma pasta "Macros v2" em cada localização. As macros serão carregadas na seguinte ordem: pasta 4D, ficheiro de estrutura, componente 1... componente X.

## Macros predefinidas



4D oferece um conjunto de macros padrão contendo, por exemplo, palavras-chave de fluxo de controlo. Estas macros estão incluídas no ficheiro predefinido "*Macros.xml*", colocado na pasta "Macros v2" criada na pasta 4D ativa da máquina durante o arranque inicial de 4D.

Pode modificar este ficheiro ou o conteúdo da pasta posteriormente, como desejar (ver o parágrafo seguinte). No caso de problemas com essa pasta, ela pode ser apagada e 4D a recriará na próxima inicialização.

## Adicionar macros personalizadas

Pode adicionar macros personalizadas no ficheiro "Macros.xml" utilizando um editor de texto padrão ou através de programação. Também é possível adicionar ficheiros XML de macros personalizadas nesta pasta.

No modo local, o arquivo de macros pode ser aberto enquanto se usa 4D. A lista de macros disponíveis é atualizada em cada evento que ativa 4D. Por exemplo, é possível colocar o editor de texto em primeiro plano, modificar o ficheiro de macros e depois voltar ao método: a nova macro fica então disponível no editor de código.

As macros vazias ou incorretas não são mostradas.

### Verificando a sintaxe das macros personalizadas

Os arquivos de macro-comandos de 4D devem estar em conformidade com o padrão XML. Isto significa mais particularmente que a declaração XML `<?xml version="1.0" ...?>` e a declaração de documento `<!DOCTYPE macros SYSTEM "http://www.4d.com/dtd/2007/macros.dtd">` são obrigatórias no início de um ficheiro macro para que este seja carregado. São suportados os diferentes tipos de codificação XML. No entanto, recomenda-se a utilização de uma codificação compatível com Mac/PC (UTF-8). 4D fornece uma DTD que pode ser usada para validar os ficheiros macro. Este ficheiro encontra-se na seguinte localização:

- Windows: \Resources\DTD\macros.dtd
- Mac OS: :Contents:Resources:DTD:macros.dtd

Se um ficheiro de macros não contiver os comandos de declaração ou não puder ser validado, não é carregado.

## Sintaxe das macros 4D

As macros 4D são construídas usando etiquetas XML personalizadas chamadas "elementos".

Algumas etiquetas indicam o início e o fim da definição (etiquetas duplas do tipo `<tag> </tag>`), outras são substituídas por valores de contexto de inserção (`<tag/>`).

Em conformidade com as especificações XML, algumas etiquetas de elementos podem incluir atributos. Salvo indicação em contrário, estes atributos são facultativos sendo utilizado um valor por defeito quando são omissos. A sintaxe dos elementos com atributos é a seguinte:

- Etiquetas duplas: `<tag attribute="value"> </macro>`
- Etiquetas individuais: `<tag attribute="value"/>`

If the element accepts several attributes, you can group them in the same line of command, separated by a space: `\&#060;tag attribute1="value" attribute2="value" attribute3="value"... &#062;`

Eis a lista de etiquetas e o seu modo de utilização:

| **Etiquetas dos elementos**      | **Descrição**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<macros> </macros>` | Início e fim do ficheiro macro (etiqueta obrigatória).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `<macro> </macro>`   | Início e fim da definição de uma macro e dos seus atributos.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                  | *Atributos*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                  | - name: Nome**da macro tal como aparece nos menus e nas listas do Editor de código (atributo obrigatório).                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|                                  | - type_ahead_text: Cadeia de caracteres** a introduzir para chamar a macro utilizando a função type-ahead (também conhecida como autocomplete)*.                                                                                                                                                                                                                                                                                                                                                                                                                        |
|                                  | - in_menu: Booleano que indica se a macro pode ser chamada utilizando o menu de contexto*. Valores = "true" (padrão) ou "false."                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                  | - type_ahead: Booleano que indica se a macro pode ser chamada utilizando a função type-ahead (também conhecida como autocomplete)*. Valores = "true" (padrão) ou "false."                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                  | - method_event: Utilizado para acionar a chamada automática da macro em função da fase de tratamento atual de cada método (criação, encerramento, etc.). Values = "on_load": A macro é acionada na abertura de cada método, "on_save": A macro é acionada quando cada método é guardado (fecho de um método modificado ou guardar utilizando o comando Ficheiro>Guardar, "on_create": A macro é acionada quando cada método é criado, "on_close": A macro é acionada quando cada método é encerrado.                                                                    |
|                                  | "on_save" e "on_close" podem ser utilizados em conjunto --- por outras palavras, ambos os eventos são gerados quando um método modificado é fechado. Por outro lado, "on_create" e "on_load" nunca são gerados de forma consecutiva. Este atributo pode ser utilizado, por exemplo, para pré-formatar métodos quando estes são criados (comentários na área do cabeçalho) ou para registar informações como a data e a hora em que são encerrados.                                                                                                                      |
|                                  | - version: Utilizado para ativar o novo modo de suporte de seleções de texto para a macro (consulte a seção "Acerca da etiqueta `<method>` " abaixo). Para ativar este novo modo, passe o valor "2". Se omitir este atributo ou passar version="1", o modo anterior é mantido.                                                                                                                                                                                                                                                                                        |
|                                  | - in_toolbar: Booleano que indica se a macro deve estar presente no menu do botão Macro da barra de ferramentas. Valores= "true" (padrão) ou "false".                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `<selection/>`             | Etiqueta substituída pelo texto selecionado quando a macro é inserida. A selecção pode estar vazia.                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `<text> </text>`     | Início e fim do código que deve ser inserido no método. Um retorno de carro será adicionado antes e depois do código.                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `<method> </method>` | Início e fim do nome do método do projeto e do seu parâmetro (opcional). O método é executado quando a macro é chamada. Pode passar um parâmetro na forma ("param1;param2;..."). This parameter will be received in the method using the variables $1, $2, etc. This parameter will be received in the method using the variables $1, $2, etc. For additional information about this tag, refer to the "About the `<method>` Tag" section below. Para obter informações adicionais sobre esta etiqueta, consulte a seção "Sobre a etiqueta `<method>` " abaixo. |
| `<caret/>`                 | Localização do ponto de inserção no código após a macro ter sido inserida.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `<user_4D/>`               | Etiqueta substituída pelo nome do usuário 4D atual.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `<user_os/>`               | Etiqueta substituída pelo nome do usuário do sistema atual.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `<method_name/>`           | Tag substituída pelo nome do método atual.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `<method_path/>`           | Etiqueta substituída pela sintaxe do caminho (como devolvido por [`METHOD Get path`](https://doc.4d.com/4dv19R/help/command/en/page1164.html) do método atual.                                                                                                                                                                                                                                                                                                                                                                                                              |
| `<date/>`                  | Tag substituída pela data actual.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                  | - format: Formato 4D utilizado para mostrar a data. Se nenhum formato for definido, será usado o formato padrão. Valores = número do formato 4D (0 a 8).                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `<time/>`                  | Tag substituída pela hora atual.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                  | - format: Formato 4D utilizado para mostrar a hora. Se nenhum formato for definido, será usado o formato padrão. Valores = número do formato 4D (0 a 6).                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `<clipboard/>`             | Etiqueta substituída pelo conteúdo da área de transferência.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|                                  | *Atributo*:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|                                  | - index: Área de transferência a ser colada. Valores = número da área de transferência (0 a 9).                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

- As macros podem ser chamadas utilizando o menu de contexto do editor de código ou utilizando a função de antecipação de digitação (ver a seção seguinte).
- Se quiser estar em conformidade com as especificações da linguagem XML, não deve utilizar caracteres alargados (caracteres acentuados, aspas, etc.).

Aqui está um exemplo de definição de macro:

| **Conteúdo da macro**                                | **Comentários**                                                                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<?xml version="1.0"...?>`                     | Declaração XML                                                                                                                                         |
| `<!DOCTYPE macros SYSTEM>`                     | Declaração do documento                                                                                                                                |
| `<macros>`                                     | Início do ficheiro XML das macros                                                                                                                      |
| `<macro name="RecordLoop">`                    | Início da definição e nome da macro                                                                                                                    |
| `<text>`                                       | Início do código da macro                                                                                                                              |
| For($i;1;Records in selection(`<Selection/>`)) | A etiqueta `<Selection/>` será substituída pelo código selecionado no método 4D no momento da inserção da macro (por exemplo, um nome de tabela) |
| SAVE RECORD(`<Selection/>`)                    |                                                                                                                                                        |
| NEXT RECORD(`<Selection/>`)                    |                                                                                                                                                        |
| End for                                              |                                                                                                                                                        |
| `</text>`                                      | Fim do código macro                                                                                                                                    |
| `</macro>`                                     | Fim da definição de macro                                                                                                                              |
| `</macros>`                                    | Fim do ficheiro XML das macros                                                                                                                         |

## Acerca da etiqueta `<method>`

A etiqueta `<method>` permite-lhe gerar e utilizar macro-comandos que executam métodos de projeto 4D. Isto permite aos programadores criar funções sofisticadas que podem ser distribuídas através de macro-comandos associados a componentes. Por exemplo, a macro seguinte fará com que o método *MyMethod* seja executado com o nome do método atual como parâmetro:

`<method>MyMethod("<method_name/>")</method>`

O código de um método chamado é executado num novo processo. Este processo é encerrado quando o método é executado.

> O processo da estrutura permanece congelado até que a execução do método chamado seja concluída. Deve certificar-se de que a execução é rápida e que não há risco de bloquear a aplicação. Se isso ocorrer, use o comando **Ctrl+F8** (Windows) ou **Command+F8** (Mac OS) para "matar" o processo.

## Chamada de macros

Por predefinição, as macros podem ser chamadas utilizando o menu de contexto ou a barra de ferramentas do Editor de código, a função de preenchimento automático ou uma lista específica na parte inferior da janela do Editor de código.

Note-se que, para cada macro, é possível restringir a possibilidade de a chamar utilizando o menu de contexto e/ou a função de preenchimento automático.

### Menu contextual e barra de ferramentas

Por predefinição, todas as macros podem ser chamadas através do menu de contexto do Editor de código (utilizando o comando hierárquico **Inserir macro** ) ou o botão **Macros** da barra de ferramentas.

O atributo *in_menu* da etiqueta `<macro>` é utilizado para definir se a macro aparece ou não neste menu.

No menu de contexto, as macros são apresentadas pela ordem do ficheiro "Macros.xml" e de quaisquer ficheiros XML adicionais. Assim, é possível alterar a ordem modificando estes arquivos.

### Autocompletar

Por defeito, todas as macros são acessíveis utilizando a função autocompletar (também conhecida como type-ahead) (ver [Escrever um método](./write-class-method.md)). O atributo *type_ahead* da etiqueta `<macro>` pode ser utilizado para excluir uma macro deste tipo de operação.

**Nota:** Se a macro contiver a etiqueta `<selection/>` , não aparecerá na janela pop-up de preenchimento automático.

### Lista do editor de código

Pode apresentar as suas macros numa lista do Editor de Código (ver [Escrever um método](./write-class-method.md)). Basta fazer duplo clique no nome de uma macro na lista para a chamar. Não é possível excluir uma macro específica desta lista.

## Notas de compatibilidade

O suporte de macro pode mudar de uma versão de 4D para outra. Para manter as diferentes versões compatíveis enquanto mantém suas personalizações, 4D não remove nenhuma versão anterior. Se quiser utilizar as últimas funcionalidades disponíveis, tem de adaptar a sua versão em conformidade.

### Variáveis de seleção de texto para métodos

Recomenda-se a gestão das selecções de texto através dos comandos [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) e [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) . Estes comandos podem ser utilizados para ultrapassar o particionamento dos espaços de execução do projeto/componente anfitrião, permitindo assim a criação de componentes dedicados à gestão de macros. Para ativar este modo para uma macro, é necessário declarar o atributo Versão com o valor 2 no elemento Macro. Neste caso, 4D não gere mais as variáveis predefinidas _textSel,_textReplace, etc. e os comandos [GET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page997.html) e [SET MACRO PARAMETER](https://doc.4d.com/4dv19/help/command/en/page998.html) são utilizados. Este atributo deve ser declarado da seguinte forma:

`<macro name="MyMacro" version="2">`<br/> `--- Text of the macro ---`<br/> `</macro>`

Se este atributo não for indicado, é mantido o modo anterior.

### Incompatibilidades relacionadas com a norma XML

Devem ser observadas regras de sintaxe rigorosas para que os arquivos de macros respeitem a norma XML. Isto pode levar a incompatibilidades com o código das macros criadas com versões anteriores e impedir o carregamento de ficheiros XML. As principais causas de mau funcionamento são as seguintes

- Comentários do tipo "// my comment", permitidos dentro de elementos `<macro>` em versões anteriores de 4D, não são compatíveis com a sintaxe XML. As linhas de comentários devem respeitar a forma normalizada `"<!-- o meu comentário -->"` .
- Os símbolos `<>` utilizados mais particularmente para nomes de objectos entre processos devem ser codificados. Por exemplo, a variável `<>params` deve ser escrita `&lt;>params`.
- A etiqueta de declaração inicial `<macros>` podia ser omitida em versões anteriores de 4D. Agora é obrigatório; caso contrário, o ficheiro não será carregado.
