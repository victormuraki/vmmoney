import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg"
import income from "../../assets/income.svg"
import outcome from "../../assets/outcome.svg"
import { useState } from "react";

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClone: () => void;
}

export function NewTransaction({isOpen, onRequestClone}:NewTransactionModalProps) {

  const [type, setType] = useState('deposit');

    return(
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClone}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <button type="button">
          <img src={closeImg}
          onClick={onRequestClone}
          alt="Fechar modal" 
          className="react-modal-close"
          />
        </button>

        <Container>
          <h2>Cadastrar Transação</h2>

          <input placeholder="Titulo" />
          
          <input placeholder="valor" 
          type="number"/>
          
          <TransactionTypeContainer>
            <RadioBox
            type="button"
            onClick={() => {setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
            >
              <img src={income} alt="Entrada" />
              <span>Entrada</span>
            </RadioBox>

            <RadioBox
            type="button"
            onClick={() => {setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
            >
              <img src={outcome} alt="Saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>

          <input placeholder="Categoria" />
          
          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
    )
}