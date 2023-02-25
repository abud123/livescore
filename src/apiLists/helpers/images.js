import logo_8982001 from '../../images/logo_8982001.png'
import logo_8982002 from '../../images/logo_8982002.png'
import logo_8982003 from '../../images/logo_8982003.png'
import logo_8982004 from '../../images/logo_8982004.png'
import logo_8982005 from '../../images/logo_8982005.png'
import logo_8982006 from '../../images/logo_8982006.png'
import logo_8982007 from '../../images/logo_8982007.png'
import logo_8982008 from '../../images/logo_8982008.png'
import logo_8982009 from '../../images/logo_8982009.png'
import logo_8982010 from '../../images/logo_8982010.png'
import logo_8982011 from '../../images/logo_8982011.png'
import logo_8982012 from '../../images/logo_8982012.png'
import logo_8982013 from '../../images/logo_8982013.png'
import logo_8982014 from '../../images/logo_8982014.png'
import logo_8982015 from '../../images/logo_8982015.png'
import logo_8982016 from '../../images/logo_8982016.png'

const imageTeamMap =  {
    "8982001": logo_8982001,
    "8982002": logo_8982002,
    "8982003": logo_8982003,
    "8982004": logo_8982004,
    "8982005": logo_8982005,
    "8982006": logo_8982006,
    "8982007": logo_8982007,
    "8982008": logo_8982008,
    "8982009": logo_8982009,
    "8982010": logo_8982010,
    "8982011": logo_8982011,
    "8982012": logo_8982012,
    "8982013": logo_8982013,
    "8982014": logo_8982014,
    "8982015": logo_8982015,
    "8982016": logo_8982016,
}

export const loadImgByTeamId = (teamId) => {

return imageTeamMap[teamId]
}