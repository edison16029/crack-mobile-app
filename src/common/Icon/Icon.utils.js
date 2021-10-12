import Cog from '../../../assets/icons/Cog.svg';
import Close from '../../../assets/icons/Close.svg';
import Tick from '../../../assets/icons/Tick.svg';
import Logo from '../../../assets/icons/Logo.svg';
import QuestionMark from '../../../assets/icons/QuestionMark.svg';
import Flag from '../../../assets/icons/Flag.svg';

const getIconComponent = (name) => {
    const appIcons = {
        'cog': Cog,
        'close': Close,
        'tick': Tick,
        'logo': Logo,
        'question_mark': QuestionMark,
        'flag': Flag
    }
    return appIcons[name];
}

export { getIconComponent };