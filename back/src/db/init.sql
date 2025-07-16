create table usuario (
  id serial primary key not null,
  nome varchar(100) not null,
  email varchar(250) unique not null,
  login varchar(100) unique not null,
  senha text not null,
  salt text not null,
  status varchar(50),
  perfil varchar(10),
  data_cadastro date,
  data_atualizacao timestamp,
  reset_token text,
  reset_token_expiration timestamp,
  excluido boolean default false
);