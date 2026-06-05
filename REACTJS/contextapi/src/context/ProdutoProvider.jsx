import { createContext, useState } from "react"

export const ProdutoContext = createContext()

const ProdutoProvider = ({ children }) => {
  const [produto, setProduto] = useState(null)

  return (
    <ProdutoContext.Provider value={{ produto, setProduto }}>
      {children}
    </ProdutoContext.Provider>
  )
}

export default ProdutoProvider
