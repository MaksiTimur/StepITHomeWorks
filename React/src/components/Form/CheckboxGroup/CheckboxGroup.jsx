import Checkbox from '../Checkbox/Checkbox';

const CheckboxGroup = ({ name, children, checked, onChange }) => {
    return (
        <div>
            <p>{name}</p>
            {children.map((checkbox, index) => (
                <Checkbox
                    key={index}
                    label={checkbox.label}
                    checked={checked[index]}
                    onChange={() => onChange(index)}
                />
            ))}
        </div>
    );
};

export default CheckboxGroup;