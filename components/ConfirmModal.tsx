import React from 'react'

interface Props {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
  children: React.ReactNode
}

export default function ConfirmModal({ open, onConfirm, onCancel, children }: Props) {
  if (!open) return null
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg min-w-[300px]">
        <div className="mb-4">{children}</div>
        <div className="flex justify-end gap-2">
          <button className="btn" onClick={onCancel}>Cancel</button>
          <button className="btn btn-primary" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  )
}