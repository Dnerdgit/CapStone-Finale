import React, { useMemo } from 'react';
import PropTypes from "prop-types";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai'
import { useState } from 'react';

const Rate = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 0.5;

                return (
                    <label>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar 
                            className="star" 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                            size={20}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            >
                                {/* <FaStarHalfAlt className="star" 
                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                                    size={20}
                                    onMouseEnter={() => setHover(ratingValue)}
                                    onMouseLeave={() => setHover(null)}/> */}

                        </FaStar>
                    </label>
                );  
            })}
            
        </div>
    )
}


// const Rate = ({count, rating, color, onRating}) => {
//     const [hoverRating, setHoverRating] = useState(0);

//     const getColor = index => {
//         if (hoverRating >= index) {
//             return color.filled;
//         } else if (!hoverRating && rating >= index) {
//             return color.filled;
//         }
//         return color.unfilled;
//     }

//     const starRating = useMemo(() => {
//         return Array(count)
//                 .fill(0)
//                 .map((_, i) => i + 1)
//                 .map((idx) => (
//                     <FaStar
//                         key={idx}
//                         className="cursor-pointer"
//                         icon="star"
//                         onClick={() => onRating(idx)}
//                         style={{ color:getColor(idx) }}
//                         onMouseEnter={() => setHoverRating(idx)}
//                         onMouseLeave={() => setHoverRating(0)}
//                     />
//                 ));
//     }, [count, rating, hoverRating])


//     return (<div>{starRating}</div>);
// };

// Rate.propTypes = {
//     count: PropTypes.number, 
//     rating: PropTypes.number,
//     onChange: PropTypes.number,
//     color: {
//         filled: PropTypes.string,
//         unfilled: PropTypes.string,
//     },
// };

// Rate.defaultProps = {
//     count: 5, 
//     rating: 0,
//     color: {
//         filled: "#f5e3b3",
//         unfilled: "DCDCDC",
//     },
// };

export default Rate