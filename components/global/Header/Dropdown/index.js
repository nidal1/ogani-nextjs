const DropDown = ({ children, width }) => {
    return (

        <div className="list-group" id="list-tab" role="tablist" style={{
            width: width,
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