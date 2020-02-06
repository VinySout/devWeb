# devWeb
<h1>Treinamento de Angular</h1>
<h3>Requisitos – Gestão de Projetos</h3> 
<p>Será um sistema para gestão e cadastro de projetos da uma empresa, ao qual o funcionário com as devidas credenciais pode cadastrar, listar, editar e excluir informações.</p>

<h3>#REQ 01 CADASTRO DE PROJETO.</h3>
<p>O usuário deverá preencher os seguintes campos obrigatórios e clicar em cadastrar.</p>
<ul>
<li>Nome do projeto;</li>
<li>Descrição do projeto;</li>
<li>Gestor do projeto;</li>
<li>Equipe do projeto;</li>
<li>Período (data de início e data de fim).</li>
</ul>

<h4>VALIDADORES:</h4>
<ul>
<li>Nome do projeto: valor máximo de caracteres: 65 e min: 10;
<li>Descrição do projeto: valor máximo de caracteres: 250 e min: 20;
<li>Gestor do projeto: valor máximo de caracteres: 65 e min: 10;
<li>Equipe do projeto: valor máximo de caracteres: 100 e min: 50;
<li>Período: Data início deve ser menor do que a data de termino.
<li>Botão de Cadastrar: O sistema deve exibir uma mensagem de que o projeto foi cadastrado com sucesso.
</ul>

<h3>#REQ 02 LISTAGEM DE PROJETOS</h3>
<p>Os projetos cadastrados devem ser exibidos em tabela com as suas informações obrigatórias.</p>

<h4>VALIDADORES:</h4>
<ul>
<li>Todos os campos obrigatórios devem estar sendo exibidos corretamente na tela de listagem. 
</ul>

<h3>#REQ 03 EDITAR PROJETOS </h3>
<p>Os projetos podem ser editados no botão de editar na coluna de “ações” e serem atualizados.</p>

<h4>VALIDADORES:</h4>
<ul>
<li>As informações devem estar previamente apresentadas na tela, para poderem serem editadas e atualizadas. 
</ul>

<h3>REQ 04 EXCLUIR PROJETOS</h3>
<p>Os projetos podem ser excluídos no botão de “excluir” na coluna de “ações”.</p>

<h4>VALIDADORES:</h4>
<ul>
<li> Os projetos ao serem excluídos deve ser exibido uma mensagem de confirmação de exclusão de projeto.
<li> O projeto deve ser excluído corretamente e as informações da tabela devem ser atualizadas.
</ul>
