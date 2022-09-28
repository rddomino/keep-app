import { createContext, useState, FC } from 'react'
import { INote } from '../../types'

export type ContextType = {
    notes: INote[]
    setNotes: React.Dispatch<React.SetStateAction<INote[]>>
    archiveNotes: INote[]
    setArchiveNotes: React.Dispatch<React.SetStateAction<INote[]>>
    deleteNotes: INote[]
    setDeleteNotes: React.Dispatch<React.SetStateAction<INote[]>>
    filterNotes: INote[]
    setFilterNotes: React.Dispatch<React.SetStateAction<INote[]>>
    formOpen: boolean
    setFormOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const defaultState = {
    notes: [],
    setNotes: () => [],
    archiveNotes: [],
    setArchiveNotes: () => [],
    deleteNotes: [],
    setDeleteNotes: () => [],
    filterNotes: [],
    setFilterNotes: () => [],
    formOpen: true,
    setFormOpen: () => [],
}

export const DataContext = createContext<ContextType>(defaultState)

interface IDataProvider {
    children: React.ReactNode
}

const DataProvider: FC<IDataProvider> = ({ children }) => {
    const [notes, setNotes] = useState<INote[]>([])
    const [archiveNotes, setArchiveNotes] = useState<INote[]>([])
    const [deleteNotes, setDeleteNotes] = useState<INote[]>([])
    const [filterNotes, setFilterNotes] = useState<INote[]>([])
    const [formOpen, setFormOpen] = useState<boolean>(true)

    return (
        <DataContext.Provider value={{
            notes,
            setNotes,
            archiveNotes,
            setArchiveNotes,
            deleteNotes,
            setDeleteNotes,
            filterNotes,
            setFilterNotes,
            formOpen,
            setFormOpen,
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider