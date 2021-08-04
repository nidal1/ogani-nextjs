
import Sidebar from './Sidebar';
import Header from './Header'

const Base = ({ Children }) => {
    return (
        <>
            <Sidebar />
            <Header />
            {Children}
        </>
    );
};
export default Base;