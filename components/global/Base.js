
import Sidebar from './Sidebar';
import Header from './Header'

const Base = ({ children }) => {
    return (
        <>
            <Sidebar />
            <Header />
            {children}
        </>
    );
};
export default Base;