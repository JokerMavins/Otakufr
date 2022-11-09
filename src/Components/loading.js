import React from "react";
import ReactLoading from 'react-loading';

const Loading = () => {

  return (
    <div className="justify-center items-center flex">
        <ReactLoading type={"spinningBubbles"} color={"#ef4444"} height={'10%'} width={'10%'} />
    </div>
  )
}

export default Loading
