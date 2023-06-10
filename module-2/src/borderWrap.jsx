import react from 'react';

const BorderWrap = ({children}) => {
   const borderStyle = {
        border: '3px solid silver',
        padding: 6 };
      return (
        <div style={borderStyle}>
          {children}
        </div>
      );
  }

  export default BorderWrap;