import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { updateStorage } from '../../utils/storage.js';

export default function ProductList() {
  const { data, setData } = useAuth();
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const add = () => {
    if (!name) return;
    const id = 'p' + (data.products.length + 1);
    const next = updateStorage((curr) => {
      curr.products = [...curr.products, { id, name, stock: Number(stock) || 0, price: Number(price) || 0 }];
      return curr;
    });
    setData(next);
    setName(''); setStock(''); setPrice('');
  };

  const updateItem = (id, field, value) => {
    const next = updateStorage((curr) => {
      curr.products = curr.products.map((p) => p.id === id ? { ...p, [field]: field === 'name' ? value : Number(value) } : p);
      return curr;
    });
    setData(next);
  };

  const remove = (id) => {
    const next = updateStorage((curr) => {
      curr.products = curr.products.filter((p) => p.id !== id);
      return curr;
    });
    setData(next);
  };

  return (
    <div>
      <h3>Products & Stock</h3>
      <table>
        <thead><tr><th>Name</th><th>Stock</th><th>Price</th><th></th></tr></thead>
        <tbody>
          {data.products.map((p) => (
            <tr key={p.id}>
              <td><input value={p.name} onChange={(e) => updateItem(p.id, 'name', e.target.value)} /></td>
              <td><input type="number" value={p.stock} onChange={(e) => updateItem(p.id, 'stock', e.target.value)} style={{ width: 80 }} /></td>
              <td><input type="number" value={p.price} onChange={(e) => updateItem(p.id, 'price', e.target.value)} style={{ width: 80 }} /></td>
              <td><button onClick={() => remove(p.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: 16 }}>
        <h4>Add Product</h4>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />{' '}
        <input placeholder="Stock" type="number" value={stock} onChange={(e) => setStock(e.target.value)} />{' '}
        <input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />{' '}
        <button onClick={add}>Add</button>
      </div>
    </div>
  );
}