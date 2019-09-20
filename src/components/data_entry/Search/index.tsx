import React, { useState } from 'react'
import algoliasearch from 'algoliasearch/lite'
import { InstantSearch, SearchBox, Stats, Hits } from 'react-instantsearch-dom'
import { trackEvent } from '@utils/analytics'
import Hit from './Hit'
import * as S from './styled'

interface IAlgolia {
  appId: string
  searchOnlyApiKey: string
  indexName: string
}

interface ISearch {
  query: string
  page: number
}

const algolia: IAlgolia = {
  appId: process.env.GATSBY_ALGOLIA_APP_ID,
  searchOnlyApiKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
  indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
}

const searchClient = algoliasearch(algolia.appId, algolia.searchOnlyApiKey)

const Search = () => {
  const [searchState, setSearchState] = useState<ISearch>({
    query: '',
    page: 1,
  })

  const onSearchStateChange = (updatedSearchState: ISearch) => {
    setSearchState(updatedSearchState)

    trackEvent({
      category: 'Search',
      action: 'search',
      label: `Search - ${updatedSearchState.query}`,
    })
  }

  return (
    <S.SearchWrapper>
      <InstantSearch
        searchClient={searchClient}
        indexName={algolia.indexName}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange}
      >
        <SearchBox />
        <Stats />
        <Hits hitComponent={Hit} />
      </InstantSearch>
    </S.SearchWrapper>
  )
}

export default Search
