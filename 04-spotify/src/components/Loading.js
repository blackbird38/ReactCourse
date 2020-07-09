import React from 'react';

const Loading = () => {
  return (
    <div className="ui ">
      <div className="ui active inverted dimmer sixteen wide column loading">
        <div className="ui text active loader">Preparing...</div>
      </div>
    </div>
  );
};

export default Loading;
