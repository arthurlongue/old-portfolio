import "./MouseScroll.sass"

export default function MouseScroll() {
  return (
    <div id="mouse-scroll">
      <div className="mouse">
        <div className="mouse-in"></div>
      </div>
      <span className="down-arrow-1"></span>
      <span className="down-arrow-2"></span>
      <span className="down-arrow-3"></span>
    </div>
  )
}
