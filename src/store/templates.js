import {create} from 'zustand'

const useTemplatesStore = create((set) => ({
  templates: [],
  AddTemplate: (template)=>{set((state)=>[template,...state.templates])},
  RemoveTemplate: (id) => set((state) => ({
    templates: state.templates.filter(template => template.id !== id)
  })),
  UpdateTemplate: (updatedTemplate) => set((state) => ({
    templates: state.templates.map(template =>
      template.id === updatedTemplate.id ? updatedTemplate : template
    )
  })),
  
  // Optionally update templates state here 
  }))

export default useTemplatesStore;