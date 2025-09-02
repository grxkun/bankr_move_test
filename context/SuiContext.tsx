import React, { createContext, useContext, useState } from 'react'

export type WalletInfo = {
  address: string
  provider: string
}

type SuiContextType = {
  wallet: WalletInfo | null
  setWallet: (wallet: WalletInfo | null) => void
}

const SuiContext = createContext<SuiContextType | undefined>(undefined)

export const SuiProvider = ({ children }: { children: React.ReactNode }) => {
  const [wallet, setWallet] = useState<WalletInfo | null>(null)
  return (
    <SuiContext.Provider value={{ wallet, setWallet }}>
      {children}
    </SuiContext.Provider>
  )
}

export function useSuiContext() {
  const context = useContext(SuiContext)
  if (!context) throw new Error('useSuiContext must be used within SuiProvider')
  return context
}