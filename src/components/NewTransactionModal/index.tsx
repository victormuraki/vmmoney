import Modal from "react-modal";
import { Container } from "../TransactionTable/styles";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClone: () => void;
}

export function NewTransaction({isOpen, onRequestClone}:NewTransactionModalProps) {

    return(
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClone}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <Container>
          <h2>Cadastrar Transação</h2>

          <input placeholder="Titulo" />
          
          <input placeholder="valor" 
          type="number"/>
          
          <input placeholder="Categoria" />
          
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )
}