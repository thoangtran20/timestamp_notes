import { useSelector } from 'react-redux'
import './style.scss'

function Detail(props) {
  const data = useSelector((state) => state.timestampListReducer.data)
  console.log(data)

  return (
    <div className="Detail">
      {data?.map((item) => {
        return <p className="description">Details: {item?.detail}</p>
      })}
      {/* <p className="description">Details: {props.detail}</p> */}
    </div>
  )
}

export default Detail
