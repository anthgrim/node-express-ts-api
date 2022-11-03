import { Visibility, Weather, NewDiaryEntry } from '../types'

const parseComment = (comment: any): string => {
  if (!isString(comment)) {
    throw new Error('Incorrect or missing comment')
  }
  return comment
}

const parseDate = (date: any): string => {
  if (!isDate(date) || !isString(date)) {
    throw new Error('Incorrect Type. Date must be date')
  }
  return date
}

const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error('Incorrect or missing weather')
  }
  return weather
}

const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error('Incorrect visitibility type')
  }
  return visibility
}

const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isString = (valueFromRequest: any): boolean => {
  return typeof valueFromRequest === 'string' || valueFromRequest instanceof String
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object?.comment),
    date: parseDate(object?.date),
    weather: parseWeather(object?.weather),
    visibility: parseVisibility(object?.visibility)
  }

  return newEntry
}
