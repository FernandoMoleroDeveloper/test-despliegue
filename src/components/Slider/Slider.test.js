import { render } from '@testing-library/react';
import Slider from './Slider';

const images = [
  {
    src: 'https://via.placeholder.com/800x300/FF0000/FFFFFF',
    alt: 'Imagen 1',
    title: 'Título de la imagen 1',
    description: 'Descripción de la imagen 1',
  },
  {
    src: 'https://via.placeholder.com/800x300/00FF00/FFFFFF',
    alt: 'Imagen 2',
    title: 'Título de la imagen 2',
    description: 'Descripción de la imagen 2',
  },
  {
    src: 'https://via.placeholder.com/800x300/0000FF/FFFFFF',
    alt: 'Imagen 3',
    title: 'Título de la imagen 3',
    description: 'Descripción de la imagen 3',
  },
];
describe('Slider component', () => {
  let component;

  beforeEach(() => {
    component = render(<Slider images={images} />);
  });

  test('renders without crashing', () => {
    component = render(<Slider images={images} />);
  });

  test('displays the first image on initial render', () => {
    expect(component.container).toHaveTextContent('Título de la imagen 1');
  });

  test('changes the displayed image when the "Siguiente" button is clicked', () => {
    // TODO
  });

  test('changes the displayed image when the "Anterior" button is clicked', () => {
    // TODO
  });

  test('displays images with the correct src', () => {
    // TODO
  });
});
