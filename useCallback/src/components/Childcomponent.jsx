import React from 'react'

const Childcomponent = React.memo(
  (props) => {
  console.log("child component go re-rendered again");
  return (
    <div>
<button>
 {props.btnName}
</button>
    </div>
  )
}
)

export default Childcomponent