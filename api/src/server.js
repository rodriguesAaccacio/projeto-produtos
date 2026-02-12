import express from 'express'
import mysql from 'mysql2/promise'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
app.use(cors())
app.use(express.json())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

let db;
try {
    db = await mysql.createConnection({
        host: 'benserverplex.ddns.net',
        user: 'alunos', 
        password: 'senhaAlunos',
        database: 'web_03ta' 
    });
    console.log("Conectado ao banco de dados com sucesso!");
} catch (error) {
    console.error("Erro ao conectar no banco:", error.message);
}

app.use(express.static(path.join(__dirname, '../../web')))

app.get('/mensagem', (req, res) => {
    res.send({ mensagem: "Backend funcionando" })
})


app.get('/products', async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT id, name, price, category, description FROM produtos_andressa')
        res.send(rows)
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: 'Erro ao buscar produtos' })
    }
})

app.post('/products', async (req, res) => {
    try {
        const { name, price, category, description } = req.body
        const sql = 'INSERT INTO produtos_andressa (name, price, category, description) VALUES (?, ?, ?, ?)'
        await db.execute(sql, [name, price, category, description])
        res.status(201).send({ message: 'Sucesso' })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: 'Erro ao salvar produto' })
    }
})

app.put('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, price, category, description } = req.body
        const sql = 'UPDATE produtos_andressa SET name = ?, price = ?, category = ?, description = ? WHERE id = ?'
        await db.execute(sql, [name, price, category, description, id])
        res.send({ message: 'Produto atualizado com sucesso' })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: 'Erro ao atualizar produto' })
    }
})

app.delete('/products/:id', async (req, res) => {
    try {
        const { id } = req.params
        await db.execute('DELETE FROM produtos_andressa WHERE id = ?', [id])
        res.send({ message: 'Produto removido com sucesso' })
    } catch (err) {
        console.error(err)
        res.status(500).send({ error: 'Erro ao excluir produto' })
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../web/index.html'))
})

app.listen(3000, () => {
    console.log('Servidor rodando em: http://localhost:3000')
})