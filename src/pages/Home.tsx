import { useEffect, FC } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AppDispatch } from '../store'
import { fetchAlbums, loadMoreAlbums } from '../store/albums/actions'
import { useTypedSelector } from '../app/hooks/useTypedSelector'
import { IAlbum } from '../app/interfaces/album'
import AlbumItem from '../components/AlbumItem'


const HomePage = styled.div`
  width: 100%;
  margin: 30px auto;
`

const H2 = styled.h2`
  font-size: 45px;
  font-weight: 600;
  font-family: Georgia;
  text-align: center;
`

const AlbumList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`

const NoData = styled.h4`
  color: red;
  text-align: center;
  margin-top: 80px;
`

const LoadMore = styled.span`
  width: 25px;
  height: 25px;
`

const LoadMoreButton = styled.button`
  width: 104px;
  height: 42px;
`


const Home:FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { albums, loading, limit, total } = useTypedSelector(state => state.albumsReducer)


  useEffect(():void => {
    dispatch(fetchAlbums(limit))
  }, [dispatch, limit])


  const handleLoadMore = ():void => {
    dispatch(loadMoreAlbums())
  }
  

  return (
    <HomePage>
      <H2>Albums</H2>
      
      <hr />

      {albums?.length ? (
        <>
          <AlbumList>
            {albums.map((album:IAlbum, idx: number) => {
              return <AlbumItem 
                key={album?.id} 
                album={album} 
                idx={idx + 1}
              />
            })}
          </AlbumList>

          {total !== limit ? (
            <LoadMoreButton 
              className="btn btn-primary shadow mt-4 mx-auto d-block"
              onClick={handleLoadMore}
              disabled={loading}
            >
              {loading 
                  ? <LoadMore className="spinner spinner-border text-info"></LoadMore> 
                  : 'Load More'
              }
            </LoadMoreButton>
          ) : null}
        </>
      ) : <NoData>No albums</NoData>}
    </HomePage>
  )
}


export default Home