import React from 'react';
import reducer from 'javascripts/reducers/ask-reducer';
import store from 'javascripts/store/store';
import AskItem from 'javascripts/modules/ask-item.jsx';
import {fetchSingleAsk, markQuestionAsReaded} from 'javascripts/actions/ask-actions';
import { connect } from "react-redux"
// import asks from "javascripts/asks";
import { bindActionCreators } from 'redux';

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class AskComponent extends React.Component {
  constructor( props ){
    super(props);
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  componentWillMount(){
    this.props.fetchSingleAsk();
    this.props.markQuestionAsReaded(); 
  }

  componentDidMount(){
    this.getQuestions();
  }

  getQuestions(){
    window.addEventListener('keypress',  () => {
      this.props.fetchSingleAsk();
      this.props.asks.length > 0 ? this.props.markQuestionAsReaded() : null
    });

    window.addEventListener('click',  () => {
      this.props.fetchSingleAsk();
      this.props.asks.length > 0 ? this.props.markQuestionAsReaded() : null
    });    
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  render(){
    return (
      <div className="ask-container">
        <h1>{this.props.currentQuestion && this.props.asks.length > 0 ? this.props.currentQuestion.ask : 'Thanks ;)'}</h1>
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
    markQuestionAsReaded: markQuestionAsReaded
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AskComponent);
