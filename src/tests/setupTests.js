import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Dotenv from 'dotenv';

enzyme.configure({ adapter: new Adapter() });
Dotenv.config({ path: '.env.test'})