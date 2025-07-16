const db = require('../configs/pg');
const crypto = require('crypto');

const postUsuario = async (params) => {
    try {
        const salt = crypto.randomBytes(16).toString('hex');
        const senhaCriptografada = crypto.createHash('sha256').update(params.senha + salt).digest('hex');

        const sql_post = `insert into usuario (nome, login, senha, salt, email, status, perfil, data_cadastro)
                          values ($1, $2, $3, $4, $5, $6, $7, current_date)`;
        const values = [
            params.nome,
            params.login,
            senhaCriptografada,
            salt,
            params.email,
            params.status,
            params.perfil 
        ];
        
        await db.query(sql_post, values);
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
    }
};

const getUsuario = async () => {
    const sql_get = `select * from usuario where excluido != true`;
    return await db.query(sql_get);
};

const getUsuarioById  = async (params) => {
    const sql_get = `select * from usuario where id = $1`;
    const { id } = params;
    return (await db.query(sql_get, [id])).rows;   
};

const getUsuarioByEmail = async (email) => {
    const sql_get = `select * from usuario where email = $1`;
    const result = await db.query(sql_get, [email]);
    return result.rows[0]; 
};

const getUsuarioByLogin = async (login) => {
    const sql_get = `select * from usuario where login = $1`;
    const result = await db.query(sql_get, [login]);
    return result.rows[0]; 
};


const deleteUsuario = async (params) => {
    const sql_delete = `update usuario set excluido = true where id = $1`;
    const { id } = params;
    await db.query(sql_delete, [id]);
};

const putUsuario = async (params) => {
    let sql_put = `update usuario set
            nome = $2, 
            login = $3,
            email = $4,
            status = $5
            where id = $1`;

    const values = [params.id, params.nome, params.login, params.email, params.status];

    if (params.senha) {
        const salt = crypto.randomBytes(16).toString('hex');
        const senhaCriptografada = crypto.createHash('sha256').update(params.senha + salt).digest('hex');
        sql_put = `update usuario set
                    nome = $2, 
                    login = $3,
                    senha = $4,
                    salt = $5,
                    email = $6,
                    status = $7,
                    perfil = $8
                    where id = $1`;
        values.splice(3, 0, senhaCriptografada); 
        values.splice(4, 0, salt);
    }

    return await db.query(sql_put, values);
};

const patchUsuario = async (params) => {
    const salt = crypto.randomBytes(16).toString('hex');
    const senhaCriptografada = crypto.createHash('sha256').update(params.senha + salt).digest('hex');
    const { senha, ...paramsSemSenha } = params;

    let fields = [];
    Object.keys(paramsSemSenha).forEach(e => e !== 'id' && fields.push(`${e} = '${paramsSemSenha[e]}'`));
    fields.push(`senha = '${senhaCriptografada}'`);
    fields.push(`salt = '${salt}'`);
    fields = fields.join(', ');

    const sql = `update usuario set ${fields} where id = ${params.id}`;
    await db.query(sql);
};

module.exports = {
    postUsuario,
    getUsuario,
    getUsuarioById,
    deleteUsuario,
    putUsuario,
    patchUsuario,
    getUsuarioByEmail,
    getUsuarioByLogin
};