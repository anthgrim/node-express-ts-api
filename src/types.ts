export enum Weather {
  Sunny = 'sunny',
  Rainy = 'Rainy',
  Cloudy = 'cloudy',
  Stormy = 'stormy'
}

export enum Visibility {
  Great = 'great',
  Good = 'good',
  Ok = 'ok',
  Poor = 'poor'
}

export interface DiaryEntry {
  id: number | undefined
  date: string | undefined
  weather: Weather | undefined
  visibility: Visibility | undefined
  comment: string | undefined
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

export interface SpecialDiaryInterface extends DiaryEntry {
  flightNumber: number
}
