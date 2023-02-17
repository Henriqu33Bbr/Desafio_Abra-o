# cur = conn.cursor()
# cur.execute("SELECT * FROM Contas")
# x = cur.fetchall()
# print(x)

# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import psycopg2

# conn = psycopg2.connect(
#     dbname="Contas_Cadastradas",
#     user="postgres",
#     password="1234",
#     host="localhost",
#     port="5432"
# )

# cur = conn.cursor()
# app = FastAPI()
# origins = [
#     "http://localhost.tiangolo.com",
#     "https://localhost.tiangolo.com",
#     "http://localhost",
#     "http://localhost:3000",]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],)

# class Pessoa(BaseModel):
#     id: int
#     nome: str
#     email: str
#     senha: str


# @app.post('/user')
# async def Colocar(dado: Pessoa):
#     id: dado.id
#     nome: dado.nome
#     email: dado.email
#     senha: dado.senha
#     cur.execute(f"INSERT INTO contas VALUES( {id},{nome}, {email}, {senha})")
#     conn.commit()
#     return dado
