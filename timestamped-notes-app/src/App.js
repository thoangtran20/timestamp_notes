import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router'
import './App.css'
import Detail from './components/detail/Detail'
import MainContent from './components/main-content/MainContent'
import { localStorageKey, ROUTE } from './const'
import {
  getTimestampList,
  setTimestampList,
} from './redux/slice/timestampSlice'
import { localStorageUtil } from './utils'

// const { set, get } = localStorageUtil(localStorageKey.timestampedItems, [])

function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   const oldList = JSON.parse(get())
  //   set([...oldList])
  //   dispatch(getTimestampList())
  // }, [])
  return (
    <div className="App">
      {/* <Routes>
        <Route
          path={`${ROUTE.detail}/:id`}
          element={<MainContent content={<Detail />} />}
        />
      </Routes> */}
      <MainContent />
    </div>
  )
}

export default App
