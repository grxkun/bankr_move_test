import React from 'react'
import { useSuiContext } from '../context/SuiContext'

export default function TransactionHistory() {
  const { wallet } = useSuiContext()
  // TODO: fetch transactions from Sui chain

  return (
    <section className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Transaction History</h2>
      {wallet ? (
        <ul className="list-disc ml-4">
          {/* TODO: Map transactions */}
          <li className="text-gray-500">No transactions yet.</li>
        </ul>
      ) : (
        <p className="text-gray-500">Connect your wallet to view transactions.</p>
      )}
    </section>
  )
}