const fs = require('fs');
const path = require('path');

const jsonTable = {
    filePath: path.join(__dirname, '../database/users.json'),
    readFile() {
        let rows = fs.readFileSync(this.filePath, 'utf-8');
        rows = JSON.parse(rows);

        return rows;
    },
    writeFile(contents) {
        let contentsJson = JSON.stringify(contents, null, ' ');
        fs.writeFileSync(this.filePath, contentsJson);
    },
    nextId() {
        // Leo las filas
        let rows = this.readFile();
        // Saco la última
        let lastRow = rows.pop()

        // Si existe le sumo 1 al id
        if (lastRow) {
            return lastRow.id + 1;
        }

        // Si no existe es el primero, retorno 1
        return 1;
    },
    all() {
        // Traigo todas las filas
        return this.readFile();
    },
    create(row) {
        // Me traigo todas las filas
        let rows = this.readFile();
        // Genero en nuevo id y se lo agrego a la fila
        row.id = this.nextId();
        // Agrego la fila a las que ya existen
        rows.push(row);

        // Escribo el archivo JSON con las filas actualizadas
        this.writeFile(rows);

        // Retorno el nuevo id generado
        return row.id;
    },
    update(row) {
        // Me traigo todas las filas
        let rows = this.readFile();

        // Actualizo solo aquella que tenga el mismo id
        let updatedRows = rows.map(oneRow => {
            if (oneRow.id == row.id) {
                return row;
            } else {
                return oneRow;
            }
        });

        // Escribo el archivo JSON con las filas actualizadas
        this.writeFile(updatedRows);

        return row.id;
    },
    delete(id) {
        // Me traigo todas las filas
        let rows = this.readFile();
        // Filtro solo aquella que tenga el mismo id
        let updatedRows = rows.filter(oneRow => oneRow.id != id); 

        // Escribo el archivo JSON con las filas actualizadas
        this.writeFile(updatedRows);
    },
    findById(id) {
        // Me traigo todas las filas
        let rows = this.readFile();

        // Retorno solo aquella que tenga el mismo id
        return rows.find(user => user.id == id);
    }
}


module.exports = {
    index: (req, res) => {
        let users = jsonTable.all()

        res.render('users/index', { 
            title: 'Listado de usuarios', 
            users       
        });
    },
    create: (req, res) => {
        res.render('users/create');
    },
    store: (req, res) => {
        // Generamos el nuevo usuario
        let user = req.body;
        
        let userId = jsonTable.create(user);
        
        res.redirect('/users/' + userId);
    },
    show: (req, res) => {
        let user = jsonTable.findById(req.params.id);

        if ( user ) {
            res.render('users/detail', { user });
        } else {
            res.send('No encontré el usuario');
        }
    },
    edit: (req, res) => {
        let user = jsonTable.findById(req.params.id);

        res.render('users/edit', { user });
    },
    update: (req, res) => {
        let user = req.body;
        user.id = Number(req.params.id);

        let userId = jsonTable.update(user);

        res.redirect('/users/' + userId);
    },
    destroy: (req, res) => {
        let users = jsonTable.all()

        jsonTable.delete(id);

        res.redirect('/users');
    }
}