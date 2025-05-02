const db = require('../configs/pg');
const crypto = require('crypto');

const postLogin = async (params) => {
    try {
        const { login, senha } = params;

        const sql_get = `select id, nome, perfil, senha, salt, status, excluido from usuario where login = $1`;
        const result = await db.query(sql_get, [login]);

        if (result.rows.length > 0) {
            const { id, nome, perfil, senha: senhaArmazenada, salt, status, excluido } = result.rows[0];
            
            if (status !== 'ativo' || excluido != false) {
                return { success: false, message: 'Usuário inativo. Não é possível fazer login.' };
            }

            const senhaCriptografada = crypto.createHash('sha256').update(senha + salt).digest('hex');

            if (senhaCriptografada === senhaArmazenada) {
                return { 
                    success: true, 
                    message: 'Login bem-sucedido', 
                    user: { id, nome, perfil } 
                };
            } else {
                return { success: false, message: 'Login ou senha incorretos' };
            }
        } else {
            return { success: false, message: 'Usuário não encontrado' };
        }
    } catch (error) {
        console.error('Erro ao tentar fazer login:', error);
        return { success: false, message: 'Erro no servidor. Tente novamente mais tarde.' };
    }
};

module.exports = {
    postLogin
};