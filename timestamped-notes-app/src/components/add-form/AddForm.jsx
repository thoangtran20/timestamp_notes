import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { localStorageKey } from '../../const'
import {
  addTimestampList,
  getTimestampList,
  setTimestampList,
} from '../../redux/slice/timestampSlice'
import { localStorageUtil } from '../../utils'
import './style.scss'

function AddForm(props) {
  const { set, get } = localStorageUtil(localStorageKey.timestampedItems, [])
  const [title, setTitle] = useState()

  const dispatch = useDispatch()
  // const data = useSelector((state) => state.timestampListReducer.data)

  const [detail, setDetail] = useState()

  const validate = () => {
    if (!title) {
      alert('Bạn chưa nhập tiêu đề')
      return false
    }
    if (!detail) {
      alert('Bạn chưa nhập chi tiết')
      return false
    }
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) {
      return
    }
    validate()
    const newTask = {
      title,
      detail,
      id: uuidv4(),
    }
    const oldList = JSON.parse(get())
    set([newTask, ...oldList])
    dispatch(addTimestampList(newTask))
    // dispatch(getTimestampList())
  }

  return (
    <div className="AddForm">
      <div className="form-content">
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          placeholder="Note Title"
          className="form-title"
          id="title"
        />
      </div>
      <div className="form-content">
        <input
          type="text"
          onChange={(e) => {
            setDetail(e.target.value)
          }}
          placeholder="Note Details"
          className="form-detail"
          id="detail"
        />
      </div>
      <button onClick={handleSubmit} className="btn-add">
        Add Note
      </button>
    </div>
  )
}

export default AddForm
