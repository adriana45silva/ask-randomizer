import React from 'react';
import reducer from 'javascripts/reducers/ask-reducer';
import store from 'javascripts/store/store';
import AskItem from 'javascripts/modules/ask-item.jsx';
import {fetchSingleAsk, markQuestionAsReaded} from 'javascripts/actions/ask-actions';
import { connect } from "react-redux"
// import asks from "javascripts/asks";
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import createFragment from 'react-addons-create-fragment' // ES6
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

class AskComponent extends React.Component {
  constructor( props ){
    super(props);
  }

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  componentWillMount(){
    this.props.fetchSingleAsk();
    this.props.markQuestionAsReaded(); 

    console.log(this.props)
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
    markQuestionAsReaded: markQuestionAsReaded
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AskComponent);
