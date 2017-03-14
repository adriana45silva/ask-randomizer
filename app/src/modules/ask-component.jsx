import React from 'react';
import reducer from 'javascripts/reducers/ask-reducer';
import store from 'javascripts/store/store';
import AskItem from 'javascripts/modules/ask-item.jsx';
import {fetchSingleAsk, markQuestionAsReaded, getFilteredAsks} from 'javascripts/actions/ask-actions';
import { connect } from "react-redux"
// import asks from "javascripts/asks";
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class AskComponent extends React.Component {
  constructor( props ){
    super(props);
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  componentWillMount(){
    this.props.getFilteredAsks();
    // this.props.markQuestionAsReaded(); 
  }

  componentDidMount(){
    this.getQuestions();
  }

  getQuestions(){
    window.addEventListener('keypress',  () => {
      this.props.getFilteredAsks();
      // this.props.asks.length > 0 ? this.props.markQuestionAsReaded() : null
    });

    window.addEventListener('click',  () => {
      this.props.getFilteredAsks();
      // this.props.asks.length > 0 ? this.props.markQuestionAsReaded() : null
    });    
  }

  renderQuestions (item){
    return (
      <ReactCSSTransitionGroup 
        component="div"
        transitionName="ask" 
        transitionEnter={true}
        transitionAppearTimeout={500}          
        transitionEnterTimeout={500} 
        transitionLeaveTimeout={500}
      >
      {
        this.props.currentQuestion && this.props.asks.length > 0 ? <h1 key={this.props.asks.length}>{item}</h1> : <h1 key={this.props.asks.length}>Thanks ;)</h1>
      }
      </ReactCSSTransitionGroup>    
    )
  }




  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render(){
    return (
      <div className="ask-container">
        {
          this.props.currentQuestion ? this.renderQuestions(this.props.currentQuestion.ask) : null
        }
      </div>
    );
  }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const mapStateToProps = (state) => {
  return {
    currentQuestion: state.askReducer.currentQuestion,
    asks: state.askReducer.asks
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchSingleAsk: fetchSingleAsk,
    markQuestionAsReaded: markQuestionAsReaded,
    getFilteredAsks: getFilteredAsks
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AskComponent);
