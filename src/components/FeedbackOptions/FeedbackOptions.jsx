import PropTypes from 'prop-types';

import css from './FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {

      
        const elements = Object.keys(options);
         return (

             <div className={css.buttonGroup}>
              {elements.map(el => {
                return (
                  <button className = {css.button} type="submit" key={el} onClick={() => onLeaveFeedback(el)}>
                    {el}
                  </button>
                );
              })}
            </div>
        );
      }




FeedbackOptions.propTypes = {
    options: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };