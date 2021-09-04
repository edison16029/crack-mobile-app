import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const diagonal = Math.sqrt(height * height + width * width);

const scale = size => {
    return diagonal / 800 * size;
}
    
const scaleResponsively = (size, factor = 0.75) => {
    return size + (scale(size) - size) * factor;
}

export {
    scale,
    scaleResponsively
}