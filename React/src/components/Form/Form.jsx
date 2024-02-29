import { useState } from 'react';
import CheckboxGroup from './CheckboxGroup/CheckboxGroup';
import './Form.css';

const Form = ({ checkboxesData }) => {
    const [checkboxesValues, setCheckboxesValues] = useState(() => {

        return checkboxesData.map(group =>
            group.children.map(checkbox => checkbox.value)
        );
    });

    const isFormValid = () => {
        return checkboxesValues.every((group, index) => {
            const validCount = checkboxesValues[index].filter(value => value).length;

            const { min, max } = checkboxesData[index];

            return validCount >= min && validCount <= max;
        });
    };

    const handleChange = (groupIndex, checkboxIndex) => {
        setCheckboxesValues(prevState => {
            return prevState.map((group, index) => {
                if (index !== groupIndex) return group;

                return group.map((value, id) => (id === checkboxIndex ? !value : value));
            });
        });
    };

    return (
        <form className={isFormValid() ? 'valid' : 'invalid'}>
            {checkboxesData.map((group, index) => (
                <CheckboxGroup
                    onChange={checkboxIndex => handleChange(index, checkboxIndex)}
                    name={group.name}
                    children={group.children}
                    checked={checkboxesValues[index]}
                    key={index}
                />
            ))}
        </form>
    );
};

export default Form;