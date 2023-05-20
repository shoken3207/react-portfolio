import React from 'react';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const SkillItem = ({ name, level }) => {
  return (
    <tr>
      <th>{name}</th>
      <td>
        <Rating
          name='text-feedback'
          value={level}
          readOnly
          precision={0.5}
          emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize='inherit' />}
        />
      </td>
    </tr>
  );
};

export default SkillItem;
