import ReactGA from 'react-ga'

interface IParams {
  category: string
  action: 'click' | 'search'
  label: string
}

export const trackEvent = (params: IParams): void => {
  try {
    ReactGA.event(params)
  } catch (error) {
    // console.log(error)
  }
}
