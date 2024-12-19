---
id: get-4d-folder
title: Get 4D folder
slug: /commands/get-4d-folder
displayed_sidebar: docs
---

<!--REF #_command_.Get 4D folder.Syntax-->**Get 4D folder** {( *pasta* {; *options*} {; *})} : Text<!-- END REF-->
<!--REF #_command_.Get 4D folder.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| pasta | Integer | &#8594;  | Tipo de pasta (se omitido = pasta 4D ativa) |
| options | Object | &#8594;  | 4D Client database folder path configuration |
| * | Operador | &#8594;  | Retorna a pasta do banco local |
| Resultado | Text | &#8592; | Endereço para a pasta 4D |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Get 4D folder.Summary-->O comando **Get 4D folder** retorna o caminho para a pasta 4D ativa do aplicativo atual, ou para a pasta do ambiente 4D especificado pelo parâmetro *pasta*, se fornecido.<!-- END REF-->

Este comando lhe permite obter o caminho real das pastas utilizadas pela aplicação 4D. Ao usar este comando, você garante que seu código irá funcionar em qualquer plataforma rodando qualquer sistema localizado.

Na *pasta*, você pode passar uma das seguintes constantes, que estão localizadas no tema "*Ambiente 4D*":

| Constante                   | Tipo          | Valor |
| --------------------------- | ------------- | ----- |
| 4D Client database folder   | Inteiro longo | 3     |
| Active 4D Folder            | Inteiro longo | 0     |
| Current resources folder    | Inteiro longo | 6     |
| Data folder                 | Inteiro longo | 9     |
| Database folder             | Inteiro longo | 4     |
| Database folder Unix syntax | Inteiro longo | 5     |
| HTML Root folder            | Inteiro longo | 8     |
| Licenses folder             | Inteiro longo | 1     |
| Logs folder                 | Inteiro longo | 7     |
| MobileApps folder           | Inteiro longo | 10    |

O parâmetro opções permite personalizar la ruta de la carpeta de recursos locales. Sólo se tiene en cuenta cuando se utiliza la constante 4D Client database folder (ver abajo).

Nota: se o comando Get 4D folder for chamado desde um 4D remoto, a rota devolvida é a da máquina remota, não a de 4D Server.

##### Pasta 4D Ativa 

Aplicações em ambiente 4D usar a pasta específica para armazenar as seguintes informações:

* Arquivos de preferências usado pelo ambiente de aplicações 4D
* Arquivo Shortcuts.xml (atalhos de teclado personalizados)
* Pasta Macros v2 (comandos de macro do editor de Métodos)
* Pasta Favoritos v1x, por exemplo Favoritos v13 (caminhos para os bancos de dados locais e remotos que foram abertos)
* Pasta Logs para históricos de manutenção e quando dados forem de apenas leitura

Com as principais aplicações 4D (4D e 4D Server), a pasta 4D ativa chamada **4D** e está localizada por padrão no seguinte local:

* Windows: *{Disk}:\\Users\\{userName}\\AppData\\Roaming\\{applicationName}*
* macOS: *{Disk}:Users:{userName}:Library:Application Support:{applicationName}*


##### Pasta Licenças 

Pasta contendo os arquivos licença da máquina.

**Nota:** No caso de uma aplicação fusionada com 4D Volume Desktop, a pasta licenças é incluída no pacote da aplicação.

##### Pasta Data 

Rota da pasta que contém o arquivo de dados atual. O caminho da rota é expresso usando a sintaxe normal da plataforma atual.

##### Pasta 4D Client Database (máquinas cliente) 

Rota da pasta 4D criada em máquinas remotas 4D para salvar arquivos e pastas relacionados com o banco de dados (recursos, plug-ins, pasta Resources, etc.). O comando pode devolver:

* a rota para a aplicação atual quando for chamada em uma máquina remota e for omitod o parâmetro *opcoes*,
* a rota para toda aplicação quando se utilizar o parâmetro *opcoes* (em cujo caso **Get 4D folder** pode ser chamado em qualquer máquina).

Por padrão, a rota é: 

* Em Windows: {**Disk}:\\Users\\{UserAccount}\\AppData\\Local\\{ApplicationName}\\{StructureName\_IP\_Port\_key}*  
ex: C:\\Users\\John Doe\\AppData\\Local\\myApp\\myApp\_192\_168\_2\_134\_19813\_157
* Em macOS: *{Disk}:Users:{UserAccount}:Library:Caches:{ApplicationName} Client:{StructureName\_IP\_Port\_key}.*  
ex.:Users:John Doe:Library:Caches:myApp Client:myApp\_192\_168\_2\_134\_19813\_933

São usadas pastas diferentes se forem executadas simultaneamente várias instâncias da aplicação cliente na mesma máquina.

**Nota:** em Windows, nos projetos cliente fusionados, o local desta pasta se modifica se for utilizada a chave BuildApp *ShareLocalResourcesOnWindowsClient* .

**Uso da pasta base 4D Client com o parámetro *opções***

Pode utilizar o parâmetro *opciones* se quiser calcular qualquer rota de pasta local de base 4D. Neste caso, a rota se constrói a partir da informação que quiser fornecer no objeto *opces* e o comando pode ser utilizado de uma aplicação 4D, 4D Server, ou remota. Graças a esta funcionalidade, pode precalcular as rotas de suas pastas de recursos, por exemplo para precarregar conteúdos.

Pode passar as propriedades abaixo no objeto *opçoes*:

| **Propriedade**                    | **Tipo** | **Descrição**                                                                                                                                                        |
| ---------------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| remoteAppPath                      | Text     | Opcional - Rota de sistema executável da aplicação remota. Por padrão na rota executável da aplicação atual.                                                         |
| buildApplicationName               | Text     | Opcional: nome da aplicação (igual que o valor da chave xml BuildApp *BuildApplicationName* ). Por padrão é o nome da aplicação atual.                               |
| structureName                      | Text     | Obrigatório exceto se definir o atributo *clientServerSystemFolderName* \- Nome da estrutura.                                                                        |
| ipAddress                          | Text     | Obrigatorio exceto se definir oatributo *clientServerSystemFolderName* \- Dirección IP del servidor (igual que el valor de la llave xml BuildApp *IPAddress* ).      |
| portNumber                         | Number   | Obrigatório exceto se definir o atributo *clientServerSystemFolderName* \- Porto de publicação do servidor ( mesmo que o valor da chave xml BuildApp *PortNumber* ). |
| clientServerSystemFolderName       | Text     | Opcional - Opcional - Nome personalizado da pasta final de recursos locais (igual que o valor da chave xml BuildApp *ClientServerSystemFolderName*  BuildApp).       |
| shareLocalResourcesOnWindowsClient | Boolean  | Opcional - Pasta de recursos locais compartidos (igual que o valor da chave xml BuildApp *ShareLocalResourcesOnWindowsClient* ).                                     |

**Nota:** a rota devolvida se expressa utilizando a sintaxe de sistema da máquina que executa o comando.

##### Pasta Banco de Dados 

Pasta contendo o arquivo de estrutura de banco de dados. O caminho é expressado utilizando a sintaxe padrão da plataforma atual. 

Com a aplicação 4D Client, essa constante é rigorosamente equivalente à constante anterior: o comando retorna o caminho da pasta criada localmente.

##### Pasta base sintaxe Unix (Database Folder Unix Syntax) 

Pasta contendo o arquivo de estrutura de banco de dados. Esta constante designa a mesma pasta que o anterior, mas o caminho retornado é expressado utilizando a sintaxe UNIX (POSIX), de tipo /Users/ ... Esta sintaxe é usada principalmente quando você usa o comando [LAUNCH EXTERNAL PROCESS](launch-external-process.md) sob OS X.

##### Pasta Current Resources 

A pasta Recursos de banco de dados. Esta pasta contém os itens adicionais (fotos, textos) utilizados para a interface de banco de dados. Um componente pode ter a sua pasta de recursos próprios. A pasta de Recursos está localizado junto à estrutura do arquivo de banco de dados.

No modo cliente / servidor, essa pasta pode ser usada para organizar a transferência de dados personalizados (fotos, arquivos, subpastas, etc) entre a máquina do servidor e as máquinas cliente. O conteúdo desta pasta é atualizado automaticamente em cada máquina cliente quando ela se conecta. Todos os mecanismos de referência associados com a pasta Recursos são suportados em modo cliente / servidor (Pasta .lproj, XLIFF, fotos, e assim por diante). Além disso, 4D fornece várias ferramentas que podem ser utilizadas para gerir e atualizar esta pasta de forma dinâmica, mais particularmente, um explorador de recursos.

**Nota:** 

se a pasta de Recursos não existe para o banco de dados, executando o comando Get 4D folder com a pasta Recursos corrente constante irá criá-la.

Em Windows, em projetos cliente fusionados, a localização desta pasta é modificada se a chave *ShareLocalResourcesOnWindowsClient*  BuildApp for usada. 

##### Pasta Logs 

A pasta Logs do banco de dados criada no mesmo nível da estrutura de arquivo. Esta pasta centraliza os seguintes arquivos de log do banco de dados atual:

* conversão de banco de dados,
* as solicitações do servidor da Web,
* atividades de backup / restore,
* a depuração de comando,
* os pedidos de 4D Server (gerado em máquinas cliente e no servidor).

**Notas:** 

* Uma pasta adicional Logs, que está na pasta de preferências de usuário de sistema (Active 4D Folder é usada para arquivos de histórico de manutenção (compactar, verificar, reparar). É recomendado chamar [Get 4D file](get-4d-file.md) (compactação de arquivo de log) por exemplo quando quiser acessar tais arquivos de log). Esta pasta Logs também é usada em casos onde a pasta Logs normal não pode ser escrita
* Se a pasta Logs não existe para o banco de dados, executando o comando **Get 4D folder** com a constante Logs Folder irá criá-la.

##### Pasta HTML Root 

Pasta HTML raiz do banco de dados. O caminho retornado é expressado com a sintaxe padrão da plataforma atual. A pasta raiz HTML é a pasta na qual o servidor Web 4D olha para as páginas Web e arquivos solicitados. Por padrão, ela é denominada **WebFolder** e é colocado ao lado da estrutura de arquivo (ou sua cópia local, no caso de 4D em modo remoto). Sua localização pode ser definida na página de Configuração das preferências ou dinamicamente através do comando [WEB SET ROOT FOLDER](web-set-root-folder.md).

Note: Em Windows, em projetos cliente fusionados, a localização desta pasta é modificada se a chave *ShareLocalResourcesOnWindowsClient*  BuildApp for usada.

##### Pasta MobileApps 

Pasta que contém todas os arquivos existentes de sessão (json) usados pelas aplicações 4D para referenciar sessões de usuário de app mobile (ou seja, sessões de 4D para apps iOS). Arquivos de sessão são agrupadas em subpastas de aplicação e são criadas automaticamente. Para saber mais, veja a [documentação go mobile](https://developer.4d.com/go-mobile/).

Esta pasta está localizada no mesmo nível que o arquivo atual 4D data.

##### 

O parâmetro opcional *\** é útil no caso de uma arquitetura usando componentes: pode ser usado para determinar o banco de dados (host ou componente) para o qual quiser obter a rota de pasta. Esse parâmetro é apenas válido para as pastas Database folder, Database folder UNIX syntax e Current resources folder. É ignorado nos outros casos.

Quando o comando for chamado de um componente:

* Se o parâmetro *\** for passado, o comando retorna a rota da pasta host database,
* Se o parâmetro *\** não for passado, o comando retorna a rota da pasta componente.  
A pasta database (Database folder e Database folder UNIX syntax) retornada difere de acordo com o tipo de arquitetura componente:  
   * no caso de uma pasta/pacote .4dbase, o comando retorna a rota da pasta/pacote .4dbase,  
   * no caso de um arquivo.4db ou .4dc , o comando retorna a rota da pasta “Components”,  
   * no caso de um alias ou atalho, o comando retorna a rota da pasta contendo a matriz original da database. O resultado difere de acordo com o formato do banco de dados (pasta/pacote .4dbase ou arquivo .4db/.4dc ), como descrito acima.  
 Quando o comando for chamado da database host, sempre retorna a rota da pasta database host, independente de se o parâmetro *\** foi ou não passado.

#### Exemplo 1 

Durante a inicialização de um banco de dados único, você deseja carregar (ou criar) as suas próprias configurações em um arquivo localizado na pasta 4D. Para fazer isso, em [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md),, você pode escrever um código semelhante a este:

```4d
 $vsPrefDocName:=Get 4D folder+"MyPrefs.prf" //Constrói nome rota ao arquivo Preferences
  // Checa se o arquivo existe
 If(Test path name($vsPrefDocName)#Is a document)
    $vtPrefDocRef:=Create document($vsPrefDocName.prf) //Se não, o criaI
 Else
    $vtPrefDocRef:=Open document($vsPrefDocName.prf) //Se sim, o abre
 End if
 If(OK=1)
  //Processa conteúdos dos documentos
    CLOSE DOCUMENT($vtPrefDocRef)
 Else
  //Maneja erros
 End if
```

#### Exemplo 2 

Este exemplo ilustra o uso da constante Database Folder Unix Syntax sob Mac OS para listar o conteúdo da pasta do banco:

```4d
 $posixpath:="\""+Get 4D folder(Database folder Unix syntax)+"\""
 $myfolder:="ls -l "+$posixpath
 $in:=""
 $out:=""
 $err:=""
 LAUNCH EXTERNAL PROCESS($myfolder;$in;$out;$err)
```

**Nota:** sob Mac OS, é necessário colocar os endereços de acesso entre aspas quando contém os nomes de arquivos ou de pastas com espaços. A sequência de escape "\\" permite inserir o caractere aspas na string. Também é possível utiilzar a instrução Char(Double quote). 

#### Variáveis e conjuntos do sistema 

Se o parâmetro *pasta* não é válido ou se o endereço de acesso retornado é vazio, a variável sistema OK recebe o valor 0.

#### Ver também 

[COMPONENT LIST](component-list.md)  
[System folder](system-folder.md)  
[Temporary folder](temporary-folder.md)  
[Test path name](test-path-name.md)  
[WEB SET ROOT FOLDER](web-set-root-folder.md)  