import React from 'react'
import { useSuiContext } from '../context/SuiContext'

export default function DeploymentHistory() {
  const { wallet } = useSuiContext()
  // TODO: fetch deployments from Sui chain

  return (
    <section className="bg-white rounded shadow p-4">
      <h2 className="text-lg font-semibold mb-2">Deployment History</h2>
      {wallet ? (
        <ul className="list-disc ml-4">
          {/* TODO: Map deployments */}
          <li className="text-gray-500">No deployments yet.</li>
        </ul>
      ) : (
        <p className="text-gray-500">Connect your wallet to view deployments.</p>
      )}
    </section>
  )
}