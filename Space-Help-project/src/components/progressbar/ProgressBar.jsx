import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
   progress[value] {
    widrh: ${props => props.width};

    -webkit-appearance: none;
   appearance: none;
    }
   
   progress[value]::-webkit-progress-bar {
   hight: 10px;
   border-radius: 20px;
   border: var(--spaceblue) 2px solid;
   background-color: var(--spacewhite);
   }

   progress[value]::-webkit-progress-value {
   hight: 10px;
   border-radius: 20px;
   background-color: ${props => props.color}; `;

const ProgressBar = ({value, max, color, width}) => {
    return (
        <Container color={color} width={width}>
        <progress value={value} max={max}></progress>
        </Container >
    )

};

ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number, 
    color: PropTypes.string,
    width: PropTypes.string
};

export default ProgressBar