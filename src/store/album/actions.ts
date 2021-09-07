import { TYPES } from "../types"
import { IPhoto } from '../../app/interfaces/photo'
import { IAction, ID } from "../../app/interfaces"
const {
  FETCH_ALBUM_PHOTOS_FAILED, FETCH_ALBUM_PHOTOS_SUCCEDDED, 
  START_FETCHING_ALBUM_PHOTOS, FETCH_ALBUM_PHOTOS
} = TYPES


export const fetchAlbumPhotos = (albumId: ID):IAction<typeof FETCH_ALBUM_PHOTOS> => ({ type: FETCH_ALBUM_PHOTOS, payload: { albumId }})

export const startFetchingAlbumPhotos = ():IAction<typeof START_FETCHING_ALBUM_PHOTOS> => ({ type: START_FETCHING_ALBUM_PHOTOS })

export const fetchAlbumPhotosSuccedded = (photos:IPhoto[]):IAction<typeof FETCH_ALBUM_PHOTOS_SUCCEDDED> => ({ type: FETCH_ALBUM_PHOTOS_SUCCEDDED, payload: photos })

export const fetchAlbumPhotosFailed = ():IAction<typeof FETCH_ALBUM_PHOTOS_FAILED> => ({ type: FETCH_ALBUM_PHOTOS_FAILED })