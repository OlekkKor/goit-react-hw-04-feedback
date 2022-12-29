import PropTypes from 'prop-types';


export const Statistic = ({ good, neutral, bad, total, positivePercentage}) => {
    
    return (
        <>
        <h2> Statistic </h2>

        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        {total > 0 && (  <p>Positive feedback: {positivePercentage} %</p> 
      )}
        </>
    ); 
}


Statistic.propTypes = {
    props:  PropTypes.objectOf(PropTypes.string),
}