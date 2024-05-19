import React from 'react';

const GenerateAvatar = ({ profile, width, height, fontSize, borderRadius }) => {
  if (!profile || !profile.first_name || !profile.last_name) {
    return null; // Return null if profile is undefined or missing required properties
  }



  const initials = profile.first_name.charAt(0).toUpperCase() + profile.last_name.charAt(0).toUpperCase();

  return (
    <div
      className='custom-avatar'
      style={{
        width: width ? width : '50px',
        height: height ? height : '50px',
        fontSize: fontSize ? fontSize : '20px',
        borderRadius: borderRadius ? borderRadius : '50%',
      }}
    >
      {initials}
    </div>
  );
};

export default GenerateAvatar;
