import { FETCH_ALBUM_PHOTOS_FAILED, FETCH_ALBUM_PHOTOS_SUCCEDDED, START_FETCHING_ALBUM_PHOTOS } from "../types"


const initialState = {
  photos: [],
  loading: false
}


const AlbumReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case START_FETCHING_ALBUM_PHOTOS:
      return {
        ...state,
        loading: true
      }

    case FETCH_ALBUM_PHOTOS_SUCCEDDED:
      return {
        photos: payload,
        loading: false
      }

    case FETCH_ALBUM_PHOTOS_FAILED:
      return {
        photos: [],
        loading: false
      }

    default:
      return state
  }
}


export default AlbumReducer