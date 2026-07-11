import React from 'react';
import { useFavorite } from '../utils/favorites';
import './FavoriteStar.css';

// A self-contained favorite toggle. `tone` controls contrast:
//  - 'light'  : for use on dark/gradient slides (translucent white)
//  - 'solid'  : for use on light cards (surface chip)
const FavoriteStar = ({ id, tone = 'solid', size = 'md', className = '', ariaLabel }) => {
  const [on, toggle] = useFavorite(id);
  const label = ariaLabel || (on ? 'Remove from favorites' : 'Add to favorites');
  return (
    <button
      type="button"
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggle(); }}
      className={`fav-star ${tone} ${size} ${on ? 'on' : ''} ${className}`}
      aria-pressed={on}
      aria-label={label}
      title={label}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        <path
          d="M12 2.6l2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 16.9 6.6 19.2l1.2-6L3.3 9l6.1-.8z"
          fill={on ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default FavoriteStar;