import AddForm from '../add-form/AddForm'
import TimestampList from '../timestamp-list/TimestampList'
import './style.scss'

function MainContent() {
  return (
    <div className="MainContent">
      <h1 className="main-header">Timestamped notes app</h1>
      <div className="main-body">
        <AddForm />
        <hr className="strike" />
        <TimestampList />
      </div>
    </div>
  )
}

export default MainContent
