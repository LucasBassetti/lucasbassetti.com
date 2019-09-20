interface IPublication {
  authors: string
  conference: string
  title: string
  url: string
}

export const publicationList: IPublication[] = [
  {
    authors:
      'AZEVEDO, DETONI, Archimedes A.; FONSECA, Lucas B. R.; ALMEIDA, João Paulo A.; FALBO, Ricardo de A..',
    conference: 'iSys, 2018.',
    title:
      'Uma Ontologia de Referência para Autorização Orçamentária e Execução da Despesa Pública',
    url:
      '/assets/pdf/Uma_Ontologia_de_Referencia_para_Autorizacao_Orcamentaria_e_Execucao_da_Despesa_Publica.pdf',
  },
  {
    authors:
      'FONSECA, Lucas B. R.; AZEVEDO, DETONI, Archimedes A.; ALMEIDA, João Paulo A.; FALBO, Ricardo de A.. ',
    conference: 'Ontobrás, 2016.',
    title:
      'Uma Proposta de Ontologia de Referência para Autorização Orçamentária e Execução da Despesa Pública',
    url:
      '/assets/pdf/Uma_Proposta_de_Ontologia_de_Referencia_para_Autorizacao_Orcamentaria_e_Execucao_da_Despesa_Publica.pdf',
  },
  {
    authors:
      'FONSECA, Lucas B. R.; AZEVEDO, Carlos L. B.; ALMEIDA, João Paulo A..',
    conference: 'LOD Brasil, p. 27-42, 2014.',
    title: 'Mapeando Dados Governamentais com uma Ontologia de Organizações',
    url:
      '/assets/pdf/Mapeando_Dados_Governamentais_com_uma_Ontologia_de_Organizacoes.pdf',
  },
]
