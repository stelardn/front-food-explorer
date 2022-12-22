import { useEffect, useState } from "react";

import { Container, Main } from "./styles";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import { useAuth } from "../../hooks/auth";

import { FaCircle } from "react-icons/fa";
import { api } from "../../services/api";

export function AdmOrders() {
  const [allOrders, setAlllOrders] = useState([]);

  async function fetchAllOrders() {
    const response = await api.get('/orders');

    console.log(response.data)

    setAlllOrders([...response.data]);
  }

  async function handleStatus(id, status) {
    try {
      const response = await api.patch(`/orders/${id}`, { status });
      alert(`Status do pedido ${id} atualizado.`);
      fetchAllOrders();
    } catch (error) {
      alert(error.data.message.toString())
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <Container>
      <Header />
      <Main>
        <h1>Pedidos</h1>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>Status</th>
                <th className="wide-hidden">Nº</th>
                <th className="mobile-hidden">Código</th>
                <th>Detalhamento</th>
                <th>Data e hora</th>
              </tr>
            </thead>
            <tbody>
              {allOrders &&
                allOrders.map((order) => (
                  <tr key={String(order.id)}>
                    <td className="status" key={`${String(order.id)}.st`}>
                      <div>
                        {(() => {
                          switch (order.status) {
                            case 3:
                              {
                                return <FaCircle size={8} color="orange" />;
                              }
                              break;

                            case 4:
                              {
                                return <FaCircle size={8} color="green" />;
                              }
                              break;

                            default:
                              {
                                return <FaCircle size={8} color="red" />;
                              }
                              break;
                          }
                        })()}
                        <select onChange={(e) => handleStatus(order.id, e.target.value)}>
                          <option selected={order.status == 2} value={2}>Pendente</option>
                          <option selected={order.status == 3} value={3}>Preparando</option>
                          <option selected={order.status == 4} value={4}>Entregue</option>
                        </select>
                      </div>
                    </td>
                    <td className="code" key={`${String(order.id)}.id`}>
                      {order.id}
                    </td>
                    <td className="items" key={`${String(order.id)}.its`}>
                      {order.items.map((item, index) =>
                        index === order.items.length - 1 ? (
                          <span key={String(`it.${index}`)}>
                            {item.quantity} x {item.name}
                          </span>
                        ) : (
                          <span key={String(`it.${index}`)}>
                            {item.quantity} x {item.name},{" "}
                          </span>
                        )
                      )}
                    </td>
                    <td className="datetime" key={`${String(order.id)}.dt`}>
                      {order.updated_at}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Main>
      <Footer />
    </Container>
  );
}
