import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header/index';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransaction } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

export function App() {
  const [isNewTransactionIsOpen, setIsNewTransactionIsOpen] = useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionIsOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionIsOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransaction
        isOpen={isNewTransactionIsOpen}
        onRequestClone={handleCloseTransactionModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}