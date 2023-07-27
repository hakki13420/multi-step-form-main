

const SideBarItem = ({id, step, stepNumber,title, description}) => {
  
  return (
    <div className="sideBarItem">
        <div className={(step===id || (step===5 && step===id+1))?'left active':'left inactive'}>{stepNumber}</div>
        <div className="right">
            <p className="step-name">{title}</p>
            <p className="step-desc">{description}</p>
        </div>

    </div>
  )
}

export default SideBarItem