import { User } from "./User";
import { Company } from "./Company";
import { Maps } from "./Maps";

const user = new User();
const company = new Company();
const maps = new Maps('map');

maps.addUserMarker(user);
maps.addCompanyMarker(company);