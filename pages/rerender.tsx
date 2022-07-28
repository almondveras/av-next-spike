import { useEffect, useRef, useState } from "react"

const RerenderPage = () => {
  const [aState, setAState] = useState('')
  const [anotherState, setAnotherState] = useState('')
  const renderCount = useRef(1);

  const handleClick = () => {
    setAState('new')
    setAnotherState('new')
  }

  useEffect(() => {
    // Render count change does not cause rerender as a state change.
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <h2>Welcome to Concurrent React!</h2>
      <h5>I rendered {renderCount.current} times!</h5>
      <button onClick={handleClick}>
        Click me to update state!
      </button>
    </div>
  )
}

export default RerenderPage