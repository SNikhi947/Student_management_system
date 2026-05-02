import './First.css'

function First({ onImageClick }) {
  return (
    <div className="landing">
      <h1>Welcome To Student Management System</h1>

      <img
        src="https://img.freepik.com/premium-vector/back-school-illustration_1302918-33836.jpg"
        alt="students"
        className="landing-img"
        onClick={onImageClick}
      />
    </div>
  )
}

export default First