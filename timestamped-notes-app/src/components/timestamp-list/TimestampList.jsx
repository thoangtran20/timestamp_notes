import { useDispatch, useSelector } from 'react-redux'
import './style.scss'
import Detail from '../detail/Detail'
import { deleteTimestampList } from '../../redux/slice/timestampSlice'
import { useNavigate } from 'react-router'
import { ROUTE } from '../../const'

function TimestampList(props) {
  const timestampList = useSelector((state) => state.timestampListReducer.data)
  console.log(timestampList)
  const dispatch = useDispatch()

  const handleDelete = (e, index) => {
    e.preventDefault()
    dispatch(deleteTimestampList(index))
  }

  const navigate = useNavigate()

  const gotoDetail = () => {
    navigate(`${ROUTE.detail}/${props.id}`, {
      replace: true,
      state: props.title,
    })
  }

  const date = new Date()
  return (
    <div className="TimestampList">
      {timestampList?.map((item, index) => {
        return (
          <div>
            <div className="list-content">
              <div className="title">{item?.title}</div>
              <div className="action">
                <div className="recored">Recored: {date.toUTCString()}</div>
                <div className="view">
                  <div className="show" onClick={gotoDetail}>
                    (Show Details)
                  </div>
                  <div
                    className="remove"
                    onClick={(e) => handleDelete(e, index)}
                  >
                    (Remove Note)
                  </div>
                </div>
              </div>
              <hr className="strike-child" />
              <Detail />
            </div>
          </div>
        )
      })}
      <div></div>
    </div>
  )

  // <div>
  //    <div className="title">
  //     ReactJS
  //   </div>
  //   <div className="action">
  //     <div className="recored">Recored: Sun Mar 11 2018 18:47:45</div>
  //     <div className="">
  //       <div className="show">(Show Details)</div>
  //       <div className="remove">(Remove Note)</div>
  //     </div>
  //   </div>
  // </div>
}

export default TimestampList
