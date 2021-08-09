const DropDownItem = ({ source = 'https://via.placeholder.com/50', heading = 'Media heading', value = "customAlt", }) => {
    return (
        <a className="list-group-item list-group-item-action media" id="list-home-list" data-toggle="list" role="tab" href="#">
            <img src={source} className="mr-3" alt={value.toString()} />
            <div className="media-body">
                <h5 className="mt-0">{heading}</h5>

            </div>
            <button type="button" className="btn btn-success mr-1"><i className="fa fa-plus text-white"></i></button>
            <button type="button" className="btn btn-danger"><i className="fa fa-trash text-white"></i></button>

        </a>
    );
}

export default DropDownItem;