import Form from './components/Form/Form';
import './App.css';

const checkboxesData = [
  {
    name: 'Checkboxes1',
    min: 1,
    max: 2,
    children: [
      { label: 'Checkbox1', value: false },
      { label: 'Checkbox2', value: false },
    ],
  },
  {
    name: 'Checkboxes2',
    min: 2,
    max: 4,
    children: [
      { label: 'Checkbox1', value: false },
      { label: 'Checkbox2', value: true },
      { label: 'Checkbox3', value: true },
      { label: 'Checkbox4', value: false },
    ],
  },

  {
    name: 'Checkboxes3',
    min: 1,
    max: 1,
    children: [
      { label: 'Checkbox1', value: true },
      { label: 'Checkbox2', value: false },
      { label: 'Checkbox3', value: true },
    ],
  },
];

const App = () => {
  return (
    <Form checkboxesData={checkboxesData} />
  );
}

export default App;