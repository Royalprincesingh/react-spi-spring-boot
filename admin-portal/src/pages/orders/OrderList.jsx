import { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { updateStorage } from '../../utils/storage.js';

export default function OrderList() {
  const { data, setData } = useAuth();
  const [productId, setProductId] = useState(data.products[0]?.id || '');
  const [merchantId, setMerchantId] = useState(data.merchants[0]?.id || '');
  const [quantity, setQuantity] = useState(1);

  const createOrder = () => {
    if (!productId || !merchantId || quantity <= 0) return;
    const id = 'o' + (data.orders.length + 1);
    const next = updateStorage((curr) => {
      curr.orders = [...curr.orders, { id, productId, merchantId, quantity: Number(quantity), status: 'pending', createdAt: Date.now() }];
      return curr;
    });
    setData(next);
  };

  const updateStatus = (id, status) => {
    const next = updateStorage((curr) => {
      const order = curr.orders.find((o) => o.id === id);
      if (order && order.status !== 'completed' && status === 'completed') {
        const product = curr.products.find((p) => p.id === order.productId);
        if (product) product.stock = Math.max(0, product.stock - order.quantity);
        curr.transactions = [...curr.transactions, { id: 't' + (curr.transactions.length + 1), type: 'order', orderId: id, amount: (product?.price || 0) * order.quantity, createdAt: Date.now() }];
      }
      curr.orders = curr.orders.map((o) => o.id === id ? { ...o, status } : o);
      return curr;
    });
    setData(next);
  };

  return (
    <div>
      <h3>Orders</h3>
      <table>
        <thead><tr><th>ID</th><th>Product</th><th>Qty</th><th>Merchant</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {data.orders.map((o) => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{data.products.find((p) => p.id === o.productId)?.name}</td>
              <td>{o.quantity}</td>
              <td>{data.merchants.find((m) => m.id === o.merchantId)?.name}</td>
              <td>{o.status}</td>
              <td>
                <select value={o.status} onChange={(e) => updateStatus(o.id, e.target.value)}>
                  <option value="pending">pending</option>
                  <option value="completed">completed</option>
                  <option value="cancelled">cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginTop: 16 }}>
        <h4>Create Order</h4>
        <select value={productId} onChange={(e) => setProductId(e.target.value)}>
          {data.products.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
        </select>{' '}
        <input type="number" min={1} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} style={{ width: 80 }} />{' '}
        <select value={merchantId} onChange={(e) => setMerchantId(e.target.value)}>
          {data.merchants.map((m) => <option key={m.id} value={m.id}>{m.name}</option>)}
        </select>{' '}
        <button onClick={createOrder}>Create</button>
      </div>
    </div>
  );
}