import Cog from '../../../assets/icons/Cog.svg';

const getIconComponent = (name) => {
    const appIcons = {
        'cog': Cog
    }
    return appIcons[name];
}

export { getIconComponent };