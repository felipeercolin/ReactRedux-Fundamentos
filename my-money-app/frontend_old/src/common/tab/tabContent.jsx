import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import IF from '../operator/if';
//import { selectTab } from './tabActions';

class TabContent extends React.Component{
    render(){
        const selected = this.props.tab.selected === this.props.id;
        const visible = this.props.tab.visible[this.props.id];
        return (
           <IF test={visible}>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
           </IF>
        );
    };
}

const mapStateToProps = state => ({ tab: state.tab });
//const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch);
//export default connect(mapStateToProps, mapDispatchToProps)(TabContent);
export default connect(mapStateToProps)(TabContent);