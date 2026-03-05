import { faArrowUpRightFromSquare,faCircleInfo,faDownload,faFile,faFileArrowDown,faFileLines,faHouse, faInfo,faLocationDot,faQuestion,faQuestionCircle, faSquare } from '@fortawesome/free-solid-svg-icons';  
import {
  faQuestionCircle as regularFaQuestionCircle,
  faFile as regularFaFile,
  faFileLines as regularFaFileLines,
} from '@fortawesome/free-regular-svg-icons';
import { faGithub,faLinkedin,faLinkedinIn, faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';

export const fontaIcons = {
  solid: {
    faArrowUpRightFromSquare,
    faCircleInfo,
    faHouse,
    faInfo, 
    faSquare,
    faLocationDot, 
    faFile, 
    faFileArrowDown, 
    faDownload, 
    faFileLines
  },
  regular: {
    'faQuestionCircle':regularFaQuestionCircle, 
    'faFile':regularFaFile,
    'faFileLines':regularFaFileLines
  },
  brands: {
    faGithub,
    faLinkedin,
    faLinkedinIn,
    faSquareLinkedin
  }, 
};  
