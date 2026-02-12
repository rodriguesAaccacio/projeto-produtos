document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('productsGrid');

    const loadProducts = async () => {
        try {
            const response = await fetch('http://localhost:3000/products');
            const products = await response.json();

            if (products.length === 0) {
                grid.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-icon">📦</div>
                        <h3>Nenhum produto encontrado</h3>
                        <p>Parece que você ainda não cadastrou nada. Clique no botão superior direito para começar!</p>
                    </div>
                `;
                return;
            }

            grid.innerHTML = products.map(p => `
                <div class="card-item">
                    <div class="card-info">
                        <span class="tag">${p.category}</span>
                        <h3>${p.name}</h3>
                        <p>${p.description}</p>
                    </div>
                    <div class="card-price-row">
                        <div>
                            <button class="edit-btn" onclick="prepareEdit(${JSON.stringify(p).replace(/"/g, '&quot;')})">Editar</button>
                            <button class="delete-btn" onclick="deleteProduct(${p.id})">Excluir</button>
                        </div>
                        <span class="price-tag">${new Intl.NumberFormat('pt-BR', {
                            style: 'currency', currency: 'BRL'
                        }).format(p.price)}</span>
                    </div>
                </div>
            `).join('');

        } catch (err) {
            grid.innerHTML = `
                <div class="empty-state error">
                    <p>Erro ao conectar com o servidor. Verifique se a API está rodando.</p>
                </div>
            `;
        }
    };

    window.prepareEdit = (product) => {
        localStorage.setItem('editProduct', JSON.stringify(product));
        window.location.href = '../cadastro/cadastro.html';
    };

    window.deleteProduct = async (id) => {
        if (confirm('Deseja realmente excluir este produto?')) {
            try {
                const response = await fetch(`http://localhost:3000/products/${id}`, {
                    method: 'DELETE'
                });
                if (response.ok) loadProducts();
            } catch (err) {
                console.error('Erro na requisição:', err);
            }
        }
    };

    loadProducts();
});