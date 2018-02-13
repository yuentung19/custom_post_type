const {connect} = window['react-redux'];
const {bindActionCreators} = window.redux;

import PostTypeTest from './post_type_test.jsx';

function mapStateToProps(state, ownProps) {
    return {
        ...ownProps
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTypeTest);
