import { useEffect } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

export function TransactionTable() {

    useEffect(() => {
        api.get('transactions')
            .then(response => console.log(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Sites</td>
                        <td className="deposit">R$12.000</td>
                        <td>Sites</td>
                        <td>10/05/22</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$-8.000</td>
                        <td>Casa</td>
                        <td>10/05/22</td>
                    </tr>
                </tbody>
            </table>

        </Container>
    )
}