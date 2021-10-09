import React from "react";

// Mot ham nhan vao 1 compoent va tra ve 1 component
const withData = (WrapperWithData) => {

    // Dinh nghia 1 class
    class WithData extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                data: [],
            }
        }
    
        componentDidMount() {
            // Lay du lieu tu json ve
            fetch(this.props.dataSourceUrl)
                .then(res => res.json())
                .then(data => this.setState({ data: data.slice(0, this.props.numberOfPosts) }))
        }

        render() {
            const {data} = this.state;
            return(
                <WrapperWithData data={data} {...this.props} />
            )
        }
    
    }   

    // Tra ve class
    return WithData;
}

export default withData;
