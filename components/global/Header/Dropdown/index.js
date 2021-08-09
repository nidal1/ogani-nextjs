const DropDown = ({ children }) => {
    return (

        <div className="list-group" id="list-tab" role="tablist" style={{
            width: '400px',
            right: '0',
            top: '100%',
            position: 'absolute',
            zIndex: '10',
            textAlign: 'left'
        }}>
            {children}
        </div>
    );
}

export default DropDown;