document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const formTitle = document.getElementById('formTitle');
    const btnSubmit = document.getElementById('btnSubmit');
    const btnBack = document.getElementById('btnBack');

    const editData = JSON.parse(localStorage.getItem('editProduct'));

    if (editData) {
        btnBack.href = "../produtos/produtos.html";
        
        document.title = "Editar";
        formTitle.innerText = "Editar Produto";
        btnSubmit.innerText = "Salvar Alterações";
        
        document.getElementById('nome').value = editData.name;
        document.getElementById('preco').value = editData.price;
        document.getElementById('categoria').value = editData.category;
        document.getElementById('descricao').value = editData.description;
    } else {
        btnBack.href = "../index.html";
        document.title = "Cadastro";
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const rawPrice = parseFloat(document.getElementById('preco').value);
        const data = {
            name: document.getElementById('nome').value.trim(),
            price: Math.min(rawPrice, 999999.99),
            category: document.getElementById('categoria').value.trim(),
            description: document.getElementById('descricao').value.trim()
        };

        try {
            let url = 'http://localhost:3000/products';
            let method = 'POST';

            if (editData && editData.id) {
                url = `http://localhost:3000/products/${editData.id}`;
                method = 'PUT';
            }

            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert(editData ? 'Produto atualizado!' : 'Produto registrado com sucesso!');
                localStorage.removeItem('editProduct');
                window.location.href = "../produtos/produtos.html";
            } else {
                alert('Erro ao processar dados no servidor.');
            }
        } catch (err) {
            alert('Erro ao conectar com o servidor.');
        }
    });
});