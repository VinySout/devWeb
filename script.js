var app = new function () {
    this.el = document.getElementById('projetos');

    this.projetos = [];

    this.FetchAll = function () {
        var data = '';
        if (this.projetos.length > 0) {

            for (i = 0; i < this.projetos.length; i++) {
                data += '<tr><th>Nome do Projeto</th><th>Descrição</th><th>Gestor</th><th>Equipe</th><th>Data Inicio</th><th>Data Fim</th></tr><tr>';
                data += '<td>' + this.projetos[i].nome + '</td>';
                data += '<td>' + this.projetos[i].descricao + '</td>';
                data += '<td>' + this.projetos[i].gestor + '</td>';
                data += '<td>' + this.projetos[i].equipe + '</td>';
                data += '<td>' + this.projetos[i].dtInicio + '</td>';
                data += '<td>' + this.projetos[i].dtFim + '</td>';
                data += '<td><button onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }

        return this.el.innerHTML = data;
    };

    this.Add = function () {
        el = document.getElementById('addNome');
        var nome = el.value.trim();
        el = document.getElementById('addDescricao');
        var descricao = el.value.trim();
        el = document.getElementById('addNomeGestor');
        var gestor = el.value.trim();
        el = document.getElementById('addEquipe');
        var equipe = el.value.trim();
        el = document.getElementById('addDataInicio');
        var dtInicio = el.value.trim();
        el = document.getElementById('addDataFim');
        var dtFim = el.value.trim();

        var projeto = {
            nome: nome,
            descricao: descricao,
            gestor: gestor,
            equipe: equipe,
            dtInicio: dtInicio,
            dtFim: dtFim
        };

        if (projeto) {
            this.projetos.push(projeto);
            el.value = '';
            this.FetchAll();
        }
    };

    this.Edit = function (item) {
        var nome = document.getElementById('editNome');
        nome.value = this.projetos[item].nome;

        var descricao = document.getElementById('editDescricao');
        descricao.value = this.projetos[item].descricao;

        var gestor = document.getElementById('editNomeGestor');
        gestor.value = this.projetos[item].gestor;
        
        var equipe = document.getElementById('editEquipe');
        equipe.value = this.projetos[item].equipe;

        var dtInicio = document.getElementById('editDataInicio');
        dtInicio.value = this.projetos[item].dtInicio;

        var dtFim = document.getElementById('editDataFim');
        dtFim.value = this.projetos[item].dtFim;

        document.getElementById('editForm').style.display = 'block';
        self = this;
        document.getElementById('addForm').style.display = 'none';

        document.getElementById('saveEdit').onsubmit = function () {
            
            var projeto = {
                nome: nome.value, 
                descricao: descricao.value, 
                gestor: gestor.value,
                equipe: equipe.value,
                dtInicio: dtInicio.value,
                dtFim: dtFim.value
            };

            if (projeto) {
                self.projetos.splice(item, 1, projeto);
                self.FetchAll();
                CloseInput();
            }
        }
    };

    this.Delete = function (item) {
        this.projetos.splice(item, 1);
        this.FetchAll();
    };
}
app.FetchAll();

function CloseInput() {
    document.getElementById('editForm').style.display = 'none';
}

function mostrarPrimeiroFormulario() {
    document.getElementById('addForm').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
}

function ocultarPrimeiroFormulario(){
    document.getElementById('addForm').style.display = 'none';
    document.getElementById('tabelaProjetos').style.display= 'block';
}

