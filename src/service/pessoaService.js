import testefirebase from "./../config/cloudstore/index";

const db = testefirebase.collection("/pessoas");

const pessoaService = {
    getAll() {
        return db;
    }
}

export default pessoaService;